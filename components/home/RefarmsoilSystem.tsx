"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SystemPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  points: string[];
}

const PILLARS: SystemPillar[] = [
  {
    id: "health",
    number: "01",
    title: "HEALTH",
    subtitle: "Better food & low GI sweetness",
    description:
      "By replacing refined sugars with millet-based extracts, we lower the glycemic impact of everyday food while preserving traditional tastes and functional nutrition.",
    imageSrc: "/images/products/millet-bottle.png",
    points: ["Low Glycemic Index", "Clean label formulation", "Rich in micronutrients"],
  },
  {
    id: "soil",
    number: "02",
    title: "SOIL",
    subtitle: "Resilient agricultural systems",
    description:
      "Millets require up to 70% less water than rice or sugarcane. Cultivating millets restores degraded topsoil health, reduces synthetic inputs, and survives harsh climate shifts.",
    imageSrc: "/images/products/millet-field.png",
    points: ["70% less water usage", "Natural crop rotation", "Regenerative topsoil impact"],
  },
  {
    id: "farmers",
    number: "03",
    title: "FARMERS",
    subtitle: "Stronger value chain & fair returns",
    description:
      "We build direct value-addition pipelines at the farm level, shifting smallholder farmers from raw commodity sellers to strategic partners in high-value ingredient production.",
    imageSrc: "/images/products/millet-field.png",
    points: ["Direct farm sourcing", "Premium value realization", "Stable income assurance"],
  },
];

export default function RefarmsoilSystem() {
  const [activePillar, setActivePillar] = useState<SystemPillar>(PILLARS[0]);

  return (
    <section className="bg-[#EFECE6] text-[#1C2B22] py-24 px-6 lg:px-12 border-t border-[#D5CFC3]">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#8C8370] uppercase">
            THE REFARMSOIL SYSTEM
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C2B22] mt-2 tracking-tight">
            One Crop. Three Impacts.
          </h2>
          <p className="text-xs md:text-sm text-[#5C5547] leading-relaxed mt-4">
            Click on any pillar to explore how our millet platform connects soil health directly to human nutrition and farmer prosperity.
          </p>
        </div>

        {/* 2-COLUMN MAIN LAYOUT (IDENTICAL CONTAINER BOXES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Interactive System Diagram Box */}
          <div className="lg:col-span-6 bg-[#EBE7DF] border border-[#D5CFC3] p-8 md:p-10 flex flex-col justify-between rounded-sm min-h-[500px]">
            <div>
              <div className="flex items-center justify-between border-b border-[#D5CFC3] pb-4">
                <span className="text-xs font-mono font-bold text-[#8C8370]">
                  SYSTEM ARCHITECTURE
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1C2B22] uppercase">
                  SELECT A PILLAR
                </span>
              </div>

              {/* Center Circular Badge */}
              <div className="my-8 flex justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 rounded-full bg-[#1C2B22] text-[#EFECE6] border-4 border-[#EFECE6] shadow-xl flex flex-col items-center justify-center p-4 text-center"
                >
                  <h4 className="font-serif text-xl tracking-widest text-[#C4B69C] font-semibold uppercase">
                    MILLET
                  </h4>
                  <span className="block text-[8px] tracking-[0.2em] font-sans text-[#A29A8B] uppercase mt-1">
                    SYSTEM CORE
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Pillar Selector Cards Grid */}
            <div className="w-full grid grid-cols-3 gap-3 pt-4 border-t border-[#D5CFC3]">
              {PILLARS.map((pillar) => {
                const isActive = activePillar.id === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar)}
                    className={`p-4 text-left border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "bg-[#1C2B22] text-[#EFECE6] border-[#1C2B22] shadow-md -translate-y-1"
                        : "bg-[#F2EFE9] text-[#1C2B22] border-[#D5CFC3] hover:border-[#8C8370]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono ${isActive ? "text-[#C4B69C]" : "text-[#8C8370]"}`}>
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-base md:text-lg font-medium tracking-wide block mt-1">
                      {pillar.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Detailed Explanation Box (IDENTICAL FRAME) */}
          <div className="lg:col-span-6 bg-[#EBE7DF] border border-[#D5CFC3] p-8 md:p-10 flex flex-col justify-between rounded-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between gap-6"
              >
                <div>
                  {/* Badge & Number */}
                  <div className="flex items-center justify-between border-b border-[#D5CFC3] pb-4">
                    <span className="text-xs font-mono font-bold text-[#8C8370]">
                      PILLAR {activePillar.number}
                    </span>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1C2B22] uppercase">
                      REFARMSOIL THESIS
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1C2B22] mt-4">
                    {activePillar.title}
                  </h3>
                  <p className="text-xs font-bold tracking-wider text-[#8C8370] uppercase mt-1">
                    {activePillar.subtitle}
                  </p>
                  <p className="text-sm text-[#5C5547] leading-relaxed mt-4">
                    {activePillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-6 space-y-2">
                    {activePillar.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#1C2B22] font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8C8370]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated Image Preview Frame */}
                <div className="relative w-full h-44 bg-[#D8D3C8] rounded-sm overflow-hidden border border-[#D5CFC3] mt-4">
                  <Image
                    src={activePillar.imageSrc}
                    alt={activePillar.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B22]/60 to-transparent flex items-end p-4">
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                      {activePillar.title} IN ACTION
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}