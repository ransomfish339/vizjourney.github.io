import { motion } from 'motion/react';
import { Language, t } from '../translations';

interface TechStackProps {
  lang: Language;
}

export function TechStack({ lang }: TechStackProps) {
  const content = t[lang];

  return (
    <section id="expertise" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 px-2">
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
            {content.techStack.tag}
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {content.techStack.title}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {content.techStack.subtitle}
          </p>
        </div>

        {/* Clean 2x2 Neomorphic Glass Toolkit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.techStack.groups.map((group, idx) => (
            <motion.div
              key={idx}
              id={`tech-category-${idx + 1}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="neo-glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 tabular-nums">
                  <span>{group.index}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  {group.title}
                </h3>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {group.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 font-mono text-xs text-slate-700 dark:text-slate-300">
                {group.tools}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
