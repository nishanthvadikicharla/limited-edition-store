"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Technology", href: "#technology" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Contact", href: "#contact" },
];

const AMAZON_LINK =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/refarmsoil.png"
                alt="Refarmsoil"
                width={56}
                height={56}
                priority
                className="w-12 h-12 object-contain"
              />
              <div className="hidden xs:block">
                <h2 className="text-xl font-bold text-[#214A35] leading-tight tracking-tight">
                  Refarmsoil
                </h2>
                <p className="text-[10px] text-gray-500 tracking-[2px] uppercase font-medium">
                  Climate Smart Food
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-sm text-gray-700 hover:text-[#214A35] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Buy Now Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#214A35] hover:bg-[#183727] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center whitespace-nowrap min-w-[110px]"
              >
                Buy Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#214A35] hover:bg-black/5 transition"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-[#214A35] hover:opacity-80 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full max-w-xs mx-auto bg-[#214A35] text-white py-3.5 rounded-full text-center font-semibold text-base shadow-md"
            >
              Buy Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}