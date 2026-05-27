import { NextRequest, NextResponse } from "next/server";
import { verifySession, SESSION_COOKIE } from "@/lib/session";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith("/admin/dashboard")) {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token || !(await verifySession(token))) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Pass pathname to layouts via header
  const res = NextResponse.next();
  res.headers.set("x-pathname", pathname);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
