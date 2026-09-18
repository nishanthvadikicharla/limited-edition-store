"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Wheat,
  Leaf,
  ShieldCheck,
  Sprout,
  Globe,
  LucideIcon,
} from "lucide-react";

interface ImpactCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

interface ImpactStat {
  number: string;
  label: string;
  icon: LucideIcon;
}

const CARDS: ImpactCard[] = [
  {
    icon: HeartPulse,
    tag: "WELLNESS",
    title: "Better Health",
    desc: "Low glycemic, millet-powered sweetness designed for healthier daily living.",
  },
  {
    icon: Wheat,
    tag: "PROSPERITY",
    title: "Empowering Farmers",
    desc: "Creating sustainable income opportunities by increasing millet market value.",
  },
  {
    icon: Leaf,
    tag: "PLANET",
    title: "Climate Smart",
    desc: "Supporting resilient agriculture with environmentally responsible, low-water crops.",
  },
];

const STATS: ImpactStat[] = [
  {
    number: "4+",
    label: "UN SDGs Addressed",
    icon: Globe,
  },
  {
    number: "100%",
    label: "Natural Formulation",
    icon: Sprout,
  },
  {
    number: "1st",
    label: "Millet Sweetener Innovation",
    icon: ShieldCheck,
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-[#071A11] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D5B66B]">
            Measurable Impact
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            Creating Impact Beyond Sweetness
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#A2B0A6] sm:text-sm">
            Millet-Us is more than a natural sweetener. It enhances human health,
            empowers rural agricultural communities, and builds a sustainable future.
          </p>
        </motion.div>

        {/* Impact Pillars Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
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
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-serif font-medium text-white">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#A2B0A6]">
                    {card.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="flex flex-col items-center rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0E271B] p-6 text-center"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#143B27] text-[#D5B66B]">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#D5B66B] sm:text-5xl">
                  {stat.number}
                </h3>

                <p className="mt-1 text-xs font-medium tracking-wide text-[#E7E2D5]">
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