"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Ravindra",
    title: "Delightful, mindful sweetener",
    date: "21 May 2026",
    rating: 5,
    text: "The taste is perfect: sweet with a pleasant, natural millet flavor that blends beautifully in tea, coffee and baking. The consistency is excellent too — it dissolves well and measures like regular sugar. The RefarmSoil concept is what sold it for me: a product made with care for soil health and small farmers.",
  },
  {
    name: "Blue Home",
    title: "Good healthy alternative to sugar",
    date: "20 May 2026",
    rating: 5,
    text: "Taste is somewhat like jaggery and not like artificial sweeteners. We tried it in tea and it blended nicely. I really liked the idea of making sweetener from millets, very innovative. The save-soil message on the bottle is a good concept too.",
  },
  {
    name: "Sai Praneeth Narisetty",
    title: "A truly innovative & healthier sugar alternative",
    date: "23 May 2026",
    rating: 5,
    text: "Really impressed with Refarmsoil Millet-Us! Tastes close to regular sugar with no bitter aftertaste and works perfectly in tea and coffee. Loved the natural millet-based, low glycemic formula with no artificial sweeteners.",
  },
  {
    name: "Kindle Customer",
    title: "Perfect healthy sugar swap, zero blood sugar spikes",
    date: "17 June 2026",
    rating: 5,
    text: "I bought Millet-Us strictly for health reasons, looking for a way to cut down on refined sugar without resorting to chemical artificial sweeteners. I am incredibly impressed — it behaves exactly like regular sugar but gives steady energy without the typical spikes.",
  },
  {
    name: "Majoju Murali Krishna",
    title: "Organic, value for money, healthy",
    date: "8 June 2026",
    rating: 5,
    text: "I highly recommend this product. It surely offers great value for money and is a healthy, organic choice one must invest into.",
  },
  {
    name: "Pramod",
    title: "Best sweetener",
    date: "30 May 2026",
    rating: 5,
    text: "Best sweetener extracted from a crop that saves water and protects the soil. Derived from millets and a healthy option — everyone can use it.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-32"
    >
      <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-green-100 blur-[170px]" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-100 blur-[180px]" />

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
            CUSTOMER VOICES
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#183323] md:text-6xl">
            Loved by Real
            <br />
            Amazon Customers
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-[#C8A95C]" />

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#C8A95C] text-[#C8A95C]"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-[#183323]">
              5.0 out of 5
            </span>
            <span className="text-gray-500">· Verified Purchases</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col rounded-2xl border border-[#E7E2D5] bg-white p-4 shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-[#C8A95C] text-[#C8A95C]"
                    />
                  ))}
                </div>
                <ShieldCheck className="h-3.5 w-3.5 text-[#2F6F47]" />
              </div>

              <h3 className="mt-3 text-sm font-bold leading-snug text-[#183323]">
                {review.title}
              </h3>

              <p className="mt-2 line-clamp-3 flex-1 text-xs leading-5 text-gray-600">
                {review.text}
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-[#E7E2D5] pt-2 text-[10px] text-gray-500">
                <span className="font-semibold text-[#183323]">
                  {review.name}
                </span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#183323] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#2F6F47]"
          >
            Read All Reviews on Amazon
          </a>
        </motion.div>
      </div>
    </section>
  );
}
