import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'

export const metadata: Metadata = {
  title: 'Services — Performance Marketing & Full-Stack Growth',
  description:
    'Performance marketing and media buying delivered directly by Abdullah Tayyab, plus a trusted network covering AI automation, SEO, web design, and visual design.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
