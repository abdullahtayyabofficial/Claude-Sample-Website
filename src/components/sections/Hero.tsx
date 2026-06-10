'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import NodeNetwork from '@/components/ui/NodeNetwork'

const metrics = [
  { value: '₨30M+', label: 'Revenue Driven' },
  { value: '10,000+', label: 'Leads Generated' },
  { value: '4x-16x', label: 'Avg ROAS' },
]

const EASE = [0.25, 0.4, 0.25, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-white overflow-hidden noise-overlay"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(21,161,223,0.12) 0%, rgba(1,7,56,0.06) 55%, transparent 75%)',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(1,7,56,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* AI Pulse Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 self-start bg-white border border-[var(--color-border)] rounded-full px-3.5 py-1.5 mb-6 shadow-sm"
              {...fadeUp(0.02)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-light)] opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-light)]" />
              </span>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)] tracking-wide">
                Available for new clients
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-heading font-semibold text-[var(--color-text-primary)] leading-[1.08] mb-6"
              {...fadeUp(0.08)}
            >
              I Build{' '}
              <GradientText>AI-Powered Marketing Systems</GradientText>{' '}
              That Actually Scale
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg"
              {...fadeUp(0.16)}
            >
              Most marketing is guesswork dressed as strategy.
              I turn it into structured systems that drive predictable growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              {...fadeUp(0.24)}
            >
              <Button href="#contact" size="lg">
                Book a Call
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View Case Studies
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-3 gap-0 divide-x divide-[var(--color-border)]"
              {...fadeUp(0.32)}
            >
              {metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left pr-3 sm:pr-6 first:pl-0 pl-3 sm:pl-6">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold gradient-brand-text leading-none mb-1.5">
                    {m.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] font-medium leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo + Node Network ── */}
          <div className="relative hidden lg:flex items-center justify-center order-1 lg:order-2 h-[460px] sm:h-[540px] lg:h-[620px]">
            {/* Canvas node network fills the column */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <NodeNetwork />
              {/* Radial fade so it blends into white page */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 40%, white 85%)',
                }}
              />
            </div>

            {/* Floating photo card */}
            <motion.div
              className="relative z-10"
              style={{ y: parallaxY }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Gradient glow ring behind card */}
                <div
                  className="absolute -inset-3 rounded-[22px] blur-2xl opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, #010738 0%, #15a1df 100%)',
                  }}
                />

                {/* Card */}
                <div
                  className="relative rounded-[20px] overflow-hidden shadow-2xl"
                  style={{
                    width: '300px',
                    height: '375px',
                    border: '1.5px solid rgba(255,255,255,0.6)',
                  }}
                >
                  <Image
                    src="/images/hero/abdullah-tayyab.jpg"
                    alt="Abdullah Tayyab — Performance Marketer"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Bottom gradient */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-2/5"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(1,7,56,0.55) 0%, transparent 100%)',
                    }}
                  />

                  {/* Name badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/96 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="font-heading font-semibold text-[var(--color-text-primary)] text-sm leading-snug">
                        Abdullah Tayyab
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                        AI &amp; Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-[var(--color-brand-light)] to-transparent"
          style={{ height: '36px' }}
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
