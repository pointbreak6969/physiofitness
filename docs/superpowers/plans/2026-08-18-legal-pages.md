# Legal Pages (Privacy, Terms, Cookies) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Privacy Policy, Terms & Conditions, and Cookie Policy pages to the PhysioFitness site and link them from the footer.

**Architecture:** Three static Next.js server-component routes (`/privacy`, `/terms`, `/cookies`), each reusing the existing `PageBanner` component and a new shared `LegalSection` presentational component, with footer links added in `Footer.tsx`.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS.

## Global Constraints

- Do NOT add comments to code.
- Use existing site styling conventions: `max-w-[1180px] mx-auto px-7` content wrapper; body text `text-[#3f3f3f] text-[14.5px]`; section headings `text-[24px]`/`text-[26px]` with `mb-` spacing matching `about/page.tsx`.
- Business copy details (verbatim):
  - Company: PhysioFitness — A Unit of Physiobic Healthcare Pvt Ltd
  - Address: Birauta-17, Pokhara 33700, Nepal
  - Email: physiofitnesspain@gmail.com
  - Phone: 
  - Hours: Mon — Sat · 07:00 – 21:00
- No interactive cookie-consent banner; no dynamic data fetching.
- There is no test framework in this repo; verification is `npm run lint` and `npm run build` (or dev route check). Each task's "test" step uses one of these.
- All page files are server components (no `"use client"`).

---

### Task 1: Create the shared `LegalSection` component

**Files:**
- Create: `src/components/shared/LegalSection.tsx`

**Interfaces:**
- Produces: `LegalSection` default-export component with props `{ title: string; children: React.ReactNode }`. Renders a section heading + children paragraphs. Later tasks (2–4) each render one per content section.

- [ ] **Step 1: Create the component**

Create `src/components/shared/LegalSection.tsx`:

```tsx
interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-[24px] tracking-[-0.01em] mb-4">{title}</h2>
      <div className="text-[#3f3f3f] text-[14.5px] leading-[1.75] space-y-3">
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run lint`
Expected: no errors referencing `LegalSection`.

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/LegalSection.tsx
git commit -m "feat: add shared LegalSection component"
```

---

### Task 2: Create the Privacy Policy page

**Files:**
- Create: `src/app/privacy/page.tsx`

**Interfaces:**
- Consumes: `PageBanner` (existing; props `{ title: string; crumb: string }`), `LegalSection` from Task 1.
- Produces: `/privacy` route using the copy below.

Content sections (each rendered as a `LegalSection`):

1. **Introduction** — welcomes the user, states PhysioFitness ("we", "our") respects privacy, and that this policy explains what data is collected and how it's used. Provides contact email physiofitnesspain@gmail.com.
2. **Information We Collect** — contact form submissions (name, email, phone, message), appointment/enquiry details, and basic technical data (such as device/browser info) when you use the site.
3. **How We Use Your Information** — to respond to enquiries, manage appointments, improve services, and communicate about your care; we do not sell your personal data.
4. **Data Storage & Security** — reasonable safeguards to protect data; retention is only as long as needed for the purposes described.
5. **Sharing of Information** — data is only shared with service providers (e.g. email/hosting) as needed to operate the site, or where required by law.
6. **Your Rights** — you may request access, correction, or deletion of your personal data by contacting us.
7. **Contact Us** — address Birauta-17, Pokhara 33700, Nepal; email physiofitnesspain@gmail.com; phone +977 061-451237.

- [ ] **Step 1: Create the page**

Create `src/app/privacy/page.tsx`:

```tsx
import PageBanner from "@/components/shared/PageBanner";
import LegalSection from "@/components/shared/LegalSection";

export const metadata = {
  title: "Privacy Policy | PhysioFitness",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" crumb="Privacy Policy" />
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <LegalSection title="Introduction">
            <p>
              PhysioFitness, a unit of Physiobic Healthcare Pvt Ltd, is committed to protecting your privacy. This
              Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>
            <p>
              By using our website, you consent to the practices described in this policy. If you have any questions,
              please contact us at physiofitnesspain@gmail.com.
            </p>
          </LegalSection>

          <LegalSection title="Information We Collect">
            <p>
              We collect information you provide directly, such as your name, email address, phone number, and the
              content of messages you send through our contact form or appointment enquiries.
            </p>
            <p>
              We may also collect basic technical information automatically, such as your browser type and device
              information, when you visit the site.
            </p>
          </LegalSection>

          <LegalSection title="How We Use Your Information">
            <p>
              We use the information we collect to respond to your enquiries, manage appointments, improve our
              services, and communicate with you about your care at PhysioFitness.
            </p>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </LegalSection>

          <LegalSection title="Data Storage & Security">
            <p>
              We take reasonable measures to protect your personal information from unauthorised access, use, or
              disclosure. We retain your information only for as long as necessary to fulfil the purposes described in
              this policy.
            </p>
          </LegalSection>

          <LegalSection title="Sharing of Information">
            <p>
              We do not share your personal information except with service providers who help us operate our website
              and services, and only as necessary to provide our services. We may also disclose information where
              required to do so by law.
            </p>
          </LegalSection>

          <LegalSection title="Your Rights">
            <p>
              You have the right to request access to, correction of, or deletion of the personal information we hold
              about you. To exercise these rights, please contact us using the details below.
            </p>
          </LegalSection>

          <LegalSection title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              PhysioFitness — A Unit of Physiobic Healthcare Pvt Ltd
              <br />
              Birauta-17, Pokhara 33700, Nepal
              <br />
              Email: physiofitnesspain@gmail.com
              <br />
              Phone: +977 061-451237
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.
Then: `npm run dev` (or the running dev server) and open `/privacy`.
Expected: banner + all seven sections render.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy/page.tsx
git commit -m "feat: add privacy policy page"
```

---

### Task 3: Create the Terms & Conditions page

**Files:**
- Create: `src/app/terms/page.tsx`

**Interfaces:**
- Consumes: `PageBanner`, `LegalSection` (Task 1).
- Produces: `/terms` route using the copy below.

Content sections (each rendered as a `LegalSection`):

1. **Acceptance of Terms** — by using the site you agree to these terms.
2. **Use of the Website** — the site is for information about PhysioFitness services; you agree to use it lawfully and not to misuse it.
3. **Appointments & Services** — bookings and services are subject to availability and to any agreement made directly with the clinic.
4. **Medical Disclaimer** — content on the site is for general information only and is not medical advice; always consult a qualified clinician for diagnosis and treatment.
5. **Intellectual Property** — content, branding, and materials on the site belong to PhysioFitness and may not be reused without permission.
6. **Limitation of Liability** — PhysioFitness is not liable for losses arising from reliance on site content or from use of the site, to the extent permitted by law.
7. **Changes & Governing Law** — these terms may be updated; they are governed by the laws of Nepal. Contact details repeated (address, email, phone).

- [ ] **Step 1: Create the page**

Create `src/app/terms/page.tsx`:

```tsx
import PageBanner from "@/components/shared/PageBanner";
import LegalSection from "@/components/shared/LegalSection";

export const metadata = {
  title: "Terms & Conditions | PhysioFitness",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" crumb="Terms & Conditions" />
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <LegalSection title="Acceptance of Terms">
            <p>
              By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not
              agree with any part of these terms, please do not use the site.
            </p>
          </LegalSection>

          <LegalSection title="Use of the Website">
            <p>
              This website is provided to give you information about PhysioFitness and its services. You agree to use
              the site lawfully and not to attempt to interfere with its operation.
            </p>
          </LegalSection>

          <LegalSection title="Appointments & Services">
            <p>
              Appointments and services are subject to availability and to any terms agreed directly with the clinic
              at the time of booking.
            </p>
          </LegalSection>

          <LegalSection title="Medical Disclaimer">
            <p>
              Content on this website is provided for general information only and is not a substitute for
              professional medical advice, diagnosis, or treatment. Always consult a qualified clinician for advice
              regarding your specific condition.
            </p>
          </LegalSection>

          <LegalSection title="Intellectual Property">
            <p>
              All content, branding, and materials on this website belong to PhysioFitness and may not be reused or
              reproduced without our permission.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <p>
              To the extent permitted by law, PhysioFitness shall not be liable for any loss or damage arising from
              your use of, or reliance on, this website or its content.
            </p>
          </LegalSection>

          <LegalSection title="Changes & Governing Law">
            <p>
              We may update these Terms & Conditions from time to time. These terms are governed by the laws of Nepal.
            </p>
            <p>
              PhysioFitness — A Unit of Physiobic Healthcare Pvt Ltd
              <br />
              Birauta-17, Pokhara 33700, Nepal
              <br />
              Email: physiofitnesspain@gmail.com
              <br />
              Phone: +977 061-451237
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.
Open `/terms` in the dev server.
Expected: banner + all sections render and `/contact` style navigation is preserved.

- [ ] **Step 3: Commit**

```bash
git add src/app/terms/page.tsx
git commit -m "feat: add terms and conditions page"
```

---

### Task 4: Create the Cookie Policy page

**Files:**
- Create: `src/app/cookies/page.tsx`

**Interfaces:**
- Consumes: `PageBanner`, `LegalSection` (Task 1).
- Produces: `/cookies` route using the copy below.

Content sections (each rendered as a `LegalSection`):

1. **What Are Cookies** — small text files stored on your device that help websites function.
2. **Cookies We Use** — this site uses minimal cookies for essential functionality (such as site operation); any analytics or preference cookies are described as applicable. State plainly that the site does not currently run an advertising or affiliate cookie programme.
3. **Managing Cookies** — users can disable cookies in their browser settings; note that doing so may affect site functionality.
4. **Contact** — address, email, phone for questions about cookies.

- [ ] **Step 1: Create the page**

Create `src/app/cookies/page.tsx`:

```tsx
import PageBanner from "@/components/shared/PageBanner";
import LegalSection from "@/components/shared/LegalSection";

export const metadata = {
  title: "Cookie Policy | PhysioFitness",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" crumb="Cookie Policy" />
      <section className="py-[70px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <LegalSection title="What Are Cookies">
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites function
              properly and improve your browsing experience.
            </p>
          </LegalSection>

          <LegalSection title="Cookies We Use">
            <p>
              PhysioFitness uses only essential cookies required for the website to function, and does not currently
              operate an advertising or affiliate cookie programme. If we introduce analytics or preference cookies in
              the future, this policy will be updated to describe them.
            </p>
          </LegalSection>

          <LegalSection title="Managing Cookies">
            <p>
              You can control and delete cookies through your browser settings. Please note that disabling certain
              cookies may affect how the website works for you.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
            </p>
            <p>
              PhysioFitness — A Unit of Physiobic Healthcare Pvt Ltd
              <br />
              Birauta-17, Pokhara 33700, Nepal
              <br />
              Email: physiofitnesspain@gmail.com
              <br />
              Phone: +977 061-451237
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.
Open `/cookies` in the dev server.
Expected: banner + all sections render.

- [ ] **Step 3: Commit**

```bash
git add src/app/cookies/page.tsx
git commit -m "feat: add cookie policy page"
```

---

### Task 5: Link Privacy, Terms, and Cookies in the footer

**Files:**
- Modify: `src/components/layout/Footer.tsx:84-87`

**Interfaces:**
- Consumes: routes from Tasks 2–4 (`/privacy`, `/terms`, `/cookies`).
- Produces: linked footer items in the bottom copyright row.

- [ ] **Step 1: Replace the plain text with links**

In `Footer.tsx`, replace the bottom row (lines 84–87):

```tsx
<div className="mt-11 border-t border-brand-mist/[0.18] pt-[22px] flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-brand-sage">
  <span>© 2026 Physiofitness · A Unit of Physiobic Healthcare Pvt Ltd</span>
  <span>Privacy · Terms · Cookies</span>
</div>
```

with:

```tsx
<div className="mt-11 border-t border-brand-mist/[0.18] pt-[22px] flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-brand-sage">
  <span>© 2026 Physiofitness · A Unit of Physiobic Healthcare Pvt Ltd</span>
  <span className="flex items-center gap-4">
    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
    <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
  </span>
</div>
```

`Link` is already imported (first line of file).

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.
Open `/` in the dev server and confirm the footer shows Privacy, Terms, and Cookies as working links.

- [ ] **Step 3: Full verification**

Run: `npm run build`
Expected: build succeeds with all routes generated.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: link privacy, terms, and cookie policies in footer"
```