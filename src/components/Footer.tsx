import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Interview Cracker</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              AI-powered interview assistance that helps candidates land their dream jobs. 
              Join hundreds of successful professionals who've upgraded their careers.
            </p>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              🏆 100% Success Guarantee
            </Badge>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#how-to-use" className="hover:text-primary-foreground transition-colors">How to Use</a></li>
              <li><a href="#shortcuts" className="hover:text-primary-foreground transition-colors">Keyboard Shortcuts</a></li>
              <li><a href="#testing" className="hover:text-primary-foreground transition-colors">Testing Guide</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact & Support</h4>
            <div className="space-y-3">
              <Button 
                variant="hero" 
                className="w-full justify-start bg-primary-foreground/10 hover:bg-primary-foreground/20"
                onClick={() => window.open('mailto:interviewcrackertips@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                interviewcrackertips@gmail.com
              </Button>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security & privacy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>for interview success</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <span>© 2024 Interview Cracker. All rights reserved.</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-primary-foreground/60 text-sm">
              Disclaimer: Use responsibly and ethically. Interview Cracker is designed to enhance your preparation and confidence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;