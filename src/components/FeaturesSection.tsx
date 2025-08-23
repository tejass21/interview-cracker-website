import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Eye, Brain, Lock, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Undetectable Technology",
    description: "Advanced stealth technology that works seamlessly on Google Meet, Zoom, and Microsoft Teams without any detection",
    badge: "100% Safe",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Get quick, intelligent answers, code assistance, and assignment help in real-time during your interview",
    badge: "Lightning Fast",
    color: "text-blue-500"
  },
  {
    icon: Eye,
    title: "Screen Share Safe",
    description: "Even while screen sharing, interviewers can't detect the app running in the background",
    badge: "Invisible",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "Smart AI Analysis",
    description: "Advanced AI provides contextual responses based on your resume and job description",
    badge: "AI-Powered",
    color: "text-orange-500"
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your data remains secure with enterprise-grade encryption and privacy protection",
    badge: "Secure",
    color: "text-red-500"
  },
  {
    icon: Code,
    title: "Technical Support",
    description: "Get help with coding questions, algorithms, and technical problem-solving in real-time",
    badge: "Dev Ready",
    color: "text-indigo-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-modern bg-muted/30">
      <div className="container-modern">
        <div className="text-center mb-16">
          <Badge className="badge-modern mb-6 fade-in">
            <CheckCircle className="w-3 h-3 mr-1" />
            Why Choose DesierAI
          </Badge>
          <h2 className="text-heading mb-6 slide-up">
            Powerful Features That Give You
            <span className="text-gradient block">The Competitive Edge</span>
          </h2>
          <p className="text-subheading max-w-3xl mx-auto slide-up">
            DesierAI is designed to help candidates excel during online interviews with cutting-edge AI technology and proven success rates.
          </p>
        </div>
        
        <div className="grid-features">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated group hover-lift scale-in">
              <CardContent className="p-8">
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="mt-6 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Learn more</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Interview Experience?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful professionals who have landed their dream jobs with DesierAI
            </p>
            <Button size="lg" className="btn-primary hover-glow">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;