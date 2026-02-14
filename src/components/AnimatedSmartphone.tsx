import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ICONS = [
    { name: "Cable TV", src: `${import.meta.env.BASE_URL}Icons/cable-tv.webp` },
    { name: "Credit card", src: `${import.meta.env.BASE_URL}Icons/credit-card.webp` },
    { name: "DTH Recharge", src: `${import.meta.env.BASE_URL}Icons/dth-recharge.webp` },
    { name: "Electricity Bill", src: `${import.meta.env.BASE_URL}Icons/electricity-bill.webp` },
    { name: "Fastag", src: `${import.meta.env.BASE_URL}Icons/fastag.webp` },
    { name: "Gas Cylinder", src: `${import.meta.env.BASE_URL}Icons/lpg-cylinder.webp` },
    { name: "Landline", src: `${import.meta.env.BASE_URL}Icons/landline.webp` },
    { name: "Mobile Recharge", src: `${import.meta.env.BASE_URL}Icons/mobile-recharge.webp` },
    { name: "Piped Gas", src: `${import.meta.env.BASE_URL}Icons/piped-gas.webp` },
    { name: "Rent", src: `${import.meta.env.BASE_URL}Icons/rent.webp` },
    { name: "Water Bill", src: `${import.meta.env.BASE_URL}Icons/water-bill.webp` },
    { name: "Wifi", src: `${import.meta.env.BASE_URL}Icons/wifi.webp` },
];

const AnimatedSmartphone = ({ className = "" }: { className?: string }) => {
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIconIndex((prev) => (prev + 1) % ICONS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`relative ${className}`}>
            {/* Phone Wrapper with fixed size to ensure alignment */}
            <div className="relative w-56 sm:w-64 md:w-80 h-[400px] sm:h-[500px] flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl opacity-50" />
                </div>

                {/* Animated Phone Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {/* Bottom Layer (Background) */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <img
                            src={`${import.meta.env.BASE_URL}bottom.webp`}
                            alt=""
                            className="w-full h-auto max-h-full object-contain"
                        />
                    </div>

                    {/* Animation Container (Middle Layer) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pt-24 sm:pt-32 md:pt-40 pr-10 sm:pr-14 md:pr-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIconIndex}
                                initial={{ opacity: 0, scale: 0.5, x: 200, filter: "blur(8px)" }}
                                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.5, x: -50, filter: "blur(8px)" }}
                                transition={{ duration: 1.0, type: "spring", bounce: 0.3 }}
                                className="relative z-10 flex flex-col items-center gap-0"
                            >
                                <div className="relative">
                                    <img
                                        src={ICONS[currentIconIndex].src}
                                        alt={ICONS[currentIconIndex].name}
                                        className="w-11 h-11 md:w-14 md:h-14 object-contain drop-shadow-xl"
                                    />
                                    {/* Paid Stamp Animation */}
                                    <motion.img
                                        src={`${import.meta.env.BASE_URL}paid.webp`}
                                        alt="Paid"
                                        initial={{ opacity: 0, scale: 2, rotate: -45 }}
                                        animate={{ opacity: 1, scale: 1, rotate: -12 }}
                                        transition={{
                                            delay: 0.8,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="absolute -top-4 -right-8 w-12 h-auto md:w-16 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] transform rotate-[-12deg]"
                                    />
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider"
                                >
                                    {ICONS[currentIconIndex].name}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Top Layer (Foreground) */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <img
                            src={`${import.meta.env.BASE_URL}top.webp`}
                            alt="TFC Pay App Interface"
                            className="w-full h-auto max-h-full object-contain"
                        />
                    </div>
                </div>

                {/* Enhanced Green Lighting Flares */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/15 rounded-full blur-[50px] z-30 pointer-events-none" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/15 rounded-full blur-[50px] z-30 pointer-events-none" />
            </div>
        </div>
    );
};

export default AnimatedSmartphone;
