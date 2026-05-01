import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'

export const metadata: Metadata = {
  title: 'About Abdullah Tayyab | Performance Marketer & Media Buyer',
  description:
    "Learn about Abdullah Tayyab's experience in performance marketing, AI-driven systems, and scalable growth strategies. 2+ years, ₨100M+ revenue driven.",
}

export default function AboutPage() {
  return <AboutContent />
}
