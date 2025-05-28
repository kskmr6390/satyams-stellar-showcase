
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 92 },
        { name: "Django", level: 88 },
        { name: "Flask", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 82 },
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Terraform", level: 82 },
        { name: "Microservices", level: 92 },
        { name: "Serverless", level: 85 },
        { name: "CI/CD", level: 87 },
      ]
    },
    {
      title: "Databases & Search",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Elasticsearch", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "DynamoDB", level: 78 },
      ]
    },
    {
      title: "Message Queues & Tools",
      skills: [
        { name: "Kafka", level: 85 },
        { name: "RabbitMQ", level: 82 },
        { name: "SQS", level: 88 },
        { name: "Celery", level: 87 },
        { name: "WebSockets", level: 80 },
        { name: "AsyncIO", level: 90 },
      ]
    },
    {
      title: "AI & Data Processing",
      skills: [
        { name: "LangChain", level: 88 },
        { name: "RAG Systems", level: 85 },
        { name: "Open-source LLMs", level: 82 },
        { name: "Data Processing", level: 92 },
        { name: "Event-Driven Architecture", level: 90 },
        { name: "System Design", level: 95 },
      ]
    },
    {
      title: "Security & Monitoring",
      skills: [
        { name: "OAuth2", level: 88 },
        { name: "JWT", level: 90 },
        { name: "Security Best Practices", level: 92 },
        { name: "Monitoring", level: 85 },
        { name: "Load Balancing", level: 87 },
        { name: "API Rate Limiting", level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise in backend development, cloud architecture, and AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
