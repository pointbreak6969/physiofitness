interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, dark }: SectionHeaderProps) {
  return (
    <div className="text-center">
      {eyebrow && (
        <span
          className={`inline-block text-[11px] tracking-[0.22em] font-bold uppercase px-[14px] py-[6px] border rounded-full mb-3 ${
            dark
              ? "text-brand-mist border-brand-mist/40 bg-transparent"
              : "text-brand-olive border-brand-mist bg-brand-paper"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[36px] leading-[1.15] tracking-[-0.02em] my-[14px] ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[620px] mx-auto text-[15px] ${
            dark ? "text-brand-mist" : "text-brand-sage"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
