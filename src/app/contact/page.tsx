import PageBanner from "@/components/shared/PageBanner";
import ContactForm from "./ContactForm";

export default function ContactPage() {

  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact Us" />

      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-brand-olive text-brand-paper grid place-items-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[22px] text-brand-ink mb-1">Email</h4>
                <p className="text-brand-sage text-[14.5px]">care@physiopath.in</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-brand-olive text-brand-paper grid place-items-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[22px] text-brand-ink mb-1">Phone</h4>
                <p className="text-brand-sage text-[14.5px]">+977 9864430711</p>
              </div>
            </div>
          </div>

          {/* Address card */}
          <div className="relative bg-brand-ink text-brand-paper rounded-[22px] px-6 py-8 sm:px-12 sm:py-14 max-w-[540px] overflow-hidden mb-9">
            <div className="absolute right-[-40px] top-[-40px] w-[200px] h-[200px] rounded-full bg-brand-mist/[0.06]" />
            <h3 className="text-white text-[30px] tracking-[-0.01em] mb-[18px] relative z-10">
              <span className="font-serif italic font-normal text-brand-mist">Our</span> Address
            </h3>
            <p className="text-brand-mist text-[15px] leading-[1.6] relative z-10">
              Birauta-17, Pokhara
            </p>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-[22px] border border-brand-line p-6 sm:p-[56px_60px] mt-9">
            <h2 className="text-[30px] tracking-[-0.01em] mb-2">
              Fill Contact Form{" "}
              <span className="font-serif italic font-normal text-brand-olive">To Reach Us.</span>{" "}
              It&apos;s <span className="font-serif italic font-normal text-brand-olive">Easy.</span>
            </h2>
            <p className="text-brand-sage text-[14px] mb-9">Please fill out the form below and we will get back to you soon.</p>
            <ContactForm />
          </div>

          {/* Map placeholder */}
          <div
            className="mt-12 rounded-[18px] overflow-hidden border border-brand-line aspect-[4/3] sm:aspect-[16/5] relative"
            style={{
              background: `
                repeating-linear-gradient(0deg, transparent 0 60px, rgba(47,121,41,.12) 60px 61px),
                repeating-linear-gradient(90deg, transparent 0 60px, rgba(47,121,41,.12) 60px 61px),
                linear-gradient(135deg, #e5f6cc, #cde98a)
              `,
            }}
          >
            {/* <div
              className="absolute left-[52%] top-[42%] w-[38px] h-[38px] rounded-[50%_50%_50%_0] bg-brand-olive shadow-[0_10px_24px_-8px_rgba(38,43,21,0.5)] grid place-items-center"
              style={{ transform: "rotate(-45deg)" }}
            >
              <div className="w-[14px] h-[14px] rounded-full bg-white" />
            </div>
            <div className="absolute left-[50%] top-[58%] bg-white border border-brand-line px-[18px] py-[10px] rounded-full text-[13px] font-semibold text-brand-ink shadow-[0_8px_20px_-6px_rgba(38,43,21,0.25)]">
              PhysioPath · HBR Layout
            </div> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.39856379568!2d83.9736332!3d28.195200999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595003dc815ab%3A0xbdfa1d91f44316e6!2sPhysioFitness%20Pain%20And%20Rehabilitation%20Centre!5e0!3m2!1sen!2snp!4v1780385376366!5m2!1sen!2snp"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
  