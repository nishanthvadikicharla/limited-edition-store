"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Truck, ShieldCheck } from "lucide-react";

interface Benefit {
  title: string;
  subtitle: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "No glycemic spike",
    subtitle: "Digests slowly by nature — diabetic and keto safe, without the crash.",
  },
  {
    title: "1:1 sugar replacement",
    subtitle: "Measure it the way you'd measure sugar. Bakes and blends the same.",
  },
  {
    title: "Unrefined and gut-friendly",
    subtitle: "Natural prebiotic fibre and minerals stay in the bottle.",
  },
];

export default function Product() {
  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-[#183323] py-24 text-[#F8F6EF] sm:py-32"
    >
      {/* Ambient drifting light — slow, low-opacity, never distracting */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#C8A95C]/10 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -30, 0], y: [0, 24, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[#2F6F47]/20 blur-[110px]"
      />

      {/* Fine grain texture for a photographed, non-flat feel */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: PRODUCT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ rotateX: 3, rotateY: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
              className="group relative flex w-full items-center justify-center overflow-hidden border border-white/10 bg-[#14261C] px-8 py-14"
            >
              {/* subtle glow that blooms on hover */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,169,92,0.16),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/images/hero/millet-us-bottle.png"
                  alt="Millet-Us bottle and box"
                  width={280}
                  height={460}
                  priority
                  className="h-auto w-48 object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)] sm:w-56"
                />
              </motion.div>
            </motion.div>

            <div className="mt-5 flex items-center gap-8 text-xs text-[#F8F6EF]/60">
              <span className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-[#C8A95C]" strokeWidth={1.75} />
                Express shipping
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C8A95C]" strokeWidth={1.75} />
                30-day guarantee
              </span>
            </div>
          </motion.div>

          {/* RIGHT: COPY */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="lg:col-span-7"
          >
            <p className="text-sm text-[#C8A95C]">Patented invention · made in Bharat</p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#F8F6EF] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Taste the sweetness. Forget the sugar.
            </h2>

            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-[#F8F6EF]/70 sm:text-base">
              The world&apos;s first 100% millet-derived sweetener — built for
              anyone who won&apos;t trade taste for health.
            </p>

            {/* Benefits — staggered reveal, hover highlight */}
            <div className="mt-8 w-full divide-y divide-white/10 border-y border-white/10">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                  className="group flex flex-col gap-1 rounded-md px-2 py-4 -mx-2 transition-colors duration-300 hover:bg-white/[0.03] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <h3 className="flex items-center gap-2 text-sm font-medium text-[#F8F6EF] sm:w-[15ch] sm:shrink-0">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#C8A95C] transition-transform duration-300 group-hover:scale-150" />
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#F8F6EF]/65">{benefit.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA — light-sweep on hover */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C8A95C] px-7 py-3.5 text-sm font-medium text-[#14261C] transition-colors duration-300 hover:bg-[#E4D3A4]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Order Millet-Us</span>
                <ArrowRight
                  className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </button>
              <span className="text-sm text-[#F8F6EF]/55">
                100% organic &amp; non-GMO
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}