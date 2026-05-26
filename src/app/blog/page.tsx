import PageBanner from "@/components/shared/PageBanner";

const posts = [
  {
    grad: "from-[#56a326] to-[#9cdd15]",   // green
    label: "Chronic Pain",
    date: "May 24, 2026",
    title: "Can Physiotherapy Cure Chronic Pain? The Blueprint for Long-Term Relief",
    excerpt: "Chronic pain is one of the most complex healthcare challenges globally, affecting millions of people every year. Here's how a structured, multimodal physiotherapy programme stacks up against medication-only approaches…",
  },
  {
    grad: "from-[#2f7929] to-[#7bc320]",   // green
    label: "Neck Pain",
    date: "May 17, 2026",
    title: "Neck Pain and Cervical Spondylosis: How Physiotherapy Can Give You Lasting Relief in Bangalore",
    excerpt: "If you wake up with a stiff neck or feel a constant ache at the base of your skull, you're not alone. We see this every day at the clinic — and the fix is rarely just about the neck itself…",
  },
  {
    grad: "from-[#2f7929] to-[#9cdd15]",   // green
    label: "Back Pain",
    date: "May 17, 2026",
    title: "7 Proven Physiotherapy Treatments for Lower Back Pain in Bangalore",
    excerpt: "Lower back pain has become one of the most common health problems among working adults in Bangalore. We break down seven evidence-backed treatments and explain when each one is the right call…",
  },
  {
    grad: "from-[#7bc320] to-[#9cdd15]",   // green
    label: "Clinic",
    date: "May 10, 2026",
    title: "Best Physiotherapy Clinic in Kalyan Nagar: How to Choose the Right Treatment Centre",
    excerpt: "In the bustling urban landscape of North Bangalore, maintaining physical health is often pushed aside. Here's what to look for when picking a clinic — and the red flags that should make you walk away…",
  },
];

const categories = [
  { name: "Blogs", count: 58 },
  { name: "Uncategorized", count: 15 },
  { name: "Sports Recovery", count: 11 },
  { name: "Patient Stories", count: 7 },
];

const latestPosts = [
  { grad: "from-[#7bc320] to-[#9cdd15]",  title: "Can Physiotherapy Cure Chronic Pain? The Blueprint for Long-Term Relief", date: "May 24, 2026" },
  { grad: "from-[#56a326] to-[#b1de5f]",  title: "Neck Pain and Cervical Spondylosis: How Physiotherapy Gives You Lasting Relief", date: "May 17, 2026" },
  { grad: "from-[#56a326] to-[#9cdd15]",  title: "7 Proven Physiotherapy Treatments for Lower Back Pain", date: "May 17, 2026" },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" crumb="Blog" />

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-14">
            {/* Main feed */}
            <div>
              {posts.map(({ grad, label, date, title, excerpt }) => (
                <article key={title} className="border-b border-brand-line pb-9 mb-9 last:border-b-0 last:mb-0">
                  <div className={`aspect-[16/9] rounded-[14px] overflow-hidden bg-gradient-to-br ${grad} relative mb-[22px]`}>
                    <span className="absolute inset-0 grid place-items-center text-brand-ink/35 text-[11px] tracking-[0.24em] uppercase">{label}</span>
                  </div>
                  <span className="inline-block bg-brand-paper text-brand-olive border border-brand-line rounded-[4px] px-[10px] py-[3px] text-[11px] font-semibold tracking-[0.04em] mb-3">{date}</span>
                  <h3 className="text-[22px] tracking-[-0.01em] leading-[1.25] mb-[10px] hover:text-brand-olive cursor-pointer transition-colors">{title}</h3>
                  <p className="text-brand-sage text-[14px] mb-4">{excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-[6px] bg-brand-olive text-white px-4 py-2 rounded-full text-[12px] font-semibold hover:bg-[#56a326] transition-colors">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </a>
                </article>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-3">
                {["1", "2", "…", "19", "›"].map((p) => (
                  <a
                    key={p}
                    href="#"
                    className={`w-[38px] h-[38px] rounded-[8px] grid place-items-center text-[13px] font-semibold border transition-colors ${
                      p === "1"
                        ? "bg-brand-olive text-white border-brand-olive"
                        : "bg-white border-brand-line text-brand-ink hover:bg-brand-paper"
                    }`}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              {/* Search */}
              <div className="border border-brand-line rounded-full px-[6px] py-[6px] flex gap-2 mb-7">
                <input className="flex-1 bg-transparent border-0 outline-none px-4 py-[10px] text-[13px] text-[#3f3f3f] placeholder:text-brand-sage font-sans" placeholder="Search …" />
                <button className="bg-brand-olive text-white border-0 cursor-pointer px-[18px] py-2 rounded-full text-[12px] font-semibold hover:bg-[#56a326] transition-colors">Search</button>
              </div>

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
                  {latestPosts.map(({ grad, title, date }) => (
                    <div key={title} className="flex gap-3 py-[14px] border-b border-dashed border-brand-line last:border-b-0">
                      <div className={`w-[78px] h-[60px] rounded-[8px] flex-shrink-0 bg-gradient-to-br ${grad}`} />
                      <div>
                        <h5 className="text-[12.5px] leading-[1.35] mb-1 text-brand-ink hover:text-brand-olive cursor-pointer transition-colors">{title}</h5>
                        <span className="flex items-center gap-1 text-[11px] text-brand-sage">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          {date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscribe widget */}
              <div className="bg-white border border-brand-line rounded-[14px] overflow-hidden">
                <div className="bg-brand-ink text-white px-5 py-[14px] text-[13px] font-bold text-center">Subscribe to RSS</div>
                <div className="p-[16px_20px]">
                  <p className="text-[12.8px] text-brand-sage leading-[1.55] mb-3">Get every new article delivered to your inbox a few times a month.</p>
                  <div className="flex gap-[6px] items-center border border-brand-line rounded-full p-1">
                    <input type="email" placeholder="Your email" className="flex-1 bg-transparent border-0 outline-none px-3 py-2 text-[12.5px] font-sans" />
                    <button className="w-[30px] h-[30px] rounded-full bg-brand-olive text-white border-0 cursor-pointer grid place-items-center hover:bg-[#56a326] transition-colors flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
