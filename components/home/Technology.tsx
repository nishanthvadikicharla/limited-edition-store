"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  FlaskConical,
  Cpu,
  Droplets,
  PackageCheck,
  LucideIcon,
  Sparkles,
} from "lucide-react";

interface TechStep {
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const STEPS: TechStep[] = [
  {
    number: "01",
    icon: Wheat,
    title: "Direct Sourcing",
    desc: "Sourcing climate-resilient, non-GMO millets directly from verified regional farming collectives.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Precision Extraction",
    desc: "Isolating high-value grain components while retaining vital micro-nutrients and functional fiber.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Enzymatic Refining",
    desc: "Utilizing controlled, low-impact enzymatic conversion to yield a balanced sweetness profile.",
  },
  {
    number: "04",
    icon: Droplets,
    title: "Pure Filtration",
    desc: "Multi-stage natural purification ensuring clarity, consistency, and zero chemical residues.",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Finished Sweetener",
    desc: "Crafting a low-glycemic, versatile alternative ready for everyday commercial and home use.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#071A11] py-20 text-white sm:py-28"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#143B27]/40 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(213,182,107,0.2)] bg-[#143B27] px-3.5 py-1 text-[10px] font-bold tracking-[0.25em] text-[#D5B66B] uppercase">
            <Sparkles className="h-3 w-3 text-[#D5B66B]" />
            Proprietary Process
          </div>

          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            From Grain to <span className="italic text-[#D5B66B]">Innovation</span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#A2B0A6] sm:text-sm">
            Our clean-label process transforms whole-grain millets into a smooth, low-glycemic sweetener without relying on chemical synthetics.
          </p>
        </motion.div>

        {/* DESKTOP PROCESS FLOW (Horizontal Live Line) */}
        <div className="relative mt-20 hidden lg:block">
          
          {/* Static Process Rail */}
          <div className="absolute top-12 left-[8%] right-[8%] h-[2px] bg-[rgba(255,255,255,0.08)]" />

          {/* Animated Liquid Flow Pulse Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-12 left-[8%] right-[8%] h-[2px] origin-left bg-gradient-to-r from-[#143B27] via-[#D5B66B] to-[#143B27]"
          />

          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step Node Circle */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0E271B] transition-all duration-300 group-hover:border-[#D5B66B]/50 group-hover:bg-[#143B27] group-hover:shadow-[0_0_25px_rgba(213,182,107,0.15)]">
                    
                    {/* Pulsing Core Light */}
                    <span className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D5B66B] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D5B66B]" />
                    </span>

                    <Icon className="h-8 w-8 text-[#D5B66B] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Step Label Number */}
                  <span className="mt-4 font-mono text-[10px] font-bold tracking-widest text-[#D5B66B]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-1 font-serif text-base font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#A2B0A6]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE PROCESS FLOW (Vertical Connected Timeline) */}
        <div className="relative mt-12 space-y-6 lg:hidden">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex items-start gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0E271B] p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#143B27] text-[#D5B66B]">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-[#D5B66B]">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-base font-medium text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-[#A2B0A6]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}