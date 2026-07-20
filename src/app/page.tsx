import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import FaqSection from "@/components/shared/FaqSection";

const treatments = [
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h3l2-5 3 10 2-5 2 2.5h8" /><circle cx="4.5" cy="17" r="1.5" /><line x1="4.5" y1="15.5" x2="4.5" y2="13" /><circle cx="19.5" cy="17" r="1.5" /><line x1="19.5" y1="15.5" x2="19.5" y2="13" /></svg>,
    title: "TENS",
    desc: "May be used for pain modulation and comfort.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9c2.5 0 2.5 6 5 6s2.5-6 5-6 2.5 6 5 6 2.5-6 5-6" /><path d="M2 15c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6 2.5 6 5 6" strokeOpacity="0.4" /></svg>,
    title: "IFT",
    desc: "Used in selected pain and soft-tissue conditions.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L7 13h5l-1 9 7-11h-5z" /></svg>,
    title: "EMS",
    desc: "Can support muscle activation when clinically appropriate.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="9" rx="3" /><path d="M12 11v3" /><path d="M9 17c0-1.7 1.3-3 3-3s3 1.3 3 3" /><path d="M6 19.5C6 17 8.7 15 12 15s6 2 6 4.5" /></svg>,
    title: "Ultrasound",
    desc: "Used selectively for soft-tissue and pain-related conditions.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21" /><polyline points="8 7 12 3 16 7" /><polyline points="8 17 12 21 16 17" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
    title: "Traction",
    desc: "Cervical or lumbar traction only after screening and indication.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /><path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>,
    title: "ESWT / Laser",
    desc: "Advanced options for selected musculoskeletal conditions.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>,
    title: "Hydrocollator / Cold Packs",
    desc: "Heat and cold therapy for comfort and preparation.",
  },
  {
    icon: <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 2" /><circle cx="12" cy="9" r="2.5" /><path d="M8 21v-3.5a4 4 0 0 1 8 0V21" /><line x1="8" y1="13" x2="16" y2="13" /></svg>,
    title: "X-ray Screen / Assessment",
    desc: "Supports clinical interpretation with reports and referral documents.",
  },
];

const services = [
  { label: "Assessment", title: "Assessment & Planning", desc: "Detailed assessment and personalised treatment planning tailored to your condition." },
  { label: "Manual", title: "Manual Therapy", desc: "Manual therapy and joint mobilization applied when clinically indicated." },
  { label: "Exercise", title: "Therapeutic Exercise", desc: "Structured mobility, stretching, strengthening and balance programmes." },
  { label: "Posture", title: "Posture & Ergonomics", desc: "Posture correction and ergonomic advice for work and daily life." },
  { label: "Education", title: "Pain Education", desc: "Pain education and self-management strategies to build long-term confidence." },
  { label: "Home Plan", title: "Home Exercise Program", desc: "Take-home exercise program with clear, step-by-step instructions." },
  { label: "Monitoring", title: "Progress Monitoring", desc: "Regular review and plan modification as your condition evolves." },
  { label: "Referral", title: "Referral Guidance", desc: "Referral guidance when red flags or medical concerns are suspected." },
];

const svcGradients = [
  "from-[#3a7a12] to-[#73c01a]",   // green
  "from-[#73c01a] to-[#8fd41a]",   // green
  "from-[#4a8a15] to-[#8fd41a]",   // green
  "from-[#4a8a15] to-[#8fd41a]",   // green
  "from-[#3a7a12] to-[#a3d94a]",   // green
  "from-[#3a7a12] to-[#73c01a]",   // green
  "from-[#73c01a] to-[#a3d94a]",   // green
  "from-[#173913] to-[#8fd41a]",   // green
  "from-[#4a8a15] to-[#a3d94a]",   // green
  "from-[#3a7a12] to-[#8fd41a]",   // green
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
  "from-[#a3d94a] to-[#3a7a12]",   // green
  "from-[#a3d94a] to-[#3a7a12]",   // green
  "from-[#a3d94a] to-[#73c01a]",   // green
  "from-[#3a7a12] to-[#73c01a]",   // green
  "from-[#a3d94a] to-[#4a8a15]",   // green
  "from-[#a3d94a] to-[#4a8a15]",   // green
];

const whyItems = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 .9-5 4.9 1.4 7L12 18.3 5.6 21.8 7 15l-5-4.9 7-.9 3-7Z" /></svg>,
    title: "Assessment-Based Care",
    desc: "We listen, observe your movement and identify your key limitations before any treatment begins.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" /><path d="M12 7v5l3 2" /></svg>,
    title: "Exercise Therapy",
    desc: "Progressive exercise for strength, flexibility, endurance, balance and long-term confidence.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /><rect x="6" y="3" width="12" height="8" rx="2" /><path d="M8 12h8" /></svg>,
    title: "Gym & Fitness Zone",
    desc: "Supervised strength, cardio and mobility training for safe return to daily life and sport.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>,
    title: "Personalized Care",
    desc: "Every plan is shaped around your condition, safety, goals and lifestyle.",
  },
];

const faqs = [
  {
    q: "What conditions does PhysioFitness treat?",
    a: "We help with back pain and sciatica, neck pain, shoulder and frozen shoulder, knee pain and arthritis, heel and ankle problems, sports injuries, stroke and neurological conditions, post-operative recovery, geriatric rehabilitation, work-related pain, posture problems, and safe return to fitness after injury.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required. You can book directly and we'll perform a thorough assessment at your first visit.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring your doctor's prescription if available, any reports, X-ray or MRI scans, details of previous treatment, and comfortable clothing that allows easy movement.",
  },
  {
    q: "Is exercise part of my treatment plan?",
    a: "Yes. Exercise is central to recovery at PhysioFitness. It helps restore movement, improve strength, build balance and endurance, and gives you the tools to manage your recovery independently — beyond clinic visits.",
  },
  {
    q: "How long does each session last?",
    a: "Sessions typically run 45–60 minutes depending on the treatment plan and modality.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-paper py-9.25 pb-14">
        <div className="max-w-295 mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div
              className="aspect-4/3 rounded-[18px] relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.35)] order-2 lg:order-1"
              style={{ background: "radial-gradient(ellipse at 30% 40%, #a3d94a 0%, #8fd41a 45%, #4a8a15 100%)" }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(120px 60px at 38% 55%, rgba(200,230,255,.55), transparent 70%), linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(23,57,19,.15) 100%)" }} />
              <div className="absolute left-[8%] right-[8%] bottom-[14%] h-[32%] rounded-[14px]" style={{ background: "linear-gradient(180deg, #a3d94a, #3a7a12)", boxShadow: "inset 0 -10px 30px rgba(23,57,19,.25)" }} />
              <span className="absolute left-4.5 top-4.5 bg-brand-ink/80 text-brand-paper text-[11px] font-semibold tracking-[0.12em] px-3 py-1.5 rounded-full uppercase backdrop-blur-sm">
                Our Clinic
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4 bg-brand-paper border border-brand-line rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand-olive uppercase">
                Pain Relief · Rehabilitation · Fitness
              </div>
              <h1 className="text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.02em] text-brand-ink mb-4.5">
                Nepal&apos;s First<br />
                Advanced Physiotherapy
                <br className="hidden sm:block" /> Clinic in Pokhara
              </h1>
              <p className="text-brand-sage text-[15px] max-w-120 mb-2">
                A modern physiotherapy, rehabilitation and supervised gym centre designed for
                people who want to recover safely, rebuild strength and return to daily life with
                confidence.
              </p>
              <p className="font-serif italic text-brand-olive text-[15px] mb-5.5">Move better. Feel stronger. Live more confidently.</p>
              <div className="flex items-center gap-3.5 mb-6.5">
                <span className="text-brand-olive font-bold text-[22px]">5.0</span>
                <span className="text-brand-olive text-[18px] tracking-widest">★★★★★</span>
                <span className="text-brand-sage text-[12px]">Google rating · 240+ reviews</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-5.5 py-3 text-[13px] font-semibold hover:opacity-90 transition-opacity"
              >
                Book Your Assessment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-brand-paper border-t border-brand-line">
        <div className="max-w-295 mx-auto px-7">
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
        <div className="max-w-295 mx-auto px-7">
          <div className="bg-white rounded-[18px] border border-brand-line shadow-[0_30px_60px_-40px_rgba(38,43,21,0.3)] grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
            <div className="p-7 sm:p-8">
              <h4 className="text-[18px] mb-2">Book an <span className="text-brand-olive">Appointment</span></h4>
              <p className="text-brand-sage text-[13px] mb-4">Our care team is one call away — schedule your visit in under a minute.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-5.5 py-3 text-[13px] font-semibold hover:opacity-90 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                Call Now
              </Link>
            </div>
            <div className="p-7 sm:p-8 border-t sm:border-t-0 sm:border-l border-brand-line">
              <h4 className="text-[18px] mb-2">Opening <span className="text-brand-olive">Hours</span></h4>
              <div className="grid grid-cols-[110px_1fr] gap-y-1.5 text-[13.5px] text-[#3f3f3f]">
                <span className="text-brand-sage font-semibold">Mon — Fri</span><span>07:00 – 21:00</span>
                <span className="text-brand-sage font-semibold">Saturday</span><span>09:00 – 21:00</span>
                <span className="text-brand-sage font-semibold">Sunday</span><span className="text-brand-olive font-bold">By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="py-17.5">
        <div className="max-w-295 mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-3.5 items-center">
            <div>
              <h2 className="text-[30px] mb-4.5">
                About <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>
              </h2>
              <p className="text-[#3f3f3f] text-[14.5px] mb-3.5">PhysioPath is a centre built around one simple belief: movement is medicine when it is guided, safe and
                personalized.</p>
              <p className="text-[#3f3f3f] text-[14.5px] mb-3.5">At PhysioFitness Pain And Rehabilitation Centre, we combine physiotherapy assessment,
                evidence-informed treatment, modern modalities, progressive exercise and supervised gym
                training. Our goal is not only to reduce pain, but also to help you understand your condition,
                improve your movement, and build the confidence to stay active.</p>
              <p className="text-brand-olive font-semibold text-[13.5px]">PhysioPath — pain relief, rehabilitation and fitness, Pokhara.</p>
            </div>
            <div
              className="aspect-square rounded-full relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,43,21,0.4)]"
              style={{ background: "radial-gradient(circle at 35% 30%, #a3d94a, #3a7a12 80%)" }}
            >
              <div className="absolute left-[12%] right-[12%] top-[30%] bottom-[18%] rounded-lg" style={{ background: "linear-gradient(180deg, #a3d94a, #3a7a12)", boxShadow: "inset 0 -20px 30px rgba(23,57,19,.2)" }} />
              <div className="absolute left-0 right-0 bottom-[30%] h-1.5 bg-brand-ink" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatments ────────────────────────────────────────────── */}
      <section className="bg-brand-paper2 pb-17.5">
        <div className="max-w-295 mx-auto px-7">
          <SectionHeader
            eyebrow="What We Offer"
            title={<>Our <span className="font-serif italic font-normal text-brand-olive">Treatments</span></>}
            subtitle="Eight specialist modalities, tuned to your specific condition and recovery goals."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 mt-12">
            {treatments.map(({ icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-23 h-23 rounded-full bg-white border border-brand-line shadow-[0_18px_36px_-20px_rgba(38,43,21,0.25)] mx-auto mb-4 grid place-items-center text-brand-olive group-hover:-translate-y-1 group-hover:shadow-[0_24px_40px_-18px_rgba(38,43,21,0.3)] transition-[transform,box-shadow] duration-200">
                  {icon}
                </div>
                <h4 className="text-[15px] mb-2.5">{title}</h4>
                <p className="text-brand-sage text-[12.8px] max-w-60 mx-auto leading-[1.55]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-start gap-3 bg-white border border-brand-line rounded-[14px] px-5 py-4 max-w-3xl mx-auto">
            <svg className="shrink-0 mt-0.5 text-brand-olive" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            <p className="text-brand-sage text-[12.8px] leading-[1.6]">
              <span className="text-brand-ink font-semibold">Important: </span>
              We do not use machines randomly. Every modality is selected according to your condition, safety, contraindications, goals and therapist judgment.
            </p>
          </div>
          <CTABanner title="Explore Our Tailored Treatments" subtitle="See the full catalogue of specialist physiotherapy modalities" buttonText="Explore Now" buttonHref="/treatments" />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-17.5 pt-7.5">
        <div className="max-w-295 mx-auto px-7">
          <SectionHeader
            eyebrow="Care You Can Trust"
            title={<>Our <span className="font-serif italic font-normal text-brand-olive">Services</span></>}
            subtitle="Complete care from pain relief to functional recovery."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5 mt-12">
            {services.map(({ label, title, desc }, i) => (
              <div key={title} className="bg-white rounded-[16px] overflow-hidden border border-brand-line hover:-translate-y-0.75 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`aspect-4/3 bg-linear-to-br ${svcGradients[i % svcGradients.length]} relative`}>
                  <span className="absolute inset-0 grid place-items-center text-brand-ink/40 text-[11px] tracking-[0.2em] uppercase">{label}</span>
                </div>
                <div className="p-4 pb-5.5">
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
      <section className="py-17.5 pt-5">
        <div className="max-w-295 mx-auto px-7">
          <div className="text-center mb-1">
            <span className="font-serif italic text-brand-olive text-[14px]">Our Team</span>
          </div>
          <SectionHeader
            title={<>Meet our Expert <span className="font-serif italic font-normal text-brand-olive">Physiotherapists</span></>}
            subtitle="Senior clinicians with decades of combined experience and a deep commitment to personalised care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {team.map(({ name, role }, i) => (
              <div key={name} className="bg-white border border-brand-line rounded-[16px] p-6 text-center hover:-translate-y-0.75 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`w-35 h-35 rounded-full mx-auto mb-4 relative overflow-hidden bg-linear-to-b ${avatarGradients[i % avatarGradients.length]} shadow-[inset_0_-12px_20px_rgba(38,43,21,0.2)]`}>
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
      <section className="py-7.5 pb-15">
        <div className="max-w-295 mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
            <div>
              <h2 className="text-[32px] mb-9">Why <span className="font-serif italic font-normal text-brand-olive">PhysioPath</span>?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7.5">
                {whyItems.map(({ icon, title, desc }) => (
                  <div key={title}>
                    <div className="w-11 h-11 rounded-full bg-brand-paper border border-brand-line grid place-items-center text-brand-olive mb-3">{icon}</div>
                    <h4 className="text-[15px] mb-1.5">{title}</h4>
                    <p className="text-brand-sage text-[12.8px] leading-[1.55]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-paper border border-brand-line rounded-[18px] p-10 grid place-items-center text-center">
              <div className="w-17 h-17 rounded-[16px] bg-brand-ink grid place-items-center text-brand-mist mx-auto mb-4">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l8.8 8.8 8.8-8.8c1.5-1.5 1.5-4 0-5.5Z" />
                </svg>
              </div>
              <div className="text-[24px] font-extrabold text-brand-ink tracking-[0.04em]">PHYSIOPATH</div>
              <div className="text-[10px] text-brand-sage tracking-[0.18em] mt-1 font-semibold">PAIN RELIEF · REHABILITATION · FITNESS</div>
              <div className="text-[10px] text-brand-olive tracking-[0.18em] mt-3.5 font-semibold border-t border-brand-line pt-2.5">A UNIT OF PHYSIOBIC HEALTHCARE PVT LTD</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} dark />
    </>
  );
}
