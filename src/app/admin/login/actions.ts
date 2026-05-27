"use server";

import { createClient } from "@/lib/supabase/server";
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

  const supabase = await createClient();
  const { data: admins, error } = await supabase
    .from("admin")
    .select("id, email, password")
    .eq("email", email)
    .limit(1);

  if (error || !admins || admins.length === 0) {
    return { status: "error", message: "Invalid email." };
  }

  const admin = admins[0];

  if (admin.password !== password) {
    return { status: "error", message: "Invalid password." };
  }

  const token = await signSession({
    id: admin.id,
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
