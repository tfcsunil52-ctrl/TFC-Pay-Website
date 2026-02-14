import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export const TRIGGER_DOWNLOAD_DIALOG = "trigger-download-dialog";

const DownloadDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleTrigger = () => setIsOpen(true);
        window.addEventListener(TRIGGER_DOWNLOAD_DIALOG, handleTrigger);
        return () => window.removeEventListener(TRIGGER_DOWNLOAD_DIALOG, handleTrigger);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[500px] bg-slate-900 border-primary/30 text-white overflow-hidden">
                {/* Background Mesh */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-black/60 pointer-events-none" />

                <DialogHeader className="relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/20 rounded-2xl">
                            <Smartphone className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-white">
                        Get the <span className="text-primary">TFC PAY</span> App
                    </DialogTitle>
                    <DialogDescription className="text-slate-400 text-center text-lg mt-2">
                        Scan the QR code or use the links below to download the app and start earning cashback!
                    </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-8 items-center mt-6 relative z-10">
                    {/* QR Code */}
                    <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center justify-center">
                        <img
                            src={`${import.meta.env.BASE_URL}qr-code.png`}
                            alt="Scan to Download"
                            className="w-32 h-32 object-contain"
                        />
                        <p className="text-black text-xs font-bold mt-2">SCAN TO DOWNLOAD</p>
                    </div>

                    {/* Store Buttons */}
                    <div className="flex flex-col gap-3">
                        <a href="https://play.google.com/store/apps/details?id=com.new_wltpe&hl=en_IN" target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6">
                                <img src={`${import.meta.env.BASE_URL}play-store.webp`} alt="Google Play" className="w-6 h-6 object-contain" />
                                Google Play
                            </Button>
                        </a>
                        <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-800 gap-2 py-6">
                            <img src={`${import.meta.env.BASE_URL}app-store.webp`} alt="App Store" className="w-6 h-6 object-contain" />
                            App Store
                        </Button>
                    </div>
                </div>

                <p className="text-center text-slate-500 text-xs mt-6 relative z-10">
                    Available for Android and iOS devices.
                </p>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadDialog;
