'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'
import { sendContactEmail } from '@/app/actions/contact'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  businessType: string
  problems: string
  monthlyRevenue: string
  currentMarketing: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  problems: '',
  monthlyRevenue: '',
  currentMarketing: '',
}

export default function ContactCTA() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const result = await sendContactEmail(form)
      if (result.success) {
        setState('success')
        setForm(initialForm)
        window.location.href = '/thank-you'
      } else {
        setState('error')
        setErrorMsg('Something went wrong. Please try again or contact directly.')
      }
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
              className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] card-shadow p-8 sm:p-10 space-y-6"
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
                <label htmlFor="problems" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  What specific problems are you facing with your business?
                  <span className="text-[var(--color-text-muted)] font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  id="problems"
                  name="problems"
                  rows={4}
                  value={form.problems}
                  onChange={handleChange}
                  placeholder="e.g. Low lead quality, high ad costs, inconsistent sales, poor ROAS, no clear marketing system..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm resize-none"
                />
              </div>

              <div>
                <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  What is your monthly revenue? <span className="text-[var(--color-brand-light)]">*</span>
                </label>
                <select
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  required
                  value={form.monthlyRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]/30 focus:border-[var(--color-brand-light)] transition-colors text-sm bg-[var(--color-surface)] appearance-none"
                >
                  <option value="" disabled>Select your monthly revenue</option>
                  <option value="<$10k">&lt;$10k</option>
                  <option value="$10k-$30k">$10k – $30k</option>
                  <option value="$30k-$50k">$30k – $50k</option>
                  <option value="$50k-$100k">$50k – $100k</option>
                  <option value="$100k-$250k">$100k – $250k</option>
                  <option value="$250k-$500k">$250k – $500k</option>
                  <option value="$500k-$1M">$500k – $1M</option>
                  <option value="$1M+">$1M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentMarketing" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Are you currently doing any kind of marketing? <span className="text-[var(--color-brand-light)]">*</span>
                </label>
                <textarea
                  id="currentMarketing"
                  name="currentMarketing"
                  required
                  rows={3}
                  value={form.currentMarketing}
                  onChange={handleChange}
                  placeholder="Type your answer"
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
