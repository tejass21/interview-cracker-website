import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, DollarSign, Star, Shield, Zap } from "lucide-react";

const features = [
  "Unlimited AI responses during interviews",
  "Advanced screen analysis capabilities", 
  "Real-time code assistance and debugging",
  "Resume and job description context awareness",
  "24/7 priority customer support",
  "Regular software updates and improvements",
  "Complete privacy and data protection",
  "Works on all major video platforms"
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            💰 Subscription Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock unlimited potential with our premium subscription. 
            Contact us directly for personalized pricing that fits your needs.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-10" />
            <CardHeader className="text-center relative z-10 pb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-8 h-8 text-accent fill-accent" />
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold mb-2">Premium Plan</CardTitle>
              <p className="text-muted-foreground text-lg">
                Everything you need to ace your interviews
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold">Custom Pricing</span>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-accent/20 p-1 rounded-full">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold">What's Included</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized pricing based on your requirements</li>
                  <li>• Flexible payment options available</li>
                  <li>• Money-back guarantee if not satisfied</li>
                  <li>• Dedicated account manager for enterprise users</li>
                </ul>
              </div>
              
              <div className="text-center space-y-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                  onClick={() => window.open('mailto:interviewcrackertips@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Custom Pricing
                </Button>
                <p className="text-sm text-muted-foreground">
                  Contact us at{" "}
                  <span className="font-medium text-primary">interviewcrackertips@gmail.com</span>
                  {" "}for detailed pricing information
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Premium Plan?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful candidates who have landed their dream jobs using Interview Cracker. 
              Our premium plan offers the complete toolkit you need for interview success.
            </p>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
              ₹50 LPA Success Story Included
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;