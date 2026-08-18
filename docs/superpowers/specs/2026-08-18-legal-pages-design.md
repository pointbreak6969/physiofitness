# Legal Pages (Privacy, Terms, Cookies) — Design

## Goal
Add three static legal informational pages — Privacy Policy, Terms & Conditions, and Cookie Policy — to the PhysioFitness website and link them from the footer.

## Context
- Framework: Next.js (App Router), existing `src/app/*/page.tsx` route structure.
- The footer (`src/components/layout/Footer.tsx`) currently renders `Privacy · Terms · Cookies` as plain text on line 86 and contains no legal links.
- Business details to use throughout the copy (sourced from footer/contact):
  - PhysioFitness, A Unit of Physiobic Healthcare Pvt Ltd
  - Birauta-17, Pokhara 33700, Nepal (uses +977 phone)
  - Email: physiofitnesspain@gmail.com
  - Phone: +977 9864430711
  - Hours: Mon — Sat · 07:00 – 21:00

## Routes & Pages
Three server-component pages, each reusing the existing `PageBanner` component (title + crumb) and a shared layout/content convention:
- `/privacy` — "Privacy Policy"
- `/terms` — "Terms & Conditions"
- `/cookies` — "Cookie Policy"

Each page follows the styling pattern of existing pages: `max-w-[1180px] mx-auto px-7` content wrapper with sectioned headings and paragraph blocks.

## Shared Component
A single `LegalSection` presentational component is created to keep the three pages' markup consistent:
- `title: string` — section heading
- children — paragraph content

Sections render as a heading + stacked paragraphs, matching site typography (`text-[#3f3f3f]`, `text-[14.5px]`).

## Footer Update
Replace the plain `Privacy · Terms · Cookies` text in `Footer.tsx` line 86 with three individual `Link` items pointing to `/privacy`, `/terms`, and `/cookies`, styled consistently with the surrounding footer copyright row.

## Content Scope
Informational, generic-but-site-specific legal copy:
- **Privacy Policy:** what data is collected (contact form submissions, appointment/log data), how it is used, storage/retention, sharing (third-party service providers), user rights, security, and contact for privacy requests.
- **Terms & Conditions:** use of the site, appointment bookings, medical disclaimer (site content is not medical advice), liability limits, and contact.
- **Cookie Policy:** what cookies are, the types used (if any) and their purpose, and how users can manage cookies.

## Out of Scope
- No interactive consent banner / cookie-consent UI.
- No dynamic content, data fetching, or state.
- No changes to site navigation menu (footer links only).

## Testing
- `npm run lint` passes.
- `npm run build` (or dev) succeeds and the three routes render the banner + sections.
- Footer links navigate to the correct routes.