"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Lucide 1.0 removed all brand/logo icons (LinkedIn, Twitter, etc.),
// so we use a small inline SVG instead of importing from lucide-react.
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

const founders = [
  {
    name: "Srikanth Vadikicharla",
    role: "Founder & CEO",
    image: "/images/founders/srikanth.jpg", // TODO: upload founder photo here
    bio: [
      "A biochemist from the University of Hyderabad with deep expertise in enzyme engineering, biocatalysis, and enzyme kinetics. A recipient of the prestigious DBT Fellowship in 2023, Srikanth began his career as a Junior Research Scientist, honing his skills in life sciences and innovation.",
      "Driven by the urgent need to tackle health, climate, and farmer livelihood challenges, he transformed his scientific expertise into sustainable food innovations — leading to the creation of ReFarmSoil, a global food startup pioneering millet-based sugar alternatives, starches, and proteins.",
    ],
    linkedin:
      "https://www.linkedin.com/in/srikanth-vadikicharla-b6501017b",
  },
  {
    name: "Nishanth Vadikicharla",
    role: "Founder & COO",
    image: "/images/founders/nishanth.jpg", // TODO: upload founder photo here
    bio: [
      "Our Co-Founder and Chief Operating Officer comes from a mechanical engineering background with expertise in CAD/CAM. Well-versed in machinery and industrial operations, he works closely with engineers to lead day-to-day operations at ReFarmSoil.",
      "His technical knowledge and operational experience make him the perfect fit to drive efficiency and scale as the company grows.",
    ],
    linkedin:
       "https://www.linkedin.com/in/nishanth-vadikicharla-9801aa369",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden bg-[#F8F6EF] py-16 sm:py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-100 blur-[150px] sm:h-[400px] sm:w-[400px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100 blur-[160px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2F6F47] sm:text-sm sm:tracking-[0.35em]">
            THE PEOPLE BEHIND REFARMSOIL
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183323] sm:mt-5 sm:text-5xl md:text-6xl">
            Meet Our Founders
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#C8A95C] sm:mt-6 sm:w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            Two builders, one mission — turning a scientist&apos;s
            breakthrough and an engineer&apos;s discipline into a
            millet-powered food revolution.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2 lg:gap-10">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-[#E7E2D5] bg-white shadow-lg transition-all sm:rounded-[28px]"
            >
              {/* Photo + Name */}
              <div className="flex flex-col items-center p-6 text-center sm:p-8">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#F0EAD6] sm:h-28 sm:w-28">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#183323] sm:text-xl">
                    {founder.name}
                  </h3>
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#183323]/5 text-[#183323] transition-all hover:bg-[#0A66C2] hover:text-white"
                    >
                      <LinkedinIcon size={13} />
                    </a>
                  )}
                </div>

                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#C8A95C] sm:text-sm">
                  {founder.role}
                </p>
              </div>

              {/* Bio */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <Quote className="mx-auto mb-3 h-5 w-5 text-[#C8A95C]/60 sm:h-6 sm:w-6" />

                {founder.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-3 text-sm leading-6 text-gray-600 first:mt-0 sm:text-base sm:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Origin story banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-[24px] bg-[#183323] p-8 text-center text-white sm:mt-20 sm:rounded-[40px] sm:p-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-green-300 sm:text-sm sm:tracking-[0.4em]">
            OUR ORIGIN STORY
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-xl font-semibold italic leading-relaxed text-green-50 sm:mt-6 sm:text-2xl md:text-3xl">
            &ldquo;We are not just building products. We are building a
            sustainable food future.&rdquo;
          </h3>

          <p className="mt-4 text-sm text-green-200 sm:mt-5 sm:text-base">
            — RefarmSoil
          </p>
        </motion.div>
      </div>
    </section>
  );
}
