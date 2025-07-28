import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pulse-glow" />
      
      <div className="container relative z-10 px-4 text-center">
        <Badge variant="secondary" className="mb-6 glow-border pulse-glow animate-pulse">
          🏆 100% Interview Success Guarantee
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Interview Cracker</span>
          <span className="block text-3xl md:text-5xl font-medium opacity-90 mt-2">
            AI-Powered Interview Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
          One of our users successfully landed a <span className="gradient-text font-bold">₹50 LPA package</span> using this software.
          Join the growing list of candidates who are cracking top-tier interviews with confidence and ease.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2 glow-border px-6 py-3 rounded-full backdrop-blur-sm hover-lift group">
            <Shield className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-medium">Undetectable</span>
          </div>
          <div className="flex items-center gap-2 glow-border px-6 py-3 rounded-full backdrop-blur-sm hover-lift group">
            <Zap className="w-5 h-5 group-hover:text-accent transition-colors" />
            <span className="font-medium">Instant Response</span>
          </div>
          <div className="flex items-center gap-2 glow-border px-6 py-3 rounded-full backdrop-blur-sm hover-lift group">
            <Eye className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-medium">Screen Share Safe</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover-lift shadow-glow hover:shadow-neon transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Button>
          <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4 hover-lift">
            View Features
          </Button>
        </div>
        
        <p className="mt-6 text-sm opacity-80">
          5 free trial responses • No credit card required
        </p>
      </div>
    </section>
  );
};

export default HeroSection;