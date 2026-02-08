import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download, IndianRupee, ArrowRight } from "lucide-react";

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
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Share2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">REFER & EARN</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Earn <span className="text-primary">₹100</span> Per Referral
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invite your friends to TFCPAY and earn rewards together. It's a win-win!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mt-12">
          {/* Connection line */}
          <div className="hidden md:block absolute top-[55%] -translate-y-1/2 left-0 w-full h-1 bg-secondary overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Big dull number above card */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-9xl font-black text-foreground/5 select-none z-0 transition-all duration-300 group-hover:text-primary/10 group-hover:-translate-y-2">
                {step.step}
              </div>

              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative z-10 mt-8"
              >
                <CardContent className="p-8 text-center pt-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/30">
            <span className="text-foreground font-medium">Start Referring Now</span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReferSection;
