
import { useEffect, useState } from "react";

const LinkedInBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => prev - 0.5); // Slow upward scroll
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div 
        className="transform transition-transform duration-75 ease-linear"
        style={{ transform: `translateY(${scrollPosition}px)` }}
      >
        {/* LinkedIn Profile Mock Content */}
        <div className="space-y-8 text-white/20 p-8">
          {/* Profile Header */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold">Satyam Kumar Chourasiya</h3>
                <p className="text-sm">Senior Backend Engineer | Scalable Systems | Cloud Deployment</p>
                <p className="text-xs">Python & FastAPI Expert</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="font-semibold mb-3">Experience</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Senior Backend Engineer</h5>
                <p className="text-sm opacity-80">Entropik • Aug 2021 - Present</p>
                <p className="text-xs mt-1">Led team of 5 engineers to build Qatalyst, AI-powered market research platform</p>
              </div>
              <div>
                <h5 className="font-medium">Associate Software Engineer</h5>
                <p className="text-sm opacity-80">Teamlease • Jul 2019 - Aug 2021</p>
                <p className="text-xs mt-1">Automated email workflows, optimized database queries</p>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="font-semibold mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">FastAPI</span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">AWS</span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Docker</span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Elasticsearch</span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Microservices</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="font-semibold mb-3">Education</h4>
            <div className="space-y-2">
              <div>
                <h5 className="font-medium">Master of Computer Applications (MCA)</h5>
                <p className="text-sm opacity-80">Vellore Institute of Technology • 2016-2018</p>
              </div>
              <div>
                <h5 className="font-medium">Bachelor of Information Technology</h5>
                <p className="text-sm opacity-80">Ranchi College • 2013-2016</p>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="font-semibold mb-3">Key Achievements</h4>
            <ul className="space-y-1 text-xs">
              <li>• 90% reduction in media processing latency</li>
              <li>• 30% boost in data retrieval accuracy with Elasticsearch</li>
              <li>• Led team of 5 engineers</li>
              <li>• 25% improvement in AI insights generation</li>
              <li>• Managed 50+ microservices</li>
              <li>• 25% reduction in server costs</li>
            </ul>
          </div>

          {/* Repeat content for continuous scroll */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold">Satyam Kumar Chourasiya</h3>
                <p className="text-sm">Senior Backend Engineer | Scalable Systems | Cloud Deployment</p>
                <p className="text-xs">LinkedIn: linkedin.com/in/satyam-chourasiya-931674141</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBackground;
