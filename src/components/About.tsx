
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Senior Backend Engineer & AI Systems Architect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Senior Backend Engineer with over 6 years of experience in designing scalable backend systems 
              and cloud deployment, expert in Python and FastAPI. I led a team of 5 engineers to build 
              Qatalyst, an AI-powered market research platform processing millions of data points.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Key achievements include developing an advanced search system with Elasticsearch that boosted data 
              retrieval accuracy by 30%, and engineering RAG systems using LangChain and open-source LLMs 
              that improved insights generation by 25%. I've successfully reduced media processing latency by 90% 
              through asynchronous task queues and serverless optimization.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in event-driven architecture, microservices design, and have managed 50+ 
              microservices for large-scale web applications. My focus is on building scalable, 
              maintainable systems that deliver exceptional performance and cost optimization.
            </p>
            
            <div className="bg-slate-800 rounded-lg p-6 mt-8">
              <h4 className="text-purple-400 font-semibold mb-4">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium">Master of Computer Applications (MCA)</p>
                  <p className="text-gray-300 text-sm">Vellore Institute of Technology, Chennai • 2016 - 2018</p>
                </div>
                <div>
                  <p className="text-white font-medium">Bachelor of Information Technology (B.IT)</p>
                  <p className="text-gray-300 text-sm">Ranchi College, Ranchi • 2013 - 2016</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-slate-900 rounded-lg p-6 -rotate-3">
                <h4 className="text-white text-xl font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>🚀 Led 5-person engineering team</li>
                  <li>⚡ 90% reduction in processing latency</li>
                  <li>🔍 30% boost in data retrieval accuracy</li>
                  <li>📊 Millions of data points processed</li>
                  <li>☁️ 50+ microservices managed</li>
                  <li>💰 25% reduction in server costs</li>
                  <li>🤖 25% improvement in AI insights generation</li>
                  <li>📈 20% boost in user engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
