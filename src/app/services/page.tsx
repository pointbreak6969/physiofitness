import PageBanner from "@/components/shared/PageBanner";

const services = [
  { label: "Back Pain", title: "Back Pain Physiotherapy", desc: "Targeted programmes for disc-related, postural, and muscular back pain. Combines manual therapy, core retraining, and ergonomic coaching for durable relief." },
  { label: "Knee Pain", title: "Knee Pain Physiotherapy", desc: "From osteoarthritis to ligament injuries — strength, biomechanics, and load management to restore confident, pain-free movement." },
  { label: "Shoulder", title: "Shoulder Physiotherapy", desc: "Frozen shoulder, rotator cuff, impingement — full-range, full-strength recovery with progressive, sport-specific or daily-life return." },
  { label: "Post-Surgical", title: "Post-Surgical Rehab", desc: "Phased rehabilitation from hospital discharge through to full function. Close coordination with your surgical team and milestone-based progression." },
  { label: "Sports Injury", title: "Sports Injury Rehabilitation", desc: "Sprains, strains, fractures, overuse — return-to-sport pathways tested for elite athletes and weekend warriors alike." },
  { label: "Chronic Pain", title: "Chronic Pain Management", desc: "Multimodal plans for arthritis, sciatica, and persistent pain syndromes. Focus on function, sleep, and quality of life — not just pain scores." },
  { label: "Neurological", title: "Neurological Physiotherapy", desc: "Stroke, Parkinson's, and post-injury motor recovery using robotic gait training and high-volume, high-precision practice." },
  { label: "Posture", title: "Post-Posture Correction", desc: "Desk-worker reset programmes targeting neck-shoulder strain. Biomechanical assessment plus a take-home plan that fits your day." },
  { label: "Paediatric", title: "Paediatric Physiotherapy", desc: "Developmental delays, congenital and acquired conditions. Play-based, child-led sessions that keep little patients engaged and progressing." },
  { label: "Neck Pain", title: "Neck Pain Management", desc: "Cervical mobilisation, trigger-point release, and posture-coaching for relief that lasts beyond the session." },
];

const gradients = [
  "from-[#0070c4] to-[#3399e0]",
  "from-[#007fda] to-[#66b3e8]",
  "from-[#005aa0] to-[#007fda]",
  "from-[#0068b8] to-[#99caf0]",
  "from-[#99caf0] to-[#0070c4]",
  "from-[#003566] to-[#007fda]",
  "from-[#007fda] to-[#cce3f8]",
  "from-[#66b3e8] to-[#005aa0]",
  "from-[#0070c4] to-[#b3d8f5]",
  "from-[#0068b8] to-[#66b3e8]",
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" crumb="Services" />

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[36px] text-brand-ink mb-3 tracking-[-0.02em]">
              Our <span className="font-serif italic font-normal text-brand-olive">Services</span>
            </h2>
            <p className="text-brand-sage text-[14.5px]">Condition-specific care pathways covering everything we see at the clinic — from desk-worker back pain to post-stroke rehabilitation. Every plan begins with an assessment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map(({ label, title, desc }, i) => (
              <div key={title} className="bg-white rounded-[14px] overflow-hidden border border-brand-line hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className={`aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} relative`}>
                  <span className="absolute inset-0 grid place-items-center text-brand-ink/35 text-[10.5px] tracking-[0.24em] uppercase">{label}</span>
                </div>
                <div className="p-[18px_20px_24px]">
                  <h4 className="text-[15.5px] mb-[10px] text-center">{title}</h4>
                  <p className="text-brand-sage text-[12.8px] leading-[1.6]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
