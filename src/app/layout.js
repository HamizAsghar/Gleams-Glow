"use client"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Navbar />
              <main>{children}</main>
              <Footer/>
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}

