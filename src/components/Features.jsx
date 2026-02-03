import React from 'react';
import { Truck, ShieldCheck, TrendingUp, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Truck,
        title: 'Vast Selection',
        desc: 'We offer an extensive inventory of new and pre-owned vehicles across all makes and models.',
        color: 'bg-blue-500'
    },
    {
        icon: ShieldCheck,
        title: 'Expert Guidance',
        desc: 'Our knowledgeable team provides transparent, no-pressure buying experience.',
        color: 'bg-purple-500'
    },
    {
        icon: TrendingUp,
        title: 'Competitive Pricing',
        desc: 'We pride ourselves on offering competitive pricing and flexible financing options.',
        color: 'bg-indigo-500'
    },
    {
        icon: Headset,
        title: 'After-Sales Support',
        desc: 'Our commitment doesn\'t end with the sale; we offer comprehensive service and parts.',
        color: 'bg-pink-500'
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-gray-400">Excepteur sint occaecat cupidatat non proident</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-[#111] border border-gray-800 hover:border-primary/30 transition-all group overflow-hidden relative"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity`} />

                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 text-white bg-opacity-20`}>
                                <feature.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
