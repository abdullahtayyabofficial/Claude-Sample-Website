import type { Metadata } from 'next'
import SmileMakeoverLPContent from '@/components/pages/SmileMakeoverLPContent'

export const metadata: Metadata = {
  title: 'Case-Ready Smile Pipeline™ | Abdullah Tayyab',
  description:
    'We install your Case-Ready Smile Pipeline™ to fill your calendar with qualified smile makeover consultations. For cosmetic dental clinics doing $50k–$500k/month.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SmileMakeoverLP() {
  return <SmileMakeoverLPContent />
}
