import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudy, getCaseStudySlugs } from '@/data/case-studies'
import CaseStudyLayout from '@/components/case-studies/CaseStudyLayout'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | Case Study`,
    description: cs.overview ?? `Case study: ${cs.title}`,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  return <CaseStudyLayout caseStudy={cs} />
}
