"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#contact" },
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-24 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/refarmsoil.png"
                alt="Refarmsoil"
                width={180}
                height={180}
              />

              <div>
                <h2 className="text-2xl font-bold text-[#214A35]">
                  Refarmsoil
                </h2>
                <p className="text-xs text-gray-500 tracking-[2px] uppercase">
                  Climate Smart Food
                </p>
              </div>
            </Link>

            {/* Desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-gray-700 hover:text-[#214A35] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#214A35] hover:bg-[#183727] text-white px-7 py-3 rounded-full transition font-semibold"
              >
                Buy Now
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F8F5EC] z-40 flex flex-col justify-center items-center gap-10"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-[#214A35]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#214A35] text-white px-8 py-4 rounded-full"
            >
              Buy Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
