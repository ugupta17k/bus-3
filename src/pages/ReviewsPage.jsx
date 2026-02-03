import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, UserCheck, MessageSquare } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "James Anderson",
        role: "CEO, Anderson Travels",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2 days ago",
        content: "The best purchasing experience we've ever had. Detailed listing was 100% accurate, and the bus runs like a dream. The team even helped us with custom branding before delivery.",
        verified: true
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Fleet Manager, CityTransit",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "1 week ago",
        content: "We bought three electric city buses. The process was seamless, transparent, and efficient. Highly recommend for any municipal requirements.",
        verified: true
    },
    {
        id: 3,
        name: "Robert Fox",
        role: "Owner, Fox Charters",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        rating: 4,
        date: "2 weeks ago",
        content: "Great selection of Volvo coaches. Financing options were flexible. One minor delay in delivery due to weather, but communication was excellent throughout.",
        verified: true
    },
    {
        id: 4,
        name: "Emily Chen",
        role: "Director, EduBus Services",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        date: "3 weeks ago",
        content: "Safety was our priority for school buses. This platform gave us all the technical details we needed to make an informed decision. Very trustworthy.",
        verified: true
    },
    {
        id: 5,
        name: "David Miller",
        role: "Private Operator",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        rating: 5,
        date: "1 month ago",
        content: "Found a rare vintage double-decker here! The restoration quality is impeccable. It's now the crown jewel of my collection.",
        verified: true
    },
    {
        id: 6,
        name: "Lisa Wong",
        role: "Logistics Head, CorpShuttle",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        date: "1 month ago",
        content: "Excellent post-sales support. We had a minor issue with the AC unit, and they arranged a technician within 24 hours. That kind of service is rare.",
        verified: true
    }
];

const ReviewsPage = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">

                    {/* Header & Stats */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl font-bold mb-6">Client Stories</h1>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                We take pride in powering the fleets of thousands of businesses worldwide.
                                Read about their experiences with our premium buses and services.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#111] p-8 rounded-3xl border border-gray-800 flex justify-around items-center"
                        >
                            <div className="text-center border-r border-gray-800 w-full">
                                <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                                <div className="text-sm text-gray-500">Average Rating</div>
                                <div className="flex justify-center mt-2 text-yellow-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                            </div>
                            <div className="text-center w-full">
                                <div className="text-4xl font-bold text-white mb-1">2k+</div>
                                <div className="text-sm text-gray-500">Happy Clients</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Review */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-r from-primary/20 to-purple-900/20 p-1 rounded-3xl mb-20"
                    >
                        <div className="bg-[#0f0f0f] rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                            <Quote className="absolute top-8 right-8 text-primary/10 w-32 h-32 rotate-12" />
                            <div className="relative z-10">
                                <div className="flex gap-1 text-yellow-500 mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-normal mb-8 max-w-4xl">
                                    "We've sourced our entire fleet of 50+ coaches through this platform. The reliability and transparency are unmatched in the industry."
                                </h2>
                                <div className="flex items-center gap-4">
                                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Featured" className="w-16 h-16 rounded-full border-2 border-primary" />
                                    <div>
                                        <div className="font-bold text-lg">Michael Ross</div>
                                        <div className="text-gray-400">Director of Operations, TransGlobal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full bg-gray-800" />
                                        <div>
                                            <h4 className="font-bold text-sm">{review.name}</h4>
                                            <p className="text-xs text-gray-500">{review.role}</p>
                                        </div>
                                    </div>
                                    {review.verified && (
                                        <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                            <UserCheck className="w-3 h-3" /> Verified
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-1 text-yellow-500 mb-4 text-xs">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-700'}`} />
                                    ))}
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    "{review.content}"
                                </p>

                                <div className="flex justify-between items-center pt-6 border-t border-gray-800 text-xs text-gray-500">
                                    <span>{review.date}</span>
                                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                                        <ThumbsUp className="w-3 h-3" /> Helpful
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-8 py-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all font-bold flex items-center gap-2 mx-auto">
                            <MessageSquare className="w-4 h-4" /> Load More Reviews
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ReviewsPage;
