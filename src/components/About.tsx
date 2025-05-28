
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
              Senior Backend Developer & System Architect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a seasoned Senior Backend Developer with extensive experience in designing and implementing 
              robust, scalable server-side architectures. I specialize in building high-performance APIs, 
              microservices, and distributed systems that handle millions of requests efficiently.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans across multiple programming languages and frameworks, with a strong focus on 
              system optimization, database design, and cloud infrastructure. I excel at translating complex 
              business requirements into reliable technical solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about mentoring junior developers, establishing best practices, and driving 
              technical excellence in development teams. I stay current with emerging technologies and 
              architectural patterns to deliver cutting-edge solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Backend Systems</h4>
                <p className="text-gray-300 text-sm">Node.js, Python, Java</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Databases</h4>
                <p className="text-gray-300 text-sm">MySQL, MongoDB, Redis</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Cloud & DevOps</h4>
                <p className="text-gray-300 text-sm">AWS, Docker, Kubernetes</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-slate-900 rounded-lg p-6 -rotate-3">
                <h4 className="text-white text-xl font-semibold mb-4">Senior Developer Highlights</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>🏗️ System Architecture Design</li>
                  <li>⚡ High-Performance APIs</li>
                  <li>🔄 Microservices Architecture</li>
                  <li>📊 Database Optimization</li>
                  <li>☁️ Cloud Infrastructure</li>
                  <li>👥 Technical Leadership</li>
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
