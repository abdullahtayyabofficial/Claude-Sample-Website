'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const EASE = [0.25, 0.4, 0.25, 1] as const

const stats = [
  { value: '₨30M+', label: 'Revenue Driven', sub: '' },
  { value: '10k+', label: 'Leads Generated', sub: '' },
  { value: '4x-16x', label: 'Avg ROAS', sub: '' },
  { value: '400+', label: 'Campaigns Managed', sub: '' },
]

export default function AboutContent() {
  return (
    <>
      {/* Page hero */}
      <section className="gradient-brand pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight max-w-4xl">
              From Campaign Execution to System-Level Thinking:<br className="hidden sm:block" /> Built for Scalable Growth
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bio + photo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            <ScrollReveal className="lg:col-span-2" direction="right">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-15"
                  style={{ background: 'linear-gradient(135deg, #010738, #15a1df)' }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src="/images/hero/abdullah-tayyab.jpg"
                    alt="Abdullah Tayyab"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 card-shadow border border-[var(--color-border)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-xl sm:text-2xl font-heading font-bold gradient-brand-text leading-none">2+</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Years in Performance<br />Marketing</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" direction="left" delay={0.1}>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-5">
                I&apos;m Abdullah Tayyab, a performance marketer focused on building marketing systems that actually scale, not just campaigns that temporarily perform. My work sits at the intersection of strategy, data, and execution, where every decision is tied to measurable business outcomes rather than assumptions.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                Over time, I&apos;ve worked across service-based businesses, ecommerce brands, and growth-focused companies, managing and optimizing campaigns across Meta and Google. Instead of approaching each project as a set of ads to run, I treat it as a system to build, where everything from audience structure to creative direction and conversion tracking works together toward consistent performance.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                My approach is grounded in structured testing, clear data interpretation, and continuous optimization. I use AI where it actually adds value, speeding up analysis, improving decision-making, and helping identify patterns faster, but never replacing strategy with shortcuts. The goal is always the same: turn marketing into something predictable, scalable, and repeatable.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                Beyond execution, I&apos;ve also been actively involved in the learning and sharing side of marketing. I&apos;ve delivered sessions on digital marketing and ROI-driven strategy, worked with individuals through one-on-one consultations, and continue to stay close to evolving industry practices. My background includes certifications from Google and LUMS, along with hands-on experience that comes from managing real budgets, real campaigns, and real expectations.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                At this stage, I&apos;m focused on working with businesses that want more than just activity. They want clarity, structure, and a system behind their growth. Because in the long run, performance doesn&apos;t come from isolated wins. It comes from systems that consistently produce them.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/#contact" size="md">Book a Call</Button>
                <Button href="/case-studies" variant="secondary" size="md">View Case Studies</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach / Vision / Mission */}
      <section className="py-16 bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'My Approach',
                text: "I don't believe in random testing or chasing trends. Every strategy is built around understanding what's working, why it's working, and how it can be scaled without breaking performance. The focus is always on building a system that holds under pressure, not just one that works in ideal conditions.",
                icon: (
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M2 12l4-4 3 3 5-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: 'My Vision',
                text: 'To help businesses move away from unpredictable marketing and toward structured, data-driven growth systems that scale with confidence.',
                icon: (
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 11.5l1 1M11.5 3.5l-1 1M4.5 11.5l-1 1" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: 'My Mission',
                text: 'To combine performance marketing, creative strategy, and AI-driven optimization into systems that deliver consistent, measurable results without relying on guesswork.',
                icon: (
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.4"/>
                    <circle cx="8" cy="8" r="3" stroke="white" strokeWidth="1.4"/>
                    <circle cx="8" cy="8" r="1" fill="white"/>
                  </svg>
                ),
              },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 h-full">
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center mb-5 shrink-0">
                    {p.icon}
                  </div>
                  <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-xl mb-3">
                    {p.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {p.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--color-surface-muted)] px-6 py-7 text-center hover:bg-white transition-colors duration-200"
                >
                  <p className="text-3xl font-heading font-bold gradient-brand-text leading-none mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-0.5">{s.label}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{s.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[var(--color-text-primary)]">
              Achievements
            </h2>
          </ScrollReveal>

          <div className="space-y-20 lg:space-y-28">
            {/* #1 — LUMS CES: image left, text right */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                  <Image
                    src="/images/about/achievements/lums.jpg"
                    alt="Guest Speaker at LUMS CES"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Guest Speaker</p>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                    Session on Digital Marketing Landscape
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-5">LUMS CES, Advertising Course</p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Invited as a Guest Speaker by the Centre for Continuing Education Studies at LUMS to deliver a session on the Role of Digital Marketing, covering platform strategy, campaign execution, and AI-driven marketing for the next generation of business professionals. What made it especially meaningful: Abdullah was once a student of this very course. Returning as a speaker was a full-circle moment.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* #2 — ICR IT Centre: text left, image right */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Instructor Experience</p>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                    Digital Marketing Instructor
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-5">ICR IT Centre, Rahim Yar Khan</p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Taught digital marketing across 2 full batches, working with 45+ students on Meta Ads, campaign strategy, content creation, and performance analytics. Before stepping into a lead role, served as Assistant Instructor, handling backend operations and delivering lectures independently in the lead instructor&apos;s absence. A hands-on teaching experience that reinforced how to communicate complex performance concepts clearly.
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                  <Image
                    src="/images/about/achievements/icr.jpg"
                    alt="Instructor at ICR IT Centre"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* #3 — BIC Foundry: image left, text right */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                  <Image
                    src="/images/about/achievements/bic.jpg"
                    alt="Guest Speaker at BIC Foundry"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Guest Speaker</p>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                    Session on &ldquo;How to Prove ROI on Marketing Spend&rdquo;
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-5">BIC Foundry, Beaconhouse International College</p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Addressed startup founders at BIC Foundry on &ldquo;How to Prove ROI on Marketing Spend&rdquo;, helping early-stage entrepreneurs master unit economics, attribution, and the frameworks that separate real marketing from speculation. Covered CAC, LTV, and how to build an ROI engine instead of just running campaigns.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section-padding bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--color-text-primary)] mb-2">Certifications</h2>
            <p className="text-[var(--color-text-secondary)]">Credentials from institutions and platforms that have shaped my practice.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { title: 'Entrepreneurship', issuer: 'LUMS CES Program', img: '/images/about/certifications/cert-1.jpg' },
              { title: 'Advertising: Print, Outdoor & Digital', issuer: 'LUMS CES Program', img: '/images/about/certifications/cert-2.jpg' },
              { title: 'Fundamentals of Digital Marketing', issuer: 'Google Digital Garage', img: '/images/about/certifications/cert-3.jpg' },
              { title: 'Claude 101 Completion', issuer: 'Anthropic', img: '/images/about/certifications/cert-4.jpg' },
            ].map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group">
                  <div className="relative aspect-[4/3] bg-[var(--color-surface-muted)]">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug mb-1">{cert.title}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-brand text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Ready to grow?</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-5">
              Let&apos;s Build Something That Scales
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Whether you need a full performance marketing system or a sharper media buying strategy, let&apos;s talk about what&apos;s possible.
            </p>
            <Button href="/#contact" size="lg" variant="secondary">
              Book a Free Call
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
