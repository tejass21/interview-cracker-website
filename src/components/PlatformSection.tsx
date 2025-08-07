import { Card } from "@/components/ui/card";

const PlatformSection = () => {
  return (
    <section id="platforms" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Works on all platforms. <span className="gradient-text">No meeting bots.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transcribe audio and generate AI notes without bots joining your meetings.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Card className="p-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50">
            <span className="text-lg font-semibold">Slack</span>
          </Card>
          <Card className="p-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50">
            <span className="text-lg font-semibold">Google Meet</span>
          </Card>
          <Card className="p-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50">
            <span className="text-lg font-semibold">Zoom</span>
          </Card>
          <Card className="p-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50">
            <span className="text-lg font-semibold">Webex</span>
          </Card>
          <Card className="p-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50">
            <span className="text-lg font-semibold">Microsoft Teams</span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
