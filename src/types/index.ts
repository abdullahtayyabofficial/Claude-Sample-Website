export interface StrategyPoint {
  title: string
  description: string
}

export interface FfcCampaign {
  name: string
  impressions: string
  videoViews: string
  followers: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle?: string
  callout?: string
  client: string
  industry: string
  thumbnail: string
  heroImage?: string
  logo?: string
  tags: string[]
  overview?: string
  problem?: string
  strategy?: string
  strategyPoints?: StrategyPoint[]
  execution?: string
  results?: CaseStudyResult[]
  visuals?: string[]
  learnings?: string
  metrics?: CaseStudyMetric[]
  proofImages?: string[]
  campaigns?: FfcCampaign[]
}

export interface CaseStudyResult {
  label: string
  value: string
}

export interface CaseStudyMetric {
  label: string
  value: string
  prefix?: string
  suffix?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  items: string[]
  icon?: string
}

export interface ExpertiseItem {
  id: string
  title: string
  description: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: 'linkedin' | 'facebook' | 'instagram'
  href: string
}
