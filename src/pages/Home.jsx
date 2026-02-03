import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Inventory from '../components/Inventory';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Hero />
            <Brands />
            <Inventory />
            <Features />
            <Showcase />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
