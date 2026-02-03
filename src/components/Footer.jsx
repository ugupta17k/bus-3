import React from 'react';
import { Bus, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Bus className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-white">BUS SHOP</span>
                        </div>
                        <p className="text-gray-500 mb-6">
                            Drive Your Dream Bus Today. Premium quality commercial vehicles for every need.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Section</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#buses" className="hover:text-primary transition-colors">Buses</a></li>
                            <li><a href="#brands" className="hover:text-primary transition-colors">Brands</a></li>
                            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Others</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">City Buses</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Coaches</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Electric</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Double Decker</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Socials</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /> Facebook</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /> Instagram</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /> Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>Copyright © 2026 BUS SHOP. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
