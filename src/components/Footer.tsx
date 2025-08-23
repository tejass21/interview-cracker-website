import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Heart, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">DesierAI</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered interview assistance that helps candidates land their dream jobs. 
              Join hundreds of successful professionals who've upgraded their careers.
            </p>
            <Badge variant="outline" className="text-foreground">
              🏆 100% Success Guarantee
            </Badge>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
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
            <h4 className="text-xl font-semibold text-foreground">Contact & Support</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start text-foreground"
                onClick={() => window.open('https://wa.me/919764980107', '_blank')}
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                +91 9764980107
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security & privacy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>for interview success</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 DesierAI. All rights reserved.</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm">
              Disclaimer: Use responsibly and ethically. DesierAI is designed to enhance your preparation and confidence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;