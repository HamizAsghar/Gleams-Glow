import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState("idle");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setSubscribeStatus("loading");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubscribeStatus("success");
        setEmail("");
    };

    const footerLinks = {
        products: [
            { label: "Serums", href: "/FutureProducts/1" },
        ],
        company: [
            { label: "About Us", href: "/About" },
        ],
        support: [
            { label: "Contact Us", href: "/contactus" },
        ],
    };

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/gleamandglowsofficial/?igsh=MWNwdjh6N2o5Ymo3eg%3D%3D#", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61565202278086&rdid=DIKyH8OiWKJzp7BV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oxtXNFCU%2F#", label: "Facebook" },
    ];

    return (
        <footer className="bg-gray-50 pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center">
                                <span className="text-3xl font-bold">
                                    <span className="text-amber-500">G</span>leam &<span className="text-amber-500">G</span>low
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-600 mb-6">
                            Discover the beauty of natural skincare with our premium collection of products designed to enhance your
                            natural glow.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <social.icon className="w-5 h-5 text-amber-500" />
                                    <span className="sr-only">{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-600 hover:text-amber-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-600 hover:text-amber-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-600 hover:text-amber-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pr-12 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 h-full px-3 text-amber-500 disabled:opacity-50 hover:text-amber-600"
                                    disabled={subscribeStatus === "loading"}
                                >
                                    {subscribeStatus === "loading" ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-500" />
                                    ) : (
                                        <ArrowRight className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {subscribeStatus === "success" && <p className="text-green-600 text-sm">Thank you for subscribing!</p>}
                        </form>
                    </div>
                </div>
                {/* Copyright */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Gleam & Glow. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-sm text-gray-600 hover:text-amber-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-600 hover:text-amber-500 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
