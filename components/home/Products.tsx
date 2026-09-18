"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const features = [
  "World's First Millet Sweetener",
  "Low Glycemic Index (Diabetic-Friendly)",
  "Zero Refined Sugar or Chemicals",
  "Millet Powered Innovation",
  "Sustainably Developed & Locally Sourced",
];

export default function Product() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#071A11] py-24 text-white md:py-36"
    >
      {/* Dark Ambient Glows */}
      <div className="aria-hidden:true pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#123A2C]/60 blur-[180px]" />
      <div className="aria-hidden:true pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#A06D3B]/20 blur-[200px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:px-8">
        
        {/* LEFT: EDITORIAL COPY */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A06D3B]/30 bg-[#A06D3B]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-[#C8A95C] uppercase">
            <Sparkles className="h-3.5 w-3.5 text-[#C8A95C]" />
            Flagship Innovation
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-stone-100 sm:text-6xl">
            Millet-Us <br />
            <em className="font-normal italic text-[#C8A95C]">Sweetener.</em>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-400 font-sans">
            Millet-Us is the world's first millet-based sweetener developed to deliver 
            uncompromised taste while pioneering climate-smart agriculture and regenerative farming models.
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C8A95C]/40 bg-[#C8A95C]/10 text-[#C8A95C]">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm font-medium text-stone-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#C8A95C] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071A11] transition-all hover:bg-[#d6b76b] hover:shadow-[0_0_25px_rgba(200,169,92,0.3)]">
              Buy Now
            </button>

            <button className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-200 transition-all hover:border-[#C8A95C]/50 hover:bg-white/10">
              Learn More
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT: LUXURY BOTTLE DISPLAY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative"
          >
            {/* Ambient Gold Glow */}
            <div className="absolute inset-0 rounded-full bg-[#C8A95C]/15 blur-[100px]" />

            {/* Dark Glass Ring */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0E2E22]/40 backdrop-blur-2xl shadow-2xl" />

            {/* Bottle Image */}
            <Image
              src="/images/hero/millet-us-bottle.png"
              alt="Millet-Us Sweetener Bottle"
              width={340}
              height={580}
              priority
              className="relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}