import React from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Brain, Globe, Gamepad2, BarChart3, Zap } from 'lucide-react';
import { BentoGrid, BentoCard } from './magicui/bento-grid';
 
const Projects = () => {
  const features = [
    {
      Icon: Code,
      name: "LughatulQuran",
      description: "Quranic Arabic vocabulary trainer with intelligent spaced repetition and progress tracking.",
      href: "https://lughatul-quran.vercel.app",
      cta: "View Project",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20">
          <div className="absolute inset-0 bg-[url('/lughatulquran-placeholder.png')] bg-cover bg-center opacity-30" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">TypeScript</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Supabase</span>
          </div>
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Zap,
      name: "Focus-TreeX",
      description: "Productivity app that grows virtual trees as you focus, with streaks and AI coaching.",
      href: "https://focus-tree-x3.vercel.app/",
      cta: "Try It Live",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20">
          <div className="absolute inset-0 bg-[url('/1349296.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">TypeScript</span>
            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">React</span>
          </div>
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BarChart3,
      name: "FinanceScope",
      description: "Financial dashboard comparing living costs & salaries worldwide with AI budgeting advice.",
      href: "https://finance-scope.vercel.app/",
      cta: "Explore Dashboard",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20">
          <div className="absolute inset-0 bg-[url('/scope_finance.png')] bg-cover bg-center opacity-40" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Python</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Power BI</span>
          </div>
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Brain,
      name: "Stool Health Analyzer",
      description: "AI-powered medical analysis using computer vision for clinical assessment.",
      href: "https://github.com/hamzaelmi068/StoolAnalysisX",
      cta: "View Code",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-pink-500/20 to-rose-500/20">
          <div className="absolute inset-0 bg-[url('/poop1.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Python</span>
            <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">FastAPI</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">OpenCV</span>
          </div>
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Globe,
      name: "EPL Match Predictor",
      description: "Machine learning tool for Premier League match predictions with web scraping.",
      href: "https://github.com/hamzaelmi068/PremierLeague_webscraper",
      cta: "View Project",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Python</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Flask</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">ML</span>
          </div>
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Gamepad2,
      name: "Worm-GameX",
      description: "Classic snake game built with JavaScript and HTML5 Canvas with smooth controls.",
      href: "https://hamzaelmi068.github.io/Worm-GameX/",
      cta: "Play Game",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20">
          <div className="absolute inset-0 bg-[url('/worm123.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">JavaScript</span>
            <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">HTML5</span>
          </div>
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            AI/ML, and creative problem-solving across various domains.
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/hamzaelmi068"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;