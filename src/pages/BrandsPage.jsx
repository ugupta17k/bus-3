import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Shield } from 'lucide-react';

const expandedBrands = [
    {
        name: 'Volvo',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Logo.svg/2560px-Volvo_Logo.svg.png',
        image: '/assets/hero.png',
        description: 'Volvo Buses is one of the world’s leading providers of sustainable people transport solutions. Known for safety, quality, and environmental care.',
        founded: '1928',
        headquarters: 'Gothenburg, Sweden',
        specialty: 'Electric City Buses & Long-distance Coaches'
    },
    {
        name: 'Mercedes-Benz',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/2560px-Mercedes-Benz_Logo_2010.svg.png',
        image: '/assets/red-coach.png',
        description: 'Mercedes-Benz buses sets standards in safety, comfort, and design. From agile city buses to luxurious touring coaches, every vehicle is a masterpiece.',
        founded: '1895',
        headquarters: 'Stuttgart, Germany',
        specialty: 'Luxury Touring Coaches & City Buses'
    },
    {
        name: 'Scania',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Scania_Logo.svg/2560px-Scania_Logo.svg.png',
        image: '/assets/city-bus.png',
        description: 'Scania is a world-leading provider of transport solutions. Driving the shift towards a sustainable transport system, creating a world of mobility that is better for business, society and the environment.',
        founded: '1891',
        headquarters: 'Södertälje, Sweden',
        specialty: 'Heavy Buses & Trucks'
    },
    {
        name: 'MAN',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MAN_Truck_%26_Bus_logo.svg/2560px-MAN_Truck_%26_Bus_logo.svg.png',
        image: '/assets/city-bus.png',
        description: 'MAN Truck & Bus is one of Europe\'s leading commercial vehicle manufacturers. Their buses impress with maximum efficiency, environmental friendliness, and comfort.',
        founded: '1758',
        headquarters: 'Munich, Germany',
        specialty: 'City & Intercity Buses'
    },
    {
        name: 'Irizar',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Irizar_logo.svg/1280px-Irizar_logo.svg.png',
        image: '/assets/hero.png',
        description: 'Irizar is a world-leading business group in the bus and coach sector. They focus on design, technology, and sustainability.',
        founded: '1889',
        headquarters: 'Ormaiztegi, Spain',
        specialty: 'Premium Coach Bodywork'
    },
    {
        name: 'Setra',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Setra-logo-new.svg/2560px-Setra-logo-new.svg.png',
        image: '/assets/red-coach.png',
        description: 'Setra is the premium brand for touring coaches. The name stands for "Selbsttragend" (self-supporting). They are known for perfection, aesthetics, and comfort.',
        founded: '1951',
        headquarters: 'Neu-Ulm, Germany',
        specialty: 'High-end Luxury Coaches'
    }
];

const BrandsPage = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                        >
                            Our Premium Partners
                        </motion.h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We collaborate with the world's most renowned bus manufacturers to bring you a fleet defined by excellence, safety, and innovation.
                        </p>
                    </div>

                    {/* Brands Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expandedBrands.map((brand, index) => (
                            <motion.div
                                key={brand.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                            >
                                {/* Image Area with Overlay */}
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center p-8 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md">
                                            <img
                                                src={brand.logo}
                                                alt={`${brand.name} logo`}
                                                className="max-h-16 max-w-[180px] object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-2xl font-bold text-white">{brand.name}</h2>
                                        <Award className="text-primary w-6 h-6" />
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden text-ellipsis">
                                        {brand.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <Globe className="w-4 h-4 text-primary" />
                                            <span>HQ: {brand.headquarters}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <Shield className="w-4 h-4 text-primary" />
                                            <span>Est: {brand.founded}</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 rounded-xl border border-gray-700 text-white font-medium hover:bg-primary hover:border-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        View Inventory <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-24 text-center">
                        <h3 className="text-2xl font-bold mb-4">Don't see your preferred brand?</h3>
                        <p className="text-gray-400 mb-8">We can source buses from any manufacturer worldwide.</p>
                        <a href="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                            Contact Sales Team
                        </a>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BrandsPage;
