import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles, Volume2, VolumeX } from "lucide-react";

const CommercialVideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                } else {
                    if (videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause();
                    }
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (shouldLoad && videoRef.current) {
            videoRef.current.load();
        }
    }, [shouldLoad]);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="py-12 md:py-16 relative">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">WATCH OUR STORY</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Experience the Future of <span className="text-primary">Digital Payments</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Discover how TFC Pay is revolutionizing the way India pays, saves, and earns cashback.
                        </p>
                    </motion.div>

                    {/* Right - Small Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-xl group bg-black">
                            {/* Video Element with Lazy Loading */}
                            <video
                                ref={videoRef}
                                loop
                                playsInline
                                preload="metadata"
                                poster={`${import.meta.env.BASE_URL}thumbnail.webp`}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={handlePlayPause}
                            >
                                {shouldLoad && (
                                    <source src={`${import.meta.env.BASE_URL}video.webm`} type="video/webm" />
                                )}
                            </video>

                            {/* Play Button Overlay - Only visible when paused */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-colors"
                                    onClick={handlePlayPause}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-16 h-16 rounded-full bg-[#22c55e] flex items-center justify-center shadow-lg shadow-green-900/20"
                                    >
                                        <Play className="w-8 h-8 text-white ml-1 fill-white" />
                                    </motion.div>
                                </div>
                            )}

                            {/* Controls Overlay (Mute Toggle) - Visible on hover or when playing */}
                            {isPlaying && (
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={toggleMute}
                                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                    >
                                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CommercialVideoSection;
