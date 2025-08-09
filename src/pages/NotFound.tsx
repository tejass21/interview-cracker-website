import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl md:text-8xl font-display font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground hover:shadow-neon shadow-glow transition-all">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
