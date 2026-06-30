# Niche Landing Page Playbook

> **Use this file as the master prompt when building a new niche LP for Abdullah Tayyab.**
> It bakes in every design decision, copy rule, and visual pattern from the Case-Ready Smile Pipeline™ LP so the next LP lands at "finished v3" on the first build, not v1.
>
> Reference implementation: `src/components/pages/SmileMakeoverLPContent.tsx`
> Live route: `/smilemakeover-lp`

---

## 1. How to Use This Playbook

Open a new session and paste this prompt (filling in the bracketed variables):

```
Build me a new niche landing page for Abdullah Tayyab targeting [NICHE]
with the product name [PRODUCT_NAME™].

Follow LP-PLAYBOOK.md exactly. Reference implementation:
src/components/pages/SmileMakeoverLPContent.tsx (route: /smilemakeover-lp).

Niche-specific details:
- Target audience: [e.g. premium home remodelers / cosmetic clinics / law firms]
- Revenue band of target client: [e.g. $50k-$500k/month]
- Big offer / outcome: [e.g. qualified consultations / booked discovery calls]
- Average case/job value: [e.g. $8k-$20k / $50k-$200k]
- Hero metric trio: [3 short stats — same shape as the smile LP's 3 bullets]
- Slug for the route: [e.g. /remodeler-lp]
- Branch: claude/portfolio-website-dev-4YbiL

Skip the back-and-forth — apply every rule below from the start.
```

---

## 2. Architecture (Non-Negotiable)

| Layer | Rule |
|---|---|
| Route | New LP lives at `src/app/[slug]/page.tsx` (server wrapper) — NOT inside the `(site)/` route group, so it has no Navbar/Footer. |
| Server wrapper | Exports metadata with `robots: { index: false, follow: false }`. Title, description, canonical URL. |
| Client component | `src/components/pages/[Name]LPContent.tsx`. Starts with `'use client'`. |
| State | `useState`, `useEffect`, `useRef`, `useInView`, `AnimatePresence`. No external state libs. |
| Ease constant | `const EASE = [0.25, 0.4, 0.25, 1] as const` — required for Framer Motion v12 typing. |
| Booking URL | `const BOOKING_URL = '#'` constant at top. TODO comment to swap in real Calendly link before launch. |
| Icons | Inline SVG only. No icon libraries. |

---

## 3. Permanent Copy Rules

- **NEVER use em dashes (`—`).** Anywhere. In any file. Use hyphens (`-`) instead. This is a forever rule across the entire codebase, not just LPs.
- Time mentions in CTAs and FAQ answers: **45 minutes / 45-minute**, never 30.
- No analytics or tracking scripts.
- No external icon libraries — inline SVG only.
- Sub-copy under every CTA: `"This is a no-pitch, but a 45-minute diagnostic call. If we are not a good fit, we will tell you."` Define once as `SUB_COPY` constant and reuse.

---

## 4. Visual Foundation

### Brand Tokens
```ts
const LIGHT_GRADIENT = 'linear-gradient(135deg, #f8f9fc 0%, #bde2f6 25%, #7ec8ee 55%, #cce9f8 80%, #f0f8ff 100%)'
const DARK_GRADIENT  = 'linear-gradient(135deg, #000000 0%, #010738 30%, #0d2b6b 58%, #010b3a 80%, #000000 100%)'
```

### Section Background Rotation (Alisha pattern)
Alternate three backgrounds in strict order — never two of the same back-to-back in the middle:

| Position | Section | Background |
|---|---|---|
| 1 | Hero | `DARK_GRADIENT` |
| 2 | Proof / Case Studies | `LIGHT_GRADIENT` |
| 3 | Pain Agitation | `bg-[#f8f9fc]` (marble) |
| 4 | How It Works | `LIGHT_GRADIENT` |
| 5 | Why Choose Us / Reasons | `bg-[#f8f9fc]` (marble) |
| 6 | Differentiation | `LIGHT_GRADIENT` |
| 7 | Qualify (Is For / Not For) | `bg-[#f8f9fc]` (marble) |
| 8 | Brand Mission | `bg-[#f8f9fc]` (marble) |
| 9 | FAQ | `LIGHT_GRADIENT` |
| 10 | Final CTA | `DARK_GRADIENT` |
| 11 | LP Footer | `#000820` |

### Text Color Tokens (already calibrated for contrast)
- Light section body: `text-[#2d3250]`
- Light section muted: `text-[#5a6180]`
- Light section heading: `text-[#0a0a14]`
- Dark section body: `text-white/95`
- Dark section sub-copy: `text-white/65` to `text-white/90`
- Brand blue accent: `text-[#15a1df]`

---

## 5. Reusable Components (Define Once at Top of File)

### `FadeUp`
Wrapper using `useInView({ once: true, margin: '-60px' })`, `initial={{ opacity: 0, y: 28 }}`, animate on view. Accepts `delay`, `className`.

### `CTAButton` (dark sections)
Flat solid blue `bg-[#15a1df]`. Sizes: `lg` = `text-lg px-14 py-5`, `sm` = `text-base px-9 py-4`. Hover: lifts 0.5, glow `0_0_36px_rgba(21,161,223,0.5)`.

### `GradientCTAButton` (light sections)
Background gradient `linear-gradient(135deg, #010738 0%, #0d5f99 55%, #15a1df 100%)`. Has hover gradient overlay AND a CSS shimmer sweep (`absolute top-0 left-[-75%] w-[50%] h-full skew-x-[-20deg] bg-white/[0.18] group-hover:left-[125%] transition-all duration-700`). Same sizing as `CTAButton`.

### `SectionCTA`
```tsx
function SectionCTA({ label, sub, dark = true }) {
  return (
    <div className="flex flex-col items-center gap-4 mt-16 pt-2">
      {dark ? <CTAButton label={label} /> : <GradientCTAButton label={label} />}
      <p className={`text-base max-w-sm text-center leading-relaxed ${
        dark ? 'text-white/70' : 'text-[#0a0a14]'
      }`}>
        {sub ?? SUB_COPY}
      </p>
    </div>
  )
}
```
Sub-copy on light sections is BLACK (`#0a0a14`), not grey. Sub-copy on dark sections is `text-white/70`.

### `StickyNav`
Fixed top, max-w-6xl, py-3. Brand wordmark "Abdullah Tayyab" left, single `Book Your Free Strategy Call` CTA chip right (bg `#15a1df`, px-4 py-2). Transparent until scroll > 80px, then `bg-[#010738]/96 backdrop-blur-md`.

### `CheckIcon` / `XIcon`
Inline SVG, 5x5 (`w-5 h-5 mt-0.5 shrink-0`), `strokeWidth={2.5}`. Check accepts a `color` prop (default `#15a1df`); X is always red-400.

---

## 6. Section Templates

### Hero (DARK)
- `min-h-screen`, centered, `pt-36 pb-28`
- Ambient glow: 3 absolute `blur-[100-140px]` gradient orbs + 48px dotted pattern overlay at opacity 0.025
- Qualifying badge: pill with `border-[#15a1df]/30 bg-[#15a1df]/[0.08]` text-[#15a1df] uppercase `text-xs tracking-[0.1em]`
- Headline: `text-3xl sm:text-4xl md:text-[46px] lg:text-[52px]`, `leading-[1.1]`, with PRODUCT_NAME wrapped in a gradient `<span>` (`background: linear-gradient(90deg, #a8dcf5 0%, #15a1df 55%, #0c75a8 100%)`, `WebkitBackgroundClip: 'text'`, `WebkitTextFillColor: 'transparent'`)
- 3 proof bullets in a vertical `<ul>`, each with `CheckIcon`
- VSL placeholder: aspect-video, dark with play button, "founder-led video coming soon" label
- CTA + sub-copy at the bottom

### Proof / Case Studies (LIGHT GRADIENT)
- Centered heading + sub
- 3-column grid (`md:grid-cols-3`), `items-stretch`
- Each card uses these EXACT structural rules so all 3 are equal height:
  - `FadeUp className="h-full"`
  - Card div: `bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full`
  - Image wrapper: `relative aspect-video shrink-0`
  - Body: `p-7 flex flex-col flex-1`
  - 5-star row: `text-[#f59e0b] text-xl tracking-wide mb-4`
  - Quoted headline `<h3>`: bold, no `flex-1`
  - Description `<p>`: `font-body flex-1` (flex-1 lives on description so client info pins to bottom)
  - Footer: `border-t border-[#e8eaf0] pt-5` with client name (bold) + industry (xs muted)
- Use Abdullah's REAL existing case studies (Hardee's / CBD / Cubicle from `src/data/case-studies.ts`), no external links from cards.

### Pain Agitation (MARBLE WHITE)
- Heading `text-2xl md:text-3xl` + `md:whitespace-nowrap` so it stays on one line
- Sub-heading in `#15a1df`
- `failedSolutions` array → bordered list with red ✗ markers
- `consequences` array of `{ text, emphasis }` paragraphs → final emphasis paragraph is `font-semibold text-xl text-[#0a0a14]`
- Bridge block: `border-l-[3px] border-[#15a1df] pl-8` introducing the product
- `<SectionCTA dark={false} />`

### How It Works (LIGHT GRADIENT)
- 5 numbered steps (single source of numbering — circle badges only, no faded background numbers)
- Each step: `w-16 h-16` rounded-full white badge with `border-2 border-[#15a1df]/40`, ring shadow `0_0_0_6px_rgba(21,161,223,0.07)`, blue number
- Connector line (desktop): vertical 1px gradient line behind badges
- Step title `text-xl md:text-2xl`, description `text-base md:text-lg`

### Reasons / Why Choose Us (MARBLE WHITE)
- 6 reasons in `md:grid-cols-2` (NOT 3-column — 2 columns gives breathing room)
- Heading wraps after a key word using `<br className="hidden md:inline" />` so it lays out cleanly on desktop
- Each card has TWO regions:
  1. **Top image strip**: `py-10` with one of 6 distinct gradients from a `REASON_GRADIENTS` array. Centers a large `w-14 h-14` outlined SVG icon. Number badge (`w-8 h-8 bg-white/15 rounded-lg`) absolutely positioned `bottom-3 left-4`.
  2. **Body**: `p-7 flex-1 flex flex-col`. Heading sits inside a `border-l-[3px] border-[#15a1df] pl-4` block. Description below.
- Card itself: `bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full flex flex-col`
- Gradient palette to rotate through (one per card):
  ```
  linear-gradient(135deg, #010738 0%, #0d2b6b 100%)
  linear-gradient(135deg, #0d3d7a 0%, #15a1df 100%)
  linear-gradient(135deg, #010738 0%, #1a3a8f 100%)
  linear-gradient(135deg, #0d5f99 0%, #4ab9e8 100%)
  linear-gradient(135deg, #030e5c 0%, #0d5f99 100%)
  linear-gradient(135deg, #0d2b6b 0%, #15a1df 100%)
  ```

### Differentiation: "What We Do / What We Need" boxes (LIGHT GRADIENT)
THIS WAS THE MOST ITERATED SECTION. Build it correctly the first time:

- 2-column grid (`md:grid-cols-2 gap-6`)
- Both cards: `bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(1,7,56,0.08)] hover:shadow-[0_12px_40px_rgba(1,7,56,0.15)] flex flex-col`
- Each card has a colored header band (`px-8 pt-8 pb-7`) with:
  - 2 ambient blur orbs absolutely positioned (top-right and bottom-left) for depth
  - A SINGLE centered heading — **no eyebrow labels, no icon chips, no decorative elements**
  - Heading: `font-heading font-bold text-white text-2xl md:text-[26px] leading-tight text-center`
- **Left card ("What We Do For You")** header gradient: `linear-gradient(135deg, #010738 0%, #0d3d7a 60%, #15a1df 100%)`
- **Right card ("What We Need From You")** header gradient: `linear-gradient(135deg, #047857 0%, #10b981 60%, #34d399 100%)` (green, Alisha-style)
- Body: `p-8 pt-7 flex-1 flex flex-col`, list of 3 items each
- Each item: `flex gap-4`, hairline divider `pb-5 border-b border-[#eef0f6]` between items (none after last)
- Each item has a numbered badge `w-9 h-9 rounded-lg`:
  - Left card badge: blue gradient `linear-gradient(135deg, #010738 0%, #15a1df 100%)`, white text, shadow `0_4px_12px_rgba(21,161,223,0.35)`
  - Right card badge: green gradient `linear-gradient(135deg, #047857 0%, #10b981 100%)`, white text, shadow `0_4px_12px_rgba(16,185,129,0.35)`
  - Number format: `String(idx + 1).padStart(2, '0')` → 01, 02, 03
- Item body: bold heading (`font-heading font-bold text-[#0a0a14] text-[15px]`) + description (`font-body text-[#2d3250] text-[14px]`)
- Each side has exactly **3 bold-label + description items** (not 4-5 plain bullets). Items must be punchy and outcome-focused, not a feature list.

### Qualify / Disqualify (MARBLE WHITE)
- "IS for you / NOT for you" 2-column grid
- IS card: `border-emerald-100`, emerald check circle header
- NOT card: `border-red-100`, red X circle header
- Followed by 4 archetype cards in 2-col grid, each with a giant faded `01-04` number absolutely positioned top-right at `text-6xl text-[#010738]/[0.05]`
- Final CTA: `<GradientCTAButton label="Check If Your Clinic Is a Good Fit" />` with sub-copy "Takes 45 minutes."

### Brand Mission (MARBLE WHITE)
- Heading with brand-gradient `<span>` on the emphasis phrase
- `missionParas` array of `{ text, style: 'body' | 'bold' | 'accent' }` — accent style gets `text-[#15a1df] font-heading font-semibold text-xl`
- Closing two-part line: "We handle X. You deliver Y." with the Y phrase in brand gradient

### FAQ (LIGHT GRADIENT)
- Centered heading "Frequently Asked Questions" — no eyebrow label
- Items in `<AnimatePresence>` accordion using `useState<number | null>(null)` for the active index
- Each item: white card, `border-white/80`, rounded-2xl
- Plus icon rotates 45° to X on open (`animate={{ rotate: active === i ? 45 : 0 }}`)
- 7 questions covering: niche fit, what makes this different from ads alone, why-not-the-last-agency, prerequisites, timeline, compliance, geography

### Final CTA (DARK)
- Same ambient glow pattern as hero
- Massive headline `text-3xl md:text-4xl lg:text-[50px]`
- `closingParas` array, middle paragraph styled as accent (`text-[#15a1df] font-heading font-semibold text-xl`)
- 4 closing bullets with `CheckIcon` on `text-white/95`
- `CTAButton` + sub-copy at the bottom

### Footer (`#000820`)
- Copyright, product TM disclaimer, results-vary disclaimer, link to `/privacy-policy`. All text muted whites (`text-white/30`, `/18`, `/14`).

---

## 7. Common Mistakes to Avoid (Don't Repeat These)

1. **Don't add eyebrow labels** like "Results", "Fit Check", "Difference", "Questions", "Our Side", "Your Side" above section headings or inside box headers. The headings stand on their own.
2. **Don't duplicate numbering.** If a section uses circle badges, kill the faded background numbers behind them. Pick ONE.
3. **Don't make case study cards uneven height.** The `h-full` chain (FadeUp → card div) plus `flex-1` on the DESCRIPTION (not the headline) is what makes them stretch evenly.
4. **Don't use grey sub-copy on light sections.** It reads as faded. Use `text-[#0a0a14]` (black).
5. **Don't use icon chips inside box headers.** The user finds them noisy. Headings centered, no decoration.
6. **Don't auto-link case study cards** to the main case-studies pages. The LP is self-contained.
7. **Don't stop at 3-column grids for reason cards.** 6 reasons in 3 columns gets cramped — use 2 columns.
8. **Don't put generic feature bullets** in the "What We Do / Need" boxes. Each item must be a bold outcome label + a concrete sentence, not a checklist.
9. **Don't render the hero headline at default `text-5xl/text-6xl`.** Use the calibrated `text-3xl sm:text-4xl md:text-[46px] lg:text-[52px]`.
10. **Don't forget `as const`** on Framer Motion ease arrays. Build will fail typecheck without it.

---

## 8. Section Order Checklist

```
StickyNav
Hero (DARK)
ProofSection — case studies (LIGHT GRADIENT)
PainAgitation (MARBLE)
HowItWorks (LIGHT GRADIENT)
WhyChooseUs / Reasons (MARBLE)
Differentiation — What We Do / Need (LIGHT GRADIENT)
QualifySection — Is For / Not For + Archetypes (MARBLE)
BrandMission (MARBLE)
FAQSection (LIGHT GRADIENT)
FinalCTA (DARK)
LPFooter (#000820)
```

---

## 9. Content Tone Rules

- Speak to a specific niche owner, not "businesses" generically.
- Lead every section with a problem-acknowledgment or outcome promise, not a feature.
- Use real numbers, not "many" or "lots of".
- Pain section: list 5-6 things the niche has tried that don't work, then 6-7 consequence paragraphs ending in a bolded summary.
- How-it-works: 5 steps. Each step is named like a deliverable, not a phase ("Cosmetic Case Audit", not "Discovery").
- Reasons section: 6 sharp differentiators, each title ≤ 8 words, description ≤ 60 words.
- Differentiation boxes: 3 items per side. Each item: short bold label (3-5 words) + 1-2 sentence description.
- Qualify: 6 IS-for bullets, 5 NOT-for bullets, 4 archetypes.
- Brand mission: 7-8 paragraphs ending in a 2-clause power statement.
- FAQ: 7 questions starting with the niche-fit question, ending with geography/scope.
- Final CTA: 4 closing paragraphs + 4 bullets. Middle paragraph is the accent line.

---

## 10. Deliverables Checklist Before Saying "Done"

- [ ] Route lives at `/[slug]`, NOT under `(site)/`
- [ ] Metadata has `robots: { index: false, follow: false }`
- [ ] Zero em dashes in the file (grep `—` returns nothing)
- [ ] All time mentions say 45 minutes / 45-minute
- [ ] `as const` on every `ease` array
- [ ] Section background rotation matches the table in §4
- [ ] CTA buttons use `text-lg px-14 py-5` for lg size
- [ ] Case study cards equal height (FadeUp `h-full` + card `h-full` + description `flex-1`)
- [ ] Reasons grid is 2-column with image-strip headers
- [ ] What-We-Do/Need boxes: centered headings, NO eyebrow labels, NO icon chips, green right header
- [ ] FAQ: 7 items, plus icon rotates to X
- [ ] `npx tsc --noEmit` passes
- [ ] Commit + push to `claude/portfolio-website-dev-4YbiL`

---

*Source LP: `/smilemakeover-lp` — `src/components/pages/SmileMakeoverLPContent.tsx`*
*Last updated after the Smile Makeover LP went through ~12 rounds of design iteration.*
