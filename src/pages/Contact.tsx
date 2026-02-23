import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Send, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container max-w-6xl mx-auto px-4">
                    {/* Hero Section */}
                    <div className="mb-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
                        >
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium tracking-wide uppercase">Get in Touch</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/40"
                        >
                            Let's Talk - Any Questions?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
                        >
                            We are dedicated to providing seamless support for all your queries and concerns.
                            Your satisfaction is our priority, and we look forward to assisting you.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Contact Info - Clean Stacked Layout */}
                        <div className="lg:col-span-5 space-y-12 relative h-full">
                            {/* Symmetrical Glow (Heatmap) */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-24 -mt-12 pointer-events-none" />

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-10 relative z-10 py-4"
                            >
                                {/* Mail */}
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/30 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                                        <Mail className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Email us</h3>
                                        <a href="mailto:care@tfcpay.app" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base break-all">care@tfcpay.app</a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/30 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                                        <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Call us</h3>
                                        <a href="tel:99999-06-222" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">99999-06-222</a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/30 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                                        <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Address</h3>
                                        <p className="text-primary font-bold text-sm md:text-base mb-1.5 uppercase tracking-tight">TFC DIGITAL PVT LTD</p>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                            Unit-22, 17th floor, L-2A, Pocket G, Sector-18,<br />
                                            Noida, Uttar Pradesh 201301
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-secondary/10 p-6 md:p-10 rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors group-hover:bg-primary/10" />

                                <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Drop a message us</h2>
                                <p className="text-muted-foreground text-sm mb-6 md:mb-8">Fill up form below, our team will get back soon</p>

                                <form className="space-y-4 md:space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs md:text-sm font-medium pl-1">Full Name</label>
                                            <Input
                                                placeholder="John Doe"
                                                className="bg-background/50 border-white/10 h-11 md:h-12 rounded-lg md:rounded-xl focus:border-primary transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs md:text-sm font-medium pl-1">Email Address</label>
                                            <Input
                                                type="email"
                                                placeholder="email@example.com"
                                                className="bg-background/50 border-white/10 h-11 md:h-12 rounded-lg md:rounded-xl focus:border-primary transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm font-medium pl-1">Subject</label>
                                        <Input
                                            placeholder="How can we help?"
                                            className="bg-background/50 border-white/10 h-11 md:h-12 rounded-lg md:rounded-xl focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm font-medium pl-1">Your Message</label>
                                        <Textarea
                                            placeholder="Tell us more about your inquiry..."
                                            className="bg-background/50 border-white/10 min-h-[120px] md:min-h-[150px] rounded-xl focus:border-primary transition-all resize-none"
                                        />
                                    </div>

                                    <Button className="w-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-black font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-xl shadow-primary/20 group">
                                        Send Message
                                        <Send className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
