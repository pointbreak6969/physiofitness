import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({ title, subtitle, buttonText, buttonHref }: CTABannerProps) {
  return (
    <div className="relative mt-14 bg-brand-ink text-brand-paper rounded-[18px] px-7 py-[22px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
      <div
        className="absolute inset-0 rounded-[18px]"
        style={{ background: "radial-gradient(circle at 90% 50%, rgba(175,180,173,0.18), transparent 60%)" }}
      />
      <div className="relative flex items-center gap-[18px]">
        <span className="w-[44px] h-[44px] rounded-full bg-brand-blue grid place-items-center text-brand-paper flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
        <div>
          <h4 className="text-white text-[18px]">{title}</h4>
          <p className="text-brand-mist text-[13px] mt-[2px]">{subtitle}</p>
        </div>
      </div>
      <Link
        href={buttonHref}
        className="relative inline-flex items-center gap-[8px] bg-brand-blue text-white rounded-full px-[22px] py-[12px] text-[13px] font-semibold hover:opacity-90 transition-opacity flex-shrink-0"
      >
        {buttonText}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
