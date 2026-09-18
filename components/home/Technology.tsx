"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  FlaskConical,
  Cpu,
  Droplets,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    icon: Wheat,
    title: "Collect Raw Material",
    desc: "Premium quality millets sourced directly from trusted farmer networks.",
  },
  {
    icon: FlaskConical,
    title: "Extraction",
    desc: "Natural extraction process preserving nutrients and functional properties.",
  },
  {
    icon: Cpu,
    title: "Enzymatic Conversion",
    desc: "Advanced food technology transforms millet into a healthier sweetener.",
  },
  {
    icon: Droplets,
    title: "Purification",
    desc: "Carefully refined to achieve consistency, safety and premium quality.",
  },
  {
    icon: PackageCheck,
    title: "Millet-Us Sweetener",
    desc: "A healthier, climate-smart sweetener ready for everyday use.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0F2E1F] py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-600/20 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-green-300 text-sm font-semibold">
            OUR TECHNOLOGY
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            From Millet
            <br />
            To Innovation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100/80">
            Our proprietary process transforms nutrient-rich millets into a
            healthier sweetener while preserving sustainability and supporting
            farming communities.
          </p>
        </motion.div>

        {/* Desktop Timeline */}

        <div className="relative mt-24 hidden lg:block">

          <div className="absolute left-0 right-0 top-14 h-[3px] bg-white/10" />

          <div className="grid grid-cols-5 gap-8">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity:0, y:60 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{
                    duration:.6,
                    delay:index*.15,
                  }}
                  whileHover={{
                    y:-12,
                  }}
                  className="relative text-center"
                >

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-green-400/30 bg-white/10 backdrop-blur-xl shadow-2xl">

                    <Icon
                      size={42}
                      className="text-green-300"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-green-100/70 leading-7">
                    {step.desc}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* Mobile Timeline */}

        <div className="mt-20 space-y-10 lg:hidden">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity:0, x:-30 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{
                  delay:index*.1,
                }}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-700">

                    <Icon
                      size={28}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                </div>

                <p className="mt-5 text-green-100/70 leading-7">
                  {step.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}