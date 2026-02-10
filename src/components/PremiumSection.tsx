import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const premiumServices = [
  {
    iconImage: "card-transfer-icon.webp",
    title: "Credit Card to Bank Transfer",
    description: "Transfer money from your credit card directly to any bank account instantly. Manage your cash flow efficiently with our secure transfer service.",
    features: ["Instant settlements", "Secure and encrypted", "Transfer up to 100% limit"],
  },
  {
    iconImage: "credit card bill payment.webp",
    title: "Credit Card Bill Payment",
    description: "Pay your credit card bills on time and avoid late fees. Get cashback on every payment.",
    features: ["Instant payment", "Cashback rewards", "Payment reminders"],
  },
  {
    iconImage: "insurance-icon.webp",
    title: "Insurance Premium Payment",
    description: "Pay your insurance premiums for health, life, and vehicle insurance policies instantly.",
    features: ["2-Wheeler Insurance Payment", "Car Insurance Payment", "Health Insurance Payment"],
  },
];

const PremiumSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="premium" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">

        <div className="relative pb-10">
          {/* HEADING - Sticky (Desktop Only) */}
          <div className="hidden md:block absolute top-0 left-0 right-0 h-[calc(100%-50vh)] pointer-events-none z-50">
            <div className="sticky top-16 pointer-events-auto bg-background/95 backdrop-blur-sm text-center mb-12 pt-10 pb-8">
              <h2 className="md:text-7xl font-bold text-foreground leading-tight flex flex-row items-center justify-center gap-3">
                <span>Exclusive</span>
                <span className="text-primary">Premium</span>
                <span>Features</span>
              </h2>
            </div>
          </div>

          {/* MAIN FLOW CONTENT */}
          <div className="relative z-10">
            {/* Title - Visible & Scrolling on Mobile, Invisible Spacer on Desktop */}
            <div className="text-center mb-8 md:mb-12 pt-0 md:pt-10 pb-6 md:pb-8 md:invisible">
              <h2 className="text-4xl md:text-7xl font-bold text-foreground leading-tight flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span>Exclusive</span>
                <span className="text-primary">Premium</span>
                <span>Features</span>
              </h2>
            </div>

            <div className="flex flex-col gap-0 md:gap-8 max-w-7xl mx-auto">
              {premiumServices.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="sticky top-16 md:top-64"
                    style={{
                      zIndex: index + 10,
                      marginTop: isMobile ? '0' : (index > 0 ? '2rem' : '0'),
                    }}
                  >
                    <Card className="w-full bg-gradient-to-br from-card to-primary/10 border-primary/20 shadow-2xl overflow-hidden min-h-[500px] lg:min-h-[35vh] flex flex-col justify-center relative">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-no-repeat opacity-30"
                        style={{
                          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.webp)`,
                          backgroundSize: '100% 100%',
                          backgroundPosition: 'center center'
                        }}
                      />

                      <CardContent className="h-full p-4 md:p-8 flex flex-col gap-4 md:gap-8 justify-center relative z-10">
                        {/* Top: Icon and Text side-by-side (alternating) */}
                        <div className={`flex flex-col lg:flex-row items-center gap-4 md:gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} w-full`}>
                          {/* Icon Container - Center on mobile, left/right on desktop */}
                          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
                            <div className="w-full max-w-[320px] h-64 lg:w-[280px] lg:h-[280px] flex items-center justify-center">
                              <img
                                src={`${import.meta.env.BASE_URL}${service.iconImage}`}
                                alt={service.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text Context */}
                          <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom: Features in a row */}
                        <div className="w-full pt-4 md:pt-6 border-t border-border/50">
                          <ul className="flex flex-col md:flex-row flex-wrap justify-between gap-4 md:gap-6">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors flex-1 min-w-[200px]">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                  <CheckCircle className="w-5 h-5 md:w-6 h-6 text-primary" />
                                </div>
                                <span className="text-foreground text-sm md:text-lg font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
