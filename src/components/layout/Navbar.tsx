"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, X, Menu, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const phoneNumbers = [
  { label: "Main Clinic", number: "+91 88678 63637", href: "tel:+918867863637" },
  { label: "Alternate", number: "+91 99001 12345", href: "tel:+919900112345" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/treatments", label: "Treatments" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setCallOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close call dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (callRef.current && !callRef.current.contains(e.target as Node)) {
        setCallOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
    <nav className="bg-brand-paper border-b border-brand-line sticky top-0 z-40">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] text-brand-ink font-extrabold tracking-[0.02em]">
          <span className="w-[38px] h-[38px] rounded-[10px] bg-brand-ink grid place-items-center text-brand-mist flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l8.8 8.8 8.8-8.8c1.5-1.5 1.5-4 0-5.5Z" />
            </svg>
          </span>
          <span className="text-[17px] leading-tight">
            PHYSIOPATH
            <small className="block text-[8.5px] text-brand-sage font-semibold tracking-[0.18em] mt-[-2px]">
              ROBOTICS PHYSIO
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-[30px]">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-[14px] font-medium py-[6px] transition-colors ${
                  isActive
                    ? "text-brand-ink font-bold after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-brand-olive after:rounded-[2px]"
                    : "text-[#3f3f3f] hover:text-brand-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
          {/* Desktop Call Now dropdown */}
          <div ref={callRef} className="relative">
            <button
              onClick={() => setCallOpen((v) => !v)}
              className="inline-flex items-center gap-[6px] bg-brand-ink text-white rounded-full px-[18px] py-[10px] text-[13px] font-semibold hover:bg-brand-olive transition-colors"
            >
              <Phone size={14} />
              Call Now
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${callOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 top-[calc(100%+10px)] w-[220px] bg-white border border-brand-line rounded-[14px] shadow-[0_16px_40px_-12px_rgba(38,43,21,0.2)] overflow-hidden transition-all duration-200 origin-top-right ${
                callOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
            >
              {phoneNumbers.map(({ label, number, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setCallOpen(false)}
                  className="flex items-center gap-3 px-4 py-[14px] hover:bg-brand-paper transition-colors group border-b border-brand-line last:border-b-0"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-paper border border-brand-line grid place-items-center text-brand-olive flex-shrink-0 group-hover:bg-brand-olive group-hover:text-white group-hover:border-brand-olive transition-colors">
                    <Phone size={13} />
                  </span>
                  <div>
                    <div className="text-[11px] text-brand-sage font-semibold tracking-[0.04em] uppercase">{label}</div>
                    <div className="text-[13.5px] text-brand-ink font-semibold">{number}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hamburger button — icon morphs with rotation */}
        <button
          className="lg:hidden p-2 text-brand-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`block transition-transform duration-300 ${mobileOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      {/* Mobile drawer — always in DOM so CSS transitions play on close too */}
      <div
        className={`lg:hidden fixed inset-0 top-[76px] z-30 flex transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-brand-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel slides in from the right */}
        <div
          className={`relative ml-auto w-[280px] h-full bg-brand-paper border-l border-brand-line flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {navLinks.map(({ href, label }, i) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between py-4 border-b border-brand-line text-[15px] font-medium transition-all duration-200 ${
                    mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  } ${isActive ? "text-brand-olive font-bold" : "text-brand-ink hover:text-brand-olive"}`}
                >
                  {label}
                  {isActive && (
                    <span className="w-[6px] h-[6px] rounded-full bg-brand-olive" />
                  )}
                </Link>
              );
            })}
          </div>

          <div
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 40}ms` : "0ms" }}
            className={`p-6 border-t border-brand-line transition-all duration-200 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-brand-ink text-white rounded-full py-3 text-[13px] font-semibold hover:bg-brand-olive transition-colors"
            >
              <Phone size={14} />
              Call Now: +91 88678 63637
            </Link>
          </div>
        </div>
      </div>
    </nav>

    {/* WhatsApp button — hidden while mobile drawer is open */}
    <a
      href="#"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className={`fixed right-[22px] bottom-[22px] w-[52px] h-[52px] rounded-full bg-brand-green text-white grid place-items-center shadow-[0_12px_30px_-8px_rgba(0,30,61,0.4)] z-50 hover:-translate-y-[3px] transition-all duration-300 ${
        mobileOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
      }`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3c-.9-1.3-1.3-2.9-1.3-4.5C3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2z" />
      </svg>
    </a>
    </>
  );
}
