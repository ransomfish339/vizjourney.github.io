import { Language, t } from '../translations';

interface NavigationProps {
  lang: Language;
}

export function Navigation({ lang }: NavigationProps) {
  const content = t[lang];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto liquid-glass rounded-2xl px-6 py-3.5 flex items-center justify-between gap-8 pointer-events-auto transition-all duration-200">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#hero"
          id="nav-brand-link"
          className="font-display text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0"
        >
          Gourav Chandra
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a
            href="#consulting"
            id="nav-link-consulting"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            {content.nav.solutions}
          </a>
          <a
            href="#work"
            id="nav-link-work"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            {content.nav.work}
          </a>
          <a
            href="#process"
            id="nav-link-process"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            {content.nav.process}
          </a>
          <a
            href="#expertise"
            id="nav-link-expertise"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            {content.nav.techStack}
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            id="nav-cta-btn"
            href="#contact"
            className="neo-btn-primary px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap shrink-0"
          >
            {content.nav.letsTalk}
          </a>
        </div>
      </div>
    </header>
  );
}
