
const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Me
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Staff Engineer at Sandisk
              </h3>
              <a
                href="/satyam_intro_ppt.pptx"
                download="Satyam_Kumar_Chourasiya_Presentation.pptx"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Latest Update
              </a>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Staff Engineer at Sandisk with over 6 years of experience in designing scalable backend systems, 
              distributed storage solutions, and cloud deployment. Expert in Python, FastAPI, and enterprise-scale 
              architecture. Previously led a team of 5 engineers to build Qatalyst, an AI-powered market research 
              platform processing millions of data points.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Key achievements include developing an advanced search system with Elasticsearch that boosted data 
              retrieval accuracy by 30%, and engineering RAG systems using LangChain and open-source LLMs 
              that improved insights generation by 25%. I've successfully reduced media processing latency by 90% 
              through asynchronous task queues and serverless optimization.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in event-driven architecture, microservices design, and have managed 50+ 
              microservices for large-scale web applications. My focus is on building scalable, 
              maintainable systems that deliver exceptional performance and cost optimization.
            </p>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mt-10 shadow-2xl">
              <h4 className="text-purple-400 font-bold text-xl mb-6">Education</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <p className="text-white font-semibold text-lg">Master of Computer Applications (MCA)</p>
                  <p className="text-gray-300">Vellore Institute of Technology, Chennai • 2016 - 2018</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-6">
                  <p className="text-white font-semibold text-lg">Bachelor of Information Technology (B.IT)</p>
                  <p className="text-gray-300">Ranchi College, Ranchi • 2013 - 2016</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 -rotate-3 hover:rotate-0 transition-transform duration-500">
                <h4 className="text-slate-800 text-2xl font-bold mb-6">Key Achievements</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600">5</div>
                    <div className="text-sm text-slate-600">Team Members Led</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-pink-600">90%</div>
                    <div className="text-sm text-slate-600">Latency Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-slate-600">Accuracy Boost</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-slate-600">Microservices</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700">25% improvement in AI insights generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-slate-700">20% boost in user engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">25% reduction in server costs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
