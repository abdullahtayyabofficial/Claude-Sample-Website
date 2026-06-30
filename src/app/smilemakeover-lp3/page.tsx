import type { Metadata } from 'next'
import SmileMakeoverLP3Content from '@/components/pages/SmileMakeoverLP3Content'

export const metadata: Metadata = {
  title: 'Case-Ready Smile Pipeline™ | Abdullah Tayyab',
  description:
    'We install your Case-Ready Smile Pipeline™ to generate qualified smile makeover consultations for your calendar - using ads, a pre-sell landing page, qualification flow, and follow-up automations. For cosmetic dental clinics doing $50k-$500k/month.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SmileMakeoverLP3() {
  return <SmileMakeoverLP3Content />
}
