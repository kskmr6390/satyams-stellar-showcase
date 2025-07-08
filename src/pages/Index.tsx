
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import AIProjectPopup from "@/components/AIProjectPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <AIProjectPopup />
    </div>
  );
};

export default Index;
