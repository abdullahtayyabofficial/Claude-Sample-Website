# Project Handoff — Abdullah Tayyab Portfolio
### Session 2 Complete — Updated May 2026

> Feed this file + `CLAUDE.md` to a new Claude session to resume exactly where this session stopped.
> Both files live in the project root.

---

## 1. What This Project Is

A premium personal portfolio website for **Abdullah Tayyab**, a performance marketer and media buyer based in Pakistan. The site is a client acquisition and authority-building tool — not a generic portfolio or agency site.

**Live URL:** https://abdullahtayyab.com ✅ Deployed on Vercel
**Repo:** `abdullahtayyabofficial/Claude-Sample-Website`
**Active branch:** `claude/portfolio-website-dev-4YbiL`
**Deployment platform:** Vercel

**Core positioning line:**
> "I build and scale AI-powered marketing systems that drive predictable business growth."

---

## 2. Tech Stack (Final — No Changes)

| Layer | Decision |
|---|---|
| Framework | Next.js 15 — App Router, static generation |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with `@tailwindcss/postcss` |
| Animation | Framer Motion v12 |
| Email backend | Resend (API route at `/api/contact`) |
| Fonts | Space Grotesk (headings) + Inter (body) via `next/font/google` |
| Deployment | Vercel ✅ Live |

---

## 3. Architecture Decisions

| Decision | Reason |
|---|---|
| App Router only, no Pages Router | Next.js 15 best practice; cleaner layout nesting |
| All source under `src/` | Separates source from config |
| `@/*` path alias → `src/*` | Avoids `../../` deep imports |
| No external icon libraries | User constraint — inline SVG only |
| No analytics/tracking scripts | User constraint — explicitly ruled out |
| CSS keyframe animations for infinite scrolls | Better performance than Framer Motion for continuous loops |
| Framer Motion for all other animations | Scroll reveal, hover lift, floating card, mobile menu |
| `ease` arrays typed `as const` | Framer Motion v12 breaks on plain `number[]` |
| `'use client'` only on components that need it | Maximise Server Component usage |
| Server wrapper + client content pattern for pages | `page.tsx` exports metadata (server); content in `*Content.tsx` (client) |
| Data files (`src/data/`) separate from components | Clean separation — data updated without touching UI |
| Case study pages use conditional rendering | Only render sections that have actual content |
| Services page includes network disclaimer | User requirement — services via trusted specialists |
| `<main>` only in `layout.tsx` | Content components use `<>` fragments — no nested landmark |

---

## 4. What Was Ruled Out

| Ruled Out | Why |
|---|---|
| External calendar booking (Calendly etc.) | User doesn't have one — "Book a Call" scrolls to contact form |
| External icon libraries | User constraint |
| Google Analytics / Meta Pixel / tracking | User constraint |
| ISR (Incremental Static Regeneration) | Not needed for a portfolio |
| Pages Router | App Router only |
| Freelance projects on About page | User removed — no data provided |
| Committing `.env.local` | API key gitignored — never commit |

---

## 5. Full Folder Structure (Current State)

```
/
├── CLAUDE.md
├── HANDOFF.md
├── .env.local                            ← Gitignored. RESEND_API_KEY + CONTACT_EMAIL
├── package.json / next.config.ts / tsconfig.json / etc.
├── public/
│   └── images/
│       ├── hero/abdullah-tayyab.jpg      ← ✅ Placed
│       ├── logos/[9 logo PNGs]           ← ✅ All placed
│       └── og/og-image.jpg               ← ✅ Placed
└── src/
    ├── app/
    │   ├── globals.css                   ← ✅ Tailwind @theme + utilities + keyframes
    │   ├── layout.tsx                    ← ✅ Root layout: fonts, metadata, viewport, Navbar, Footer
    │   ├── page.tsx                      ← ✅ Home — 9 sections
    │   ├── sitemap.ts                    ← ✅ /sitemap.xml (12 routes)
    │   ├── robots.ts                     ← ✅ /robots.txt
    │   ├── about/page.tsx                ← ✅ Server wrapper → AboutContent
    │   ├── expertise/page.tsx            ← ✅ Server wrapper → ExpertiseContent
    │   ├── services/page.tsx             ← ✅ Server wrapper → ServicesContent
    │   ├── case-studies/
    │   │   ├── page.tsx                  ← ✅ Listing page
    │   │   └── [slug]/page.tsx           ← ✅ 7 routes pre-rendered
    │   ├── privacy-policy/page.tsx       ← ✅ Complete
    │   ├── thank-you/page.tsx            ← ✅ Complete
    │   └── api/contact/route.ts          ← ✅ Resend backend built — NOT yet working end-to-end
    ├── components/
    │   ├── layout/Navbar.tsx             ← ✅ Fixed, scroll-aware
    │   ├── layout/Footer.tsx             ← ✅ Real social links
    │   ├── sections/
    │   │   ├── Hero.tsx                  ← ✅
    │   │   ├── ProofStrip.tsx            ← ✅
    │   │   ├── About.tsx                 ← ✅
    │   │   ├── Expertise.tsx             ← ✅
    │   │   ├── CaseStudiesPreview.tsx    ← ✅ Shows 3 featured case studies
    │   │   ├── Testimonials.tsx          ← ✅
    │   │   ├── Process.tsx               ← ✅
    │   │   ├── FAQ.tsx                   ← ✅
    │   │   └── ContactCTA.tsx            ← ✅ Form built — Resend not working yet
    │   ├── pages/
    │   │   ├── AboutContent.tsx          ← ✅
    │   │   ├── ExpertiseContent.tsx      ← ✅
    │   │   └── ServicesContent.tsx       ← ✅
    │   ├── ui/Button / Card / GradientText / ScrollReveal / NodeNetwork
    │   └── case-studies/
    │       ├── CaseStudyCard.tsx         ← ✅
    │       └── CaseStudyLayout.tsx       ← ✅ Premium layout
    ├── data/
    │   ├── case-studies.ts               ← ✅ 7 real case studies
    │   └── testimonials.ts               ← ✅ 6 real testimonials
    ├── lib/utils.ts
    └── types/index.ts
```

---

## 6. Pages — All Complete

| Route | Status |
|---|---|
| `/` | ✅ |
| `/about` | ✅ |
| `/expertise` | ✅ |
| `/services` | ✅ |
| `/case-studies` | ✅ |
| `/case-studies/[slug]` × 7 | ✅ |
| `/privacy-policy` | ✅ |
| `/thank-you` | ✅ |
| `/api/contact` | ✅ Built — Resend end-to-end not yet working |
| `/sitemap.xml` | ✅ |
| `/robots.txt` | ✅ |

---

## 7. Case Studies (7 Entries — All Populated)

| Slug | Key Metric |
|---|---|
| `cubicle-coworking` | 25+ bookings in <60 days |
| `commercial-real-estate-lead-gen` | 1,784+ leads in 2 months |
| `ffc-prize-distribution` | 65.8M+ impressions |
| `ffc-sona-soil-day` | 7.42M impressions in 2 days |
| `wavebyte-ecommerce` | ₨1.5M+ spend, 5–8x ROAS |
| `icr-it-centre` | 500+ peak season enrollments |
| `hardees-qsr` | 4.8x avg ROAS, 4 months |

---

## 8. Person / Data Reference

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
- **Firebolt63** (Nov 2025–Apr 2026): PKR 24M+ ecommerce, 325% YoY, 200M+ impressions, 16x ROAS
- **Wave Byte** (Dec 2024–Apr 2025): PKR 1.5M+ spend, 5–8x ROAS, 570+ leads in 17 days
- **Hello World Technologies** (Jun–Dec 2024): Cubicle 3→25+ bookings, 600+ IT event participants

---

## 9. Environment Variables

```
RESEND_API_KEY=re_ALn8oPh7_GWG1eJkdWE1KzYdX65bpHp2P
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```

`.env.local` exists locally and is gitignored.
These must also be set in **Vercel dashboard → Settings → Environment Variables**.

---

## 10. Deployment Status

| Item | Status |
|---|---|
| Vercel deployment | ✅ Live at abdullahtayyab.com |
| Hero photo | ✅ Placed |
| All 9 logos | ✅ Placed |
| OG image | ✅ Placed |
| Resend domain verification | ⚠️ Unknown — needs checking |
| Resend env vars in Vercel | ⚠️ Unknown — needs checking |
| Contact form working end-to-end | ❌ Not yet confirmed working |

---

## 11. PRIORITY TASKS FOR NEXT SESSION

### #1 — Fix Contact Form / Resend Integration (MOST URGENT)

The backend API route (`/api/contact/route.ts`) is fully built and uses Resend. The frontend form (`ContactCTA.tsx`) POSTs to `/api/contact`. However, the contact form is not working end-to-end.

**What the next session should do:**
1. Diagnose why the form isn't working — check Vercel function logs for the `/api/contact` route to see the actual error
2. The most likely causes:
   - `RESEND_API_KEY` or `CONTACT_EMAIL` not set in Vercel environment variables
   - Domain `abdullahtayyab.com` not verified in Resend (required because `from` is `noreply@abdullahtayyab.com`)
3. Fix whatever is blocking it and verify a real form submission goes through

**Current contact API route** (`src/app/api/contact/route.ts`):
- Validates: name, email, businessType, message (required); phone (optional)
- Sends via Resend: `from: 'Portfolio Contact <noreply@abdullahtayyab.com>'`
- On success: returns `{ success: true }`, frontend redirects to `/thank-you`
- On failure: returns error, frontend shows inline error message

**If Resend domain verification is blocked or slow**, a quick workaround is to change the `from` address to Resend's default sender `onboarding@resend.dev` (only works when sending to the account owner's email — fine for a personal portfolio).

### #2 — Website Tweaks & Improvements (TBD by user)

User has requested tweaks and changes to the website. These have not been specified yet — ask the user to list them at the start of the next session before beginning any work.

---

## 12. Constraints & Rules (Carry Forward)

- Never invent data — only use what has been provided, or ask
- No external icon libraries — inline SVG only
- No analytics or tracking scripts
- Framer Motion ease arrays must use `as const`
- Services page must keep the network specialist disclaimer
- `.env.local` is gitignored — never commit API keys
- Always develop on `claude/portfolio-website-dev-4YbiL` — never push to `main` without permission
- Server wrapper (`page.tsx`) + client content component pattern for all individual pages
- `<main>` landmark only in `layout.tsx` — content components use `<>` fragments

---

## 13. How to Start Dev Server

```bash
cd /home/user/Claude-Sample-Website
npm install        # if node_modules not present
npm run dev        # → http://localhost:3000
npm run build      # production build check
```

---

*Updated end of Session 2 — May 2026*
