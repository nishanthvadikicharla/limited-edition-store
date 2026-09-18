"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Healthier Lives",
    description:
      "Developing millet-powered food innovations that help consumers choose healthier alternatives without compromising taste.",
    image: "/images/about/healthier-lives.jpg",
  },
  {
    title: "Empowering Farmers",
    description:
      "Working closely with millet farmers to create sustainable value chains and improve rural livelihoods.",
    image: "/images/about/empowering-farmers.jpg",
  },
  {
    title: "Sustainable Future",
    description:
      "Promoting climate-smart agriculture through millet innovation while protecting natural resources.",
    image: "/images/about/sustainable-future.jpg",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#F8F5EC] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#2F6F47]/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8A95C]/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-[#2F6F47] font-semibold">
            WHY REFARMSOIL
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#1F3325]">
            Building a Better Future
            <br />
            Through Millet Innovation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Refarmsoil is creating a climate-smart ecosystem where
            healthier food, prosperous farmers and environmental
            sustainability grow together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group overflow-hidden rounded-3xl border border-[#E7E2D5] bg-white shadow-xl transition-all"
            >
              {/* Image block */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text panel */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1F3325]">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-[40px] bg-[#1F5E3B] p-14 text-white"
        >
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#CDEB8B]">
                Our Mission
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                From Soil to Health,
                <br />
                Powered by Millets.
              </h3>
            </div>

            <div className="max-w-xl text-lg leading-8 text-white/80">
              We believe food should nourish people, strengthen farming
              communities and protect the planet. Every innovation at
              Refarmsoil is built around that purpose.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
