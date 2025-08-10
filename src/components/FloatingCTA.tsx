import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FloatingCTA = () => {
  const onClick = () => {
    const el = document.getElementById('downloads');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button variant="hero" size="lg" className="rounded-full shadow-neon bg-gradient-primary hover:bg-gradient-accent" onClick={onClick}>
        <Download className="w-5 h-5 mr-2" /> Get the App
      </Button>
    </div>
  );
};

export default FloatingCTA;


