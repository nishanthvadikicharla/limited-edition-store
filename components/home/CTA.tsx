"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles, Shield, Leaf } from "lucide-react";

interface ProductFeature {
  title: string;
  description: string;
}

const FEATURES: ProductFeature[] = [
  {
    title: "Low Glycemic Index",
    description: "Designed for balanced wellness and daily sugar-smart lifestyles.",
  },
  {
    title: "100% Millet-Derived",
    description: "Extracted naturally from sustainably farmed, climate-resilient grains.",
  },
  {
    title: "Zero Refined Sugar",
    description: "Clean taste profile free from artificial additives or synthetic sweeteners.",
  },
  {
    title: "Seamless 1:1 Use",
    description: "Blends and sweetens smoothly across beverages, cooking, and baking.",
  },
];

const AMAZON_URL =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

export default function Product() {
  return (
    <section
      id="products"
      className="bg-[#FAF9F6] py-20 text-[#142018] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT: BOTTLE SHOWCASE (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 flex flex-col items-center"
          >
            {/* Soft Frame Card */}
            <div className="relative flex w-full items-center justify-center rounded-2xl border border-[rgba(20,32,24,0.08)] bg-white p-8 shadow-sm sm:p-12">
              <div className="absolute h-48 w-48 rounded-full bg-[#F5EFEB] blur-2xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/images/hero/millet-us-bottle.png"
                  alt="Millet-Us Premium Sweetener"
                  width={280}
                  height={460}
                  priority
                  className="h-auto w-44 object-contain drop-shadow-md sm:w-56"
                />
              </motion.div>
            </div>

            {/* Guarantees */}
            <div className="mt-4 flex items-center justify-center gap-6 text-[11px] text-[#6D776F]">
              <div className="flex items-center gap-1.5">
                <Leaf className="h-3.5 w-3.5 text-[#96783E]" />
                <span>100% Plant-Based</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-[#96783E]" />
                <span>Quality Certified</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL COPY (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(150,120,62,0.2)] bg-[#F5EFEB] px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-[#96783E] uppercase">
              <Sparkles className="h-3 w-3 text-[#96783E]" />
              Flagship Product
            </div>

            {/* Title */}
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[#071A11] sm:text-4xl md:text-5xl">
              Millet-Us <br />
              <span className="italic text-[#96783E]">Sweetener.</span>
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-[#6D776F] sm:text-sm">
              The world&apos;s first millet-based sweetener designed to deliver clean, balanced sweetness while supporting climate-smart farming and sustainable agriculture.
            </p>

            {/* Feature Set */}
            <div className="mt-6 w-full space-y-3.5 border-y border-[rgba(20,32,24,0.08)] py-5">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#143B27] text-white">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#142018] sm:text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-[#6D776F]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amazon Redirect Link */}
            <div className="mt-6">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#071A11] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#143B27]"
              >
                <span>Buy on Amazon</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}