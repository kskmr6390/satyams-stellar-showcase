
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
              Hello! I'm Satyam Chourasiya
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in software development has equipped me with a diverse skill set spanning 
              both frontend and backend technologies. I'm constantly learning and adapting to new 
              technologies to stay at the forefront of web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Frontend</h4>
                <p className="text-gray-300 text-sm">React, Vue, Angular</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Backend</h4>
                <p className="text-gray-300 text-sm">Node.js, Python, Java</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Database</h4>
                <p className="text-gray-300 text-sm">MySQL, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-slate-900 rounded-lg p-6 -rotate-3">
                <h4 className="text-white text-xl font-semibold mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>🎓 Computer Science Background</li>
                  <li>💼 Full Stack Developer</li>
                  <li>🌟 Passionate about Clean Code</li>
                  <li>🚀 Always Learning New Technologies</li>
                  <li>🤝 Team Player & Problem Solver</li>
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
