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
            className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-2"
            style={{ textWrap: 'balance' }}
          >
            {content.caseStudies.title}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {content.caseStudies.subtitle}
          </p>
        </div>

        {/* Minimal 3-Column Executive Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.caseStudies.projects.map((project, idx) => (
            <motion.article
              key={project.id}
              id={`case-study-${project.id}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  {project.index} · {project.category}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 space-y-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    {content.caseStudies.outcomeLabel}
                  </span>
                  <p className="font-sans text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    {project.outcome}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2">
                  {project.stack}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
