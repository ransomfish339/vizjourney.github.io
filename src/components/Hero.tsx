import { motion } from 'motion/react';
import { ArrowRight, ArrowDown, Sun, Moon } from 'lucide-react';
import { Language, t } from '../translations';

interface HeroProps {
  lang: Language;
  onToggleLang: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Hero({ lang, onToggleLang, isDarkMode, onToggleDarkMode }: HeroProps) {
  const content = t[lang];

  return (
    <section id="hero" className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Minimal Personal Info & Tactile Neomorphic Utility Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 tracking-tight">
            {content.hero.role}
          </p>

          {/* Tactile Neomorphic Controls (Language & Surface Mode) */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <div className="neo-inset p-1 rounded-xl flex items-center gap-1">
              <button
                id="lang-en-btn"
                type="button"
                onClick={() => lang !== 'en' && onToggleLang()}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'neo-btn text-slate-900 dark:text-slate-100'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                id="lang-de-btn"
                type="button"
                onClick={() => lang !== 'de' && onToggleLang()}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap shrink-0 ${
                  lang === 'de'
                    ? 'neo-btn text-slate-900 dark:text-slate-100'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                DE
              </button>
            </div>

            <button
              id="theme-toggle-btn"
              type="button"
              onClick={onToggleDarkMode}
              className="neo-btn p-2 rounded-xl text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0"
              aria-label="Toggle Light and Dark Surface"
              title="Toggle Light / Dark Surface"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Main Liquid Glass & Soft Neomorphic Hero Surface */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="liquid-glass rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Subtle internal refractive sheen */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-400/15 dark:bg-sky-500/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              {content.hero.title1}{' '}
              <span className="font-light text-slate-600 dark:text-slate-300">
                {content.hero.title2}
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10">
              {content.hero.subtitle}
            </p>

            {/* Primary & Secondary Tactile Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="hero-contact-btn"
                href="#contact"
                className="neo-btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-medium whitespace-nowrap shrink-0"
              >
                <span>{content.hero.letsTalk}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-explore-btn"
                href="#consulting"
                className="neo-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap shrink-0"
              >
                <span>{content.hero.explore}</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Full-Width 4-Column Tactile Summary Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.hero.quickFacts.map((fact, idx) => (
            <div
              key={idx}
              className="neo-glass-card rounded-2xl p-5 flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                {fact.label}
              </span>
              <span className="font-display text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
