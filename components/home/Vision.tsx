"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    year: "Phase 1",
    title: "Foundation",
    desc: "Millet-Us launches nationally, proving millet-based sweeteners can match sugar on taste while delivering a premium, healthier alternative.",
  },
  {
    year: "Phase 2",
    title: "Scale",
    desc: "Expand into millet-based starches and proteins, reaching food, beverage and pharma manufacturers.",
  },
  {
    year: "Phase 3",
    title: "Global Standard",
    desc: "Become the world's benchmark for climate-smart sweeteners, grown by a thriving network of farmers.",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#F8F6EF] py-16 sm:py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-100 blur-[150px] sm:h-[380px] sm:w-[380px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100 blur-[160px] sm:h-[400px] sm:w-[400px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2F6F47] sm:text-sm sm:tracking-[0.35em]">
            OUR VISION
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183323] sm:mt-5 sm:text-5xl md:text-6xl">
            A World Where Every Grain
            <br />
            Grows a Better Future
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#C8A95C] sm:mt-6 sm:w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            We envision a future where millets replace refined sugar on
            every table, where the farmers who grow them prosper, and
            where every product we ship leaves the planet a little
            healthier than we found it.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative mt-16 sm:mt-24">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#C8A95C]/30 md:block" />

          <div className="space-y-8 md:space-y-16">
            {roadmap.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col items-center gap-4 md:flex-row md:gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year marker */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1F5E3B] px-2 text-center text-xs font-bold leading-tight text-white shadow-lg sm:h-20 sm:w-20 sm:text-sm">
                  {step.year}
                </div>

                {/* Content card */}
                <div className="w-full rounded-2xl border border-[#E7E2D5] bg-white p-6 text-center shadow-lg sm:rounded-[24px] sm:p-8 md:w-[calc(50%-2.5rem)] md:text-left">
                  <h3 className="text-lg font-bold text-[#183323] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-[28px] bg-[#183323] p-8 text-center text-white sm:mt-24 sm:rounded-[40px] sm:p-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-green-300 sm:text-sm sm:tracking-[0.4em]">
            OUR NORTH STAR
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-snug sm:mt-6 sm:text-4xl">
            To become the world&apos;s most trusted millet-innovation
            brand — proving that healthier food and a healthier planet
            grow from the same soil.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
