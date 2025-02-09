"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Radiant Glow Serum",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
        description: "A premium serum for glowing skin.",
    },
    {
        id: 2,
        name: "Luxury Night Cream",
        image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=500&q=80",
        description: "Revitalize your skin overnight.",
    },
    {
        id: 3,
        name: "Natural Face Oil",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
        description: "100% natural face oil for all skin types.",
    },
    {
        id: 4,
        name: "Hydrating Toner",
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=500&q=80",
        description: "Keeps your skin hydrated and fresh.",
    },
    {
        id: 5,
        name: "Anti-Aging Cream",
        image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc21ldGljfGVufDB8fDB8fHww",
        description: "Reduce wrinkles and fine lines.",
    },
    {
        id: 6,
        name: "Brightening Mask",
        image: "https://st4.depositphotos.com/13349494/27343/i/450/depositphotos_273436504-stock-photo-cream-tube-cosmetic-glass-bottles.jpg",
        description: "Brightens and evens skin tone.",
    },
];

export default function FutureProducts() {
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
                    Future Products
                </h1>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
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
                                    href={`/future-products/${product.id}`} // Link to product details page
                                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    View More <FaArrowRight />
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
                    ))}
                </div>
            </div>
        </div>
    );
}
