'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import { caseStudies } from '@/data/case-studies'

const featured = caseStudies.slice(0, 3)

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="section-padding bg-[var(--color-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
            Real Campaigns. <GradientText>Real Growth.</GradientText>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Every number below came from a real campaign, a real client, and a real system built to scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={i * 0.1} direction="up">
              <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                <motion.div
                  className="gradient-border-card h-full"
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(1,7,56,0.12)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                <div className="gradient-border-card-inner bg-white p-7 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg leading-snug mb-3 group-hover:text-[var(--color-brand-light)] transition-colors duration-200">
                    {cs.title}
                  </h3>

                  {/* Overview excerpt */}
                  {cs.overview && (
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 flex-1">
                      {cs.overview}
                    </p>
                  )}

                  {/* Metrics */}
                  {cs.metrics && cs.metrics.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
                      {cs.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-xl font-heading font-bold gradient-brand-text leading-none mb-0.5">
                            {metric.prefix}{metric.value}{metric.suffix}
                          </p>
                          <p className="text-xs text-[var(--color-text-muted)]">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Read more */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-light)] group-hover:gap-2.5 transition-all duration-200">
                    Read case study
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <motion.a
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium border border-[var(--color-brand-dark)]/20 text-[var(--color-brand-dark)] transition-colors duration-200 hover:text-[var(--color-brand-light)] hover:border-[var(--color-brand-light)]"
            whileHover={{ scale: 1.02, boxShadow: '0 0 22px rgba(21,161,223,0.35), 0 0 60px rgba(21,161,223,0.10)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            View All Case Studies
          </motion.a>
        </ScrollReveal>

      </div>
    </section>
  )
}
