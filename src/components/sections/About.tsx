'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

const stats = [
  { value: '₨24M+', label: 'Ecommerce Sales', sub: 'in a single campaign' },
  { value: '325%', label: 'YoY Growth', sub: 'achieved for one client' },
  { value: '200M+', label: 'Ad Impressions', sub: 'delivered across campaigns' },
  { value: '16x', label: 'Peak ROAS', sub: 'on Google Ads' },
]

const experience = [
  {
    role: 'Media Buying Executive',
    company: 'Firebolt63 (Creative Marketing Agency)',
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
    company: 'Wave Byte (Ecommerce Service Provider)',
    period: 'Dec 2024 – Apr 2025',
    highlights: [
      'Managed over PKR 1.5M in ad spend; scaled ad campaigns to PKR 600K+',
      'Scaled budgets from PKR 1,500 to 100K+/day while maintaining 5–8x ROAS',
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

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label + heading */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)]">
            From Campaigns to Systems,{' '}
            <GradientText>Built for Scale</GradientText>
          </h2>
        </ScrollReveal>

        {/* Top: photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">

          {/* Photo column */}
          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative gradient block */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-15"
                style={{ background: 'linear-gradient(135deg, #010738, #15a1df)' }}
              />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/hero/abdullah-tayyab.jpg"
                  alt="Abdullah Tayyab"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 card-shadow border border-[var(--color-border)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-2xl font-heading font-bold gradient-brand-text leading-none">2+</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Years in Performance<br/>Marketing</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Bio column */}
          <ScrollReveal className="lg:col-span-3" direction="left" delay={0.1}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              I&apos;m a performance marketer who builds data-driven systems that turn advertising into a predictable revenue engine. Since 2024, I&apos;ve managed media budgets across Meta, Google, TikTok, and LinkedIn, delivering results for brands in ecommerce, real estate, education, hospitality, and professional services.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              My approach isn&apos;t about running ads. It&apos;s about building complete marketing systems, where every component, from creative to conversion tracking to scaling strategy, works in alignment to deliver measurable, repeatable growth.
            </p>

            {/* Experience timeline */}
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div
                  key={exp.company}
                  className="relative pl-5 border-l-2 border-[var(--color-border)] hover:border-[var(--color-brand-light)] transition-colors duration-300"
                >
                  <div className="mb-1.5">
                    <span className="font-heading font-semibold text-[var(--color-text-primary)] text-sm">
                      {exp.role}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-sm"> · {exp.company}</span>
                  </div>
                  <p className="text-xs text-[var(--color-brand-light)] font-medium mb-2">{exp.period}</p>
                  {i === 0 && (
                    <ul className="space-y-1">
                      {exp.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                          <span className="text-[var(--color-brand-light)] mt-0.5 shrink-0">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {i > 0 && (
                    <ul className="space-y-1">
                      {exp.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                          <span className="text-[var(--color-brand-light)] mt-0.5 shrink-0">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#contact" size="md">
                Work With Me
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden mb-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[var(--color-surface-muted)] px-6 py-7 text-center hover:bg-white transition-colors duration-200"
              >
                <p className="text-3xl font-heading font-bold gradient-brand-text leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-0.5">{s.label}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{s.sub}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Credentials + community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] p-7">
              <h3 className="font-heading font-semibold text-[var(--color-text-primary)] mb-5 text-base">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <path d="M8 2L2 5l6 3 6-3-6-3zM2 9l6 3 6-3M2 12l6 3 6-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">BBIT, Virtual University of Pakistan</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Bachelor of Business & Information Technology</p>
                  </div>
                </div>
                {credentials.map((c) => (
                  <div key={c.label} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-border)] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                        <path d="M13 5L6.5 11.5 3 8" stroke="var(--color-brand-light)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
            <div className="bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] p-7">
              <h3 className="font-heading font-semibold text-[var(--color-text-primary)] mb-5 text-base">
                Community & Speaking
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: 'Guest Speaker: Digital Marketing Landscape',
                    org: 'LUMS CES Advertising',
                    icon: '🎤',
                  },
                  {
                    title: 'Guest Speaker: How to Prove ROI on Marketing',
                    org: 'BIC Foundry, Beaconhouse International College',
                    icon: '🎤',
                  },
                  {
                    title: '1-on-1 Free Media Buying Consultations',
                    org: 'Topmate · LinkedIn',
                    icon: '💬',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
