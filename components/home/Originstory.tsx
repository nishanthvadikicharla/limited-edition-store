"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users2, Leaf } from "lucide-react";

const losses = [
  {
    icon: Heart,
    iconBg: "#6b4c10",
    iconColor: "#c8954a",
    title: "People",
    desc: "Losing health to sugar-driven lifestyles — rising obesity, diabetes, and sugar addiction starting younger every year.",
  },
  {
    icon: Users2,
    iconBg: "#2a4a35",
    iconColor: "#7aab8a",
    title: "Farmers",
    desc: "Losing hope to unsustainable crops — low returns from input-heavy sugarcane and rice, year after year.",
  },
  {
    icon: Leaf,
    iconBg: "#1e3d35",
    iconColor: "#5a9e8a",
    title: "The Planet",
    desc: "Losing resilience — degraded soils, over-extracted water, and rising agricultural emissions.",
  },
];

export default function OriginStory() {
  return (
    <section id="origin" className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/origin/origin.jpg"
        alt="Origin background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — left darker, right lighter to match reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C8A95C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A95C]">
              Our Origin Story
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            It Started With
            <br />
            <em className="font-serif font-normal italic text-white">
              One Conversation
            </em>
          </h2>

          {/* Narrative */}
          <p className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            It began with a simple but painful conversation — a mother worried
            about her 7-year-old child&apos;s sugar addiction, rising obesity,
            and health risks. At the same time, farmers around us were
            struggling with low returns from input-heavy crops like rice and
            sugarcane, while soils were degrading under the burden of
            fertilisers, pesticides, and water-intensive agriculture.
          </p>

          {/* We saw a bigger pattern */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-10 bg-[#C8A95C]" />
            <p className="font-serif text-lg italic text-white/85 sm:text-xl">
              We saw a bigger pattern.
            </p>
          </div>
        </motion.div>

        {/* Three Loss Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {losses.map((loss, index) => {
            const Icon = loss.icon;
            return (
              <motion.div
                key={loss.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ backgroundColor: "rgba(30, 35, 20, 0.82)" }}
                className="rounded-2xl border border-white/10 p-7 sm:p-8"
              >
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full mb-5"
                  style={{ backgroundColor: loss.iconBg }}
                >
                  <Icon style={{ color: loss.iconColor }} size={24} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-white mb-3">
                  {loss.title}
                </h3>

                {/* Gold line */}
                <div className="h-0.5 w-8 bg-[#C8A95C] mb-4" />

                {/* Description */}
                <p className="text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  {loss.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}