import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[50vh] pt-32 md:pt-32 pb-16 flex items-center relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-semibold">India's Fastest Growing Payment App</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              Recharge &{" "}
              <span className="text-primary whitespace-nowrap">Bill Payment App</span>
            </h1>

            <p className="text-xl text-slate-200 max-w-lg leading-relaxed">
              Experience seamless transactions, exciting rewards, and unmatched convenience.
              Pay bills, recharge, and earn cashback - all in one powerful app.
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


          </div>

          {/* Right Content - Static Image */}
          <div className="relative flex justify-center lg:justify-end min-h-[400px] h-full items-center">
            {/* Top Half Gradient Flair - Expanded Range */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-primary/25 rounded-full blur-[120px] z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[600px]">
              <img
                src={`${import.meta.env.BASE_URL}recharge and bill.webp`}
                alt="TFC Pay Features"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

