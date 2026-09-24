"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918309607310";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Vision", href: "#ecosystem" },
  { label: "Technology", href: "#technology" },
  { label: "Awards", href: "#awards" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];




export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#183323] pb-10 pt-24 text-[#F8F6EF]">
      {/* Background glow */}
      <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-green-900/40 blur-[160px]" />
      <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#C8A95C]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/images/brand/refarmsoil-logo.png"
                alt="RefarmSoil Logo"
                width={50}
                height={50}
                className="h-18 w-18 object-contain"
             />
              <span className="text-2xl font-bold tracking-wide">
                Refarm<span className="text-[#C8A95C]">Soil</span>
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
              Building a millet-powered global food ecosystem — healthier
              for people, fairer for farmers, lighter on the planet.
            </p>

            <div className="mt-6 flex gap-3">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-[#183323]"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A95C]">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#C8A95C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A95C]">
              Millet-Us
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>World&apos;s First Millet-Based Sweetener</li>
              <li>Low Glycemic Index</li>
              <li>No Artificial Additives</li>
              <li>
                <a
                  href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#C8A95C] transition-colors hover:text-white"
                >
                  Buy on Amazon →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A95C]">
              Get In Touch
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#C8A95C]" />
                ALEAP Industrial Area, Gajularamaram, Hyderabad, Telangana 500090
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#C8A95C]" />
                <a
                  href="mailto:business@refarmsoil.com"
                  className="transition-colors hover:text-[#C8A95C]"
                >
                  business@refarmsoil.com
                </a>
              </li>
              
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} ReFarmSoil. All Rights Reserved.</p>
          <p>Made with 🌾 for a healthier, sustainable future.</p>
        </div>
      </div>
    </footer>
  );
}
