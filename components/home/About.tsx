"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PillarCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const PILLARS: PillarCard[] = [
  {
    tag: "CONSUMER HEALTH",
    title: "Healthier Lives",
    description:
      "Developing millet-powered food innovations that help consumers choose healthier alternatives without compromising taste.",
    image: "/images/about/healthier-lives.jpg",
  },
  {
    tag: "FARMER PROSPERITY",
    title: "Empowering Farmers",
    description:
      "Working closely with millet farmers to create sustainable value chains and improve rural livelihoods.",
    image: "/images/about/empowering-farmers.jpg",
  },
  {
    tag: "PLANET RESILIENCE",
    title: "Sustainable Future",
    description:
      "Promoting climate-smart agriculture through millet innovation while protecting natural resources.",
    image: "/images/about/sustainable-future.jpg",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FAF9F6] py-20 text-[#142018] sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#96783E]">
            Why Refarmsoil
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#071A11] sm:text-4xl md:text-5xl">
            Building a Better Future <br className="hidden sm:inline" />
            Through Millet Innovation
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#6D776F] sm:text-sm">
            Refarmsoil is creating a climate-smart ecosystem where healthier food,
            prosperous farmers, and environmental sustainability grow together.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(20,32,24,0.08)] bg-white shadow-sm transition-all duration-300 hover:border-[#D5B66B]/40 hover:shadow-md"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-48 w-full overflow-hidden bg-[#FAF9F6] sm:h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <span className="text-[9px] font-bold tracking-widest text-[#96783E] uppercase">
                    {card.tag}
                  </span>

                  <h3 className="mt-2 text-lg font-serif font-medium text-[#071A11]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#6D776F]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl bg-[#071A11] p-8 sm:p-12 text-white shadow-md"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D5B66B]">
                Our Mission
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl">
                From Soil to Health, <br />
                Powered by Millets.
              </h3>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[#E7E2D5] sm:text-sm">
              We believe food should nourish people, strengthen farming
              communities, and protect the planet. Every innovation at Refarmsoil
              is engineered around that purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}