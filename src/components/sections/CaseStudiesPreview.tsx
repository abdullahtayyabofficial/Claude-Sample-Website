'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'
import { caseStudies } from '@/data/case-studies'

const featured = caseStudies.slice(0, 3)

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="section-padding bg-[#060914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
            Real Campaigns. <GradientText>Real Growth.</GradientText>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every number below came from a real campaign, a real client, and a real system built to scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={i * 0.1} direction="up">
              <CaseStudyCard caseStudy={cs} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <motion.a
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium border border-white/15 text-white/70 transition-colors duration-200 hover:text-white hover:border-white/40"
            whileHover={{ scale: 1.02, boxShadow: '0 0 22px rgba(21,161,223,0.25)' }}
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
