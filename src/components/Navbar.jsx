"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, ShoppingCart, User, Search, Sun, Moon } from "lucide-react"

const menuItems = [
    { href: "/", label: "Home" },
    { href: "/FutureProducts/1", label: "Products" },
    { href: "/About", label: "About" },
    { href: "/contactus", label: "Contact" }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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
        <nav
            className={`fixed w-full z-50 ${theme === "dark" ? "navbar-dark" : "navbar-light"}`}
            style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)"
            }}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold" style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="/images/logo.png"
                        alt="Gleam & Glow Logo"
                        style={{ height: "70px", width: "70px" }} // Adjust the size as per your need
                    />
                </Link>



                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-primary transition-colors"
                            style={{ color: "var(--foreground)" }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 text-primary" />
                            ) : (
                                <Moon className="h-5 w-5 text-primary" />
                            )}
                        </button>
                    )}
                    {/* <Link href="/search" className="p-2 rounded-full hover:bg-muted transition-colors">
                        <Search className="h-5 w-5 text-primary" />
                    </Link> */}
                    <Link href="/cart" className="p-2 rounded-full hover:bg-muted transition-colors">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                    </Link>
                    {/* <Link href="/account" className="p-2 rounded-full hover:bg-muted transition-colors">
                        <User className="h-5 w-5 text-primary" />
                    </Link> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    style={{ color: "var(--foreground)" }}
                >
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
                        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl md:hidden flex flex-col z-50"
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-900 dark:text-white"
                            >
                                <X size={30} />
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col items-center space-y-6 py-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                            <div className="grid grid-cols-4 gap-4">
                                {mounted && (
                                    <button
                                        onClick={() => {
                                            setTheme(theme === "dark" ? "light" : "dark")
                                            setIsOpen(false)
                                        }}
                                        className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        {theme === "dark" ? (
                                            <Sun className="h-5 w-5 text-gray-900 dark:text-white" />
                                        ) : (
                                            <Moon className="h-5 w-5 text-gray-900 dark:text-white" />
                                        )}
                                    </button>
                                )}
                                <Link
                                    href="/search"
                                    className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Search className="h-5 w-5 text-gray-900 dark:text-white" />
                                </Link>
                                <Link
                                    href="/cart"
                                    className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <ShoppingCart className="h-5 w-5 text-gray-900 dark:text-white" />
                                </Link>
                                <Link
                                    href="/account"
                                    className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User className="h-5 w-5 text-gray-900 dark:text-white" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
