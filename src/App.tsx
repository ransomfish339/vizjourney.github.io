import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Language } from './translations';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Consulting } from './components/Consulting';
import { CaseStudies } from './components/CaseStudies';
import { Methodology } from './components/Methodology';
import { TechStack } from './components/TechStack';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowBackToTop(latest > 600);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6] dark:bg-[#0C0F14] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 relative selection:bg-sky-500/20 dark:selection:bg-sky-400/20">
      {/* Subtle Ambient Light Blooms for Liquid Glass Refraction */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[34rem] h-[34rem] rounded-full bg-sky-300/25 dark:bg-sky-500/8 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-200/25 dark:bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] rounded-full bg-slate-300/30 dark:bg-slate-800/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar Contract Navigation */}
        <Navigation lang={lang} />

        {/* Main Content */}
        <main className="flex-1">
          <Hero
            lang={lang}
            onToggleLang={toggleLanguage}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />
          <Consulting lang={lang} />
          <CaseStudies lang={lang} />
          <Methodology lang={lang} />
          <TechStack lang={lang} />
          <ContactSection lang={lang} />
        </main>

        {/* Minimal Footer */}
        <Footer lang={lang} />
      </div>

      {/* Tactile Neomorphic Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            id="back-to-top-btn"
            href="#hero"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl neo-btn text-slate-800 dark:text-slate-200 flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
