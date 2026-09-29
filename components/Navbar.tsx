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
  { name: "About", href: "#about" },
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
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Responsive container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="min-h-[72px] sm:min-h-[80px] lg:h-24 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0 cursor-pointer"
            >
              <Image
                src="/images/refarmsoil.png"
                alt="Refarmsoil"
                width={180}
                height={180}
                priority
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] object-contain"
              />

              <div className="hidden xs:block">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#214A35] leading-tight">
                  Refarmsoil
                </h2>

                <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 tracking-[1.5px] sm:tracking-[2px] uppercase whitespace-nowrap">
                  Climate Smart Food
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-sm xl:text-base text-gray-700 hover:text-[#214A35] transition cursor-pointer whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right - Buy Now */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#214A35] hover:bg-[#183727] text-white px-5 xl:px-7 py-2.5 xl:py-3 rounded-full transition font-semibold text-sm xl:text-base cursor-pointer whitespace-nowrap"
              >
                Buy Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center p-2 -mr-2 rounded-md cursor-pointer text-[#214A35] hover:bg-black/5 transition"
            >
              {menuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F8F5EC] z-40 flex flex-col justify-center items-center px-6"
          >
            <div className="w-full max-w-sm flex flex-col items-center gap-7 sm:gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-semibold text-[#214A35] cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 sm:mt-4 bg-[#214A35] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer text-base sm:text-lg font-semibold"
              >
                Buy Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}