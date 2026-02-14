import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DownloadPopupProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const DownloadPopup = ({ isOpen, onOpenChange }: DownloadPopupProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-100">
                <div className="grid md:grid-cols-2">
                    <div className="relative p-6 md:p-8 text-center">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/10 backdrop-blur-md mx-auto">
                                <img
                                    src={`${import.meta.env.BASE_URL}logo.webp`}
                                    alt="TFCPAY Logo"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>

                            <DialogTitle className="text-2xl font-bold text-white mb-2">
                                Download Our App Now
                            </DialogTitle>

                            <p className="text-zinc-400 mb-8">
                                To access our services and start earning rewards, download the App on your smartphone today!
                            </p>

                            <div className="flex flex-col gap-4">
                                <a href="https://play.google.com/store/apps/details?id=com.new_wltpe&hl=en_IN" target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full h-12 text-base gap-3 bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg shadow-green-900/20">
                                        <img src={`${import.meta.env.BASE_URL}play-store.webp`} alt="Google Play" className="w-5 h-5 object-contain" />
                                        Download from Google Play
                                    </Button>
                                </a>

                                <Button variant="outline" className="w-full h-12 text-base gap-3 border-green-500 bg-transparent hover:bg-transparent text-white hover:text-white">
                                    <img src={`${import.meta.env.BASE_URL}app-store.webp`} alt="App Store" className="w-5 h-5 object-contain" />
                                    Download from App Store
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - QR Code */}
                    <div className="bg-zinc-900/50 p-6 md:p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-zinc-800">
                        <div className="bg-white p-4 rounded-xl shadow-2xl mb-4">
                            <img
                                src={`${import.meta.env.BASE_URL}qr-code.png`}
                                alt="Scan to Download"
                                className="w-48 h-48 object-contain"
                            />
                        </div>
                        <p className="text-white font-medium text-lg">Scan to Download</p>
                        <p className="text-zinc-500 text-sm mt-1">Use your phone camera</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadPopup;
