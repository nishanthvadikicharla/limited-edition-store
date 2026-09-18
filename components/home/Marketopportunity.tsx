"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, FlaskConical, Pill, TrendingUp, LucideIcon } from "lucide-react";

interface Industry {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

const INDUSTRIES: Industry[] = [
  {
    icon: UtensilsCrossed,
    tag: "MASS CONSUMPTION",
    title: "Food & Beverages",
    desc: "Healthier sugar alternatives for everyday consumer and commercial food products.",
  },
  {
    icon: FlaskConical,
    tag: "WELLNESS & DIET",
    title: "Nutraceuticals",
    desc: "Functional foods and active supplements powered by millet-derived nutrition.",
  },
  {
    icon: Pill,
    tag: "CLINICAL NUTRITION",
    title: "Pharmaceuticals",
    desc: "Medicinal formulations and low-glycemic solutions tailored for metabolic care.",
  },
];

export default function MarketOpportunity() {
  return (
    <section id="market" className="bg-[#071A11] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D5B66B]">
            Market Opportunity
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            Unlocking Growth in a <br className="hidden sm:inline" />
            Global Market
          </h2>
        </motion.div>

        {/* Hero Metric Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0E271B] p-8 text-center shadow-lg sm:p-12"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#143B27] text-[#D5B66B]">
            <TrendingUp className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-[#D5B66B] sm:text-6xl">
            $100B+
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-[#E7E2D5] sm:text-sm">
            Global sugar market size, creating high-value expansion opportunities
            across multiple industrial verticals.
          </p>
        </motion.div>

        {/* Industry Verticals Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0B2117] p-6 shadow-sm transition-all duration-300 hover:border-[#D5B66B]/40 hover:bg-[#0E271B]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#143B27] text-[#D5B66B] transition-colors group-hover:bg-[#96783E] group-hover:text-[#071A11]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-[#96783E] uppercase">
                      {industry.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-serif font-medium text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#A2B0A6]">
                    {industry.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer Projections Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl text-center text-xs leading-relaxed text-[#809185]"
        >
          Global market forecasts indicate sustained structural demand for climate-resilient, low-glycemic, and sustainable ingredients.
        </motion.p>
      </div>
    </section>
  );
}