"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  dark?: boolean;
}

export default function FaqSection({ faqs, dark }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`py-[70px] pb-[90px] ${dark ? "bg-brand-ink" : "bg-white"}`}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader
          eyebrow="Got Questions?"
          title={
            <>
              Frequently Asked{" "}
              <span className={`font-serif italic font-normal ${dark ? "text-brand-mist" : "text-brand-olive"}`}>
                Questions
              </span>
            </>
          }
          subtitle="Clear, honest answers about how we work, what to expect, and how to get started."
          dark={dark}
        />

        

        <div className="max-w-[780px] mx-auto grid gap-[10px]">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className={`border rounded-[12px] px-[22px] py-[18px] cursor-pointer transition-colors ${
                dark
                  ? "bg-white/[0.04] border-brand-mist/[0.18] hover:bg-white/[0.07]"
                  : "bg-white border-brand-line hover:border-brand-mist"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-[14.5px] font-semibold ${dark ? "text-white" : "text-brand-ink"}`}>{q}</span>
                <span
                  className={`w-[28px] h-[28px] rounded-full flex-shrink-0 grid place-items-center font-bold text-[16px] transition-colors ${
                    open === i
                      ?                       dark
                        ? "bg-brand-mist text-brand-ink"
                        : "bg-brand-blue text-white"
                      : "bg-brand-blue text-white"
                  }`}
                >
                  {open === i ? "−" : "+"}
                </span>
              </div>
              {open === i && (
                <p className={`mt-[14px] text-[13.5px] leading-[1.65] max-w-[90%] ${dark ? "text-brand-mist" : "text-brand-sage"}`}>
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
