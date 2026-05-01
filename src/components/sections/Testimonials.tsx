'use client'

import { useRef, useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import { testimonials } from '@/data/testimonials'

// Duplicate for seamless infinite loop
const allItems = [...testimonials, ...testimonials]

function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="w-7 h-5" aria-hidden>
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.667 3.6 7.867 6.267 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.667 3.6 27.867 6.267 27.2 10.4H32V24H20z"
        fill="var(--color-brand-light)"
        fillOpacity="0.18"
      />
    </svg>
  )
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  const stripRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
            What People <GradientText>Say</GradientText>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
            Real feedback from clients and professionals I&apos;ve worked with.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-bleed scrolling strip */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={stripRef}
          className="flex gap-5"
          style={{
            width: 'max-content',
            animation: 'scroll-left 48s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {allItems.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[340px] sm:w-[380px] shrink-0 bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] p-7 flex flex-col gap-4 hover:border-[var(--color-brand-light)]/40 transition-colors duration-300"
            >
              <QuoteIcon />
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                {/* Initials avatar */}
                <div
                  className="w-9 h-9 rounded-full gradient-brand flex items-center justify-center shrink-0"
                >
                  <span className="text-white text-xs font-bold">
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-[var(--color-text-primary)] text-sm leading-none mb-0.5">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
                {/* Star rating */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} viewBox="0 0 12 12" fill="var(--color-brand-light)" className="w-3 h-3">
                      <path d="M6 1l1.4 2.9L11 4.4l-2.5 2.4.6 3.4L6 8.7 2.9 10.2l.6-3.4L1 4.4l3.6-.5L6 1z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
