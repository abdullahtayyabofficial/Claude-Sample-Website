import type { CaseStudy } from '@/types'

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
}

// Renders only sections that have content — expanded in Step 5
export default function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-light)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-text-primary)] mb-4">
          {caseStudy.title}
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          {caseStudy.client} · {caseStudy.industry}
        </p>
      </header>

      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16 p-8 rounded-2xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
          {caseStudy.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-heading font-bold gradient-brand-text mb-1">
                {metric.prefix}{metric.value}{metric.suffix}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="prose prose-lg max-w-none space-y-12">
        {caseStudy.overview && (
          <section>
            <h2>Overview</h2>
            <p>{caseStudy.overview}</p>
          </section>
        )}
        {caseStudy.problem && (
          <section>
            <h2>The Problem</h2>
            <p>{caseStudy.problem}</p>
          </section>
        )}
        {caseStudy.strategy && (
          <section>
            <h2>Strategy</h2>
            <p>{caseStudy.strategy}</p>
          </section>
        )}
        {caseStudy.execution && (
          <section>
            <h2>Execution</h2>
            <p>{caseStudy.execution}</p>
          </section>
        )}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <section>
            <h2>Results</h2>
            <ul>
              {caseStudy.results.map((r) => (
                <li key={r.label}>
                  <strong>{r.label}:</strong> {r.value}
                </li>
              ))}
            </ul>
          </section>
        )}
        {caseStudy.learnings && (
          <section>
            <h2>Learnings</h2>
            <p>{caseStudy.learnings}</p>
          </section>
        )}
      </div>
    </article>
  )
}
