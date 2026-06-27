import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { ArrowRight, ArrowUp, Database, Code2, PieChart, TrendingUp, Zap, CheckCircle2, Rocket, Globe, ChevronRight, Linkedin, Github, Moon, Sun } from 'lucide-react';
import * as THREE from 'three';
import { t, Language } from './translations';

function BackgroundScene({ isDarkMode }: { isDarkMode: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation for the starry sky
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      
      // Subtle mouse parallax
      const targetX = state.pointer.x * 0.1;
      const targetY = state.pointer.y * 0.1;
      
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.5 : 1.5} />
      <group ref={groupRef}>
        {isDarkMode ? (
          <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        ) : (
          <Sparkles count={1000} scale={20} size={2} speed={0.4} opacity={0.2} color="#4f46e5" />
        )}
      </group>
    </>
  );
}

function LiquidButton({ href, children, variant = 'primary', className = '' }: { href: string, children: React.ReactNode, variant?: 'primary' | 'secondary', className?: string }) {
  const baseClasses = "relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg";
  
  const variants = {
    primary: {
      className: "bg-black dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white",
    },
    secondary: {
      className: "bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black",
    }
  };

  const v = variants[variant];

  return (
    <motion.a 
      href={href} 
      className={`${baseClasses} ${v.className} ${className}`}
      whileTap={{ scale: 0.85, rotate: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}

function NotFoundContent({ content }: { content: typeof t.en.notFound }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">{content.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-10 text-lg">
          {content.desc}
        </p>
        <LiquidButton href="/" variant="primary">
          {content.back}
        </LiquidButton>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [lang, setLang] = useState<Language>('en');

  const content = t[lang];

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isNotFound = currentPath !== '/' && currentPath !== '/index.html' && currentPath !== '/vizjourney.github.io' && currentPath !== '/vizjourney.github.io/';
  
  // Scroll Parallax Hooks
  const { scrollY, scrollYProgress } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  const glowY1 = useTransform(scrollY, [0, 3000], [0, -600]);
  const glowY2 = useTransform(scrollY, [0, 3000], [0, 600]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Refined animations with spring physics
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-sans selection:bg-indigo-500/30 transition-colors duration-500">
      
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <BackgroundScene isDarkMode={isDarkMode} />
          </Suspense>
        </Canvas>
      </div>

      {/* Ambient Parallax Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: glowY1 }} className="absolute top-[20%] left-[5%] w-[30rem] h-[30rem] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px]" />
        <motion.div style={{ y: glowY2 }} className="absolute top-[60%] right-[5%] w-[40rem] h-[40rem] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[150px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[100] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 transition-colors duration-500 mt-1">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 font-bold text-2xl tracking-tighter"
              >
                <a href="#" className="hover:opacity-80 transition-opacity">
                  GC<span className="text-indigo-500">.</span>
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#process" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{content.nav.process}</a>
                <a href="#expertise" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{content.nav.techStack}</a>
                <a href="#consulting" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{content.nav.consulting}</a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <button
                  onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                  className="px-2 py-1 text-xs font-bold rounded-md bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors uppercase"
                >
                  {lang === 'en' ? 'DE' : 'EN'}
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <LiquidButton href="mailto:chandra572gourav@proton.me" variant="primary" className="!py-2 !px-6 text-sm hidden md:flex">
                  {content.nav.letsTalk}
                </LiquidButton>
              </motion.div>
            </div>
          </div>
        </nav>

        {isNotFound ? (
          <NotFoundContent content={content.notFound} />
        ) : (
          <>
            {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-4xl mx-auto w-full"
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-200 mb-8 transition-colors duration-500">
                <Zap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                {content.hero.tagline}
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-500">
                {content.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                  {content.hero.title2}
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-500">
                {content.hero.subtitle}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-10 text-indigo-600 dark:text-indigo-400 font-medium italic text-sm transition-colors duration-500">
                <span className="w-8 h-px bg-indigo-300 dark:bg-indigo-800"></span>
                {content.hero.quote}
                <span className="w-8 h-px bg-indigo-300 dark:bg-indigo-800"></span>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
                <LiquidButton href="#process" variant="primary" className="w-full sm:w-auto">
                  {content.hero.explore}
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </LiquidButton>
                <LiquidButton href="mailto:chandra572gourav@proton.me" variant="secondary" className="w-full sm:w-auto">
                  {content.hero.letsTalk}
                </LiquidButton>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 md:gap-16 border-t border-gray-200 dark:border-white/10 pt-10 transition-colors duration-500">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">5+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">{content.hero.yearsExp}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">50+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">{content.hero.projects}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">30+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">{content.hero.clients}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* How I Work (Methodology) */}
        <section id="process" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">{content.methodology.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
                {content.methodology.subtitle}
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 dark:bg-white/10 -translate-y-1/2 hidden md:block transition-colors duration-500"></div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-4 gap-12 relative z-10"
              >
                {[
                  { icon: Database, color: "text-indigo-500 dark:text-indigo-400", title: content.methodology.steps[0].title, desc: content.methodology.steps[0].desc },
                  { icon: TrendingUp, color: "text-purple-500 dark:text-purple-400", title: content.methodology.steps[1].title, desc: content.methodology.steps[1].desc },
                  { icon: PieChart, color: "text-pink-500 dark:text-pink-400", title: content.methodology.steps[2].title, desc: content.methodology.steps[2].desc },
                  { icon: Rocket, color: "text-orange-500 dark:text-orange-400", title: content.methodology.steps[3].title, desc: content.methodology.steps[3].desc }
                ].map((step, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="relative">
                    <div className="w-16 h-16 bg-white dark:bg-black/50 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 mx-auto md:mx-0 transition-colors duration-500">
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center md:text-left text-gray-900 dark:text-white transition-colors duration-500">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center md:text-left text-sm leading-relaxed transition-colors duration-500">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="expertise" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">{content.techStack.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
                {content.techStack.subtitle}
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Globe, color: "text-indigo-500 dark:text-indigo-400", title: content.techStack.categories[0].title, items: content.techStack.categories[0].items },
                { icon: PieChart, color: "text-purple-500 dark:text-purple-400", title: content.techStack.categories[1].title, items: content.techStack.categories[1].items },
                { icon: Database, color: "text-pink-500 dark:text-pink-400", title: content.techStack.categories[2].title, items: content.techStack.categories[2].items },
                { icon: TrendingUp, color: "text-blue-500 dark:text-blue-400", title: content.techStack.categories[3].title, items: content.techStack.categories[3].items }
              ].map((category, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp} 
                  className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
                  <ul className="space-y-6">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <div className="font-bold text-gray-900 dark:text-white mb-1">{item.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.desc}</div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 mb-3 pl-3 border-l-2 border-indigo-500 leading-relaxed">
                          {item.accomplishment}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, t) => (
                            <span key={t} className="text-[10px] px-2 py-1 bg-gray-200 dark:bg-white/10 rounded-md text-gray-700 dark:text-gray-300 font-medium">{tag}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Consulting */}
        <section id="consulting" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">{content.consulting.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
                {content.consulting.subtitle}
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                { icon: Globe, color: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-100 dark:bg-indigo-900/30", title: content.consulting.services[0].title, desc: content.consulting.services[0].desc },
                { icon: TrendingUp, color: "text-green-500 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30", title: content.consulting.services[1].title, desc: content.consulting.services[1].desc },
                { icon: PieChart, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30", title: content.consulting.services[2].title, desc: content.consulting.services[2].desc },
                { icon: Database, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30", title: content.consulting.services[3].title, desc: content.consulting.services[3].desc }
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all flex flex-col sm:flex-row gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} border border-gray-200 dark:border-white/5 flex items-center justify-center flex-shrink-0 transition-colors duration-500`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-500">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 relative border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                { title: content.coreValues[0].title, desc: content.coreValues[0].desc },
                { title: content.coreValues[1].title, desc: content.coreValues[1].desc },
                { title: content.coreValues[2].title, desc: content.coreValues[2].desc }
              ].map((val, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2 justify-center md:justify-start transition-colors duration-500">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> {val.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-500">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-950/50 -z-10 transition-colors duration-500"></div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 p-12 rounded-[40px] bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.1)] dark:shadow-[0_0_50px_rgba(79,70,229,0.2)] transition-colors duration-500"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center md:text-left text-gray-900 dark:text-white transition-colors duration-500">
              {content.cta.title1} <br className="hidden md:block" />
              {content.cta.title2}
            </h2>
            <LiquidButton href="mailto:chandra572gourav@proton.me" variant="primary" className="px-10">
              {content.cta.button}
            </LiquidButton>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-white/10 pt-20 pb-10 px-6 relative bg-white/50 dark:bg-black/50 backdrop-blur-lg transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">{content.footer.readyToScale}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm transition-colors duration-500">
                  {content.footer.description}
                </p>
                <a href="mailto:chandra572gourav@proton.me" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                  {content.footer.sendEmail}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">{content.footer.navTitle}</h4>
                <ul className="space-y-4">
                  <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{content.nav.process}</a></li>
                  <li><a href="#expertise" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{content.nav.techStack}</a></li>
                  <li><a href="#consulting" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{content.nav.consulting}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">{content.footer.linksTitle}</h4>
                <ul className="space-y-4">
                  <li><a href="https://www.linkedin.com/in/gouravchandra" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                  <li><a href="https://github.com/ransomfish339" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                  <li><a href="https://www.kaggle.com/hydravi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Code2 className="w-4 h-4" /> Kaggle</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-white/10 gap-6 transition-colors duration-500">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} {content.footer.rights}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{content.footer.privacy}</a>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{content.footer.terms}</a>
              </div>
            </div>
          </div>
        </footer>
          </>
        )}
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
