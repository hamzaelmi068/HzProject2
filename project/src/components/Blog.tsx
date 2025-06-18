import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-6">
          My Blog on Medium
          <span className="block w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-3 rounded-full"></span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          I’ll be sharing insights on software development, AI research, and my journey in Computer Science.  
          Stay tuned for articles coming soon — or follow me on Medium to get notified!
        </p>

        <div className="card p-8 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            First blog post coming soon!
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            In the meantime, feel free to check out my Medium profile and follow me there.
          </p>
          <a
            href="https://medium.com/@hamza067"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center gap-2 group"
          >
            <BookOpen className="h-5 w-5" />
            Visit My Medium
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
