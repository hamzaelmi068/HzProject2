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


/* quick clarification, i actually dont have any posts yet, so can we keep the layout here but not actual post info since i just created my medium account: import React from 'react';
import { BookOpen, ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';

const Blog = () => {
  // Featured blog posts - you can update these with your actual Medium posts
  const featuredPosts = [
    {
      title: "Building LughatulQuran: A Journey into Quranic Arabic Learning",
      excerpt: "Discover how I created a modern vocabulary learning app that combines spaced repetition with beautiful UI design to help users master Quranic Arabic.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Supabase", "Education"],
      slug: "building-lughatulquran-quranic-arabic-learning",
      featured: true
    },
    {
      title: "From Student to Research Assistant: My AI Journey at University of Guelph",
      excerpt: "Exploring how undergraduate research in AI and machine learning shaped my understanding of data science and opened new career possibilities.",
      date: "2024-11-20",
      readTime: "6 min read",
      tags: ["AI", "Research", "University", "Career"],
      slug: "student-to-research-assistant-ai-journey",
      featured: false
    },
    {
      title: "The Art of Clean Code: Lessons from Building 8+ Projects",
      excerpt: "Key insights and best practices I've learned while developing full-stack applications, from project structure to deployment strategies.",
      date: "2024-10-28",
      readTime: "10 min read",
      tags: ["Programming", "Best Practices", "Full Stack"],
      slug: "art-of-clean-code-lessons-from-projects",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Latest from My Blog
            <span className="block w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            I write about software development, AI research, and my journey as a Computer Science student. 
            Follow along as I share insights, tutorials, and lessons learned.
          </p>
        </div>

        {/* Featured Post */ 

        /*
        <div className="mb-12">
          <div className="card overflow-hidden group bounce-in">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(featuredPosts[0].date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{featuredPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://medium.com/@hamzaelmi067/${featuredPosts[0].slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */
        /*
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.slice(1).map((post, index) => (
            <article 
              key={index} 
              className="card p-6 group bounce-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <Clock className="h-4 w-4 ml-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`https://medium.com/@hamzaelmi067/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group"
              >
                Read More
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        {/* Call to Action */
        /*
        <div className="text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Read More?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow me on Medium for more insights on software development, AI research, 
              and my journey in Computer Science. New articles published regularly!
            </p>
            <a
              href="https://medium.com/@hamzaelmi067"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center gap-2 group"
            >
              <BookOpen className="h-5 w-5" />
              Follow on Medium
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
*/
