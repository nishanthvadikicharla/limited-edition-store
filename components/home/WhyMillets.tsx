"use client";

import { motion } from "framer-motion";
import { HeartPulse, Wind, Check } from "lucide-react";

const nutritionalBenefits = [
  "Low Glycemic Index — helps manage diabetes",
  "Rich in dietary fiber — improves digestion & gut health",
  "High in antioxidants — protects against cell damage",
  "Excellent source of iron, calcium & micronutrients",
  "Naturally gluten-free — safe for gluten-sensitive people",
  "Boosts immunity & supports heart health",
  "Provides sustainable plant-based protein",
];

const environmentalBenefits = [
  "Requires 10x less water than sugarcane & rice",
  "Grows without pesticides or synthetic fertilizers",
  "Enhances soil fertility & prevents erosion",
  "Thrives in drought & heat conditions (climate-resilient)",
  "Reduces greenhouse gas emissions compared to monocrops",
  "Supports biodiversity & regenerative agriculture",
  "Sustainable choice for future food security",
];

const comparison = [
  { aspect: "Water Use", sugarcane: "~28,000 L/kg sugar", millets: "~2,800 L/kg (10x less)" },
  { aspect: "Chemicals", sugarcane: "High pesticide & fertilizer use", millets: "Grows chemical-free" },
  { aspect: "Nutrients", sugarcane: "Mostly empty calories", millets: "Rich in fiber, iron, calcium, antioxidants" },
  { aspect: "Climate Impact", sugarcane: "Soil depletion & water stress", millets: "Soil regeneration & resilient farming" },
];

export default function WhyMillets() {
  return (
    <section
      id="why-millets"
      className="relative overflow-hidden bg-[#F8F6EF] py-16 sm:py-20 md:py-28"
    >
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-100 blur-[150px] sm:h-96 sm:w-96" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100 blur-[160px] sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2F6F47] sm:text-sm sm:tracking-[0.35em]">
            WHY MILLETS
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183323] sm:mt-5 sm:text-5xl md:text-6xl">
            The Supergrain for Health,
            <br />
            Sustainability & Farmer Resilience
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#C8A95C] sm:mt-6 sm:w-28" />
        </motion.div>

        {/* Benefit columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#E7E2D5] bg-white p-6 shadow-lg sm:rounded-[28px] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 sm:h-12 sm:w-12">
                <HeartPulse className="text-red-500" size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#183323] sm:text-xl">
                Nutritional Benefits
              </h3>
            </div>

            <ul className="mt-5 space-y-3 sm:mt-6">
              {nutritionalBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#2F6F47]"
                  />
                  <span className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[#E7E2D5] bg-white p-6 shadow-lg sm:rounded-[28px] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 sm:h-12 sm:w-12">
                <Wind className="text-[#2F6F47]" size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#183323] sm:text-xl">
                Environmental Benefits
              </h3>
            </div>

            <ul className="mt-5 space-y-3 sm:mt-6">
              {environmentalBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#2F6F47]"
                  />
                  <span className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-[#183323] sm:text-3xl">
            Sugarcane vs Millets
          </h3>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E7E2D5] bg-white shadow-lg sm:rounded-[28px]">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#183323] text-white">
              <div className="p-3 text-xs font-semibold uppercase tracking-wider sm:p-5 sm:text-sm">
                Aspect
              </div>
              <div className="p-3 text-xs font-semibold uppercase tracking-wider sm:p-5 sm:text-sm">
                Sugarcane
              </div>
              <div className="p-3 text-xs font-semibold uppercase tracking-wider text-[#C8A95C] sm:p-5 sm:text-sm">
                Millets
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? "bg-[#F8F6EF]" : "bg-white"
                }`}
              >
                <div className="p-3 text-xs font-bold text-[#183323] sm:p-5 sm:text-sm">
                  {row.aspect}
                </div>
                <div className="p-3 text-xs leading-5 text-gray-600 sm:p-5 sm:text-sm sm:leading-6">
                  {row.sugarcane}
                </div>
                <div className="p-3 text-xs font-medium leading-5 text-[#2F6F47] sm:p-5 sm:text-sm sm:leading-6">
                  {row.millets}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
