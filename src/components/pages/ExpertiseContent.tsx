'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

const EASE = [0.25, 0.4, 0.25, 1] as const

const items = [
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    desc: 'End-to-end campaign management across Facebook and Instagram, from strategy and audience architecture to creative testing and scaling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
      </svg>
    ),
    skills: [
      'Sales & Ecommerce Campaigns',
      'Lead Generation Campaigns',
      'App Promotion Campaigns',
      'Audience & Creative Testing',
      'Testing & Scaling Frameworks',
      'CAPI & Catalog Ads',
      'Retargeting Architecture',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    desc: 'Full Google Ads management across Search, Shopping, Display, YouTube, and Performance Max, with a focus on intent-driven results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    skills: [
      'Search Campaigns',
      'Shopping & Performance Max',
      'Display & Demand Gen',
      'YouTube Ads',
      'Keyword Research & Match Types',
      'Smart Bidding Strategies',
      'Google Masthead Campaigns',
    ],
  },
  {
    id: 'tracking',
    title: 'Conversion Tracking',
    desc: 'Robust multi-platform tracking setup so every conversion is captured, attributed correctly, and feeds back into campaign optimisation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    skills: [
      'Meta Pixel & CAPI',
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Firebase Console',
      'Meta for Developers',
      'Server-Side Tracking',
      'Cross-Platform Attribution',
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy Development',
    desc: 'Research-backed go-to-market and growth strategies that define the audience, position the offer, and map the path to scalable revenue.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    skills: [
      'Market & Audience Research',
      'Competitor & SWOT Analysis',
      'Funnel Mapping & Architecture',
      'Customer Journey Design',
      'Offer Positioning',
      'Growth Planning & Roadmapping',
    ],
  },
  {
    id: 'media-planning',
    title: 'Media Planning & Reporting',
    desc: 'Structured budget allocation, multi-channel planning, and clear performance reporting that connects spend to business outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
      </svg>
    ),
    skills: [
      'Budget Allocation & Forecasting',
      'Multi-Channel Media Planning',
      'KPI Dashboard Setup',
      'Campaign Performance Analysis',
      'GA4 & Looker Studio Reporting',
      'Data-Driven Optimisation',
    ],
  },
  {
    id: 'creative',
    title: 'Copywriting & Creative Direction',
    desc: 'Direct-response copy and creative strategy built to stop the scroll, communicate the offer, and drive action.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
    skills: [
      'Direct-Response Ad Copy',
      'Creative Strategy & Briefs',
      'A/B Creative Testing',
      'Video Ads Direction',
      'UGC Brief Creation',
      'Hook & Angle Development',
    ],
  },
  {
    id: 'funnel',
    title: 'Funnel Building',
    desc: 'Complete funnel architecture, from traffic entry to conversion, designed to maximise lead quality and purchase rate at every stage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0018.95 4H5.04c-.83 0-1.3.95-.79 1.61z" />
      </svg>
    ),
    skills: [
      'Landing Page Strategy',
      'Lead Magnet Design',
      'Checkout & Lead Form Optimisation',
      'Upsell & Retargeting Flows',
    ],
  },
]

const tools = [
  { category: 'Meta Ads (Facebook & Instagram)', list: ['Meta Ads Manager', 'Turbo Ad Finder 2.0', 'Bigged', 'Meta Ad Library', 'Interest Insights', 'Minea'] },
  { category: 'Google Ads/PPC', list: ['Google Ads Manager', 'Google Deck Assistant', 'Google Ads Match Type Helper', 'Eevar GTM Builder'] },
  { category: 'Tracking & Analytics', list: ['Meta Pixel', 'Conversions API (CAPI)', 'Google Analytics 4', 'Google Tag Manager', 'Firebase Console', 'Meta for Developers'] },
  { category: 'Reporting', list: ['Looker Studio', 'GA4 Explorations', 'Meta Ads Reporting'] },
  { category: 'AI Tools', list: ['Perplexity', 'Claude (AI)', 'Manus AI', 'AdCreative.ai'] },
]

export default function ExpertiseContent() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Expertise</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight max-w-3xl">
              Full-Stack Performance Marketing
            </h1>
            <p className="text-white/75 text-lg mt-5 max-w-2xl">
              Every tool, channel, and system I use is selected for one purpose: measurable, scalable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skill cards */}
      <section className="section-padding bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Skills</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)]">
              Areas of <GradientText>Deep Expertise</GradientText>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05} direction="up" className="h-full">
                <motion.div
                  className="bg-white rounded-2xl border border-[var(--color-border)] p-6 h-full group"
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(1,7,56,0.10)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(1,7,56,0.02) 0%, rgba(21,161,223,0.04) 100%)' }}
                  />
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white mb-4 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-base mb-2 leading-snug min-h-[2.75rem]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {item.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--color-brand-light)' }}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Stack</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)]">
              Tools I <GradientText>Work With</GradientText>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 0.08} direction="up">
                <div className="bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-light)] mb-4">
                    {group.category}
                  </p>
                  <ul className="space-y-2.5">
                    {group.list.map((tool) => (
                      <li key={tool} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 rounded-full gradient-brand shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Work together</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-5">
              Put These Skills to Work for Your Business
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Ready to build a marketing system that delivers predictable, scalable results?
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
