import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Eye, Brain, Lock, Code } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Undetectable Technology",
    description: "Works seamlessly on Google Meet, Zoom, and Microsoft Teams without detection",
    badge: "100% Safe"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Get quick, intelligent answers, code assistance, and assignment help in real-time",
    badge: "Lightning Fast"
  },
  {
    icon: Eye,
    title: "Screen Share Safe",
    description: "Even while screen sharing, interviewers can't detect the app running",
    badge: "Invisible"
  },
  {
    icon: Brain,
    title: "Smart AI Analysis",
    description: "Advanced AI provides contextual responses based on your resume and job description",
    badge: "AI-Powered"
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your data remains secure with enterprise-grade encryption and privacy protection",
    badge: "Secure"
  },
  {
    icon: Code,
    title: "Technical Support",
    description: "Get help with coding questions, algorithms, and technical problem-solving",
    badge: "Dev Ready"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🔥 Why This App Is Special
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features That Give You The Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interview Cracker is a powerful AI-based tool designed to help candidates during online interviews.
            What sets it apart from the competition?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-interactive group border-0 bg-card/90 backdrop-blur-sm hover-lift">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;