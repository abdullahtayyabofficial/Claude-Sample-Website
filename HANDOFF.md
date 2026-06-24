# Project Handoff — Abdullah Tayyab Portfolio
### Updated June 2026 — For New Session Continuity

> Feed this file + `CLAUDE.md` to a new Claude session to resume exactly where this left off.
> Both files live in the project root.

---

## 1. What This Project Is

A premium personal portfolio website for **Abdullah Tayyab**, a performance marketer and media buyer based in Pakistan. The site is a client acquisition and authority-building tool.

**Live URL:** https://abdullahtayyab.com — Deployed on Vercel  
**Repo:** `abdullahtayyabofficial/Claude-Sample-Website`  
**Active branch:** `claude/fix-contact-form-FteOp`  
**Deployment platform:** Vercel

**Core positioning:**
> "I build and scale AI-powered marketing systems that drive predictable business growth."

---

## 2. Tech Stack

| Layer | Decision |
|---|---|
| Framework | Next.js 15 — App Router, static generation |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with `@tailwindcss/postcss` |
| Animation | Framer Motion v12 |
| Email backend | Resend via Server Action (`src/app/actions/contact.ts`) |
| Fonts | Space Grotesk (headings) + Inter (body) via `next/font/google` |
| Deployment | Vercel |

---

## 3. Branch State — IMPORTANT

There are two active development branches with **different work**:

### `claude/fix-contact-form-FteOp` (CURRENT — work here)
- Contact form rewritten as a Next.js **Server Action** (`src/app/actions/contact.ts`) — replaces old API route
- Uses `from: 'Portfolio Contact <onboarding@resend.dev>'` — no domain verification needed
- Mobile responsiveness fixes (hero metrics, case study metrics strip, About page badge overflow)
- Expertise card height consistency fixes
- **Old case studies** — 7 entries with separate `ffc-prize-distribution` and `ffc-sona-soil-day` slugs

### `claude/portfolio-website-dev-4YbiL` (BEHIND on contact/responsiveness)
- **FFC consolidation** — two FFC case studies merged into one `ffc-pakistan` slug with `campaigns[]` array
- **Premium animations layer** — Lenis smooth scroll, custom cursor (mix-blend-difference), magnetic Button effect, noise texture overlay
- **Case study layout redesign** — hero images, callout pull-quotes, strategyPoints numbered list, emerald Results cards
- **Updated numbers** — QSR: 31M+ impressions, 18k+ purchases; Lead Gen: 1,784+ total leads
- Cleanup: removed AI pulse badge, removed red Challenge styling, removed em dashes, renamed "My Strategy" → "Strategy"

**⚠️ These two branches have diverged. They need to be reconciled.** The recommended approach for a new session is to merge/rebase the dev branch work into `fix-contact-form-FteOp`, then push and deploy.

---

## 4. Contact Form — Current State

The contact form is now a **Server Action**, not an API route.

**File:** `src/app/actions/contact.ts`  
**Component:** `src/components/sections/ContactCTA.tsx` — calls `sendContactEmail()` via `import { sendContactEmail } from '@/app/actions/contact'`

**Flow:**
1. User fills form (name, email, phone optional, businessType, message)
2. `handleSubmit` calls `sendContactEmail(form)`
3. On success: `window.location.href = '/thank-you'`
4. On error: inline error message shown

**Current `from` address:** `onboarding@resend.dev` — works without domain verification but only delivers to the Resend account owner's email. This is fine for a personal portfolio.

**Environment variables needed (Vercel dashboard):**
```
RESEND_API_KEY=re_ALn8oPh7_GWG1eJkdWE1KzYdX65bpHp2P
CONTACT_EMAIL=abdullahtayyab.805@gmail.com
```

**Status:** The code is correct. If the form doesn't work on the live site, the most likely cause is that the env vars are NOT set in the Vercel dashboard. Check: Vercel → Project → Settings → Environment Variables.

---

## 5. Case Studies (Current State on `fix-contact-form-FteOp`)

7 entries with old structure:

| Slug | Key Metric |
|---|---|
| `hardees-qsr` | PKR 25M+, 4x–16x ROAS |
| `commercial-real-estate-lead-gen` | 2,000+ leads in 2 months |
| `cubicle-coworking` | 25+ bookings in <60 days |
| `ffc-prize-distribution` | 65.8M+ impressions |
| `wavebyte-ecommerce` | PKR 1.5M+ spend, 5–8x ROAS |
| `icr-it-centre` | 300+ enrollments |
| `ffc-sona-soil-day` | 7.42M impressions in 2 days |

**On `portfolio-website-dev-4YbiL`** (not yet merged here):
- `ffc-prize-distribution` + `ffc-sona-soil-day` consolidated into `ffc-pakistan`
- Corrected numbers: QSR 31M+ impressions / 18k+ purchases; Lead Gen 1,784+ leads
- Hero images added for hardees-qsr (`hero.jpeg`), commercial-real-estate-lead-gen (`hero.jpg`), ffc (`hero.jpg`)

---

## 6. Animation Layer (`portfolio-website-dev-4YbiL` only — not yet on this branch)

These were added to the dev branch and need to be ported over:

**Lenis smooth scroll** (`src/components/providers/LenisProvider.tsx`):
- Wraps app in `layout.tsx`
- `duration: 1.15`, easing: `1 - 2^(-10t)`, `smoothWheel: true`, `wheelMultiplier: 0.85`
- `scroll-behavior: smooth` removed from `globals.css` (Lenis replaces it)

**Custom cursor** (`src/components/ui/CustomCursor.tsx`):
- Dot: 7px white circle, `mix-blend-difference` (visible on any bg)
- Ring: 36px circle, lags behind with spring physics
- Only activates on `(pointer: fine) and (hover: hover)` devices
- Added `cursor: none !important` media query in `globals.css`

**Magnetic Button** (`src/components/ui/Button.tsx`):
- `useMagnetic` hook, `strength = 0.28`, spring `stiffness: 350 / damping: 22`
- Applied to all 3 Button render paths

**Noise texture** (`.noise-overlay` in `globals.css`):
- SVG fractalNoise `baseFrequency='0.72'`, `numOctaves: 4`
- Applied on hero section and CTA section: `className="... noise-overlay"`

---

## 7. Full Folder Structure

```
src/
├── app/
│   ├── globals.css              ✅ Tailwind @theme + utilities + keyframes
│   ├── layout.tsx               ✅ Root layout
│   ├── page.tsx                 ✅ Home — 9 sections
│   ├── sitemap.ts               ✅
│   ├── robots.ts                ✅
│   ├── actions/
│   │   └── contact.ts           ✅ Server Action (this branch)
│   ├── about/page.tsx           ✅
│   ├── expertise/page.tsx       ✅
│   ├── services/page.tsx        ✅
│   ├── case-studies/
│   │   ├── page.tsx             ✅ Listing page
│   │   └── [slug]/page.tsx      ✅ 7 routes pre-rendered
│   ├── privacy-policy/page.tsx  ✅
│   └── thank-you/page.tsx       ✅
├── components/
│   ├── layout/Navbar.tsx        ✅ Always white, scroll-aware
│   ├── layout/Footer.tsx        ✅ Real social links
│   ├── sections/[9 sections]    ✅ All complete
│   ├── pages/[3 content files]  ✅
│   ├── ui/Button / Card / GradientText / ScrollReveal / NodeNetwork
│   └── case-studies/
│       ├── CaseStudyCard.tsx    ✅
│       └── CaseStudyLayout.tsx  ✅
├── data/
│   ├── case-studies.ts          ✅ 7 entries (old FFC structure on this branch)
│   └── testimonials.ts          ✅ 6 real testimonials
├── lib/utils.ts
└── types/index.ts
```

---

## 8. PRIORITY TASKS FOR NEXT SESSION

### #1 — Merge branches (FIRST THING)

The dev branch (`portfolio-website-dev-4YbiL`) has major improvements that aren't on this branch. Recommended approach:

```bash
git checkout claude/fix-contact-form-FteOp
git merge claude/portfolio-website-dev-4YbiL
# Resolve any conflicts (likely in case-studies.ts, ContactCTA.tsx, layout.tsx)
# Keep: Server Action contact form from this branch, animation layer from dev branch
git push -u origin claude/fix-contact-form-FteOp
```

If there are complex conflicts, the safe approach is to manually apply the key changes from the dev branch one by one.

### #2 — Verify contact form end-to-end

After merging, test the contact form on the live site:
1. Open browser devtools → Network tab
2. Submit the form
3. Check that the Server Action fires without error
4. Check that email arrives at `abdullahtayyab.805@gmail.com`

If the email doesn't arrive:
- Verify `RESEND_API_KEY` and `CONTACT_EMAIL` are set in Vercel → Settings → Environment Variables
- Check Vercel function logs for errors
- The `from: 'onboarding@resend.dev'` address only works for the Resend account owner's email — confirm the account email matches `CONTACT_EMAIL`

### #3 — User-requested tweaks (TBD)

The user mentioned there's "one more thing" before landing pages. Ask the user to list any tweaks at the start of the session.

### #4 — Niche-specific landing pages

Next major phase. Not yet started. These are separate routes targeting specific niches (e.g., `/for/ecommerce-brands`, `/for/real-estate-agencies`).

---

## 9. Images

| Path | Status |
|---|---|
| `public/images/hero/abdullah-tayyab.jpg` | ✅ Placed |
| `public/images/logos/[9 logos]` | ✅ All placed |
| `public/images/og/og-image.jpg` | ✅ Placed |
| `public/images/case-studies/hardees-qsr/hero.jpeg` | ✅ (on dev branch) |
| `public/images/case-studies/commercial-real-estate-lead-gen/hero.jpg` | ✅ (on dev branch) |
| `public/images/case-studies/ffc/hero.jpg` | ✅ (on dev branch) |
| `public/images/case-studies/cubicle-coworking/hero.*` | ❌ Not yet |
| `public/images/case-studies/wavebyte-ecommerce/hero.*` | ❌ Not yet |
| `public/images/case-studies/icr-it-centre/hero.*` | ❌ Not yet |

---

## 10. Person / Data Reference

| Field | Value |
|---|---|
| Name | Abdullah Tayyab |
| Email | abdullahtayyab.805@gmail.com |
| LinkedIn | https://www.linkedin.com/in/abdullahtayyabofficial/ |
| Facebook | https://www.facebook.com/i.abdullahtayyabofficial |
| Instagram | https://www.instagram.com/abdullahtayyab.official/ |
| Hero metrics | ₨100M+ Revenue Driven · 10,000+ Leads Generated · 93% Client Retention |

---

## 11. Design System Quick Reference

**Brand colors:**
- `#010738` — brand dark (navy)
- `#15a1df` — brand light (blue)
- `#f8f9fc` — surface muted
- `#e8eaf0` — border
- `#0a0a14` — text primary
- `#4a4f6a` — text secondary
- `#8890a8` — text muted

**Key utilities (globals.css):**
- `.gradient-brand` — 135deg dark→light background
- `.gradient-brand-text` — gradient text fill
- `.section-padding` — responsive vertical padding
- `.noise-overlay` — SVG fractalNoise texture (::after pseudo-element)
- `.card-shadow` / `.card-shadow-hover`

---

## 12. Rules (Carry Forward)

- Never invent data — only use what the user provides
- No external icon libraries — inline SVG only
- No analytics or tracking scripts
- Framer Motion ease arrays must use `as const`
- Services page must keep the network specialist disclaimer
- `.env.local` is gitignored — **never commit API keys**
- Always develop on `claude/fix-contact-form-FteOp` (current active branch)
- `<main>` landmark only in `layout.tsx` — page content components use `<>` fragments
- Server wrapper (`page.tsx` exports metadata) + client content component pattern for all pages

---

*Updated June 2026 — reflects state after Sessions 1–3*
