"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Wheat,
  Leaf,
  ShieldCheck,
  Sprout,
  Globe,
} from "lucide-react";

const cards = [
  {
    icon: HeartPulse,
    title: "Better Health",
    desc: "Low glycemic, millet-powered sweetness designed for healthier living.",
  },
  {
    icon: Wheat,
    title: "Empowering Farmers",
    desc: "Creating sustainable income opportunities by increasing millet value.",
  },
  {
    icon: Leaf,
    title: "Climate Smart",
    desc: "Supporting resilient agriculture with environmentally responsible crops.",
  },
];

const stats = [
  {
    number: "4+",
    label: "SDGs Addressed",
    icon: Globe,
  },
  {
    number: "100%",
    label: "Natural Ingredients",
    icon: Sprout,
  },
  {
    number: "1st",
    label: "Millet Sweetener",
    icon: ShieldCheck,
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#0E2E22] py-16 sm:py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-green-300 font-semibold sm:text-sm sm:tracking-[0.4em]">
            IMPACT
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:mt-6 sm:text-5xl md:text-6xl">
            Creating Impact
            <br />
            Beyond Sweetness
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100/80 sm:mt-8 sm:text-lg sm:leading-8">
            Millet-Us is more than a sweetener. It improves human health,
            empowers farmers, and builds a more sustainable future.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:rounded-[32px] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/20 sm:h-16 sm:w-16">
                  <Icon className="text-green-300" size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white sm:mt-8 sm:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-green-100/70 sm:mt-5 sm:text-base sm:leading-8">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-green-400/10 bg-[#123A2C] p-6 text-center sm:rounded-3xl sm:p-8"
              >
                <Icon className="mx-auto text-green-300" size={28} />

                <h3 className="mt-4 text-4xl font-bold text-white sm:mt-5 sm:text-5xl">
                  {stat.number}
                </h3>

                <p className="mt-2 text-sm text-green-200 sm:mt-3 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
