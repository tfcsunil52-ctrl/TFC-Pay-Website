import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Activity, Network, Store, Zap } from "lucide-react";

/**
 * Animated counter component that increments when the element is visible in the viewport.
 */
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

const stats = [
    {
        icon: Activity,
        value: 10,
        suffix: "L",
        label: "Daily Transactions",
        description: "Over 10 lakh transactions processed every single day.",
    },
    {
        icon: Network,
        value: 75,
        suffix: "+",
        label: "API Partners",
        description: "Robust partnerships with over 75 API providers.",
    },
    {
        icon: Store,
        value: 50,
        suffix: "K+",
        label: "Trusted Retailers",
        description: "Services relied upon by more than 50,000 retailers nationwide.",
    },
    {
        icon: Zap,
        value: 99,
        suffix: "M+",
        label: "Daily Recharges",
        description: "Processing millions of recharges with unmatched speed and reliability.",
    },
];

const StatsSection = () => {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden bg-background">
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
                    >
                        Our Scale & Reach
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        TFC Digital powers transactions for millions across India, demonstrating unparalleled reach and operational efficiency.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="w-full"
                            >
                                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                                    <div className="text-primary hover:scale-110 transition-transform duration-500 shrink-0">
                                        <stat.icon className="w-10 h-10 md:w-12 md:h-12" />
                                    </div>
                                    <h4 className="text-5xl md:text-6xl font-black text-primary tracking-tighter">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </h4>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {stat.label}
                                </h3>

                                <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-[280px] mx-auto md:mx-0">
                                    {stat.description}
                                </p>
                            </motion.div>

                            {/* Vertical Divider for large screens */}
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 md:-right-6 lg:-right-[24px] top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

