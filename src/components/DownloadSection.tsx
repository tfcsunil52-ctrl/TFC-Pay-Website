import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <Card className="relative bg-slate-900 border-primary/30 overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 shadow-inner"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}bg-01.webp)`,
              transform: 'scaleX(-1)'
            }}
          />
          {/* Content Overlay Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-transparent to-black/60 pointer-events-none" />

          <CardContent className="p-6 md:p-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center md:text-left space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">DOWNLOAD NOW</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Get the <span className="text-primary">Cashback Wala App</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground">
                  Scan the QR code or click the buttons below to download TFCPAY and start earning cashback today!
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="https://play.google.com/store/apps/details?id=com.new_wltpe&hl=en_IN" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <img src={`${import.meta.env.BASE_URL}play-store.webp`} alt="Google Play" className="w-5 h-5 object-contain" />
                      Google Play
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-primary/5 hover:text-primary gap-2">
                    <img src={`${import.meta.env.BASE_URL}app-store.webp`} alt="App Store" className="w-5 h-5 object-contain" />
                    App Store
                  </Button>
                </div>
              </motion.div>

              {/* Right Content - QR Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-primary">
                  <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}qr-code.png`}
                      alt="Scan to Download"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-foreground font-medium">
                    Scan to Download
                  </p>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
