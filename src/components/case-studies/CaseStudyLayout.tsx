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
        <div className="lg:pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)]">
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
      <section className="relative min-h-[56vh] lg:min-h-[64vh] flex flex-col justify-end overflow-hidden bg-[#010738]">
        {caseStudy.heroImage ? (
          <>
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.client}
              fill
              className="object-cover opacity-45"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010738] via-[#010738]/55 to-[#010738]/20" />
          </>
        ) : (
          <div className="absolute inset-0 gradient-brand opacity-90" />
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/55 text-sm font-medium hover:text-white transition-colors mb-8"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">
              {caseStudy.client} &nbsp;·&nbsp; {caseStudy.industry}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-semibold text-white leading-[1.12] mb-4 max-w-3xl">
              {caseStudy.title}
            </h1>

            {caseStudy.subtitle && (
              <p className="text-white/70 text-base sm:text-lg font-medium mb-5 max-w-2xl">
                {caseStudy.subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/75 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
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
                  <div key={metric.label} className="bg-white px-3 py-7 sm:px-8 sm:py-10 text-center">
                    <p className="text-xl sm:text-3xl lg:text-4xl font-heading font-bold gradient-brand-text leading-tight mb-1.5 sm:mb-2 break-words">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </p>
                    <p className="text-[10px] sm:text-sm text-[var(--color-text-muted)] leading-snug">{metric.label}</p>
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
            <SectionBlock label="Client Overview / Requirement">
              <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
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

          {(caseStudy.strategyPoints || caseStudy.strategy) && (
            <SectionBlock label="My Strategy & Approach">
              {caseStudy.strategyPoints ? (
                <ol className="space-y-7">
                  {caseStudy.strategyPoints.map((point, i) => (
                    <li key={i} className="flex gap-4 sm:gap-5">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">
                          {point.title}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {caseStudy.strategy}
                </p>
              )}
            </SectionBlock>
          )}

          {caseStudy.execution && !caseStudy.strategyPoints && (
            <SectionBlock label="Execution">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {caseStudy.execution}
              </p>
            </SectionBlock>
          )}

          {caseStudy.results && caseStudy.results.length > 0 && (
            <SectionBlock label="Results / Outcomes">
              <div className="space-y-3">
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

        </div>
      </section>

      {/* Major Campaigns — FFC only */}
      {caseStudy.campaigns && caseStudy.campaigns.length > 0 && (
        <section className="bg-[var(--color-surface-muted)] border-t border-[var(--color-border)] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10 sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
                Campaign Breakdown
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[var(--color-text-primary)] mb-3">
                Major Campaigns
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl">
                A snapshot of the 5 major activations executed under this engagement — each a standalone digital moment, collectively building FFC&apos;s national digital dominance.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {caseStudy.campaigns.map((campaign, i) => (
                <ScrollReveal key={campaign.name} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] card-shadow p-6 h-full">
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug pt-1">
                        {campaign.name}
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--color-border)]">
                      <div className="text-center">
                        <p className="text-base sm:text-lg font-heading font-bold gradient-brand-text leading-tight mb-1">
                          {campaign.impressions}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">Impressions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-base sm:text-lg font-heading font-bold gradient-brand-text leading-tight mb-1">
                          {campaign.videoViews}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">Video Views</p>
                      </div>
                      <div className="text-center">
                        <p className="text-base sm:text-lg font-heading font-bold gradient-brand-text leading-tight mb-1">
                          {campaign.followers}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">New Followers</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding gradient-brand text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Work Together</p>
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
