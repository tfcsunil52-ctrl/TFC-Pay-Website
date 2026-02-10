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
import CommercialVideoSection from "@/components/CommercialVideoSection";
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

        {/* Grouped Section with Backdrop */}
        <div className="relative overflow-hidden">
          {/* Shared Backdrop */}
          <div className="absolute inset-0 bg-zinc-900/50 -z-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-20" />
          <div
            className="absolute inset-0 bg-[url('/bg-01.webp')] bg-cover bg-center opacity-20 -z-10 mix-blend-soft-light"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-01.webp)` }}
          />

          <CommercialVideoSection />
          <DownloadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
