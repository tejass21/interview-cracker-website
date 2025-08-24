import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Zap, Crown, Download, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, staggerContainer, textReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "$0",
    duration: "Forever",
    description: "Perfect for trying out our AI assistant",
    features: [
      "10 free AI responses",
      "Basic interview assistance",
      "Standard response time",
      "Community support",
      "Basic screen analysis"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    popular: false,
    icon: Shield,
    color: "text-blue-500"
  },
  {
    name: "Pro Monthly",
    price: "$20",
    duration: "per month",
    description: "Best for active job seekers",
    features: [
      "Unlimited AI responses",
      "Advanced interview assistance",
      "Priority response time",
      "Email & WhatsApp support",
      "Advanced screen analysis",
      "Resume context awareness",
      "Real-time code assistance",
      "Regular updates"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
    icon: Zap,
    color: "text-green-500"
  },
  {
    name: "Lifetime",
    price: "$100",
    duration: "one-time",
    description: "Best value for long-term success",
    features: [
      "Everything in Pro Monthly",
      "Lifetime access",
      "Premium customer support",
      "Early access to new features",
      "Dedicated account manager",
      "Custom integrations",
      "Priority bug fixes",
      "Exclusive training materials"
    ],
    buttonText: "Get Lifetime Access",
    buttonVariant: "default" as const,
    popular: false,
    icon: Crown,
    color: "text-purple-500"
  }
];

const PricingSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="pricing" className="section-modern bg-background">
      <div className="container-modern">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <Badge className="badge-modern mb-6 fade-in">
              <Star className="w-3 h-3 mr-1" />
              Choose Your Plan
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-heading mb-6 slide-up"
            variants={textReveal(0.2)}
          >
            Simple, Transparent
            <span className="text-gradient block">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-subheading max-w-3xl mx-auto slide-up"
            variants={textReveal(0.4)}
          >
            Start free and upgrade as you grow. No hidden fees, no surprises. 
            Choose the plan that fits your career goals.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={scaleIn(index * 0.1)}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card 
                  className={`card-elevated relative overflow-visible hover-lift scale-in ${
                    plan.popular 
                      ? 'ring-2 ring-primary shadow-2xl border-primary/20' 
                      : ''
                  }`}
                >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                    <Badge className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl border-2 border-background font-semibold text-sm hover:bg-primary/90">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-6 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${plan.color}`} />
                    </div>
                  </div>
                  
                  {/* Plan Info */}
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    size="lg" 
                    className="w-full hover-glow"
                    onClick={() => {
                      if (plan.name === "Free") {
                        const link = document.createElement('a');
                        link.href = '/assest/InterviewCrackerSetup.exe';
                        link.download = 'InterviewCrackerSetup.exe';
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        window.open('https://wa.me/919764980107', '_blank');
                      }
                    }}
                  >
                    {plan.name === "Free" ? (
                      <Download className="w-4 h-4 mr-2" />
                    ) : (
                      <FaWhatsapp className="w-4 h-4 mr-2" />
                    )}
                    {plan.buttonText}
                  </Button>
                  
                  {plan.name !== "Free" && (
                    <p className="text-xs text-center text-muted-foreground">
                      Contact us at +91 9764980107 for payment
                    </p>
                  )}
                </CardContent>
              </Card>
                </motion.div>
            );
          })}
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="card-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              Why Choose DesierAI?
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
              variants={staggerContainer(0.1, 0.5)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn("left", 0.1)}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Shield className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-2">100% Undetectable</h4>
                  <p className="text-sm text-muted-foreground">Works seamlessly on all major platforms</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn("left", 0.2)}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Zap className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-2">Instant Responses</h4>
                  <p className="text-sm text-muted-foreground">Get answers in real-time during interviews</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn("left", 0.3)}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Crown className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Support</h4>
                  <p className="text-sm text-muted-foreground">24/7 customer support via WhatsApp</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;