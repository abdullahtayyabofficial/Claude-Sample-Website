import type { Metadata } from 'next'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: "Thank You — Message Received",
  description: "Your message has been received. Abdullah Tayyab will be in touch within 24 hours.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-9 h-9">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
          Message Received. <GradientText>Thank You.</GradientText>
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg mb-8">
          I&apos;ll review your details and get back to you within 24 hours. Looking forward to the conversation.
        </p>
        <Button href="/" variant="secondary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
