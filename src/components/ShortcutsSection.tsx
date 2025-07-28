import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Keyboard, Eye, ArrowLeft, ArrowRight, Move, MessageSquare } from "lucide-react";

const shortcuts = [
  {
    keys: "Ctrl + \\",
    action: "Hide the screen",
    icon: Eye
  },
  {
    keys: "Ctrl + Enter",
    action: "Screen Analyze",
    icon: Eye
  },
  {
    keys: "Ctrl + [",
    action: "Previous response/page",
    icon: ArrowLeft
  },
  {
    keys: "Ctrl + ]",
    action: "Next response/page",
    icon: ArrowRight
  },
  {
    keys: "Ctrl + ↑ ↓ ← →",
    action: "Move the screen",
    icon: Move
  }
];

const ShortcutsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ⌨️ Keyboard Shortcuts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Master the Controls
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use these keyboard shortcuts during your interview for seamless operation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {shortcuts.map((shortcut, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-primary p-3 rounded-xl w-fit mx-auto mb-4">
                  <shortcut.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-mono bg-muted px-3 py-1 rounded">
                  {shortcut.keys}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground font-medium">
                  {shortcut.action}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Manual Questions</h3>
          </div>
          <p className="text-muted-foreground text-lg">
            💬 You can also ask questions manually anytime during your interview
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShortcutsSection;