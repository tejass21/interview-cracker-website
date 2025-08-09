import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import HowToUseSection from "@/components/HowToUseSection";
import ShortcutsSection from "@/components/ShortcutsSection";
import TestingSection from "@/components/TestingSection";
import PricingSection from "@/components/PricingSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import PlatformSection from "@/components/PlatformSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <ProductShowcase />
      <FeaturesSection />
      <HowToUseSection />
      <ShortcutsSection />
      <TestingSection />
      <PricingSection />
      <DownloadSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
