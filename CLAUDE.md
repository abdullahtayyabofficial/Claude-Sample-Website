# Abdullah Tayyab Portfolio — Project Context

## What This Is
Premium personal portfolio website for Abdullah Tayyab, a performance marketer and media buyer.
Built with Next.js 15, App Router, TypeScript, Tailwind CSS v4, Framer Motion.
Deployed on Vercel at https://abdullahtayyab.com

**Purpose:** Build authority, support client outreach, showcase expertise, present case studies.
**Positioning:** "I build and scale AI-powered marketing systems that drive predictable business growth."

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static generation) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Animation | Framer Motion v12 |
| Email | Resend (API route at `/api/contact`) |
| Deployment | Vercel |

---

## Architecture Decisions

- **App Router only** — no Pages Router. All routes are in `src/app/`.
- **Static generation** — all pages use `generateStaticParams` or are `○ Static`. No ISR.
- **`src/` directory** — all source code lives under `src/`.
- **Path alias** — `@/*` maps to `src/*`.
- **Client components** — any component using hooks, Framer Motion, or browser APIs must have `'use client'` at top. Server Components are default.
- **Fonts** — Space Grotesk (headings) + Inter (body) via `next/font/google`. Variables injected on `<html>` as `--font-space-grotesk` and `--font-inter`.
- **Tailwind ease arrays** — must use `as const` to satisfy Framer Motion v12 types: `[0.25, 0.4, 0.25, 1] as const` or define a named `const EASE = [...] as const`.

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, metadata, Navbar, Footer
│   ├── page.tsx                    # Home — composes all section components in order
│   ├── globals.css                 # Tailwind v4 @theme, @keyframes, custom utilities
│   ├── about/page.tsx
│   ├── expertise/page.tsx
│   ├── services/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx                # Listing page
│   │   └── [slug]/page.tsx         # Dynamic, uses generateStaticParams
│   ├── privacy-policy/page.tsx
│   ├── thank-you/page.tsx
│   └── api/contact/route.ts        # POST — Resend email, reads RESEND_API_KEY + CONTACT_EMAIL
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Fixed, scroll-aware, animated mobile menu
│   │   └── Footer.tsx              # Logo, links, social icons (real URLs set)
│   ├── sections/                   # One file per homepage section
│   │   ├── Hero.tsx                # ✅ Complete
│   │   ├── ProofStrip.tsx          # ✅ Complete (awaiting logo image files)
│   │   ├── About.tsx               # ✅ Complete
│   │   ├── Expertise.tsx           # ✅ Complete
│   │   ├── CaseStudiesPreview.tsx  # ⏳ Stub — needs case study data
│   │   ├── Testimonials.tsx        # ✅ Complete
│   │   ├── Process.tsx             # ✅ Complete
│   │   ├── FAQ.tsx                 # ✅ Complete
│   │   └── ContactCTA.tsx          # ✅ Complete
│   ├── ui/
│   │   ├── Button.tsx              # variant: primary | secondary | ghost
│   │   ├── Card.tsx                # hover lift animation
│   │   ├── GradientText.tsx        # Brand gradient on text
│   │   ├── ScrollReveal.tsx        # Fade+slide on scroll enter
│   │   └── NodeNetwork.tsx         # Canvas animation (hero background)
│   └── case-studies/
│       ├── CaseStudyCard.tsx       # Card for listing/preview
│       └── CaseStudyLayout.tsx     # Full case study page layout
├── data/
│   ├── case-studies.ts             # ⏳ Empty — awaiting PDFs
│   ├── testimonials.ts             # ✅ Populated (6 testimonials)
│   ├── services.ts                 # ⏳ Empty — awaiting approval
│   └── expertise.ts                # ⏳ Empty — inline data used in Expertise.tsx
├── lib/utils.ts                    # cn(), slugify(), formatDate()
└── types/index.ts                  # CaseStudy, Testimonial, Service, ExpertiseItem, etc.
```

---

## Design System

### Brand Colors (defined in `@theme` in `globals.css`)
| Token | Value | Tailwind class |
|---|---|---|
| `--color-brand-dark` | `#010738` | `bg-brand-dark`, `text-brand-dark` |
| `--color-brand-light` | `#15a1df` | `bg-brand-light`, `text-brand-light` |
| `--color-surface-muted` | `#f8f9fc` | `bg-surface-muted` |
| `--color-border` | `#e8eaf0` | `border-border` |
| `--color-text-primary` | `#0a0a14` | `text-text-primary` |
| `--color-text-secondary` | `#4a4f6a` | `text-text-secondary` |
| `--color-text-muted` | `#8890a8` | `text-text-muted` |

### Custom Utilities (in `globals.css`)
- `.gradient-brand` — `background: linear-gradient(135deg, #010738, #15a1df)`
- `.gradient-brand-text` — gradient applied as text fill
- `.card-shadow` / `.card-shadow-hover` — standard card shadow tokens
- `.section-padding` — responsive vertical padding (6rem → 8rem → 10rem)
- `.animate-scroll-left` — 30s CSS infinite scroll (used in ProofStrip)
- `.animate-scroll-testimonials` — 40s CSS infinite scroll
- `.animate-float` — 4s float up/down
- `.animate-glow-pulse` — 3s opacity pulse

### Typography
- Headings: `font-heading` → Space Grotesk, tracking `-0.02em`
- Body: `font-body` → Inter

---

## Environment Variables
Set in `.env.local` (gitignored — never commit):
```
RESEND_API_KEY=...
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```
Set these same variables in Vercel dashboard before deploying.

---

## Image Assets (User Must Place)

| File path | What it is |
|---|---|
| `public/images/hero/abdullah-tayyab.jpg` | Seated boardroom professional photo |
| `public/images/logos/hardees.png` | Hardee's logo |
| `public/images/logos/hello-world-tech.png` | Hello World Technologies |
| `public/images/logos/cbd-punjab.png` | CBD Punjab |
| `public/images/logos/ffc.png` | FFC |
| `public/images/logos/hbl-zarai.png` | HBL Zarai Services |
| `public/images/logos/cubicle.png` | Cubicle Co-Working |
| `public/images/logos/sabiha-anees.png` | Sabiha Anees |
| `public/images/logos/wave-byte.png` | Wave Byte |
| `public/images/logos/icr.png` | ICR IT Centre |
| `public/images/og/og-image.jpg` | 1200×630 Open Graph image |

---

## Person / Data Reference

**Name:** Abdullah Tayyab  
**Title:** Performance Marketer & Media Buyer  
**Email:** abdullahtayyab.805@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/abdullahtayyabofficial/  
**Facebook:** https://www.facebook.com/i.abdullahtayyabofficial  
**Instagram:** https://www.instagram.com/abdullahtayyab.official/

**Hero metrics:** ₨100M+ Revenue Driven · 10,000+ Leads Generated · 93% Client Retention  
**Positioning:** AI-powered marketing systems · predictable business growth

**Education:** BBIT — Virtual University of Pakistan  
**Key certifications:** Google Digital Garage, LUMS CES (Advertising/Entrepreneurship/Communication), Anthropic Claude 101, Google Skillshop

**Work history (summary):**
- Firebolt63 (Nov 2025–Apr 2026): PKR 24M+ ecommerce sales, 325% YoY, 200M+ impressions
- Wave Byte (Dec 2024–Apr 2025): PKR 1.5M+ ad spend, 5–8x ROAS
- Hello World Technologies (Jun–Dec 2024): Cubicle Co-Working 3→25+ bookings

---

## Navigation Structure
Navbar: Home · About · Expertise · Case Studies · Services · Privacy Policy  
CTA: "Book a Call" → `/#contact` (scrolls to ContactCTA section on home page)

---

## Build Steps Completed

| Step | Status |
|---|---|
| Step 1 — Project architecture + scaffold | ✅ Done |
| Step 2 — Hero section | ✅ Done |
| Step 3 — Home page sections | ✅ Done (CaseStudiesPreview stub pending data) |
| Step 4 — Individual pages (About, Expertise, Services) | ⏳ Next |
| Step 5 — Case study system | ⏳ Awaiting PDFs |
| Step 6 — Contact functionality | ✅ Done (Resend route built) |
| Step 7 — Final polish | ⏳ Pending |

---

## Constraints & Rules

- Never invent data - use only what has been provided or ask.
- No external icon libraries - inline SVG only.
- No analytics or tracking scripts in the codebase.
- No comments unless the WHY is genuinely non-obvious.
- Framer Motion ease arrays need `as const` or a named typed constant.
- `next/image` with `fill` requires a relatively-positioned, sized parent.
- Services page must include a disclaimer that network services are delivered via trusted specialists (not Abdullah personally).
- Case study pages only render sections that have actual content (conditional rendering).
- `.env.local` is gitignored - never commit API keys.

---

## PERMANENT GLOBAL RULES (Apply to every file, every session, forever)

1. **NEVER use em dashes (`—`) anywhere.** Use hyphens (`-`) instead. This is a forever rule across the whole codebase. If you see em dashes anywhere in files you touch, replace them.
2. **All CTA / consultation copy uses 45 minutes, not 30.** "Free 45-minute strategy call." "Takes 45 minutes."
3. **All development must happen on the active feature branch** the user specifies. Never push to `main` or any other branch without explicit permission.
4. **Always commit and push your work** at the end of a meaningful change.
5. **No emojis in committed code or comments** unless the user explicitly asks.

---

## Niche Landing Pages

Standalone niche landing pages (route NOT inside `(site)/`, no shared Navbar/Footer, `robots: { index: false, follow: false }`) follow a separate playbook with prebaked design decisions.

**See: `LP-PLAYBOOK.md`** at the project root.

The playbook captures every design decision, copy rule, section template, and "what not to do" lesson from the Case-Ready Smile Pipeline™ LP at `/smilemakeover-lp`. When the user asks to build a new niche LP, follow `LP-PLAYBOOK.md` verbatim - it is calibrated to land at the right design on the first build instead of iterating from scratch.

Reference implementation: `src/components/pages/SmileMakeoverLPContent.tsx`
Reference route: `/smilemakeover-lp`
