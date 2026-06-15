import type { Metadata } from 'next'
import { caseStudies } from '@/data/case-studies'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'

export const metadata: Metadata = {
  title: 'Case Studies — Built on Systems. Proven at Scale.',
  description:
    'Real campaigns, structured execution, and measurable outcomes — from performance ecommerce to large-scale brand dominance.',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#060914]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <ScrollReveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-light)] mb-3">
            Proven Results
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
            Built on Systems. <GradientText>Proven at Scale.</GradientText>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real campaigns, structured execution, and measurable outcomes — from performance ecommerce to large-scale brand dominance.
          </p>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {caseStudies.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/30">Case studies coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 0.07}>
                <CaseStudyCard caseStudy={cs} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
