import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToUseSection from "@/components/HowToUseSection";
import ShortcutsSection from "@/components/ShortcutsSection";
import TestingSection from "@/components/TestingSection";
import PricingSection from "@/components/PricingSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowToUseSection />
      <ShortcutsSection />
      <TestingSection />
      <PricingSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
