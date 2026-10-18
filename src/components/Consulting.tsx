import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language, t } from '../translations';

interface ConsultingProps {
  lang: Language;
}

export function Consulting({ lang }: ConsultingProps) {
  const content = t[lang];
  const [selectedId, setSelectedId] = useState<string>('all');

  const filteredServices =
    selectedId === 'all'
      ? content.consulting.services
      : content.consulting.services.filter((s) => s.id === selectedId);

  return (
    <section id="consulting" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header + Tactile Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 px-2">
          <div>
            <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
              {content.consulting.tag}
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-2"
              style={{ textWrap: 'balance' }}
            >
              {content.consulting.title}
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              {content.consulting.subtitle}
            </p>
          </div>

          {/* Interactive Neomorphic Filter Control */}
          <div className="neo-inset p-1.5 rounded-2xl flex flex-wrap items-center gap-1 self-start">
            <button
              type="button"
              onClick={() => setSelectedId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                selectedId === 'all'
                  ? 'neo-btn text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {content.consulting.filterAll}
            </button>
            {content.consulting.services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedId(service.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  selectedId === service.id
                    ? 'neo-btn text-slate-900 dark:text-slate-100'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {service.category}
              </button>
            ))}
          </div>
        </div>

        {/* Concise Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                id={`consulting-service-${service.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`neo-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between ${
                  filteredServices.length === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                    {service.number} · {service.category}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {service.deliverables}
                  </span>

                  <a
                    href="#contact"
                    className="neo-btn px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap shrink-0 self-start sm:self-auto"
                  >
                    <span>{content.consulting.inquireAction}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
