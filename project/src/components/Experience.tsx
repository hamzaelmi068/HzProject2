import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "University of Guelph",
      location: "Guelph, ON",
      period: "May 2024 - Dec 2024",
      description: [
        "Conducted data analysis for research projects using statistical software and machine learning techniques",
        "Developed and implemented AI models to optimize research outcomes in collaboration with faculty researchers",
        "Managed complex datasets and maintained research databases with strict information governance protocols",
        "Utilized generative AI tools for data synthesis and preliminary analysis of experimental results",
        "Authored technical documentation and presented findings to interdisciplinary research teams",
        "Applied critical thinking skills to evaluate research methodologies and propose improvements"
      ]
    },
    {
      title: "Computer Science Undergraduate Student",
      company: "University of Guelph",
      location: "Guelph, ON",
      period: "2022 - Present",
      description: [
        "Maintaining strong academic performance in core computer science courses",
        "Participating in coding competitions and hackathons",
        "Contributing to open-source projects and university research initiatives"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-500 mt-2 md:mt-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
