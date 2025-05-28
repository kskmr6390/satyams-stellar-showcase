
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration. Built with React.js frontend and Node.js backend.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express.js", "Socket.io", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities using external APIs.",
      image: "/placeholder.svg",
      technologies: ["React.js", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills with modern design and smooth animations.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <Github size={16} />
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
