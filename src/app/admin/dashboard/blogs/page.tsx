import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, SESSION_COOKIE } from "@/lib/session";
import { getBlogPosts } from "@/lib/blogs";
import LogoutButton from "../LogoutButton";
import BlogList from "./BlogList";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token || !(await verifySession(token))) {
    redirect("/admin/login");
  }

  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#f7faf3]">
      <header className="bg-white border-b border-border/60 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="w-8 h-8 rounded-lg bg-brand-blue grid place-items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </Link>
            <span className="font-semibold text-brand-ink">Physiofitness Admin</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/admin/dashboard" className="text-sm text-brand-olive hover:underline">← Back to Dashboard</Link>
            <h1 className="text-2xl font-bold text-brand-ink mt-1">Manage Blogs</h1>
            <p className="text-sm text-muted-foreground mt-1">Create, edit and delete your blog posts.</p>
          </div>
          <Link
            href="/admin/dashboard/blogs/new"
            className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
            New Blog
          </Link>
        </div>

        <BlogList posts={posts} />
      </main>
    </div>
  );
}
