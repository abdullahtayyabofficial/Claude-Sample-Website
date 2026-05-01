import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <Card className="overflow-hidden h-full">
        {caseStudy.thumbnail && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading font-semibold text-lg text-[var(--color-text-primary)] mb-2">
            {caseStudy.title}
          </h3>
          {caseStudy.overview && (
            <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
              {caseStudy.overview}
            </p>
          )}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
              {caseStudy.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label}>
                  <p className="text-lg font-heading font-bold gradient-brand-text">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
