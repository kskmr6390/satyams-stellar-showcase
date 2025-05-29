
import { useEffect, useState } from "react";

const LinkedInBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => prev - 0.3); // Slower scroll speed
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-8 pointer-events-none">
      <div 
        className="transform transition-transform duration-75 ease-linear"
        style={{ transform: `translateY(${scrollPosition}px)` }}
      >
        {/* LinkedIn Profile Layout */}
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-white/15">
          
          {/* Profile Header */}
          <div className="bg-white/3 rounded-xl p-8 backdrop-blur-sm border border-white/5">
            <div className="relative">
              {/* Cover Image */}
              <div className="h-32 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-lg mb-4"></div>
              
              {/* Profile Info */}
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full border-4 border-white/10"></div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">Satyam Kumar Chourasiya</h1>
                  <p className="text-lg mb-2">Senior Backend Engineer | Scalable Systems | Cloud Deployment</p>
                  <p className="text-sm opacity-80 mb-2">Bangalore, Karnataka, India</p>
                  <p className="text-sm text-blue-400/60">500+ connections</p>
                </div>
                <div className="flex space-x-2">
                  <div className="px-4 py-2 bg-blue-600/20 rounded-full text-xs">Message</div>
                  <div className="px-4 py-2 border border-white/10 rounded-full text-xs">Connect</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white/3 rounded-xl p-6 backdrop-blur-sm border border-white/5">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-sm leading-relaxed opacity-90">
              Senior Backend Engineer with over 6 years of experience in designing scalable backend systems and cloud deployment, expert in Python and FastAPI. Key achievements include leading a team of 5 engineers to build Qatalyst, an AI-powered market research platform processing millions of data points, and developing an advanced search system with Elasticsearch that boosted data retrieval accuracy by 30%.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-white/3 rounded-xl p-6 backdrop-blur-sm border border-white/5">
            <h2 className="text-xl font-semibold mb-6">Experience</h2>
            
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-600/20 rounded"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Senior Backend Engineer</h3>
                  <p className="text-sm opacity-80">Entropik · Full-time</p>
                  <p className="text-xs opacity-70 mb-2">Aug 2021 - Present · 3 yrs 4 mos</p>
                  <p className="text-xs opacity-70 mb-3">Bangalore, Karnataka, India</p>
                  <ul className="text-xs space-y-1 opacity-90">
                    <li>• Led a team of 5 developers to develop Qatalyst, an AI-powered market research platform</li>
                    <li>• Engineered RAG system using LangChain and open-source LLMs, improving insights by 25%</li>
                    <li>• Designed hybrid semantic + keyword search engine with Elasticsearch</li>
                    <li>• Reduced media processing latency by 90% through async task queues</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-600/20 rounded"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Associate Software Engineer</h3>
                  <p className="text-sm opacity-80">Teamlease · Full-time</p>
                  <p className="text-xs opacity-70 mb-2">Jul 2019 - Aug 2021 · 2 yrs 2 mos</p>
                  <p className="text-xs opacity-70 mb-3">Bangalore, Karnataka, India</p>
                  <ul className="text-xs space-y-1 opacity-90">
                    <li>• Automated email workflows with chatbot APIs, reducing response time to under 5 minutes</li>
                    <li>• Refactored legacy TL-Connect modules, reducing errors by 20%</li>
                    <li>• Achieved 30% faster data processing by optimizing database queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white/3 rounded-xl p-6 backdrop-blur-sm border border-white/5">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-sm">Backend Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-purple-500/15 rounded text-xs">Python</span>
                  <span className="px-2 py-1 bg-purple-500/15 rounded text-xs">FastAPI</span>
                  <span className="px-2 py-1 bg-purple-500/15 rounded text-xs">Django</span>
                  <span className="px-2 py-1 bg-purple-500/15 rounded text-xs">Flask</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-blue-500/15 rounded text-xs">AWS</span>
                  <span className="px-2 py-1 bg-blue-500/15 rounded text-xs">Docker</span>
                  <span className="px-2 py-1 bg-blue-500/15 rounded text-xs">Kubernetes</span>
                  <span className="px-2 py-1 bg-blue-500/15 rounded text-xs">CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white/3 rounded-xl p-6 backdrop-blur-sm border border-white/5">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-600/20 rounded"></div>
                <div>
                  <h3 className="font-semibold">Vellore Institute of Technology</h3>
                  <p className="text-sm opacity-80">Master of Computer Applications (MCA)</p>
                  <p className="text-xs opacity-70">2016 - 2018</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-600/20 rounded"></div>
                <div>
                  <h3 className="font-semibold">Ranchi College</h3>
                  <p className="text-sm opacity-80">Bachelor of Information Technology</p>
                  <p className="text-xs opacity-70">2013 - 2016</p>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat content for infinite scroll effect */}
          <div className="bg-white/3 rounded-xl p-8 backdrop-blur-sm border border-white/5">
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-lg mb-4"></div>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full border-4 border-white/10"></div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">Satyam Kumar Chourasiya</h1>
                  <p className="text-lg mb-2">Senior Backend Engineer | Scalable Systems | Cloud Deployment</p>
                  <p className="text-sm opacity-80 mb-2">Bangalore, Karnataka, India</p>
                  <p className="text-sm text-blue-400/60">500+ connections</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LinkedInBackground;
