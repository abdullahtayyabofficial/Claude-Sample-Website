import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'

export const metadata: Metadata = {
  title: 'Services | A Complete Marketing System Built to Drive Growth',
  description:
    'Meta Ads, Google Ads, AI Automation, SEO, Web Design, and Visual Design — everything built to work together as one performance-driven system.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
