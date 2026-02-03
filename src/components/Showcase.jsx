import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="py-20 bg-dark overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">World's Best Buses</h2>
                <p className="text-gray-400">Experience engineering perfection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto h-[600px]">
                {/* Large Item */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="md:col-span-1 lg:col-span-1 row-span-2 relative rounded-3xl overflow-hidden group"
                >
                    <img src="/assets/hero.png" alt="Showcase 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl font-bold">Future of Travel</h3>
                    </div>
                </motion.div>

                {/* Top Right */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="md:col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden h-[290px] group"
                >
                    <img src="/assets/city-bus.png" alt="Showcase 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl font-bold">Zero Emission</h3>
                    </div>
                </motion.div>

                {/* Bottom Right 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative rounded-3xl overflow-hidden h-[290px] group"
                >
                    <img src="/assets/hero.png" alt="Showcase 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                </motion.div>

                {/* Bottom Right 2 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative rounded-3xl overflow-hidden h-[290px] group"
                >
                    <img src="/assets/city-bus.png" alt="Showcase 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
