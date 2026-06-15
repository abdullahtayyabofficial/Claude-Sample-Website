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
        className="bg-[#0f1628] border border-white/[0.07] rounded-2xl overflow-hidden h-full flex flex-col"
        whileHover={{ y: -5, boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(21,161,223,0.12)' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {/* Brand name */}
        <div className="px-5 pt-5 pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
            {caseStudy.client}
          </p>
        </div>

        {/* Image */}
        <div className="mx-4 rounded-xl overflow-hidden relative aspect-[16/10] bg-[#1a2240] shrink-0">
          {caseStudy.heroImage ? (
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.client}
              fill
              className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #010738 0%, #0c2a5a 50%, #15a1df22 100%)' }}
            >
              <div className="text-center px-4">
                <p className="text-white/20 text-xs font-medium tracking-widest uppercase">
                  {caseStudy.industry}
                </p>
              </div>
            </div>
          )}
          {/* Subtle top fade */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f1628]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
          <h3 className="font-heading font-semibold text-white text-base leading-snug mb-2.5 group-hover:text-[var(--color-brand-light)] transition-colors duration-200">
            {caseStudy.title}
          </h3>

          {caseStudy.overview && (
            <p className="text-[13px] text-white/40 leading-relaxed line-clamp-3 flex-1">
              {caseStudy.overview}
            </p>
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
