import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, staggerContainer, textReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rawLogos = [
  { path: "assest/slack.png", alt: "Slack" },
  { path: "assest/teams.png", alt: "Microsoft Teams" },
  { path: "assest/webex.png", alt: "Webex" },
  { path: "assest/zoom.png", alt: "Zoom" },
  { path: "assest/meet.png", alt: "Google Meet" },
];

const PlatformSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="platforms" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="mb-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <Badge className="badge-modern mb-6 fade-in">
              <Globe className="w-3 h-3 mr-1" />
              Universal Compatibility
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={textReveal(0.2)}
          >
            Seamlessly Works on
            <span className="text-gradient block">All Major Platforms</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={textReveal(0.4)}
          >
            From Zoom to Teams, Google Meet to Slack - your AI assistant works everywhere without any setup.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center"
          variants={staggerContainer(0.1, 0.5)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {rawLogos.map((logo, index) => {
            const src = `${import.meta.env.BASE_URL}${logo.path}`;
            return (
              <motion.div
                key={logo.alt}
                variants={scaleIn(index * 0.1)}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-4 w-full sm:w-48 bg-card border border-border hover:border-primary/50 transition-all hover-lift shadow-sm">
                  <motion.div 
                    className="h-12 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <img 
                      src={src} 
                      alt={logo.alt} 
                      title={logo.alt}
                      className="h-8 object-contain opacity-90"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </motion.div>
                  <p className="mt-3 text-sm text-muted-foreground">{logo.alt}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
