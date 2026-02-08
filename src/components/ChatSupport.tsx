
import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

const ChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<{ role: 'user' | 'agent', text: string }[]>([
        { role: 'agent', text: "Hi! I'm Trisha, your TFC Pay assistant. How can I help you today?" }
    ]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!message.trim()) return;

        setMessages((prev) => [...prev, { role: 'user', text: message }]);
        setMessage("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: 'agent', text: "Thank you for reaching out. I'll be happy to assist you!" }
            ]);
        }, 1000);
    };

    return (
        <div className="dark">
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="chat-button"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="relative animate-float"
                        >
                            <motion.div
                                layoutId="chat-bubble"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            >
                                <Button
                                    onClick={toggleChat}
                                    className="group h-16 w-16 hover:w-32 pr-2 pl-2 rounded-full shadow-none hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden border border-transparent hover:border-primary bg-transparent hover:bg-gradient-to-r hover:from-slate-900 hover:to-gray-800 flex items-center justify-start gap-2"
                                >
                                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 ml-0.5 shadow-lg bg-black/20">
                                        <img src={`${import.meta.env.BASE_URL}Icons/support-agent-avatar.webp`} alt="Support" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="text-white font-bold text-sm flex flex-col items-start leading-[1.1] opacity-0 group-hover:opacity-100 group-hover:animate-flicker transition-opacity duration-300">
                                        <span>Ask</span>
                                        <span>Trisha</span>
                                    </div>
                                </Button>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat-window"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            <motion.div
                                layoutId="chat-bubble"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            >
                                <Card className="w-[350px] h-[450px] shadow-2xl border-primary/30 flex flex-col bg-card overflow-hidden rounded-2xl">
                                    <CardHeader className="p-4 border-b border-primary/20 flex flex-row justify-between items-center space-y-0">
                                        <div className="flex items-center gap-3">
                                            <div className="relative h-10 w-10">
                                                <div className="h-full w-full overflow-hidden rounded-full border border-primary/20 bg-background/50">
                                                    <img src={`${import.meta.env.BASE_URL}Icons/support-agent.webp`} alt="Trisha" className="h-full w-full object-cover" />
                                                </div>
                                                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg text-white leading-none mb-1">Trisha</CardTitle>
                                                <p className="text-[10px] text-green-500 font-medium uppercase tracking-widest">Online</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full">
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </CardHeader>

                                    <CardContent className="flex-1 p-0 overflow-hidden">
                                        <ScrollArea className="h-full p-4">
                                            <div className="flex flex-col space-y-4">
                                                {messages.map((msg, index) => (
                                                    <div
                                                        key={index}
                                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                                    >
                                                        <div
                                                            className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user'
                                                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                                                : 'bg-muted text-foreground rounded-bl-none'
                                                                }`}
                                                        >
                                                            {msg.text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </CardContent>

                                    <CardFooter className="p-3 border-t bg-card">
                                        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                                            <Input
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Type your message..."
                                                className="flex-1 focus-visible:ring-primary/50"
                                            />
                                            <Button type="submit" size="icon" className="shrink-0" disabled={!message.trim()}>
                                                <Send className="h-4 w-4" />
                                            </Button>
                                        </form>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ChatSupport;
