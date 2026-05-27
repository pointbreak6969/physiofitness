"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

const fields = [
  { label: "Your Name", type: "text", placeholder: "Jane Doe", name: "name" },
  { label: "Your Email", type: "email", placeholder: "jane@email.com", name: "email" },
  { label: "Your Mobile Number", type: "tel", placeholder: "+91 …", name: "mobile" },
  { label: "Subject", type: "text", placeholder: "What's this about?", name: "subject" },
] as const;

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Form submitted successfully! We will get back to you soon.");
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.message || "Failed to submit the form. Please try again.");
    }
  }, [state]);

  return (
    <form ref={formRef} action={action}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px_26px]">
        {fields.map(({ label, type, placeholder, name }) => (
          <div key={name}>
            <label className="block text-[12.5px] text-brand-sage font-semibold mb-2 tracking-[0.02em]">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required
              className="w-full bg-brand-paper border border-brand-line rounded-full px-[22px] py-[14px] text-[14px] text-brand-ink outline-none focus:border-brand-olive focus:bg-white transition-[border-color,background-color]"
            />
          </div>
        ))}
        <div className="col-span-full">
          <label className="block text-[12.5px] text-brand-sage font-semibold mb-2 tracking-[0.02em]">
            Your Message (optional)
          </label>
          <textarea
            name="message"
            placeholder="Tell us a bit about your condition or what you're looking for…"
            rows={6}
            className="w-full bg-brand-paper border border-brand-line rounded-[18px] px-[22px] py-4 text-[14px] text-brand-ink outline-none focus:border-brand-olive focus:bg-white transition-[border-color,background-color] resize-y"
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 bg-brand-ink text-white rounded-full px-[22px] py-3 text-[13px] font-semibold hover:bg-brand-olive transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
