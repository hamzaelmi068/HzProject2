import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
 
const Projects = () => {
 const projects = [
  {
    title: "LughatulQuran",
    description: "🚧 In progress – A Quranic Arabic vocabulary trainer inspired by Anki, featuring intelligent spaced repetition, Supabase-based user progress, and a sleek dark/light UI for immersive learning.",
    technologies: ["TypeScript", "React", "Supabase", "Tailwind CSS", "Vite"],
    image: "/lughatulquran-placeholder.png",
    github: "https://github.com/hamzaelmi068/lughatul-quran",
    live: "https://lughatul-quran.vercel.app", 
  },
  {
    title: "Focus-TreeX",
    description: "A productivity app that grows a tree as you focus, featuring streaks, AI coaching, and unlockable trees.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    image: "/1349296.jpg",
    github: "https://github.com/hamzaelmi068/Focus-TreeX",
    live: "https://focus-tree-x3.vercel.app/"
  },
   
    {
    title: "FinanceScope",
    description: "Financial dashboard for comparing living costs & salaries across cities worldwide with AI-driven budgeting advice.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "RapidAPI", "Power BI"],
    image: "/scope_finance.png",
    github: "https://github.com/hamzaelmi068/FinanceScope",
    live: "https://finance-scope.vercel.app/"
  },
    {
      title: "Stool Health Analyzer",
    description: "AI-powered medical analysis system using computer vision to assess stool samples based on clinical metrics.",
    technologies: ["TypeScript", "Python", "FastAPI", "OpenCV", "Docker"],
    image: "/poop1.jpg",
    github: "https://github.com/hamzaelmi068/StoolAnalysisX",
    },
    {
  title: "To-Do List Web App",  
  description: "A full-stack task management application with user authentication and real-time updates.",
  technologies: ["Javascript", "Node.js", "HTML", "CSS"],
 image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  github: "https://github.com/hamzaelmi068/ToDoList",
  live: "https://hamzaelmi068.github.io/ToDoList/"
}, 
    {
      title: "EPL Match Winner Predictor",
      description: "A predictive analytics tool for Premier League matches, leveraging machine learning and web scraping.",
      technologies: ["Jupyter", "Flask", "Python", "JavaScript"],
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/hamzaelmi068/PremierLeague_webscraper",
    },
    {
      title: "ZooScope Classifier (ML)",
      description: "A Machine Learning project infused with practices of data analytics and real life applications",
      technologies: ["Python", "Machine Learning", "Data Analytics"],
      image: "/OIP.jpeg",
      github: "https://github.com/hamzaelmi068/ZooScope",
    },
    {  
  title: "Worm-GameX",
  description: "A simple Worm game built with JavaScript and HTML5 Canvas. Control the snake, eat food, and grow while avoiding collisions.",
  technologies: ["JavaScript", "HTML5 Canvas"],
  image: "/worm123.jpg",
  github: "https://github.com/hamzaelmi068/Worm-GameX",
  live: "https://hamzaelmi068.github.io/Worm-GameX/"
}
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <Github className="h-6 w-6 text-primary-600" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                      >
                        <ExternalLink className="h-6 w-6 text-primary-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;