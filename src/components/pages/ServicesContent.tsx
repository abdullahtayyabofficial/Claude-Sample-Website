'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const EASE = [0.25, 0.4, 0.25, 1] as const

const services = [
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    desc: 'High-performing campaigns across Facebook & Instagram, built to generate consistent leads, sales, and scalable growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Lead Gen & Sales Campaigns',
      'Funnel Mapping & Architecture',
      'Creative Direction & Ad Copy',
      'Campaign Testing, Optimization & Scaling',
      'Conversion Tracking & Analysis',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads / PPC',
    desc: 'Intent-driven campaigns designed to capture demand and convert high-quality traffic into measurable results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
        <path d="M21 21l-4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Search, Shopping & Display Campaigns',
      'Performance Max & Demand Gen Campaigns',
      'Keyword Research & Match Types',
      'Budget Allocation & Scaling',
      'Conversion Tracking & Analytics',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    desc: 'Smart systems that reduce manual work, improve response time, and increase efficiency across your marketing and sales processes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2a5 5 0 015 5v1h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="14" r="2" fill="white"/>
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
    title: 'SEO (Search Optimization)',
    desc: 'Long-term visibility strategies to help your business rank, get discovered, and generate consistent organic traffic.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 12l4-4 4 4 4-6 4 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'On-Page & Off-Page SEO',
      'Local SEO & Google Business Profile',
      'Technical SEO Audits',
      'GEO / AEO (AI Search Optimization)',
      'Content Strategy & Keyword Research',
      'Link Building and more',
    ],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    desc: 'Clean, modern, and conversion-focused websites designed to turn visitors into leads and customers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="16" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 21h8M12 19v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 7h12M6 11h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Website Design (WordPress, Wix, etc.)',
      'Landing Page Design',
      'Ecommerce Store Layouts',
      'UX-focused Structure',
      'Speed & Performance Optimization',
    ],
  },
  {
    id: 'visual-design',
    title: 'Visual Design & Video Editing',
    desc: 'Creative assets built to capture attention, communicate clearly, and improve campaign performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Ad Creatives (Static, Videos & Motion)',
      'Social Media Content Creation',
      'Video Editing & Short-form Content',
      'Branding & Visual Identity',
      'Marketing & Presentation Design',
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight max-w-xl">
              A Complete Marketing System; Built to Drive Growth
            </h1>
            <p className="text-white/75 text-lg mt-5 max-w-2xl leading-relaxed">
              From Paid Media, Automations, SEO to Design, everything is built to work together as one system, focused on performance, scalability, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.07} direction="up">
                <motion.div
                  className="bg-white rounded-2xl border border-[var(--color-border)] p-7 h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(1,7,56,0.10)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center text-white mb-5 shadow-sm shrink-0">
                    {service.icon}
                  </div>
                  <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-2 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5 mt-auto">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                        <span className="text-[var(--color-brand-light)] shrink-0 leading-snug">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
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
            <p className="text-white/75 mb-3 text-lg">
              Whether you need a focused growth strategy or a complete marketing system, everything is designed to work together, not in silos.
            </p>
            <p className="text-white/60 mb-8">
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
