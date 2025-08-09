import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Laptop, Play, Users, Gift } from "lucide-react";

const testingSteps = [
  {
    step: 1,
    title: "Create a Meeting",
    description: "Set up a meeting link using Zoom, Google Meet, or Microsoft Teams",
    icon: Video
  },
  {
    step: 2,
    title: "Use Two Devices",
    description: "One laptop for the interviewer, another for the candidate",
    icon: Laptop
  },
  {
    step: 3,
    title: "Run the App",
    description: "Execute the .exe file on the candidate's laptop",
    icon: Play
  },
  {
    step: 4,
    title: "Start Testing",
    description: "Ask questions from interviewer's device and receive answers",
    icon: Users
  }
];

const TestingSection = () => {
  return (
    <section id="testing" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🧪 Testing Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to Test the App
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow this simple testing process to see Interview Cracker in action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testingSteps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-elegant text-center">
              <CardHeader className="pb-4">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-primary">
                    {step.step}
                  </Badge>
                </div>
                <div className="bg-gradient-accent p-4 rounded-xl w-fit mx-auto mb-4 mt-4">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-accent rounded-2xl p-8 text-center shadow-glow">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-accent-foreground" />
            <h3 className="text-3xl font-bold text-accent-foreground">Free Trial Included</h3>
          </div>
          <p className="text-accent-foreground/90 text-xl mb-6">
            You have 5 trial responses under the free/basic plan to test all features
          </p>
          <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestingSection;