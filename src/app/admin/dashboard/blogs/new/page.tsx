import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, SESSION_COOKIE } from "@/lib/session";
import BlogForm from "../BlogForm";

export const dynamic = "force-dynamic";

export default async function NewBlogPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token || !(await verifySession(token))) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f7faf3]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link href="/admin/dashboard/blogs" className="text-sm text-brand-olive hover:underline">← Back to Blogs</Link>
          <h1 className="text-2xl font-bold text-brand-ink mt-1">Create New Blog</h1>
          <p className="text-sm text-muted-foreground mt-1">Write a new post — it will appear live on the blog page once published.</p>
        </div>
        <div className="bg-white border border-brand-line rounded-[16px] p-[26px_28px]">
          <BlogForm />
        </div>
      </main>
    </div>
  );
}
