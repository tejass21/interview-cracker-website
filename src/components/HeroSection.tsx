import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 text-center text-primary-foreground">
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
          🏆 100% Interview Success Guarantee
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Interview Cracker
          <span className="block text-3xl md:text-5xl font-medium opacity-90">
            AI-Powered Interview Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
          One of our users successfully landed a ₹50 LPA package using this software.
          Join the growing list of candidates who are cracking top-tier interviews with confidence and ease.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Shield className="w-5 h-5" />
            <span>Undetectable</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Zap className="w-5 h-5" />
            <span>Instant Response</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Eye className="w-5 h-5" />
            <span>Screen Share Safe</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Button>
          <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
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