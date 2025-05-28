
const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Entropik",
      period: "08/2021 - Present",
      location: "Bangalore, India",
      description: "Led a team of 5 developers to build Qatalyst, an AI-powered market research platform using Python (FastAPI), AWS microservices, and event-driven architecture.",
      achievements: [
        "Engineered a Retrieval-Augmented Generation (RAG) system using LangChain and open-source LLMs, improving insights generation by 25%",
        "Designed a hybrid semantic + keyword search engine with Elasticsearch, increasing data retrieval accuracy by 30%",
        "Reduced media processing latency by 90% through asynchronous task queues (SQS, workers) and serverless optimization",
        "Built a scalable, event-driven video processing pipeline (Lambda, Step Functions, SQS), reducing data processing time by 90%",
        "Developed a PII redaction system for video content, ensuring compliance and minimizing risk exposure",
        "Led development of AffectLab Insights (Django), boosting user engagement by 20%",
        "Spearheaded cost optimization agenda, resulting in 25% reduction in server costs",
        "Managed 50+ microservices for large-scale web applications"
      ],
      technologies: ["Python", "FastAPI", "Django", "AWS", "Elasticsearch", "LangChain", "SQS", "Lambda", "Step Functions", "OpenSearch"]
    },
    {
      title: "Associate Software Engineer",
      company: "Teamlease",
      period: "07/2019 - 08/2021",
      location: "Bangalore, India",
      description: "Automated email workflows and refactored legacy systems, focusing on performance optimization and workflow automation.",
      achievements: [
        "Automated email workflows with chatbot APIs, slashing response time to under 5 minutes and increasing efficiency by 70%",
        "Refactored legacy TL-Connect modules (attendance, payroll), reducing errors by 20% and boosting adoption by 10%",
        "Increased team productivity by 20% by implementing efficient workflows and automating repetitive tasks",
        "Achieved 30% faster data processing by optimizing database queries in SQL Server",
        "Reduced server response time by 10% by refactoring legacy code"
      ],
      technologies: ["Python", "SQL Server", "REST APIs", "Automation", "Legacy Systems", "Chatbot APIs"]
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
            <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 mt-6"></div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-purple-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-purple-300 font-medium block">{exp.period}</span>
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm leading-relaxed flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
