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
                        <div className="relative mb-12 overflow-hidden rounded-3xl bg-secondary/30 p-8 md:p-12 border border-white/10 backdrop-blur-xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                About Us
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Smart Desh ka Smart App - simplifying your life by consolidating all your bill payments and recharges in one place.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <section className="prose prose-invert max-w-none">
                                <h2 className="text-2xl font-semibold mb-4 text-primary">TFCPAY is a Fintech Company building a Smart App for Smart Desh</h2>
                                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/50 pl-4 py-2 bg-primary/5 rounded-r-lg">
                                    TFCPAY is the ultimate payment app that enables you to pay all your bills effortlessly while enjoying offers and cashback rewards.
                                </p>
                                <div className="mt-6 space-y-4 text-muted-foreground">
                                    <p>
                                        Founded in 2023, TFC DIGITAL PVT LTD was developed with the vision of being the "Smart Desh ka Smart App," designed to simplify your life by consolidating all your bill payments and recharges in one place. From electricity and water bills to DTH recharges and money transfers, TFC DIGITAL PVT LTD offers a wide range of services to meet your everyday needs.
                                    </p>
                                    <p>
                                        As we continue to grow, we are committed to expanding our offerings, ensuring that our users have access to the latest and most convenient financial solutions. With TFCPAY, managing your finances is not just easy, but also rewarding. Join us on our journey towards a smarter, more efficient way of handling your payments.
                                    </p>
                                </div>
                            </section>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors text-sm">01</span>
                                        Our Mission
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Our mission is to empower individuals by providing a seamless, secure, and rewarding digital payment platform that simplifies everyday transactions, promotes financial involvement, and enhances the quality of life for our users.
                                    </p>
                                </div>
                                <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors text-sm">02</span>
                                        Our Vision
                                    </h3>
                                    <p className="text-muted-foreground">
                                        To become the leading digital payment solution in India, transforming the way people manage their finances by offering innovative, reliable, and customer-centric services, ultimately creating a smart and cashless society.
                                    </p>
                                </div>
                            </div>

                            <section className="relative bg-slate-900 p-8 rounded-3xl border border-primary/20 overflow-hidden">
                                {/* Background Image with Overlay */}
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                                    style={{
                                        backgroundImage: `url(${import.meta.env.BASE_URL}bg-01.webp)`,
                                        transform: 'scaleX(-1)'
                                    }}
                                />
                                {/* Content Overlay Gradient */}
                                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-black/40 pointer-events-none" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-4">Get Your Cashback Wala App Now!</h2>
                                    <p className="text-muted-foreground mb-4">
                                        TFCPAY is a payment app that you can use to pay all your bill payments with interesting offers and cashback.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="mailto:care@tfcpay.app" className="text-primary hover:underline">care@tfcpay.app</a>
                                        <span className="text-muted-foreground">|</span>
                                        <a href="tel:0120-442-0120" className="text-primary hover:underline">0120-442-0120</a>
                                    </div>
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
