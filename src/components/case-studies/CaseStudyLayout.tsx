'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import type { CaseStudy, CaseStudyResultsTable } from '@/types'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

const EASE = [0.25, 0.4, 0.25, 1] as const

function ResultsTable({ table }: { table: CaseStudyResultsTable }) {
  return (
    <div>
      {table.intro && (
        <p className="text-[var(--color-text-secondary)] mb-5 text-sm leading-relaxed">{table.intro}</p>
      )}
      <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-surface-muted)]">
              {table.headers.map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-surface-muted)]/50 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-5 py-4 text-[var(--color-text-primary)]">{cell}</td>
                ))}
              </tr>
            ))}
            {table.totalRow && (
              <tr className="bg-gradient-to-r from-[var(--color-brand-dark)]/5 to-[var(--color-brand-light)]/5">
                {table.totalRow.map((cell, j) => (
                  <td key={j} className="px-5 py-4 font-bold text-[var(--color-text-primary)]">{cell}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
}

function ProofImageCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <div className="proof-img-border rounded-xl p-[2px]">
      <button
        onClick={onClick}
        className="group relative w-full aspect-[16/9] rounded-[10px] overflow-hidden bg-[var(--color-surface-muted)] block cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 700px"
        />
        {/* Watermark */}
        <div className="proof-watermark absolute inset-0 pointer-events-none" aria-hidden="true" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            Click to enlarge
          </span>
        </div>
      </button>
    </div>
  )
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const closeLightbox = useCallback(() => setLightboxSrc(null), [])

  const metaProofs = caseStudy.proofImages?.slice(0, 10) ?? []
  const ga4Proofs = caseStudy.proofImages?.slice(10) ?? []

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

          {caseStudy.problem && (
            <SectionBlock label="The Challenge">
              <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {caseStudy.problem}
              </p>
            </SectionBlock>
          )}

          {/* ── Strategy & Approach ── */}
          {(caseStudy.strategyPoints || caseStudy.strategy) && (
            <SectionBlock label="Strategy & Approach">
              {caseStudy.strategyPoints ? (
                <ol className="space-y-8">
                  {caseStudy.strategyPoints.map((point, i) => {
                    const parts = point.description.split('\n\n').filter(Boolean)
                    const intro = parts.length > 1 ? parts[0] : null
                    const bullets = parts.length > 1 ? parts.slice(1) : parts
                    return (
                      <li key={i} className="flex gap-4 sm:gap-5">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                            {point.title}
                          </h4>
                          {intro && (
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-3">
                              {intro}
                            </p>
                          )}
                          {bullets.length > 1 ? (
                            <ul className="space-y-2.5">
                              {bullets.map((bullet, bi) => {
                                const colonIdx = bullet.indexOf(':')
                                const hasLabel = colonIdx > 0 && colonIdx < 60
                                const label = hasLabel ? bullet.slice(0, colonIdx) : null
                                const body = hasLabel ? bullet.slice(colonIdx + 1).trim() : bullet
                                return (
                                  <li key={bi} className="flex gap-2.5 text-sm leading-relaxed">
                                    <span className="text-[var(--color-brand-light)] mt-1.5 shrink-0">•</span>
                                    <span className="text-[var(--color-text-secondary)]">
                                      {label && (
                                        <span className="font-semibold text-[var(--color-brand-light)]">{label}: </span>
                                      )}
                                      {body}
                                    </span>
                                  </li>
                                )
                              })}
                            </ul>
                          ) : (
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                              {bullets[0]}
                            </p>
                          )}
                        </div>
                      </li>
                    )
                  })}
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)]">
                    Results / Outcomes
                  </p>
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

          {caseStudy.resultsTable && (
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12 border-t border-[var(--color-border)]">
                <div className="lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)]">
                    Results / Outcomes
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <ResultsTable table={caseStudy.resultsTable} />
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

      {/* ── Proof of Work ── */}
      {caseStudy.proofImages && caseStudy.proofImages.length > 0 && (
        <section className="bg-[var(--color-surface-muted)] border-t border-[var(--color-border)] py-16 sm:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

            <ScrollReveal className="text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[var(--color-text-primary)]">
                Proof of Work{' '}
                <span className="gradient-brand-text">(Selective)</span>
              </h2>
            </ScrollReveal>

            {/* Campaigns Data — subheading only shown when GA4 data also exists */}
            {metaProofs.length > 0 && (
              <>
                {ga4Proofs.length > 0 && (
                  <ScrollReveal className="mb-6">
                    <h3 className="text-xl font-heading font-semibold text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-3">
                      Campaigns Data
                    </h3>
                  </ScrollReveal>
                )}
                <div className={`grid grid-cols-2 gap-5 ${ga4Proofs.length > 0 ? 'mb-16' : ''}`}>
                  {metaProofs.map((src, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <ProofImageCard src={src} alt={`Campaigns proof ${i + 1}`} onClick={() => setLightboxSrc(src)} />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}

            {/* Google Analytics Data */}
            {ga4Proofs.length > 0 && (
              <>
                <ScrollReveal className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-3">
                    Google Analytics Data
                  </h3>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-5">
                  {ga4Proofs.map((src, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <ProofImageCard src={src} alt={`GA4 proof ${i + 1}`} onClick={() => setLightboxSrc(src)} />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button — fixed top-right, never overlaps image */}
            <button
              onClick={closeLightbox}
              className="fixed top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-colors duration-100 z-10"
              aria-label="Close"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxSrc}
                alt="Proof of work enlarged"
                className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
              />
              {/* Watermark overlay persists in lightbox */}
              <div className="proof-watermark absolute inset-0 pointer-events-none rounded-xl" aria-hidden="true" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Outcome ── */}
      {caseStudy.outcome && (
        <section className="bg-white border-t border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-12">
                <div className="lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)]">
                    Outcome
                  </p>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  {caseStudy.outcome.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
