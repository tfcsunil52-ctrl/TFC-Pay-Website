import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
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
                                Terms & Conditions
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to the TFCPAY platform, owned and operated by TFC DIGITAL PVT LTD ("TFCPAY"). By accessing or using our Services, you agree to be bound by these terms and conditions.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5">
                                <h2 className="text-xl font-bold text-primary mb-4">1. Eligibility</h2>
                                <p className="text-muted-foreground">
                                    You must be at least 18 years old to use our Services. By using TFCPAY, you represent and warrant that you have the right, authority, and capacity to enter into this Agreement and abide by its terms. TFCPAY reserves the right to refuse service, terminate accounts, or cancel transactions at its discretion.
                                </p>
                            </section>

                            <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5">
                                <h2 className="text-xl font-bold text-primary mb-4">2. Service Description</h2>
                                <p className="text-muted-foreground">
                                    TFCPAY provides a platform to purchase prepaid mobile/DTH recharge and make bill payments ("Recharge") through various payment methods. We facilitate payments to designated billers ("Biller(s)") based on Payment Instructions provided by you.
                                </p>
                            </section>

                            <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5">
                                <h2 className="text-xl font-bold text-primary mb-4">3. Payment and Fees</h2>
                                <p className="text-muted-foreground">
                                    You agree to pay all fees associated with your use of the Services. TFCPAY reserves the right to modify its fee structure at any time. You are responsible for ensuring sufficient funds/limits in your Payment Account to cover Recharge transactions.
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-6">
                                <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5 h-full">
                                    <h2 className="text-xl font-bold text-primary mb-4">4. User Responsibilities</h2>
                                    <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                        <li>Provide accurate Registration, Payment, and Biller Data.</li>
                                        <li>Maintain and promptly update information.</li>
                                        <li>Comply with all applicable laws.</li>
                                        <li>Refrain from engaging in prohibited conduct.</li>
                                    </ul>
                                </section>

                                <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5 h-full">
                                    <h2 className="text-xl font-bold text-primary mb-4">5. Prohibited Conduct</h2>
                                    <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                        <li>Use TFCPAY for any unlawful purpose.</li>
                                        <li>Misrepresent your identity or affiliation.</li>
                                        <li>Interfere with the operation of TFCPAY.</li>
                                        <li>Engage in fraudulent activities.</li>
                                    </ul>
                                </section>
                            </div>

                            <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5">
                                <h2 className="text-xl font-bold text-primary mb-4">Rent Payment Terms & Conditions</h2>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>First time user payout needs to be done after 72hrs.</li>
                                    <li>One customer cannot make more than 2 payments in a month.</li>
                                    <li>Any fraud reported by customer on HDFC account post intimation from bank end we will provide the documents against the fraud or will refund/reverse the amount.</li>
                                    <li>Transaction limit for new user or existing user as per the agreement value.</li>
                                    <li>Rent agreement to be maintained for every user.</li>
                                </ul>
                            </section>

                            <section className="bg-secondary/10 p-6 rounded-2xl border border-white/5">
                                <h2 className="text-xl font-bold text-primary mb-4">Refund Policy</h2>
                                <p className="text-muted-foreground">
                                    All Recharge sales are final. In case of non-delivery of Recharge after payment confirmation, please contact customer service for resolution. Refunds, if applicable, will be processed within 72 working hours to your TFCPAY Wallet.
                                </p>
                            </section>

                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 mt-12">
                                <h2 className="text-xl font-bold text-primary mb-4">Governing Law</h2>
                                <p className="text-muted-foreground mb-4">
                                    This Agreement shall be governed by and construed under the laws of India. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of the courts in Delhi.
                                </p>
                                <p className="text-sm text-muted-foreground italic">
                                    Contact Us: If you have any questions, please contact us at <a href="mailto:care@tfcpay.app" className="text-primary hover:underline">care@tfcpay.app</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditions;
