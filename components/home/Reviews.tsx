"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";

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

const AMAZON_URL =
  "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#FAF9F6] py-24 text-[#142018]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#96783E]">
            Customer Voices
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Loved by Amazon Customers
          </h2>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#6D776F]">
            <div className="flex text-[#D5B66B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#142018]">5.0 / 5.0</span>
            <span>•</span>
            <span>Verified Purchases</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.article
              key={review.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col justify-between rounded-xl border border-[rgba(20,32,24,0.08)] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#D5B66B]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D5B66B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <ShieldCheck className="h-3.5 w-3.5 text-[#143B27]" />
                </div>

                <h3 className="mt-3 text-sm font-semibold tracking-tight text-[#142018]">
                  {review.title}
                </h3>

                <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-[#6D776F]">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[rgba(20,32,24,0.06)] pt-3 text-[10px]">
                <span className="font-medium text-[#142018]">
                  {review.name}
                </span>
                <span className="text-[#6D776F]">{review.date}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#071A11] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#143B27]"
          >
            Read All Reviews on Amazon
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}