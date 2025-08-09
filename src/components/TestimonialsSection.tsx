import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ananya, SDE-2",
    company: "FinTech Unicorn",
    quote:
      "I cracked two FAANG-style rounds back-to-back. The real-time hints and undetectable overlay gave me superpowers.",
  },
  {
    name: "Rahul, Data Scientist",
    company: "Global Bank",
    quote:
      "Context-aware answers were spot on. Landed a ₹50 LPA offer within 3 weeks of using the app.",
  },
  {
    name: "Neha, Frontend Lead",
    company: "HealthTech",
    quote:
      "The screen-share safe mode is brilliant. I could stay focused while getting concise AI prompts.",
  },
  {
    name: "Vikram, Backend Engineer",
    company: "E‑commerce",
    quote:
      "Loved the instant response for tricky DSA and systems questions. Huge confidence boost in panel rounds.",
  },
  {
    name: "Priya, Product Manager",
    company: "SaaS",
    quote:
      "Follow‑up prompts were super relevant to my JD. Helped me structure crisp, outcome‑driven answers.",
  },
  {
    name: "Mohit, ML Engineer",
    company: "AI Startup",
    quote:
      "Privacy focus was key for me. Everything stayed local while still getting great AI suggestions.",
  },
  {
    name: "Isha, Mobile Dev",
    company: "EdTech",
    quote:
      "Shortcuts and overlay control are perfect. I could nudge hints without breaking eye contact.",
  },
  {
    name: "Arjun, DevOps",
    company: "Enterprise",
    quote:
      "Reliable, fast, and invisible. Perfect combo for on‑the‑spot troubleshooting questions.",
  },
];

const TestimonialsSection = () => {
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
      }, 3500);
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
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">⭐ Social Proof</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by Candidates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from users who turned interviews into offers
          </p>
        </div>

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
                  <Card className="h-full border-0 shadow-elegant hover:shadow-glow transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-accent fill-accent" />
                        ))}
                      </div>
                      <CardTitle className="text-base mt-2">{t.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{t.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 leading-relaxed">“{t.quote}”</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8 bg-background/80 backdrop-blur-sm" />
            <CarouselNext className="-right-4 md:-right-8 bg-background/80 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


