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
    <section id="premium" className="py-12 md:py-16 relative bg-background">
      <div className="container max-w-7xl mx-auto px-4">
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

            <div className="flex flex-col gap-0 md:gap-8">
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
                    <Card className="w-full bg-gradient-to-br from-card to-primary/10 border-primary/20 shadow-2xl overflow-hidden min-h-[450px] md:min-h-[400px] flex flex-col justify-center relative">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-no-repeat opacity-30"
                        style={{
                          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.webp)`,
                          backgroundSize: '100% 100%',
                          backgroundPosition: 'center center'
                        }}
                      />

                      <CardContent className="p-4 md:p-8 flex flex-col items-center justify-center relative z-10 w-full">
                        {/* Wrapper to constrain width of both top content and pointers to the same group width */}
                        <div className="flex flex-col items-center gap-6 w-full max-w-fit">
                          {/* Top: Icon and Text side-by-side (alternating) */}
                          <div className={`flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} w-full`}>
                            {/* Icon Container */}
                            <div className="flex-shrink-0 flex justify-center">
                              <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
                                <img
                                  src={`${import.meta.env.BASE_URL}${service.iconImage}`}
                                  alt={service.title}
                                  className="w-full h-full object-contain drop-shadow-2xl"
                                />
                              </div>
                            </div>

                            {/* Text Context */}
                            <div className="lg:w-[500px] text-center lg:text-left">
                              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-3 leading-tight tracking-tight">
                                {service.title}
                              </h3>
                              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Bottom: Features - Stacked on Mobile, Row on Desktop */}
                          <div className="w-full">
                            <ul className={`flex flex-col md:flex-row items-center gap-3 md:gap-4 ${(index === 0 || index === 1) ? 'md:justify-between' : 'md:justify-center md:gap-x-12'}`}>
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-all w-full md:w-auto justify-center md:justify-start">
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-foreground text-sm font-semibold text-center md:text-left">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
