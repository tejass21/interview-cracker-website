import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Apple, Monitor, Mail, Shield, AlertTriangle } from "lucide-react";

const downloads = [
  {
    platform: "macOS",
    icon: Apple,
    url: "https://drive.google.com/file/d/1_8KWm3eYJ48D1hdTEJlvwLBtqfv91ohy/view?usp=drive_link",
    description: "Compatible with macOS 10.14 and later"
  },
  {
    platform: "Windows",
    icon: Monitor,
    url: "https://drive.google.com/file/d/14s7Igwq3XiT0GGY-LPKIH4txAihGkOse/view?usp=drive_link",
    description: "Compatible with Windows 10 and later"
  }
];

const usageRules = [
  "Forward your interview confirmation email to interviewcrackertips@gmail.com",
  "Do not share this app with friends or third parties",
  "Do not resell access to the application",
  "Only use the tool until you secure your job offer"
];

const DownloadSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📥 Download Links
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your platform and start cracking interviews with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {downloads.map((download, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-4 group-hover:shadow-glow transition-all">
                  <download.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{download.platform}</CardTitle>
                <p className="text-muted-foreground">{download.description}</p>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                  onClick={() => window.open(download.url, '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download for {download.platform}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shield className="w-6 h-6 text-accent" />
                Usage Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usageRules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      {index + 1}
                    </Badge>
                    <p className="text-muted-foreground">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Need Linux Support?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Linux version is available upon request. Contact our support team for assistance.
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.open('mailto:interviewcrackertips@gmail.com', '_blank')}>
                <Mail className="w-4 h-4 mr-2" />
                Contact for Linux Version
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Download the app now and take the first step towards your dream job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Download className="w-4 h-4 mr-2" />
              Download Now
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('mailto:interviewcrackertips@gmail.com', '_blank')}>
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;