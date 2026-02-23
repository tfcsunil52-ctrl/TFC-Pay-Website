import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const partners = [
    { name: "Airtel", domain: "airtel.in" },
    { name: "Jio", domain: "jio.com" },
    { name: "VI", domain: "myvi.in" },
    { name: "BSNL", domain: "bsnl.co.in" },
    { name: "PhonePe", domain: "phonepe.com" },
    { name: "Google Pay", domain: "google.com" },
    { name: "Paytm", domain: "paytm.com" },
    { name: "Amazon Pay", domain: "amazon.in" },
    { name: "AJIO", domain: "ajio.com" },
    { name: "Beardo", domain: "beardo.in" },
    { name: "Dominos", domain: "dominos.co.in" },
    { name: "Faasos", domain: "faasos.com" }, // Redirects to EatSure usually, but logo might exist
    { name: "HPCL", domain: "hindustanpetroleum.com" },
    { name: "Indian Oil", domain: "iocl.com" },
    { name: "DishTV", domain: "dishtv.in" },
    { name: "SunDirect", domain: "sundirect.in" },
    { name: "Myntra", domain: "myntra.com" },
    { name: "Oven Story", domain: "ovenstory.in" },
    { name: "FanCode", domain: "fancode.com" },
    { name: "Puma", domain: "puma.com" },
    { name: "Aviva", domain: "avivaindia.com" },
];

const PartnersSection = () => {
    const API_KEY = "pk_LNixwPjmR1WPMPSbaBRiqg";
    const isMobile = useIsMobile();

    return (
        <section className="py-12 md:py-16 bg-muted/30 border-y border-border overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by leading partners
                </p>
                {/* Infinite Marquee for ALL screens - CSS Powered */}
                <div className="flex overflow-hidden relative fade-mask-x group">
                    <div className="flex gap-12 md:gap-24 items-center flex-nowrap min-w-full py-4 animate-marquee hover:[animation-play-state:paused]">
                        {/* Tripling the list to ensure smooth seamless loop regardless of screen width */}
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex-shrink-0 h-10 md:h-16 w-auto grayscale-0 transition-all duration-300 hover:scale-110">
                                <img
                                    src={`https://img.logo.dev/${partner.domain}?token=${API_KEY}`}
                                    alt={partner.name}
                                    className="h-full w-auto object-contain rounded-full bg-white p-1"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
