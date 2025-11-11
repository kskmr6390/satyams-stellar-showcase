
const Experience = () => {
  const experiences = [
    {
      title: "Staff Engineer",
      company: "Sandisk",
      period: "Present",
      location: "Bangalore, India",
      description: "Leading advanced engineering initiatives and architecting enterprise-scale storage solutions, driving technical excellence and innovation across critical infrastructure projects.",
      highlights: [
        "Architecting and implementing large-scale distributed storage systems",
        "Leading cross-functional engineering teams to deliver high-performance solutions",
        "Driving technical innovation and best practices across the organization"
      ],
      achievements: [
        {
          metric: "99.9%",
          description: "System reliability and uptime for critical storage infrastructure"
        },
        {
          metric: "40%",
          description: "Performance improvement in data processing pipelines"
        },
        {
          metric: "15+",
          description: "Engineers mentored and led across multiple teams"
        }
      ],
      technologies: ["Distributed Systems", "Cloud Architecture", "Storage Solutions", "Python", "Microservices", "AWS"],
      responsibilities: [
        "Architect and design enterprise-scale storage solutions",
        "Lead technical strategy and implementation for critical projects",
        "Mentor and guide engineering teams on best practices",
        "Drive innovation in storage and data processing technologies"
      ]
    },
    {
      title: "Senior Backend Engineer",
      company: "Entropik",
      period: "08/2021 - Present",
      location: "Bangalore, India",
      description: "Leading backend engineering initiatives for AI-powered market research platforms, managing cross-functional teams, and driving technical innovation across multiple high-impact projects.",
      highlights: [
        "Led a team of 5 developers to architect and build Qatalyst, an enterprise-grade AI-powered market research platform",
        "Spearheaded the development of a hybrid semantic + keyword search engine using Elasticsearch, achieving 30% improvement in data retrieval accuracy",
        "Architected and implemented a Retrieval-Augmented Generation (RAG) system using LangChain and open-source LLMs, enhancing insights generation efficiency by 25%"
      ],
      achievements: [
        {
          metric: "90%",
          description: "Latency reduction through asynchronous task queues (SQS, workers) and serverless optimization"
        },
        {
          metric: "25%",
          description: "Server cost reduction through strategic optimization initiatives"
        },
        {
          metric: "20%",
          description: "User engagement boost via AffectLab Insights platform development"
        }
      ],
      technologies: ["Python", "FastAPI", "Django", "AWS", "Elasticsearch", "LangChain", "SQS", "Lambda", "Step Functions", "OpenSearch"],
      responsibilities: [
        "Designed event-driven video processing pipelines using AWS Lambda and Step Functions",
        "Developed PII redaction systems for video content ensuring compliance",
        "Managed 50+ microservices for large-scale web applications",
        "Led cost optimization initiatives resulting in significant infrastructure savings"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Teamlease",
      period: "07/2019 - 08/2021",
      location: "Bangalore, India",
      description: "Focused on workflow automation, legacy system modernization, and performance optimization across enterprise applications serving thousands of users.",
      highlights: [
        "Revolutionized email workflow automation by integrating chatbot APIs, reducing response time to under 5 minutes",
        "Led comprehensive refactoring of legacy TL-Connect modules (attendance, payroll), significantly improving system reliability",
        "Implemented database query optimizations achieving 30% faster data processing in SQL Server environments"
      ],
      achievements: [
        {
          metric: "70%",
          description: "Efficiency increase through automated email workflows"
        },
        {
          metric: "20%",
          description: "Error reduction in legacy modules through systematic refactoring"
        },
        {
          metric: "10%",
          description: "Server response time improvement via code optimization"
        }
      ],
      technologies: ["Python", "SQL Server", "REST APIs", "Automation", "Legacy Systems", "Chatbot APIs"],
      responsibilities: [
        "Automated repetitive tasks and workflows to boost team productivity",
        "Refactored critical business modules for improved performance and reliability",
        "Optimized database queries and improved overall system performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            6+ years of professional experience building scalable backend systems, leading engineering teams, and driving technical innovation
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-start mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 dark:border-slate-950 mt-8"></div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-slate-800/50 dark:bg-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-2xl">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-purple-300 font-semibold text-lg block">{exp.period}</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                  
                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-4 text-lg">🚀 Key Highlights</h5>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-300 leading-relaxed flex items-start">
                          <span className="text-purple-400 mr-3 mt-1 text-lg">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-4 text-lg">📊 Impact & Results</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                          <div className="text-2xl font-bold text-purple-400 mb-1">{achievement.metric}</div>
                          <div className="text-gray-300 text-sm">{achievement.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-4 text-lg">💼 Core Responsibilities</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-gray-300 text-sm leading-relaxed flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-3 text-lg">🛠️ Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
