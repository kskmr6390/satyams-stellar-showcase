import { useState } from "react";
import { 
  Code2, 
  Cloud, 
  Database, 
  Zap, 
  Brain, 
  Shield, 
  GitBranch, 
  Layers,
  ChevronRight,
  Star,
  TrendingUp,
  Award
} from "lucide-react";

const AdvancedSkills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Backend Architecture",
      icon: Code2,
      color: "from-purple-500 to-purple-700",
      description: "Enterprise-grade backend solutions",
      skills: [
        { name: "Microservices Architecture", level: 95, years: "6+" },
        { name: "Event-Driven Design", level: 92, years: "5+" },
        { name: "Domain-Driven Design", level: 88, years: "4+" },
        { name: "CQRS & Event Sourcing", level: 85, years: "3+" },
        { name: "API Gateway Patterns", level: 90, years: "5+" },
        { name: "Distributed Systems", level: 92, years: "6+" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-blue-700",
      description: "Scalable cloud infrastructure",
      skills: [
        { name: "AWS (EC2, Lambda, S3, RDS)", level: 93, years: "6+" },
        { name: "Docker & Kubernetes", level: 88, years: "4+" },
        { name: "Terraform & Infrastructure as Code", level: 85, years: "3+" },
        { name: "CI/CD Pipelines", level: 90, years: "5+" },
        { name: "Monitoring & Observability", level: 87, years: "4+" },
        { name: "Auto-scaling & Load Balancing", level: 92, years: "5+" },
      ]
    },
    {
      title: "Data & Performance",
      icon: Database,
      color: "from-green-500 to-green-700",
      description: "High-performance data solutions",
      skills: [
        { name: "PostgreSQL Advanced", level: 95, years: "6+" },
        { name: "Redis & Caching Strategies", level: 90, years: "5+" },
        { name: "Elasticsearch & Search", level: 88, years: "4+" },
        { name: "Database Optimization", level: 93, years: "6+" },
        { name: "Data Modeling", level: 90, years: "5+" },
        { name: "Real-time Analytics", level: 85, years: "3+" },
      ]
    },
    {
      title: "Message Systems",
      icon: Zap,
      color: "from-orange-500 to-orange-700",
      description: "Async messaging & queue systems",
      skills: [
        { name: "Apache Kafka", level: 88, years: "4+" },
        { name: "RabbitMQ", level: 85, years: "3+" },
        { name: "AWS SQS/SNS", level: 90, years: "5+" },
        { name: "WebSocket Real-time", level: 87, years: "4+" },
        { name: "Event Streaming", level: 88, years: "4+" },
        { name: "Message Patterns", level: 92, years: "5+" },
      ]
    },
    {
      title: "AI & ML Integration",
      icon: Brain,
      color: "from-pink-500 to-pink-700",
      description: "AI-powered backend systems",
      skills: [
        { name: "LangChain & LLM Integration", level: 90, years: "2+" },
        { name: "RAG Systems", level: 88, years: "2+" },
        { name: "Vector Databases", level: 85, years: "2+" },
        { name: "ML Model Deployment", level: 82, years: "3+" },
        { name: "AI API Development", level: 90, years: "2+" },
        { name: "Prompt Engineering", level: 88, years: "2+" },
      ]
    },
    {
      title: "Security & Monitoring",
      icon: Shield,
      color: "from-red-500 to-red-700",
      description: "Enterprise security & observability",
      skills: [
        { name: "OAuth2 & JWT", level: 93, years: "5+" },
        { name: "API Security Best Practices", level: 95, years: "6+" },
        { name: "Rate Limiting & DDoS Protection", level: 90, years: "4+" },
        { name: "Application Monitoring", level: 88, years: "4+" },
        { name: "Security Auditing", level: 85, years: "3+" },
        { name: "Compliance (GDPR, SOC2)", level: 82, years: "3+" },
      ]
    }
  ];

  const achievements = [
    { icon: TrendingUp, text: "Scaled systems to 10M+ requests/day", color: "text-green-400" },
    { icon: Award, text: "Led teams of 8+ engineers", color: "text-blue-400" },
    { icon: Star, text: "99.9% uptime SLA achievement", color: "text-yellow-400" },
    { icon: Zap, text: "Reduced latency by 60% through optimization", color: "text-purple-400" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Expertise
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            6+ years of expertise in building scalable backend systems, cloud infrastructure, 
            and AI-powered applications for enterprise-grade solutions
          </p>
          
          {/* Achievement Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50">
                {(() => {
                  const IconComponent = achievement.icon;
                  return <IconComponent className={`w-8 h-8 ${achievement.color} mx-auto mb-3`} />;
                })()}
                <p className="text-sm text-gray-300 font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeTab === index 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
            >
              {(() => {
                const IconComponent = category.icon;
                return <IconComponent size={20} />;
              })()}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-slate-800/30 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${skillCategories[activeTab].color} mb-4`}>
              {(() => {
                const IconComponent = skillCategories[activeTab].icon;
                return <IconComponent className="w-8 h-8 text-white" />;
              })()}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {skillCategories[activeTab].title}
            </h3>
            <p className="text-gray-400 text-lg">
              {skillCategories[activeTab].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab].skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="bg-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-white font-semibold text-lg leading-tight">{skill.name}</h4>
                  <div className="flex flex-col items-end">
                    <span className={`text-sm font-bold bg-gradient-to-r ${skillCategories[activeTab].color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{skill.years} exp</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skillCategories[activeTab].color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kafka', 'Elasticsearch'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-gray-300 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSkills;