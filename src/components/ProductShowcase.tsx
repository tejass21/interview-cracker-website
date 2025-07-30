import { Card } from "@/components/ui/card";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* AI Analysis Feature */}
          <Card className="p-6 glow-border hover-lift group">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/cb186e8f-5c64-46cb-abb1-45086938252e.png" 
                alt="AI Analysis Interface"
                className="w-full rounded-lg shadow-lg group-hover:shadow-glow transition-shadow duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant AI Analysis</h3>
            <p className="text-muted-foreground text-sm">
              Get detailed explanations and solutions for complex technical questions
            </p>
          </Card>

          {/* Meeting Transcription Feature */}
          <Card className="p-6 glow-border hover-lift group">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/7ed793cd-5324-4f50-9e87-5e075bc52f15.png" 
                alt="Meeting Transcription Interface"
                className="w-full rounded-lg shadow-lg group-hover:shadow-glow transition-shadow duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Meeting Support</h3>
            <p className="text-muted-foreground text-sm">
              Real-time transcription and AI assistance during virtual interviews
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;