import Image from "next/image";
import PageBanner from "@/components/shared/PageBanner";

const team = [
  { name: "Dr. Prakat Khanal", role: "Co-Founder & Physiotherapist", image: "/teammember1.jpg" },
  { name: "Yuddha Baral", role: "Co-Founder & Head of Management", image: "/teammember2.jpg" },
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

          {/* Team — circular avatars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[760px] mx-auto">
            {team.map(({ name, role, image }) => (
              <div key={name} className="bg-white border border-brand-line rounded-[16px] p-7 pb-[26px] text-center hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(38,43,21,0.25)] transition-[transform,box-shadow] duration-200">
                <div className="w-[150px] h-[150px] rounded-full mx-auto mb-[18px] relative overflow-hidden shadow-[inset_0_-16px_24px_rgba(38,43,21,0.2)]">
                  <Image src={image} alt={name} fill sizes="150px" className="object-cover" />
                </div>
                <h4 className="text-[16px] mb-[6px]">{name}</h4>
                <p className="text-brand-sage text-[13px]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}