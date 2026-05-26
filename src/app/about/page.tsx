import PageBanner from "@/components/shared/PageBanner";

const whyCards = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
    title: "Expert Physiotherapists",
    desc: "Senior, board-certified clinicians lead every case — never a junior solo.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Comprehensive Services",
    desc: "From assessment to discharge — one team, one plan, one place.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 2v4"/></svg>,
    title: "Robotics Assistance",
    desc: "Sensor-driven equipment for precise force control and measurable progress.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2 0 3.7.7 5.1 1.9"/><path d="M9 12l2 2 5-5"/></svg>,
    title: "Personalized Care",
    desc: "Plans shaped around your goals, lifestyle, and recovery timeline.",
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
                About <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>
              </h2>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">
                Welcome to <strong className="text-brand-ink">PhysioPath</strong>, a robotics-led physiotherapy clinic in Bangalore. We bring together senior clinicians and the latest rehabilitation technology to help people move better — whether you&apos;re recovering from surgery, managing a long-term condition, or chasing a new personal best.
              </p>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">
                Our team has decades of combined experience across orthopaedic, neurological, paediatric and sports physiotherapy. Treatment plans are built around measurable outcomes, not generic protocols, and every visit is supervised by a senior therapist.
              </p>
              <p className="text-[#3f3f3f] text-[14.5px]">
                <strong className="text-brand-ink">PhysioPath</strong> — robotics and advanced physiotherapy. Built for people who care about getting back to their best.
              </p>
            </div>

            {/* Clinic photo placeholder */}
            <div
              className="aspect-square rounded-full relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.4)]"
              style={{ background: "radial-gradient(circle at 35% 30%, #b1de5f, #0e76c5 80%)" }}
            >
              <div className="absolute left-[-6%] top-[6%] w-[28%] h-[28%] border-2 border-white/40 rounded-full" />
              <div className="absolute left-[-10%] top-[2%] w-[36%] h-[36%] border-2 border-white/20 rounded-full" />
              <div className="absolute left-[14%] right-[14%] top-[28%] bottom-[18%] rounded-[4px]" style={{ background: "linear-gradient(180deg, #b1de5f, #0e76c5)", boxShadow: "inset 0 -20px 30px rgba(6,73,139,.2)" }} />
              <div className="absolute left-0 right-0 bottom-[30%] h-[6px] bg-brand-ink" />
              <span className="absolute inset-0 grid place-items-center text-brand-ink/35 text-[11px] tracking-[0.22em] uppercase">Clinic Facade</span>
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
          <p className="text-[#3f3f3f] text-[14.5px] mb-3 max-w-[900px]">PhysioPath started with a simple idea: rehabilitation should be measurable, comfortable, and built around the person — not the clinic. We saw too many patients bounce between providers, get vague advice, and stall mid-recovery. We built PhysioPath to be the opposite of that.</p>
          <p className="text-[#3f3f3f] text-[14.5px] mb-3 max-w-[900px]">From day one we&apos;ve invested in two things: people and technology. Senior clinicians lead every case, and our floor is stocked with the kind of equipment you&apos;d usually only see in research hospitals — robotic gait trainers, sensor-instrumented strength systems, and real-time movement analysis tools.</p>
          <p className="text-[#3f3f3f] text-[14.5px] max-w-[900px]">What hasn&apos;t changed is the human side. Recovery is hard, and we&apos;d rather have you laugh through a tough session than dread the next one. Bring the back pain — we&apos;ll bring the tools, the plan, and the coffee.</p>
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
            Why <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>?
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
              <div className="text-[30px] font-extrabold text-brand-ink tracking-[0.03em]">PHYSIOPATH</div>
              <div className="text-[10.5px] text-brand-sage tracking-[0.18em] mt-[6px] font-semibold">ROBOTICS & ADVANCED PHYSIOTHERAPY</div>
              <div className="text-[10.5px] text-brand-olive tracking-[0.18em] mt-[14px] font-semibold border-t border-brand-line pt-[14px]">A UNIT OF PHYSIOBIC HEALTHCARE PVT LTD</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
