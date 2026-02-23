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
                                Welcome to our digital recharge and bill payment platform. These Terms & Conditions govern your access to and use of our website, mobile application, and services, including mobile recharge, DTH recharge, utility bill payments, and online payment services in India. By registering, accessing, browsing, or using our platform, you agree to comply with these Terms.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. User Eligibility</h2>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>You must be 18 years or older to use the Services.</li>
                                    <li>Users under 13 years are not permitted.</li>
                                    <li>You confirm you have the legal authority to enter into this agreement.</li>
                                    <li>Providing false identity or impersonating others is strictly prohibited.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Acceptance & Updates to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update or modify these Terms at any time. Continued use of the platform after updates means you accept the revised Terms. Please review this page regularly for the latest version.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Digital Recharge & Bill Payment Services</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Our platform provides secure online recharge and bill payment solutions, including:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2 text-sm md:text-base">
                                    <li>Prepaid and postpaid mobile recharge</li>
                                    <li>DTH recharge services</li>
                                    <li>Utility and electricity bill payments</li>
                                    <li>Digital payment processing</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                    Service features, operators, payment options, and charges may vary depending on partners and availability.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Fees, Payments & Transactions</h2>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Transaction fees or service charges may apply.</li>
                                    <li>Charges may change without prior notice.</li>
                                    <li>Payments can be made through approved methods such as cards, bank accounts, or digital wallets.</li>
                                    <li>Failed or reversed payment instructions may attract applicable charges.</li>
                                </ul>
                                <p className="text-muted-foreground mt-6 font-semibold text-primary/80">We are not responsible for failed transactions caused by:</p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2 mt-2">
                                    <li>Incorrect payment details</li>
                                    <li>Insufficient balance or bank restrictions</li>
                                    <li>Network or technical errors</li>
                                    <li>Delays from service providers or billers</li>
                                    <li>Events beyond reasonable control (system failure, natural disasters, etc.)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. User Information & Account Responsibility</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">You agree to:</p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Provide accurate and updated personal and payment details</li>
                                    <li>Maintain confidentiality of login credentials</li>
                                    <li>Notify us immediately of unauthorized account access</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm italic">Accounts may be suspended if incorrect or misleading information is provided.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Coupon & Promotional Offers</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Coupons and promotional offers are subject to the issuing partner's terms. We are not liable for losses, damages, or disputes arising from coupon usage.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Prohibited Use of Services</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">You must not:</p>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc ml-6 text-muted-foreground">
                                    <li>Use the platform for illegal activities</li>
                                    <li>Access other user accounts</li>
                                    <li>Upload harmful software/viruses</li>
                                    <li>Interfere with system security</li>
                                    <li>Reverse engineer platform technology</li>
                                    <li>Use automated tools to scrape data</li>
                                    <li>Misuse payment systems</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm font-bold text-primary/80">Violation may result in suspension, termination, or legal action.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Privacy & Data Protection</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your personal data is collected and processed according to our Privacy Policy. By using the platform, you consent to data collection, storage, and usage for service delivery and compliance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Third-Party Services & Links</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our platform may contain links to third-party websites or services. We do not control or endorse external content and are not responsible for third-party transactions or policies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Refund Policy for Online Recharge</h2>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>All recharge transactions are final and non-refundable.</li>
                                    <li>Users must verify mobile or account details before payment.</li>
                                    <li>If payment is deducted but recharge is not processed within 24 hours, you may report the issue with full transaction details.</li>
                                    <li>Verified failed transactions may be refunded to the platform wallet within the specified processing time.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">11. Account Suspension & Termination</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may suspend or terminate accounts for misuse, suspicious activity, or violation of Terms without prior notice. Users must stop using services immediately upon termination.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">12. Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We are not liable for indirect, incidental, or consequential damages including loss of profits, data, or business. Maximum liability, if applicable, will not exceed the amount paid for the service or ₹1000, whichever is lower.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">13. Indemnification</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You agree to indemnify and hold the company harmless from claims, damages, or expenses arising from misuse of services or violation of these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">14. Disclaimer of Warranties</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Services are provided "as is" and "as available." We do not guarantee uninterrupted service, accuracy of third-party systems, or error-free operation. Use of the platform is at your own risk.
                                </p>
                            </section>

                            <div className="pt-12 border-t border-white/10 mt-12">
                                <h2 className="text-2xl font-bold text-primary mb-4">15. Governing Use</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    If any provision of these Terms is found invalid, remaining provisions will remain in effect. Continued use of the platform confirms acceptance of all Terms.
                                </p>
                                <p className="text-sm text-muted-foreground italic">
                                    Contact Us: If you have any questions, please contact us at <a href="mailto:care@tfcpay.app" className="text-primary hover:underline font-bold">care@tfcpay.app</a>
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
