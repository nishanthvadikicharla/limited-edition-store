"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Sprout, UtensilsCrossed, ArrowUpRight } from "lucide-react";

const problems = [
  {
    icon: Sprout,
    num: "01",
    title: "Soil Degradation",
    desc: "52% of agricultural soils worldwide are severely degraded due to synthetic chemicals and monoculture depletion.",
    stat: "52%",
    statLabel: "Global Soil Depleted",
  },
  {
    icon: Droplets,
    num: "02",
    title: "Water Wastage",
    desc: "Traditional sugarcane cultivation consumes roughly 28,000 liters of water per kilogram of processed sugar.",
    stat: "28k L",
    statLabel: "Water / kg Sugar",
  },
  {
    icon: UtensilsCrossed,
    num: "03",
    title: "Monoculture Risk",
    desc: "Over-reliance on wheat, rice, and sugarcane homogenizes ecosystems and threatens global food security.",
    stat: "4 Crops",
    statLabel: "Dominate 60% Calories",
  },
];

const solutions = [
  {
    image: "/images/solution/sugar-alternative.jpeg",
    tag: "SUGAR ALTERNATIVE",
    title: "Millet-Based Sweeteners",
    desc: "10x less water usage with zero synthetic chemical processing. Low-GI and diabetic-friendly.",
  },
  {
    image: "/images/solution/starches-protein.jpeg",
    tag: "INGREDIENT TECH",
    title: "Starches & Proteins",
    desc: "High-value millet extracts tailored for food, nutraceutical, and pharmaceutical industrial uses.",
  },
  {
    image: "/images/solution/farmer-centric.jpeg",
    tag: "SUSTAINABILITY",
    title: "Farmer-Centric Model",
    desc: "Empowering smallholder farmers with drought-resilient crops and direct market access.",
  },
  {
    image: "/images/solution/health-nutrition.jpeg",
    tag: "NUTRITION SCIENCE",
    title: "Antioxidant-Rich Grains",
    desc: "Naturally high-fiber supergrains packed with essential micronutrients for future food systems.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-[#071A11] py-24 text-white md:py-36">
      {/* Background Ambient Lighting Effects */}
      <div className="aria-hidden:true pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#123A2C]/50 blur-[180px]" />
      <div className="aria-hidden:true pointer-events-none absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-[#A06D3B]/15 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECTION 1: THE PROBLEM */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Sticky Editorial Header */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between lg:col-span-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A06D3B]/30 bg-[#A06D3B]/10 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-[#C8A95C] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A95C]" />
                Systemic Vulnerability
              </div>

              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-stone-100 sm:text-5xl">
                The crisis inside <br />
                <em className="font-normal italic text-[#C8A95C]">modern agriculture.</em>
              </h2>

              <p className="mt-6 text-sm leading-relaxed font-sans text-stone-400">
                Conventional food supply chains rely heavily on resource-intensive crops that deplete topsoil and drain global freshwater reserves.
              </p>
            </div>

            <div className="hidden border-l border-white/10 pl-6 pt-12 lg:block">
              <span className="block font-serif text-3xl font-light text-stone-200">52%</span>
              <span className="text-xs uppercase tracking-wider text-stone-500">Global agricultural land degraded</span>
            </div>
          </motion.div>

          {/* Interactive Problem Cards */}
          <div className="space-y-6 lg:col-span-8">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent p-8 backdrop-blur-md transition-all duration-500 hover:border-[#C8A95C]/40 hover:bg-white/[0.08]"
                >
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-6">
                      <span className="font-serif text-sm font-semibold tracking-widest text-[#C8A95C]">
                        {item.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-emerald-400" />
                          <h3 className="text-xl font-bold text-stone-100">{item.title}</h3>
                        </div>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col border-t border-white/5 pt-4 sm:items-end sm:border-t-0 sm:pt-0">
                      <span className="font-serif text-2xl font-light text-emerald-300 sm:text-3xl">
                        {item.stat}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ELEGANT DIVIDER */}
        <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent sm:my-32" />

        {/* SECTION 2: THE SOLUTION */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A95C]">
                OUR PARADIGM SHIFT
              </span>
              <h2 className="mt-3 font-serif text-4xl font-light leading-tight sm:text-6xl">
                Re-Engineering Food <br />
                <em className="font-normal italic text-emerald-300">Through Millet Science.</em>
              </h2>
            </div>
            
            <p className="max-w-md text-sm text-stone-400">
              Transforming climate-resilient supergrains into high-performing commercial ingredients for global industries.
            </p>
          </motion.div>

          {/* Luxury Editorial Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0A2018] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#C8A95C]/50"
              >
                {/* Image Showcase with Color Grading Mask */}
                <div className="relative h-52 w-full overflow-hidden bg-[#05140E]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 mix-blend-luminosity contrast-[115%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                  />
                  {/* Luxury Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2018] via-[#0A2018]/40 to-transparent" />
                  
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[9px] font-bold tracking-widest text-[#C8A95C] uppercase backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-stone-100 transition-colors group-hover:text-[#C8A95C]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-400">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] font-bold uppercase tracking-wider text-emerald-400 transition-colors group-hover:text-[#C8A95C]">
                    Explore Tech <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}