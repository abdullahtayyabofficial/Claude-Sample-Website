'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full">
      <motion.div
        className="cs-card-border h-full flex flex-col"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="px-6 pt-6 pb-4 min-h-[64px] flex items-center">
          {caseStudy.logo ? (
            <div className="relative h-10 w-44">
              <Image
                src={caseStudy.logo}
                alt={caseStudy.client}
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
          ) : (
            <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
              {caseStudy.client}
            </span>
          )}
        </div>

        {/* Hero image — inset from sides */}
        {caseStudy.heroImage && (
          <div className="px-4 pb-1">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-[var(--color-surface-muted)]">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 py-5">
          <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg leading-snug mb-2 group-hover:text-[var(--color-brand-light)] transition-colors duration-200">
            {caseStudy.title}
          </h3>

          {caseStudy.overview && (
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 flex-1">
              {caseStudy.overview}
            </p>
          )}

          {/* Metrics */}
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

          {/* Tags + read more */}
          <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-surface-muted)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold text-[var(--color-brand-light)] group-hover:gap-2 transition-all duration-200">
              Read case study
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
