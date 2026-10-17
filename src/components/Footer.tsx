import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';
import { Language, t } from '../translations';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const content = t[lang];
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <>
      <footer className="pb-12 pt-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="liquid-glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="font-sans font-medium text-slate-700 dark:text-slate-300 text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
              <span>
                © {new Date().getFullYear()} {content.footer.summary}
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <a
                href="https://vizjourney.com"
                className="font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {content.footer.domain}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 font-mono">
              <button
                id="footer-privacy-btn"
                type="button"
                onClick={() => setIsLegalOpen(true)}
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {content.footer.privacyLink}
              </button>
              <span aria-hidden="true">·</span>
              <a
                href="mailto:chandra572gourav@proton.me"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                chandra572gourav@proton.me
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="#hero"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                {content.footer.backToTop}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy & Non-Commercial Notice Modal (EU / Germany Compliance) */}
      <AnimatePresence>
        {isLegalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLegalOpen(false)}
              className="fixed inset-0 bg-slate-950/40 dark:bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-modal-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-xl liquid-glass rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-slate-200/70 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl neo-inset flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3
                    id="legal-modal-title"
                    className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50"
                  >
                    {content.footer.legalModal.title}
                  </h3>
                </div>

                <button
                  id="close-legal-modal-btn"
                  type="button"
                  onClick={() => setIsLegalOpen(false)}
                  className="neo-btn p-2 rounded-xl text-slate-600 dark:text-slate-300 shrink-0"
                  aria-label={content.footer.legalModal.closeBtn}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-5">
                {content.footer.legalModal.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {sec.heading}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsLegalOpen(false)}
                  className="neo-btn px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                >
                  {content.footer.legalModal.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
