import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Heart, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <footer className="relative bg-background text-foreground py-16">
      <div className="container px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div 
            className="space-y-4"
            variants={fadeIn("up", 0.1)}
          >
            <h3 className="text-2xl font-bold text-foreground">DesierAI</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered interview assistance that helps candidates land their dream jobs. 
              Join hundreds of successful professionals who've upgraded their careers.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="text-foreground">
                🏆 100% Success Guarantee
              </Badge>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn("up", 0.2)}
          >
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <motion.ul 
              className="space-y-2 text-muted-foreground"
              variants={staggerContainer(0.05, 0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { href: "#features", text: "Features" },
                { href: "#how-to-use", text: "How to Use" },
                { href: "#shortcuts", text: "Keyboard Shortcuts" },
                { href: "#testing", text: "Testing Guide" },
                { href: "#testimonials", text: "Testimonials" },
                { href: "#faq", text: "FAQ" },
                { href: "#pricing", text: "Pricing" }
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  variants={fadeIn("left", index * 0.05)}
                  whileHover={{ x: 5 }}
                >
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn("up", 0.3)}
          >
            <h4 className="text-xl font-semibold text-foreground">Contact & Support</h4>
            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-foreground"
                  onClick={() => window.open('https://wa.me/919764980107', '_blank')}
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  +91 9764980107
                </Button>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-sm text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security & privacy</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-border pt-8"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="flex items-center gap-2 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.div>
              <span>for interview success</span>
            </motion.div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 DesierAI. All rights reserved.</span>
            </div>
          </div>
          
          <motion.div 
            className="text-center mt-6"
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-muted-foreground text-sm">
              Disclaimer: Use responsibly and ethically. DesierAI is designed to enhance your preparation and confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;