import Image from "next/image";
import PageBanner from "@/components/shared/PageBanner";
import Gallery from "@/components/Gallery";

const galleryImages = [
  "/clinic3-2.jpg",
  "/clinic3-3.jpg",
  "/clinic3-5.jpg",
  "/clinic3-7.jpg",
  "/clinic3-8.jpg",
  "/clinic3-9.jpg",
  "/clinic3-10.jpg",
  "/clinic3-11.jpg",
  "/clinic3-12.jpg",
  "/clinic3-13.jpg",
  "/clinic3-14.jpg",
  "/clinic3-15.jpg",
  "/clinic3-16.jpg",
  "/clinic3-17.jpg",
  "/clinic3-18.jpg",
  "/clinic3-19.jpg",
  "/clinic3-20.jpg",
  "/clinic3-22.jpg",
];

const whyCards = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
    title: "Assessment-Led Care",
    desc: "Every plan begins with a detailed assessment of your condition, movement, goals and daily needs.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Complete Rehabilitation",
    desc: "From pain relief and mobility work to strength, balance and return-to-activity training, your care progresses with you.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 2v4"/></svg>,
    title: "Targeted Treatments",
    desc: "Manual therapy, therapeutic exercise and selected modalities are used according to your clinical needs.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2 0 3.7.7 5.1 1.9"/><path d="M9 12l2 2 5-5"/></svg>,
    title: "Personalised Support",
    desc: "Clear home exercises, progress reviews and practical advice help you continue improving beyond the clinic.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="About Us" />

      {/* ── Who We Are ────────────────────────────────────────────── */}
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[60px] items-center">
            <div>
              <div className="flex items-center gap-3 mb-[14px]">
                <span className="w-9 h-[2px] bg-brand-olive rounded-[2px]" />
                <span className="font-serif italic text-brand-olive text-[16px]">Who We Are</span>
              </div>
              <h2 className="text-[32px] tracking-[-0.01em] mb-[18px]">
                About <span className="font-serif italic font-normal text-brand-olive">Physiofitness</span>
              </h2>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">
                Welcome to <strong className="text-brand-ink">Physiofitness</strong>, a physiotherapy, rehabilitation and fitness centre in Birauta-17, Pokhara. We help people manage pain, recover from injury or surgery, rebuild strength and return to everyday activities with confidence.
              </p>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">
                Our services include detailed assessment and treatment planning, manual therapy, therapeutic exercise, posture and ergonomic advice, pain education, home exercise programmes and regular progress monitoring. We also provide referral guidance when a medical concern needs further attention.
              </p>
              <p className="text-[#3f3f3f] text-[14.5px]">
                <strong className="text-brand-ink">Physiofitness</strong> — personalised physiotherapy, rehabilitation and fitness support for moving better and living more confidently.
              </p>
            </div>

            {/* Clinic photo */}
            <div className="aspect-square rounded-full relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.4)]">
              <Image
                src="/clinic1.jpg"
                alt="PhysioFitness clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────── */}
      <section className="bg-brand-paper2 py-[70px] pt-0">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="flex items-center gap-3 mb-[14px]">
            <span className="w-9 h-[2px] bg-brand-olive rounded-[2px]" />
            <span className="font-serif italic text-brand-olive text-[16px]">More About Us</span>
          </div>
          <h2 className="text-[32px] tracking-[-0.01em] mb-6">
            Our <span className="font-serif italic font-normal text-brand-olive">Story</span>
          </h2>
          <p className="text-[#3f3f3f] text-[14.5px] mb-3 max-w-[900px]">At Physiofitness, recovery starts with understanding your condition and what you need to get back to. We assess movement, identify key limitations and create a practical plan that supports pain relief, mobility, strength and function.</p>
          <p className="text-[#3f3f3f] text-[14.5px] mb-3 max-w-[900px]">Your treatment may include manual therapy, therapeutic exercise, IASTM, chiropractic physiotherapy, dry needling, taping, cupping, IFT or ultrasound, myofascial release and muscle energy techniques. Each option is selected only when it is appropriate for your condition and goals.</p>
          <p className="text-[#3f3f3f] text-[14.5px] max-w-[900px]">We pair in-clinic care with clear advice, home exercises and regular progress reviews, so you have support at every stage of recovery — from managing pain to returning to daily life, work, sport or fitness.</p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────── */}
      <section className="py-[70px] pt-0">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="flex items-center gap-3 mb-[14px]">
            <span className="w-9 h-[2px] bg-brand-olive rounded-[2px]" />
            <span className="font-serif italic text-brand-olive text-[16px]">Take a Look Inside</span>
          </div>
          <h2 className="text-[32px] tracking-[-0.01em] mb-8">
            Our <span className="font-serif italic font-normal text-brand-olive">Clinic</span> Gallery
          </h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────────── */}
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="flex items-center gap-3 mb-[14px]">
            <span className="w-9 h-[2px] bg-brand-olive rounded-[2px]" />
            <span className="font-serif italic text-brand-olive text-[16px]">Why Us?</span>
          </div>
          <h2 className="text-[32px] tracking-[-0.01em] mb-8">
            Why <span className="font-serif italic font-normal text-brand-olive">Physiofitness</span>?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-14 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
              {whyCards.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-brand-line rounded-[14px] p-[22px] pb-6">
                  <div className="w-[44px] h-[44px] rounded-full bg-brand-paper border border-brand-line grid place-items-center text-brand-olive mb-[14px]">
                    {icon}
                  </div>
                  <h4 className="text-[15.5px] mb-[6px]">{title}</h4>
                  <p className="text-brand-sage text-[12.8px] leading-[1.55]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-paper border border-brand-line rounded-[18px] p-[50px_40px] text-center">
              <div className="w-[78px] h-[78px] rounded-[18px] bg-brand-ink grid place-items-center text-brand-mist mx-auto mb-[18px]">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l8.8 8.8 8.8-8.8c1.5-1.5 1.5-4 0-5.5Z"/>
                </svg>
              </div>
              <div className="text-[30px] font-extrabold text-brand-ink tracking-[0.03em]">Physiofitness</div>
              <div className="text-[10.5px] text-brand-sage tracking-[0.18em] mt-[6px] font-semibold">PHYSIOTHERAPY · REHABILITATION · FITNESS</div>
              <div className="text-[10.5px] text-brand-olive tracking-[0.18em] mt-[14px] font-semibold border-t border-brand-line pt-[14px]">A UNIT OF PHYSIOBIC HEALTHCARE PVT LTD</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
