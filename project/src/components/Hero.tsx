import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Sun, Moon } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  // Dark mode toggle handler
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Particles.js initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      {/* Animated particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            opacity: { value: 0.4 },
            size: { value: 1 },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: true,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 z-10"
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-white/80 hover:text-white" />
        ) : (
          <Moon className="h-6 w-6 text-gray-800/80 hover:text-gray-900" />
        )}
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl md:text-3xl text-gray-100 mb-4 font-medium">
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

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Turning{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white animate-pulse-shine">
                ideas into powerful applications
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              I'm passionate about full-stack development and data analytics, always eager to explore new technologies and create impactful solutions. When I'm not coding, I enjoy playing chess, staying active with sports, or exploring the outdoors through travel and adventure!
            </p>

            {/* Enhanced CTA Button */}
            <motion.a
              href="#projects"
              className="inline-block group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500/90 to-primary-600/90 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg">View My Work</span>
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          </motion.div>

          {/* Profile Image with Animation */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300" />
              <motion.img
                src="/cropped-image123.webp"
                alt="Hamza's Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown className="h-8 w-8 text-white/80 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
