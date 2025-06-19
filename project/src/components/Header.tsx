import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-primary-900/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400'
                : 'text-white'
            }`}
          >
            HE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                } ${activeSection === item.href.slice(1) ? 'after:w-full' : ''}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/hamzaelmi068" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-elmi-b9827a231/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://medium.com/@hamzaelmi067" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                title="Read my blog on Medium"
              >
                <BookOpen className="h-5 w-5" />
              </a>
              <a 
                href="mailto:helmi@uoguelph.ca" 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary-100">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 text-gray-600 hover:text-primary-600 transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-primary-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a href="https://github.com/hamzaelmi068" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/hamza-elmi-b9827a231" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://medium.com/@hamza067" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <BookOpen className="h-5 w-5" />
              </a>
              <a href="mailto:helmi@uoguelph.ca" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;