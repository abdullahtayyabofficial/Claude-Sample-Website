# Project Handoff — Abdullah Tayyab Portfolio
### Session 3 Complete — Updated June 2026

> Feed this file + `CLAUDE.md` to a new Claude session to resume exactly where this session stopped.
> Both files live in the project root.

---

## 1. What This Project Is

A premium personal portfolio website for **Abdullah Tayyab**, a performance marketer and media buyer based in Pakistan. The site is a client acquisition and authority-building tool — not a generic portfolio.

**Repo:** `abdullahtayyabofficial/Claude-Sample-Website`
**Active development branch:** `claude/portfolio-website-dev-4YbiL`
**PR #5:** `claude/portfolio-website-dev-4YbiL` → `claude/build-portfolio-website-U3hLc` (open — Vercel auto-deploys previews from this PR)
**Production branch:** `claude/build-portfolio-website-U3hLc` (no `main` branch exists)
**Deployment:** Vercel

**Core positioning:**
> "I build and scale AI-powered marketing systems that drive predictable business growth."

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static generation) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Animation | Framer Motion v12 |
| Email | Resend (`/api/contact` route) |
| Fonts | Space Grotesk (headings) + Inter (body) via `next/font/google` |
| Deployment | Vercel |

**Rules that must not change:**
- `ease` arrays in Framer Motion must use `as const` — e.g. `[0.25, 0.4, 0.25, 1] as const`
- No external icon libraries — inline SVG only
- No analytics or tracking scripts
- `'use client'` only on components that use hooks or browser APIs
- Server wrapper `page.tsx` (exports metadata) + client content component `*Content.tsx` pattern
- `<main>` only in `layout.tsx` — content components use fragments
- Never commit `.env.local`
- Always develop on `claude/portfolio-website-dev-4YbiL`

---

## 3. All Pages — Status

| Route | Status |
|---|---|
| `/` | ✅ Complete |
| `/about` | ✅ Complete + Speaking & Teaching + Certifications sections added this session |
| `/expertise` | ✅ Complete |
| `/services` | ✅ Complete (includes network specialist disclaimer) |
| `/case-studies` | ✅ Complete |
| `/case-studies/[slug]` × 6 | ✅ All complete with proof images |
| `/privacy-policy` | ✅ Complete |
| `/thank-you` | ✅ Complete |
| `/api/contact` | ✅ Built — Resend integration not yet tested end-to-end |
| `/sitemap.xml` | ✅ |
| `/robots.txt` | ✅ |

---

## 4. Case Studies — Full State (6 Active)

All 6 case studies are fully populated with real content, proof images, and metrics.

| Slug | Client | Key Metric | Proof Images |
|---|---|---|---|
| `hardees-qsr` | QSR Brand (Hardee's) | PKR 31M+ revenue, 4x–16x ROAS, 7 months | ✅ 18 images (10 campaigns + 8 GA4) |
| `commercial-real-estate-lead-gen` | CBD Punjab | 2,042 leads, PKR ~205 avg CPL | ✅ 6 images |
| `ffc-pakistan` | FFC (Fauji Fertilizers) | 140M+ impressions, 88.5M+ views | ❌ No proof images |
| `cubicle-coworking` | Cubicle Co-Working | 3→25+ bookings in <60 days | ✅ 6 images |
| `wavebyte-ecommerce` | Wave Byte | PKR 1.5M+ spend, 5–8x ROAS | ✅ 5 images |
| `icr-it-centre` | ICR IT Centre | 300+ enrollments peak season | ✅ 10 images |

### Case Study Image Paths
```
public/images/case-studies/
├── hardees-qsr/
│   ├── hero.jpeg
│   └── proof/  (18 files: 1-10 sc *.jpeg + 1-8 ga4 *.png)
├── commercial-real-estate-lead-gen/
│   ├── hero.jpg
│   └── proof/  (6 files: "1. l.g overall campaigns.jpeg" through "6. l.g HP.jpeg")
├── ffc/
│   └── hero.jpg
├── cubicle-coworking/
│   ├── hero.jpg
│   └── proof/  (6 files: "1. overall.jpeg", "2.jpeg" through "6.jpeg")
├── wavebyte-ecommerce/
│   ├── hero.jpg
│   └── proof/  (5 files: 1.jpg through 5.jpg)
└── icr-it-centre/
    ├── hero.jpg
    └── proof/  (10 files: 1.jpg through 10.jpg)
```

### Case Study Data File
`src/data/case-studies.ts` — single source of truth. All 6 case studies fully written.

**Key fields used:**
- `slug`, `title`, `subtitle`, `callout`, `client`, `industry`, `thumbnail`, `heroImage`, `logo`
- `tags`, `overview` (supports `\n\n` for multi-paragraph), `problem`
- `strategyIntro` (optional intro sentence before numbered strategy points)
- `strategyPoints[]` — each with `title` + `description` (use `\n\n` to split into intro + bullet items)
- `results[]`, `resultsTable` (CBD uses this instead of results[])
- `outcome` (closing paragraph after proof section)
- `metrics[]`, `proofImages[]`, `campaigns[]` (FFC only)

**Strategy point bullet rendering logic** (in `CaseStudyLayout.tsx`):
- Split `description` by `\n\n`
- If only 1 chunk → plain paragraph
- If 2+ chunks → first chunk = intro paragraph, rest = bullet list
- Each bullet: if text before `:` is < 60 chars → render as bold brand-coloured label + body
- If no `:` pattern → plain bullet with dot only

---

## 5. What Was Built This Session (Session 3)

### Case Study Cards (Complete Redesign)
- Layout: logo → hero image → title → description → metrics → tags + "Read case study" CTA
- CSS class `.cs-card-border` in `globals.css`: white background, `1.5px solid rgba(21,161,223,0.45)` border, 3px gradient top accent, hover blue glow
- `CaseStudyCard.tsx` fully rewritten

### Custom Cursor + Lenis Smooth Scroll — Removed
- Both removed from `layout.tsx` on user request (poor UX)
- `cursor: none !important` rule also removed from `globals.css`

### Proof of Work Section (All Case Studies)
- Full-width section with "Proof of Work (Selective)" heading
- Smart subheadings: "Campaigns Data" / "Google Analytics Data" only shown when both groups exist (Hardee's only)
- Proof images split: `metaProofs = proofImages.slice(0, 10)`, `ga4Proofs = proofImages.slice(10)`
- Each image: gradient border wrapper (`.proof-img-border`), `object-contain`, diagonal watermark overlay (`.proof-watermark`)
- Lightbox: click to enlarge, close button `fixed top-4 right-4`, watermark persists in lightbox view
- **Performance**: hover/touch preloads full-size image before click; spinner shown while loading

### Watermark
- CSS class `.proof-watermark` in `globals.css`
- SVG data URI tiled pattern: "ABDULLAH TAYYAB" diagonal at -35°, `rgba(0,0,0,0.13)`, 420×280px tile
- Applied to both grid thumbnails AND lightbox enlarged view

### Case Study Content Rewrites
All content rewritten to match user-provided reference documents:

**Hardee's QSR:**
- 7 months (not 4), PKR 31M+, 18K+ purchases, 4x–16x ROAS
- 4 strategy points rewritten, callout updated

**CBD Punjab:**
- New title, callout, 3-paragraph overview, problem section
- 3 strategy points with `\n\n` bullet format (Tier 1/2/3, project-specific, creative constraints)
- `resultsTable` (not results[]) — 3 projects with leads + CPL
- `outcome` section — 3 paragraphs
- Leads: 2,042 high-profiled

**Wave Byte:**
- Overview rewritten to 3 paragraphs
- `strategyIntro` added
- 3 strategy points rewritten (Campaign Architecture & Scaling / Creative & Offer Strategy / Optimization & Retargeting)
- Results rewritten to match 4 bullet points from reference

**Cubicle Co-Working:**
- Overview rewritten to 3 paragraphs
- `strategyIntro` added
- 4 strategy points (Launch & Awareness / Retargeting & High-Conversion / Creatives Strategy / Community PR & Event Marketing)
- Results and outcome updated from reference screenshots

### Em Dashes — Removed Globally
All `—` replaced with `-` or restructured in: callouts, overviews, strategy descriptions, results, outcomes, and About page content.

### Multi-Paragraph Rendering Fixes
- `overview` field: split on `\n\n`, each chunk renders as separate `<p>` tag
- `outcome` field: same `\n\n` split behaviour
- `problem` field: uses `whitespace-pre-line`
- `strategyIntro`: plain paragraph rendered before the `<ol>` of strategy points

### New Type Fields Added (`src/types/index.ts`)
- `strategyIntro?: string` — intro paragraph before strategy points list
- `resultsTable?: CaseStudyResultsTable` — table format for results (CBD)
- `outcome?: string` — closing section after proof images
- `proofImages?: string[]` — array of proof image paths
- `logo?: string` — brand logo for case study card

### About Page — Speaking & Teaching + Certifications
Added two new sections between Stats and CTA:

**Speaking & Teaching (no section heading — removed on user request):**
Three alternating image/text blocks:
1. LUMS CES (image left, text right) — `public/images/about/achievements/lums.jpg`
2. ICR IT Centre (text left, image right) — `public/images/about/achievements/icr.jpg`
3. BIC Foundry (image left, text right) — `public/images/about/achievements/bic.jpg`

All images uploaded ✅

**Certifications (6 certs, 3-column grid):**
Each card: certificate image → title → issuer → "Show Credential" external link

| # | Title | Issuer | Image |
|---|---|---|---|
| 1 | Entrepreneurship | LUMS CES Program | `cert-1.jpg` ✅ |
| 2 | Advertising: Print, Outdoor & Digital | LUMS CES Program | `cert-2.jpg` ✅ |
| 3 | Fundamentals of Digital Marketing | Google Digital Garage | `cert-3.jpg` ✅ |
| 4 | Claude 101 Completion | Anthropic | `cert-4.jpg` ✅ |
| 5 | Professional Communication Skills | LUMS CES | `cert-5.jpg` ✅ |
| 6 | Google Soft Skills Program | Google Skillshop / PAFLA | `cert-6.jpg` ✅ |

All images uploaded ✅. "Certifications" heading uses `gradient-brand-text` class.

---

## 6. What Was Ruled Out This Session

| Ruled Out | Why |
|---|---|
| LinkedIn post scraping for achievement descriptions | LinkedIn returns 403 — blocked. Used user-provided text instead |
| Custom cursor | Removed — poor UX on user request |
| Lenis smooth scroll | Removed — poor UX on user request |
| FFC proof images | User has not provided them yet |
| 7th certification "Marketing & Content Creation (ICR)" | Removed on user request |
| "Achievements" as section heading | Replaced with no heading (removed entirely on user request) |

---

## 7. File Structure — Key Files to Know

```
src/
├── app/
│   ├── globals.css              ← All CSS: @theme, @keyframes, .cs-card-border,
│   │                               .proof-watermark, .proof-img-border, .gradient-border-card
│   ├── layout.tsx               ← Root layout — Navbar + Footer only (no cursor, no Lenis)
│   └── about/page.tsx           ← Server wrapper → AboutContent
├── components/
│   ├── case-studies/
│   │   ├── CaseStudyCard.tsx    ← Logo → hero image → title → desc → metrics → tags
│   │   └── CaseStudyLayout.tsx  ← Full case study page: hero, metrics strip, callout,
│   │                               body sections, proof grid, lightbox, outcome, CTA
│   └── pages/
│       └── AboutContent.tsx     ← Bio, Approach/Vision/Mission, Stats,
│                                   Speaking & Teaching (3 blocks), Certifications (6 cards), CTA
├── data/
│   └── case-studies.ts          ← All 6 case studies — single source of truth
└── types/
    └── index.ts                 ← CaseStudy, StrategyPoint, CaseStudyResultsTable,
                                    CaseStudyMetric, CaseStudyResult, FfcCampaign, etc.
```

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

**Work history:**
- **Firebolt63** (Nov 2025–Apr 2026): PKR 24M+ ecommerce, 325% YoY, 200M+ impressions
- **Wave Byte** (Dec 2024–Apr 2025): PKR 1.5M+ ad spend, 5–8x ROAS
- **Hello World Technologies** (Jun–Dec 2024): Cubicle 3→25+ bookings, 600+ event participants

---

## 9. Environment Variables

```
RESEND_API_KEY=re_ALn8oPh7_GWG1eJkdWE1KzYdX65bpHp2P
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```

`.env.local` is gitignored — never commit. Must also be set in Vercel dashboard.

---

## 10. Git / Deployment Flow

```
Feature work → claude/portfolio-website-dev-4YbiL
                      ↓  (PR #5 open)
             claude/build-portfolio-website-U3hLc  ← Vercel previews deploy here
```

- There is **no `main` branch** — do not push to main
- Vercel auto-deploys a preview build whenever PR #5 gets new commits
- To ship to production: merge PR #5 → `claude/build-portfolio-website-U3hLc`

---

## 11. Pending / Next Session Tasks

### High Priority
1. **Contact form end-to-end test** — The `/api/contact` Resend route is built but never confirmed working. Check Vercel function logs, verify `RESEND_API_KEY` + `CONTACT_EMAIL` are set in Vercel dashboard, verify domain `abdullahtayyab.com` is verified in Resend. If blocked, fallback: change `from` to `onboarding@resend.dev`.

2. **FFC case study proof images** — The FFC case study has no `proofImages` array. When user provides images, add a `proof/` folder under `public/images/case-studies/ffc/` and add paths to `case-studies.ts`.

3. **FFC case study content update** — Content is written but based on available info. User may want to rewrite it with their own reference material (like the other case studies were done with PDF/screenshot references).

### Lower Priority
4. **Merge PR #5 to production** — When user is happy with the preview, merge PR #5 into `claude/build-portfolio-website-U3hLc` to push everything live.

5. **Stats update on About page** — Currently shows `₨30M+` Revenue Driven but hero says `₨100M+`. Confirm correct number with user.

6. **ICR case study content update** — Content exists but was not rewritten from user reference screenshots (unlike Hardee's, CBD, Wave Byte, Cubicle). User may want to align it.

---

## 12. How to Start Dev Server

```bash
npm install        # if node_modules missing
npm run dev        # → http://localhost:3000
node_modules/.bin/next build   # use this for build checks (not npx next build)
```

---

## 13. Key CSS Classes (globals.css)

| Class | What it does |
|---|---|
| `.gradient-brand` | Background gradient: dark→light blue |
| `.gradient-brand-text` | Same gradient applied as text fill |
| `.cs-card-border` | Case study card: white bg, blue border, 3px gradient top, hover glow |
| `.proof-watermark` | Diagonal "ABDULLAH TAYYAB" SVG tile watermark — apply to proof image overlays |
| `.proof-img-border` | Gradient border wrapper for proof images |
| `.gradient-border-card` | Spinning conic gradient border (used in some UI cards) |
| `.section-padding` | Responsive vertical padding (6rem → 8rem → 10rem) |
| `.noise-overlay` | Adds subtle grain texture via `::after` pseudo-element |
| `.animate-scroll-left` | 30s infinite horizontal scroll |
| `.animate-float` | 4s float up/down |
| `.pause-animation` | Pauses any CSS animation |

---

*Updated end of Session 3 — June 2026*
