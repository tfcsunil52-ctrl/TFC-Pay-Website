import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CancellationRefund = () => {
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
                                Cancellation & Refund Policy
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                This Cancellation & Refund Policy governs how TFCPAY handles refunds for transactions made on its platform. Last updated: 24th June 2024.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section className="bg-destructive/5 p-8 rounded-3xl border border-destructive/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <h2 className="text-2xl font-bold text-destructive mb-4">Non-Refundable Transactions</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    All transactions conducted on the TFCPAY platform are non-refundable. Users are solely responsible for providing accurate information such as consumer numbers, mobile numbers, or any other required details for making payments. TFCPAY does not bear responsibility for incorrect details provided by the user.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Conditions for Refund</h2>
                                <div className="space-y-6">
                                    <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                        <h3 className="text-lg font-semibold mb-3 text-foreground/90">1. Non-Delivery of Service</h3>
                                        <p className="text-muted-foreground text-sm">
                                            If money has been deducted from your card or bank account and the service is not delivered within 24 hours, you must notify us promptly by sending an email to <a href="mailto:care@tfcpay.app" className="text-primary hover:underline">care@tfcpay.app</a>.
                                        </p>
                                    </div>

                                    <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                        <h3 className="text-lg font-semibold mb-3 text-foreground/90">2. Investigation Process</h3>
                                        <p className="text-muted-foreground text-sm">
                                            TFCPAY will investigate the incident based on the details provided. If it is confirmed that money has been charged without service delivery, TFCPAY will initiate a refund.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">3. Refund Timeline</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Refunds for eligible transactions will be processed within 7 working days from the date of receipt of your email.
                                            </p>
                                        </div>
                                        <div className="bg-secondary/20 p-6 rounded-2xl border border-white/5">
                                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">4. Bank Processing</h3>
                                            <p className="text-muted-foreground text-sm">
                                                It may take 4-21 days for the refunded amount to reflect in your bank account, depending on your bank's policies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="bg-secondary/10 p-8 rounded-3xl border border-white/5 text-center">
                                <h2 className="text-xl font-bold mb-4">Questions?</h2>
                                <p className="text-muted-foreground mb-6">
                                    If you have any questions about our Refund Policy, please contact our customer service.
                                </p>
                                <a
                                    href="mailto:care@tfcpay.app"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                >
                                    care@tfcpay.app
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CancellationRefund;
