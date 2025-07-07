
import { ExternalLink, Calendar, User } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Blog Posts
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Sharing knowledge and insights from my development journey
          </p>
        </div>

        {/* Featured Article */}
        <article className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 overflow-hidden hover:shadow-xl transition-all duration-300">
          {/* Article Header */}
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Satyam Kumar Chourasiya</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published on Dev.to</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Building Scalable Backend Systems: My Journey at Entropik
            </h2>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                As a Senior Backend Engineer with over 6 years of experience, I've had the privilege of working on some fascinating projects that have shaped my understanding of scalable systems and modern backend development...
              </p>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Key Highlights from My Experience:</h3>
              
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>Led a team of 5 developers to build <strong>Qatalyst</strong>, an AI-powered market research platform processing millions of data points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>Engineered a RAG system using <strong>LangChain</strong> and open-source LLMs, improving insights accuracy by 25%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>Designed hybrid semantic + keyword search engine with <strong>Elasticsearch</strong>, boosting data retrieval accuracy by 30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>Reduced media processing latency by <strong>90%</strong> through async task queues and optimized workflows</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 mt-8">Technologies I Work With:</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">FastAPI</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">Django</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">AWS</span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">Docker</span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">Kubernetes</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">AI/ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">LangChain</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">OpenAI</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">RAG</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Throughout my journey, I've learned that building scalable backend systems isn't just about choosing the right technologies—it's about understanding the problem domain, designing for growth, and maintaining clean, maintainable code that your team can work with effectively.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200/50 dark:border-purple-700/50">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                Want to discuss backend architecture or scalable systems?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I'm always excited to share knowledge and learn from fellow developers. Let's connect!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://dev.to/satyam_chourasiya_99ea2e4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Full Article on Dev.to
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              More Articles Coming Soon!
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              I'm working on more technical articles covering FastAPI best practices, cloud deployment strategies, and AI integration patterns. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
