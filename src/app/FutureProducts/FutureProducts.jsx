"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const product = {
    id: 1,
    name: "Radiant Glow Serum",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
    description: "A premium serum for glowing skin.",
};

export default function FutureProduct() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
                }`}
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Future Product
                </h1>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>

                <div className="flex justify-center">
                    <div
                        key={product.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <div
                            className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${isDarkMode ? "bg-black/50" : "bg-black/30"
                                }`}
                        >
                            <Link
                                href={`/FutureProducts/${product.id}`} // Link to product details page
                                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Shop Now <FaArrowRight />
                            </Link>
                        </div>
                        <div
                            className={`p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"
                                }`}
                        >
                            <h2
                                className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {product.name}
                            </h2>
                            <p
                                className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}
                            >
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
