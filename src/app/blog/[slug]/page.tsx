import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug } from "@/lib/blogs";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return {
    title: post ? `${post.title} — Physiofitness` : "Blog — Physiofitness",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-brand-paper py-[70px]">
        <div className="max-w-[820px] mx-auto px-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-[6px] text-brand-olive text-[13px] font-semibold mb-8 hover:opacity-80 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block bg-brand-paper text-brand-olive border border-brand-line rounded-[4px] px-[10px] py-[3px] text-[11px] font-semibold tracking-[0.04em]">{post.category}</span>
            <span className="text-brand-sage text-[12.5px]">{post.date}</span>
          </div>

          <h1 className="text-[34px] sm:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6">{post.title}</h1>

          <div className="border-t border-b border-brand-line py-6 mb-10">
            <p className="text-brand-sage text-[15px] leading-[1.7]">{post.excerpt}</p>
          </div>

          <article className="bg-white border border-brand-line rounded-[18px] p-[36px_34px] sm:p-[46px_44px]">
            <MarkdownRenderer markdown={post.body} />
          </article>
        </div>
      </section>
    </>
  );
}
