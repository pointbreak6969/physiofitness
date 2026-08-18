import PageBanner from "@/components/shared/PageBanner";
import FaqSection from "@/components/shared/FaqSection";
import CTABanner from "@/components/shared/CTABanner";

type Treatment = {
  title: string;
  icon: React.ReactNode;
  overview: string;
  whatToExpect: string;
  conditions: string[];
};

const treatments: Treatment[] = [
  {
    title: "IASTM Therapy",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l4 4 8-12"/><circle cx="18" cy="6" r="2"/><path d="M3 20h18"/></svg>,
    overview: "Instrument-assisted soft tissue mobilization uses specially-shaped steel tools to detect and break down restrictions in fascia, muscle and scar tissue. The tool gives the therapist precise feedback that the hands alone cannot feel.",
    whatToExpect: "Sessions are typically 10–20 minutes of focused treatment. You may feel a 'gritty' sensation as the tool finds adhesions — this is normal and usually subsides. Most patients feel freer and less restricted immediately after.",
    conditions: ["Chronic adhesions", "Scar tissue", "Athletic strains", "Plantar fasciitis", "Tennis elbow", "IT band tightness"],
  },
  {
    title: "Chiropractic PT",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7V4M17 7V4M3 12h18"/></svg>,
    overview: "A blended approach combining gentle spinal and joint adjustments with conventional physiotherapy. It restores normal joint mechanics and alignment while the movement side rebuilds strength and control around the joints.",
    whatToExpect: "An assessment first to confirm safety, then targeted adjustments. You might hear a soft 'pop' — that's gas releasing from the joint, not bone moving. A movement plan follows to make the adjustment last.",
    conditions: ["Postural issues", "Recurring back pain", "Joint mobility limitations", "Neck stiffness", "Sacroiliac dysfunction"],
  },
  {
    title: "Bone Setting",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v6a4 4 0 0 0 8 0V3M8 21v-6a4 4 0 0 1 8 0v6"/></svg>,
    overview: "Manual realignment of joints and minor dislocations to restore normal mechanics. Performed only by senior therapists, always preceded by imaging-led screening to rule out fractures or red-flag conditions.",
    whatToExpect: "You'll be screened with imaging where indicated before any manipulation. The therapist explains exactly what they're about to do, then performs a controlled, precise realignment followed by guidance to protect the joint.",
    conditions: ["Minor dislocations", "Joint misalignment", "Misaligned bones post-injury", "Locked joints"],
  },
  {
    title: "Dry Needling",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>,
    overview: "Fine filiform needles are inserted into myofascial trigger points — hypersensitive knots in tight muscle bands. The needle provokes a local twitch response that releases the knot, improves circulation and accelerates healing.",
    whatToExpect: "You'll feel a brief, light prick on insertion and often a satisfying muscle twitch when the trigger point releases. Mild soreness for a day or two is normal. Relief in the treated muscle is usually immediate and progressive.",
    conditions: ["Myofascial trigger points", "Muscle tension", "Headaches and migraines", "Neck and shoulder pain", "Low back pain", "Sports tightness"],
  },
  {
    title: "Taping Therapy",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 4 4 6 4 10s-4 10-4 10M8 12c0 4 4 6 4 10"/></svg>,
    overview: "Kinesio and rigid taping support muscles and joints during activity without restricting normal movement. It aids swelling reduction, provides postural cueing, and bridges the gap between clinic sessions.",
    whatToExpect: "The therapist applies the tape according to the goal — support, unloading or swelling control. It's worn for 2–5 days and stays on through showers and light activity. You'll be shown how to manage it at home.",
    conditions: ["Swelling reduction", "Postural cueing", "Joint support", "Sports injuries", "Recovery between sessions"],
  },
  {
    title: "Cupping Therapy",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M4 6h16M4 18h16"/></svg>,
    overview: "Negative-pressure cups decompress the fascia and boost local circulation. This draws blood to the area, promotes tissue repair and releases stubborn tension in larger muscle groups.",
    whatToExpect: "Cups are applied and left for a few minutes; you'll feel suction and a pulling sensation. Round marks may remain for a few days — these are not bruises but pooling of blood from the suction. Movement improves rapidly.",
    conditions: ["Neck tension", "Shoulder tightness", "Lower back tension", "Recovery tightness", "Repetitive strain"],
  },
  {
    title: "IFT / Ultrasound",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l2-5 4 10 2-5 2 3h5"/></svg>,
    overview: "Interferential current (IFT) delivers pain-modulating electrical stimulation deep into the tissues, while therapeutic ultrasound uses sound waves for deep tissue healing. Both are often combined with manual therapy.",
    whatToExpect: "With IFT you'll feel a comfortable tingling; intensity is set with you so it stays within tolerance. Ultrasound is a warm, subtle sensation through a gel pad. Sessions are short and comfortable.",
    conditions: ["Pain modulation", "Soft-tissue healing", "Joint pain", "Inflammation", "Muscle spasm"],
  },
  {
    title: "Myofascial Release",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7"/><path d="M9 12h6"/></svg>,
    overview: "Sustained hands-on pressure on fascial restrictions to restore tissue glide. The therapist finds the stiff fascia and holds gentle traction until it releases — a powerful tool for chronic tightness.",
    whatToExpect: "The therapist applies slow, sustained pressure and may ask you to move slowly through the affected region. You might feel a 'melting' sensation as the tissue releases. Deep relaxation follows.",
    conditions: ["Chronic tightness", "Post-immobilisation stiffness", "Fascial restrictions", "Scar tissue", "Widespread tension"],
  },
  {
    title: "Muscle Energy Technique",
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="2"/><path d="M9 22l2-8 3 2 4-2-2 8M5 12l4-2"/></svg>,
    overview: "A gentle, active technique where you perform light contractions against precisely calibrated resistance. This resets joint range and relaxes muscle spasm without provoking pain.",
    whatToExpect: "You'll actively push for a few seconds against the therapist's resistance, then fully relax as the joint is guided further into range. It's painless, empowering, and very effective for stiff joints.",
    conditions: ["Joint range restriction", "Muscle spasm", "Posture imbalances", "Stiff joints", "Recurring soreness"],
  },
];

const conditions = [
  { condition: "Back & Sciatica", treatments: ["Chiropractic PT", "IASTM", "Cupping", "MET"] },
  { condition: "Neck & Shoulder", treatments: ["Dry Needling", "IASTM", "Taping", "MET"] },
  { condition: "Knee & Joint Pain", treatments: ["IFT/Ultrasound", "Taping", "Bone Setting", "MET"] },
  { condition: "Sports Injuries", treatments: ["IASTM", "Dry Needling", "Taping", "Cupping"] },
  { condition: "Headaches & Migraine", treatments: ["Dry Needling", "Myofascial Release", "MET"] },
  { condition: "Post-Surgical Rehab", treatments: ["Myofascial Release", "Taping", "IFT/Ultrasound"] },
];

const faqs = [
  {
    q: "Which conditions are best treated at Physiofitness?",
    a: "Orthopaedic, neurological, sports, post-surgical, paediatric, and chronic-pain conditions all fall within our scope. The intake assessment confirms suitability and recommends the most appropriate modality mix.",
  },
  {
    q: "What is IASTM and how does it help?",
    a: "IASTM (Instrument Assisted Soft Tissue Mobilisation) uses specially-shaped tools to detect and treat soft-tissue restrictions. It's particularly effective for adhesions, scar tissue and persistent muscle tightness.",
  },
  {
    q: "How many sessions before I see results?",
    a: "Most patients notice change within 3–5 sessions. Full recovery timelines vary by condition and severity — your therapist will give a personalised estimate after the initial assessment.",
  },
  {
    q: "What makes robotic-assisted therapy different?",
    a: "Robotic systems provide precise, repeatable force control and continuous progress data. Especially valuable in neurological rehabilitation, where intensity and consistency directly drive outcomes.",
  },
  {
    q: "Is bone setting or chiropractic PT safe?",
    a: "When performed by qualified senior therapists, yes — and we screen every patient for red-flag conditions before any manipulation. You'll be told exactly what's being done and why.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageBanner title="Treatments" crumb="Treatments" />

      {/* Intro */}
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[28px] text-brand-olive mb-3 tracking-[-0.01em]">Advanced Physiotherapy Treatments &amp; Rehabilitation in Pokhara</h2>
            <p className="text-brand-sage text-[14.5px]">Nine specialist modalities, tailored to your specific condition and goals. Every plan starts with a thorough assessment by a senior physiotherapist — and no modality is ever used without a clear clinical reason.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {treatments.map(({ title, icon, overview, whatToExpect, conditions: suited }) => (
              <div key={title} className="bg-white border border-brand-line rounded-[18px] p-[26px_28px] sm:p-[30px_34px] gap-6 hover:shadow-[0_22px_44px_-24px_rgba(38,43,21,0.25)] transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="w-16 h-16 rounded-full bg-brand-paper border border-brand-line grid place-items-center text-brand-olive flex-shrink-0">{icon}</span>
                      <h3 className="text-[20px] tracking-[-0.01em]">{title}</h3>
                    </div>
                    <h4 className="text-brand-olive text-[12px] font-bold tracking-[0.08em] uppercase mb-1.5">Overview</h4>
                    <p className="text-[#3f3f3f] text-[14.5px] leading-[1.7] mb-4">{overview}</p>
                    <h4 className="text-brand-olive text-[12px] font-bold tracking-[0.08em] uppercase mb-1.5">What To Expect</h4>
                    <p className="text-[#3f3f3f] text-[14.5px] leading-[1.7]">{whatToExpect}</p>
                  </div>
                  <div className="lg:border-l lg:border-brand-line lg:pl-8">
                    <h4 className="text-brand-olive text-[12px] font-bold tracking-[0.08em] uppercase mb-3">Best Suited For</h4>
                    <div className="flex flex-wrap gap-2">
                      {suited.map((s) => (
                        <span key={s} className="inline-block bg-brand-paper border border-brand-line rounded-full px-3 py-1.5 text-[12px] font-medium text-brand-ink">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions mapping */}
      <section className="bg-brand-paper2 py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[32px] tracking-[-0.01em] mb-3">Which Treatment Is <span className="font-serif italic font-normal text-brand-olive">Right For You?</span></h2>
            <p className="text-brand-sage text-[14.5px]">A quick reference for which of our modalities best matches common conditions. Your assessment will confirm the final plan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map(({ condition, treatments: tx }) => (
              <div key={condition} className="bg-white border border-brand-line rounded-[16px] p-6">
                <h4 className="text-[16px] mb-3">{condition}</h4>
                <div className="flex flex-wrap gap-2">
                  {tx.map((t) => (
                    <span key={t} className="inline-block bg-brand-olive/10 text-brand-olive border border-brand-olive/20 rounded-full px-3 py-1 text-[11.5px] font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CTABanner title="Not Sure Where To Start?" subtitle="Book an assessment and we'll match the right modalities to your condition" buttonText="Book Your Assessment" buttonHref="/contact" />
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
