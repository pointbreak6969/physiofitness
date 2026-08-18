"use client";

import { useRef, useState } from "react";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";

const toolbarButtons = [
  {
    label: "Bold",
    title: "Bold",
    icon: "B",
    action: () => {
      return { prefix: "**", suffix: "**" };
    },
    className: "font-bold text-[15px]",
  },
  {
    label: "Heading",
    title: "Heading (H2)",
    icon: "H",
    action: () => ({ prefix: "## ", suffix: "\n\n" }),
    className: "font-bold text-[15px]",
  },
  {
    label: "Subheading",
    title: "Subheading (H3)",
    icon: "H3",
    action: () => ({ prefix: "### ", suffix: "\n\n" }),
    className: "font-bold text-[13px]",
  },
  {
    label: "Bullet list",
    title: "Bullet List",
    icon: "• ≡",
    action: () => ({ prefix: "- ", suffix: "" }),
    className: "",
  },
  {
    label: "Table",
    title: "Table",
    icon: "▦",
    action: () => ({
      prefix:
        "| Header 1 | Header 2 | Header 3 |\n| --- | --- | --- |\n| Cell | Cell | Cell |\n",
      suffix: "",
    }),
    className: "",
  },
] as const;

export default function MarkdownEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  function applyAction(
    action: (sel: { start: number; end: number; text: string }) => {
      prefix: string;
      suffix: string;
    }
  ) {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = value.slice(start, end);
    const { prefix, suffix } = action({ start, end, text });
    const next = value.slice(0, start) + prefix + text + suffix + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      const newPos = start + prefix.length + text.length;
      el.setSelectionRange(newPos, newPos);
    });
  }

  return (
    <div className="border border-brand-line rounded-[14px] overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex items-center gap-1.5 border-b border-brand-line px-3 py-2 bg-brand-paper flex-wrap">
        {toolbarButtons.map((b) => (
          <button
            key={b.label}
            type="button"
            title={b.title}
            onClick={() => applyAction(b.action)}
            className={`w-9 h-9 rounded-[8px] grid place-items-center text-brand-ink hover:bg-brand-olive hover:text-white transition-colors cursor-pointer ${b.className}`}
          >
            {b.icon}
          </button>
        ))}
        <div className="flex-1" />
        <div className="flex items-center gap-1 bg-white border border-brand-line rounded-full p-1">
          {[
            { id: "edit", label: "Edit" },
            { id: "preview", label: "Preview" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setShowPreview(t.id === "preview")}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-colors cursor-pointer ${
                (t.id === "preview") === showPreview
                  ? "bg-brand-olive text-white"
                  : "text-brand-sage hover:text-brand-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {showPreview ? (
        <div className="p-6 max-h-[520px] overflow-y-auto">
          {value.trim() ? (
            <MarkdownRenderer markdown={value} />
          ) : (
            <p className="text-brand-sage text-[14px]">Nothing to preview yet — start writing in Edit mode.</p>
          )}
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your blog post in Markdown… Use the toolbar above for bold, headings, bullet points and tables."
          className="w-full min-h-[420px] bg-white border-0 outline-none p-[22px_24px] text-[14.5px] leading-[1.7] text-brand-ink resize-y font-sans placeholder:text-brand-sage"
        />
      )}
    </div>
  );
}
