import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-mist pt-14 pb-7">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-11">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[38px] h-[38px] rounded-[10px] bg-brand-olive grid place-items-center text-brand-mist flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l8.8 8.8 8.8-8.8c1.5-1.5 1.5-4 0-5.5Z" />
                </svg>
              </span>
              <span className="text-[17px] font-extrabold tracking-[0.02em] text-white leading-tight">
                PhysioFitness

              </span>
            </div>
            <p className="text-[13.5px] leading-[1.65] text-brand-mist mb-[18px]">
              A centre built around one simple belief: movement is medicine when it is guided, safe and
              personalized.

            </p>
            <div className="flex gap-[10px]">
              {[
                { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590686037398", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", href: "https://www.instagram.com/physiofitnesspainandr.c/", path: "M12 2.2c-2.7 0-3 0-4 .1-1.1 0-1.8.2-2.4.5-.7.3-1.3.7-1.8 1.3-.6.5-1 1.1-1.3 1.8-.3.6-.5 1.3-.5 2.4-.1 1-.1 1.3-.1 4s0 3 .1 4c0 1.1.2 1.8.5 2.4.3.7.7 1.3 1.3 1.8.5.6 1.1 1 1.8 1.3.6.3 1.3.5 2.4.5 1 .1 1.3.1 4 .1s3 0 4-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.3-.7 1.8-1.3.6-.5 1-1.1 1.3-1.8.3-.6.5-1.3.5-2.4.1-1 .1-1.3.1-4s0-3-.1-4c0-1.1-.2-1.8-.5-2.4-.3-.7-.7-1.3-1.3-1.8-.5-.6-1.1-1-1.8-1.3-.6-.3-1.3-.5-2.4-.5-1-.1-1.3-.1-4-.1zm0 1.8c2.7 0 3 0 4 .1.9 0 1.4.2 1.8.3.5.2.8.4 1.1.7.3.3.6.6.7 1.1.1.4.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.4-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.6-1.1.7-.4.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.4-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.6-.7-1.1-.1-.4-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.4.3-1.8.2-.5.4-.8.7-1.1.3-.3.6-.6 1.1-.7.4-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1zm0 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM18.4 6.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" },
                { label: "TikTok", href: "https://www.tiktok.com/@physiofitness8", path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12V9.77a5.76 5.76 0 0 0-.78-.05 5.68 5.68 0 1 0 5.68 5.68V9.16a7.3 7.3 0 0 0 4.24 1.37V7.44a4.28 4.28 0 0 1-3.18-1.62z" },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full bg-white/[0.06] grid place-items-center p-0 hover:bg-brand-olive transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-[13px] tracking-[0.18em] mb-[18px] uppercase font-bold">Quick Links</h5>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/treatments", label: "Treatments" },
              { href: "/team", label: "Our Team" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block py-[4px] text-[13.5px] text-brand-mist hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Treatments */}
          <div>
            <h5 className="text-white text-[13px] tracking-[0.18em] mb-[18px] uppercase font-bold">Treatments</h5>
            {["IASTM Therapy", "Chiropractic PT", "Dry Needling", "Cupping Therapy", "Myofascial Release"].map((t) => (
              <Link key={t} href="/treatments" className="block py-[4px] text-[13.5px] text-brand-mist hover:text-white transition-colors">
                {t}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-[13px] tracking-[0.18em] mb-[18px] uppercase font-bold">Get in Touch</h5>
            <a href="tel:+918867863637" className="block py-[4px] text-[13.5px] text-brand-mist hover:text-white transition-colors">+977 061-451237 </a>
            <a href="mailto:physiofitnesspain@gmail.com" className="block py-[4px] text-[13.5px] text-brand-mist hover:text-white transition-colors">physiofitnesspain@gmail.com</a>
            <a href="#" className="block py-[4px] text-[13.5px] text-brand-mist hover:text-white transition-colors">
              Birauta-17<br />Pokhara, 33700
            </a>
            <span className="block mt-3 text-[13.5px] text-brand-mist font-semibold">Mon — Sat · 07:00 – 21:00</span>
          </div>
        </div>

        <div className="mt-11 border-t border-brand-mist/[0.18] pt-[22px] flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-brand-sage">
          <span>© 2026 Physiofitness · A Unit of Physiobic Healthcare Pvt Ltd</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
