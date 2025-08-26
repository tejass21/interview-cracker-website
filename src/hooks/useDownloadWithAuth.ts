import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useDownloadWithAuth = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDownload = (url: string, platform: string) => {
    if (!isSignedIn) {
      toast({
        title: "Login Required",
        description: "Please sign in to download the application.",
        variant: "destructive",
      });
      navigate('/sign-in');
      return;
    }

    // If user is signed in, proceed with download
    window.open(url, '_blank');
    
    toast({
      title: "Download Started",
      description: `Downloading for ${platform}...`,
    });
  };

  return { handleDownload, isSignedIn };
};
