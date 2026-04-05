import { useState, useEffect, useRef, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { ArrowRight, Database, Code2, PieChart, TrendingUp, Zap, CheckCircle2, Rocket, Globe, ChevronRight, Linkedin, Github, Moon, Sun } from 'lucide-react';
import * as THREE from 'three';

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

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 font-bold text-2xl tracking-tighter"
              >
                GC<span className="text-indigo-500">.</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#expertise" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Tech Stack</a>
                <a href="#process" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Process</a>
                <a href="#consulting" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Consulting</a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a href="mailto:chandra572gourav@proton.me" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-200 mb-8 transition-colors duration-500">
                  <Zap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  Gourav Chandra
                </motion.span>
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-500">
                  Bridging the gap between <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                    Data & Strategy.
                  </span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-500">
                  Transforming complex data into actionable strategies and scalable e-commerce solutions. Driving measurable growth through technical architecture and business intelligence.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10 text-indigo-600 dark:text-indigo-400 font-medium italic text-sm transition-colors duration-500">
                  <span className="w-8 h-px bg-indigo-300 dark:bg-indigo-800"></span>
                  "Data is the compass, strategy is the map."
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                  <a href="#expertise" className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Explore Solutions
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="mailto:chandra572gourav@proton.me" className="w-full sm:w-auto bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-all text-center">
                    Let's Talk
                  </a>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-white/10 pt-10 transition-colors duration-500">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">5+</span>
                    </div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">50+</span>
                    </div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects Delivered</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                      <Database className="w-4 h-4" />
                      <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">30+</span>
                    </div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Happy Clients</p>
                  </div>
                </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">Tech Stack.</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
                The modern tools and technologies powering scalable web applications and data-driven solutions.
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
                { icon: Globe, color: "text-indigo-500 dark:text-indigo-400", title: "E-Commerce & Web", items: [
                  { name: "Shopware 6", desc: "Theme customizations & Rule Builder", accomplishment: "Successfully managed and scaled 20+ live e-commerce product pages across multiple regions.", tags: ["Twig", "Tailwind CSS", "HTML/CSS"] },
                  { name: "Web Development", desc: "Frontend & custom landing pages", accomplishment: "Engineered high-converting promotional landing pages and marketing funnels for global campaigns.", tags: ["JavaScript", "APIs", "Marketing Funnels"] }
                ]},
                { icon: PieChart, color: "text-purple-500 dark:text-purple-400", title: "Data & Analytics", items: [
                  { name: "Business Intelligence", desc: "Executive KPI dashboards", accomplishment: "Developed executive-level KPI dashboards tracking day-to-day revenue, costs, and inventory.", tags: ["Power BI", "DAX", "M Query"] },
                  { name: "Advanced Modeling", desc: "End-to-end pricing models", accomplishment: "Built end-to-end dynamic pricing models factoring competitor analysis across global markets.", tags: ["Excel", "Competitor Analysis", "Forecasting"] }
                ]},
                { icon: Database, color: "text-pink-500 dark:text-pink-400", title: "Databases & Backend", items: [
                  { name: "Data Management", desc: "Fetching & structuring data", accomplishment: "Architected robust data pipelines to fetch and structure complex datasets for cross-regional analysis.", tags: ["SQL", "MongoDB", "PHP"] },
                  { name: "Automation", desc: "SFTP/FTP & data pipelines", accomplishment: "Automated critical data transfers and API workflows, eliminating manual operational bottlenecks.", tags: ["Python", "Scripting", "API Integrations"] }
                ]},
                { icon: TrendingUp, color: "text-blue-500 dark:text-blue-400", title: "Global Operations", items: [
                  { name: "Marketplaces", desc: "Multi-regional sales analysis", accomplishment: "Optimized sales and return report analysis across diverse omnichannel platforms.", tags: ["Global Marketplaces", "D2C Webshops", "Omnichannel"] },
                  { name: "Strategy", desc: "Dynamic pricing & inventory", accomplishment: "Implemented data-driven inventory forecasting and pricing strategies for multi-regional markets.", tags: ["Multi-Regional", "Cross-Border", "Global Markets"] }
                ]}
              ].map((category, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all group shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
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

        {/* How I Work */}
        <section id="process" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">Methodology.</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg transition-colors duration-500">
                A proven framework for solving complex business challenges.
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
                  { icon: Database, color: "text-indigo-500 dark:text-indigo-400", title: "Discovery", desc: "Aligning with business goals, identifying current challenges, and auditing available data infrastructure." },
                  { icon: TrendingUp, color: "text-purple-500 dark:text-purple-400", title: "Analysis", desc: "Uncovering patterns, operational inefficiencies, and strategic opportunities for growth." },
                  { icon: PieChart, color: "text-pink-500 dark:text-pink-400", title: "Strategy", desc: "Architecting clear, data-backed roadmaps designed for measurable impact." },
                  { icon: Rocket, color: "text-orange-500 dark:text-orange-400", title: "Execution", desc: "Deploying solutions, monitoring key performance indicators, and optimizing for continuous improvement." }
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight transition-colors duration-500">Consulting & Advisory.</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-500">
                Partnering with organizations to solve complex operational challenges. Delivering specialized expertise across web development, data analytics, and business automation.
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
                { icon: Globe, color: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-100 dark:bg-indigo-900/30", title: "E-Commerce Architecture", desc: "Architecting and managing scalable Shopware infrastructures. Deploying high-converting landing pages and marketing funnels to ensure a seamless digital experience." },
                { icon: TrendingUp, color: "text-green-500 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30", title: "Pricing Strategy & Modeling", desc: "Developing dynamic pricing models for multi-regional global markets. Leveraging competitor analysis to optimize margins across diverse omnichannel marketplaces." },
                { icon: PieChart, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30", title: "Business Intelligence", desc: "Designing executive-level KPI dashboards for comprehensive operational tracking. Enabling real-time visibility into revenue targets and inventory forecasting." },
                { icon: Database, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30", title: "Data Automation", desc: "Streamlining backend operations through intelligent automation. Replacing manual workflows with robust Python and SQL pipelines and automated data transfers." }
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
                { title: "Transparency", desc: "Delivering transparent data insights and straightforward strategic advice, ensuring complete clarity on business performance." },
                { title: "Practicality", desc: "Focusing on implementable tools and strategies that drive tangible results in real-world business environments." },
                { title: "Impact", desc: "Dedicated to a single objective: maximizing business profitability and operational efficiency." }
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
              HAVE A PROJECT IN MIND? <br className="hidden md:block" />
              LET'S TALK ABOUT IT.
            </h2>
            <a href="mailto:chandra572gourav@proton.me" className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              EMAIL ME
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-white/10 pt-20 pb-10 px-6 relative bg-white/50 dark:bg-black/50 backdrop-blur-lg transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">Ready to scale?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm transition-colors duration-500">
                  Currently accepting new partnerships. For strategic data solutions and e-commerce architecture, let's start a conversation.
                </p>
                <a href="mailto:chandra572gourav@proton.me" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                  Send an email
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Navigation</h4>
                <ul className="space-y-4">
                  <li><a href="#expertise" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Tech Stack</a></li>
                  <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Methodology</a></li>
                  <li><a href="#consulting" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Consulting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Links</h4>
                <ul className="space-y-4">
                  <li><a href="https://www.linkedin.com/in/gouravchandra" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                  <li><a href="https://github.com/ransomfish339" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                  <li><a href="https://www.kaggle.com/hydravi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"><Code2 className="w-4 h-4" /> Kaggle</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-white/10 gap-6 transition-colors duration-500">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gourav Chandra. All rights reserved.</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
