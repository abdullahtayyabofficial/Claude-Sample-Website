'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

const EASE = [0.25, 0.4, 0.25, 1] as const

const stats = [
  { value: '₨24M+', label: 'Ecommerce Sales', sub: 'in a single campaign' },
  { value: '325%', label: 'YoY Growth', sub: 'achieved for one client' },
  { value: '200M+', label: 'Ad Impressions', sub: 'delivered across campaigns' },
  { value: '16x', label: 'Peak ROAS', sub: 'on Google Ads' },
]

const experience = [
  {
    role: 'Media Buying Executive',
    company: 'Firebolt63 — Creative Marketing Agency',
    period: 'Nov 2025 – Apr 2026',
    highlights: [
      'Generated PKR 24M+ in ecommerce sales in ~176 days, achieving 325% YoY growth',
      'Produced 1,700+ real estate leads within limited monthly budget in under 2 months',
      'Delivered 200M+ impressions, 115K+ hours watch time, and 150K+ social followers growth',
      'Executed large-scale campaigns: PKR 10M+ nationwide, PKR 3M Google Masthead (30M+ impressions in 1 day)',
      'Achieved up to 12x ROAS on Meta and 16x ROAS on Google Ads',
    ],
  },
  {
    role: 'Media Buyer',
    company: 'Wave Byte — Ecommerce Service Provider',
    period: 'Dec 2024 – Apr 2025',
    highlights: [
      'Managed over PKR 1.5M in ad spend; scaled campaigns to PKR 600K+',
      'Scaled daily budgets from PKR 1,500 to 100K+ while maintaining 5–8x ROAS',
      'Executed seminar marketing across 7 cities, generating 570+ leads in 17 days',
    ],
  },
  {
    role: 'Social Media Marketer',
    company: 'Hello World Technologies',
    period: 'Jun 2024 – Dec 2024',
    highlights: [
      'Grew Cubicle Co-Working Space bookings from 3 to 25+ in under 60 days',
      'Led marketing for large-scale IT event attracting 600+ participants',
    ],
  },
]

const credentials = [
  { label: 'Google Digital Garage', sub: 'Digital Marketing Fundamentals' },
  { label: 'LUMS CES', sub: 'Advertising · Entrepreneurship · Communication' },
  { label: 'Anthropic', sub: 'Claude 101 Completion' },
  { label: 'Google Skillshop', sub: 'Google Soft Skills Program' },
]

const speaking = [
  {
    title: 'Guest Speaker — Digital Marketing Landscape',
    org: 'LUMS CES, Advertising Programme',
    desc: 'Delivered a session on modern performance marketing and the role of AI in digital advertising.',
  },
  {
    title: 'Guest Speaker — Proving ROI on Marketing',
    org: 'BIC Foundry, Beaconhouse International College',
    desc: 'Spoke on measurement frameworks, attribution models, and how marketers demonstrate business value.',
  },
  {
    title: '1-on-1 Free Media Buying Consultations',
    org: 'Topmate · LinkedIn',
    desc: 'Regularly offers free consultations to students and early-career marketers entering performance marketing.',
  },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight max-w-3xl">
              From Campaigns to Systems —<br className="hidden sm:block" /> Built for Scale
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
                  className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 card-shadow border border-[var(--color-border)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-2xl font-heading font-bold gradient-brand-text leading-none">2+</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Years in Performance<br />Marketing</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" direction="left" delay={0.1}>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-5">
                I&apos;m a performance marketer who builds data-driven systems that turn advertising into a predictable revenue engine. Since 2024, I&apos;ve managed media budgets across Meta, Google, TikTok, and LinkedIn — delivering results for brands in ecommerce, real estate, education, hospitality, and professional services.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                My approach isn&apos;t about running ads. It&apos;s about building complete marketing systems — where every component, from creative to conversion tracking to scaling strategy, works in alignment to deliver measurable, repeatable growth.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                I&apos;ve worked with brands across ecommerce, real estate, hospitality, co-working, professional services, and large-scale events — adapting strategy and execution to each vertical while maintaining a consistent focus on ROI and long-term scalability.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/#contact" size="md">Book a Call</Button>
                <Button href="/case-studies" variant="secondary" size="md">View Case Studies</Button>
              </div>
            </ScrollReveal>
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

      {/* Career timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Experience</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)]">
              Career <GradientText>Timeline</GradientText>
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--color-border)] hidden sm:block" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <ScrollReveal key={exp.company} delay={i * 0.1} direction="up">
                  <div className="sm:pl-14 relative">
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full gradient-brand items-center justify-center hidden sm:flex shadow-sm shrink-0">
                      <span className="text-white text-xs font-bold">{experience.length - i}</span>
                    </div>
                    <div className="bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] p-7 hover:border-[var(--color-brand-light)]/40 transition-colors duration-200">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg leading-snug">{exp.role}</h3>
                          <p className="text-[var(--color-text-secondary)] text-sm mt-0.5">{exp.company}</p>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-brand-light)] bg-[var(--color-brand-light)]/10 px-3 py-1.5 rounded-full shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-brand-light)] mt-0.5 shrink-0">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education + Community */}
      <section className="section-padding bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ScrollReveal direction="up">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 h-full">
                <h3 className="font-heading font-semibold text-[var(--color-text-primary)] mb-6 text-lg">
                  Education & Certifications
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M8 2L2 5l6 3 6-3-6-3zM2 9l6 3 6-3M2 12l6 3 6-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">BBIT — Virtual University of Pakistan</p>
                      <p className="text-xs text-[var(--color-text-muted)]">Bachelor of Business & Information Technology</p>
                    </div>
                  </div>
                  {credentials.map((c) => (
                    <div key={c.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-border)] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                          <path d="M13 5L6.5 11.5 3 8" stroke="var(--color-brand-light)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{c.label}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 h-full">
                <h3 className="font-heading font-semibold text-[var(--color-text-primary)] mb-6 text-lg">
                  Community & Speaking
                </h3>
                <div className="space-y-6">
                  {speaking.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                          <path d="M13 8A5 5 0 113 8a5 5 0 0110 0zM6.5 6l3 2-3 2V6z" fill="white" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                        <p className="text-xs font-medium text-[var(--color-brand-light)] mb-1">{item.org}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
