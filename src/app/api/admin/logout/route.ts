import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  return NextResponse.json({ ok: true });
}
