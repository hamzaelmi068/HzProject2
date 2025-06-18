import React, { useState } from 'react';
import { Mail, Github, Linkedin, Loader2, Check, Copy, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call (replace with actual form submission)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('helmi@uoguelph.ca');
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Get In Touch
          <span className="block w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-4 rounded-full"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="card p-8 bounce-in">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you within 24 hours!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="p-2 bg-primary-100 rounded-lg mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <a
                  href="mailto:helmi@uoguelph.ca"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-300 flex-1"
                >
                  helmi@uoguelph.ca
                </a>
                <button 
                  onClick={copyEmail}
                  className="ml-2 p-2 text-gray-500 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 active:scale-95"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copyStatus === 'copied' ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/hamzaelmi068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="GitHub profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/hamza-elmi-b9827a231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card p-8 space-y-6 bounce-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300 resize-none"
                required
                aria-required="true"
              />
            </div>
            
            <button
              type="submit"
              className="button-primary w-full flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg py-4"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-start gap-3 border border-green-200 bounce-in">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3 border border-red-200 bounce-in">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm">Please try again or contact me directly at helmi@uoguelph.ca</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;