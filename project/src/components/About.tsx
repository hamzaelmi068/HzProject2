import React from 'react';
import { Code, Database, Layout, FileText } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-6 w-6" />,
      technologies: ['HTML', 'CSS', 'React.js', 'JavaScript', 'TypeScript', 'Material UI', 'SASS', 'Flask', 'Swift'],
    },
    {
      category: 'Backend',
      icon: <Database className="h-6 w-6" />,
      technologies: ['Python', 'C', 'Java', 'C#', 'Node.js', 'PostgreSQL', 'Git'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-6">
              As a Computer Science student at the University of Guelph with a minor in Business Analytics,
              I'm passionate about bridging the gap between technical excellence and business solutions. My journey in
              software development is driven by a curiosity to learn and a desire to create meaningful applications
              that solve real-world problems
            </p>
            
            <div className="space-y-6 mb-8">
              {skills.map((skillSet) => (
                <div key={skillSet.category}>
                  <div className="flex items-center mb-2">
                    {skillSet.icon}
                    <h3 className="text-xl font-semibold ml-2">{skillSet.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>


           {/* 
              <a
                href="/Elmi_Hamza_Resume_G14.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 group"
              >
                <FileText className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                View Resume!
              </a>
*/}

<a
  href="#"
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 group"
>
  <FileText className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
  Resume available upon request
</a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
