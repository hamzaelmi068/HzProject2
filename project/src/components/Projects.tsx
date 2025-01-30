import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Focus-TreeX",
      description: "A productivity app that grows a tree as you focus, featuring streaks, AI coaching, and unlockable trees.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      image: "/1349296.jpg",
      github: "https://github.com/hamzaelmi068/Focus-TreeX",
      live: "https://focus-tree-x3.vercel.app/"
    },
    {
      title: "Stool Health Analyzer  ",
    description: "    (Note: In Progress) -                                                                                   AI-powered medical analysis system using computer vision to assess stool samples based on clinical metrics.",
    technologies: ["TypeScript", "Python", "FastAPI", "OpenCV", "Docker"],
    image: "/poop1.jpg",
    github: "https://github.com/hamzaelmi068/StoolAnalysisX",
    },
    {
  title: "To-Do List Web App",  
  description: "A full-stack task management application with user authentication and real-time updates.",
  technologies: ["React", "Node.js", "PostgreSQL"],
 image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  github: "https://github.com/hamzaelmi068/ToDoList",
  live: "https://hamzaelmi068.github.io/ToDoList/"
}, 
    {
      title: "EPL Match Winner Predictor",
      description: "A predictive analytics tool for Premier League matches, leveraging machine learning and web scraping.",
      technologies: ["Jupyter", "Flask", "Python", "JavaScript"],
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/yourusername/epl-predictor",
    },
    {
      title: "ZooScope Classifier (ML)",
      description: "A Machine Learning project infused with practices of data analytics and real life applications ",
      technologies: ["C", "Material UI"],
      image: "/OIP.jpeg",
      github: "https://github.com/hamzaelmi068/ZooScope",
    },
    {  
  title: "Worm-GameX",
  description: "A simple Worm game built with JavaScript and HTML5 Canvas. Control the snake, eat food, and grow while avoiding collisions.",
  technologies: ["JavaScript", "HTML5 Canvas"],
  image: "/worm123.jpg", //. Ensure the image is in the 'public/images/' folder
  github: "https://github.com/hamzaelmi068/Worm-GameX",
  live: "https://hamzaelmi068.github.io/Worm-GameX/"
}
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors"
                    >
                      <Github className="h-6 w-6 text-primary-600" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6 text-primary-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
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
