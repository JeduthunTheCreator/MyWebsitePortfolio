import React from 'react';
import backgroundImg from '/assets/Stylist.jpeg'; 

const FashionHero = () => {
    return (
        <div
            className="h-screen bg-cover bg-[50%_5%] relative"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase">
                    COMING SOON!
                </h1>
                
                <nav className="mt-6 ">
                    <a href="/" className="space-x-6 text-2xl md:text-2xl text-white font-light tracking-widest uppercase hover:text-gray-600 transition-all text-white hover:text-gray-600">Home Page</a>
                    {/* <a href="#galleries" className="hover:underline">Galleries</a>
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                    <a href="#blog" className="hover:underline">Blog</a>
                    */}
                </nav>
                
            </div>
        </div>
    );
};

export default FashionHero;
