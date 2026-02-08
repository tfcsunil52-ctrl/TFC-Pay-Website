import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                        <div className="mb-12 border-b border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                Privacy Policy
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to TFCPAY, provided by TFC DIGITAL PVT LTD. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website or our mobile application.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Information We Collect</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                        <h3 className="text-lg font-semibold mb-4 text-foreground/90">Personal Data</h3>
                                        <p className="text-muted-foreground text-sm mb-4">While using our Service, we may collect:</p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                                            <li>Email address</li>
                                            <li>First name and last name</li>
                                            <li>Phone number</li>
                                            <li>Address, State, Province, ZIP/Postal code, City</li>
                                        </ul>
                                    </div>
                                    <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                        <h3 className="text-lg font-semibold mb-4 text-foreground/90">Usage Data</h3>
                                        <p className="text-muted-foreground text-sm space-y-2">
                                            We may collect information on how the Service is accessed, including IP address, browser type, pages visited, time spent, and diagnostic data.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Use of Your Information</h2>
                                <div className="bg-secondary/10 p-8 rounded-3xl border border-white/5">
                                    <p className="text-muted-foreground mb-6">We use the collected data for various purposes, including:</p>
                                    <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            To provide and maintain our Service
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            To manage your Account
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            To contact you
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            To provide you with news and special offers
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            To manage your requests
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                            For business transfers
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <div className="grid md:grid-cols-2 gap-8">
                                <section className="bg-secondary/20 p-8 rounded-3xl border border-white/5">
                                    <h2 className="text-xl font-bold text-primary mb-4">Cookies & Tracking</h2>
                                    <p className="text-muted-foreground text-sm">
                                        We use cookies and similar tracking technologies to track the activity on our Service and store certain information. You can instruct your browser to refuse all cookies.
                                    </p>
                                </section>
                                <section className="bg-secondary/20 p-8 rounded-3xl border border-white/5">
                                    <h2 className="text-xl font-bold text-primary mb-4">Data Security</h2>
                                    <p className="text-muted-foreground text-sm">
                                        The security of your data is important to us, but no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your Personal Data.
                                    </p>
                                </section>
                            </div>

                            <section className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-3xl border border-white/5">
                                <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
                                <p className="text-muted-foreground mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
                                <div className="space-y-4">
                                    <p className="flex items-center gap-3 text-muted-foreground">
                                        <span className="font-semibold text-foreground">Email:</span>
                                        <a href="mailto:care@tfcpay.app" className="text-primary hover:underline">care@tfcpay.app</a>
                                    </p>
                                    <p className="flex items-center gap-3 text-muted-foreground">
                                        <span className="font-semibold text-foreground">Phone:</span>
                                        <a href="tel:0120-442-0120" className="text-primary hover:underline">0120-442-0120</a>
                                    </p>
                                    <p className="flex items-center gap-3 text-muted-foreground">
                                        <span className="font-semibold text-foreground">Website:</span>
                                        <a href="https://www.tfcpay.app/" className="text-primary hover:underline">www.tfcpay.app</a>
                                    </p>
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

export default PrivacyPolicy;
