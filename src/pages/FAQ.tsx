import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Know more about TFCPAY.",
        answer: "TFCPAY enables users to recharge their mobile phones conveniently, pay DTH bills, and make other bill payments from the comfort of their homes, while also earning exciting rewards. These services offer multiple payment options including credit cards, and net banking, ensuring easy and secure transactions."
    },
    {
        question: "Do I need to register to use TFCPAY?",
        answer: "Yes, you need to register by providing your mobile number and creating a password. You may also need to verify your identity to activate certain features."
    },
    {
        question: "How to use TFCPAY?",
        answer: "1. Download TFCPAY app now from the Play Store.\n2. Register yourself on the app.\n3. Select service and fill in your recharge details.\n4. Fetch your details & pay now."
    },
    {
        question: "Why should I use TFCPAY?",
        answer: "The TFCPAY app provides assured cashback on every recharge without charging any extra code or fee."
    },
    {
        question: "How do you contact the TFCPAY support team?",
        answer: "We provide support through calls and email so anyone can reach us by clicking the Contact Us button."
    },
    {
        question: "Is it safe for Online recharge?",
        answer: "No doubt, All transactions are securely executed & no such credentials are ever accessible by any individuals or third parties."
    },
    {
        question: "Are there any fees for using TFCPAY?",
        answer: "TFCPAY does not charge any fees for using the app itself."
    },
    {
        question: "Can I track my payment history on TFCPAY?",
        answer: "Yes, you can view your transaction history and payment receipts within the app for easy reference."
    },
    {
        question: "What are the payment options available on TFCPAY?",
        answer: "TFCPAY supports various payment options including credit/debit cards, net banking, and UPI, for your convenience."
    }
];

const FAQ = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 inline-block">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Find answers to common queries about using TFCPAY. If you can't find what you're looking for, feel free to contact us.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border border-white/5 bg-secondary/20 rounded-2xl px-6 transition-all hover:border-primary/20 backdrop-blur-sm overflow-hidden"
                                    >
                                        <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg text-foreground/90 hover:text-primary transition-colors">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base whitespace-pre-line">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="mt-16 text-center bg-secondary/20 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                            <p className="text-muted-foreground mb-6">
                                Our support team is always here to help you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="mailto:care@tfcpay.app"
                                    className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                                >
                                    Email Support
                                </a>
                                <a
                                    href="tel:0120-442-0120"
                                    className="px-8 py-3 bg-secondary text-foreground font-bold rounded-full hover:bg-secondary/80 border border-white/10 transition-all hover:scale-105"
                                >
                                    Call Us
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

export default FAQ;
