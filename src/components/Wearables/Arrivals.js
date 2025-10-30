import { products } from "../../data/products";
import watch4bg from "./watch4bg.png";
import Fitbit6bg from "./Fitbit6bg.png";
import Fitbit2bg from "./Fitbit2bg.png";
import Fitbit4bg from "./Fitbit4bg.png";
import { useState } from "react";

export default function Arrivals() {
    const watch4 = products[3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            bg: watch4bg,
            content: (
                <div className="relative z-10 pl-16 pr-8 py-12 max-w-xl">
                    <p className="text-gray-600 mb-3 text-lg font-medium">Available in two sizes</p>
                    
                    <h2 className="text-6xl font-semibold text-gray-900 mb-4 leading-tight max-w-[500px]">
                        {watch4.name}
                    </h2>
                    
                    <p className="text-gray-700 mb-2 text-l leading-relaxed">
                        {watch4.description}
                    </p>
                    
                    {watch4.tagline && (
                        <p className="text-gray-600 mb-6 text-l ">
                            {watch4.tagline}
                        </p>
                    )}
                    
                    <div className="space-y-3 mb-8">
                        <p className="text-xl font-bold text-gray-900">
                            {watch4.monthlyPrice}
                        </p>
                        <p className="text-gray-600 text-l">
                            {watch4.offer} or <span className="font-semibold text-gray-900 text-xl">{watch4.price}</span>
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="bg-blue-900 hover:bg-black text-white px-2 py-2 rounded-xl font-semibold text-l transition-all duration-300 shadow-lg hover:shadow-xl">
                            Learn more
                        </button>
                        
                    </div>
                </div>
            )
        },
        {
            bg: Fitbit6bg,
            content: (
                <div className="relative z-10 pl-16 pr-8 py-12 max-w-xl">
                    <h2 className="text-6xl font-semibold text-gray-900 mb-4 leading-tight">
                        Fitbit Charge 6
                    </h2>
                    
                    <p className="text-gray-700 mb-8 text-l leading-relaxed">
                        Redefine your routine
                    </p>
                    
                    <button className="bg-blue-900 hover:bg-black text-white px-2 py-2 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Learn more
                    </button>
                </div>
            )
        },
        {
            bg: Fitbit2bg,
            content: (
                <div className="relative z-10 pl-16 pr-8 py-12 max-w-xl">
                    <h2 className="text-6xl font-semibold text-gray-900 mb-4 leading-tight">
                        Fitbit Sense 2
                    </h2>
                    
                    <p className="text-gray-700 mb-8 text-l leading-relaxed">
                        manage Stress and sleep better
                    </p>
                    
                    <button className="bg-blue-900 hover:bg-black text-white px-2 py-2 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Learn more
                    </button>
                </div>
            )
        },
        {
            bg: Fitbit4bg,
            content: (
                <div className="relative z-10 pl-24 pr-8 py-12 max-w-xl">
                    <h2 className="text-6xl font-semibold text-gray-900 mb-4 leading-tight">
                        Fitbit Versa 4
                    </h2>
                    
                    <p className="text-gray-700 mb-8 text-l leading-relaxed">
                        Designed for fitness
                    </p>
                    
                    <button className="bg-blue-900 hover:bg-black text-white px-2 py-2 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Learn more
                    </button>
                </div>
            )
        }
    ];

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="w-full py-12 relative">
            {/* Navigation Arrows */}
            <button 
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 ${
                    currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                }`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button 
                onClick={scrollRight}
                disabled={currentIndex === items.length - 1}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 ${
                    currentIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                }`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Single Active Slide */}
            <div className="w-full max-w-6xl mx-auto">
                <div 
                    className="rounded-3xl bg-cover bg-center bg-no-repeat transition-scale duration-500 ease-in-out"
                    style={{
                        backgroundImage: `url(${items[currentIndex].bg})`,
                        minHeight: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl"></div>
                    
                    {/* Content */}
                    {items[currentIndex].content}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-blue-600 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}   