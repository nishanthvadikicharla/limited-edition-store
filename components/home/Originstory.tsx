"use client";

import { motion } from "framer-motion";
import { Heart, Users2, Globe2 } from "lucide-react";

const losses = [
  {
    icon: Heart,
    title: "People",
    desc: "Losing health to sugar-driven lifestyles — rising obesity, diabetes, and sugar addiction starting younger every year.",
  },
  {
    icon: Users2,
    title: "Farmers",
    desc: "Losing hope to unsustainable crops — low returns from input-heavy sugarcane and rice, year after year.",
  },
  {
    icon: Globe2,
    title: "The Planet",
    desc: "Losing resilience — degraded soils, over-extracted water, and rising agricultural emissions.",
  },
];

export default function OriginStory() {
  return (
    <section
      id="origin"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28"
    >
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2F6F47]/10 blur-[150px] sm:h-96 sm:w-96" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#C8A95C]/15 blur-[160px] sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2F6F47] sm:text-sm sm:tracking-[0.35em]">
            OUR ORIGIN STORY
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183323] sm:mt-5 sm:text-5xl md:text-6xl">
            It Started With
            <br />
            One Conversation
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#C8A95C] sm:mt-6 sm:w-28" />
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl sm:mt-14"
        >
          <p className="text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9">
            It began with a simple but painful conversation — a mother
            worried about her 7-year-old child&apos;s sugar addiction,
            rising obesity, and health risks. At the same time, farmers
            around us were struggling with low returns from input-heavy
            crops like rice and sugarcane, while soils were degrading
            under the burden of fertilisers, pesticides, and
            water-intensive agriculture.
          </p>

          <p className="mt-6 text-base font-semibold uppercase tracking-widest text-[#2F6F47] sm:mt-8 sm:text-lg">
            We saw a bigger pattern.
          </p>
        </motion.div>

        {/* Three losses */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-3 sm:gap-8">
          {losses.map((loss, index) => {
            const Icon = loss.icon;
            return (
              <motion.div
                key={loss.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[#E7E2D5] bg-[#F8F6EF] p-6 text-center sm:rounded-[24px] sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B5533C]/10 sm:h-14 sm:w-14">
                  <Icon className="text-[#B5533C]" size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#183323] sm:text-xl">
                  {loss.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {loss.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Resolution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-[24px] bg-[#183323] p-8 text-center text-white sm:mt-16 sm:rounded-[40px] sm:p-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#CDEB8B] sm:text-sm sm:tracking-[0.4em]">
            THAT&apos;S WHEN THE VISION WAS BORN
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-relaxed sm:mt-6 sm:text-2xl md:text-3xl">
            Not just an alternative to sugar — a millet-powered
            solution that addresses people, farmers, and the planet,
            together.
          </h3>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 text-left text-sm leading-6 text-white/80 sm:mt-10 sm:grid-cols-3 sm:gap-6 sm:text-base sm:leading-7">
            <p>
              <span className="font-semibold text-[#C8A95C]">
                For people:
              </span>{" "}
              healthier, low-GI millet-based sugars, rich in antioxidants,
              calcium, and iron.
            </p>
            <p>
              <span className="font-semibold text-[#C8A95C]">
                For farmers:
              </span>{" "}
              low-input, climate-resilient crops with multiplied ROI and
              fair profits.
            </p>
            <p>
              <span className="font-semibold text-[#C8A95C]">
                For the planet:
              </span>{" "}
              less water, less fertiliser, fewer emissions, and
              regenerated soils.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
