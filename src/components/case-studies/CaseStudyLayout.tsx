'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

const EASE = [0.25, 0.4, 0.25, 1] as const

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
}

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12 border-t border-[var(--color-border)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] pt-1">
            {label}
          </p>
        </div>
        <div className="lg:col-span-3">{children}</div>
      </div>
    </ScrollReveal>
  )
}

export default function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors mb-8"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold leading-tight mb-5">
              {caseStudy.title}
            </h1>
            <p className="text-white/60 text-base">
              {caseStudy.client} &nbsp;·&nbsp; {caseStudy.industry}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="bg-white border-b border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className={`grid gap-px bg-[var(--color-border)] ${caseStudy.metrics.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white px-8 py-9 text-center">
                    <p className="text-3xl sm:text-4xl font-heading font-bold gradient-brand-text leading-none mb-2">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {caseStudy.overview && (
            <SectionBlock label="Overview">
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                {caseStudy.overview}
              </p>
            </SectionBlock>
          )}

          {caseStudy.problem && (
            <SectionBlock label="The Challenge">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {caseStudy.problem}
              </p>
            </SectionBlock>
          )}

          {caseStudy.strategy && (
            <SectionBlock label="Strategy">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {caseStudy.strategy}
              </p>
            </SectionBlock>
          )}

          {caseStudy.execution && (
            <SectionBlock label="Execution">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {caseStudy.execution}
              </p>
            </SectionBlock>
          )}

          {caseStudy.results && caseStudy.results.length > 0 && (
            <SectionBlock label="Results">
              <div className="space-y-4">
                {caseStudy.results.map((r) => (
                  <div
                    key={r.label}
                    className="flex gap-4 bg-[var(--color-surface-muted)] rounded-xl px-5 py-4 border border-[var(--color-border)]"
                  >
                    <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">{r.label}: </span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{r.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {caseStudy.visuals && caseStudy.visuals.length > 0 && (
            <SectionBlock label="Campaign Visuals">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.visuals.map((src, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
                    <Image
                      src={src}
                      alt={`${caseStudy.client} campaign visual ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {caseStudy.learnings && (
            <SectionBlock label="Key Takeaway">
              <div className="relative pl-5 border-l-2 border-[var(--color-brand-light)]">
                <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
                  {caseStudy.learnings}
                </p>
              </div>
            </SectionBlock>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-brand text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Work together</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-5">
              Want Results Like These?
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Let&apos;s talk through your goals and build a system designed to deliver them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/#contact" size="lg" variant="secondary">Book a Free Call</Button>
              <Button href="/case-studies" size="lg" variant="ghost" className="text-white border border-white/20 hover:border-white/60">
                More Case Studies
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
