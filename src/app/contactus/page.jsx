"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["Faisalabad"],
            color: "bg-rose-50",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+92 3059111184"],
            color: "bg-blue-50",
            action: "tel:+923059111184", // Trigger phone call
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["gleamandglowsofficial123@gmail.com"],
            color: "bg-green-50",
            action: "mailto:gleamandglowsofficial123@gmail.com", // Trigger email
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["24/7"],
            color: "bg-purple-50",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('/images/hero/P_1.JPG')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90"
                    >
                        We'd love to hear from you
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${info.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                            >
                                <info.icon className="w-10 h-10 text-amber-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                                {info.details.map((detail, i) => (
                                    <a
                                        key={i}
                                        href={info.action}
                                        className="text-gray-600 block truncate w-full"
                                        style={{ wordBreak: 'break-word' }} // Ensure long text wraps inside container
                                    >
                                        {detail}
                                    </a>
                                ))}
                            </motion.div>

                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                {submitStatus === "success" && <p className="text-green-600 text-center">Message sent successfully!</p>}
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            
        </div>
    );
}
