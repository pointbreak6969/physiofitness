import Link from "next/link";
import { Home } from "lucide-react";

interface PageBannerProps {
  title: string;
  crumb: string;
}

export default function PageBanner({ title, crumb }: PageBannerProps) {
  return (
    <section
      className="relative h-[260px] overflow-hidden"
      style={{
        background: `
          linear-gradient(90deg, var(--brand-paper) 0%, var(--brand-paper) 40%, rgba(240,248,255,0) 80%),
          linear-gradient(135deg, #b3d8f5 0%, #3399e0 60%, #005aa0 100%)
        `,
      }}
    >
      {/* Decorative panel */}
      <div
        className="absolute right-[4%] top-[8%] bottom-[8%] w-[46%] rounded-[24px] opacity-[0.65]"
        style={{
          background: `
            radial-gradient(ellipse at 55% 35%, #e8f4ff 0 14%, transparent 15%),
            linear-gradient(180deg, #cce3f8 30%, #66b3e8 70%, #005aa0 100%)
          `,
          maskImage: "linear-gradient(90deg, transparent 0, #000 25%, #000 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 25%, #000 100%)",
        }}
      />
      {/* Stripe accent */}
      <div
        className="absolute right-[10%] top-[35%] w-[14%] h-[8%] bg-brand-ink rounded-[4px] opacity-70"
        style={{ transform: "rotate(-12deg)" }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-7 h-full flex flex-col justify-center gap-[14px]">
        <h1 className="text-[44px] text-brand-olive tracking-[-0.02em]">{title}</h1>
        <div className="inline-flex items-center gap-[10px] bg-white border border-brand-line rounded-full px-[18px] py-[8px] text-[13px] text-[#3f3f3f] font-semibold self-start">
          <Link href="/" className="text-brand-sage hover:text-brand-ink transition-colors">
            <Home size={14} />
          </Link>
          <span className="text-brand-sage">›</span>
          <span className="text-brand-ink">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
