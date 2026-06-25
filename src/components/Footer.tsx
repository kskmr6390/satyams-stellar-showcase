import { Twitter, Linkedin, Github, Youtube, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/kskmr6390" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/satyam-chourasiya-931674141/" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/ksatyam1038" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@ksatyam1038" },
];

const cols = [
  {
    title: "Pages",
    links: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about" },
      { name: "Skills", to: "/skills" },
      { name: "Experience", to: "/experience" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Projects", to: "/projects" },
      { name: "Achievements", to: "/achievements" },
      { name: "Blog", to: "/blog" },
      { name: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2 font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background text-sm font-bold">
                S
              </span>
              <span className="tracking-tight">Satyam <span className="text-muted-foreground">Chourasiya</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Staff Engineer at Sandisk. Building distributed systems, AI-powered platforms, and the teams that ship them.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Get in touch
            </p>
            <a
              href="mailto:ksatyam1038@gmail.com"
              className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-violet-400 transition-colors"
            >
              ksatyam1038@gmail.com
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Bangalore, India</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Satyam Kumar Chourasiya
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with React · Tailwind · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
