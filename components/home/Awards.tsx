"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

interface AwardItem {
  title: string;
  desc: string;
  image: string;
}

const AWARDS: AwardItem[] = [
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
    title: "UoH Herald Proudest Alumni",
    desc: "Recognized for entrepreneurial excellence by the University of Hyderabad.",
    image: "/images/awards/uoh.jpg",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-[#FAF9F6] py-20 text-[#142018] sm:py-28">
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
            Recognition
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#071A11] sm:text-4xl md:text-5xl">
            Proof We&apos;re Building in the Right Direction
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#6D776F] sm:text-sm">
            Validation from government bodies, global platforms, academia, and media reinforcing our mission toward sustainable food systems.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award, index) => (
            <motion.article
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(20,32,24,0.08)] bg-white shadow-sm transition-all duration-300 hover:border-[#D5B66B]/40 hover:shadow-md"
            >
              <div>
                {/* Image Frame */}
                <div className="relative flex h-40 w-full items-center justify-center bg-[#FBF9F5] p-4 sm:h-44">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#143B27]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#96783E]" />
                    <span className="uppercase tracking-wider">Official Recognition</span>
                  </div>

                  <h3 className="mt-2.5 text-sm font-semibold tracking-tight text-[#142018]">
                    {award.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#6D776F]">
                    {award.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="flex items-center justify-between border-t border-[rgba(20,32,24,0.06)] px-5 py-2.5 text-[10px] text-[#96783E]">
                <span className="font-medium tracking-wide uppercase">Refarmsoil Platform</span>
                <Award className="h-3 w-3" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}