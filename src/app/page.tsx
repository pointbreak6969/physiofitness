import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import FaqSection from "@/components/shared/FaqSection";

const treatments = [
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l4 4 8-12"/><circle cx="18" cy="6" r="2"/><path d="M3 20h18"/></svg>,
    title: "IASTM Therapy",
    desc: "Instrument-assisted soft tissue mobilization for athletes and chronic pain.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7V4M17 7V4M3 12h18"/></svg>,
    title: "Chiropractic PT",
    desc: "Manual spinal adjustments combined with physiotherapy for alignment.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v6a4 4 0 0 0 8 0V3M8 21v-6a4 4 0 0 1 8 0v6"/></svg>,
    title: "Bone Setting",
    desc: "Joint correction techniques for alignment and post-trauma recovery.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>,
    title: "Dry Needling",
    desc: "Targets myofascial trigger points to release tension and accelerate healing.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M8 8h8M8 16h8M12 4v16"/></svg>,
    title: "Taping Therapy",
    desc: "Kinesio and rigid taping for joint support, swelling control, and motor cueing.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M4 6h16M4 18h16"/></svg>,
    title: "Cupping Therapy",
    desc: "Suction-based therapy that boosts circulation and decompresses fascia.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l2-5 4 10 2-5 2 3h5"/></svg>,
    title: "IFT / Ultrasound",
    desc: "Electro and sound modalities for pain relief and deep tissue healing.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7"/><path d="M9 12h6"/></svg>,
    title: "Myofascial Release",
    desc: "Hands-on fascial work that improves glide and reduces restrictions.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="2"/><path d="M9 22l2-8 3 2 4-2-2 8M5 12l4-2"/></svg>,
    title: "Muscle Energy Technique",
    desc: "Active contraction-against-resistance to restore range and reduce spasm.",
  },
];

const services = [
  { label: "Back Pain", title: "Back Pain Physiotherapy", desc: "Targeted programmes for disc, postural, and muscular back pain." },
  { label: "Knee Pain", title: "Knee Pain Physiotherapy", desc: "Restoring function for arthritic, ligament, and tendon issues." },
  { label: "Shoulder", title: "Shoulder Physiotherapy", desc: "From frozen shoulder to rotator cuff — full-range recovery." },
  { label: "Post-Surgical", title: "Post-Surgical Rehab", desc: "Hospital-discharge to full mobility, supervised end-to-end." },
  { label: "Sports Injury", title: "Sports Injury Rehab", desc: "Sprains, strains, fractures — back to your sport, stronger." },
  { label: "Chronic Pain", title: "Chronic Pain Management", desc: "Multimodal plans for arthritis, sciatica, and fibromyalgia." },
  { label: "Neurological", title: "Neurological Physiotherapy", desc: "Stroke, Parkinson's, and post-injury motor recovery." },
  { label: "Posture", title: "Posture Correction", desc: "Desk-worker reset programmes and biomechanical alignment." },
  { label: "Paediatric", title: "Paediatric Physiotherapy", desc: "Developmental delays, congenital and acquired conditions." },
  { label: "Neck Pain", title: "Neck Pain Management", desc: "Cervical mobilisation, posture work, and trigger-point therapy." },
];

const svcGradients = [
  "from-[#2f7929] to-[#7bc320]",   // green
  "from-[#7bc320] to-[#9cdd15]",   // green
  "from-[#56a326] to-[#9cdd15]",   // green
  "from-[#56a326] to-[#9cdd15]",   // green
  "from-[#2f7929] to-[#b1de5f]",   // green
  "from-[#2f7929] to-[#7bc320]",   // green
  "from-[#7bc320] to-[#b1de5f]",   // green
  "from-[#173913] to-[#9cdd15]",   // green
  "from-[#56a326] to-[#b1de5f]",   // green
  "from-[#2f7929] to-[#9cdd15]",   // green
];

const team = [
  { name: "Dr. Adnan Shaikh", role: "Consultant Physiotherapist · Co-Founder & Director" },
  { name: "Waseem Khan", role: "Co-Founder & CEO" },
  { name: "Dr. Saleena PT", role: "Consultant Physiotherapist" },
  { name: "Dr. Aarthi Chauhan PT", role: "Clinical Physiotherapist" },
  { name: "Dr. Alfiya Khan PT", role: "Clinical Physiotherapist" },
  { name: "Dr. Muqit PT", role: "Clinical Physiotherapist" },
];

const avatarGradients = [
  "from-[#b1de5f] to-[#2f7929]",   // green
  "from-[#b1de5f] to-[#2f7929]",   // green
  "from-[#b1de5f] to-[#7bc320]",   // green
  "from-[#2f7929] to-[#7bc320]",   // green
  "from-[#b1de5f] to-[#56a326]",   // green
  "from-[#b1de5f] to-[#56a326]",   // green
];

const whyItems = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 .9-5 4.9 1.4 7L12 18.3 5.6 21.8 7 15l-5-4.9 7-.9 3-7Z"/></svg>,
    title: "Expert Physiotherapists",
    desc: "Senior, board-certified clinicians lead every case.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/><path d="M12 7v5l3 2"/></svg>,
    title: "Comprehensive Services",
    desc: "Single roof for diagnosis, therapy and recovery monitoring.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 2v4"/></svg>,
    title: "Robotics Assistance",
    desc: "Sensor-driven equipment for precise, measurable rehab.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
    title: "Personalized Care",
    desc: "Every plan is shaped around your goals and lifestyle.",
  },
];

const faqs = [
  {
    q: "What conditions does PhysioPath treat?",
    a: "We treat orthopaedic, neurological, paediatric, sports, and post-surgical conditions across the full age range. Our intake assessment determines fit and recommends the right pathway for you.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required. You can book directly and we'll perform a thorough assessment at your first visit.",
  },
  {
    q: "How long does each session last?",
    a: "Sessions typically run 45–60 minutes depending on the treatment plan and modality.",
  },
  {
    q: "What makes robotic physiotherapy different?",
    a: "Robotic-assisted therapy provides precise force control, consistent intensity, and measurable progress data — especially useful for neurological and post-surgical patients.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with most major health insurance providers. Our admin team will verify coverage before your first visit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-paper py-[38px] pb-14">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div
              className="aspect-[4/3] rounded-[18px] relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.35)] order-2 lg:order-1"
              style={{ background: "radial-gradient(ellipse at 30% 40%, #b1de5f 0%, #9cdd15 45%, #56a326 100%)" }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(120px 60px at 38% 55%, rgba(200,230,255,.55), transparent 70%), linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(23,57,19,.15) 100%)" }} />
              <div className="absolute left-[8%] right-[8%] bottom-[14%] h-[32%] rounded-[14px]" style={{ background: "linear-gradient(180deg, #b1de5f, #2f7929)", boxShadow: "inset 0 -10px 30px rgba(23,57,19,.25)" }} />
              <span className="absolute left-[18px] top-[18px] bg-brand-ink/80 text-brand-paper text-[11px] font-semibold tracking-[0.12em] px-3 py-[6px] rounded-full uppercase backdrop-blur-sm">
                Our Clinic
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.02em] text-brand-ink mb-[18px]">
                Best <span className="font-serif italic font-normal text-brand-olive">Robotics</span> and Advanced
                <br className="hidden sm:block" /> Physiotherapy Clinic
                <br className="hidden sm:block" /> in Bangalore
              </h1>
              <p className="text-brand-sage text-[15px] max-w-[480px] mb-[22px]">
                Reclaim your movement with India&apos;s most advanced rehabilitation team — personalised programmes for acute injury, chronic pain, and athletic recovery.
              </p>
              <div className="flex items-center gap-[14px] mb-[26px]">
                <span className="text-brand-olive font-bold text-[22px]">5.0</span>
                <span className="text-brand-olive text-[18px] tracking-widest">★★★★★</span>
                <span className="text-brand-sage text-[12px]">Google rating · 240+ reviews</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-ink text-white rounded-full px-[22px] py-3 text-[13px] font-semibold hover:bg-brand-olive transition-colors"
              >
                Book Your Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-brand-paper border-t border-brand-line">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center py-9">
            {[
              { num: "1,000+", label: "Patients Treated" },
              { num: "5★", label: "Google Rated Clinic" },
              { num: "Specialized", label: "Therapists" },
            ].map(({ num, label }, i) => (
              <div key={label} className={`py-4 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-brand-line" : ""}`}>
                <div className="text-[30px] font-extrabold text-brand-ink tracking-[-0.01em]">
                  {num === "1,000+" && <><span>1,000</span><span className="text-brand-olive">+</span></>}
                  {num === "5★" && <><span>5</span><span className="text-brand-olive text-[22px] align-middle ml-1">★</span></>}
                  {num === "Specialized" && <span>Specialized</span>}
                </div>
                <div className="text-brand-sage text-[13px] mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking ───────────────────────────────────────────────── */}
      <section className="bg-brand-paper2 py-9">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="bg-white rounded-[18px] border border-brand-line shadow-[0_30px_60px_-40px_rgba(38,43,21,0.3)] grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
            <div className="p-7 sm:p-8">
              <h4 className="text-[18px] mb-2">Book an <span className="text-brand-olive">Appointment</span></h4>
              <p className="text-brand-sage text-[13px] mb-4">Our care team is one call away — schedule your visit in under a minute.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-olive text-white rounded-full px-[22px] py-3 text-[13px] font-semibold hover:bg-[#56a326] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                Call Now
              </Link>
            </div>
            <div className="p-7 sm:p-8 border-t sm:border-t-0 sm:border-l border-brand-line">
              <h4 className="text-[18px] mb-2">Opening <span className="text-brand-olive">Hours</span></h4>
              <div className="grid grid-cols-[110px_1fr] gap-y-[6px] text-[13.5px] text-[#3f3f3f]">
                <span className="text-brand-sage font-semibold">Mon — Fri</span><span>07:00 – 21:00</span>
                <span className="text-brand-sage font-semibold">Saturday</span><span>09:00 – 21:00</span>
                <span className="text-brand-sage font-semibold">Sunday</span><span className="text-brand-olive font-bold">By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
            <div>
              <h2 className="text-[30px] mb-[18px]">
                About <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>
              </h2>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">PhysioPath is a Bangalore-based clinic pairing senior physiotherapists with the latest robotic rehabilitation tools. We treat the full spectrum — from stubborn chronic pain to post-surgical recovery and elite-athlete return-to-play.</p>
              <p className="text-[#3f3f3f] text-[14.5px] mb-[14px]">Every plan is built around measurable goals: better mobility, more strength, less pain. We&apos;re proud of our outcome rates, but even prouder of how patients feel walking out the door.</p>
              <p className="text-brand-olive font-semibold text-[13.5px]">PhysioPath — robotics and advanced physiotherapy, Bangalore.</p>
            </div>
            <div
              className="aspect-square rounded-full relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.4)]"
              style={{ background: "radial-gradient(circle at 35% 30%, #b1de5f, #2f7929 80%)" }}
            >
              <div className="absolute left-[12%] right-[12%] top-[30%] bottom-[18%] rounded-[4px]" style={{ background: "linear-gradient(180deg, #b1de5f, #2f7929)", boxShadow: "inset 0 -20px 30px rgba(23,57,19,.2)" }} />
              <div className="absolute left-0 right-0 bottom-[30%] h-[6px] bg-brand-ink" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatments ────────────────────────────────────────────── */}
      <section className="bg-brand-paper2 pb-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <SectionHeader
            eyebrow="What We Offer"
            title={<>Our <span className="font-serif italic font-normal text-brand-olive">Treatments</span></>}
            subtitle="Nine specialist modalities, tuned to your specific condition and recovery goals."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 mt-12">
            {treatments.map(({ icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-[92px] h-[92px] rounded-full bg-white border border-brand-line shadow-[0_18px_36px_-20px_rgba(38,43,21,0.25)] mx-auto mb-4 grid place-items-center text-brand-olive group-hover:-translate-y-1 group-hover:shadow-[0_24px_40px_-18px_rgba(38,43,21,0.3)] transition-[transform,box-shadow] duration-200">
                  {icon}
                </div>
                <h4 className="text-[15px] mb-[10px]">{title}</h4>
                <p className="text-brand-sage text-[12.8px] max-w-[240px] mx-auto leading-[1.55]">{desc}</p>
              </div>
            ))}
          </div>
          <CTABanner title="Explore Our Tailored Treatments" subtitle="See the full catalogue of specialist physiotherapy modalities" buttonText="Explore Now" buttonHref="/treatments" />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-[70px] pt-[30px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <SectionHeader
            eyebrow="Care You Can Trust"
            title={<>Our <span className="font-serif italic font-normal text-brand-olive">Services</span></>}
            subtitle="Region-specific care plans for the conditions we see most often in our clinic."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {services.map(({ label, title, desc }, i) => (
              <div key={title} className="bg-white rounded-[16px] overflow-hidden border border-brand-line hover:-translate-y-[3px] hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`aspect-[4/3] bg-gradient-to-br ${svcGradients[i % svcGradients.length]} relative`}>
                  <span className="absolute inset-0 grid place-items-center text-brand-ink/40 text-[11px] tracking-[0.2em] uppercase">{label}</span>
                </div>
                <div className="p-4 pb-[22px]">
                  <h4 className="text-[15px] mb-2">{title}</h4>
                  <p className="text-brand-sage text-[12.5px] leading-[1.55]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <CTABanner title="Discover Our Comprehensive Services" subtitle="See every condition we treat and how we approach it" buttonText="Discover Now" buttonHref="/services" />
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────── */}
      <section className="py-[70px] pt-5">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="text-center mb-1">
            <span className="font-serif italic text-brand-olive text-[14px]">Our Team</span>
          </div>
          <SectionHeader
            title={<>Meet our Expert <span className="font-serif italic font-normal text-brand-olive">Physiotherapists</span></>}
            subtitle="Senior clinicians with decades of combined experience and a deep commitment to personalised care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {team.map(({ name, role }, i) => (
              <div key={name} className="bg-white border border-brand-line rounded-[16px] p-6 text-center hover:-translate-y-[3px] hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`w-[140px] h-[140px] rounded-full mx-auto mb-4 relative overflow-hidden bg-gradient-to-b ${avatarGradients[i % avatarGradients.length]} shadow-[inset_0_-12px_20px_rgba(38,43,21,0.2)]`}>
                  <div className="absolute left-[25%] right-[25%] bottom-0 h-[50%] bg-brand-ink rounded-[50%_50%_0_0/30%_30%_0_0]" />
                </div>
                <h4 className="text-[17px] mb-1">{name}</h4>
                <p className="text-brand-sage text-[12.5px]">{role}</p>
              </div>
            ))}
          </div>
          <CTABanner title="Meet Our Expert Team" subtitle="Read full bios, specialisations and clinical interests" buttonText="Meet Now" buttonHref="/team" />
        </div>
      </section>

      {/* ── Why PhysioPath ────────────────────────────────────────── */}
      <section className="py-[30px] pb-[60px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
            <div>
              <h2 className="text-[32px] mb-9">Why <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                {whyItems.map(({ icon, title, desc }) => (
                  <div key={title}>
                    <div className="w-[44px] h-[44px] rounded-full bg-brand-paper border border-brand-line grid place-items-center text-brand-olive mb-3">{icon}</div>
                    <h4 className="text-[15px] mb-[6px]">{title}</h4>
                    <p className="text-brand-sage text-[12.8px] leading-[1.55]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-paper border border-brand-line rounded-[18px] p-10 grid place-items-center text-center">
              <div className="w-[68px] h-[68px] rounded-[16px] bg-brand-ink grid place-items-center text-brand-mist mx-auto mb-4">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l8.8 8.8 8.8-8.8c1.5-1.5 1.5-4 0-5.5Z"/>
                </svg>
              </div>
              <div className="text-[24px] font-extrabold text-brand-ink tracking-[0.04em]">PHYSIOPATH</div>
              <div className="text-[10px] text-brand-sage tracking-[0.18em] mt-1 font-semibold">ROBOTICS & ADVANCED PHYSIOTHERAPY</div>
              <div className="text-[10px] text-brand-olive tracking-[0.18em] mt-[14px] font-semibold border-t border-brand-line pt-[10px]">A UNIT OF PHYSIOBIC HEALTHCARE PVT LTD</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} dark />
    </>
  );
}
