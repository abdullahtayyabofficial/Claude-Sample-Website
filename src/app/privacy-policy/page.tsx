import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for abdullahtayyab.com',
}

// Privacy policy — content to be provided
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-heading font-semibold text-[var(--color-text-primary)] mb-6">
          Privacy Policy
        </h1>
        <p className="text-[var(--color-text-muted)]">
          Privacy policy content will be added here.
        </p>
      </div>
    </div>
  )
}
