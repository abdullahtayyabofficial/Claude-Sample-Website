import type { Metadata } from 'next'
import ExpertiseContent from '@/components/pages/ExpertiseContent'

export const metadata: Metadata = {
  title: 'Expertise | Full-Stack Performance Marketing',
  description:
    'Deep expertise across Meta Ads, Google Ads, conversion tracking, strategy, media planning, creative direction, TikTok, LinkedIn, and funnel building.',
}

export default function ExpertisePage() {
  return <ExpertiseContent />
}
