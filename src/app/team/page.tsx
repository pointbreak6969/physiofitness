import PageBanner from "@/components/shared/PageBanner";

const row1 = [
  { name: "Dr. Adnan Shaikh", role: "Consultant Physiotherapist", sub: "Co-Founder & Director", grad: "from-[#3d8010] to-[#60b520]" },
  { name: "Waseem Khan", role: "Co-Founder & CEO", sub: "", grad: "from-[#60b520] to-[#007fda]" },
  { name: "Dr. Sayeda Nimra", role: "Clinical Physiotherapist", sub: "", grad: "from-[#50a518] to-[#78cc30]" },
  { name: "Dr. Alfiya Khan PT", role: "Clinical Physiotherapist", sub: "", grad: "from-[#007fda] to-[#60b520]" },
];

const row2 = [
  { name: "Dr. Muqit PT", role: "Clinical Physiotherapist", grad: "from-[#4a9c10] to-[#78cc30]" },
  { name: "Dr. Aarthi Chauhan PT", role: "Clinical Physiotherapist", grad: "from-[#60b520] to-[#0070c4]" },
  { name: "Dr. Saleena PT", role: "Clinical Physiotherapist", grad: "from-[#50a518] to-[#96d850]" },
];

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" crumb="Our Team" />

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          {/* Intro */}
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <span className="inline-flex items-center gap-[10px] text-brand-olive font-serif italic text-[15px] mb-[10px]">
              <svg width="48" height="14" viewBox="0 0 80 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9h14l3-6 4 12 3-9 4 6h48"/>
              </svg>
              Our Team
            </span>
            <h2 className="text-[32px] tracking-[-0.02em] mb-3">
              Meet our Expert <span className="font-serif italic font-normal text-brand-olive">Physiotherapists</span>
            </h2>
            <p className="text-brand-sage text-[14.5px]">Senior clinicians with decades of combined experience, all under one roof. Specialisations span sports, neuro, paediatric and chronic-pain physiotherapy.</p>
          </div>

          {/* Row 1 — circular avatars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mb-8">
            {row1.map(({ name, role, sub, grad }) => (
              <div key={name} className="bg-white border border-brand-line rounded-[16px] p-7 pb-[26px] text-center hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`w-[150px] h-[150px] rounded-full mx-auto mb-[18px] relative overflow-hidden bg-gradient-to-b ${grad} shadow-[inset_0_-16px_24px_rgba(38,43,21,0.2)]`}>
                  <div className="absolute top-[18%] left-[30%] w-[40%] h-[40%] rounded-full" style={{ background: "linear-gradient(180deg, #cce3f8, #60b520)" }} />
                  <div className="absolute left-[20%] right-[20%] bottom-[-6%] h-[60%] bg-brand-ink rounded-[50%_50%_0_0/35%_35%_0_0]" />
                </div>
                <h4 className="text-[16px] mb-[6px]">{name}</h4>
                <p className="text-brand-sage text-[13px]">
                  {sub ? <><strong className="text-brand-ink font-semibold">{role}</strong><br />{sub}</> : role}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 — full portrait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-[880px] mx-auto">
            {row2.map(({ name, role, grad }, i) => {
              const portraitGrads = ["from-[#4a9c10] to-[#78cc30]", "from-[#60b520] to-[#0070c4]", "from-[#50a518] to-[#96d850]"];
              return (
                <div key={name} className="bg-white border border-brand-line rounded-[16px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                  <div className={`aspect-[1/1.05] bg-gradient-to-b ${portraitGrads[i % 3]} relative`}>
                    <div
                      className="absolute inset-0"
                      style={{ background: "radial-gradient(circle at 50% 30%, #f0eddc 0 22%, transparent 23%), linear-gradient(180deg, transparent 40%, var(--brand-ink) 95%)" }}
                    />
                    <span className="absolute inset-0 grid place-items-center text-white/45 text-[10.5px] tracking-[0.22em] uppercase">Portrait</span>
                  </div>
                  <div className="px-[22px] py-[18px] pb-[26px] text-center">
                    <h4 className="text-[16px] mb-[6px]">{name}</h4>
                    <p className="text-brand-sage text-[13px]">{role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
