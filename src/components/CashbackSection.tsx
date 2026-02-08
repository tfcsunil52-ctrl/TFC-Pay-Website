import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Sparkles, IndianRupee } from "lucide-react";

const merchants = [
  { name: "Amazon", domain: "amazon.in" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Myntra", domain: "myntra.com" },
  { name: "Ajio", domain: "ajio.com" },
  { name: "BigBasket", domain: "bigbasket.com" },
  { name: "Swiggy", domain: "swiggy.com" },
  { name: "Zomato", domain: "zomato.com" },
  { name: "Dominos", domain: "dominos.co.in" },
  { name: "BookMyShow", domain: "bookmyshow.com" },
  { name: "MakeMyTrip", domain: "makemytrip.com" },
  { name: "Nykaa", domain: "nykaa.com" },
  { name: "Puma", domain: "puma.com" },
];

const CashbackSection = () => {
  const API_KEY = "pk_LNixwPjmR1WPMPSbaBRiqg";

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl border border-primary/30 p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left - Headline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">EXCLUSIVE OFFERS</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  <span className="flex items-center justify-center lg:justify-start gap-2">
                    <IndianRupee className="w-10 h-10 text-primary" />
                    <span className="text-primary">1 Lakh</span>
                  </span>
                  Cashback Awaits!
                </h2>

                <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
                  Shop from your favorite brands and get massive cashback rewards.
                  The more you spend, the more you earn!
                </p>
              </motion.div>

              {/* Right - Merchant Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <Card className="bg-card/50 backdrop-blur border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Partner Merchants</span>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: { staggerChildren: 0.08 }
                        }
                      }}
                      className="grid grid-cols-3 sm:grid-cols-4 gap-3"
                    >
                      {merchants.map((merchant, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { scale: 0.8, opacity: 0 },
                            visible: { scale: 1, opacity: 1 }
                          }}
                          className="aspect-square bg-secondary rounded-lg p-3 flex flex-col items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group"
                          title={merchant.name}
                        >
                          <img
                            src={`https://img.logo.dev/${merchant.domain}?token=${API_KEY}`}
                            alt={merchant.name}
                            className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <span className="text-[10px] text-center text-muted-foreground group-hover:text-primary transition-colors font-medium hidden">
                            {merchant.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      100+ partner brands with exclusive cashback
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;
