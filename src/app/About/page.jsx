"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Award, Heart, Shield, Users, Sparkles } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Beauty Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
        rating: 5,
        comment:
            "Gleam & Glow's products have transformed my skincare routine. The Radiant Glow Serum is absolutely amazing!",
    },
    {
        id: 2,
        name: "Emily Chen",
        role: "Makeup Artist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
        rating: 4,
        comment:
            "As a professional makeup artist, I highly recommend these products. They create the perfect base for any look.",
    },
    {
        id: 3,
        name: "Maria Garcia",
        role: "Skincare Specialist",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=300&q=80",
        rating: 5,
        comment: "The attention to detail in formulation and the results speak for themselves. Simply outstanding!",
    },
]

const values = [
    {
        icon: Shield,
        title: "Quality Assured",
        description: "All products undergo rigorous testing and quality control",
    },
    {
        icon: Heart,
        title: "Cruelty Free",
        description: "We never test on animals and use ethical practices",
    },
    {
        icon: Sparkles,
        title: "Natural Ingredients",
        description: "Premium natural ingredients for the best results",
    },
    {
        icon: Users,
        title: "Customer First",
        description: "Dedicated to providing exceptional customer service",
    },
]

const teamMembers = [
    {
        name: "Dr. Emma Wilson",
        role: "Chief Formulator",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Michael Chang",
        role: "Skincare Expert",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Dr. Sofia Rodriguez",
        role: "Research Director",
        image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80",
    },
]

export default function AboutPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('/images/hero/4rth.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90"
                    >
                        Founded in 2024, Gleam & Glows was born from a passion for creating natural, effective skincare solutions
                        that enhance your natural beauty. Our journey began in a small laboratory and has grown into a beloved brand
                        trusted by thousands.
                    </motion.p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <value.icon className="w-12 h-12 text-amber-500 mx-auto mb-4 text" />
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">Customer Love</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-yellow-500"
                                    />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700">{testimonial.comment}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    )
}
