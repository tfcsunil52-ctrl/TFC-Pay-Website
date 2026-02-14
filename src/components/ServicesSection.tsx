import { useState, useEffect } from "react";
import AnimatedSmartphone from "./AnimatedSmartphone";
import DownloadPopup from "./DownloadPopup";

const services = [
  {
    id: "Mobile",
    icon: `${import.meta.env.BASE_URL}Icons/mobile-recharge.webp`,
    title: "Mobile Prepaid",
    description: "Instant recharge for all operators with exciting cashback offers",
  },
  {
    id: "dth",
    icon: `${import.meta.env.BASE_URL}Icons/dth-recharge.webp`,
    title: "DTH Recharge",
    description: "Recharge your DTH connection instantly with best deals",
  },
  {
    id: "Cable",
    icon: `${import.meta.env.BASE_URL}Icons/cable-tv.webp`,
    title: "Cable TV",
    description: "Pay your cable TV bills across all major service providers",
  },
  {
    id: "Electricity",
    icon: `${import.meta.env.BASE_URL}Icons/electricity-bill.webp`,
    title: "Electricity",
    description: "Pay your electricity bills quickly and earn rewards",
  },
  {
    id: "gas",
    icon: `${import.meta.env.BASE_URL}Icons/lpg-cylinder.webp`,
    title: "Gas Cylinder",
    description: "Book and pay for LPG cylinder with ease",
  },
  {
    id: "pipe",
    icon: `${import.meta.env.BASE_URL}Icons/piped-gas.webp`,
    title: "Piped Gas",
    description: "Pay your piped gas bills securely and instantly",
  },
  {
    id: "water",
    icon: `${import.meta.env.BASE_URL}Icons/water-bill.webp`,
    title: "Water Bill",
    description: "Pay water bills for all major providers",
  },
  {
    id: "Broadband",
    icon: `${import.meta.env.BASE_URL}Icons/wifi.webp`,
    title: "Broadband",
    description: "Pay broadband bills and stay connected",
  },
  {
    id: "Landline",
    icon: `${import.meta.env.BASE_URL}Icons/landline.webp`,
    title: "Landline",
    description: "Pay landline bills quickly and securely",
  },
  {
    id: "Fastag",
    icon: `${import.meta.env.BASE_URL}Icons/fastag.webp`,
    title: "Fastag",
    description: "Recharge your Fastag for hassle-free toll payments",
  },
  {
    id: "CreditCard",
    icon: `${import.meta.env.BASE_URL}Icons/credit-card.webp`,
    title: "Credit Card",
    description: "Pay your credit card bills instantly and securely",
  },
  {
    id: "Rent",
    icon: `${import.meta.env.BASE_URL}Icons/rent.webp`,
    title: "Rent Payment",
    description: "Pay your house rent using credit cards and earn rewards",
  },
];

const ServicesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => setIsPopupOpen(true);
    window.addEventListener('open-download-popup', handleOpenPopup);
    return () => window.removeEventListener('open-download-popup', handleOpenPopup);
  }, []);

  return (
    <section id="services" className="py-12 md:py-16 relative overflow-hidden bg-slate-950/50">
      {/* Background Decorative Mesh / Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Row: Smartphone + Heading */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Smartphone - Static Position, Animated Content */}
          <div className="flex justify-center items-center">
            <AnimatedSmartphone className="scale-90 md:scale-105" />
          </div>

          {/* Right: Large Heading */}
          <div className="flex flex-col justify-center h-full">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider self-start">
              Explore Features
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
              One App, <br />
              <span className="text-primary">Limitless Possibilities.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
              TFC Pay streamlines your daily payments. From mobile recharges to utility bills, Experience lightning-fast transactions with military-grade security.
            </p>
          </div>
        </div>

        {/* Service Items Grid - Compact & Left Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="scroll-mt-24 cursor-pointer group flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsPopupOpen(true)}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-snug">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DownloadPopup
        isOpen={isPopupOpen}
        onOpenChange={setIsPopupOpen}
      />
    </section>
  );
};

export default ServicesSection;
