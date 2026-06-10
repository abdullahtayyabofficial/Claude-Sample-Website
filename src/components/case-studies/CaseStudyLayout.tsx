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

function SectionBlock({ label, children, accent }: { label: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <ScrollReveal>
      <div className={`grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12 border-t border-[var(--color-border)] ${accent ? 'lg:items-start' : ''}`}>
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
      {/* ── Hero ── */}
      <section className="relative min-h-[58vh] lg:min-h-[66vh] flex flex-col justify-end overflow-hidden bg-[#010738] noise-overlay">
        {caseStudy.heroImage ? (
          <>
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.client}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010738] via-[#010738]/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 gradient-brand opacity-90" />
        )}

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/50 text-sm font-medium hover:text-white transition-colors mb-8"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>

            {/* Client + industry badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-light)]">
                {caseStudy.client}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs text-white/45 tracking-wide">{caseStudy.industry}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-semibold text-white leading-[1.1] mb-4 max-w-3xl">
              {caseStudy.title}
            </h1>

            {caseStudy.subtitle && (
              <p className="text-white/60 text-base sm:text-lg font-medium mb-6 max-w-2xl">
                {caseStudy.subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-5">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/8 text-white/65 border border-white/10 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics Strip ── */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="bg-white border-b border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className={`grid gap-px bg-[var(--color-border)] ${caseStudy.metrics.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white px-3 py-7 sm:px-8 sm:py-10 text-center group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-light)]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

      {/* ── Outcome Callout — "Lead with the win" ── */}
      {caseStudy.callout && (
        <section className="bg-[var(--color-surface-muted)] border-b border-[var(--color-border)] py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex gap-5 sm:gap-7 items-stretch">
                <div className="w-1 shrink-0 rounded-full" style={{ background: 'linear-gradient(180deg, #010738 0%, #15a1df 100%)' }} />
                <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-heading font-semibold text-[var(--color-text-primary)] leading-[1.3]">
                  {caseStudy.callout}
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Body Content ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {caseStudy.overview && (
            <SectionBlock label="Client Overview / Requirement">
              <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
                {caseStudy.overview}
              </p>
            </SectionBlock>
          )}

          {/* ── The Challenge — styled for narrative tension ── */}
          {caseStudy.problem && (
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12 border-t border-[var(--color-border)]">
                <div className="lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-2">
                    The Challenge
                  </p>
                  {/* Visual indicator — problem icon */}
                  <div className="hidden lg:flex mt-4 w-8 h-8 rounded-full bg-red-50 border border-red-100 items-center justify-center">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-red-400">
                      <path d="M8 3v5M8 11v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="bg-red-50/60 border border-red-100/80 rounded-2xl px-6 py-5">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                      {caseStudy.problem}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ── Strategy & Approach ── */}
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

          {/* ── Results — styled as payoff ── */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12 border-t border-[var(--color-border)]">
                <div className="lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-2">
                    Results / Outcomes
                  </p>
                  <div className="hidden lg:flex mt-4 w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 items-center justify-center">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-emerald-500">
                      <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="space-y-3">
                    {caseStudy.results.map((r, i) => (
                      <motion.div
                        key={r.label}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                        className="flex gap-4 bg-gradient-to-r from-emerald-50/70 to-transparent rounded-xl px-5 py-4 border border-emerald-100/60"
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
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

      {/* ── Major Campaigns — FFC only ── */}
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
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] card-shadow p-6 h-full hover:border-[var(--color-brand-light)]/40 transition-colors duration-200">
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

      {/* ── CTA — "You could be next" ── */}
      <section className="section-padding gradient-brand text-white relative overflow-hidden noise-overlay">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
              Your Business Could Be Next
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
              Ready to Build a System That Delivers Results Like These?
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Every result on this page started with one conversation. Let&apos;s talk about what&apos;s possible for your business.
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
