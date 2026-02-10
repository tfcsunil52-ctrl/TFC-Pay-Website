import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download, IndianRupee, ArrowRight, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 group">
                <span className="font-semibold text-lg">Start Referring Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-100">
              <div className="grid md:grid-cols-2">
                <div className="relative p-6 md:p-8 text-center">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/10 backdrop-blur-md mx-auto">
                      <img
                        src={`${import.meta.env.BASE_URL}logo.webp`}
                        alt="TFCPAY Logo"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <DialogTitle className="text-2xl font-bold text-white mb-2">
                      Download Our App Now
                    </DialogTitle>

                    <p className="text-zinc-400 mb-8">
                      To start referring and earning rewards, download the App on your smartphone today!
                    </p>

                    <div className="flex flex-col gap-4">
                      <a href="https://play.google.com/store/apps/details?id=com.new_wltpe&hl=en_IN" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-12 text-base gap-3 bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg shadow-green-900/20">
                          <img src={`${import.meta.env.BASE_URL}play-store.webp`} alt="Google Play" className="w-5 h-5 object-contain" />
                          Download from Google Play
                        </Button>
                      </a>

                      <Button variant="outline" className="w-full h-12 text-base gap-3 border-green-500 bg-transparent hover:bg-transparent text-white hover:text-white">
                        <img src={`${import.meta.env.BASE_URL}app-store.webp`} alt="App Store" className="w-5 h-5 object-contain" />
                        Download from App Store
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Column - QR Code */}
                <div className="bg-zinc-900/50 p-6 md:p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-zinc-800">
                  <div className="bg-white p-4 rounded-xl shadow-2xl mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}qr-code.png`}
                      alt="Scan to Download"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  <p className="text-white font-medium text-lg">Scan to Download</p>
                  <p className="text-zinc-500 text-sm mt-1">Use your phone camera</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </section >
  );
};

export default ReferSection;
