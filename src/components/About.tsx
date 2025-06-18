import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, FileText } from 'lucide-react';

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-6 w-6" />,
      technologies: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Material UI', level: 75 },
        { name: 'SASS', level: 70 },
        { name: 'Swift', level: 65 }
      ],
    },
    {
      category: 'Backend',
      icon: <Database className="h-6 w-6" />,
      technologies: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'Node.js', level: 78 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Git', level: 88 }
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title bounce-in">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              As a Computer Science student at the University of Guelph with a minor in Business Analytics,
              I'm passionate about bridging the gap between technical excellence and business solutions. My journey in
              software development is driven by a curiosity to learn and a desire to create meaningful applications
              that solve real-world problems.
            </p>
            
            <div className="space-y-8 mb-8">
              {skills.map((skillSet, index) => (
                <div key={skillSet.category} className="bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg mr-3">
                      {skillSet.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skillSet.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {skillSet.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className="group">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                          <span className="text-sm text-gray-500">{tech.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ 
                              width: skillsVisible ? `${tech.level}%` : '0%',
                              transitionDelay: `${techIndex * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="button-primary inline-flex items-center gap-2 group"
            >
              <FileText className="h-5 w-5 transition-transform group-hover:scale-110" />
              Resume available upon request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;