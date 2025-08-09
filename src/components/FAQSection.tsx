import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Is the app detectable during online interviews?",
    a: "No. The overlay is carefully designed to be screen-share safe and undetectable by meeting platforms.",
  },
  {
    q: "Do you store my meeting data?",
    a: "No. Your data stays on your device. We prioritize privacy and do not store personal meeting content.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 5 responses to try all core features. After that, subscribe for unlimited usage.",
  },
  {
    q: "Does it work on Zoom, Meet, and Teams?",
    a: "Yes. It works on all major platforms without any bots joining your calls.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">❓ FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


