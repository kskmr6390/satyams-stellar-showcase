import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 gradient-mask-radial pointer-events-none" />
      <div className="relative text-center max-w-md px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Error · 404
        </p>
        <h1 className="mt-4 text-7xl md:text-8xl font-semibold tracking-tight">
          Lost in the system.
        </h1>
        <p className="mt-4 text-muted-foreground">
          No route matches <code className="font-mono text-foreground">{location.pathname}</code>.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
