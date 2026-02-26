import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                                Privacy Policy
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to TFCPAY, provided by TFC DIGITAL PVT LTD. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website or our mobile application.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We may collect personally identifiable information to provide secure and efficient digital payment services, including:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-8">
                                    <li>Full name</li>
                                    <li>Email address</li>
                                    <li>Mobile number</li>
                                    <li>Address and location details</li>
                                    <li>Account and transaction information</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Data (Usage Data)</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    When you access our platform, we automatically collect technical data such as:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>IP address and browser details</li>
                                    <li>Device type and operating system</li>
                                    <li>Pages visited and time spent</li>
                                    <li>Login activity and device identifiers</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm italic">
                                    This helps improve performance, prevent fraud, and enhance user experience.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Cookies & Tracking Technologies</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We use cookies and similar tracking tools to:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Enable secure login and transactions</li>
                                    <li>Remember user preferences</li>
                                    <li>Analyze website traffic and performance</li>
                                    <li>Improve digital recharge and payment services</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                    You can manage cookie settings in your browser, but disabling cookies may limit certain features.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Personal Data</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Your data is used to deliver secure and reliable financial services, including:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Processing mobile recharge, DTH recharge, and utility bill payments</li>
                                    <li>Managing user accounts and customer support</li>
                                    <li>Sending transaction alerts, updates, and service notifications</li>
                                    <li>Improving platform performance and security</li>
                                    <li>Preventing fraud and unauthorized access</li>
                                    <li>Marketing relevant offers and promotions (with consent)</li>
                                    <li>Meeting legal and regulatory requirements</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Sharing of Information</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We may share your information only when necessary, such as with:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Trusted service providers and payment partners</li>
                                    <li>Business affiliates and authorized partners</li>
                                    <li>Legal or regulatory authorities when required by law</li>
                                    <li>Entities involved in mergers or business restructuring</li>
                                </ul>
                                <p className="text-primary font-bold">We do not sell personal data to third parties.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Retention Policy</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We retain personal data only as long as necessary to:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Provide services and process transactions</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Prevent fraud and resolve disputes</li>
                                    <li>Improve platform functionality</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm italic">Usage data may be stored for analytics and security monitoring.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Data Security Measures</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We implement industry-standard security practices to protect your personal information, including encryption and secure payment processing. However, no online system is completely risk-free.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Your Data Rights</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">You have the right to:</p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Access and review your personal data</li>
                                    <li>Update or correct inaccurate information</li>
                                    <li>Request deletion of personal data</li>
                                    <li>Withdraw consent for marketing communication</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                    You can manage your data through account settings or by contacting support.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Children’s Privacy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal data from minors.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Third-Party Websites</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our platform may contain links to external websites. We are not responsible for their privacy practices or content. Please review their policies separately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Updates to This Privacy Policy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Privacy Policy periodically to reflect legal or service changes. Updates will be posted on this page with the revised effective date.
                                </p>
                            </section>

                            <div className="pt-12 border-t border-white/10 mt-12">
                                <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Information</h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    For questions, data requests, or privacy concerns, contact us through:
                                </p>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="space-y-1">
                                        <p className="font-bold text-foreground">Email Support</p>
                                        <a href="mailto:care@tfcpay.app" className="text-primary hover:underline text-sm font-medium">care@tfcpay.app</a>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-foreground">Contact Form</p>
                                        <p className="text-muted-foreground text-sm">Available on our website</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-foreground">Phone Support</p>
                                        <a href="tel:99999-06-222" className="text-primary hover:underline text-sm font-medium">99999-06-222</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

