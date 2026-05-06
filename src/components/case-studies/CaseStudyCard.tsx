'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full">
      <motion.div
        className="gradient-border-card h-full"
        whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(1,7,56,0.12)' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="gradient-border-card-inner bg-white flex flex-col p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {caseStudy.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading font-semibold text-lg text-[var(--color-text-primary)] mb-2 leading-snug group-hover:text-[var(--color-brand-light)] transition-colors duration-200">
            {caseStudy.title}
          </h3>
          {caseStudy.overview && (
            <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 flex-1">
              {caseStudy.overview}
            </p>
          )}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
              {caseStudy.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-heading font-bold gradient-brand-text leading-none mb-0.5">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-light)] group-hover:gap-2.5 transition-all duration-200">
            Read case study
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
