# Project Handoff — Abdullah Tayyab Portfolio

> Feed this file to a new Claude session to resume exactly where this session stopped.
> Companion file: `CLAUDE.md` (also in project root) contains persistent technical context.

---

## 1. What This Project Is

A premium personal portfolio website for **Abdullah Tayyab**, a performance marketer and media buyer based in Pakistan. The site is a client acquisition and authority-building tool — not a generic portfolio or agency site.

**Live domain (deployment target):** https://abdullahtayyab.com  
**Repo branch:** `claude/build-portfolio-website-U3hLc`  
**Deployment platform:** Vercel  

**Core positioning line:**
> "I build and scale AI-powered marketing systems that drive predictable business growth."

---

## 2. Tech Stack (Final, No Changes)

| Layer | Decision |
|---|---|
| Framework | Next.js 15 — App Router, static generation |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with `@tailwindcss/postcss` |
| Animation | Framer Motion v12 |
| Email backend | Resend (API route at `/api/contact`) |
| Fonts | Space Grotesk (headings) + Inter (body) via `next/font/google` |
| Deployment | Vercel |

**Why this stack:** User specified Next.js + TypeScript + Tailwind + Framer Motion explicitly. Resend was chosen for the contact form because the user already has an account and API key. Static generation throughout for performance and simplicity — no dynamic server rendering needed for a portfolio.

---

## 3. Architecture Decisions Made (and Why)

| Decision | Reason |
|---|---|
| App Router only, no Pages Router | Next.js 15 best practice; cleaner layout nesting |
| All source under `src/` | Standard project hygiene, separates source from config |
| `@/*` path alias → `src/*` | Avoids `../../` imports across deep component trees |
| No external icon libraries | User constraint — inline SVG only |
| No analytics/tracking scripts | User constraint — explicitly ruled out |
| CSS keyframe animations for infinite scrolls (ProofStrip, Testimonials) | Better performance than Framer Motion for continuous loops |
| Framer Motion for all other animations | Scroll reveal, hover lift, floating card, mobile menu |
| `ease` arrays typed as `as const` | Framer Motion v12 breaks on plain `number[]` — needs tuple type |
| `'use client'` only on components that need it | Maximise Server Component usage for performance |
| Data files (`src/data/`) separate from components | Clean separation — data can be updated without touching UI |
| Case study pages use conditional rendering | Only render sections that have actual content per study |
| Services page includes a network disclaimer | User requirement — services delivered via trusted specialists, not Abdullah personally |

---

## 4. What Was Ruled Out

| Ruled Out | Why |
|---|---|
| External calendar booking link (Calendly etc.) | User doesn't have one yet — "Book a Call" scrolls to contact form instead |
| External icon libraries (Heroicons, Lucide etc.) | User constraint — all icons are inline SVG |
| Google Analytics / Meta Pixel / tracking | User constraint — no tracking scripts anywhere in codebase |
| ISR (Incremental Static Regeneration) | Not needed for a portfolio — full static is simpler and faster |
| Pages Router | App Router only per architecture decision |
| Template-style or agency-style design | User explicitly wants a premium personal brand site, not generic |
| Committing `.env.local` | API key is gitignored — must never be committed |

---

## 5. Full Folder Structure (Current State)

```
/
├── CLAUDE.md                         ← Persistent technical context (read this)
├── HANDOFF.md                        ← This file
├── .env.local                        ← Gitignored. Contains RESEND_API_KEY + CONTACT_EMAIL
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── public/
│   └── images/
│       ├── hero/
│       │   └── PLACE_IMAGE_HERE.md   ← User must place abdullah-tayyab.jpg here
│       ├── logos/
│       │   └── PLACE_LOGOS_HERE.md   ← User must place 9 logo PNGs here
│       ├── case-studies/             ← Empty — awaiting case study assets
│       └── og/                       ← Empty — awaiting OG image
└── src/
    ├── app/
    │   ├── globals.css               ← Tailwind @theme + all custom utilities + keyframes
    │   ├── layout.tsx                ← Root layout: fonts, metadata, Navbar, Footer
    │   ├── page.tsx                  ← Home page — composes all sections
    │   ├── about/page.tsx            ← STUB — needs full page implementation (Step 4)
    │   ├── expertise/page.tsx        ← STUB — needs full page implementation (Step 4)
    │   ├── services/page.tsx         ← STUB — needs full page implementation (Step 4)
    │   ├── case-studies/
    │   │   ├── page.tsx              ← Listing page — works, shows "coming soon" when empty
    │   │   └── [slug]/page.tsx       ← Dynamic page — ready, waits on data
    │   ├── privacy-policy/page.tsx   ← ✅ Complete — generated for single-person site
    │   ├── thank-you/page.tsx        ← ✅ Complete
    │   └── api/contact/route.ts      ← ✅ Complete — Resend integration, env-gated
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx            ← ✅ Fixed, scroll-aware, animated mobile menu
    │   │   └── Footer.tsx            ← ✅ Real social links set
    │   ├── sections/
    │   │   ├── Hero.tsx              ← ✅ Complete
    │   │   ├── ProofStrip.tsx        ← ✅ Complete (needs logo files from user)
    │   │   ├── About.tsx             ← ✅ Complete (homepage section)
    │   │   ├── Expertise.tsx         ← ✅ Complete (homepage section)
    │   │   ├── CaseStudiesPreview.tsx← ⏳ STUB — awaiting case study data (Step 5)
    │   │   ├── Testimonials.tsx      ← ✅ Complete
    │   │   ├── Process.tsx           ← ✅ Complete
    │   │   ├── FAQ.tsx               ← ✅ Complete
    │   │   └── ContactCTA.tsx        ← ✅ Complete
    │   ├── ui/
    │   │   ├── Button.tsx            ← variant: primary | secondary | ghost
    │   │   ├── Card.tsx              ← hover lift animation
    │   │   ├── GradientText.tsx      ← Brand gradient text fill
    │   │   ├── ScrollReveal.tsx      ← Fade+slide on scroll enter (uses useInView)
    │   │   └── NodeNetwork.tsx       ← Canvas particle animation (hero background)
    │   └── case-studies/
    │       ├── CaseStudyCard.tsx     ← Card for listing/preview
    │       └── CaseStudyLayout.tsx   ← Full case study page layout (conditional sections)
    ├── data/
    │   ├── case-studies.ts           ← ⏳ Empty array — awaiting PDFs (Step 5)
    │   ├── testimonials.ts           ← ✅ Populated — 6 real testimonials
    │   ├── services.ts               ← ⏳ Empty — awaiting approval (Step 4)
    │   └── expertise.ts              ← ⏳ Empty — data is inline in Expertise.tsx for now
    ├── lib/utils.ts                  ← cn(), slugify(), formatDate()
    └── types/index.ts                ← All shared types: CaseStudy, Testimonial, Service, etc.
```

---

## 6. Design System (Do Not Change Without Asking)

### Brand Colors
```css
--color-brand-dark:     #010738   /* Deep navy */
--color-brand-light:    #15a1df   /* Bright blue */
--color-surface-muted:  #f8f9fc
--color-border:         #e8eaf0
--color-text-primary:   #0a0a14
--color-text-secondary: #4a4f6a
--color-text-muted:     #8890a8
```

### Key Custom Utilities
```css
.gradient-brand          /* bg: 135deg, #010738 → #15a1df */
.gradient-brand-text     /* same gradient as text fill */
.section-padding         /* 6rem / 8rem / 10rem vertical at sm/md/lg */
.card-shadow             /* standard card drop shadow */
.animate-scroll-left     /* 30s infinite left scroll (ProofStrip) */
.animate-float           /* 4s up/down float */
.animate-glow-pulse      /* 3s opacity pulse */
```

### Fonts
- Headings: `font-heading` → Space Grotesk (CSS var `--font-space-grotesk`)
- Body: `font-body` → Inter (CSS var `--font-inter`)
- Both injected via `next/font/google` on `<html>` in `layout.tsx`

---

## 7. Person Data Reference

| Field | Value |
|---|---|
| Name | Abdullah Tayyab |
| Title | Performance Marketer & Media Buyer |
| Email | abdullahtayyab.805@gmail.com |
| LinkedIn | https://www.linkedin.com/in/abdullahtayyabofficial/ |
| Facebook | https://www.facebook.com/i.abdullahtayyabofficial |
| Instagram | https://www.instagram.com/abdullahtayyab.official/ |
| Hero metrics | ₨100M+ Revenue Driven · 10,000+ Leads Generated · 93% Client Retention |
| Education | BBIT — Virtual University of Pakistan |
| Certifications | Google Digital Garage, LUMS CES, Anthropic Claude 101, Google Skillshop |

**Work history:**
- **Firebolt63** (Nov 2025–Apr 2026): PKR 24M+ ecommerce sales, 325% YoY growth, 200M+ impressions, up to 16x ROAS
- **Wave Byte** (Dec 2024–Apr 2025): PKR 1.5M+ ad spend managed, 5–8x ROAS, 570+ seminar leads in 17 days
- **Hello World Technologies** (Jun–Dec 2024): Cubicle Co-Working 3→25+ bookings in 60 days, 600+ IT event participants

**Community:**
- Guest Speaker at LUMS CES (Advertising)
- Guest Speaker at BIC Foundry, Beaconhouse International College
- Free 1-on-1 media buying consultations on Topmate/LinkedIn

---

## 8. Environment Variables

```
RESEND_API_KEY=re_ALn8oPh7_GWG1eJkdWE1KzYdX65bpHp2P
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```

`.env.local` already created locally and is gitignored. Must also be set in Vercel dashboard before deploying.

---

## 9. Image Files Still Needed From User

The user must manually save these files (they cannot be auto-generated):

| File path | What it is | Status |
|---|---|---|
| `public/images/hero/abdullah-tayyab.jpg` | Seated boardroom professional photo | ⏳ User must place |
| `public/images/logos/hardees.png` | Hardee's logo (crop from logos sheet) | ⏳ User must place |
| `public/images/logos/hello-world-tech.png` | Hello World Technologies | ⏳ User must place |
| `public/images/logos/cbd-punjab.png` | CBD Punjab | ⏳ User must place |
| `public/images/logos/ffc.png` | FFC | ⏳ User must place |
| `public/images/logos/hbl-zarai.png` | HBL Zarai Services | ⏳ User must place |
| `public/images/logos/cubicle.png` | Cubicle Co-Working | ⏳ User must place |
| `public/images/logos/sabiha-anees.png` | Sabiha Anees | ⏳ User must place |
| `public/images/logos/wave-byte.png` | Wave Byte | ⏳ User must place |
| `public/images/logos/icr.png` | ICR IT Centre | ⏳ User must place |
| `public/images/og/og-image.jpg` | 1200×630 Open Graph image | ⏳ User must place |

---

## 10. Build Progress

| Step | Description | Status |
|---|---|---|
| 1 | Project architecture + full scaffold | ✅ Done |
| 2 | Hero section | ✅ Done |
| 3 | Home page sections (all 9) | ✅ Done (CaseStudiesPreview is a stub) |
| 4 | Individual pages — About, Expertise, Services | ⏳ **NEXT** |
| 5 | Case study system | ⏳ Awaiting PDFs from user |
| 6 | Contact functionality (Resend) | ✅ Done |
| 7 | Final polish | ⏳ Pending |

---

## 11. What's Next — Step 4

Build the full individual pages (currently all stubs):

### `/about` page
- Full-page version of the About section with expanded content
- Use the same CV data already used in the homepage About section
- Add freelance projects section (IBS Canada, Tots&Teens, Smart Trendz)

### `/expertise` page
- Full-page version of the Expertise section
- Expand each of the 8 skill cards with more detail
- Could include a "tools I use" section at the bottom

### `/services` page
- Structure approved by user:
  - **Core:** Performance Marketing / Media Buying (Abdullah personally)
  - **Network — AI Automation:** GoHighLevel, AI Agents, + 2–3 more
  - **Network — SEO:** On-page/Off-page/Local SEO, GEO/AEO, + 2–3 more
  - **Network — Web Design:** WordPress, Wix, + 2–3 more
  - **Network — Visual Design:** Social content, Branding, Logos, + expand to ~6 items
- **MUST include disclaimer:** Network services are delivered via trusted specialists, not Abdullah personally. Draft was to be approved by user — write it and note it's for approval.

### After Step 4
- Ask user for case study PDFs to begin Step 5
- Step 7 (final polish) comes last: OG image, meta review, performance audit, Vercel deploy

---

## 12. Workflow Rules This Session Established

1. Never invent data — only use what has been provided, or ask.
2. Ask before building any section where data is missing.
3. Pause and present after each major step for approval before continuing.
4. No external icon libraries — inline SVG only.
5. No analytics or tracking scripts anywhere.
6. `.env.local` is gitignored — never commit API keys.
7. Framer Motion ease arrays must use `as const` (Framer Motion v12 strict typing).
8. Services page must include the network specialist disclaimer.
9. Case study page renders only sections with actual content (conditional).
10. Commit to branch `claude/build-portfolio-website-U3hLc` — never push to main without permission.

---

## 13. How to Start the Dev Server

```bash
cd /home/user/Claude-Sample-Website
npm run dev
# → http://localhost:3000
```

Build check:
```bash
npm run build
```

---

*Generated at end of Session 1 — May 2026*
