'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'

const items = [
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
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
    id: 'tiktok-linkedin',
    title: 'TikTok & LinkedIn Ads',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    skills: [
      'TikTok Performance Campaigns',
      'TikTok Creative Strategy',
      'LinkedIn Lead Gen Forms',
      'LinkedIn B2B Targeting',
      'Awareness & Reach Campaigns',
      'Cross-Platform Retargeting',
    ],
  },
  {
    id: 'funnel',
    title: 'Funnel Building',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0018.95 4H5.04c-.83 0-1.3.95-.79 1.61z"/>
      </svg>
    ),
    skills: [
      'Landing Page Strategy',
      'Lead Magnet Design',
      'Email & WhatsApp Sequences',
      'Conversion Rate Optimisation',
      'Checkout & Lead Form Optimisation',
      'Upsell & Retargeting Flows',
    ],
  },
]

export default function Expertise() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="expertise" className="section-padding bg-[var(--color-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
            Full-Stack <GradientText>Performance Marketing</GradientText>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Every tool, channel, and system I use is selected for one purpose: measurable, scalable growth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const isActive = active === item.id
            return (
              <ScrollReveal key={item.id} delay={i * 0.06} direction="up">
                <motion.div
                  className="relative bg-white rounded-2xl border border-[var(--color-border)] p-6 cursor-pointer overflow-hidden group"
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                  onClick={() => setActive(isActive ? null : item.id)}
                  layout
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {/* Gradient hover background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(1,7,56,0.02) 0%, rgba(21,161,223,0.04) 100%)' }}
                  />

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white mb-4 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-base mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-1.5">
                    {item.skills.slice(0, isActive ? item.skills.length : 4).map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--color-brand-light)' }}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* Expand toggle */}
                  {item.skills.length > 4 && (
                    <AnimatePresence>
                      <button
                        className="mt-4 text-xs font-semibold text-[var(--color-brand-light)] hover:underline flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActive(isActive ? null : item.id)
                        }}
                      >
                        {isActive ? 'Show less' : `+${item.skills.length - 4} more`}
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ↓
                        </motion.span>
                      </button>
                    </AnimatePresence>
                  )}
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
