'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We dive deep into your business, understanding your offer, audience, and current marketing systems to uncover hidden growth opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & System Design',
    description:
      'We craft a custom roadmap, from media buying and funnel setup to automation and tracking, engineered for predictable performance.',
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description:
      'We launch, test, and optimize campaigns to maximize ROI and lead quality.',
  },
  {
    number: '04',
    title: 'Reporting & Growth Scaling',
    description:
      'We turn insights into scaling actions through transparent reporting and continuous growth optimization.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-light)] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)]">
            A System Built for{' '}
            <GradientText>Predictable Results</GradientText>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1} direction="up">
              <div className="relative">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[var(--color-border)] to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-5 shadow-md">
                    <span className="font-heading font-bold text-white text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[var(--color-text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
