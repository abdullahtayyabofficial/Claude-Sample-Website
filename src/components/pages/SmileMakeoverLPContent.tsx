'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const BOOKING_URL = '#' // TODO: Replace with Calendly link before going live
const EASE = [0.25, 0.4, 0.25, 1] as const
const SUB_COPY =
  'This is a no-pitch, but a 45-minute diagnostic call. If we are not a good fit, we will tell you.'

const LIGHT_GRADIENT =
  'linear-gradient(135deg, #f8f9fc 0%, #bde2f6 25%, #7ec8ee 55%, #cce9f8 80%, #f0f8ff 100%)'
const DARK_GRADIENT =
  'linear-gradient(135deg, #000000 0%, #010738 30%, #0d2b6b 58%, #010b3a 80%, #000000 100%)'

// ─── Shared utilities ──────────────────────────────────────────────────────────

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
  label = 'Book Your Free Strategy Call Now',
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
  label = 'Book Your Free Strategy Call Now',
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
        className={`text-base max-w-sm text-center leading-relaxed ${
          dark ? 'text-white/70' : 'text-[#0a0a14]'
        }`}
      >
        {sub ?? SUB_COPY}
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

function XIcon() {
  return (
    <svg
      className="w-5 h-5 mt-0.5 shrink-0 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ─── Sticky Nav ────────────────────────────────────────────────────────────────

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
          Book Your Free Strategy Call
        </a>
      </div>
    </header>
  )
}

// ─── Hero (DARK) ───────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 overflow-hidden"
      style={{ background: DARK_GRADIENT }}
    >
      {/* Ambient glow */}
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
        {/* Qualifying badge */}
        <FadeUp>
          <div className="inline-flex justify-center border border-[#15a1df]/30 bg-[#15a1df]/[0.08] text-[#15a1df] text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full mb-9 max-w-xs sm:max-w-none text-center">
            For Cosmetic Dental Clinics Doing $50k-$500k/Month
          </div>
        </FadeUp>

        {/* Main headline - reduced font size */}
        <FadeUp delay={0.1}>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] text-white leading-[1.1] tracking-tight mb-8">
            We Install Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #a8dcf5 0%, #15a1df 55%, #0c75a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Case-Ready Smile Pipeline™
            </span>{' '}
            To Help You Fill Your Calendar With Qualified Smile Makeover Consultations
          </h1>
        </FadeUp>

        {/* 3 proof bullets */}
        <FadeUp delay={0.2}>
          <ul className="inline-flex flex-col gap-3 text-left mb-12">
            {[
              'Done-for-you system - built and live in [X] days',
              'Patients arrive pre-educated, pre-qualified, and ready to discuss treatment',
              'Built exclusively for cosmetic clinics - not general dental practices',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/95 text-base md:text-lg">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>

        {/* VSL placeholder */}
        <FadeUp delay={0.3} className="mb-12">
          <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] bg-[#040d42] group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#15a1df]/[0.07] via-transparent to-[#15a1df]/[0.03]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#15a1df]/20 blur-xl group-hover:bg-[#15a1df]/30 transition-all duration-500" />
                <div className="relative w-18 h-18 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-[#15a1df]/60 group-hover:bg-[#15a1df]/10 transition-all duration-300" style={{ width: 72, height: 72 }}>
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
                3-5 minute founder-led video - coming soon
              </p>
            </div>
          </div>
        </FadeUp>

        {/* CTA + sub-copy */}
        <FadeUp delay={0.4}>
          <div className="flex flex-col items-center gap-5">
            <CTAButton />
            <p className="text-white/88 text-base max-w-md leading-relaxed">
              {SUB_COPY}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Proof / Case Studies (LIGHT GRADIENT) — Alisha style ────────────────────

const proofCaseStudies = [
  {
    image: '/images/case-studies/hardees-qsr/hero.jpeg',
    headline:
      'PKR 31M+ Revenue. 18,000+ Online Purchases. 4x-16x ROAS.',
    description:
      'Built an always-on conversion system for a national QSR brand that had never run structured sales campaigns. Shifted from sporadic awareness bursts to a disciplined, daily revenue engine on Meta and Google.',
    client: 'QSR Brand (Hardee\'s)',
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
              Real Clients. Real Results.
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              Not vanity metrics. Outcome-specific results tied to revenue driven, leads generated,
              and systems that compound month after month.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {proofCaseStudies.map((cs, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                {/* Screenshot / Hero image */}
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <Image
                    src={cs.image}
                    alt={cs.client}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Card body */}
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
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Pain Agitation (WHITE) ────────────────────────────────────────────────────

const failedSolutions = [
  'Posting before-and-afters on Instagram and hoping for enquiries',
  'Running Google Ads to your general website',
  'Listing on directories like Healthengine, HotDoc, or similar booking platforms',
  'Boosting Facebook posts of smile transformations',
  'Waiting on word-of-mouth and referrals from existing patients',
  'Running a "Book a Consultation" campaign where every tyre-kicker fills in the form',
]

const consequences = [
  {
    text: 'You are getting enquiries. But most of them ask "how much are veneers?" before they have spoken to a single person on your team.',
    emphasis: false,
  },
  {
    text: 'Your front desk is spending time with people who are not ready. Not qualified. Not serious.',
    emphasis: false,
  },
  {
    text: 'Your calendar might be full - but it is full of hygiene, checkups, and emergency appointments. Not the $8,000-$20,000 cosmetic cases that actually move your production numbers.',
    emphasis: false,
  },
  {
    text: 'You have the before-and-afters. You have the reviews. You have the clinical skill to back it up.',
    emphasis: false,
  },
  {
    text: 'But you do not have a controlled, repeatable system that turns that credibility into qualified smile makeover consultations, week after week.',
    emphasis: false,
  },
  {
    text: 'So instead of choosing the cases you want to do, you are taking whatever comes through the door.',
    emphasis: false,
  },
  {
    text: 'That is the real problem. And it is not your clinical quality - it is the way you are being marketed.',
    emphasis: true,
  },
]

function PainAgitation() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0a0a14] leading-tight mb-5 text-center md:whitespace-nowrap">
            You Are Not a General Dental Practice.
          </h2>
          <p className="font-heading font-bold text-2xl md:text-3xl text-[#15a1df] leading-tight mb-14 text-center">
            So Why Is Your Calendar Filled With the Wrong Patients?
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-[#2d3250] text-lg mb-10 leading-relaxed">
            If you are a cosmetic-focused clinic, you have probably already tried most of the obvious
            things:
          </p>
        </FadeUp>

        {/* Failed solutions */}
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

        {/* Consequence copy */}
        <FadeUp>
          <p className="text-[#5a6180] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            And the result?
          </p>
        </FadeUp>
        <div className="space-y-6 mb-14">
          {consequences.map((para, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <p
                className={`text-lg leading-relaxed ${
                  para.emphasis
                    ? 'text-[#0a0a14] font-semibold text-xl'
                    : 'text-[#2d3250]'
                }`}
              >
                {para.text}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Bridge */}
        <FadeUp>
          <div className="border-l-[3px] border-[#15a1df] pl-8 mb-16">
            <p className="text-[#0a0a14] text-xl font-heading font-semibold mb-4">
              That is why we built the Case-Ready Smile Pipeline™.
            </p>
            <p className="text-[#2d3250] text-lg leading-relaxed">
              We do not run generic dental ads. We build a complete patient acquisition system -
              from the first ad a prospective patient sees, to the moment they sit in your chair
              already understanding the value of the treatment you are recommending.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── How It Works (LIGHT GRADIENT) ────────────────────────────────────────────

const steps = [
  {
    title: 'Step 1: Cosmetic Case Audit',
    desc: 'Before we build anything, we map the gap. We review your current patient acquisition flow: your ads, your website, your consultation CTA, your follow-up speed, and your Google and Meta presence. We identify exactly where cosmetic enquiries are dropping off - and what needs to be fixed first.',
  },
  {
    title: 'Step 2: Smile Assessment Funnel',
    desc: 'We build a dedicated smile makeover landing page that does the pre-selling before a patient ever picks up the phone. This page educates prospective patients on treatment options - veneers, Invisalign, bonding, whitening - who is a good candidate, what to expect, how financing works, and why your clinic is the right place for the consultation. Your landing page becomes your best treatment coordinator.',
  },
  {
    title: 'Step 3: Case Qualification Form',
    desc: 'Instead of sending every click to a basic contact form, we route prospects through a smart qualification flow. They tell us their main concern, what treatment they are interested in, their timeline, location, budget awareness, and readiness for a consultation. By the time a lead hits your inbox, they have already self-selected. Your team only speaks to people worth speaking to.',
  },
  {
    title: 'Step 4: Google + Meta Patient Acquisition',
    desc: 'Google captures patients who are already searching - veneers, Invisalign, smile makeover, cosmetic dentist near me, porcelain veneers, dental bonding. These are high-intent buyers ready to act. Meta creates demand using transformation-led creative, smile-confidence angles, patient education content, and retargeting - turning cold audiences into warm enquiries over time.',
  },
  {
    title: 'Step 5: Consult Booking + Follow-Up',
    desc: 'Qualified prospects are routed into your consultation booking process. We also install instant SMS and email confirmation, pre-consult education sequences, appointment reminders, no-show reduction, and a nurture follow-up for patients who are interested but not ready today - so you are not losing warm leads who just need more time.',
  },
]

function HowItWorks() {
  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5">
              How It Works
            </h2>
            <p className="text-[#2d3250] text-lg max-w-2xl mx-auto leading-relaxed">
              From your strategy call to a live pipeline - a done-for-you system built specifically
              for cosmetic dental case acquisition.
            </p>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Vertical connector line (desktop only) */}
          <div
            className="hidden md:block absolute left-8 top-10 w-px bg-gradient-to-b from-[#15a1df]/40 via-[#15a1df]/20 to-transparent"
            style={{ bottom: '120px' }}
          />

          <div className="space-y-14">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex gap-8 md:gap-14 relative">
                  {/* Number circle only (no faded background number) */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-[#15a1df]/40 bg-white shadow-[0_0_0_6px_rgba(21,161,223,0.07)] flex items-center justify-center">
                      <span className="font-heading font-bold text-[#15a1df] text-xl">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
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
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Why Choose Us (WHITE) ─────────────────────────────────────────────────────

const reasons = [
  {
    title: 'Cosmetic-Intent Only - No General Dental Crossover',
    desc: 'Every campaign, every keyword, every creative angle is built around cosmetic treatment intent. We do not mix smile makeover traffic with hygiene bookings, emergency appointments, or general dental searches. The pipeline is exclusively for cosmetic case acquisition.',
  },
  {
    title: 'Pre-Education Before the Enquiry',
    desc: 'Most clinics send ad traffic straight to a basic contact form. We build a full pre-education funnel - so patients arrive to the consultation already understanding treatment options, candidacy, realistic costs, and the process. This compresses consultation time and dramatically improves case acceptance.',
  },
  {
    title: 'We Filter Out Price Shoppers Before They Reach Your Team',
    desc: 'We frame investment expectations on the landing page before a patient ever fills in a form. The qualification questions do the rest. The result: fewer "how much are veneers?" calls, and more conversations with people who are ready to move forward.',
  },
  {
    title: 'Everything Is Done For You',
    desc: 'Ads, landing pages, qualification funnels, follow-up sequences, booking integration, reporting. We build and manage the full system. You focus on treating patients. We focus on filling your calendar with the right ones.',
  },
  {
    title: 'We Track What Actually Matters',
    desc: 'Cost per lead is a vanity metric. We report on cost per qualified lead, cost per booked consultation, show rate, case acceptance, and revenue per case. You will always know whether the pipeline is paying for itself - because that is the only metric that matters.',
  },
  {
    title: 'Cosmetic Dental Is All We Do',
    desc: 'We do not run campaigns for plumbers this month and dental clinics the next. The Case-Ready Smile Pipeline™ exists because cosmetic dentistry is a specific, emotionally loaded, high-consideration purchase - and most marketing agencies do not understand it. We do.',
  },
]

const REASON_GRADIENTS = [
  'linear-gradient(135deg, #010738 0%, #0d2b6b 100%)',
  'linear-gradient(135deg, #0d3d7a 0%, #15a1df 100%)',
  'linear-gradient(135deg, #010738 0%, #1a3a8f 100%)',
  'linear-gradient(135deg, #0d5f99 0%, #4ab9e8 100%)',
  'linear-gradient(135deg, #030e5c 0%, #0d5f99 100%)',
  'linear-gradient(135deg, #0d2b6b 0%, #15a1df 100%)',
]

function ReasonIcon({ index }: { index: number }) {
  if (index === 0) return <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></>
  if (index === 1) return <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>
  if (index === 2) return <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>
  if (index === 3) return <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>
  if (index === 4) return <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></>
  return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>
}

function WhyChooseUs() {
  return (
    <section className="bg-[#f8f9fc] py-28 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-5 leading-tight">
              6 Reasons Why Cosmetic Clinics Choose{' '}
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
                <div
                  className="relative flex items-center justify-center py-10"
                  style={{ background: REASON_GRADIENTS[i] }}
                >
                  <svg
                    className="w-14 h-14 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <ReasonIcon index={i} />
                  </svg>
                  <span className="absolute bottom-3 left-4 w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-heading font-bold text-white text-sm">
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
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Differentiation (LIGHT GRADIENT) ─────────────────────────────────────────

const weDoForYou = [
  {
    label: 'Full Pipeline, Built For You',
    desc: 'Ads, landing pages, qualification funnels, SMS and email follow-up, and reporting. We build and manage the entire system. You focus on treating patients.',
  },
  {
    label: 'Case-Ready Patients Only',
    desc: 'Every lead is pre-qualified before reaching your team. Price shoppers and tyre-kickers are filtered before they ever book. Your calendar fills with serious buyers.',
  },
  {
    label: 'Revenue-Stage Reporting',
    desc: 'We track cost per qualified consultation, show rate, and case acceptance - not impressions or clicks. You always know whether the pipeline is paying for itself.',
  },
]

const weNeedFromYou = [
  {
    label: 'You Close the Cases',
    desc: 'Follow up on qualified leads quickly and run a consultative in-chair process. We deliver case-ready patients - you convert them into accepted treatment.',
  },
  {
    label: 'Give Us Your Proof',
    desc: 'Before-and-afters, patient reviews, and transformation photos. Real social proof is the foundation of creative that converts.',
  },
  {
    label: 'Stay the Course',
    desc: 'The first 30-45 days are setup and optimisation. Compounding results come from consistency - not from expecting overnight magic.',
  },
]

const diffParas = [
  'Just like you do not want patients who are not serious about committing to treatment, we do not want clients who are not serious about building a real cosmetic patient acquisition system.',
  'Most agencies run ads. They hand you a lead list and call it a month\'s work.',
  'We install an end-to-end pipeline - built specifically around how cosmetic dental patients actually make decisions. Which is nothing like how someone books a hygiene appointment.',
  'A patient considering a smile makeover needs time, education, trust, and a clear reason why your clinic - not the one down the road - is the right place for them.',
  'We build the system that creates all of that, before the phone ever rings.',
]

function Differentiation() {
  return (
    <section className="py-28 px-6" style={{ background: LIGHT_GRADIENT }}>
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0a0a14] mb-12 leading-tight text-center">
            How Is This Different To Other Agencies?
          </h2>
        </FadeUp>

        <div className="space-y-7 mb-16">
          {diffParas.map((para, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p
                className={`leading-relaxed ${
                  i === 4
                    ? 'text-[#15a1df] font-heading font-semibold text-xl'
                    : i === 1
                    ? 'text-[#0a0a14] text-lg font-medium'
                    : 'text-[#2d3250] text-lg'
                }`}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {/* WHAT WE DO FOR YOU */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(1,7,56,0.08)] hover:shadow-[0_12px_40px_rgba(1,7,56,0.15)] transition-shadow duration-500 flex flex-col">
              <div
                className="relative px-8 pt-8 pb-7 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #010738 0%, #0d3d7a 60%, #15a1df 100%)' }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.06] blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#15a1df]/20 blur-2xl" />
                <div className="relative">
                  <p className="font-heading font-bold text-[11px] uppercase tracking-[0.2em] text-white/70 mb-1.5">
                    Our Side
                  </p>
                  <h3 className="font-heading font-bold text-white text-xl leading-tight">
                    What We Do For You
                  </h3>
                </div>
              </div>
              <div className="p-8 pt-7 flex-1 flex flex-col">
                <ul className="space-y-5 flex-1">
                  {weDoForYou.map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex gap-4 ${idx < weDoForYou.length - 1 ? 'pb-5 border-b border-[#eef0f6]' : ''}`}
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_4px_12px_rgba(21,161,223,0.35)]"
                        style={{ background: 'linear-gradient(135deg, #010738 0%, #15a1df 100%)' }}
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

            {/* WHAT WE NEED FROM YOU */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(1,7,56,0.08)] hover:shadow-[0_12px_40px_rgba(1,7,56,0.15)] transition-shadow duration-500 flex flex-col">
              <div
                className="relative px-8 pt-8 pb-7 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #047857 0%, #10b981 60%, #34d399 100%)' }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.08] blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#10b981]/30 blur-2xl" />
                <div className="relative">
                  <p className="font-heading font-bold text-[11px] uppercase tracking-[0.2em] text-white/75 mb-1.5">
                    Your Side
                  </p>
                  <h3 className="font-heading font-bold text-white text-xl leading-tight">
                    What We Need From You
                  </h3>
                </div>
              </div>
              <div className="p-8 pt-7 flex-1 flex flex-col">
                <ul className="space-y-5 flex-1">
                  {weNeedFromYou.map((item, idx) => (
                    <li
                      key={item.label}
                      className={`flex gap-4 ${idx < weNeedFromYou.length - 1 ? 'pb-5 border-b border-[#eef0f6]' : ''}`}
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_4px_12px_rgba(16,185,129,0.35)]"
                        style={{ background: 'linear-gradient(135deg, #047857 0%, #10b981 100%)' }}
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
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Qualify / Disqualify (WHITE) ──────────────────────────────────────────────

const isFor = [
  'You are a cosmetic-focused clinic offering veneers, Invisalign, bonding, whitening, or full smile makeovers - and cosmetic cases are a meaningful part of what you want to grow',
  'You are currently doing $50k-$500k per month and want a controlled, reliable system to scale your cosmetic case pipeline',
  'You are running ads or have tried marketing before, but the enquiries you are getting are price-shoppers, tyre-kickers, or general dental patients - not serious cosmetic buyers',
  'You have strong clinical results and real patient transformations, but no system for reliably turning that into consultation bookings',
  'You have someone on your team - a treatment coordinator, a practice manager, or yourself - who can handle follow-up and close consultations properly',
  'You are tired of depending on Instagram posts, referrals, and word-of-mouth as your only patient acquisition channels',
]

const isNotFor = [
  'Your primary focus is general dentistry, emergency appointments, or bulk hygiene throughput - this pipeline is built exclusively for cosmetic acquisition',
  'You want cheap lead volume without caring about patient quality or qualification',
  'Your front desk has no capacity - or no interest - in following up on enquiries quickly and consultatively',
  'You expect a marketing system to replace strong in-chair communication and clinical trust-building',
  'You are not willing to change your intake process, your landing page, or your follow-up cadence - the pipeline requires full implementation to work',
]

const archetypes = [
  {
    num: '01',
    title: 'The Cosmetic-First Boutique',
    desc: 'A specialist or GP who has built a reputation for smile design and transformation, and wants to scale premium veneer and makeover cases without reducing their brand to a discount offer.',
  },
  {
    num: '02',
    title: 'The Growing Multi-Chair Practice',
    desc: 'A busy clinic with chair capacity and a treatment coordinator who needs a steady flow of qualified cosmetic cases to hit production targets and reduce reliance on lower-value general work.',
  },
  {
    num: '03',
    title: 'The Clinic That Has Tried Everything',
    desc: 'Has worked with SEO agencies, social media managers, and Google Ads providers - all of which produced noise but no cosmetic cases. Wants clear accountability and a system tied to revenue, not reach.',
  },
  {
    num: '04',
    title: 'The Invisalign + Cosmetic Expander',
    desc: 'A clinic with Invisalign provider status looking to attract cosmetic alignment cases alongside veneers, bonding, and whitening - building high-lifetime-value patient relationships from one smart pipeline.',
  },
]

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
              We only work with a specific type of cosmetic clinic. Read both columns honestly -
              then decide if this is worth a 45-minute conversation.
            </p>
          </div>
        </FadeUp>

        {/* IS / NOT columns */}
        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            <div className="rounded-2xl bg-white border border-emerald-100 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0a0a14] text-lg">
                  This IS for you if:
                </h3>
              </div>
              <ul className="space-y-4">
                {isFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#2d3250] text-sm leading-relaxed">
                    <CheckIcon color="#10b981" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-red-100 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                  <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0a0a14] text-lg">
                  This is NOT for you if:
                </h3>
              </div>
              <ul className="space-y-4">
                {isNotFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#2d3250] text-sm leading-relaxed">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Archetypes */}
        <FadeUp>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0a0a14] text-center mb-12">
            The Four Types of Clinics We Help Most
          </h3>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {archetypes.map((a, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-white border border-[#e8eaf0] rounded-2xl p-8 relative overflow-hidden hover:border-[#15a1df]/30 hover:shadow-md transition-all duration-300 group">
                <span className="absolute top-4 right-6 font-black text-6xl text-[#010738]/[0.05] select-none leading-none">
                  {a.num}
                </span>
                <h4 className="font-heading font-bold text-[#0a0a14] text-lg mb-3 pr-12">{a.title}</h4>
                <p className="text-[#2d3250] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="flex flex-col items-center gap-4">
            <GradientCTAButton label="Check If Your Clinic Is a Good Fit" />
            <p className="text-[#5a6180] text-sm text-center">
              Takes 45 minutes. We will tell you honestly whether we can help - and if not, who can.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
// ─── Brand Mission (WHITE) ─────────────────────────────────────────────────────

const missionParas = [
  {
    text: 'We have seen too many skilled cosmetic clinicians - dentists with exceptional results, loyal patients, and genuine transformation outcomes - spending their marketing budget on enquiries that never materialise into treatment.',
    style: 'body',
  },
  { text: 'The problem was never their clinical quality.', style: 'bold' },
  { text: 'It was the way they were being marketed.', style: 'bold' },
  {
    text: 'Generic ads. Generic landing pages. Generic "book an appointment" CTAs. No education before the enquiry. No qualification before the consultation. No follow-up system after the first call.',
    style: 'body',
  },
  {
    text: 'The result is a calendar full of tyre-kickers, price shoppers, and general dental patients - while the cosmetic cases that could actually grow the business go to a competitor with a better funnel.',
    style: 'body',
  },
  {
    text: 'That is what the Case-Ready Smile Pipeline™ is built to fix.',
    style: 'accent',
  },
  {
    text: 'We build the complete patient acquisition system - from the first ad impression to the qualified consultation - so your team can focus on what they are trained to do: deliver outstanding cosmetic results.',
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
          <SectionCTA dark={false} />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── FAQ (LIGHT GRADIENT) ──────────────────────────────────────────────────────

const faqItems = [
  {
    q: 'Do you work with any dental practice, or only cosmetic-focused clinics?',
    a: 'Only cosmetic-focused clinics. Every part of the Case-Ready Smile Pipeline™ - the campaigns, the landing page, the qualification questions, the follow-up sequences - is built specifically for smile makeover patient acquisition. If your primary goal is generating hygiene bookings or emergency appointments, we are not the right fit and we will tell you that on the strategy call.',
  },
  {
    q: 'How is this different from just running Facebook and Google Ads?',
    a: 'Ads are the traffic source - they are one piece of the system. The pipeline also includes your pre-education landing page, your multi-step qualification funnel, your post-booking nurture sequence, your consultation reminders, and your revenue-stage reporting. Running ads alone gives you enquiries. The full pipeline gives you case-ready patients who arrive already understanding the value of the treatment you are recommending.',
  },
  {
    q: 'We have tried agencies before and wasted money. Why is this different?',
    a: 'The most common reason clinics waste money on marketing is that the agency stops at lead generation. You receive enquiries, but there is no system for qualifying them, educating them, following them up, or converting them at the consultation. We are accountable to downstream metrics - show rate, case acceptance, cost per booked consultation - not just cost per lead. We will only take you on as a client if we genuinely believe we can move those numbers.',
  },
  {
    q: 'What do we need to have in place before working with you?',
    a: 'A cosmetic-focused clinic with a real treatment offer - veneers, smile makeovers, Invisalign, bonding - and at least one person on your team who can handle follow-up calls and consultative conversations. You do not need an existing marketing setup. We build the pipeline from scratch. You bring the clinical expertise and the willingness to close.',
  },
  {
    q: 'How long before we start seeing qualified consultations come in?',
    a: 'Most clinics begin seeing qualified consultation bookings within [X] weeks of their pipeline going live. The exact timeline depends on your starting point, your ad budget, and how quickly the landing page and qualification system can be built and approved. We will give you a realistic timeline - not an inflated promise - on the strategy call.',
  },
  {
    q: 'Can you handle compliance and ethical messaging around cosmetic dental marketing?',
    a: 'Yes - this is built into everything we write and design. We use aspirational, trust-building language that converts and stays within ethical and regulatory boundaries. No "fix your ugly smile" angles, no guaranteed outcome claims, no before-and-after content that violates platform policies. Compliant cosmetic marketing is not a constraint - it is what actually builds trust with the patients you want.',
  },
  {
    q: 'Do you work with clinics in my area?',
    a: 'We work with cosmetic dental clinics [nationally / in Australia / in the UK - fill in your territory]. We take on one clinic per market to avoid sending the same pipeline to competing practices in the same geography. If your area is already taken, we will let you know on the call.',
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
                      <p className="px-7 pb-7 text-[#2d3250] leading-relaxed text-base">
                        {item.a}
                      </p>
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

// ─── Final CTA (DARK) ──────────────────────────────────────────────────────────

const closingBullets = [
  'Qualified smile makeover consultations - not price shoppers and tyre-kickers',
  'Patients who arrive pre-educated on treatment, candidacy, and investment',
  'A done-for-you pipeline - not another ad account you have to manage yourself',
  'Reporting tied to case acceptance and revenue - not vanity metrics',
]

const closingParas = [
  'You have the clinical results. You have the patient transformations. You have everything it takes to be the go-to cosmetic clinic in your area.',
  'What you are missing is a controlled, repeatable system that turns all of that into qualified smile makeover consultations - week after week, without depending on referrals, Instagram posts, or whoever happens to search for a dentist this month.',
  'That is exactly what the Case-Ready Smile Pipeline™ is built to do.',
  'Book your free 45-minute strategy call. We will audit your current patient acquisition, show you exactly where cosmetic enquiries are dropping off, and walk you through what the pipeline would look like for your clinic specifically. No pitch deck. No hard sell. Just a focused diagnostic built around your situation.',
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
            Ready To Stop Filling Your Calendar With the Wrong Patients?
          </h2>
        </FadeUp>

        <div className="space-y-6 mb-14 text-left">
          {closingParas.map((para, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p
                className={`text-lg leading-relaxed ${
                  i === 2
                    ? 'text-[#15a1df] font-heading font-semibold text-xl'
                    : 'text-white/90'
                }`}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Bullet recap */}
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
            <p className="text-white/65 text-sm max-w-lg leading-relaxed">
              {SUB_COPY}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── LP Footer ─────────────────────────────────────────────────────────────────

function LPFooter() {
  return (
    <footer className="py-12 px-6" style={{ background: '#000820' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/30 text-sm mb-2">
          &copy; {new Date().getFullYear()} Abdullah Tayyab. All rights reserved.
        </p>
        <p className="text-white/18 text-xs mb-4">
          The Case-Ready Smile Pipeline™ is a proprietary patient acquisition system for cosmetic
          dental clinics.
        </p>
        <p className="text-white/14 text-xs max-w-2xl mx-auto leading-relaxed mb-6">
          Results vary by clinic, market, case mix, treatment coordinator quality, and ad budget.
          Past client outcomes are not a guarantee of future performance.
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

// ─── Root Export ───────────────────────────────────────────────────────────────

export default function SmileMakeoverLPContent() {
  return (
    <div className="font-body">
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
  )
}
