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
            {/* Standard borders matching premium section vibe */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 * index }}
                            className="relative group h-full"
                        >
                            {/* Card with subtle glass effect and glow */}
                            <div className="relative h-full p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 overflow-hidden flex flex-col justify-start">
                                {/* Inner animated gradient highlight */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-primary group-hover:scale-110 transition-transform duration-500 shrink-0">
                                            <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                        <h4 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </h4>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-100 mb-2">
                                        {stat.label}
                                    </h3>

                                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Geometric background accent */}
                                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
