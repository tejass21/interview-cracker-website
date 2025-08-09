import { Card } from "@/components/ui/card";

const productShowcaseItems = [
  {
    src: "/assest/1.png",
    alt: "AI-Powered Question Answering",
    title: "AI-Powered Question Answering",
    description: "Get instant, accurate, and comprehensive answers to any interview question, powered by advanced AI.",
  },
  {
    src: "/assest/2.png",
    alt: "Real-time Feedback",
    title: "Real-time Feedback",
    description: "Receive immediate constructive feedback on your responses, including clarity, conciseness, and relevance.",
  },
  {
    src: "/assest/3.png",
    alt: "Customizable Interview Simulations",
    title: "Customizable Interview Simulations",
    description: "Practice with tailored interview scenarios across various industries and roles to build confidence.",
  },
  {
    src: "/assest/4.png",
    alt: "Performance Analytics",
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics and identify areas for improvement to optimize your preparation.",
  },
  {
    src: "/assest/5.png",
    alt: "Multi-language Support",
    title: "Multi-language Support",
    description: "Prepare for interviews in multiple languages, ensuring you're ready for global opportunities.",
  },
];

const ProductShowcase = () => {
  return (
    <section id="showcase" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="gradient-text">Interview Cracker</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time AI assistance that helps you ace every interview question
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {productShowcaseItems.map((item, index) => (
            <Card key={index} className="p-6 glow-border hover-lift group">
              <div className="mb-4">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full rounded-lg shadow-lg group-hover:shadow-glow transition-shadow duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;