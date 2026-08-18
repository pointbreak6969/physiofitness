"use server";

import { getDb } from "@/lib/connectDb";
import { signSession, SESSION_COOKIE } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginState =
  | { status: "idle" }
  | { status: "error"; message: string };

export async function adminLogin(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { status: "error", message: "All fields are required." };
  }

  const db = await getDb();
  const admin = await db.collection("admins").findOne({ email });

  if (!admin) {
    return { status: "error", message: "Invalid email." };
  }

  if (admin.password !== password) {
    return { status: "error", message: "Invalid password." };
  }

  const token = await signSession({
    id: admin._id.toString(),
    email: admin.email,
    exp: Date.now() + 1000 * 60 * 60 * 8, // 8 hours
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin/dashboard");
}
