
const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Entropik",
      period: "08/2021 - Present",
      description: "Led a team of 5 developers to build Qatalyst, an AI-powered market research platform using Python (FastAPI), AWS microservices, and event-driven architecture. Engineered RAG systems with LangChain and reduced media processing latency by 90%.",
      technologies: ["Python", "FastAPI", "AWS", "Elasticsearch", "LangChain", "SQS", "Lambda"]
    },
    {
      title: "Associate Software Engineer",
      company: "Teamlease",
      period: "07/2019 - 08/2021",
      description: "Automated email workflows with chatbot APIs, reducing response time to under 5 minutes. Refactored legacy TL-Connect modules (attendance, payroll), reducing errors by 20% and optimizing database queries for 30% faster data processing.",
      technologies: ["Python", "SQL Server", "REST APIs", "Automation", "Legacy Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            6+ years of professional experience building scalable backend systems and leading engineering teams
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">{exp.title}</h3>
                    <span className="text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
