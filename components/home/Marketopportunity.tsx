"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, FlaskConical, Pill, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Food & Beverages",
    desc: "Healthier sugar alternatives for everyday products.",
  },
  {
    icon: FlaskConical,
    title: "Nutraceuticals",
    desc: "Functional foods & supplements powered by millet nutrition.",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    desc: "Medicinal formulations & diabetic-friendly diet plans.",
  },
];

export default function MarketOpportunity() {
  return (
    <section
      id="market"
      className="relative overflow-hidden bg-[#0E2E22] py-16 sm:py-20 md:py-28"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#2F6F47]/25 blur-[150px] sm:h-96 sm:w-96" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#C8A95C]/10 blur-[180px] sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CDEB8B] sm:text-sm sm:tracking-[0.4em]">
            MARKET OPPORTUNITY
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:mt-5 sm:text-5xl md:text-6xl">
            Unlocking Growth in a
            <br />
            Global Market
          </h2>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center rounded-[24px] border border-[#2F6F47]/20 bg-[#123A2C] p-8 text-center sm:mt-14 sm:rounded-[32px] sm:p-14"
        >
          <TrendingUp className="text-[#C8A95C]" size={32} />
          <h3 className="mt-4 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            $100B+
          </h3>
          <p className="mt-3 text-base text-[#CDEB8B] sm:text-lg">
            Global sugar market, with expansion potential across
            multiple industries
          </p>
        </motion.div>

        {/* Industries */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6F47]/30 sm:h-14 sm:w-14">
                  <Icon className="text-[#CDEB8B]" size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white sm:mt-6 sm:text-xl">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60 sm:mt-14 sm:text-base"
        >
          Global growth projections highlight sustained demand for
          sustainable, climate-smart food solutions.
        </motion.p>
      </div>
    </section>
  );
}
