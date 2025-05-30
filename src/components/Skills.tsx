
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
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
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
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
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
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
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
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
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
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
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Skills
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise in backend development, cloud architecture, and AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`${category.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-semibold">{skill.name}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
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
