import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumSection from "@/components/PremiumSection";
import WhyUsSection from "@/components/WhyUsSection";
import ReferSection from "@/components/ReferSection";
import ReviewsSection from "@/components/ReviewsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <PremiumSection />
        <WhyUsSection />
        <ReferSection />
        <ReviewsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
