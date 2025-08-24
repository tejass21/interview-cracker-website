import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, staggerContainer, textReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Ananya, SDE-2",
    company: "FinTech Unicorn",
    quote: "I cracked two FAANG-style rounds back-to-back. The real-time hints and undetectable overlay gave me superpowers.",
    rating: 5,
    avatar: "A"
  },
  {
    name: "Rahul, Data Scientist",
    company: "Global Bank",
    quote: "Context-aware answers were spot on. Landed a ₹50 LPA offer within 3 weeks of using the app.",
    rating: 5,
    avatar: "R"
  },
  {
    name: "Neha, Frontend Lead",
    company: "HealthTech",
    quote: "The screen-share safe mode is brilliant. I could stay focused while getting concise AI prompts.",
    rating: 5,
    avatar: "N"
  },
  {
    name: "Vikram, Backend Engineer",
    company: "E‑commerce",
    quote: "Loved the instant response for tricky DSA and systems questions. Huge confidence boost in panel rounds.",
    rating: 5,
    avatar: "V"
  },
  {
    name: "Priya, Product Manager",
    company: "SaaS",
    quote: "Follow‑up prompts were super relevant to my JD. Helped me structure crisp, outcome‑driven answers.",
    rating: 5,
    avatar: "P"
  },
  {
    name: "Mohit, ML Engineer",
    company: "AI Startup",
    quote: "Privacy focus was key for me. Everything stayed local while still getting great AI suggestions.",
    rating: 5,
    avatar: "M"
  },
  {
    name: "Isha, Mobile Dev",
    company: "EdTech",
    quote: "Shortcuts and overlay control are perfect. I could nudge hints without breaking eye contact.",
    rating: 5,
    avatar: "I"
  },
  {
    name: "Arjun, DevOps",
    company: "Enterprise",
    quote: "Reliable, fast, and invisible. Perfect combo for on‑the‑spot troubleshooting questions.",
    rating: 5,
    avatar: "A"
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const apiRef = useRef<CarouselApi | null>(null);
  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const api = apiRef.current;
    if (!api) return;

    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        if (!pausedRef.current) api.scrollNext();
      }, 4000);
    };

    const stop = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };

    start();
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, []);

  return (
    <section id="testimonials" className="section-modern bg-muted/30">
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
              Success Stories
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-heading mb-6 slide-up"
            variants={textReveal(0.2)}
          >
            Loved by
            <span className="text-gradient block">Professionals</span>
          </motion.h2>
          <motion.p 
            className="text-subheading max-w-2xl mx-auto slide-up"
            variants={textReveal(0.4)}
          >
            Real stories from candidates who turned interviews into offers with DesierAI
          </motion.p>
        </motion.div>

        <div
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="relative"
        >
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={(api) => (apiRef.current = api)}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="card-elevated h-full hover-lift scale-in">
                    <CardHeader className="pb-4">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-muted-foreground leading-relaxed text-lg">
                        "{t.quote}"
                      </blockquote>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">{t.avatar}</span>
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold">{t.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{t.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <CarouselPrevious className="-left-4 md:-left-8 bg-background border-border hover:bg-accent" />
            <CarouselNext className="-right-4 md:-right-8 bg-background border-border hover:bg-accent" />
          </Carousel>
        </div>
        
        {/* Stats */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer(0.1, 0.6)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn(0.1)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn(0.2)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn(0.3)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">₹50LPA</div>
              <div className="text-sm text-muted-foreground">Highest Package</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


