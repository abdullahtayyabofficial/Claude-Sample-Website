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
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-light)] mb-3">
            Proven Results
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
            Built on Systems. <GradientText>Proven at Scale.</GradientText>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Real campaigns, structured execution, and measurable outcomes — from performance ecommerce to large-scale brand dominance.
          </p>
        </ScrollReveal>

        {caseStudies.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[var(--color-text-muted)]">Case studies coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 0.08}>
                <CaseStudyCard caseStudy={cs} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
