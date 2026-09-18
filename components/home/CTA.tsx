"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, Wheat, Mail, MessageCircle } from "lucide-react";

// TODO: replace with your actual WhatsApp business number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "918309607310";
const WHATSAPP_MESSAGE = "Hi! I'm interested in Millet-Us and would like to know more.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const AMAZON_LINK =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

// TODO: replace with your real business email
const CONTACT_EMAIL = "business@refarmsoil.com";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8F6EF] py-32">
      {/* Background Blobs */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-green-100 blur-[180px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-100 blur-[170px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 lg:flex-row">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold tracking-widest text-[#1F5E3B]">
            READY TO EXPERIENCE
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#183323] lg:text-6xl">
            The Future
            <br />
            of Sweetness.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Choose a healthier way to sweeten your everyday life without
            compromising on taste.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <Leaf className="text-green-700" />
              <span className="text-lg">Powered by Millets</span>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="text-green-700" />
              <span className="text-lg">Proudly Made in Bharat 🇮🇳</span>
            </div>

            <div className="flex items-center gap-3">
              <Wheat className="text-green-700" />
              <span className="text-lg">Climate Smart Food Innovation</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-[#1F5E3B] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-[#153F2A]"
            >
              Buy Millet-Us
              <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-3 rounded-full border border-[#1F5E3B] px-8 py-4 font-semibold text-[#1F5E3B] transition-all hover:bg-[#1F5E3B] hover:text-white"
            >
              <Mail size={18} />
              Contact Us
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-[#1EBE57]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-green-200 blur-[120px]" />

          {/* Floating Bottle */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            <Image
              src="/images/hero/millet-us-bottle.png"
              alt="Millet-Us Sweetener"
              width={350}
              height={660}
              className="drop-shadow-[0_45px_60px_rgba(0,0,0,.30)]"
            />
          </motion.div>

          {/* Floating Tags */}
          <div className="absolute left-0 top-60 rounded-full bg-white px-5 py-3 shadow-xl">
            🌿 Low GI
          </div>

          <div className="absolute right-0 top-60 rounded-full bg-white px-5 py-3 shadow-xl">
            🌾 Millet Powered
          </div>

          <div className="absolute left-0 bottom-60 rounded-full bg-white px-5 py-3 shadow-xl">
            ❤️ Better Health
          </div>

          <div className="absolute bottom-60 right-0 rounded-full bg-white px-5 py-3 shadow-xl">
            🌍 Sustainable
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <p className="text-2xl text-[#C8A95C]">★★★★★</p>

        <p className="mt-3 text-gray-600">
          Innovating healthier sweetness through millet-powered food technology.
        </p>
      </motion.div>
    </section>
  );
}
