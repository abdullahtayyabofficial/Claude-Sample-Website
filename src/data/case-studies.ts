import type { CaseStudy } from '@/types'

// Populated once PDFs and case study data are provided
export const caseStudies: CaseStudy[] = []

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}
