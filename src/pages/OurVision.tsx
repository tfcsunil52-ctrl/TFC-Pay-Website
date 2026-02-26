import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurVision = () => {
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
                            Our Vision
                        </h1>

                        <div className="space-y-8">
                            <section className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    With a vision to deliver perfect service for customers, TFC DIGITAL PVT LTD focuses on making essential facilities easily accessible at customers’ fingertips. We provide high-quality services with the convenience of access from computers and digital devices anytime, anywhere.
                                </p>
                                <p className="mt-4">
                                    We offer a user-friendly recharge panel across all devices, ensuring services are always just one click away. Our next-generation web-based solutions come with 100% secure transactions, giving customers confidence and reliability every time they use our platform.
                                </p>
                            </section>

                            <section className="py-6">
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We provide the fastest recharge services with convenience, efficiency, and an enjoyable user experience. Through continuous innovation, we help households save time and money compared to other online recharging platforms. Our services are designed to be simple, quick, and fully supported by a dedicated team.
                                    </p>
                                    <p>
                                        We are committed to steady and reliable growth for our business partners. Our single-SIM recharge system and supportive platform make it easy to start your own recharge business with minimal investment. There is no need to maintain minimum balances or manage physical recharge coupons.
                                    </p>
                                    <p>
                                        TFC DIGITAL PVT LTD understands that the internet is not just a source of entertainment but a powerful and essential tool that, when used effectively, brings significant benefits and convenience to customers.
                                    </p>
                                </div>
                            </section>

                            <section className="py-6">
                                <h2 className="text-3xl font-bold mb-6 text-primary">Grow With Us</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We offer attractive margins to distributors, helping them establish themselves as reliable providers of mobile recharge services. We welcome distributors from across India. With our one-SIM all-recharge system, you can start your business with a small investment and begin earning strong returns quickly. The system is user-friendly, and our dedicated support team is always ready to assist you.
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

export default OurVision;

