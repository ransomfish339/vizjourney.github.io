import { motion } from 'motion/react';
import { Language, t } from '../translations';

interface MethodologyProps {
  lang: Language;
}

export function Methodology({ lang }: MethodologyProps) {
  const content = t[lang];

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 px-2">
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
            {content.methodology.tag}
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {content.methodology.title}
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {content.methodology.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.methodology.steps.map((step, idx) => (
            <motion.div
              key={idx}
              id={`methodology-step-${idx + 1}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="neo-glass-card rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6 tabular-nums">
                  {step.step}
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2.5">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
