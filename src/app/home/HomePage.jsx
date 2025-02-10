"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaShoppingBag } from 'react-icons/fa'

const slides = [
    {
        id: "serums",
        src: "/images/hero/P_1.JPG",
        title: "Radiant Skin Awaits",
        subtitle: "Discover our premium collection of serums for your perfect glow.",
        cta: "Shop Serums",
    },
    {
        id: "luxury-skincare",
        src: "/images/hero/2nd.jpg",
        title: "Luxury Skincare",
        subtitle: "Experience the magic of natural ingredients combined with science.",
        cta: "Explore Collection",
    },
    {
        id: "beauty-essentials",
        src: "/images/hero/P_3.JPG",
        title: "Beauty Essentials",
        subtitle: "Your daily routine for timeless beauty and confidence.",
        cta: "View Products",
    },
    {
        id: "glow-naturally",
        src: "/images/hero/4rth.jpg",
        title: "Glow Naturally",
        subtitle: "Clean beauty products that enhance your natural radiance.",
        cta: "Shop Now",
    },
]

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    useEffect(() => {
        const interval = setInterval(goToNext, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="relative min-h-screen w-full pt-16">
            {/* Carousel */}
            <div className="relative h-[calc(100vh-4rem)] w-full">
                {slides.map((slide, index) => (
                    <AnimatePresence key={slide.id}>
                        {index === currentIndex && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${slide.src})` }}
                                >
                                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                                </div>
                                <div className="relative h-full flex flex-col items-center justify-center text-center z-20 px-4">
                                    <motion.h1
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-md md:max-w-lg lg:max-w-2xl"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.8 }}
                                    >
                                        <Link
                                            href={`/FutureProducts/${slides[currentIndex].id}`} // Corrected Link
                                            className="bg-white text-black px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
                                        >
                                            <FaShoppingBag className="text-lg md:text-xl" />
                                            {slide.cta}
                                        </Link>

                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
