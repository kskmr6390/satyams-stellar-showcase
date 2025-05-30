
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Qatalyst - AI Market Research Platform",
      description: "Led a team of 5 engineers to develop an AI-powered market research platform processing millions of data points with RAG systems and LangChain integration.",
      image: "/placeholder.svg",
      technologies: ["Python", "FastAPI", "LangChain", "Elasticsearch", "AWS", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Scalable Microservices Architecture",
      description: "Designed and implemented 50+ microservices architecture with event-driven design, reducing processing latency by 90% and improving system reliability.",
      image: "/placeholder.svg",
      technologies: ["Python", "Kafka", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Advanced Search System",
      description: "Built hybrid semantic + keyword search engine with Elasticsearch, boosting data retrieval accuracy by 30% and supporting real-time analytics.",
      image: "/placeholder.svg",
      technologies: ["Elasticsearch", "Python", "FastAPI", "Machine Learning", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "TL-Connect Automation Platform",
      description: "Automated email workflows with chatbot APIs, reducing response time to under 5 minutes and improving customer satisfaction by 40%.",
      image: "/placeholder.svg",
      technologies: ["Python", "Django", "Celery", "PostgreSQL", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world solutions that demonstrate expertise in scalable systems and AI integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${
                project.featured 
                  ? 'lg:col-span-2 bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
                  : 'bg-slate-800/50'
              } rounded-3xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group shadow-2xl hover:shadow-purple-500/20`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${project.featured ? 'h-64' : 'h-48'} object-cover transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Featured Project
                  </div>
                )}
              </div>
              
              <div className={`p-8 ${project.featured ? 'lg:p-10' : ''}`}>
                <h3 className={`${project.featured ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-4`}>
                  {project.title}
                </h3>
                <p className={`text-gray-300 mb-6 leading-relaxed ${project.featured ? 'text-lg' : ''}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  <a
                    href={project.liveUrl}
                    className="group/link flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-semibold"
                  >
                    <ExternalLink size={20} className="group-hover/link:rotate-12 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="group/link flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors duration-200 font-semibold"
                  >
                    <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
