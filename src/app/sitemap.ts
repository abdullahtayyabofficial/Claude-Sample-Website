import type { MetadataRoute } from 'next'
import { getCaseStudySlugs } from '@/data/case-studies'

const BASE = 'https://abdullahtayyab.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getCaseStudySlugs()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1.0, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/expertise`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/services`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/case-studies`, priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
  ]

  const caseStudyRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/case-studies/${slug}`,
    priority: 0.7,
    changeFrequency: 'yearly',
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
