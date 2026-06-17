'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'I work across industries, including ecommerce, service-based, real estate, education, SaaS, and more. The common thread is that they want predictable, data-driven growth through paid media. If you have a solid offer and want to scale it systematically, we can work together.',
  },
  {
    q: 'What platforms do you run ads on?',
    a: 'My core expertise is Meta Ads (Facebook & Instagram) and Google Ads (Search, Shopping, Performance Max, YouTube). I also run campaigns on TikTok and LinkedIn. Platform selection always depends on where your audience is and what the data shows.',
  },
  {
    q: 'What ROAS can I expect?',
    a: "Results depend on your offer, funnel quality, and market. My track record shows 6x–16x ROAS for ecommerce clients and strong lead quality improvements for service businesses. I don't promise specific numbers. I build the systems that make those numbers achievable.",
  },
  {
    q: 'Do you work with small budgets?',
    a: "Yes. I've started campaigns at PKR 1,500/day and scaled them to PKR 100K+/day. The system I build is designed to validate at any budget and grow as performance is confirmed, not the other way around.",
  },
  {
    q: 'How do you handle tracking and attribution?',
    a: 'Every engagement starts with proper tracking setup: Meta Pixel with CAPI, GA4, Google Tag Manager, Firebase, and custom dashboards. Without clean data, optimisation is guesswork. I fix the data layer first.',
  },
  {
    q: 'What does working together look like?',
    a: "We start with a discovery call and a full audit of your current setup. From there I build a custom strategy, handle full campaign execution, ongoing optimisation, and deliver transparent weekly or monthly reporting. You stay in the loop at every step.",
  },
  {
    q: 'How quickly can I expect results?',
    a: 'For lead generation, meaningful traction typically shows in the first 2–4 weeks as the system gathers data. Ecommerce campaigns can generate results faster. Scaling decisions happen after the data validates, not before.',
  },
  {
    q: 'Do you offer consulting or one-time audits?',
    a: 'Yes. I offer free 1-on-1 media buying consultations on LinkedIn and Topmate. For dedicated campaign audits or paid strategy sessions, reach out through the contact form below.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-[var(--color-surface-muted)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)]">
            Common <GradientText>Questions</GradientText>
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal key={i} delay={i * 0.04} direction="up">
                <div
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden transition-shadow duration-200 hover:shadow-md"
                >
                  <button
                    className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-[var(--color-text-primary)] text-base leading-snug">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="shrink-0 w-6 h-6 rounded-full gradient-brand flex items-center justify-center text-white text-lg leading-none"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] as const }}
                      >
                        <p className="px-7 pb-6 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
