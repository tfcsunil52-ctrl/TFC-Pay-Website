import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[85vh] pt-28 md:pt-32 pb-12 flex items-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-semibold uppercase tracking-wider">India's Fastest Growing Payment App</span>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Recharge & <span className="text-primary whitespace-nowrap">Bill Payment App</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
              Experience seamless transactions, exciting rewards, and unmatched convenience. Pay bills, recharge, and earn cashback - all in one powerful app.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.new_wltpe&hl=en_IN" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black gap-2 shadow-xl">
                  <img src={`${import.meta.env.BASE_URL}play-store.webp`} alt="Google Play" className="w-5 h-5 object-contain" />
                  Google Play
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white gap-2">
                <img src={`${import.meta.env.BASE_URL}app-store.webp`} alt="App Store" className="w-5 h-5 object-contain" />
                App Store
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end min-h-[400px] h-full items-center"
          >
            <div className="absolute inset-0 bg-primary/25 rounded-full blur-[120px] scale-150 z-0 pointer-events-none opacity-30" />
            <div className="relative z-10 w-full max-w-[500px]">
              <img
                src={`${import.meta.env.BASE_URL}recharge and bill.webp`}
                alt="TFC Pay Features"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
