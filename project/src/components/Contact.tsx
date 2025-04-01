import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Loader2 } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('helmi@uoguelph.ca');
    // Optional: Show a toast notification
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you within 24 hours!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                <a
                  href="mailto:helmi@uoguelph.ca"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  helmi@uoguelph.ca
                </a>
                <button 
                  onClick={copyEmail}
                  className="ml-2 text-xs text-primary-600 hover:text-primary-800"
                  aria-label="Copy email"
                >
                  Copy
                </button>
              </div>
              
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/hamzaelmi068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-7 w-7" />
                </a>
                <a
                  href="https://linkedin.com/in/hamza-elmi-b9827a231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="card p-8 space-y-6 hover:shadow-lg transition-shadow">
            {/* ... existing form fields ... */}
            
            <button
              type="submit"
              className="button-primary w-full flex justify-center items-center gap-2"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
