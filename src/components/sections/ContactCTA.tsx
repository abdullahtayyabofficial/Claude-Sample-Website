'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  message: '',
}

export default function ContactCTA() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')

      setState('success')
      setForm(initialForm)
      window.location.href = '/thank-you'
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Please try again or contact directly.')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-light)] mb-3">
              Let&apos;s Talk
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
              Ready to Build a System That{' '}
              <GradientText>Actually Scales?</GradientText>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Tell me about your business and where you want to go. I&apos;ll be in touch within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-[var(--color-border)] card-shadow p-8 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Full Name <span className="text-[var(--color-brand-light)]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Email Address <span className="text-[var(--color-brand-light)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Business Type <span className="text-[var(--color-brand-light)]">*</span>
                  </label>
                  <input
                    id="businessType"
                    name="businessType"
                    type="text"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    placeholder="e.g. SaaS, eCommerce, Agency"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Message <span className="text-[var(--color-brand-light)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business, your goals, and where you're stuck..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full justify-center"
                disabled={state === 'submitting'}
              >
                {state === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-center text-[var(--color-text-muted)]">
                No spam. No pitch calls. Just a real conversation about your growth.
              </p>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
