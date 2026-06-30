'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Playfair_Display, Lato } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lato',
})

const LP3_FONT_OVERRIDE_CSS = `
.lp3-fonts,
.lp3-fonts .font-body,
.lp3-fonts p,
.lp3-fonts li,
.lp3-fonts a,
.lp3-fonts button,
.lp3-fonts input,
.lp3-fonts textarea,
.lp3-fonts label {
  font-family: var(--font-lato), 'Lato', system-ui, -apple-system, 'Segoe UI', sans-serif !important;
}
.lp3-fonts .font-heading,
.lp3-fonts h1,
.lp3-fonts h2,
.lp3-fonts h3,
.lp3-fonts h4,
.lp3-fonts h5,
.lp3-fonts h6 {
  font-family: var(--font-playfair), 'Playfair Display', Georgia, 'Times New Roman', serif !important;
  letter-spacing: -0.01em;
}
.lp3-fonts h1, .lp3-fonts h2 {
  letter-spacing: -0.02em;
}
`

const BOOKING_URL = '#' // TODO: Replace with Calendly link before going live
const EASE = [0.25, 0.4, 0.25, 1] as const

const SUB_COPY_HERO =
  'A free, no-pitch 30-minute call. We will map your current patient flow against where it is leaking revenue, and show you exactly what the Case-Ready Smile Pipeline would look like installed in your clinic.'
const SUB_COPY_GENERIC =
  'Free. No pitch. 30 minutes. We will show you exactly where your funnel is leaking.'
const SUB_COPY_FIT =
  '30 minutes. Free. We will tell you honestly whether this is right for you - and if it is not, what would be.'
const SUB_COPY_FINAL =
  'Free. 30 minutes. No pitch. If this is the right fit for your clinic, we will show you exactly what we would build for you.'

const LIGHT_GRADIENT =
  'linear-gradient(135deg, #f8f9fc 0%, #bde2f6 25%, #7ec8ee 55%, #cce9f8 80%, #f0f8ff 100%)'
const DARK_GRADIENT =
  'linear-gradient(135deg, #000000 0%, #010738 30%, #0d2b6b 58%, #010b3a 80%, #000000 100%)'

// Shared utilities

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function CTAButton({
  label = 'Book Your Free Strategy Consultation',
  size = 'lg',
}: {
  label?: string
  size?: 'sm' | 'lg'
}) {
  return (
    <a
      href={BOOKING_URL}
      className={`inline-block font-heading font-bold text-white rounded-xl bg-[#15a1df] hover:bg-[#0d8bbf] transition-all duration-300 shadow-lg hover:shadow-[0_0_36px_rgba(21,161,223,0.5)] hover:-translate-y-0.5 ${
        size === 'lg' ? 'text-lg px-14 py-5' : 'text-base px-9 py-4'
      }`}
    >
      {label}
    </a>
  )
}

function GradientCTAButton({
  label = 'Book Your Free Strategy Consultation',
  size = 'lg',
}: {
  label?: string
  size?: 'sm' | 'lg'
}) {
  return (
    <a
      href={BOOKING_URL}
      className={`relative inline-block font-heading font-bold text-white rounded-xl overflow-hidden group shadow-lg hover:shadow-[0_8px_36px_rgba(21,161,223,0.45)] hover:-translate-y-0.5 transition-all duration-300 ${
        size === 'lg' ? 'text-lg px-14 py-5' : 'text-base px-9 py-4'
      }`}
      style={{ background: 'linear-gradient(135deg, #010738 0%, #0d5f99 55%, #15a1df 100%)' }}
    >
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, #051a6e 0%, #1272b0 55%, #1bb5f5 100%)' }}
      />
      <span className="absolute top-0 left-[-75%] w-[50%] h-full skew-x-[-20deg] bg-white/[0.18] group-hover:left-[125%] transition-all duration-700" />
      <span className="relative">{label}</span>
    </a>
  )
}

function SectionCTA({
  label,
  sub,
  dark = true,
}: {
  label?: string
  sub?: string
  dark?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-4 mt-16 pt-2">
      {dark ? <CTAButton label={label} /> : <GradientCTAButton label={label} />}
      <p
        className={`text-base max-w-md text-center leading-relaxed ${
          dark ? 'text-white/70' : 'text-[#0a0a14]'
        }`}
      >
        {sub ?? SUB_COPY_GENERIC}
      </p>
    </div>
  )
}

function CheckIcon({ color = '#15a1df' }: { color?: string }) {
  return (
    <svg
      style={{ color }}
      className="w-5 h-5 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

// Sticky Nav

function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#010738]/96 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-base text-white tracking-tight hover:text-[#15a1df] transition-colors"
        >
          Abdullah Tayyab
        </Link>
        <a
          href={BOOKING_URL}
          className="font-heading font-semibold text-xs text-white bg-[#15a1df] hover:bg-[#0d8bbf] px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(21,161,223,0.4)]"
        >
          Book Your Free Strategy Consultation
        </a>
      </div>
    </header>
  )
}

// Hero (DARK)

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 overflow-hidden"
      style={{ background: DARK_GRADIENT }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[#15a1df] opacity-[0.16] blur-[140px] rounded-full" />
        <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-[#0d4fa8] opacity-[0.35] blur-[100px] rounded-full" />
        <div className="absolute top-1/3 right-[5%] w-[320px] h-[320px] bg-[#15a1df] opacity-[0.12] blur-[90px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #15a1df 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <FadeUp>
          <div className="inline-flex justify-center border border-[#15a1df]/30 bg-[#15a1df]/[0.08] text-[#15a1df] text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full mb-9 max-w-xs sm:max-w-none text-center">
            For Cosmetic Dental Clinics Doing $50k-$500k/Month
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] text-white leading-[1.15] tracking-tight mb-10">
            We Install Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #a8dcf5 0%, #15a1df 55%, #0c75a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Case-Ready Smile Pipeline
            </span>{' '}
            To Generate Qualified Smile Makeover Consultations For Your Calendar
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <ul className="inline-flex flex-col gap-4 text-left mb-12 max-w-2xl">
            {[
              'Ads built around real cosmetic patient intent - veneers, Invisalign, bonding, whitening, full transformations',
              'A pre-sell landing page that educates and qualifies before the patient ever picks up the phone',
              'A qualification flow that filters out tyre-kickers before they reach your front desk',
              'Follow-up automations running in the background - because most leads are lost to bad nurture, not bad ads',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/95 text-base md:text-lg">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.3} className="mb-12">
          <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] bg-[#040d42] group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#15a1df]/[0.07] via-transparent to-[#15a1df]/[0.03]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#15a1df]/20 blur-xl group-hover:bg-[#15a1df]/30 transition-all duration-500" />
                <div
                  className="relative rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-[#15a1df]/60 group-hover:bg-[#15a1df]/10 transition-all duration-300"
                  style={{ width: 72, height: 72 }}
                >
                  <svg
                    className="w-7 h-7 text-white/50 ml-1.5 group-hover:text-[#15a1df] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/25 text-sm font-body tracking-wide">
                2-3 minute founder intro - coming soon
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col items-center gap-5">
            <CTAButton />
            <p className="text-white/85 text-base max-w-2xl leading-relaxed">{SUB_COPY_HERO}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// Proof / Case Studies (LIGHT_GRADIENT)

const proofCaseStudies = [
  {
    image: '/images/case-studies/hardees-qsr/hero.jpeg',
    headline: 'PKR 31M+ Revenue. 18,000+ Online Purchases. 4x-16x ROAS.',
    description:
      'Built an always-on conversion system for a national QSR brand that had never run structured sales campaigns. Shifted from sporadic awareness bursts to a disciplined, daily revenue engine on Meta and Google.',
    client: "QSR Brand (Hardee's)",
    industry: 'Food & Beverage / eCommerce',
  },
  {
    image: '/images/case-studies/commercial-real-estate-lead-gen/hero.jpg',
    headline:
      '2000+ High-Profile Leads. 3 Commercial Projects. Under 2.5 Months. PKR ~205 Average Cost Per Lead.',
    description:
      'Generated high-profile leads from a complete cold start for a government-backed real estate authority launching high-ticket commercial projects priced from PKR 140M+. Zero pixel data, zero warm audiences. Built entirely on Meta through precision three-tier audience architecture specific to each project.',
    client: 'CBD Punjab',
    industry: 'Real Estate / Government Authority',
  },
  {
    image: '/images/case-studies/cubicle-coworking/hero.jpg',
    headline:
      '3 Bookings to Full Operational Capacity. 25+ Offices Filled. 600+ Event Participants. In Under 60 Days.',
    description:
      'Took a brand-new co-working space from near-empty to fully booked in under two months. A full-funnel paid media strategy built awareness and drove direct bookings simultaneously. A live IT networking event hosted at the space brought 600+ local professionals through the door and compressed months of trust-building into one night.',
    client: 'Cubicle Co-Working',
    industry: 'Co-Working Space',
  },
]

function ProofSection() {
  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5">
              Real Clients. Real Numbers.
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              Outcome-specific results from real clients - tied to revenue driven, leads generated,
              and systems that compound month after month. Not vanity metrics.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {proofCaseStudies.map((cs, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <Image src={cs.image} alt={cs.client} fill className="object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-[#f59e0b] text-xl tracking-wide mb-4">★★★★★</div>
                  <h3 className="font-heading font-bold text-[#0a0a14] text-lg leading-snug mb-4">
                    &quot;{cs.headline}&quot;
                  </h3>
                  <p className="font-body text-[#2d3250] text-sm leading-relaxed mb-6 flex-1">
                    {cs.description}
                  </p>
                  <div className="border-t border-[#e8eaf0] pt-5">
                    <p className="font-heading font-bold text-[#0a0a14] text-sm">{cs.client}</p>
                    <p className="text-[#5a6180] text-xs mt-0.5">{cs.industry}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// Pain Agitation (MARBLE) - includes 80% stat callout

const failedSolutions = [
  'Ads running to your general clinic website, not a dedicated smile makeover page',
  'A contact form that asks for a name and number and nothing else',
  'One phone call attempt, maybe a voicemail, then silence',
  'Boosted Instagram posts with no plan for what happens after someone clicks',
  'A front desk handling cosmetic enquiries the same way they handle a cleaning booking',
  'No idea what your actual cost per booked consultation is - only cost per lead',
]

const consequences = [
  {
    text: 'Here is what that setup actually costs you.',
    emphasis: false,
  },
  {
    text: 'If you are getting 40 enquiries a month and only converting 8 to booked consultations, your real conversion rate is 20%. Most clinics running ads without a proper landing page and follow-up system sit between 10% and 20%.',
    emphasis: false,
  },
  {
    text: 'Clinics with the full system in place regularly hit 35% to 50%.',
    emphasis: false,
  },
  {
    text: 'That is not a small gap. On the exact same ad spend, the exact same number of clicks, doubling your conversion rate doubles your revenue from that spend. Nothing else has to change.',
    emphasis: false,
  },
  {
    text: 'This is the single most overlooked lever in cosmetic dental marketing.',
    emphasis: false,
  },
  {
    text: 'Everyone obsesses over the ad. Almost nobody looks at what happens after the click - and that is where the actual leverage lives.',
    emphasis: false,
  },
  {
    text: 'The majority of patients you think said no were never actually a no. They were a "not yet" that nobody followed up on.',
    emphasis: true,
  },
]

function PainAgitation() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0a0a14] leading-tight mb-5 text-center md:whitespace-nowrap">
            You Are Not Short On Enquiries.
          </h2>
          <p className="font-heading font-bold text-2xl md:text-3xl text-[#15a1df] leading-tight mb-14 text-center">
            You Are Short On A System That Converts Them.
          </p>
        </FadeUp>

        {/* 80% / 63% stat callout */}
        <FadeUp delay={0.08}>
          <div
            className="relative rounded-3xl overflow-hidden mb-16 px-8 py-12 md:px-12 md:py-14 text-center"
            style={{ background: 'linear-gradient(135deg, #010738 0%, #0d3d7a 55%, #15a1df 100%)' }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/[0.07] blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#15a1df]/30 blur-3xl" />
            <p className="relative text-white/70 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              The Number Most Clinics Do Not Know
            </p>
            <h3 className="relative font-heading font-bold text-white text-2xl md:text-3xl leading-tight mb-8">
              80% of Your Leads Are Not Lost.
              <br className="hidden md:inline" /> They Are Unfollowed.
            </h3>
            <div className="relative grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="rounded-2xl bg-white/[0.08] border border-white/15 px-6 py-7">
                <p className="font-heading font-bold text-white text-4xl md:text-5xl mb-2">80%</p>
                <p className="text-white/85 text-sm leading-snug">
                  Of marketing leads never convert without proper follow-up
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.08] border border-white/15 px-6 py-7">
                <p className="font-heading font-bold text-white text-4xl md:text-5xl mb-2">63%</p>
                <p className="text-white/85 text-sm leading-snug">
                  Of those will convert with the right nurture system over time
                </p>
              </div>
            </div>
            <p className="relative text-white/85 text-base md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
              If your clinic is only tracking leads in and consultations booked, you are looking at
              the smallest, least informative slice of the picture. The real money is sitting in the
              gap between those two numbers.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-[#2d3250] text-lg mb-10 leading-relaxed">
            If you are a cosmetic-focused clinic, here is what your current setup probably looks
            like:
          </p>
        </FadeUp>

        <ul className="space-y-0 mb-16 border border-[#e8eaf0] rounded-2xl overflow-hidden bg-[#f8f9fc]">
          {failedSolutions.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className={`flex items-start gap-4 text-[#2d3250] text-base md:text-lg px-8 py-5 ${
                i < failedSolutions.length - 1 ? 'border-b border-[#e8eaf0]' : ''
              }`}
            >
              <span className="text-red-400 font-bold shrink-0 mt-0.5 text-xl leading-none">✗</span>
              {item}
            </motion.li>
          ))}
        </ul>

        <FadeUp>
          <p className="text-[#5a6180] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            And here is what that costs you
          </p>
        </FadeUp>
        <div className="space-y-6 mb-14">
          {consequences.map((para, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <p
                className={`text-lg leading-relaxed ${
                  para.emphasis ? 'text-[#0a0a14] font-semibold text-xl' : 'text-[#2d3250]'
                }`}
              >
                {para.text}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="border-l-[3px] border-[#15a1df] pl-8 mb-16">
            <p className="text-[#0a0a14] text-xl font-heading font-semibold mb-4">
              That is exactly the gap the Case-Ready Smile Pipeline closes.
            </p>
            <p className="text-[#2d3250] text-lg leading-relaxed">
              Not more ad spend. Not more leads. A system that converts the leads you are already
              capable of generating - at every single stage, from click to booked, booked to show,
              show to qualified, qualified to closed.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// How It Works (LIGHT GRADIENT)

const steps = [
  {
    title: 'Step 1: Research - Finding the Right Patient',
    desc: 'Before a single ad runs, we map your ideal cosmetic patient - the exact language they use to describe their smile concerns, what they have already tried, what they actually want, and where they are in their decision. This is not guesswork. It is built from real patient language, not assumptions about what dental marketing "usually" sounds like.',
  },
  {
    title: 'Step 2: Offer + Landing Page - Making Them Convert',
    desc: 'We build a dedicated smile makeover landing page - your digital appointment setter. Its only job: educate, pre-qualify, and book the consultation. Lifting landing page conversion on the same ad spend is one of the highest-leverage moves in the entire system - same clicks, same cost, dramatically better output. Most clinics never touch this number because they never built a page designed to move it.',
  },
  {
    title: 'Step 3: Qualification - Filtering Before They Reach You',
    desc: 'Patients answer a short set of questions about treatment interest, timeline, and readiness before they ever land in your inbox. This filters out the casual browsers and price shoppers before they take up your team time, so by the time a lead reaches your front desk, they have already self-selected.',
  },
  {
    title: 'Step 4: Speed-to-Lead - Catching Them at Peak Intent',
    desc: 'The moment a qualified enquiry comes in, the system fires an SMS confirmation, an email confirmation, a calendar invite, and an internal notification to your team. Speed to lead is one of the single biggest levers in this entire system - and most clinics lose hot leads not because the patient changed their mind, but because the moment of highest intent passed in silence.',
  },
  {
    title: 'Step 5: Nurture - Following Up Until They Are Ready',
    desc: 'Email sequences that build trust and handle objections over time. SMS and call reminders that fix the no-show problem. Retargeting for visitors who did not convert yet - re-engaging someone who already knows you costs far less than acquiring someone new. A lead that says no today is not a dead lead. It is a relationship that has not matured yet.',
  },
]

function HowItWorks() {
  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5">
              How The Case-Ready Smile Pipeline Works
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              Five connected stages. Each one feeds the next. Miss one and the whole system
              underperforms - which is exactly why most clinics current setups do not work.
            </p>
          </div>
        </FadeUp>

        <div className="relative">
          <div
            className="hidden md:block absolute left-8 top-10 w-px bg-gradient-to-b from-[#15a1df]/40 via-[#15a1df]/20 to-transparent"
            style={{ bottom: '120px' }}
          />

          <div className="space-y-14">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex gap-8 md:gap-14 relative">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-[#15a1df]/40 bg-white shadow-[0_0_0_6px_rgba(21,161,223,0.07)] flex items-center justify-center">
                      <span className="font-heading font-bold text-[#15a1df] text-xl">{i + 1}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-[#0a0a14] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#2d3250] leading-relaxed text-base md:text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// Why Choose Us (MARBLE)

const reasons = [
  {
    title: 'Built On Research, Not Templates',
    desc: 'Every campaign starts with mapping the actual language your ideal cosmetic patient uses - their objections, their concerns, what they have already tried. Generic dental marketing copy gets ignored. Patient-language copy converts because it sounds like the conversation already happening in their head.',
  },
  {
    title: 'Conversion Math, Not Click Counts',
    desc: 'Cost per lead is a vanity metric. We report on cost per qualified lead and cost per booked consultation - so you always know what each appointment on your calendar actually cost to acquire. Real numbers, not impressions and clicks.',
  },
  {
    title: 'Leads Treated As Assets, Not Failures',
    desc: 'Roughly 80% of marketing leads never convert without proper follow-up - and 63% of those will convert with it. A lead that says no today is not a dead lead. It is a relationship that has not matured yet. The nurture system keeps you in front of them until they are ready, instead of losing them to silence.',
  },
  {
    title: 'Speed-to-Lead Built Into the System',
    desc: 'Speed to lead is one of the single biggest levers in cosmetic patient acquisition. The pipeline fires SMS, email, and internal notifications the moment a qualified enquiry comes in - so your team gets a real shot at the patient while their intent is still hot, not hours later when they have already booked elsewhere.',
  },
  {
    title: 'A Loop, Not a Launch',
    desc: 'We treat marketing as a flywheel: research, strategy, execute, analyse, adjust. That loop never stops. The pipeline gets measured, refined, and improved every month - not built once and left alone. That is the difference between a campaign that works for a month and a system that keeps working.',
  },
  {
    title: 'One Connected System, Not Four Vendors',
    desc: 'Most clinics duct-tape together an ad agency, a website person, a CRM, and a virtual receptionist - and wonder why nothing talks to anything else. We install the entire pipeline as one connected system, end to end, so every stage feeds the next instead of leaking value at every handover.',
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5 leading-tight">
              6 Reasons Cosmetic Clinics Choose{' '}
              <br className="hidden md:inline" />
              the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #010738 10%, #15a1df 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Case-Ready Smile Pipeline™
              </span>
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              We do not chase volume. We attract patients who are financially serious, emotionally
              ready, and specifically interested in cosmetic treatment.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <FadeUp key={i} delay={i * 0.06} className="h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-[#0a1740]">
                  <Image
                    src={`/images/smilemakeover-lp3/reasons/${i + 1}.jpg`}
                    alt={r.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center font-heading font-bold text-[#010738] text-sm shadow-md">
                    {i + 1}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="border-l-[3px] border-[#15a1df] pl-4 mb-4">
                    <h3 className="font-heading font-bold text-[#0a0a14] text-lg leading-snug">
                      {r.title}
                    </h3>
                  </div>
                  <p className="font-body text-[#2d3250] text-sm leading-relaxed flex-1">{r.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// Differentiation (LIGHT GRADIENT)

const weDoForYou = [
  {
    label: 'Research-Led Campaigns',
    desc: 'We map your ideal cosmetic patient and build the offer, the ads, and the landing page around their actual decision language. Not generic dental marketing.',
  },
  {
    label: 'Funnel Leverage At Every Stage',
    desc: 'We measure and improve every step from click to booked, booked to show, show to qualified, qualified to closed. The leverage is in the funnel, not the ad.',
  },
  {
    label: 'Nurture-As-Asset Automation',
    desc: 'Email, SMS, and retargeting sequences that turn "not yet" into booked over time. The 80% of leads other clinics lose to silence become a revenue stream.',
  },
]

const weNeedFromYou = [
  {
    label: 'Decent Before-And-After Proof',
    desc: 'You do not need a professional photography studio, but you need real documented results we can use to build trust in the landing page and ad creative.',
  },
  {
    label: 'Fast Lead Response',
    desc: 'Speed to lead is one of the biggest levers in the system. If your team cannot call a hot lead within minutes to hours, performance drops significantly.',
  },
  {
    label: 'Consultation Availability',
    desc: 'The pipeline fills your calendar. That only works if there is a calendar to fill. If your slots are already maxed for the next two months, we solve that first.',
  },
]

const diffParas = [
  'Most marketing - dental or otherwise - fails for one of two reasons.',
  'The first is obsessing over ads while ignoring everything that happens after the click. You can have the best-performing ad in the world, and if it sends traffic to a page that does not convert, you have built an expensive way to lose money slowly.',
  'The second is skipping research entirely. Going straight to "let us run some ads" without understanding who you are actually talking to, what they have already tried, or what conversation is already happening in their head before they ever see your ad.',
  'The Case-Ready Smile Pipeline exists because we treat marketing as a loop, not a one-time campaign. Research informs strategy. Strategy drives execution. Execution gets analysed. What we learn gets used to adjust and go again.',
]

const diffClosingLine =
  'Get the right offer, to the right person, at the right time. That is the whole game.'

function Differentiation() {
  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-12 leading-tight text-center max-w-3xl mx-auto">
            Why This Works When Generic
            <br className="hidden md:inline" />{' '}
            Dental Marketing Does Not
          </h2>
        </FadeUp>

        <div className="space-y-7 mb-12">
          {diffParas.map((para, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p
                className={`leading-relaxed ${
                  i === 0 ? 'text-[#0a0a14] text-lg font-medium' : 'text-[#2d3250] text-lg'
                }`}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="relative rounded-2xl bg-white border border-[#15a1df]/25 shadow-[0_8px_32px_rgba(21,161,223,0.18)] mb-16 px-8 py-7 md:px-10 md:py-8 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[5px] bg-gradient-to-b from-[#010738] via-[#0d5f99] to-[#15a1df] rounded-l-2xl" />
            <p className="font-heading font-bold text-[#010738] text-xl md:text-2xl leading-snug pl-3 text-center">
              {diffClosingLine}
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(1,7,56,0.08)] hover:shadow-[0_12px_40px_rgba(1,7,56,0.15)] transition-shadow duration-500 flex flex-col">
              <div
                className="relative px-8 pt-8 pb-7 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #010738 0%, #0d3d7a 60%, #15a1df 100%)',
                }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.06] blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#15a1df]/20 blur-2xl" />
                <div className="relative text-center">
                  <h3 className="font-heading font-bold text-white text-2xl md:text-[26px] leading-tight">
                    What We Do For You
                  </h3>
                </div>
              </div>
              <div className="p-8 pt-7 flex-1 flex flex-col">
                <ul className="space-y-5 flex-1">
                  {weDoForYou.map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex gap-4 ${
                        idx < weDoForYou.length - 1 ? 'pb-5 border-b border-[#eef0f6]' : ''
                      }`}
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_4px_12px_rgba(21,161,223,0.35)]"
                        style={{
                          background: 'linear-gradient(135deg, #010738 0%, #15a1df 100%)',
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="font-heading font-bold text-[#0a0a14] text-[15px] mb-1.5 leading-snug">
                          {item.label}
                        </h4>
                        <p className="font-body text-[#2d3250] text-[14px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(1,7,56,0.08)] hover:shadow-[0_12px_40px_rgba(1,7,56,0.15)] transition-shadow duration-500 flex flex-col">
              <div
                className="relative px-8 pt-8 pb-7 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #047857 0%, #10b981 60%, #34d399 100%)',
                }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.08] blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#10b981]/30 blur-2xl" />
                <div className="relative text-center">
                  <h3 className="font-heading font-bold text-white text-2xl md:text-[26px] leading-tight">
                    What We Need From You
                  </h3>
                </div>
              </div>
              <div className="p-8 pt-7 flex-1 flex flex-col">
                <ul className="space-y-5 flex-1">
                  {weNeedFromYou.map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex gap-4 ${
                        idx < weNeedFromYou.length - 1 ? 'pb-5 border-b border-[#eef0f6]' : ''
                      }`}
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_4px_12px_rgba(16,185,129,0.35)]"
                        style={{
                          background: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="font-heading font-bold text-[#0a0a14] text-[15px] mb-1.5 leading-snug">
                          {item.label}
                        </h4>
                        <p className="font-body text-[#2d3250] text-[14px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// Qualify / Disqualify (MARBLE)

const isFor = [
  {
    label: 'Documented Before-And-After Proof',
    body: 'You have real patient transformation results - not professional studio level, just real - we can use in landing pages and ad creative.',
  },
  {
    label: 'A Clear Smile Makeover Offer (Or Willingness To Build One With Us)',
    body: 'Veneers, Invisalign, bonding, whitening, or full transformation - or you are open to designing the right offer with us. If the offer is not fully shaped yet, we help build it.',
  },
  {
    label: 'Real Ad Budget To Fuel The System',
    body: 'Enough monthly spend to generate meaningful data and learn fast. We will tell you the realistic minimum for your market on the call.',
  },
  {
    label: 'Fast Lead Response',
    body: 'Your team can respond to a hot enquiry within minutes to hours, not days. Speed-to-lead is one of the biggest levers in this entire system.',
  },
  {
    label: 'Consultation Capacity To Fill',
    body: 'You have consultation slots available right now. If your calendar is maxed for the next two months, we solve capacity first.',
  },
  {
    label: 'Ambition To Scale Cosmetic Specifically',
    body: 'You want to grow cosmetic case acquisition - more veneers, more smile makeovers - without diluting focus into general dental volume.',
  },
]

const isNotFor = [
  {
    label: 'General Dentistry Is Your Primary Focus',
    body: 'If cosmetic is an afterthought, this pipeline is not for you. It is built exclusively for cosmetic case acquisition.',
  },
  {
    label: 'No One To Follow Up Quickly',
    body: 'Even the best landing page cannot fix a follow-up problem on its own. Your team needs to be ready to act on hot enquiries.',
  },
  {
    label: 'Looking For The Cheapest Option',
    body: 'We are not the lowest-cost vendor. We are a system built to be measured and improved over time, not a quick lead-burst service.',
  },
  {
    label: 'Zero Accountability On Your Side',
    body: 'If you expect a guaranteed lead number with zero accountability for follow-up or consultation execution, we are not the right fit.',
  },
  {
    label: 'Unwilling To Change Anything',
    body: 'The pipeline only works as a full implementation. If you will not adjust intake, landing page, or follow-up cadence, the results will not show up.',
  },
]

const archetypes = [
  {
    num: '01',
    title: 'The Clinic With Proof But No System',
    desc: 'Strong before-and-afters, real patient results, but no structured way to turn that proof into booked consultations. The raw material is there. The machine to convert it is not.',
  },
  {
    num: '02',
    title: 'The Clinic Already Spending But Not Tracking the Right Numbers',
    desc: 'Running ads, generating leads, but only watching cost per lead - not cost per booked consultation, show rate, or case acceptance. Flying mostly blind on what is actually working.',
  },
  {
    num: '03',
    title: 'The Clinic Losing Leads to Slow Follow-Up',
    desc: 'Gets enquiries, but by the time someone calls back, the patient has already booked elsewhere or gone cold. The lead was never lost on intent - it was lost on speed.',
  },
  {
    num: '04',
    title: 'The Clinic Ready to Scale Cosmetic Specifically',
    desc: 'Already doing well generally, wants to grow the cosmetic side - more veneers, more full smile makeovers - without diluting focus into general dental volume.',
  },
]

function CheckCircleSolid({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={`${className} text-emerald-500`} fill="none" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.14" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M8 12.2l2.8 2.8L16.2 9.4"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XCircleThin({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={`${className} text-slate-500`} fill="none" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  )
}

function QualifySection() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5 leading-tight">
              Is the Case-Ready Smile Pipeline™ Right For Your Clinic?
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              Read both columns honestly - then decide if this is worth a 30-minute conversation.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-20 items-stretch">
            {/* IS for you - premium white card with subtle green glow */}
            <article className="group relative rounded-3xl bg-white p-8 md:p-10 border border-emerald-200/70 shadow-[0_8px_32px_rgba(16,185,129,0.10)] hover:shadow-[0_18px_48px_rgba(16,185,129,0.22)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400" />
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />

              <header className="relative flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm">
                  <CheckCircleSolid className="w-6 h-6" />
                </div>
                <h3 className="font-body font-bold text-[#0a0a14] text-xl tracking-tight">
                  This IS for you if:
                </h3>
              </header>

              <ul className="relative space-y-6 flex-1">
                {isFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircleSolid className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body font-bold text-[#0a0a14] text-[15px] mb-1.5 leading-snug tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-[#5a6180] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* NOT for you - muted slate card */}
            <article className="group relative rounded-3xl bg-slate-100/70 p-8 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300" />
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-slate-300/30 blur-3xl pointer-events-none" />

              <header className="relative flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center shadow-sm">
                  <XCircleThin className="w-6 h-6" />
                </div>
                <h3 className="font-body font-bold text-[#0a0a14] text-xl tracking-tight">
                  This is NOT for you if:
                </h3>
              </header>

              <ul className="relative space-y-6 flex-1">
                {isNotFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      <XCircleThin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body font-bold text-[#0a0a14] text-[15px] mb-1.5 leading-snug tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-[#4f5670] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </FadeUp>

        <FadeUp>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0a0a14] text-center mb-12">
            The Four Clinics This Works Best For
          </h3>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5 mb-16 items-stretch">
          {archetypes.map((a, i) => (
            <FadeUp key={i} delay={i * 0.07} className="h-full">
              <div className="h-full bg-white border border-[#e8eaf0] rounded-2xl p-8 relative overflow-hidden hover:border-[#15a1df]/30 hover:shadow-md transition-all duration-300 flex flex-col">
                <span className="absolute top-4 right-6 font-black text-6xl text-[#010738]/[0.05] select-none leading-none">
                  {a.num}
                </span>
                <h4 className="font-heading font-bold text-[#0a0a14] text-lg mb-3 pr-12">
                  {a.title}
                </h4>
                <p className="text-[#2d3250] text-sm leading-relaxed flex-1">{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="flex flex-col items-center gap-4">
            <GradientCTAButton label="Check If Your Clinic Is a Good Fit" />
            <p className="text-[#0a0a14] text-base max-w-md text-center leading-relaxed">
              {SUB_COPY_FIT}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// Brand Mission (MARBLE)

const missionParas = [
  {
    text: 'We have seen too many skilled cosmetic clinicians - dentists with exceptional results, loyal patients, and genuine transformation outcomes - spending marketing budget on enquiries that never materialise into treatment.',
    style: 'body',
  },
  { text: 'The problem was never their clinical quality.', style: 'bold' },
  { text: 'It was the way they were being marketed.', style: 'bold' },
  {
    text: 'Generic ads. Generic landing pages. Generic "book an appointment" CTAs. No education before the enquiry. No qualification before the consultation. No follow-up system after the first call.',
    style: 'body',
  },
  {
    text: 'And underneath all of it - no honest measurement of what is actually working at each stage of the funnel.',
    style: 'body',
  },
  {
    text: 'That is what the Case-Ready Smile Pipeline is built to fix.',
    style: 'accent',
  },
  {
    text: 'Marketing as a loop, not a campaign. Research, strategy, execute, analyse, adjust - and go again. Built to be measured, refined, and improved every month, not built once and left alone.',
    style: 'body',
  },
  {
    text: 'The result is a calendar that fills with the cosmetic patients you actually want to treat - because the system was built around finding them, not around hoping they show up.',
    style: 'body',
  },
]

function BrandMission() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[46px] text-[#0a0a14] leading-tight mb-16 text-center">
            We Exist For One Reason.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #010738 10%, #15a1df 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Because Good Cosmetic Clinics Should Not Have To Chase Bad Leads.
            </span>
          </h2>
        </FadeUp>

        <div className="space-y-7">
          {missionParas.map((para, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <p
                className={`leading-relaxed ${
                  para.style === 'accent'
                    ? 'text-[#15a1df] font-heading font-semibold text-xl'
                    : para.style === 'bold'
                    ? 'text-[#0a0a14] text-xl font-semibold'
                    : 'text-[#2d3250] text-lg'
                }`}
              >
                {para.text}
              </p>
            </FadeUp>
          ))}

          <FadeUp delay={0.3}>
            <p className="font-heading font-bold text-2xl md:text-3xl text-[#0a0a14] pt-6 leading-tight text-center">
              We handle the pipeline.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #010738 10%, #15a1df 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                You deliver the dentistry.
              </span>
            </p>
          </FadeUp>
        </div>

        <FadeUp>
          <SectionCTA dark={false} sub={SUB_COPY_GENERIC} />
        </FadeUp>
      </div>
    </section>
  )
}

// FAQ (LIGHT GRADIENT)

const faqItems = [
  {
    q: 'Do you work with any dental practice, or only cosmetic-focused clinics?',
    a: 'Only cosmetic-focused clinics. Every part of the Case-Ready Smile Pipeline - the campaigns, the landing page, the qualification questions, the follow-up sequences - is built specifically for smile makeover patient acquisition. If your primary goal is generating hygiene bookings or emergency appointments, we are not the right fit and we will tell you that on the call.',
  },
  {
    q: 'What makes this different from just running more ads?',
    a: 'More ads with the same broken funnel just means more leads falling through the same gaps. The Case-Ready Smile Pipeline fixes the funnel first - landing page, qualification, nurture - so the leads you already generate convert at a much higher rate. Then we scale spend once the system is actually capturing the value of each click.',
  },
  {
    q: 'We have worked with marketing agencies before. Why is this different?',
    a: 'Most agencies stop at lead generation - you receive enquiries, but there is no system for qualifying them, educating them, or following them up. We are accountable to the metric that actually matters: cost per booked consultation. Not just cost per lead. We will only take you on if we genuinely believe we can move that number.',
  },
  {
    q: 'What do we need to have in place before working with you?',
    a: 'A cosmetic-focused clinic, a clear treatment offer (veneers, Invisalign, bonding, whitening, or full smile makeovers), enough ad budget to generate real data each month, and at least one person on your team who can handle follow-up calls and consultative conversations quickly. You do not need an existing marketing setup - we build the pipeline from scratch.',
  },
  {
    q: 'How long until we see results?',
    a: 'Most clinics start seeing the landing page and qualification flow live within the first couple of weeks. Lead volume and conversion improvements typically become visible within the first 30 days as the system collects data and we adjust based on what is actually working in your market. We will give you a realistic timeline - not an inflated promise - on the strategy call.',
  },
  {
    q: 'Can you handle compliance and ethical messaging around cosmetic dental marketing?',
    a: 'Yes - this is built into everything we write and design. We use aspirational, trust-building language that converts and stays within ethical and platform-policy boundaries. No "fix your ugly smile" angles, no guaranteed-outcome claims, no before-and-after content that violates ad platform rules. Compliant cosmetic marketing is not a constraint - it is what actually builds trust with the patients you want.',
  },
]

function FAQSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.03}>
              <div className="border border-white/80 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left hover:bg-[#f8f9fc] transition-colors"
                  aria-expanded={active === i}
                >
                  <span className="font-heading font-semibold text-[#0a0a14] text-base leading-snug">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="shrink-0 w-7 h-7 rounded-full border border-[#e8eaf0] bg-white flex items-center justify-center text-[#15a1df] font-bold text-xl leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-7 text-[#2d3250] leading-relaxed text-base">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA (DARK)

const closingBullets = [
  'A pipeline built on real research into your ideal cosmetic patient',
  'A landing page engineered to convert - not just exist',
  'A qualification flow that filters before leads reach your team',
  'Nurture automation that turns "not yet" into booked, instead of losing it to silence',
]

const closingParas = [
  'You do not need more traffic. You need a system that actually converts the traffic you already have - at every stage, from the first click to the patient sitting in your chair.',
  'Book a free 30-minute strategy consultation. We will walk through your current funnel together, show you where it is leaking, and map out exactly what the Case-Ready Smile Pipeline would look like installed in your clinic - based on real numbers, not generic promises.',
  'No pitch deck. No inflated guarantees. Just a clear look at where your revenue is currently being lost, and what fixing it would actually look like.',
  'We take on a limited number of clinics at a time. If your clinic is the right fit, we will show you exactly what we would build for you.',
]

function FinalCTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden" style={{ background: DARK_GRADIENT }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[#15a1df] opacity-[0.18] blur-[140px] rounded-full" />
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[400px] bg-[#0d4fa8] opacity-[0.30] blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #15a1df 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[50px] text-white leading-tight mb-12">
            Your Leads Are Not the Problem. Your Funnel Is.
          </h2>
        </FadeUp>

        <div className="space-y-6 mb-14 text-left">
          {closingParas.map((para, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p
                className={`text-lg leading-relaxed ${
                  i === 2 ? 'text-[#15a1df] font-heading font-semibold text-xl' : 'text-white/90'
                }`}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <ul className="inline-flex flex-col gap-4 text-left mb-14">
            {closingBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/95 text-lg">
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp>
          <div className="flex flex-col items-center gap-5">
            <CTAButton />
            <p className="text-white/70 text-base max-w-2xl leading-relaxed">{SUB_COPY_FINAL}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// LP Footer

function LPFooter() {
  return (
    <footer className="py-12 px-6" style={{ background: '#000820' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/30 text-sm mb-2">
          &copy; {new Date().getFullYear()} Abdullah Tayyab. All rights reserved.
        </p>
        <p className="text-white/[0.18] text-xs mb-4">
          The Case-Ready Smile Pipeline™ is a done-for-you patient acquisition system for cosmetic
          dental clinics.
        </p>
        <p className="text-white/[0.14] text-xs max-w-2xl mx-auto leading-relaxed mb-6">
          Results vary by clinic, market, ad budget, and follow-up execution speed. Figures
          referenced are based on typical funnel performance improvements and are not guarantees of
          specific outcomes for any individual clinic.
        </p>
        <Link
          href="/privacy-policy"
          className="text-white/25 text-xs hover:text-white/50 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

// Root Export

export default function SmileMakeoverLP3Content() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LP3_FONT_OVERRIDE_CSS }} />
      <div className={`${playfair.variable} ${lato.variable} lp3-fonts font-body`}>
        <StickyNav />
        <Hero />
        <ProofSection />
        <PainAgitation />
        <HowItWorks />
        <WhyChooseUs />
        <Differentiation />
        <QualifySection />
        <BrandMission />
        <FAQSection />
        <FinalCTA />
        <LPFooter />
      </div>
    </>
  )
}
