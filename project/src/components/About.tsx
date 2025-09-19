import React, { useState } from 'react';
import { Code, Database, Layout, FileText } from 'lucide-react';
import FadeInSection from './FadeInSection';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-5 w-5" />,
      technologies: ['HTML', 'CSS', 'React.js', 'JavaScript', 'TypeScript', 'Material UI', 'SASS', 'Flask', 'Swift'],
    },
    {
      category: 'Backend',
      icon: <Database className="h-5 w-5" />,
      technologies: ['Python', 'C', 'Java', 'C#', 'Node.js', 'PostgreSQL', 'Git'],
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50/80 to-blue-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section - Optimized */}
          <FadeInSection delay={200}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Background decoration */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-75"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/IMG_9865.webp"
                    alt="Hamza Elmi - Computer Science Student"
                    className={`w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-all duration-700 ${
                      imageLoaded ? 'animate-image-load' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-lg animate-float"></div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Content Section */}
          <FadeInSection delay={400}>
            <div className="space-y-6 lg:pt-4">
              {/* Introduction */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  As a <span className="font-semibold text-gray-900">Computer Science student</span> at the University of Guelph with a minor in <span className="font-semibold text-gray-900">Business Analytics</span>, I'm passionate about bridging technical excellence with business solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey is driven by curiosity and a desire to create meaningful applications that solve real-world problems.
                  Outside of tech, I enjoy photography, playing competitive sports, and chess.
                </p>
              </div>
              
              {/* Skills Section */}
              <div className="space-y-4">
                {skills.map((skillSet, index) => (
                  <FadeInSection key={skillSet.category} delay={600 + (index * 150)}>
                    <div className="glass rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white shadow-md">
                          {skillSet.icon}
                        </div>
                        <h3 className="text-lg font-semibold ml-3 text-gray-900">{skillSet.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillSet.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-white/80 text-gray-700 rounded-lg text-sm font-medium border border-gray-200/50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 hover:-translate-y-0.5 stagger-animate"
                            style={{
                              animationDelay: `${techIndex * 30}ms`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              {/* CTA Button */}
              <FadeInSection delay={900}>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-ring group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    
                    <FileText className="h-5 w-5 mr-2 transition-transform group-hover:scale-110 relative z-10" />
                    <span className="relative z-10">Resume available upon request</span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>
        
        {/* Optional: Quick stats */}
        <FadeInSection delay={1100}>
          <div className="mt-16 pt-12 border-t border-gray-200/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">8+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">100%</div>
                <div className="text-sm text-gray-600">Dedication</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;

