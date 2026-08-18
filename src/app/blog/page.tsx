import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import { getBlogPosts } from "@/lib/blogs";

export const dynamic = "force-dynamic";

const grad = "from-[#3a7a12] to-[#73c01a]";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const categories = [
    { name: "Blogs", count: posts.length },
    { name: "Uncategorized", count: posts.filter((p) => p.category === "Uncategorized").length },
  ];

  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <PageBanner title="Blog" crumb="Blog" />

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-14">
            {/* Main feed */}
            <div>
              {posts.map(({ title, slug, category, date, excerpt }) => (
                <article key={slug} className="border-b border-brand-line pb-9 mb-9 last:border-b-0 last:mb-0">
                  <Link href={`/blog/${slug}`} className="block">
                    <div className={`aspect-[16/9] rounded-[14px] overflow-hidden bg-gradient-to-br ${grad} relative mb-[22px]`}>
                      <span className="absolute inset-0 grid place-items-center text-brand-ink/35 text-[11px] tracking-[0.24em] uppercase">{category}</span>
                    </div>
                    <span className="inline-block bg-brand-paper text-brand-olive border border-brand-line rounded-[4px] px-[10px] py-[3px] text-[11px] font-semibold tracking-[0.04em] mb-3">{date}</span>
                    <h3 className="text-[22px] tracking-[-0.01em] leading-[1.25] mb-[10px] hover:text-brand-olive transition-colors">{title}</h3>
                    <p className="text-brand-sage text-[14px] mb-4">{excerpt}</p>
                  </Link>
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-[6px] bg-brand-blue text-white px-4 py-2 rounded-full text-[12px] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside>
              {/* Categories widget */}
              <div className="bg-white border border-brand-line rounded-[14px] overflow-hidden mb-7">
                <div className="bg-brand-ink text-white px-5 py-[14px] text-[13px] font-bold text-center">Categories</div>
                <div className="p-[16px_20px]">
                  {categories.map(({ name, count }) => (
                    <div key={name} className="flex justify-between items-center py-[10px] border-b border-dashed border-brand-line last:border-b-0 text-[13px]">
                      <span className="flex items-center gap-2">
                        <span className="w-[6px] h-[6px] rounded-full bg-brand-olive flex-shrink-0" />
                        {name}
                      </span>
                      <span className="text-brand-sage text-[12px]">({count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest posts widget */}
              <div className="bg-white border border-brand-line rounded-[14px] overflow-hidden mb-7">
                <div className="bg-brand-ink text-white px-5 py-[14px] text-[13px] font-bold text-center">Latest Posts</div>
                <div className="p-[16px_20px]">
                  {latestPosts.map(({ title, slug, date }) => (
                    <Link key={slug} href={`/blog/${slug}`} className="flex gap-3 py-[14px] border-b border-dashed border-brand-line last:border-b-0">
                      <div className={`w-[78px] h-[60px] rounded-[8px] flex-shrink-0 bg-gradient-to-br ${grad}`} />
                      <div>
                        <h5 className="text-[12.5px] leading-[1.35] mb-1 text-brand-ink hover:text-brand-olive transition-colors">{title}</h5>
                        <span className="flex items-center gap-1 text-[11px] text-brand-sage">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          {date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
