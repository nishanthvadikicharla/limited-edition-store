"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
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
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex min-h-[72px] w-full items-center gap-4 sm:min-h-[80px] lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 cursor-pointer items-center gap-2 sm:gap-3"
            >
              <Image
                src="/images/refarmsoil.png"
                alt="Refarmsoil"
                width={180}
                height={180}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              />

              <div className="hidden sm:block">
                <h2 className="text-xl font-bold text-[#214A35] sm:text-2xl">
                  Refarmsoil
                </h2>

                <p className="text-[10px] uppercase tracking-[2px] text-gray-500 sm:text-xs">
                  Climate Smart Food
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-7 2xl:gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative shrink-0 cursor-pointer whitespace-nowrap font-medium text-gray-700 transition hover:text-[#214A35]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Buy Now */}
            <div className="hidden shrink-0 min-w-max items-center justify-end lg:flex">
              <Link
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 min-w-[110px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#214A35] px-7 font-semibold text-white transition hover:bg-[#183727]"
              >
                <span className="whitespace-nowrap">Buy Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="ml-auto shrink-0 cursor-pointer lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#F8F5EC]"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-3xl font-semibold text-[#214A35]"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Buy Now */}
            <Link
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-auto shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#214A35] px-8 py-4 font-semibold text-white"
            >
              <span className="whitespace-nowrap">Buy Now</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}