import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
                            About Us
                        </h1>

                        <div className="space-y-8">
                            <section className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    TFC DIGITAL PVT LTD is a leading mobile recharge, DTH recharge, and bill payment solutions provider in India, offering fast, secure, and reliable digital recharge services for businesses. Our advanced one-SIM multi-recharge system enables retailers and partners to manage mobile recharge, DTH recharge, postpaid payments, data card recharge, gas booking, utility bills, insurance payments, landline bills, and electricity bill payments from a single platform.
                                </p>
                                <p className="mt-4">
                                    Designed for speed, convenience, and security, our system helps businesses deliver instant recharge services and seamless digital payment solutions to customers across India.
                                </p>
                            </section>

                            <section className="py-6">
                                <h2 className="text-3xl font-bold mb-6 text-primary">B2B Recharge Services & Business Opportunities</h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We are a trusted B2B recharge service provider, helping partners grow with competitive margins and reliable technology. Our platform supports major telecom and DTH operators, making us a complete solution for multi-operator recharge and bill payment services.
                                    </p>
                                    <p>
                                        We provide recharge and payment support for leading telecom operators including Airtel, Aircel, Vodafone, Idea, Videocon, Tata Docomo, BSNL, Reliance, and MTS.
                                    </p>
                                    <p>
                                        Our platform also supports leading DTH service providers such as Tata Sky, Dish TV, Sun Direct, Airtel Digital TV, Videocon D2h, and Reliance Digital TV.
                                    </p>
                                </div>
                            </section>

                            <section className="py-6">
                                <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Us</h2>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> 2,000+ active business partners across India</li>
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> Advanced recharge technology with secure transactions</li>
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> Multi-service digital payment platform</li>
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> Attractive margins for retailers and distributors</li>
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> Reliable and scalable recharge infrastructure</li>
                                    <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">✔</span> Nationwide coverage and support</li>
                                </ul>
                            </section>

                            <section className="relative bg-slate-900 p-10 rounded-3xl border border-primary/20 overflow-hidden text-center">
                                {/* Background Image with Overlay */}
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
                                    style={{
                                        backgroundImage: `url(${import.meta.env.BASE_URL}bg-01.webp)`,
                                        transform: 'scaleX(-1)'
                                    }}
                                />
                                {/* Content Overlay Gradient */}
                                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-black/60 pointer-events-none" />

                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl font-medium mb-8 text-foreground max-w-2xl mx-auto leading-relaxed">
                                        Join our network today and grow your business with fast, secure, and profitable recharge and bill payment solutions.
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 hover:scale-105 transform duration-200 h-12 px-10 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
