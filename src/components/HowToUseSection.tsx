import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Gift, CreditCard, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const steps = [
  {
    icon: Download,
    title: "Launch the App",
    description: "Download and click on the .exe file to launch the app instantly",
    color: "bg-gradient-primary"
  },
  {
    icon: Gift,
    title: "Free Trial",
    description: "You get 5 free responses to test all features and understand the app flow",
    color: "bg-gradient-accent"
  },
  {
    icon: CreditCard,
    title: "Subscription Required",
    description: "After using the 5 trial responses, you'll need to subscribe for unlimited access",
    color: "bg-gradient-primary"
  }
];

const HowToUseSection = () => {
  return (
    <section id="how-to-use" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🚀 Getting Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to Use the App
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-screen-lg mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-elegant">
              <CardHeader className="text-center pb-4">
                <div className={`${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    Step {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-card rounded-2xl p-8 shadow-elegant max-w-screen-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <FaWhatsapp className="w-6 h-6 text-primary" />
            Ready to Upgrade?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us to upgrade your plan and unlock unlimited responses
          </p>
          <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow transition-all"
            onClick={() => window.open('https://wa.me/919764980107', '_blank')}
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            +91 9764980107
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;