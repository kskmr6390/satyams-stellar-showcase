import { ArrowDown, Download, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import LinkedInBackground from "./LinkedInBackground";
import VoiceIntro from "./VoiceIntro";
import TopmateMeeting from "./TopmateMeeting";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Staff Engineer at Sandisk";
  
  const introText = "Hi, I'm Satyam Kumar Chourasiya, a Staff Engineer at Sandisk with over 6 years of experience in designing scalable backend systems, distributed storage solutions, cloud deployment, and leading high-performance engineering teams. I specialize in Python, FastAPI, and building enterprise-scale applications that drive business growth.";
  
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
      
      <div className="text-center z-20 px-4 max-w-5xl mx-auto pt-20">
        <div className="mb-8 relative mt-8">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/profile-pic.png"
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
          Staff Engineer at Sandisk with 6+ years of experience in designing scalable backend systems, 
          distributed storage solutions, cloud deployment, and leading high-performance engineering teams. Specialized in{" "}
          <span className="text-purple-400 font-medium">Enterprise Architecture</span>,{" "}
          <span className="text-pink-400 font-medium">Cloud Infrastructure</span>, and{" "}
          <span className="text-blue-400 font-medium">Distributed Systems</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in flex-wrap">
          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            Get to Know Me
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <VoiceIntro text={introText} />
          
          <TopmateMeeting />
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <button
                onClick={handleResumeDownload}
                className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96 p-6">
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-semibold">Resume Preview</h4>
                <p className="text-sm text-muted-foreground">
                  Click to download my latest resume in PDF format
                </p>
                <div className="border rounded-md overflow-hidden bg-muted/50">
                  <iframe
                    src="https://github.com/kskmr6390/satyams-stellar-showcase/blob/main/resume.pdf"
                    width="100%"
                    height="300"
                    className="rounded border-0"
                    title="Resume Preview"
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  📄 satyam_resume.pdf
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="https://www.linkedin.com/in/satyam-chourasiya-931674141/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25 flex items-center gap-3"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View LinkedIn
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-96 p-6">
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-semibold">LinkedIn Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with me on LinkedIn to see my professional network and experience
                </p>
                <div className="border rounded-md p-4 bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SC</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-base">Satyam Kumar Chourasiya</p>
                      <p className="text-sm text-muted-foreground">Staff Engineer at Sandisk</p>
                      <p className="text-sm text-blue-600">500+ connections</p>
                      <p className="text-xs text-muted-foreground mt-1">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="font-medium mb-1">Experience Highlights:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 6+ years in Backend Engineering</li>
                      <li>• Python, FastAPI, AWS Expert</li>
                      <li>• Led teams of 5+ developers</li>
                      <li>• Built AI-powered platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="https://github.com/kskmr6390"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View GitHub
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-96 p-6">
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-semibold">GitHub Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Explore my code repositories and open source contributions
                </p>
                <div className="border rounded-md p-4 bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-base">kskmr6390</p>
                      <p className="text-sm text-muted-foreground">Satyam Kumar Chourasiya</p>
                      <p className="text-xs text-muted-foreground mt-1">Backend Engineer & Open Source Contributor</p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="font-medium mb-1">Repository Highlights:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Python & FastAPI projects</li>
                      <li>• AI/ML implementations</li>
                      <li>• Cloud deployment scripts</li>
                      <li>• Microservices architecture</li>
                    </ul>
                  </div>
                  <div className="flex gap-4 mt-3 text-xs">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Python</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">JavaScript</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Docker</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="text-gray-300 opacity-70" size={32} />
      </div>
    </section>
  );
};

export default Hero;
