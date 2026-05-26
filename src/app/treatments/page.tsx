import PageBanner from "@/components/shared/PageBanner";
import FaqSection from "@/components/shared/FaqSection";

const treatments = [
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l4 4 8-12"/><circle cx="18" cy="6" r="2"/><path d="M3 20h18"/></svg>,
    title: "IASTM Therapy",
    desc: "PhysioPath uses instrument-assisted soft tissue mobilization to reduce pain, increase mobility, and speed recovery — particularly effective for chronic adhesions, scar tissue, and athletic strains.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7V4M17 7V4M3 12h18"/></svg>,
    title: "Chiropractic PT",
    desc: "A blended approach combining spinal adjustments with conventional physiotherapy. Best suited for postural issues, recurring back pain, and joint mobility limitations.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v6a4 4 0 0 0 8 0V3M8 21v-6a4 4 0 0 1 8 0v6"/></svg>,
    title: "Bone Setting",
    desc: "Manual realignment of joints and minor dislocations to restore normal mechanics. Performed only by senior therapists, with imaging-led screening first.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>,
    title: "Dry Needling",
    desc: "Fine filiform needles target myofascial trigger points to release tension, improve circulation, and accelerate healing in tight or overworked muscles.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 4 4 6 4 10s-4 10-4 10M8 12c0 4 4 6 4 10"/></svg>,
    title: "Taping Therapy",
    desc: "Kinesio and rigid taping support muscles and joints during activity. Used for swelling reduction, postural cueing, and recovery between sessions.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M4 6h16M4 18h16"/></svg>,
    title: "Cupping Therapy",
    desc: "Negative-pressure cups decompress fascia and boost local circulation. Particularly effective for stubborn neck, shoulder, and lower back tension.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l2-5 4 10 2-5 2 3h5"/></svg>,
    title: "IFT / Ultrasound",
    desc: "Interferential current and therapeutic ultrasound for pain modulation and deep tissue healing — often combined with manual therapy for compound results.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7"/><path d="M9 12h6"/></svg>,
    title: "Myofascial Release",
    desc: "Sustained, hands-on pressure on fascial restrictions to restore tissue glide. Excellent for chronic tightness and post-immobilisation stiffness.",
  },
  {
    icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="2"/><path d="M9 22l2-8 3 2 4-2-2 8M5 12l4-2"/></svg>,
    title: "Muscle Energy Technique",
    desc: "Active patient-led contractions against precisely calibrated resistance. Restores joint range and relaxes muscle spasm without provoking pain.",
  },
];

const faqs = [
  {
    q: "Which conditions are best treated at PhysioPath?",
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

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[28px] text-brand-olive mb-3 tracking-[-0.01em]">Advanced Physiotherapy Treatments &amp; Rehabilitation in Bangalore</h2>
            <p className="text-brand-sage text-[14.5px]">Nine specialist modalities, tailored to your specific condition and goals. Every plan starts with a thorough assessment by a senior physiotherapist.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-9">
            {treatments.map(({ icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-24 h-24 rounded-full bg-white border border-brand-line shadow-[0_18px_36px_-20px_rgba(38,43,21,0.25)] mx-auto mb-4 grid place-items-center text-brand-olive group-hover:-translate-y-1 group-hover:shadow-[0_24px_40px_-18px_rgba(38,43,21,0.3)] transition-[transform,box-shadow] duration-200">
                  {icon}
                </div>
                <h4 className="text-[15px] mb-3">{title}</h4>
                <p className="text-brand-sage text-[13px] leading-[1.6] text-left">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
