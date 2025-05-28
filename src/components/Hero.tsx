
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <img
            src="/placeholder.svg"
            alt="Satyam Chourasiya"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-2xl animate-fade-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Satyam</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 h-8 animate-fade-in">
          {displayText}<span className="animate-pulse">|</span>
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Passionate about creating exceptional digital experiences with modern technologies. 
          Let's build something amazing together.
        </p>
        
        <div className="space-x-4 animate-fade-in">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get to Know Me
          </button>
          <a
            href="#contact"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block"
          >
            Let's Connect
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
