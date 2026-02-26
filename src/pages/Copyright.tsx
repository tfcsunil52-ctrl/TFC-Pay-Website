import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Copyright = () => {
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
                        {/* Page Header */}
                        <div className="mb-12 border-b border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                Copyright Policy
                            </h1>
                            <p className="text-sm text-muted-foreground">Last Updated: February 2025</p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-12">

                            {/* Intro */}
                            <section>
                                <p className="text-muted-foreground leading-relaxed">
                                    All content available on this website, including but not limited to text, images,
                                    graphics, logos, design elements, software, layout, and digital materials, is the
                                    exclusive property of <strong className="text-foreground">TFC DIGITAL PVT LTD</strong> and
                                    is protected under applicable copyright and intellectual property laws.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Any unauthorized copying, reproduction, distribution, modification, publication,
                                    transmission, or commercial use of any content from this website without prior written
                                    permission is strictly prohibited.
                                </p>
                            </section>

                            {/* Permitted Use */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">Permitted Use</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Users may access or download website content for personal and non-commercial use only,
                                    provided that:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>The content is not modified in any way</li>
                                    <li>Copyright or ownership notices are not removed</li>
                                    <li>The content is not used for commercial purposes</li>
                                </ul>
                            </section>

                            {/* Trademarks */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">Trademarks</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    All trademarks, service marks, brand names, and logos displayed on this website are
                                    the property of their respective owners. Unauthorized use is strictly prohibited.
                                </p>
                            </section>

                            {/* Copyright Infringement */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">Copyright Infringement</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If you believe that any content on this website infringes your copyright, please
                                    contact us with the following details:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                    <li>Your name and contact information</li>
                                    <li>Description of the copyrighted material</li>
                                    <li>URL of the page where the alleged infringement appears</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We will review the claim and take appropriate action where necessary.
                                </p>
                            </section>

                            {/* External Links */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This website may contain links to third-party websites. We do not control or take
                                    responsibility for the content, policies, or practices of these external sites.
                                </p>
                            </section>

                            {/* Policy Updates */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">Policy Updates</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to update or modify this Copyright Policy at any time without
                                    prior notice. The latest version will always be available on this page.
                                </p>
                            </section>

                            {/* Contact Us */}
                            <div className="pt-12 border-t border-white/10 mt-12">
                                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If you have any questions regarding this Copyright Policy, please contact us:
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>
                                        <span className="text-foreground font-semibold">Email: </span>
                                        <a href="mailto:care@tfcpay.app" className="text-primary hover:underline">
                                            care@tfcpay.app
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-foreground font-semibold">Website: </span>
                                        <a href="https://www.tfcpay.app" className="text-primary hover:underline">
                                            www.tfcpay.app
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-foreground font-semibold">Company Name: </span>
                                        TFC DIGITAL PVT LTD
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Copyright;

