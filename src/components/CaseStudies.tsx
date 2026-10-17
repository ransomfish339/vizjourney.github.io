import { motion } from 'motion/react';
import { Language, t } from '../translations';

interface CaseStudiesProps {
  lang: Language;
}

export function CaseStudies({ lang }: CaseStudiesProps) {
  const content = t[lang];

  return (
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 px-2">
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
            {content.caseStudies.tag}
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {content.caseStudies.title}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {content.caseStudies.subtitle}
          </p>
        </div>

        {/* Clean Story-Driven Case Studies (No Stats, Unboxed Metadata) */}
        <div className="space-y-6">
          {content.caseStudies.projects.map((project, idx) => (
            <motion.article
              key={project.id}
              id={`case-study-${project.id}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="liquid-glass rounded-3xl p-7 sm:p-10"
            >
              {/* Top Kicker & Stack Metadata (Unboxed with middle-dot separators) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-200/70 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>
                  {project.index} · {project.category}
                </span>
                <span>{project.stack}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-8">
                {project.title}
              </h3>

              {/* 3-Column Plain-English Narrative (Challenge -> Action -> Result) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                    01 / {content.caseStudies.challengeLabel}
                  </div>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                    02 / {content.caseStudies.solutionLabel}
                  </div>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                    03 / {content.caseStudies.resultLabel}
                  </div>
                  <p className="font-sans text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
