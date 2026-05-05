'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

const EASE = [0.25, 0.4, 0.25, 1] as const

const coreService = {
  title: 'Performance Marketing & Media Buying',
  tag: 'Delivered by Abdullah personally',
  desc: 'I work directly with a select number of clients to build and manage paid media systems across Meta, Google, TikTok, and LinkedIn. Every campaign is strategy-first, built around your specific offer, audience, and growth target.',
  items: [
    'Campaign strategy & media planning',
    'Meta Ads: lead generation & ecommerce',
    'Google Ads: search, shopping & performance max',
    'TikTok & LinkedIn ad management',
    'Conversion tracking & attribution setup',
    'Creative direction & ad copy',
    'Budget allocation & scaling strategy',
    'Weekly reporting & performance reviews',
  ],
}

const networkServices = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    ),
    items: [
      'GoHighLevel CRM & Automations',
      'AI Chatbots & Virtual Assistants',
      'Lead Nurturing Workflows',
      'WhatsApp Business Automation',
      'Email Marketing Automation',
      'Funnel & Pipeline Setup',
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    items: [
      'On-Page & Off-Page SEO',
      'Local SEO & Google Business Profile',
      'Technical SEO Audits',
      'GEO / AEO (AI Search Optimisation)',
      'Content Strategy & Keyword Research',
      'Link Building',
    ],
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
      </svg>
    ),
    items: [
      'WordPress Website Design & Development',
      'Wix & Squarespace Sites',
      'Landing Page Design',
      'E-commerce Store Setup',
      'Website Speed & Performance',
      'Website Maintenance & Updates',
    ],
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    items: [
      'Social Media Content Creation',
      'Brand Identity & Logo Design',
      'Marketing Collateral Design',
      'Ad Creative Design',
      'Video Editing & Reels',
      'Presentation Design',
    ],
  },
]

export default function ServicesContent() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight max-w-3xl">
              A Full Stack of Marketing<br className="hidden sm:block" /> Services
            </h1>
            <p className="text-white/75 text-lg mt-5 max-w-2xl">
              Performance marketing delivered directly by Abdullah, supported by a trusted network of specialists across SEO, automation, design, and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core service */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Core Service</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)]">
              What Abdullah <GradientText>Does Personally</GradientText>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--color-brand-light)]/20">
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(1,7,56,0.03) 0%, rgba(21,161,223,0.06) 100%)' }}
              />
              <div className="relative p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                  <div className="lg:col-span-2">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-brand-light)] bg-[var(--color-brand-light)]/10 px-3 py-1.5 rounded-full mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-light)] animate-pulse" />
                      {coreService.tag}
                    </span>
                    <h3 className="text-2xl font-heading font-semibold text-[var(--color-text-primary)] mb-4 leading-snug">
                      {coreService.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {coreService.desc}
                    </p>
                    <Button href="/#contact" size="md">Discuss Your Project</Button>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-5">What&apos;s included</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {coreService.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                            <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                              <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Network services */}
      <section className="section-padding bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">Extended Network</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)]">
              More Services, <GradientText>Same Standard</GradientText>
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-3 max-w-2xl">
              For clients who need a complete marketing stack, additional services are available through a trusted network of vetted specialists.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {networkServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.07} direction="up">
                <motion.div
                  className="bg-white rounded-2xl border border-[var(--color-border)] p-6 h-full"
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(1,7,56,0.10)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white mb-4 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-base mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                        <span
                          className="w-1 h-1 rounded-full shrink-0 mt-2"
                          style={{ backgroundColor: 'var(--color-brand-light)' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-border)] flex items-center justify-center shrink-0 mt-0.5">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <circle cx="8" cy="8" r="6.5" stroke="var(--color-brand-light)" strokeWidth="1.2" />
                  <path d="M8 7v4M8 5.5v.5" stroke="var(--color-brand-light)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                <span className="font-semibold text-[var(--color-text-secondary)]">Please note:</span> The services listed under &quot;Extended Network&quot; (AI Automation, SEO, Web Design, and Visual Design) are delivered by trusted specialist partners, not by Abdullah personally. Abdullah acts as the coordinating point of contact and ensures all work meets the same standard expected from his direct engagements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-brand text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Get started</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-5">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Book a free call. We&apos;ll talk through where you are, where you want to go, and what the right approach looks like.
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
