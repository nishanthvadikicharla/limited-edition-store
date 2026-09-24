"use client";

import { useRef } from "react";
import Image from "next/image";
import { Alex_Brush } from "next/font/google";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Coffee,
  CakeSlice,
  UtensilsCrossed,
  Droplet,
  Ruler,
  ArrowLeftRight,
  Sparkles,
} from "lucide-react";

// Script face matching the "Millet-Us" brush-script wordmark on the label.
const scriptFont = Alex_Brush({ subsets: ["latin"], weight: "400" });

const AMAZON_URL =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

interface Benefit {
  title: string;
  subtitle: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "Low glycemic spike",
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

const WHERE_TO_USE = [
  { label: "Tea & coffee", icon: Coffee },
  { label: "Baking & desserts", icon: CakeSlice },
  { label: "Cooking & sauces", icon: UtensilsCrossed },
  { label: "Smoothies & drinks", icon: Droplet },
];

const HOW_TO_USE = [
  {
    step: "01",
    title: "Measure as usual",
    desc: "Use the same spoon or cup you'd reach for with regular sugar.",
    icon: Ruler,
  },
  {
    step: "02",
    title: "Swap it 1:1",
    desc: "No conversion math — Millet-Us replaces sugar in equal quantity.",
    icon: ArrowLeftRight,
  },
  {
    step: "03",
    title: "Stir, bake or brew",
    desc: "Dissolves and bakes the same way, with a lighter, natural sweetness.",
    icon: Sparkles,
  },
];

export default function Product() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="products" className="relative isolate overflow-hidden text-[#142018]">
      {/* HERO — stacked (photo, then card) below md; full-bleed photo + floating
          card overlay from md up, once there's enough spare width for both */}
      <div ref={heroRef} className="relative md:min-h-[85dvh] md:overflow-hidden">
        {/* Photo: normal-flow banner on mobile, absolute full-bleed background from md */}
        <div className="relative h-[42vh] overflow-hidden sm:h-[48vh] md:absolute md:inset-[-2%] md:h-auto">
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : parallaxY }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.03 }}
              animate={shouldReduceMotion ? { scale: 1.03 } : { scale: [1.03, 1.06, 1.03] }}
              transition={{ duration: 32, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/millet-field-bottle.jpg"
                alt="Millet-Us bottle, box, and raw millet sugar staged on a wooden table in a millet field at golden hour"
                fill
                priority
                quality={95}
                sizes="100vw"
                className="object-cover object-[32%_42%] md:object-[38%_45%]"
              />
            </motion.div>
          </motion.div>
          {/* scrim only matters once the card overlays the photo, i.e. from md up */}
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/5 via-transparent to-transparent md:block" />
        </div>

        {/* Card: normal block below the photo on mobile; overlay from md up */}
        <div className="relative z-10 flex justify-center bg-[#FAF9F6] px-4 py-8 sm:px-6 md:absolute md:inset-0 md:mx-auto md:max-w-7xl md:items-center md:justify-end md:bg-transparent md:px-10 md:py-12 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
            className="w-full max-w-sm rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_50px_-15px_rgba(7,26,17,0.25)] backdrop-blur-xl sm:p-6 md:max-w-xs md:bg-[#FAF9F6]/90 md:shadow-[0_20px_50px_-15px_rgba(7,26,17,0.4)]"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${scriptFont.className} text-[clamp(1.5rem,6vw,1.9rem)] leading-none text-[#96783E]`}
            >
              Millet-Us
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-1.5 flex items-center gap-2"
            >
              <p className="text-[10px] tracking-wide text-[#96783E]">
                Patented · made in Bharat
              </p>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="h-px flex-1 bg-[#96783E]/30"
              />
            </motion.div>

            <div className="mt-1.5 overflow-hidden">
              <motion.h2
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: [0.65, 0, 0.35, 1] }}
                className="text-[clamp(1.05rem,4.2vw,1.25rem)] font-medium leading-[1.2] tracking-tight text-[#071A11]"
              >
                Taste the sweetness. Forget the sugar.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-2 text-xs leading-relaxed text-[#4A5248]"
            >
              The world&apos;s first 100% millet-derived sweetener — no
              bitter aftertaste, no trade-off on health.
            </motion.p>

            {/* Benefits */}
            <div className="mt-3 divide-y divide-[rgba(20,32,24,0.1)] border-y border-[rgba(20,32,24,0.1)]">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.1, ease: "easeOut" }}
                  className="group -mx-1.5 min-h-[44px] rounded-md px-1.5 py-2 transition-all duration-300 hover:translate-x-1 hover:bg-black/[0.025] active:translate-x-1 active:bg-black/[0.025]"
                >
                  <h3 className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#142018]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#96783E] shadow-[0_0_10px_rgba(150,120,62,0.5)] transition-transform duration-300 group-hover:scale-125 group-active:scale-125" />
                    {benefit.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Real review pull-quote */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative mt-3 border-l-2 border-[#96783E]/40 pl-3"
            >
              <p className="text-[11.5px] italic leading-snug text-[#4A5248]">
                &ldquo;Behaves exactly like regular sugar, no crash.&rdquo;
              </p>
              <p className="mt-1 text-[10px] text-[#96783E]">
                Kindle Customer &middot; Amazon review
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-4"
            >
              <div className="relative inline-block">
                <motion.div
                  aria-hidden="true"
                  animate={shouldReduceMotion ? { opacity: 0.4 } : { opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 3, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 rounded-full bg-[#96783E]/25 blur-md"
                />
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex min-h-[44px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#071A11] px-5 py-3 text-[13px] font-medium text-[#F8F6EF] transition-all duration-300 hover:scale-[1.02] hover:bg-[#143B27] active:scale-[0.98] active:bg-[#143B27]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Order Millet-Us</span>
                  <ArrowRight
                    className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#6D776F]">
                <span>100% organic &amp; non-GMO</span>
                <span aria-hidden="true">&middot;</span>
                <span className="flex items-center gap-1">
                  <Truck className="h-3 w-3 text-[#96783E]" strokeWidth={1.75} />
                  Express shipping
                </span>
                <span aria-hidden="true">&middot;</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-[#96783E]" strokeWidth={1.75} />
                  
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom: where to use + how to use */}
      <div className="bg-[#FAF9F6] px-4 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#96783E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#96783E]"
              >
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
                Versatility
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-3 font-serif text-[clamp(1.15rem,3.5vw,1.5rem)] font-medium text-[#071A11]"
              >
                Anywhere sugar goes, Millet-Us goes too.
              </motion.h3>
              <div className="mt-6 grid grid-cols-2 gap-3 xs:gap-4">
                {WHERE_TO_USE.map(({ label, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: -1, scale: 0.98 }}
                    className="group min-h-[44px] cursor-default rounded-2xl border border-[rgba(20,32,24,0.08)] bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md active:shadow-md sm:p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#96783E]/10 text-[#96783E] transition-colors duration-300 group-hover:bg-[#96783E] group-hover:text-white group-active:bg-[#96783E] group-active:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="mt-3 block text-sm font-medium text-[#142018]">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#96783E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#96783E]"
              >
                <Ruler className="h-3.5 w-3.5" strokeWidth={1.75} />
                Simple guide
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-3 font-serif text-[clamp(1.15rem,3.5vw,1.5rem)] font-medium text-[#071A11]"
              >
                Three steps. No recipe math.
              </motion.h3>
              <div className="relative mt-6 space-y-4 pl-1">
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: "easeInOut" }}
                  style={{ originY: 0 }}
                  className="absolute left-[18px] top-3 bottom-3 w-px bg-[rgba(20,32,24,0.12)]"
                />
                {HOW_TO_USE.map(({ step, title, desc, icon: Icon }, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                    className="group relative flex items-start gap-3 sm:gap-4"
                  >
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#FAF9F6] bg-[#071A11] text-xs font-semibold text-[#96783E] transition-transform duration-300 group-hover:scale-110">
                      {step}
                    </span>
                    <div className="min-h-[44px] flex-1 rounded-2xl border border-[rgba(20,32,24,0.08)] bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#142018]">
                        <Icon className="h-4 w-4 text-[#96783E]" strokeWidth={1.75} />
                        {title}
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#6D776F]">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}