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
    <section className="py-20 bg-background">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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