
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Skills", href: "#skills", type: "scroll" },
    { name: "Experience", href: "#experience", type: "scroll" },
    { name: "Achievements", href: "#achievements", type: "scroll" },
    { name: "Projects", href: "#projects", type: "scroll" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 80;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (item: typeof navItems[0]) => {
    if (item.type === "link") {
      return location.pathname === item.href;
    }
    return activeSection === item.href.slice(1);
  };

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.type === "scroll") {
      e.preventDefault();
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first then scroll
        window.location.href = "/" + item.href;
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-slate-800 dark:text-white hover:text-purple-600 transition-colors">
            Satyam <span className="text-purple-600">Kumar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item)
                      ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item)
                      ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  }`}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.name}
                </a>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item)
                        ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                        : "text-slate-700 dark:text-slate-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item)
                        ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                        : "text-slate-700 dark:text-slate-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
