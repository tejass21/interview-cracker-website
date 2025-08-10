import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Heart, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-hero text-foreground py-16 overflow-hidden">
      {/* Animated dot background */}
      <div className="absolute inset-0 dots-pattern" />
      
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/15 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/15 rounded-full blur-3xl floating" style={{animationDelay: '2s'}} />
      
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Interview Cracker</h3>
            <p className="text-foreground/80 leading-relaxed">
              AI-powered interview assistance that helps candidates land their dream jobs. 
              Join hundreds of successful professionals who've upgraded their careers.
            </p>
            <Badge variant="secondary" className="bg-gradient-card border border-primary/20 text-foreground backdrop-blur-sm">
              🏆 100% Success Guarantee
            </Badge>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-foreground/80">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-to-use" className="hover:text-foreground transition-colors">How to Use</a></li>
              <li><a href="#shortcuts" className="hover:text-foreground transition-colors">Keyboard Shortcuts</a></li>
              <li><a href="#testing" className="hover:text-foreground transition-colors">Testing Guide</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact & Support</h4>
            <div className="space-y-3">
              <Button 
                variant="hero" 
                className="w-full justify-start bg-gradient-card border border-primary/20 hover:bg-gradient-card/80 backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/919764980107', '_blank')}
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                +91 9764980107
              </Button>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security & privacy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>for interview success</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-foreground/80">
              <span>© 2024 Interview Cracker. All rights reserved.</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-foreground/60 text-sm">
              Disclaimer: Use responsibly and ethically. Interview Cracker is designed to enhance your preparation and confidence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;