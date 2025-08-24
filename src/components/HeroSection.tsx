import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, Eye, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, staggerContainer, textReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section className="section-modern bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.02]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-modern relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          {/* Badge */}
          <motion.div variants={fadeIn("up", 0.1)}>
            <Badge className="badge-modern mb-6 fade-in">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 10,000+ professionals
            </Badge>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-hero mb-6 slide-up"
            variants={textReveal(0.2)}
          >
            The No.1 Undetectable AI
            <span className="text-gradient block">for Interviews</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-subheading mb-8 slide-up"
            variants={textReveal(0.4)}
          >
            AI-powered interview assistant that helps you land your dream job. 
            Get real-time answers, instant feedback, and confidence to ace every interview.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up"
            variants={fadeIn("up", 0.6)}
          >
            <Button size="lg" className="btn-primary text-lg px-8 py-6 hover-glow">
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            <Button variant="outline" size="lg" className="btn-outline text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download for Mac
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground slide-up"
            variants={fadeIn("up", 0.8)}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Undetectable</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              <span>Instant Responses</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-500" />
              <span>Screen Share Safe</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Feature Cards */}
        <motion.div 
          className="grid-features max-w-5xl mx-auto"
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="card-elevated p-8 text-center hover-lift scale-in"
            variants={scaleIn(0.1)}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Undetectable Technology</h3>
            <p className="text-muted-foreground">
              Works seamlessly on all major platforms without detection
            </p>
          </motion.div>
          
          <motion.div 
            className="card-elevated p-8 text-center hover-lift scale-in"
            variants={scaleIn(0.2)}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant AI Responses</h3>
            <p className="text-muted-foreground">
              Get intelligent answers in real-time during your interview
            </p>
          </motion.div>
          
          <motion.div 
            className="card-elevated p-8 text-center hover-lift scale-in"
            variants={scaleIn(0.3)}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Screen Share Safe</h3>
            <p className="text-muted-foreground">
              Even while screen sharing, interviewers can't detect the app
            </p>
          </motion.div>
        </motion.div>
        
        {/* Success Story */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-muted-foreground mb-4">
              "Landed a ₹50 LPA package within 3 weeks of using DesierAI. 
              The real-time assistance gave me the confidence I needed."
            </blockquote>
            <cite className="text-sm font-medium">— Rahul, Senior Developer</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;