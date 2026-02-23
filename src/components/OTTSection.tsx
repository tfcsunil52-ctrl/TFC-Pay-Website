import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Tv, Film, Music } from "lucide-react";

const ottPlatforms = [
  { name: "Netflix", domain: "netflix.com" },
  { name: "Amazon Prime", domain: "primevideo.com" },
  { name: "Disney+ Hotstar", domain: "hotstar.com" },
  { name: "SonyLIV", domain: "sonyliv.com" },
  { name: "ZEE5", domain: "zee5.com" },
  { name: "Voot", domain: "voot.com" },
  { name: "JioCinema", domain: "jiocinema.com" },
  { name: "MX Player", domain: "mxplayer.in" },
  { name: "Aha", domain: "aha.video" },
  { name: "Sun NXT", domain: "sunnxt.com" },
  { name: "Hoichoi", domain: "hoichoi.tv" },
  { name: "Discovery+", domain: "discoveryplus.com" },
];

const OTTSection = () => {
  const API_KEY = "pk_LNixwPjmR1WPMPSbaBRiqg";

  return (
    <section className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">TFCPAY PREMIUM</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-primary">30+ OTT Apps</span> Included
            </h2>

            <p className="text-muted-foreground text-lg">
              Get access to all your favorite streaming platforms with a single TFCPAY Premium subscription.
              Entertainment unlimited, hassle-free.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-lg border border-border">
                <Tv className="w-5 h-5 text-primary" />
                <span className="text-foreground">Live TV</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-lg border border-border">
                <Film className="w-5 h-5 text-primary" />
                <span className="text-foreground">Movies</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-lg border border-border">
                <Music className="w-5 h-5 text-primary" />
                <span className="text-foreground">Music</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - OTT Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                >
                  {ottPlatforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { scale: 0.5, opacity: 0 },
                        visible: { scale: 1, opacity: 1 }
                      }}
                      className="aspect-square bg-secondary rounded-xl flex flex-col items-center justify-center p-3 hover:bg-primary/10 transition-colors cursor-pointer group"
                      title={platform.name}
                    >
                      <img
                        src={`https://img.logo.dev/${platform.domain}?token=${API_KEY}`}
                        alt={platform.name}
                        className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="text-[10px] text-center text-muted-foreground group-hover:text-primary transition-colors font-medium hidden">
                        {platform.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  And many more streaming platforms...
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OTTSection;
