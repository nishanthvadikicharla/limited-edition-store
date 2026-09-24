"use client";

import { motion } from "framer-motion";
import { Droplets, Sprout, UtensilsCrossed } from "lucide-react";

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

export default function ProblemSolution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden py-24 text-white md:py-36"
      style={{
        backgroundImage: "url('/images/about/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D5B66B]">
            Systemic Vulnerability
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            The Crisis Inside <br className="hidden sm:inline" />
            <em className="font-normal italic text-[#D5B66B]">Modern Agriculture.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#E7E2D5] sm:text-sm">
            Conventional food supply chains rely heavily on resource-intensive crops
            that deplete topsoil and drain global freshwater reserves.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-[#D5B66B]/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-widest text-[#D5B66B]">
                    {item.num}
                  </span>
                  <Icon className="h-5 w-5 text-[#D5B66B]" />
                  <h3 className="text-lg font-serif font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-[#E7E2D5]">
                  {item.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="font-serif text-2xl font-light text-white">
                    {item.stat}
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-[#D5B66B] mt-1">
                    {item.statLabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}