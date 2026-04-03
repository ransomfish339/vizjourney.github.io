import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, ArrowRight, Database, Code2, PieChart, Settings, TrendingUp, Zap, CheckCircle2, Rocket, Shield, Globe, ChevronRight, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 font-bold text-2xl tracking-tighter"
            >
              GC<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#expertise" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Competencies</a>
              <a href="#process" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Process</a>
              <a href="#consulting" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Consulting</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="mailto:chandra572gourav@proton.me" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-full text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-all shadow-lg shadow-black/10 dark:shadow-white/10">
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[95vh] flex items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-8 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-indigo-500" />
                Hi, I'm Gourav
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white">
                Bridging the gap between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                  Data & Strategy.
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help businesses make sense of their data and build practical, scalable solutions that drive real growth. No fluff, just results.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10 text-indigo-600 dark:text-indigo-400 font-medium italic text-sm">
                <span className="w-8 h-px bg-indigo-200 dark:bg-indigo-800"></span>
                "Data is the compass, strategy is the map."
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <a href="#expertise" className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-black/10 dark:shadow-white/10">
                  Explore Solutions
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:chandra572gourav@proton.me" className="w-full sm:w-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center">
                  Let's Talk
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-800 pt-10">
                <div>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">5+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">50+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects Delivered</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">30+</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl aspect-square">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Data Visualization" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent mix-blend-overlay"></div>
              </div>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
              >
                <PieChart className="w-8 h-8 text-indigo-600 mb-2" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Analytics</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-40 h-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center gap-3 border border-gray-100 dark:border-gray-700 z-20"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Growth</div>
                  <div className="text-[10px] text-gray-400">Focused</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="expertise" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Core Competencies.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              The tools and technologies I use to turn raw data into actionable business strategies.
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
              { icon: Database, color: "text-indigo-600 dark:text-indigo-400", title: "Data & Analysis", items: [
                { name: "SQL", desc: "Extracting and managing data", tags: ["PostgreSQL", "MySQL"] },
                { name: "Excel", desc: "Advanced modeling & macros", tags: ["VBA", "Pivot Tables"] }
              ]},
              { icon: Code2, color: "text-purple-600 dark:text-purple-400", title: "Programming & Web", items: [
                { name: "Python", desc: "Automation & Data Science", tags: ["Pandas", "Scikit-Learn"] },
                { name: "JavaScript", desc: "Building web applications", tags: ["React", "Node.js"] }
              ]},
              { icon: PieChart, color: "text-pink-600 dark:text-pink-400", title: "Business Intelligence", items: [
                { name: "Power BI", desc: "Interactive dashboards", tags: ["Visualization"] },
                { name: "Strategy", desc: "Data-driven growth plans", tags: ["Consulting"] }
              ]},
              { icon: Settings, color: "text-blue-600 dark:text-blue-400", title: "Tools & Operations", items: [
                { name: "Git", desc: "Version control & collaboration", tags: ["GitHub"] },
                { name: "Cloud", desc: "Infrastructure & deployment", tags: ["AWS", "Docker"] }
              ]}
            ].map((category, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
                <ul className="space-y-6">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <div className="font-bold text-gray-900 dark:text-white mb-1">{item.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, t) => (
                          <span key={t} className="text-[10px] px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 font-medium">{tag}</span>
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
      <section id="process" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">How I Work.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
              A simple, proven approach to solving complex business problems.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden md:block"></div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-4 gap-12 relative z-10"
            >
              {[
                { icon: Database, color: "text-indigo-600", title: "Discovery", desc: "Understanding your business goals, current challenges, and the data you have available." },
                { icon: TrendingUp, color: "text-purple-600", title: "Analysis", desc: "Digging into the numbers to find patterns, inefficiencies, and opportunities for growth." },
                { icon: PieChart, color: "text-pink-600", title: "Strategy", desc: "Building a clear, step-by-step plan based on hard data rather than guesswork." },
                { icon: Rocket, color: "text-orange-600", title: "Execution", desc: "Putting the plan into action, monitoring the results, and adjusting as needed." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center md:text-left text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center md:text-left text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section id="consulting" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Consulting for <br />
              <span className="text-indigo-600 dark:text-indigo-400">Real Growth.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I bridge the gap between technical data analysis and everyday business operations. 
              I don't just hand over a spreadsheet; I help you understand what the numbers mean and what to do next.
            </motion.p>
            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                { icon: Rocket, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", title: "Sales & Growth", desc: "Finding the bottlenecks in your sales process and fixing them." },
                { icon: Shield, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30", title: "Data-Driven Decisions", desc: "Using your own data to make confident choices, not guesses." },
                { icon: Globe, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", title: "Digital Strategy", desc: "Building online experiences that actually convert visitors into customers." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[40px] blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Consulting" className="relative z-10 rounded-[40px] shadow-2xl border-8 border-white dark:border-gray-900" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { title: "Honesty", desc: "I give you the real numbers and straightforward advice, even if it's not what you expected to hear." },
              { title: "Practicality", desc: "I focus on tools and strategies that actually work in the real world, not just in theory." },
              { title: "Results", desc: "Everything I do is aimed at one thing: making your business more profitable and efficient." }
            ].map((val, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" /> {val.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-black dark:bg-indigo-950 text-white overflow-hidden relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">
            HAVE A PROJECT IN MIND? <br className="hidden md:block" />
            LET'S TALK ABOUT IT.
          </h2>
          <a href="mailto:chandra572gourav@proton.me" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all whitespace-nowrap shadow-xl">
            EMAIL ME
          </a>
        </motion.div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-20 pb-10 px-6 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to get started?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
                I'm currently accepting new projects. If you have a data or business problem you need solved, let's talk.
              </p>
              <a href="mailto:chandra572gourav@proton.me" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                Send me an email
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400 dark:text-gray-500">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#expertise" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Core Competencies</a></li>
                <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">How I Work</a></li>
                <li><a href="#consulting" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400 dark:text-gray-500">Links</h4>
              <ul className="space-y-4">
                <li><a href="https://www.linkedin.com/in/gouravchandra" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="https://github.com/ransomfish339" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                <li><a href="https://www.kaggle.com/hydravi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Code2 className="w-4 h-4" /> Kaggle</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-gray-800 gap-6">
            <p className="text-sm text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} Gourav Chandra. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
