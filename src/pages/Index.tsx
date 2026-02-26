import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CommercialVideoSection from "@/components/CommercialVideoSection";
import DownloadSection from "@/components/DownloadSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Handle cross-page navigation with state
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.state?.openDownload) {
      // If we came from another page wanting to open download, just trigger it
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('open-download-popup'));
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <WhyUsSection />
        <ReviewsSection />
        <CommercialVideoSection />
        <DownloadSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

