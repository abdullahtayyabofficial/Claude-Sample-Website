import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'

export const metadata: Metadata = {
  title: 'About — Performance Marketer & Media Buyer',
  description:
    "Learn about Abdullah Tayyab's background, career, and approach — 2+ years managing performance marketing across Meta, Google, TikTok, and LinkedIn.",
}

export default function AboutPage() {
  return <AboutContent />
}
