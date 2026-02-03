import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Filter, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';

const buses = [
    {
        id: 1,
        title: '2017 TATA MOTORS TATA MAGNA',
        location: 'Ghaziabad',
        km: '50,000 km',
        owner: '1 Owner',
        fuel: 'Diesel',
        type: 'Fully Built',
        price: 'â‚¹2 Lakh*',
        emi: 'â‚¹5,995',
        seller: 'Sanjeev Kumar Sharma',
        dealer: true,
        image: '/assets/city-bus.png'
    },
    {
        id: 2,
        title: '2017 TATA MOTORS WINGER - S...',
        location: 'Ghaziabad',
        km: '75,000 km',
        owner: '1 Owner',
        fuel: 'Diesel',
        type: 'Fully Built',
        price: 'â‚¹5 Lakh*',
        emi: 'â‚¹14,988',
        seller: 'Sanjeev Kumar Sharma',
        dealer: true,
        image: '/assets/hero.png'
    },
    {
        id: 3,
        title: '2018 FORCE MOTORS TRAVELLER...',
        location: 'Ghaziabad',
        km: '40,000 km',
        owner: '3 Owner',
        fuel: 'Diesel',
        type: 'Fully Built',
        price: 'â‚¹4 Lakh*',
        emi: 'â‚¹11,990',
        seller: 'Bhim',
        dealer: true,
        image: '/assets/red-coach.png'
    },
    {
        id: 4,
        title: '2019 ASHOK LEYLAND OYSTER',
        location: 'Mumbai',
        km: '35,000 km',
        owner: '1 Owner',
        fuel: 'Diesel',
        type: 'School Bus',
        price: 'â‚¹12 Lakh*',
        emi: 'â‚¹25,500',
        seller: 'City Transports',
        dealer: true,
        image: '/assets/city-bus.png'
    },
    {
        id: 5,
        title: '2020 VOLVO 9600',
        location: 'Bangalore',
        km: '120,000 km',
        owner: 'First Owner',
        fuel: 'Diesel',
        type: 'Sleeper Coach',
        price: 'â‚¹45 Lakh*',
        emi: 'â‚¹85,000',
        seller: 'Intercity Travels',
        dealer: true,
        image: '/assets/hero.png'
    },
    {
        id: 6,
        title: '2016 EICHER SKYLINE PRO',
        location: 'Delhi',
        km: '85,000 km',
        owner: '2nd Owner',
        fuel: 'CNG',
        type: 'Staff Bus',
        price: 'â‚¹8.5 Lakh*',
        emi: 'â‚¹18,200',
        seller: 'Rahul Motors',
        dealer: false,
        image: '/assets/red-coach.png'
    },
    {
        id: 7,
        title: '2021 BHARAT BENZ 1017',
        location: 'Chennai',
        km: '25,000 km',
        owner: '1 Owner',
        fuel: 'Diesel',
        type: 'Tourist',
        price: 'â‚¹18 Lakh*',
        emi: 'â‚¹38,000',
        seller: 'Southern Wheels',
        dealer: true,
        image: '/assets/city-bus.png'
    }
];

const FilterSection = ({ title, children, isOpen = false }) => {
    const [open, setOpen] = useState(isOpen);
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left font-bold text-gray-200 hover:text-primary transition-colors"
            >
                {title}
                {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Checkbox = ({ label, count }) => (
    <label className="flex items-center justify-between cursor-pointer group">
        <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-600 custom-checkbox accent-primary" />
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{label}</span>
        </div>
        {count && <span className="text-xs text-gray-600">({count})</span>}
    </label>
);

const BusesPage = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col h-screen overflow-hidden">
            <div className="z-50">
                <Navbar />
            </div>

            {/* Main Layout Container - Full Height minus header */}
            <div className="flex flex-1 pt-[80px] h-full overflow-hidden">

                {/* Sidebar - Scrollable */}
                <aside className="w-80 hidden md:block bg-[#0a0a0a] border-r border-gray-800 h-full overflow-y-auto custom-scrollbar p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <Filter className="w-5 h-5 text-gray-400" />
                    </div>

                    <div className="space-y-2">

                        {/* Brand Filter */}
                        <FilterSection title="Brand & Model" isOpen={true}>
                            <div className="relative mb-3">
                                <input
                                    type="text"
                                    placeholder="Search Brand & Model"
                                    className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg py-2 pl-3 pr-8 text-sm focus:border-primary focus:outline-none"
                                />
                                <Search className="w-4 h-4 text-gray-500 absolute right-3 top-2.5" />
                            </div>
                            <Checkbox label="TATA MOTORS" count="8" />
                            <Checkbox label="FORCE MOTORS" count="6" />
                            <Checkbox label="EICHER" count="2" />
                            <Checkbox label="SML ISUZU" count="2" />
                            <Checkbox label="ASHOK LEYLAND" count="5" />
                            <Checkbox label="VOLVO" count="3" />
                            <button className="text-sm text-primary font-bold mt-2 hover:underline">View More</button>
                        </FilterSection>

                        {/* Other Filters */}
                        <FilterSection title="Budget">
                            <Checkbox label="Below 5 Lakhs" />
                            <Checkbox label="5 Lakhs - 10 Lakhs" />
                            <Checkbox label="10 Lakhs - 20 Lakhs" />
                            <Checkbox label="Above 20 Lakhs" />
                        </FilterSection>

                        <FilterSection title="Kilometers Driven">
                            <Checkbox label="0 - 25,000 km" />
                            <Checkbox label="25,000 - 50,000 km" />
                            <Checkbox label="50,000 - 100,000 km" />
                            <Checkbox label="Above 100,000 km" />
                        </FilterSection>

                        <FilterSection title="Seller Type">
                            <Checkbox label="Dealer" />
                            <Checkbox label="Individual" />
                        </FilterSection>

                        <FilterSection title="Transmission">
                            <Checkbox label="Manual" />
                            <Checkbox label="Automatic" />
                        </FilterSection>

                        <FilterSection title="Body Type">
                            <Checkbox label="School Bus" />
                            <Checkbox label="Staff Bus" />
                            <Checkbox label="Tourist" />
                        </FilterSection>

                        <FilterSection title="Fuel Type">
                            <Checkbox label="Diesel" />
                            <Checkbox label="CNG" />
                            <Checkbox label="Electric" />
                        </FilterSection>

                    </div>
                </aside>

                {/* Main Content - Scrollable */}
                <main className="flex-1 h-full overflow-y-auto custom-scrollbar p-6 bg-black">
                    {/* Top Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <h1 className="text-2xl font-bold">Used Buses for Sale <span className="text-gray-500 text-lg font-normal">({buses.length} Results)</span></h1>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">Sort by:</span>
                            <select className="bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-2 text-sm focus:border-primary focus:outline-none">
                                <option>Nearest First</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>
                    </div>

                    {/* Bus Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                        {buses.map((bus) => (
                            <div key={bus.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group relative">
                                {/* Image */}
                                <div className="h-48 relative overflow-hidden">
                                    <img src={bus.image} alt={bus.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                                        <p className="text-white text-xs font-bold">99 People contacted since last week</p>
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white transition-colors group/heart">
                                        <Heart className="w-4 h-4 text-white group-hover/heart:text-red-500 hover:fill-red-500" />
                                    </button>
                                    <button className="absolute top-3 right-12 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white transition-colors group/share">
                                        <Share2 className="w-4 h-4 text-white group-hover/share:text-black" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4 bg-white text-black text-left">
                                    <h3 className="font-bold text-lg mb-1 truncate">{bus.title}</h3>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                                        <MapPin className="w-4 h-4" /> {bus.location}
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-4 flex-wrap">
                                        <span className="px-2 py-1 bg-gray-100 rounded">{bus.km}</span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        <span className="px-2 py-1 bg-gray-100 rounded">{bus.owner}</span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        <span className="px-2 py-1 bg-gray-100 rounded">{bus.fuel}</span>
                                    </div>

                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-xl font-extrabold">{bus.price}</p>
                                            <p className="text-xs text-gray-500">EMI From {bus.emi}</p>
                                        </div>
                                        {bus.dealer && (
                                            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded border border-orange-200">Dealer</span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs font-bold text-gray-400 truncate max-w-[50%]">{bus.seller}</span>
                                        <button className="px-6 py-2 bg-[#003B70] text-white rounded-lg font-bold text-sm hover:bg-[#002a50] transition-colors shadow-lg shadow-blue-900/20">
                                            Contact Seller
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BusesPage;
