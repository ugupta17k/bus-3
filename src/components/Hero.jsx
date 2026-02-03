import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-black to-black z-0" />

            {/* Glow Effects */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Find Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Perfect Bus
                        </span> <br />
                        Today
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        Experience the future of transportation with our premium collection of luxury coaches, city buses, and electric shuttles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#buses"
                            className="px-8 py-4 rounded-full bg-primary hover:bg-purple-700 text-white font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                        >
                            Buy Now <ArrowRight className="w-5 h-5" />
                        </a>
                        <button className="px-8 py-4 rounded-full border border-gray-700 hover:border-primary hover:text-primary text-gray-300 font-bold transition-all flex items-center gap-2">
                            <Play className="w-5 h-5 fill-current" /> Watch Video
                        </button>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative"
                >
                    <img
                        src="/assets/hero.png"
                        alt="Luxury Bus"
                        className="w-full object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-float"
                    />
                    {/* Floor Reflection/Shadow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-[60px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
