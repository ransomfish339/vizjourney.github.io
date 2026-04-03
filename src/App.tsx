/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Code2, 
  Database, 
  ExternalLink, 
  Github, 
  Globe, 
  Linkedin, 
  Mail, 
  Menu, 
  Rocket, 
  Shield, 
  Sparkles, 
  TrendingUp, 
  X,
  ChevronRight,
  ArrowRight,
  Moon,
  Sun,
  CheckCircle2,
  PieChart,
  Settings,
  Zap,
  ShoppingCart,
  Truck,
  LineChart,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
// --- Components ---

const ThemeToggle = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const Nav = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'Contact', href: 'mailto:chandra572gourav@proton.me' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2 group text-gray-900 dark:text-white">
          <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center text-white dark:text-black transition-transform group-hover:rotate-12">
            <TrendingUp size={18} />
          </div>
          <span>vizjourney<span className="text-gray-400 dark:text-gray-500">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <a 
              href="mailto:chandra572gourav@proton.me" 
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button 
            className="p-2 text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:chandra572gourav@proton.me" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-xl text-center font-medium mt-2"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: <Zap size={16} /> },
    { label: "Projects Delivered", value: "50+", icon: <TrendingUp size={16} /> },
    { label: "Happy Clients", value: "30+", icon: <Database size={16} /> },
  ];

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[95vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-8 shadow-sm">
              <Sparkles size={14} className="text-indigo-500" />
              Hi, I'm Gourav
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white">
              Bridging the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Data & Strategy.
              </span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I help businesses make sense of their data and build practical, scalable solutions that drive real growth. No fluff, just results.
            </p>
            <div className="flex items-center gap-3 mb-10 text-indigo-600 dark:text-indigo-400 font-medium italic text-sm">
              <span className="w-8 h-px bg-indigo-200 dark:bg-indigo-800" />
              "Data is the compass, strategy is the map."
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a 
                href="#solutions" 
                className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:chandra572gourav@proton.me" 
                className="w-full sm:w-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center"
              >
                Let's Talk
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-800 pt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    {stat.icon}
                    <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Data Visualization" 
                className="w-full h-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent mix-blend-overlay" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
              <BarChart3 size={32} className="text-indigo-600 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase">Analytics</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center gap-3 border border-gray-100 dark:border-gray-700 z-20">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <TrendingUp size={20} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Growth</div>
                <div className="text-[10px] text-gray-400">Focused</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Web Development & E-commerce",
      desc: "Building fast, reliable, and scalable online stores that provide a smooth shopping experience for your customers.",
      icon: <Code2 className="text-indigo-600" size={24} />,
      stack: ["Shopware", "HTML", "JS", "Twig", "SQL"],
      details: "Created custom e-commerce platforms capable of handling high traffic while keeping the user journey simple and engaging."
    },
    {
      title: "Global Pricing Strategy",
      desc: "Creating smart pricing rules that automatically adjust to different countries and local markets.",
      icon: <Globe className="text-emerald-600" size={24} />,
      stack: ["Pricing Logic", "Market Analysis", "Strategy"],
      details: "Helped businesses maximize global profits by setting the right prices for the right regions without losing brand consistency."
    },
    {
      title: "Executive Dashboards (Power BI)",
      desc: "Turning messy, scattered data into clear, visual dashboards that help leaders make quick, informed decisions.",
      icon: <BarChart3 className="text-purple-600" size={24} />,
      stack: ["Power BI", "DAX", "Data Modeling"],
      details: "Built real-time reporting tools that track company health, growth, and key performance indicators at a glance."
    },
    {
      title: "Automated Cost Tracking",
      desc: "Replacing slow, manual financial reporting with automated systems that track expenses accurately and instantly.",
      icon: <Settings className="text-blue-600" size={24} />,
      stack: ["Automation", "Cost Analysis", "Reporting"],
      details: "Saved hundreds of hours by automating complex cost analysis, giving teams instant visibility into where money is going."
    },
    {
      title: "Profit-Driven Pricing Models",
      desc: "Designing complete pricing systems that factor in all costs to ensure every product sold is actually profitable.",
      icon: <PieChart className="text-rose-600" size={24} />,
      stack: ["Financial Modeling", "Pricing", "Analytics"],
      details: "Developed pricing engines that look at the full picture—from production to sale—to protect margins and boost the bottom line."
    },
    {
      title: "Inventory & Supply Chain",
      desc: "Using data to predict exactly what products will be needed and when, preventing overstock and stockouts.",
      icon: <Truck className="text-orange-600" size={24} />,
      stack: ["Forecasting", "Inventory", "SCM"],
      details: "Improved supply chain efficiency by forecasting demand accurately, keeping inventory lean, and reducing storage costs."
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Real-World Solutions.</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
            Turning complex data and technical challenges into clear, profitable business outcomes. Here is how I help companies grow:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[32px] hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {sol.icon}
                </div>
                <div className="flex gap-2">
                  {sol.stack.slice(0, 2).map(s => (
                    <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 dark:border-gray-800 px-2 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                {sol.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {sol.desc}
              </p>
              <div className="pt-6 border-t border-gray-50 dark:border-gray-900">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {sol.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Arsenal = () => {
  const categories = [
    {
      name: "Data & Analysis",
      icon: <Database size={20} className="text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: "SQL", desc: "Extracting and managing data", tags: ["PostgreSQL", "MySQL"] },
        { name: "Excel", desc: "Advanced modeling & macros", tags: ["VBA", "Pivot Tables"] },
        { name: "DAX", desc: "Complex measures & calculations", tags: ["Power BI"] },
        { name: "M-Query", desc: "Data transformation & ETL", tags: ["Power Query"] },
      ]
    },
    {
      name: "Programming & Web",
      icon: <Code2 size={20} className="text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: "Python", desc: "Automation & Data Science", tags: ["Pandas", "Scikit-Learn"] },
        { name: "JavaScript", desc: "Building web applications", tags: ["React", "Node.js"] },
        { name: "Twig", desc: "PHP template engine", tags: ["Shopware", "Frontend"] },
        { name: "HTML/CSS", desc: "Clean UI/UX development", tags: ["Tailwind", "Responsive"] },
      ]
    },
    {
      name: "Business Intelligence",
      icon: <PieChart size={20} className="text-pink-600 dark:text-pink-400" />,
      skills: [
        { name: "Power BI", desc: "Interactive dashboards", tags: ["Visualization"] },
        { name: "Tableau", desc: "Visual data storytelling", tags: ["Analytics"] },
        { name: "Data Modeling", desc: "Structuring complex datasets", tags: ["Star Schema"] },
        { name: "Strategy", desc: "Data-driven growth plans", tags: ["Consulting"] },
      ]
    },
    {
      name: "Tools & Operations",
      icon: <Settings size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Git", desc: "Version control & collaboration", tags: ["GitHub"] },
        { name: "Airflow", desc: "Data pipeline orchestration", tags: ["ETL"] },
        { name: "Machine Learning", desc: "Predictive modeling", tags: ["TensorFlow"] },
        { name: "Cloud", desc: "Infrastructure & deployment", tags: ["AWS", "Docker"] },
      ]
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Core Competencies.</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to turn raw data into actionable business strategies.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cat.name}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl hover:shadow-xl transition-all group"
                  >
                    <h4 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">{skill.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 leading-relaxed">
                      {skill.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "Understanding your business goals, current challenges, and the data you have available.",
      icon: <Database className="text-indigo-600" />
    },
    {
      title: "Analysis",
      desc: "Digging into the numbers to find patterns, inefficiencies, and opportunities for growth.",
      icon: <BarChart3 className="text-purple-600" />
    },
    {
      title: "Strategy",
      desc: "Building a clear, step-by-step plan based on hard data rather than guesswork.",
      icon: <TrendingUp className="text-pink-600" />
    },
    {
      title: "Execution",
      desc: "Putting the plan into action, monitoring the results, and adjusting as needed.",
      icon: <Rocket className="text-orange-600" />
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">How I Work.</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
            A simple, proven approach to solving complex business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 bg-white dark:bg-gray-950 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-xl group hover:border-indigo-500/50 transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 text-4xl font-black text-gray-100 dark:text-gray-900 -z-10">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Fashion Recommendation System with ML",
      desc: "A recommendation system for fashion items.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/Fashion%20Recommendation%20System%20with%20ML",
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"]
    },
    {
      title: "Dynamic Pricing Strategy",
      desc: "A project exploring dynamic pricing models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/Dynamic_pricing_strategy",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pricing Models"]
    },
    {
      title: "Customer Acquisition Cost Analysis",
      desc: "Analysis of customer acquisition costs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/Customer_Acquisition_Cost_Analysis",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      title: "Twitter ETL Data Pipeline Using Airflow",
      desc: "An ETL pipeline for Twitter data using Airflow.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/Twitter_ETL_data_pipeline_Using_airflow",
      technologies: ["Python", "Apache Airflow", "Twitter API", "ETL"]
    },
    {
      title: "Stock Market Analysis & Forecasting",
      desc: "Project for analyzing and forecasting stock market data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/Stock_Market_Analysis_%26_Forecasting",
      technologies: ["Python", "Time Series Analysis", "Prophet", "Pandas"]
    },
    {
      title: "PwC Power BI Virtual Project",
      desc: "A Power BI project for a virtual case study.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/ransomfish339/Projects/tree/main/PwC%20Power%20BI%20Virtual%20Project",
      technologies: ["Power BI", "Data Visualization", "DAX", "Data Modeling"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Works.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              A selection of my recent data science and machine learning projects, 
              demonstrating practical applications of analytics and engineering.
            </p>
          </div>
          <a 
            href="https://github.com/ransomfish339/Projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            View All on GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block rounded-3xl overflow-hidden bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl dark:hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors duration-300 z-10 pointer-events-none" />
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden w-full max-w-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 sm:h-80 shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Project Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.desc} This project demonstrates practical applications of data science and machine learning techniques to solve real-world problems. It involves end-to-end implementation, from data collection and preprocessing to model training and evaluation.
                  </p>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Let's solve your next <span className="text-indigo-600 dark:text-indigo-400">big challenge.</span></h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you need help making sense of your data, improving your pricing, or building a new tool, I'm ready to help.
        </p>
        <a 
          href="mailto:chandra572gourav@proton.me" 
          className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-2xl hover:shadow-indigo-500/20 active:scale-95"
        >
          <Mail size={24} />
          Send me an Email
        </a>
      </div>
    </section>
  );
};

const Consulting = () => {
  const services = [
    {
      title: "Sales & Growth",
      desc: "Finding the bottlenecks in your sales process and fixing them.",
      icon: <Rocket className="text-orange-500" />
    },
    {
      title: "Data-Driven Decisions",
      desc: "Using your own data to make confident choices, not guesses.",
      icon: <Shield className="text-green-500" />
    },
    {
      title: "Digital Strategy",
      desc: "Building online experiences that actually convert visitors into customers.",
      icon: <Globe className="text-blue-500" />
    }
  ];

  return (
    <section id="consulting" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
            Consulting for <br />
            <span className="text-indigo-600 dark:text-indigo-400">Real Growth.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I bridge the gap between technical data analysis and everyday business operations. 
            I don't just hand over a spreadsheet; I help you understand what the numbers mean and what to do next.
          </p>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded-lg">{s.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{s.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative aspect-square bg-gray-900 rounded-[32px] overflow-hidden group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
              alt="Abstract Strategy" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div className="text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to scale?</h3>
                <p className="text-gray-300 mb-8">Let's build your competitive advantage together.</p>
                <a 
                  href="mailto:chandra572gourav@proton.me" 
                  className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    { title: "Honesty", desc: "I give you the real numbers and straightforward advice, even if it's not what you expected to hear." },
    { title: "Practicality", desc: "I focus on tools and strategies that actually work in the real world, not just in theory." },
    { title: "Results", desc: "Everything I do is aimed at one thing: making your business more profitable and efficient." }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle2 className="text-indigo-600" size={20} />
                {v.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-20 pb-10 px-6 transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to get started?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
            I'm currently accepting new projects. If you have a data or business problem you need solved, let's talk.
          </p>
          <a 
            href="mailto:chandra572gourav@proton.me" 
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
          >
            Send me an email
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400 dark:text-gray-500">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#expertise" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Core Competencies</a></li>
            <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">How I Work</a></li>
            <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#consulting" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Consulting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400 dark:text-gray-500">Links</h4>
          <ul className="space-y-4">
            <li><a href="https://www.linkedin.com/in/gouravchandra" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a></li>
            <li><a href="https://github.com/ransomfish339" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Github size={16} /> GitHub</a></li>
            <li><a href="https://www.kaggle.com/hydravi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"><Code2 size={16} /> Kaggle</a></li>
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
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100 transition-colors">
      <Nav isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Solutions />
        <Arsenal />
        <Process />
        <Projects />
        <Consulting />
        <CoreValues />
        <Contact />
        <section className="py-24 px-6 bg-black dark:bg-indigo-950 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">
              HAVE A PROJECT IN MIND? <br className="hidden md:block" />
              LET'S TALK ABOUT IT.
            </h2>
            <a 
              href="mailto:chandra572gourav@proton.me" 
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all whitespace-nowrap shadow-xl"
            >
              EMAIL ME
            </a>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
