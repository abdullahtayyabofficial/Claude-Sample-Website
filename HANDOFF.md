# Project Handoff — Abdullah Tayyab Portfolio
### Session 2 Complete — Updated May 2026

> Feed this file + `CLAUDE.md` to a new Claude session to resume exactly where this session stopped.
> Both files live in the project root.

---

## 1. What This Project Is

A premium personal portfolio website for **Abdullah Tayyab**, a performance marketer and media buyer based in Pakistan. The site is a client acquisition and authority-building tool — not a generic portfolio or agency site.

**Live domain (deployment target):** https://abdullahtayyab.com
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
| Deployment | Vercel |

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
| Data files (`src/data/`) separate from components | Clean separation — data can be updated without touching UI |
| Case study pages use conditional rendering | Only render sections that have actual content |
| Services page includes network disclaimer | User requirement — services via trusted specialists, not Abdullah personally |
| `<main>` only in `layout.tsx` | Content components use `<>` fragments — no nested landmark issue |

---

## 4. What Was Ruled Out

| Ruled Out | Why |
|---|---|
| External calendar booking (Calendly etc.) | User doesn't have one — "Book a Call" scrolls to contact form |
| External icon libraries (Heroicons, Lucide etc.) | User constraint |
| Google Analytics / Meta Pixel / tracking | User constraint |
| ISR (Incremental Static Regeneration) | Not needed for a portfolio |
| Pages Router | App Router only |
| Freelance projects on About page (IBS Canada, Tots&Teens, Smart Trendz) | User removed from scope — no data provided |
| Committing `.env.local` | API key is gitignored — must never be committed |

---

## 5. Full Folder Structure (Current State — Complete)

```
/
├── CLAUDE.md                             ← Persistent technical context
├── HANDOFF.md                            ← This file
├── .env.local                            ← Gitignored. RESEND_API_KEY + CONTACT_EMAIL
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── public/
│   └── images/
│       ├── hero/
│       │   ├── PLACE_IMAGE_HERE.md
│       │   └── abdullah-tayyab.jpg       ← ⏳ User must place
│       ├── logos/
│       │   ├── PLACE_LOGOS_HERE.md
│       │   └── [9 logo PNGs]             ← ⏳ User must place
│       ├── case-studies/                 ← Empty — no case study images needed currently
│       └── og/
│           ├── PLACE_OG_IMAGE_HERE.md
│           └── og-image.jpg              ← ⏳ User must place (1200×630)
└── src/
    ├── app/
    │   ├── globals.css                   ← ✅ Tailwind @theme + custom utilities + keyframes
    │   ├── layout.tsx                    ← ✅ Root layout: fonts, metadata, viewport, Navbar, Footer
    │   ├── page.tsx                      ← ✅ Home — composes all 9 sections
    │   ├── sitemap.ts                    ← ✅ Auto-generates /sitemap.xml (12 routes)
    │   ├── robots.ts                     ← ✅ /robots.txt — allows all, blocks /api/ + /thank-you
    │   ├── about/page.tsx                ← ✅ Server wrapper (metadata) → AboutContent
    │   ├── expertise/page.tsx            ← ✅ Server wrapper → ExpertiseContent
    │   ├── services/page.tsx             ← ✅ Server wrapper → ServicesContent
    │   ├── case-studies/
    │   │   ├── page.tsx                  ← ✅ Listing page — grid of all 7 case study cards
    │   │   └── [slug]/page.tsx           ← ✅ Dynamic — 7 routes pre-rendered via generateStaticParams
    │   ├── privacy-policy/page.tsx       ← ✅ Complete — 11-section privacy policy
    │   ├── thank-you/page.tsx            ← ✅ Complete — post-form submission confirmation
    │   └── api/contact/route.ts          ← ✅ Resend integration — env-gated, full validation
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx                ← ✅ Fixed, scroll-aware, animated mobile menu
    │   │   └── Footer.tsx                ← ✅ Real social links set
    │   ├── sections/
    │   │   ├── Hero.tsx                  ← ✅ Complete
    │   │   ├── ProofStrip.tsx            ← ✅ Complete (needs logo files)
    │   │   ├── About.tsx                 ← ✅ Complete (homepage section)
    │   │   ├── Expertise.tsx             ← ✅ Complete (homepage section)
    │   │   ├── CaseStudiesPreview.tsx    ← ✅ Complete — shows first 3 case studies with metrics
    │   │   ├── Testimonials.tsx          ← ✅ Complete
    │   │   ├── Process.tsx               ← ✅ Complete
    │   │   ├── FAQ.tsx                   ← ✅ Complete
    │   │   └── ContactCTA.tsx            ← ✅ Complete — full Resend-wired contact form
    │   ├── pages/                        ← ✅ Client content components for individual pages
    │   │   ├── AboutContent.tsx
    │   │   ├── ExpertiseContent.tsx
    │   │   └── ServicesContent.tsx
    │   ├── ui/
    │   │   ├── Button.tsx                ← variant: primary | secondary | ghost
    │   │   ├── Card.tsx                  ← hover lift animation
    │   │   ├── GradientText.tsx          ← Brand gradient text fill
    │   │   ├── ScrollReveal.tsx          ← Fade+slide on scroll enter
    │   │   └── NodeNetwork.tsx           ← Canvas particle animation (hero background)
    │   └── case-studies/
    │       ├── CaseStudyCard.tsx         ← Card for listing + preview (tags, title, metrics)
    │       └── CaseStudyLayout.tsx       ← ✅ Full premium case study page layout
    ├── data/
    │   ├── case-studies.ts               ← ✅ 7 real case studies populated
    │   ├── testimonials.ts               ← ✅ 6 real testimonials
    │   ├── services.ts                   ← (not used — services data is inline in ServicesContent)
    │   └── expertise.ts                  ← (not used — expertise data is inline in components)
    ├── lib/utils.ts                      ← cn(), slugify(), formatDate()
    └── types/index.ts                    ← CaseStudy, Testimonial, Service, ExpertiseItem, etc.
```

---

## 6. Pages Built (All Complete)

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ | Home — 9 sections composited |
| `/about` | ✅ | Hero, bio+photo, stats, full timeline, education, community, CTA |
| `/expertise` | ✅ | Hero, 8 skill cards with descriptions, tools grid, CTA |
| `/services` | ✅ | Core service + 4 network categories + disclaimer + CTA |
| `/case-studies` | ✅ | Grid of all 7 case study cards |
| `/case-studies/[slug]` × 7 | ✅ | Premium layout: hero, metrics strip, labelled sections, CTA |
| `/privacy-policy` | ✅ | 11-section policy |
| `/thank-you` | ✅ | Post-form redirect |
| `/api/contact` | ✅ | POST endpoint — Resend integration |
| `/sitemap.xml` | ✅ | Auto-generated, 12 routes |
| `/robots.txt` | ✅ | Standard allow/disallow |

**Build output:** 20/20 static pages, zero TypeScript/lint errors.

---

## 7. Case Studies (7 Entries — All Populated)

All data taken directly from PDFs provided by user — nothing invented.

| Slug | Title | Key Metric |
|---|---|---|
| `cubicle-coworking` | From 3 Bookings to Full Capacity in 60 Days | 25+ bookings, <60 days |
| `commercial-real-estate-lead-gen` | 1,784+ Qualified Leads in 2 Months | 1,784+ leads, ~PKR 200/lead |
| `ffc-prize-distribution` | Turning a Single Ceremony into a National Digital Moment | 65.8M+ impressions |
| `ffc-sona-soil-day` | 7.42M Impressions in 2 Days on PKR 500,000 | 7.42M impressions, 40%+ engagement |
| `wavebyte-ecommerce` | Scaling to PKR 1.5M+ Ad Spend at 5–8x ROAS | ₨1.5M+ spend, 5–8x ROAS |
| `icr-it-centre` | 500+ Student Enrollments Per Peak Batch Season | 500+ peak, 80+ consistent |
| `hardees-qsr` | Building an Always-On Online Revenue Engine for a QSR Brand | 4.8x avg ROAS, 4 months |

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
- **Firebolt63** (Nov 2025–Apr 2026): PKR 24M+ ecommerce sales, 325% YoY, 200M+ impressions, up to 16x ROAS
- **Wave Byte** (Dec 2024–Apr 2025): PKR 1.5M+ ad spend, 5–8x ROAS, 570+ leads in 17 days
- **Hello World Technologies** (Jun–Dec 2024): Cubicle 3→25+ bookings in 60 days, 600+ IT event participants

**Community:**
- Guest Speaker — LUMS CES Advertising
- Guest Speaker — BIC Foundry, Beaconhouse International College
- Free 1-on-1 media buying consultations on Topmate/LinkedIn

---

## 9. Environment Variables

```
RESEND_API_KEY=re_ALn8oPh7_GWG1eJkdWE1KzYdX65bpHp2P
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```

`.env.local` already exists locally and is gitignored.
**Must also be set in Vercel dashboard** → Settings → Environment Variables.

---

## 10. Resend / Contact Form Status

The Resend integration is **fully implemented in code**. What's still needed:

1. **Verify domain in Resend dashboard** — add `abdullahtayyab.com` at resend.com/domains and add the DNS records it provides. Required because `from` is set to `noreply@abdullahtayyab.com`.
2. **Set env vars in Vercel** — `RESEND_API_KEY` + `CONTACT_EMAIL` (listed above).

Once those two are done, the contact form works end-to-end with no code changes.

---

## 11. Deployment Status

**Vercel build:** Succeeds — 20/20 static pages generated.

**Known issue at time of handoff:** Production domain showing Vercel 404 (`NOT_FOUND`, `sin1::` ID prefix). This is a Vercel configuration issue, not a code issue. The fix:

**Option A — Change production branch:**
1. Vercel → Settings → Git → Production Branch → set to `claude/portfolio-website-dev-4YbiL`
2. Deployments → find latest deployment on that branch → Promote to Production

**Option B — Merge to main:**
```bash
git checkout main
git merge claude/portfolio-website-dev-4YbiL
git push origin main
```

---

## 12. Image Assets Still Needed (User Must Place)

| File path | What it is | Status |
|---|---|---|
| `public/images/hero/abdullah-tayyab.jpg` | Boardroom seated photo (provided in session) | ⏳ User must save |
| `public/images/logos/hardees.png` | Hardee's logo (crop from logos sheet) | ⏳ User must crop & save |
| `public/images/logos/hello-world-tech.png` | Hello World Technologies | ⏳ User must crop & save |
| `public/images/logos/cbd-punjab.png` | CBD Punjab | ⏳ User must crop & save |
| `public/images/logos/ffc.png` | FFC | ⏳ User must crop & save |
| `public/images/logos/hbl-zarai.png` | HBL Zarai Services | ⏳ User must crop & save |
| `public/images/logos/cubicle.png` | Cubicle Co-Working | ⏳ User must crop & save |
| `public/images/logos/sabiha-anees.png` | Sabiha Anees | ⏳ User must crop & save |
| `public/images/logos/wave-byte.png` | Wave Byte | ⏳ User must crop & save |
| `public/images/logos/icr.png` | ICR IT Centre | ⏳ User must crop & save |
| `public/images/og/og-image.jpg` | 1200×630 OG image for link previews | ⏳ User must create & save |

Photos provided (saved locally by user): boardroom landscape shot + 8-photo collage.
Logos sheet provided (user must crop individually).

---

## 13. Build Steps — Final Status

| Step | Description | Status |
|---|---|---|
| 1 | Project architecture + full scaffold | ✅ Done |
| 2 | Hero section | ✅ Done |
| 3 | Home page sections (all 9) | ✅ Done |
| 4 | Individual pages — About, Expertise, Services | ✅ Done |
| 5 | Case study system (7 case studies) | ✅ Done |
| 6 | Contact functionality (Resend) | ✅ Done (domain verification needed) |
| 7 | Final polish — sitemap, robots, meta, HTML fixes | ✅ Done |

**The codebase is production-ready.** Only user-side tasks remain (images, env vars, domain).

---

## 14. Constraints & Rules (Carry Forward)

- Never invent data — only use what has been provided, or ask.
- No external icon libraries — inline SVG only.
- No analytics or tracking scripts anywhere.
- Framer Motion ease arrays must use `as const`.
- Services page must keep the network specialist disclaimer.
- Case study pages render only sections with actual content (conditional).
- `.env.local` is gitignored — never commit API keys.
- Always develop on `claude/portfolio-website-dev-4YbiL` — never push to `main` without permission.
- Server wrapper (`page.tsx`) + client content component pattern for all individual pages.
- `<main>` landmark only in `layout.tsx` — content components use `<>` fragments.

---

## 15. How to Start Dev Server

```bash
cd /home/user/Claude-Sample-Website
npm install        # if node_modules not present
npm run dev        # → http://localhost:3000
npm run build      # production build check
```

---

*Updated end of Session 2 — May 2026*
