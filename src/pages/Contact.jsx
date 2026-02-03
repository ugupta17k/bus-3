import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-gray-400 mb-8 max-w-lg text-lg">
                            Interested in our fleet? Want to schedule a demo? Fill out the form below and our sales team will contact you shortly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">P</div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">E</div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-gray-400">sales@busshop.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#111] p-8 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(139,92,246,0.1)]"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Interest</label>
                                <select className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors">
                                    <option>Request a Demo</option>
                                    <option>Sales Inquiry</option>
                                    <option>Support</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell us more about your needs..."></textarea>
                            </div>

                            <button type="button" className="w-full py-4 rounded-full bg-primary hover:bg-purple-700 text-white font-bold text-lg transition-all shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
