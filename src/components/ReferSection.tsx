import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download, IndianRupee, ArrowRight, ChevronRight } from "lucide-react";
import DownloadPopup from "./DownloadPopup";

const steps = [
  {
    icon: Share2,
    step: "01",
    title: "Share Refer Link",
    description: "Share your unique referral link with friends and family via WhatsApp, SMS, or social media.",
  },
  {
    icon: Download,
    step: "02",
    title: "App Download",
    description: "Your friend downloads the app and signs up using your referral link or code.",
  },
  {
    icon: IndianRupee,
    step: "03",
    title: "Enjoy Earning",
    description: "Both of you earn up to ₹100 cashback when your friend makes their first transaction!",
  },
];

const ReferSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Share2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">REFER & EARN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Earn <span className="text-primary">₹100</span> Per Referral
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invite your friends to TFCPAY and earn rewards together. It's a win-win!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 relative mt-24 md:mt-16">
          {/* Moving Arrows Connections */}
          <div className="hidden md:block absolute top-[50%] left-0 w-full pointer-events-none z-20">
            {/* First Arrow Set (Between Card 1 and 2) */}
            <div className="absolute left-[32.5%] -translate-x-1/2 flex -space-x-4 items-center justify-center w-[100px]">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`arrow-1-${i}`}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-primary/80" strokeWidth={1} />
                </motion.div>
              ))}
            </div>

            {/* Second Arrow Set (Between Card 2 and 3) */}
            <div className="absolute left-[67.5%] -translate-x-1/2 flex -space-x-4 items-center justify-center w-[100px]">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`arrow-2-${i}`}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-primary/80" strokeWidth={1} />
                </motion.div>
              ))}
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group flex flex-col items-center w-full px-2">
              {/* Big dull number behind card - Responsive sizing */}
              <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-foreground/5 select-none z-0 transition-all duration-300 group-hover:text-primary/10 group-hover:-translate-y-2">
                {step.step}
              </div>

              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative z-10 mt-8 flex-1 max-w-[320px] md:max-w-none w-full"
              >
                <CardContent className="p-6 md:p-8 text-center pt-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Mobile Arrow (Vertical) */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 text-primary/30 flex flex-col items-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`mobile-arrow-${index}-${i}`}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <ChevronRight className="w-6 h-6 rotate-90" strokeWidth={1} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 group"
          >
            <span className="font-semibold text-lg">Start Referring Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <DownloadPopup
            isOpen={isPopupOpen}
            onOpenChange={setIsPopupOpen}
          />
        </div>
      </motion.div>
    </section >
  );
};

export default ReferSection;
