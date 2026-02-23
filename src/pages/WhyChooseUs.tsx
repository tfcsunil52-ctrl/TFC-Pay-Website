import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Star, Zap, Shield, Headphones, TrendingUp, Wallet, Clock, Rocket } from "lucide-react";

const WhyChooseUs = () => {
    const mainBenefits = [
        "All-in-one recharge panel with a common wallet for multiple services",
        "Industry-leading commission rates for retailers and distributors",
        "Lightning-fast recharge processing with minimal downtime",
        "Multiple secure payment options including cards and digital payments",
        "24×7 dedicated customer support for uninterrupted service",
        "Distributor and retailer panel with single login access",
        "Higher commission with low investment",
        "WhatsApp support for instant assistance",
        "Secure payment gateway with advanced safety measures",
        "Quick refunds for failed transactions",
        "Unlimited recharge capability with multi-SIM support",
        "Direct connectivity with service providers and distributors"
    ];

    const keyFeatures = [
        {
            title: "Convenient Digital Services",
            description: "Instant recharge and domestic money transfer services are available anytime across India.",
            icon: Wallet
        },
        {
            title: "24×7 Dedicated Support",
            description: "Round-the-clock assistance to ensure smooth operations and customer satisfaction.",
            icon: Headphones
        },
        {
            title: "Easy & Efficient Recharge System",
            description: "Smart recharge slabs and optimized pricing for maximum benefits.",
            icon: Zap
        },
        {
            title: "Reliable Technology",
            description: "Advanced infrastructure supporting high-volume and unlimited transactions.",
            icon: Shield
        },
        {
            title: "Result-Driven Platform",
            description: "Comprehensive dashboard with centralized wallet for simplified management.",
            icon: TrendingUp
        },
        {
            title: "Time-Saving Solutions",
            description: "Special recharge offers, quick processing, and streamlined transaction handling.",
            icon: Clock
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="mb-12 border-b border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                Why Choose Us
                            </h1>
                            <h2 className="text-2xl font-bold text-foreground/90 mb-4">
                                Best Multi Recharge & Bill Payment Service Provider in India
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Looking for a fast, secure, and reliable multi-recharge platform? We provide seamless online and offline recharge services across India with advanced technology, competitive commissions, and dedicated support. Our platform is built to help retailers, distributors, and entrepreneurs grow their digital recharge and bill payment business with ease.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                From mobile recharges and bill payments to money transfer services, we offer a complete digital payment ecosystem designed for speed, convenience, and profitability.
                            </p>
                        </div>

                        <div className="space-y-16">
                            {/* Section 1: Why Choose Our Multi Recharge Platform */}
                            <section>
                                <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Our Multi Recharge Platform</h2>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Our recharge system is built to deliver efficiency, reliability, and maximum earning potential.
                                </p>
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    {mainBenefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3 group">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 2: Key Features */}
                            <section>
                                <h2 className="text-3xl font-bold text-primary mb-8">Key Features of Our Digital Recharge Services</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {keyFeatures.map((feature, index) => (
                                        <div key={index} className="space-y-3">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground/90">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 3: Start Your Business */}
                            <section className="bg-primary/5 p-8 md:p-12 rounded-[40px] border border-primary/20">
                                <h2 className="text-3xl font-bold text-primary mb-6">Start Your Own Recharge Business & Earn More Profit</h2>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Become a part of India’s growing digital payment ecosystem and start your own recharge and bill payment business with minimal investment.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">Easy onboarding process with instant activation</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">No minimum balance or monthly targets</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">High commission margins to maximize earnings</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">Scalable platform for small and large transactions</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">Business growth support and technical assistance</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    Our mission is to bridge the gap between customers and service providers by offering simple, fast, and reliable digital services. Whether you are a retailer, distributor, or entrepreneur, our platform empowers you to grow your income with ease.
                                </p>
                            </section>

                            {/* Final Section */}
                            <section className="text-center space-y-6 pt-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground">Secure, Fast & Profitable Digital Payment Solutions</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Experience hassle-free recharges, secure payments, and business growth opportunities — all from one powerful platform. Save time, increase profits, and deliver better service to your customers with our advanced multi-recharge technology.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default WhyChooseUs;
