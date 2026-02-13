import { Card, CardContent } from "@/components/ui/card";
import AnimatedSmartphone from "./AnimatedSmartphone";

const services = [
  {
    icon: `${import.meta.env.BASE_URL}Icons/mobile-recharge.webp`,
    title: "Mobile Prepaid",
    description: "Instant recharge for all operators with exciting cashback offers",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/dth-recharge.webp`,
    title: "DTH Recharge",
    description: "Recharge your DTH connection instantly with best deals",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/electricity-bill.webp`,
    title: "Electricity",
    description: "Pay your electricity bills quickly and earn rewards",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/fastag.webp`,
    title: "Fastag",
    description: "Recharge your Fastag for hassle-free toll payments",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/lpg-cylinder.webp`,
    title: "Gas Cylinder",
    description: "Book and pay for LPG cylinder with ease",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/water-bill.webp`,
    title: "Water Bill",
    description: "Pay water bills for all major providers",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/wifi.webp`,
    title: "Broadband",
    description: "Pay broadband bills and stay connected",
  },
  {
    icon: `${import.meta.env.BASE_URL}Icons/landline.webp`,
    title: "Landline",
    description: "Pay landline bills quickly and securely",
  },
];

const ServicesSection = () => {
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
            <AnimatedSmartphone className="scale-90 md:scale-100" />
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

        {/* Service Cards Grid - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="h-full"
            >
              <Card
                className="group bg-slate-900/40 border-slate-800/60 hover:border-primary/40 hover:bg-slate-900/60 transition-all duration-300 h-full backdrop-blur-sm"
              >
                <CardContent className="p-6 flex flex-row sm:flex-col items-center sm:items-center text-left sm:text-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 sm:mb-4 flex items-center justify-center p-2 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

