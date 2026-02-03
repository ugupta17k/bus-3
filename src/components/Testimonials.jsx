import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Cameron Williamson",
        role: "Fleet Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Darlene Robertson",
        role: "Tour Operator",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Wade Warren",
        role: "City Transit Director",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="reviews" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-gray-400">Trusted by professionals across the industry</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-[#111] p-8 rounded-3xl border border-gray-800 relative hover:border-primary/50 transition-colors">
                            <Quote className="absolute top-8 right-8 text-primary/20 w-10 h-10" />

                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 italic mb-6">"{t.text}"</p>

                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
