import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { q: "What financing options do you offer?", a: "We offer flexible leasing, installment plans, and direct financing through our banking partners." },
    { q: "Do you provide after-sales support?", a: "Yes, we have a global network of service centers and offer 24/7 roadside assistance." },
    { q: "Can I customize a bus order?", a: "Absolutely. We offer extensive customization for interiors, livery, and technical specifications." },
    { q: "What is the warranty period?", a: "Our standard warranty covers 3 years or 300,000 km, whichever comes first, with options to extend." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-dark">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.q}</span>
                                {openIndex === index ? <Minus className="text-primary" /> : <Plus className="text-gray-500" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
