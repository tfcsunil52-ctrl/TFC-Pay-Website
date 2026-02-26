import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ContactPopupProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
}

const ContactPopup = ({ isOpen, onOpenChange, title = "Business Solutions" }: ContactPopupProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/xojnpdzr", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                toast.success("Thank you! Your inquiry has been sent successfully.");
                onOpenChange(false);
                (e.target as HTMLFormElement).reset();
            } else {
                const errorData = await response.json();
                if (errorData.errors) {
                    toast.error(errorData.errors.map((error: any) => error.message).join(", "));
                } else {
                    toast.error("Oops! There was a problem submitting your form.");
                }
            }
        } catch (error) {
            toast.error("Oops! There was a problem submitting your form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-100">
                <div className="grid md:grid-cols-2">
                    {/* Left Column - Info */}
                    <div className="relative p-6 md:p-8 text-center bg-zinc-900/50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-primary/20 backdrop-blur-md mx-auto">
                                <MessageSquare className="w-8 h-8 text-primary" />
                            </div>

                            <DialogTitle className="text-2xl font-bold text-white mb-2">
                                {title}
                            </DialogTitle>

                            <p className="text-zinc-400 mb-8 text-sm">
                                Interested in our business solutions? Leave your details and our team will get back to you with a customized proposal.
                            </p>

                            <div className="space-y-4 text-left">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Send className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">Quick Response</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">Expert Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="p-6 md:p-8">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider pl-1">Full Name</label>
                                <Input
                                    name="full_name"
                                    required
                                    placeholder="Enter your name"
                                    className="bg-zinc-900/50 border-zinc-800 h-11 rounded-xl focus:border-primary transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider pl-1">Company Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="email@company.com"
                                    className="bg-zinc-900/50 border-zinc-800 h-11 rounded-xl focus:border-primary transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider pl-1">Service Interest</label>
                                <Input
                                    name="service_interest"
                                    required
                                    placeholder="e.g. BBPS API, Recharge API"
                                    className="bg-zinc-900/50 border-zinc-800 h-11 rounded-xl focus:border-primary transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider pl-1">Message</label>
                                <Textarea
                                    name="message"
                                    required
                                    placeholder="How can we help your business?"
                                    className="bg-zinc-900/50 border-zinc-800 min-h-[100px] rounded-xl focus:border-primary transition-all text-white resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold text-base rounded-xl shadow-lg shadow-primary/20 group mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Submit Inquiry
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ContactPopup;

