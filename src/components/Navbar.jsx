"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart } from "lucide-react"

const menuItems = [
    { href: "/", label: "Home" },
    { href: "/FutureProducts/1", label: "Products" },
    { href: "/About", label: "About" },
    { href: "/contactus", label: "Contact" }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <nav className="fixed w-full z-50 navbar-light">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold" style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="/images/logo.png"
                        alt="Gleam & Glow Logo"
                        style={{ height: "70px", width: "70px" }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/cart" className="p-2 rounded-full hover:bg-muted transition-colors">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl md:hidden flex flex-col z-50"
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsOpen(false)}>
                                <X size={30} />
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col items-center space-y-6 py-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="p-4 border-t">
                            <div className="grid grid-cols-4 gap-4">
                                <Link
                                    href="/cart"
                                    className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
