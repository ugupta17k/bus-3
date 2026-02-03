import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const buses = [
    {
        id: 1,
        name: '2025 Mercedes Tourismo',
        trim: 'Luxury Trim',
        price: '$285,000',
        image: '/assets/hero.png', // Reusing hero image for now
    },
    {
        id: 2,
        name: 'Volvo 7900 Electric',
        trim: 'City Edition',
        price: '$520,000',
        image: '/assets/city-bus.png',
    },
    {
        id: 3,
        name: 'Scania Touring',
        trim: 'Long Range',
        price: '$325,000',
        image: '/assets/hero.png', // Placeholder
    },
    {
        id: 4,
        name: 'MAN Lion\'s Coach',
        trim: 'Premium Coach',
        price: '$363,000',
        image: '/assets/city-bus.png', // Placeholder
    },
    {
        id: 5,
        name: 'Irizar i8',
        trim: 'Executive Class',
        price: '$474,000',
        image: '/assets/hero.png', // Placeholder
    },
    {
        id: 6,
        name: 'Neoplan Skyliner',
        trim: 'Double Decker',
        price: '$845,000',
        image: '/assets/city-bus.png', // Placeholder
    }
];

const Inventory = () => {
    return (
        <section id="buses" className="py-24 bg-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Unlock Your Bus
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose from our premium selection of world-class buses designed for comfort, efficiency, and style.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {buses.map((bus, index) => (
                        <motion.div
                            key={bus.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#1A1A1A] rounded-3xl p-4 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                        >
                            <div className="h-48 w-full bg-black/50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center p-2">
                                <img
                                    src={bus.image}
                                    alt={bus.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-2 mb-4">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{bus.name}</h3>
                                        <p className="text-gray-500 text-sm">{bus.trim}</p>
                                    </div>
                                    <span className="text-primary font-bold text-lg">{bus.price}</span>
                                </div>
                            </div>

                            <Link to="/contact" className="block w-full text-center py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                                Buy Now
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Inventory;
