"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Star,
  Award,
} from "lucide-react";

interface Benefit {
  title: string;
  subtitle: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "0 Glycemic Spike",
    subtitle: "100% diabetic & keto safe with zero sugar crash",
  },
  {
    title: "1:1 Sugar Replacement",
    subtitle: "Bakes, blends, and tastes exactly like refined sugar",
  },
  {
    title: "100% Unrefined & Gut-Friendly",
    subtitle: "Packed with natural prebiotic fibers and minerals",
  },
];

export default function Product() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#071A11] py-20 text-white sm:py-28"
    >
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D5B66B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT: HIGH-IMPACT PRODUCT SHOWCASE (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 flex flex-col items-center"
          >
            {/* Top Floating Highlight Tag */}
            <div className="absolute -top-4 z-20 flex items-center gap-1.5 rounded-full border border-[#D5B66B]/30 bg-[#0E271B] px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#D5B66B] uppercase shadow-lg">
              <Award className="h-3.5 w-3.5 text-[#D5B66B]" />
              Patented Invention
            </div>

            {/* Bottle Stage / Container */}
            <div className="relative flex w-full items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[#0E271B] to-[#0B2117] p-8 shadow-2xl">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute h-60 w-60 rounded-full bg-[#D5B66B]/15 blur-3xl" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/images/hero/millet-us-bottle.png"
                  alt="Millet-Us Premium Sweetener"
                  width={280}
                  height={460}
                  priority
                  className="h-auto w-48 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] sm:w-60"
                />
              </motion.div>
            </div>

            {/* Trust Micro-Badges Under Image */}
            <div className="mt-4 flex items-center justify-center gap-6 text-[10px] text-[#A2B0A6]">
              <div className="flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-[#D5B66B]" />
                <span>Express Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D5B66B]" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONVERSION-FOCUSED COPY & OFFER (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Social Proof Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#D5B66B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D5B66B]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#E7E2D5]">
                4.9/5 <span className="font-normal text-[#A2B0A6]">(1,240+ Verified Buyers)</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              Taste the Sweetness. <br />
              <span className="italic text-[#D5B66B]">Forget the Sugar.</span>
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-[#A2B0A6] sm:text-sm">
              The world&apos;s first 100% millet-derived sweetener. Engineered for doctors, chefs, and health-conscious families who refuse to compromise on taste or health.
            </p>

            {/* Value Pillars List */}
            <div className="mt-6 w-full space-y-3 border-y border-[rgba(255,255,255,0.08)] py-5">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D5B66B]" />
                  <div>
                    <h3 className="text-xs font-semibold text-white sm:text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] text-[#A2B0A6]">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion CTA Block */}
            <div className="mt-6 flex flex-col gap-3 w-full sm:flex-row sm:items-center">
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-[#D5B66B] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071A11] shadow-lg transition-all hover:bg-[#e2c77d] hover:shadow-[0_0_20px_rgba(213,182,107,0.3)]">
                <span>Order Millet-Us Today</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[#0E271B] px-4 py-3 text-[11px] font-medium text-[#E7E2D5]">
                <Leaf className="h-3.5 w-3.5 text-[#D5B66B]" />
                <span>100% Organic & Non-GMO</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}