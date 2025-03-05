import React from 'react';
import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-700/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in order-2 md:order-1">
            <div className="text-2xl md:text-3xl text-gray-100 mb-4">
              <Typewriter
                options={{
                  strings: [
                    "Hey there, my name is Hamza!",
                    "I'm a Third-year Computer Science student at the University of Guelph.",
                    "Currently seeking 2025 Summer SWE internship opportunities.",
                    "Passionate about full-stack development and data analytics!"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 40,
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Turning{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white animate-glow shadow-lg"> 
                ideas into powerful applications
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-6">
              I'm passionate about full-stack development and data analytics, always eager to explore new technologies and build impactful solutions. Let's create something amazing together!
            </p>
            <a
              href="#projects"
              className="button-primary group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-400 transition-all duration-300 text-white font-semibold"
            >
              View My Work
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src="/cropped-image123.webp"
                alt="Hamza's Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
