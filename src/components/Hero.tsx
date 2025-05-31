import { ArrowDown, Download, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import LinkedInBackground from "./LinkedInBackground";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Senior Backend Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/kskmr6390/satyams-stellar-showcase/raw/main/resume.pdf';
    link.download = 'satyam_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* LinkedIn Background Scroll */}
      <LinkedInBackground />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/70 to-pink-900/70"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
      
      <div className="text-center z-20 px-4 max-w-5xl mx-auto">
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/608bfbbf-b299-4088-a452-f703c3f34c4a.png"
              alt="Satyam Kumar Chourasiya"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl animate-fade-in relative z-10 object-cover"
            />
            <div className="absolute inset-0 w-40 h-40 rounded-full mx-auto animate-pulse bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl"></div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
            Satyam Kumar Chourasiya
          </span>
        </h1>
        
        <div className="relative mb-8">
          <p className="text-2xl md:text-4xl text-gray-200 h-12 animate-fade-in font-light">
            {displayText}<span className="animate-pulse text-purple-400">|</span>
          </p>
        </div>
        
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light">
          Expert in Python & FastAPI with 6+ years of experience in designing scalable backend systems, 
          cloud deployment, and leading high-performance engineering teams. Specialized in{" "}
          <span className="text-purple-400 font-medium">Scalable Systems</span>,{" "}
          <span className="text-pink-400 font-medium">Cloud Deployment</span>, and{" "}
          <span className="text-blue-400 font-medium">AI-powered applications</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            Get to Know Me
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={handleResumeDownload}
            className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          
          <a
            href="https://www.linkedin.com/in/satyam-chourasiya-931674141/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25 flex items-center gap-3"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View LinkedIn
          </a>
          
          <a
            href="https://github.com/kskmr6390"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 flex items-center gap-3"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View GitHub
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="text-gray-300 opacity-70" size={32} />
      </div>
    </section>
  );
};

export default Hero;
