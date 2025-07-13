import { Youtube, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "YouTube",
      count: "150k",
      icon: Youtube,
      url: "https://youtube.com/@ksatyam1038",
      bgColor: "hover:bg-red-600",
      textColor: "group-hover:text-white"
    },
    {
      name: "Twitter",
      count: "70k", 
      icon: Twitter,
      url: "https://twitter.com/ksatyam1038",
      bgColor: "hover:bg-sky-500",
      textColor: "group-hover:text-white"
    },
    {
      name: "LinkedIn",
      count: "200k",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/satyam-chourasiya-931674141/",
      bgColor: "hover:bg-blue-600",
      textColor: "group-hover:text-white"
    },
    {
      name: "GitHub",
      count: "5k",
      icon: Github,
      url: "https://github.com/kskmr6390",
      bgColor: "hover:bg-gray-700",
      textColor: "group-hover:text-white"
    }
  ];

  return (
    <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full border border-slate-700 transition-all duration-300 transform hover:scale-105 ${social.bgColor}`}
            >
              <social.icon className={`w-5 h-5 text-gray-400 transition-colors ${social.textColor}`} />
              <span className={`text-gray-400 font-medium transition-colors ${social.textColor}`}>
                {social.name}
              </span>
              <span className={`text-sm font-bold bg-slate-700 px-2 py-1 rounded-md text-gray-300 group-hover:bg-slate-600 transition-colors`}>
                ({social.count})
              </span>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Satyam Chourasiya. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Backend Engineer • AI Enthusiast • System Architect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;