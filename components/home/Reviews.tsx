"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight, Truck, ShieldCheck } from "lucide-react";

interface Review {
  name: string;
  title: string;
  date: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "Ravindra",
    title: "Delightful, mindful sweetener",
    date: "21 May 2026",
    rating: 5,
    text: "Sweet with a pleasant, natural millet flavor. Blends beautifully in tea, coffee and baking.",
  },
  {
    name: "Blue Home",
    title: "Good healthy alternative",
    date: "20 May 2026",
    rating: 5,
    text: "Tastes somewhat like jaggery, not like artificial sweeteners. Blended nicely in tea.",
  },
  {
    name: "Sai Praneeth Narisetty",
    title: "Truly innovative & healthier",
    date: "23 May 2026",
    rating: 5,
    text: "Close to regular sugar with no bitter aftertaste. Works perfectly in tea and coffee.",
  },
  {
    name: "Kindle Customer",
    title: "Zero blood sugar spikes",
    date: "17 Jun 2026",
    rating: 5,
    text: "Behaves exactly like regular sugar but gives steady energy without the typical spikes.",
  },
  {
    name: "Majoju Murali Krishna",
    title: "Organic, value for money",
    date: "8 Jun 2026",
    rating: 5,
    text: "Great value for money and a healthy, organic choice one must invest into.",
  },
  {
    name: "Pramod",
    title: "Best sweetener",
    date: "30 May 2026",
    rating: 5,
    text: "Extracted from a crop that saves water and protects the soil. A healthy option for everyone.",
  },
];

const AMAZON_URL =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#071A11] py-10 text-[#F8F6EF] sm:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Slim header row — everything on one line at desktop width */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs text-[#C8A95C]">Customer voices</p>
            <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight sm:text-[1.7rem]">
              Real stories. <span className="italic text-[#C8A95C]">Lasting impact.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-xs text-[#F8F6EF]/60">
              <div className="flex text-[#C8A95C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-[#F8F6EF]">5.0 / 5.0</span>
              <span aria-hidden="true">·</span>
              <span>Verified purchases</span>
            </div>

            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#C8A95C] px-5 py-2.5 text-xs font-medium text-[#14261C] transition-colors hover:bg-[#E4D3A4]"
            >
              Read all reviews on Amazon
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </motion.div>

        {/* One short, wide row of all six reviews */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="scrollbar-none mt-6 flex gap-3 overflow-x-auto"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="w-[240px] shrink-0 rounded-lg border border-white/8 bg-[#0E271B] p-3.5 sm:w-auto sm:flex-1"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] font-medium text-[#F8F6EF]/80">
                  {initials(review.name)}
                </span>
                <p className="truncate text-[11px] font-medium text-[#F8F6EF]">
                  {review.name}
                </p>
              </div>

              <div className="mt-2 flex text-[#C8A95C]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-current" />
                ))}
              </div>

              <h3 className="mt-2 text-xs font-medium leading-snug text-[#F8F6EF]">
                {review.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#F8F6EF]/55">
                {review.text}
              </p>
            </article>
          ))}
        </motion.div>

        {/* Trust marks */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/8 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-[#F8F6EF]/55">
            <Truck className="h-3.5 w-3.5 text-[#C8A95C]" strokeWidth={1.75} />
            Express shipping
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#F8F6EF]/55">
            <ShieldCheck className="h-3.5 w-3.5 text-[#C8A95C]" strokeWidth={1.75} />
            
          </span>
        </div>
      </div>
    </section>
  );
}