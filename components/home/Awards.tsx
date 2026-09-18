"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    title: "UN SDG Champion Award",
    desc: "Recognized for addressing SDG 2, SDG 3, SDG 8 and SDG 13 through sustainable food innovation.",
    image: "/images/awards/sdg.jpg",
  },
  {
    title: "Telangana Best FoodTech Startup",
    desc: "Recognized by the Government of Telangana for innovation and impact in food technology.",
    image: "/images/awards/telangana.jpg",
  },
  {
    title: "GITEX Dubai Delegate",
    desc: "Official delegate representing Indian Food Innovation at GITEX Global, Dubai.",
    image: "/images/awards/gitex.jpg",
  },
  {
    title: "APAC Top Food Startup",
    desc: "Recognized among the region's leading FoodTech startups.",
    image: "/images/awards/apac.jpg",
  },
  {
    title: "Mid-Day Next Gen Brands",
    desc: "Featured among India's emerging next generation brands.",
    image: "/images/awards/midday.jpg",
  },
  {
    title: "UoH Emerald Proudest Alumni",
    desc: "Recognized for entrepreneurial excellence by the University of Hyderabad.",
    image: "/images/awards/uoh.jpg",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-[#F8F6EF] py-32"
    >
      {/* Background Blur */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-green-100 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-[190px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2F6F47]">
            RECOGNITION
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#183323] md:text-6xl">
            Proof We&apos;re Building
            <br />
            in the Right Direction
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-[#C8A95C]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Recognition from government bodies, global platforms, academia and
            media validates our mission of building healthier food systems and
            empowering farmers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-[28px] border border-[#E7E2D5] bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
             <div className="relative flex h-56 items-center justify-center rounded-t-[28px] bg-gradient-to-br from-[#FFFDF7] to-[#F7F2E7] p-5">

  <Image
    src={award.image}
    alt={award.title}
    fill
    className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
  />

</div>

              <div className="p-4">
                <div className="mb-2 inline-flex rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#2F6F47]">
                  Verified
                </div>

                <h3 className="text-sm font-bold leading-snug text-[#183323]">
                  {award.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-600">
                  {award.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
