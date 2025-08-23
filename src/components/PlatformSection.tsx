import { Card } from "@/components/ui/card";

const rawLogos = [
  { path: "assest/slack_logo.png", alt: "Slack" },
  { path: "assest/google_meet_logo.png", alt: "Google Meet" },
  { path: "assest/zoom_logo.png", alt: "Zoom" },
  { path: "assest/webex_logo.png", alt: "Webex" },
  { path: "assest/ms_teams_logo.png", alt: "Microsoft Teams" },
];

const PlatformSection = () => {
  return (
    <section id="platforms" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Works on all platforms. <span className="text-primary">No meeting bots.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transcribe audio and generate AI notes without bots joining your meetings.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {rawLogos.map((logo) => {
            const src = `${import.meta.env.BASE_URL}${logo.path}`;
            return (
              <Card key={logo.alt} className="p-4 w-full sm:w-48 bg-card border border-border hover:border-primary/50 transition-all hover-lift shadow-sm">
                <div className="h-12 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt={logo.alt} 
                    title={logo.alt}
                    className="h-8 object-contain opacity-90"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{logo.alt}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
