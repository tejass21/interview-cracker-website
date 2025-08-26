import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, AlertTriangle, Monitor, Apple } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useDownloadWithAuth } from "@/hooks/useDownloadWithAuth";

const downloads = [
  {
    platform: "Windows",
    description: "Compatible with Windows 10/11",
    icon: Monitor,
    url: "https://1drv.ms/u/s!ArtKXkK6-w6FjrtwaangEdO2SDuEkQ?e=QDQlAR"
  },
  {
    platform: "Mac",
    description: "Compatible with macOS 10.15+",
    icon: Apple,
    url: "https://drive.google.com/file/d/1tOIF8UiAWO_v8bm5uDrkbdJ278JQPKrt/view"
  }
];

const usageRules = [
  "Use responsibly and ethically during interviews",
  "Ensure stable internet connection for optimal performance",
  "Keep the app updated to the latest version",
  "Contact support if you encounter any issues"
];

const DownloadSection = () => {
  const { handleDownload } = useDownloadWithAuth();
  
  return (
    <section id="downloads" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📥 Download
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get DesierAI Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your platform and start cracking interviews with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {downloads.map((download, index) => (
            <Card key={index} className="border border-border bg-card hover-lift shadow-sm transition-all duration-200 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary p-4 rounded-lg w-fit mx-auto mb-4">
                  <download.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">{download.platform}</CardTitle>
                <p className="text-muted-foreground">{download.description}</p>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleDownload(download.url, download.platform)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download for {download.platform}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                <Shield className="w-6 h-6 text-primary" />
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
          
          <Card className="border border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Need Linux Support?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Linux version is available upon request. Contact our support team for assistance.
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.open('https://wa.me/919764980107', '_blank')}>
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Contact for Linux Version
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 bg-card rounded-lg p-8 border border-border shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Download the app now and take the first step towards your dream job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg"
              onClick={() => handleDownload('https://1drv.ms/u/s!ArtKXkK6-w6FjrtwaangEdO2SDuEkQ?e=QDQlAR', 'Windows')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download for Windows
            </Button>
            <Button variant="outline" size="lg" onClick={() => handleDownload('https://drive.google.com/file/d/1tOIF8UiAWO_v8bm5uDrkbdJ278JQPKrt/view', 'Mac')}>
              <Download className="w-4 h-4 mr-2" />
              Download for Mac
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;