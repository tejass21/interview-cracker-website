import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden" id="hero">
      {/* Animated dot background */}
      <div className="absolute inset-0 dots-pattern" />
      
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pulse-glow" />
      
      <div className="container relative z-10 px-4 text-center">
        <Badge variant="secondary" className="mb-6 glow-border pulse-glow animate-pulse reveal-up reveal-up-1">
          🏆 100% Interview Success Guarantee
        </Badge>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight tracking-tight">
          <span className="gradient-text sheen-text">Interview Cracker</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-medium text-foreground/90 mt-2 font-sans reveal-up reveal-up-2">
            AI-Powered Interview Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-foreground/80 leading-relaxed font-medium reveal-up reveal-up-3">
          One of our users successfully landed a <span className="gradient-text bg-gradient-text bg-clip-text text-transparent font-bold">₹50 LPA package</span> using this software.
          Join the growing list of candidates who are cracking top-tier interviews with confidence and ease.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center mb-16">
          <div className="flex items-center gap-3 bg-gradient-card px-8 py-4 rounded-2xl border border-primary/20 backdrop-blur-sm hover-lift group shadow-card reveal-up reveal-up-4">
            <Shield className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
            <span className="font-medium text-lg">Undetectable</span>
          </div>
          <div className="flex items-center gap-3 bg-gradient-card px-8 py-4 rounded-2xl border border-accent/20 backdrop-blur-sm hover-lift group shadow-card reveal-up reveal-up-5">
            <Zap className="w-6 h-6 text-accent group-hover:text-accent-glow transition-colors duration-300" />
            <span className="font-medium text-lg">Instant Response</span>
          </div>
          <div className="flex items-center gap-3 bg-gradient-card px-8 py-4 rounded-2xl border border-primary/20 backdrop-blur-sm hover-lift group shadow-card reveal-up reveal-up-6">
            <Eye className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
            <span className="font-medium text-lg">Screen Share Safe</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 font-semibold hover-lift shadow-glow hover:shadow-neon transition-all duration-300 rounded-2xl reveal-up reveal-up-7"
            onClick={() => {
              // Create a temporary link element to trigger download
              const link = document.createElement('a');
              link.href = '/assest/InterviewCrackerSetup.exe';
              link.download = 'InterviewCrackerSetup.exe';
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="w-6 h-6 mr-3" />
            Download for Windows
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 font-semibold hover-lift shadow-glow hover:shadow-neon transition-all duration-300 rounded-2xl reveal-up reveal-up-8"
            onClick={() => window.open('https://drive.google.com/file/d/1tOIF8UiAWO_v8bm5uDrkbdJ278JQPKrt/view', '_blank')}
          >
            <Download className="w-6 h-6 mr-3" />
            Download for Mac
          </Button>
        </div>
        
        <p className="text-base text-foreground/60 font-medium">
          5 free trial responses • No credit card required
        </p>
      </div>
    </section>
  );
};

export default HeroSection;