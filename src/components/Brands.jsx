import React from 'react';

const brands = [
    { name: 'Volvo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo_Logo.svg/2560px-Volvo_Logo.svg.png' },
    { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/2560px-Mercedes-Benz_Logo_2010.svg.png' },
    { name: 'Scania', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Scania_Logo.svg/2560px-Scania_Logo.svg.png' },
    { name: 'MAN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MAN_Truck_%26_Bus_logo.svg/2560px-MAN_Truck_%26_Bus_logo.svg.png' },
    { name: 'Irizar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Irizar_logo.svg/1280px-Irizar_logo.svg.png' },
    { name: 'Setra', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Setra-logo-new.svg' }
];

const Brands = () => {
    return (
        <section id="brands" className="py-12 bg-black border-y border-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Trusted by Leading Manufacturers</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-12 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
