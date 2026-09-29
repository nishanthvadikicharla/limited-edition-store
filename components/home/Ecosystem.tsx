"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Leaf,
  Users,
  Globe,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Wheat,
} from "lucide-react";

const topics = [
  {
    id: "millets",
    label: "Why Millets",
    shortLabel: "MILLET",
    icon: Wheat,
    color: "#B58A32",
    bgColor: "#F4E8C8",
    image: "/images/ecosystem/millets.jpg",
    title: "Why Millets",
    subtitle: "Small grains. A big difference.",
    description:
      "Millets are climate-resilient, nutrient-dense and water-efficient crops. They help us build healthier food systems, support farmers, and restore the planet — all at once.",
    benefitsTitle: "Key Benefits",
    benefits: [
      { icon: Droplets, title: "Low Water", desc: "Grows with 50–70% less water than rice or sugarcane." },
      { icon: Leaf, title: "Climate Resilient", desc: "Thrives in harsh conditions and adapts to changing climates." },
      { icon: Users, title: "Nutrient Rich", desc: "High in fibre, protein, minerals and antioxidants." },
      { icon: Globe, title: "Diversification", desc: "Reduces risk for farmers and builds soil health." },
      { icon: TrendingUp, title: "Low Carbon", desc: "Requires fewer inputs and supports regenerative farming." },
      { icon: Wheat, title: "Time-Tested", desc: "An ancient crop with a sustainable future." },
    ],
    biggerPicture:
      "Millets aren't just a crop. They are a solution for healthier people, stronger farmers and a more sustainable planet.",
  },
  {
    id: "planet",
    label: "Planet",
    shortLabel: "PLANET",
    icon: Globe,
    color: "#397451",
    bgColor: "#DCEBDF",
    image: "/images/ecosystem/planet.jpg",
    title: "Planet",
    subtitle: "A lighter footprint on the planet.",
    description:
      "The ecosystem starts with crops that require fewer resources and can support more resilient agricultural systems across the globe.",
    benefitsTitle: "Environmental Impact",
    benefits: [
      { icon: Droplets, title: "Less Water", desc: "Millet uses a fraction of the water sugarcane requires." },
      { icon: Leaf, title: "Soil Regeneration", desc: "Naturally restores soil health without heavy chemicals." },
      { icon: Globe, title: "Lower Emissions", desc: "Significantly lower carbon footprint per kg produced." },
      { icon: RefreshCw, title: "Biodiversity", desc: "Supports diverse ecosystems, reduces monoculture risk." },
      { icon: TrendingUp, title: "Climate Smart", desc: "Promotes agriculture that adapts to climate change." },
      { icon: Wheat, title: "Built to Last", desc: "A food system that can sustain generations." },
    ],
    biggerPicture:
      "When we choose millet, we choose a crop that gives back more than it takes — from the soil, the water, and the air.",
  },
  {
    id: "farmers",
    label: "Farmers",
    shortLabel: "FARMERS",
    icon: Users,
    color: "#487153",
    bgColor: "#D8EADF",
    image: "/images/ecosystem/farmers.jpg",
    title: "Farmers",
    subtitle: "Value should flow back to the farmer.",
    description:
      "ReFarmSoil is building market demand around millet-based ingredients so farmers can participate in higher-value food systems.",
    benefitsTitle: "Farmer Benefits",
    benefits: [
      { icon: TrendingUp, title: "Higher Returns", desc: "Millet as an ingredient crop commands better prices." },
      { icon: Droplets, title: "Lower Costs", desc: "Minimal fertilizer and water requirements reduce costs." },
      { icon: Users, title: "Direct Linkage", desc: "Direct market connections without middlemen." },
      { icon: Leaf, title: "Resilient Crop", desc: "Less risk from climate shocks and crop failures." },
      { icon: Globe, title: "Community Growth", desc: "Builds stronger rural farming communities." },
      { icon: RefreshCw, title: "Steady Income", desc: "Year-round income potential from millet cultivation." },
    ],
    biggerPicture:
      "When farmers thrive, food systems thrive. ReFarmSoil puts the farmer at the center of every decision we make.",
  },
  {
    id: "people",
    label: "People",
    shortLabel: "PEOPLE",
    icon: Users,
    color: "#8A5438",
    bgColor: "#F0DFD3",
    image: "/images/ecosystem/people.jpg",
    title: "People",
    subtitle: "Better food starts with better ingredients.",
    description:
      "ReFarmSoil is developing millet-powered food solutions that give consumers healthier alternatives while creating new opportunities across the food value chain.",
    benefitsTitle: "Health Benefits",
    benefits: [
      { icon: Leaf, title: "Low Glycemic", desc: "Ideal for health-conscious consumers." },
      { icon: Wheat, title: "High Fibre", desc: "Supports gut health and digestion naturally." },
      { icon: TrendingUp, title: "Rich in Minerals", desc: "Calcium, iron and magnesium in every grain." },
      { icon: Droplets, title: "Antioxidant Rich", desc: "Natural antioxidants for better nutrition." },
      { icon: Users, title: "Allergen Friendly", desc: "Naturally gluten-free and easy to digest." },
      { icon: Globe, title: "Everyday Use", desc: "Versatile across food categories and cuisines." },
    ],
    biggerPicture:
      "Every meal is a chance to choose better. Millet-powered food makes healthy eating accessible and delicious.",
  },
  {
    id: "profit",
    label: "Profit",
    shortLabel: "PROFIT",
    icon: TrendingUp,
    color: "#B96E2C",
    bgColor: "#F4DFC9",
    image: "/images/ecosystem/profit.jpg",
    title: "Profit",
    subtitle: "Sustainability becomes scalable when value is created.",
    description:
      "The opportunity is not limited to a single consumer product. ReFarmSoil is building a platform around millet-based sweeteners, starches, proteins and functional ingredients.",
    benefitsTitle: "Market Opportunity",
    benefits: [
      { icon: TrendingUp, title: "$100B+ Market", desc: "Global sugar alternatives market growing rapidly." },
      { icon: Globe, title: "B2B Ingredients", desc: "Industrial ingredient supply for food manufacturers." },
      { icon: Wheat, title: "Sweeteners", desc: "Low-GI millet sugar as a direct sugar replacement." },
      { icon: Leaf, title: "Starches & Proteins", desc: "High-value extracts for food and pharma." },
      { icon: Droplets, title: "Nutraceuticals", desc: "Functional food ingredients for health brands." },
      { icon: RefreshCw, title: "Global Reach", desc: "Scalable supply chain for international markets." },
    ],
    biggerPicture:
      "Profit and purpose are not opposites. At ReFarmSoil, building a better food system is also building a better business.",
  },
  {
    id: "innovation",
    label: "Innovation & Technology",
    shortLabel: "INNOVATION",
    icon: Lightbulb,
    color: "#704A79",
    bgColor: "#E9DCEB",
    image: "/images/ecosystem/innovation.jpg",
    title: "Innovation & Technology",
    subtitle: "From ancient grain to future food technology.",
    description:
      "ReFarmSoil combines millet agriculture with food science and enzymatic processing to create higher-value ingredients from a climate-resilient crop.",
    benefitsTitle: "Our Process",
    benefits: [
      { icon: Wheat, title: "Direct Sourcing", desc: "Non-GMO millets from verified regional farmers." },
      { icon: Leaf, title: "Precision Extraction", desc: "Isolating high-value grain components carefully." },
      { icon: TrendingUp, title: "Enzymatic Refining", desc: "Low-impact enzymatic conversion for sweetness." },
      { icon: Droplets, title: "Pure Filtration", desc: "Multi-stage natural purification process." },
      { icon: Globe, title: "Zero Chemicals", desc: "No synthetic chemicals anywhere in our process." },
      { icon: Lightbulb, title: "Scalable Tech", desc: "Designed for industrial-scale production." },
    ],
    biggerPicture:
      "Innovation at ReFarmSoil means making ancient wisdom work for the future — cleaner, smarter, and more efficient.",
  },
  {
    id: "circular",
    label: "Circular Food System",
    shortLabel: "CIRCULAR",
    icon: RefreshCw,
    color: "#237170",
    bgColor: "#D6E8E7",
    image: "/images/ecosystem/circular.jpg",
    title: "Circular Food System",
    subtitle: "One crop. Multiple value streams.",
    description:
      "The goal is to move beyond a single product and create a connected system where agriculture, food science, ingredients and consumers reinforce one another.",
    benefitsTitle: "The Cycle",
    benefits: [
      { icon: Wheat, title: "Farm to Millet", desc: "Farmers grow climate-resilient millet crops." },
      { icon: Lightbulb, title: "Millet to Ingredient", desc: "Science turns grain into high-value ingredients." },
      { icon: Globe, title: "Ingredient to Food", desc: "Ingredients become everyday healthy products." },
      { icon: Users, title: "Food to People", desc: "Consumers get healthier alternatives they love." },
      { icon: TrendingUp, title: "Value to Farmers", desc: "Profits flow back to farming communities." },
      { icon: RefreshCw, title: "Cycle Repeats", desc: "A self-sustaining loop of value." },
    ],
    biggerPicture:
      "A circular food system means no waste, no dead ends — just a continuous loop of value for people, farmers and the planet.",
  },
  {
    id: "global",
    label: "Global Food Ecosystem",
    shortLabel: "GLOBAL",
    icon: Globe,
    color: "#315476",
    bgColor: "#DCE6EF",
    image: "/images/ecosystem/global.jpg",
    title: "Global Food Ecosystem",
    subtitle: "Building a millet-powered world.",
    description:
      "ReFarmSoil's long-term vision is to make millet a foundation for healthier food, stronger farming communities and more resilient global food systems.",
    benefitsTitle: "Global Vision",
    benefits: [
      { icon: Globe, title: "Food Ingredients", desc: "Millet ingredients across global food categories." },
      { icon: Users, title: "Farmer Prosperity", desc: "Millions of farmers earning more from millets." },
      { icon: Leaf, title: "Planet Resilience", desc: "Agriculture that heals rather than harms." },
      { icon: Lightbulb, title: "Innovation Hub", desc: "India as a global center of millet innovation." },
      { icon: TrendingUp, title: "Market Leadership", desc: "A global millet ingredient brand." },
      { icon: RefreshCw, title: "Systems Change", desc: "Reshaping how the world thinks about food." },
    ],
    biggerPicture:
      "We are not just building a company. We are building a movement — one millet at a time, one farmer at a time, one meal at a time.",
  },
];

const BG = "#F1EEE5";
const INK = "#173D2D";

const WHEEL_SIZE = 760;
const CENTER = WHEEL_SIZE / 2;
const OUTER_R = 292;
const INNER_R = 112;

// Fixed particle field (not Math.random() at render) so server and client
// output match exactly — avoids a hydration mismatch.
const PARTICLES = [
  { left: 6, size: 4, duration: 14, delay: 0, hue: "#B99649" },
  { left: 16, size: 3, duration: 16, delay: 3, hue: "#7A9B5C" },
  { left: 28, size: 4, duration: 12.5, delay: 1.5, hue: "#397451" },
  { left: 42, size: 3, duration: 15, delay: 5, hue: "#487153" },
  { left: 58, size: 4, duration: 13, delay: 2, hue: "#B99649" },
  { left: 72, size: 3, duration: 17, delay: 4.5, hue: "#397451" },
  { left: 86, size: 4, duration: 14.5, delay: 1, hue: "#7A9B5C" },
  { left: 94, size: 3, duration: 12, delay: 6, hue: "#487153" },
];

export default function Ecosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pulse, setPulse] = useState(0);
  const active = topics[activeIndex];

  useEffect(() => {
    setPulse((p) => p + 1);
  }, [activeIndex]);

  const prev = () => setActiveIndex((i) => (i - 1 + topics.length) % topics.length);
  const next = () => setActiveIndex((i) => (i + 1) % topics.length);

  const getWedgePath = (index: number, outerR: number, innerR: number) => {
    const total = topics.length;
    const step = (Math.PI * 2) / total;
    const gap = 0.028;
    const start = index * step - Math.PI / 2 - step / 2 + gap;
    const end = start + step - gap * 2;
    const oS = { x: CENTER + outerR * Math.cos(start), y: CENTER + outerR * Math.sin(start) };
    const oE = { x: CENTER + outerR * Math.cos(end), y: CENTER + outerR * Math.sin(end) };
    const iE = { x: CENTER + innerR * Math.cos(end), y: CENTER + innerR * Math.sin(end) };
    const iS = { x: CENTER + innerR * Math.cos(start), y: CENTER + innerR * Math.sin(start) };
    return `M ${oS.x} ${oS.y} A ${outerR} ${outerR} 0 0 1 ${oE.x} ${oE.y} L ${iE.x} ${iE.y} A ${innerR} ${innerR} 0 0 0 ${iS.x} ${iS.y} Z`;
  };

  const getPoint = (index: number, radius: number) => {
    const step = (Math.PI * 2) / topics.length;
    const angle = index * step - Math.PI / 2;
    return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
  };

  const leftBenefits = active.benefits.slice(0, 3);
  const rightBenefits = active.benefits.slice(3, 6);

  const handleWedgeKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(i);
    }
  };

  return (
    <main
      id="ecosystem"
      className="relative flex h-[100dvh] min-h-[640px] w-full flex-col overflow-hidden"
      style={{
        background: `radial-gradient(circle at 12% 12%, rgba(205,220,180,0.34), transparent 32%), radial-gradient(circle at 88% 82%, rgba(205,185,135,0.22), transparent 34%), ${BG}`,
        color: INK,
        ["--glow" as string]: active.color,
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full" style={{ border: "1px solid rgba(23,61,45,0.05)" }} />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full" style={{ border: "1px solid rgba(23,61,45,0.04)" }} />
      </div>

      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="eco-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#eco-grain)" />
      </svg>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="spore"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: p.hue,
              boxShadow: `0 0 ${p.size * 2}px ${p.size * 0.8}px ${p.hue}40`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* HEADER — compact */}
      <header className="relative z-20 mx-auto flex w-full max-w-[1500px] shrink-0 items-center justify-between px-6 py-3 md:px-10">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 42 42" fill="none">
            <path d="M21 35V13" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M21 22C14 22 10 18 9 11C16 11 21 15 21 22Z" fill="#7A9B5C" />
            <path d="M21 28C28 28 32 24 33 17C26 17 21 21 21 28Z" fill="#527A48" />
          </svg>
          <div>
            <div className="text-[15px] font-semibold leading-tight tracking-[-0.04em]" style={{ color: INK }}>ReFarmSoil</div>
            <div className="text-[7px] font-medium uppercase tracking-[0.24em]" style={{ color: "rgba(23,61,45,0.45)" }}>
              Regenerate · Nourish · Sustain
            </div>
          </div>
        </div>
        <div className="hidden text-right md:block">
          <div className="text-[10px] uppercase tracking-[0.16em]" style={{ color: "rgba(23,61,45,0.5)" }}>
            Millet-Powered Global Food Ecosystem
          </div>
        </div>
      </header>

      {/* STAGE — fills remaining height, content centered and compressed to fit */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center overflow-hidden px-5 md:px-10"
      >

        {/* TOP — compact title */}
        <div
          key={`title-${pulse}`}
          className="relative mx-auto max-w-xl shrink-0 text-center"
          style={{ animation: "orbIn 500ms cubic-bezier(.2,.8,.2,1) both" }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-5" style={{ background: active.color }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: active.color }}>
              {active.benefitsTitle}
            </span>
            <span className="h-px w-5" style={{ background: active.color }} />
          </div>
          <h1
            className="title-glow mt-1.5 text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[30px]"
            style={{ color: INK }}
          >
            {active.title}
          </h1>
          <p className="mt-1 text-[12px] font-medium italic" style={{ color: active.color }}>
            {active.subtitle}
          </p>
          <p className="mx-auto mt-1.5 max-w-md text-[12px] leading-[1.5]" style={{ color: "rgba(23,61,45,0.6)" }}>
            {active.description}
          </p>
        </div>

        {/* QUICK-NAV PILLS — compact */}
        <div className="quick-nav-scroll mt-2.5 flex shrink-0 justify-start gap-1.5 overflow-x-auto pb-1 lg:justify-center">
          {topics.map((topic, i) => {
            const isActive = activeIndex === i;
            const PIcon = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
                aria-label={`View ${topic.label}`}
                className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider transition-all duration-300"
                style={{
                  background: isActive ? topic.color : "rgba(255,255,255,0.6)",
                  color: isActive ? "#fff" : "rgba(23,61,45,0.6)",
                  border: `1px solid ${isActive ? topic.color : "rgba(23,61,45,0.1)"}`,
                }}
              >
                <PIcon size={11} strokeWidth={2} />
                {topic.shortLabel}
              </button>
            );
          })}
        </div>

        {/* ORBIT GRID — smaller wheel, tighter cards */}
        <div className="mt-2 grid min-h-0 flex-1 grid-cols-1 items-center gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-3 xl:gap-6">

          <div className="hidden flex-col gap-2.5 lg:flex lg:items-end">
            {leftBenefits.map((benefit, i) => {
              const BIcon = benefit.icon;
              return (
                <div
                  key={`${active.id}-L-${benefit.title}`}
                  className="group relative flex w-full max-w-[260px] items-start gap-3 rounded-[14px] p-2.5 transition-all duration-300 hover:-translate-y-1 lg:text-right"
                  style={{
                    background: "rgba(255,255,252,0.9)",
                    border: "1px solid rgba(23,61,45,0.07)",
                    boxShadow: "0 8px 20px rgba(20,48,34,0.07)",
                    animation: `orbInLeft 500ms cubic-bezier(.2,.8,.2,1) both`,
                    animationDelay: `${100 + i * 90}ms`,
                  }}
                >
                  <span
                    className="energy-line pointer-events-none absolute right-[-20px] top-1/2 hidden h-px w-5 lg:block"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${active.color}, transparent)`,
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 lg:order-2"
                    style={{ background: active.bgColor }}
                  >
                    <BIcon size={14} strokeWidth={1.8} style={{ color: active.color }} />
                  </div>
                  <div className="lg:order-1">
                    <div className="text-[12px] font-bold leading-snug" style={{ color: INK }}>
                      {benefit.title}
                    </div>
                    <div className="mt-0.5 text-[10.5px] leading-[1.4]" style={{ color: "rgba(23,61,45,0.55)" }}>
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WHEEL — significantly smaller so the row height drops */}
          <div className="relative mx-auto" style={{ width: "min(48vw, 260px)", aspectRatio: "1 / 1" }}>
            <div
              className="absolute inset-[8%] rounded-full"
              style={{ background: "rgba(28,57,42,0.16)", filter: "blur(30px)", transform: "translateY(12px)" }}
            />
            <div
              key={`halo-${pulse}`}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ border: `2px solid ${active.color}`, animation: "haloPulse 900ms ease-out both" }}
            />

            <svg viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`} className="relative z-10 h-full w-full overflow-visible">
              <defs>
                {topics.map((_, i) => (
                  <clipPath key={`clip-${i}`} id={`eco-clip-${i}`}>
                    <path d={getWedgePath(i, OUTER_R, INNER_R)} />
                  </clipPath>
                ))}
                <linearGradient id="photoShade" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#000" stopOpacity="0.04" />
                  <stop offset="0.7" stopColor="#000" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#000" stopOpacity="0.4" />
                </linearGradient>
                <radialGradient id="centerGradient" cx="35%" cy="25%">
                  <stop offset="0" stopColor="#FFFFFF" />
                  <stop offset="0.7" stopColor="#F7F6EE" />
                  <stop offset="1" stopColor="#E7E9D9" />
                </radialGradient>
                <filter id="wheelShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="15" stdDeviation="18" floodColor="#183A2C" floodOpacity="0.18" />
                </filter>
              </defs>

              <circle cx={CENTER} cy={CENTER} r={OUTER_R + 8} fill="none" stroke="rgba(23,61,45,0.08)" strokeWidth="1" />
              <circle
                className="idle-spin"
                cx={CENTER}
                cy={CENTER}
                r={OUTER_R + 18}
                fill="none"
                stroke="rgba(23,61,45,0.035)"
                strokeWidth="1"
                strokeDasharray="3 7"
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              />

              {topics.map((topic, i) => {
                const path = getWedgePath(i, OUTER_R, INNER_R);
                const iconPoint = getPoint(i, 195);
                const labelPoint = getPoint(i, 247);
                const isActive = activeIndex === i;
                const Icon = topic.icon;

                return (
                  <g
                    key={topic.id}
                    onClick={() => setActiveIndex(i)}
                    onKeyDown={(e) => handleWedgeKeyDown(e, i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${topic.label}`}
                    aria-pressed={isActive}
                    className="wedge-group cursor-pointer"
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                      transition: "transform 520ms cubic-bezier(.2,.85,.2,1)",
                    }}
                  >
                    <image
                      href={topic.image}
                      x="0"
                      y="0"
                      width={WHEEL_SIZE}
                      height={WHEEL_SIZE}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#eco-clip-${i})`}
                    />
                    <path d={path} fill="url(#photoShade)" />
                    <path
                      className={isActive ? "wedge-color" : "wedge-color wedge-breathe"}
                      d={path}
                      fill={topic.color}
                      opacity={isActive ? 0.12 : 0.42}
                      style={{ transition: "opacity 450ms ease", animationDelay: `${i * 0.45}s` }}
                    />
                    <path
                      className="wedge-outline"
                      d={path}
                      fill="none"
                      stroke={isActive ? "rgba(255,255,255,0.98)" : "rgba(244,241,230,0.78)"}
                      strokeWidth={isActive ? 5 : 3}
                      style={{ transition: "stroke-width 250ms ease, stroke 250ms ease" }}
                    />
                    {isActive && (
                      <circle className="icon-glow" cx={iconPoint.x} cy={iconPoint.y} r={30} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                    )}
                    <circle
                      cx={iconPoint.x}
                      cy={iconPoint.y}
                      r={isActive ? 27 : 24}
                      fill="rgba(255,255,255,0.2)"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="1"
                      style={{ transition: "r 400ms ease" }}
                    />
                    <circle cx={iconPoint.x} cy={iconPoint.y} r="20" fill="rgba(22,55,40,0.16)" />
                    <foreignObject x={iconPoint.x - 11} y={iconPoint.y - 11} width="22" height="22">
                      <div className="flex h-full w-full items-center justify-center" style={{ color: "#fff" }}>
                        <Icon size={17} strokeWidth={1.8} />
                      </div>
                    </foreignObject>
                    <text
                      x={labelPoint.x}
                      y={labelPoint.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#fff"
                      fontSize={isActive ? 12 : 10.5}
                      fontWeight="700"
                      letterSpacing="1.4"
                      style={{ textShadow: "0 2px 8px rgba(0,0,0,.65)", pointerEvents: "none", transition: "font-size 350ms ease" }}
                    >
                      {topic.shortLabel}
                    </text>
                  </g>
                );
              })}

              <circle cx={CENTER} cy={CENTER} r="116" fill="#E4E8D8" stroke="#F2F0E7" strokeWidth="7" filter="url(#wheelShadow)" />
              <circle cx={CENTER} cy={CENTER} r="108" fill="url(#centerGradient)" stroke="rgba(23,61,45,0.10)" strokeWidth="1" />
              <circle cx={CENTER} cy={CENTER} r="99" fill="none" stroke={active.color} strokeWidth="1.2" strokeDasharray="2 6" opacity="0.5" />

              <foreignObject x={CENTER - 28} y={CENTER - 74} width="56" height="56">
                <div className="flex h-full w-full items-center justify-center">
                  <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                    <path d="M24 39V14" stroke="#28523B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 23C16 23 11 18 10 10C18 10 24 15 24 23Z" fill="#76975B" />
                    <path d="M24 31C32 31 37 26 38 18C30 18 24 23 24 31Z" fill="#456D45" />
                  </svg>
                </div>
              </foreignObject>

              <text x={CENTER} y={CENTER - 14} textAnchor="middle" fill={INK} fontSize="21" fontWeight="700" letterSpacing="-0.7">
                ReFarmSoil
              </text>
              <line x1={CENTER - 30} x2={CENTER + 30} y1={CENTER - 3} y2={CENTER - 3} stroke="#B99649" strokeWidth="1.3" />
              <text x={CENTER} y={CENTER + 15} textAnchor="middle" fill={INK} opacity="0.55" fontSize="9" letterSpacing="1.1">
                MILLET-POWERED
              </text>
              <text x={CENTER} y={CENTER + 29} textAnchor="middle" fill={INK} opacity="0.55" fontSize="9" letterSpacing="1.1">
                GLOBAL FOOD
              </text>
              <text x={CENTER} y={CENTER + 43} textAnchor="middle" fill={INK} opacity="0.55" fontSize="9" letterSpacing="1.1">
                ECOSYSTEM
              </text>
            </svg>
          </div>

          <div className="hidden flex-col gap-2.5 lg:flex lg:items-start">
            {rightBenefits.map((benefit, i) => {
              const BIcon = benefit.icon;
              return (
                <div
                  key={`${active.id}-R-${benefit.title}`}
                  className="group relative flex w-full max-w-[260px] items-start gap-3 rounded-[14px] p-2.5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,252,0.9)",
                    border: "1px solid rgba(23,61,45,0.07)",
                    boxShadow: "0 8px 20px rgba(20,48,34,0.07)",
                    animation: `orbInRight 500ms cubic-bezier(.2,.8,.2,1) both`,
                    animationDelay: `${100 + i * 90}ms`,
                  }}
                >
                  <span
                    className="energy-line energy-line-reverse pointer-events-none absolute left-[-20px] top-1/2 hidden h-px w-5 lg:block"
                    style={{
                      background: `linear-gradient(270deg, transparent, ${active.color}, transparent)`,
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{ background: active.bgColor }}
                  >
                    <BIcon size={14} strokeWidth={1.8} style={{ color: active.color }} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold leading-snug" style={{ color: INK }}>
                      {benefit.title}
                    </div>
                    <div className="mt-0.5 text-[10.5px] leading-[1.4]" style={{ color: "rgba(23,61,45,0.55)" }}>
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BENEFITS STRIP — the mobile/tablet stand-in for the side cards.
            Below `lg` the two card columns are hidden (no room for a 3-up
            layout within one screen), so this keeps the same 6 benefits
            visible as compact chips instead of dropping them entirely. */}
        <div className="quick-nav-scroll mt-2 flex shrink-0 justify-start gap-1.5 overflow-x-auto pb-1 lg:hidden">
          {[...leftBenefits, ...rightBenefits].map((benefit) => {
            const BIcon = benefit.icon;
            return (
              <span
                key={benefit.title}
                className="flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(23,61,45,0.08)",
                  color: INK,
                }}
              >
                <BIcon size={11} strokeWidth={1.8} style={{ color: active.color }} />
                {benefit.title}
              </span>
            );
          })}
        </div>

        {/* CONTROLS — compact, with counter */}
        <div className="mt-2 flex shrink-0 flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous topic"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:-translate-x-0.5 active:scale-90"
              style={{ border: "1px solid rgba(23,61,45,0.12)", background: "rgba(255,255,255,0.65)" }}
            >
              <ChevronLeft size={14} style={{ color: INK }} />
            </button>

            <div className="flex items-center gap-1.5">
              {topics.map((topic, i) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Open ${topic.label}`}
                  className="transition-all duration-300 active:scale-90"
                  style={{
                    width: activeIndex === i ? 24 : 6,
                    height: 6,
                    borderRadius: 99,
                    background: activeIndex === i ? topic.color : "rgba(23,61,45,0.13)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next topic"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:translate-x-0.5 active:scale-90"
              style={{ background: active.color, boxShadow: `0 6px 16px ${active.color}45` }}
            >
              <ChevronRight size={14} color="#fff" />
            </button>
          </div>
          <span className="text-[9px] tabular-nums tracking-widest" style={{ color: "rgba(23,61,45,0.4)" }}>
            0{activeIndex + 1} / 0{topics.length}
          </span>
        </div>

        {/* BIGGER PICTURE — compact single-line-friendly card, hidden on very short viewports */}
        <div
          key={`bp-${pulse}`}
          className="relative mx-auto mt-2 hidden w-full max-w-2xl shrink-0 overflow-hidden rounded-[16px] p-3.5 sm:block"
          style={{
            background: `linear-gradient(135deg, ${active.bgColor} 0%, rgba(255,255,255,0.55) 100%)`,
            border: `1px solid ${active.color}22`,
            boxShadow: "0 12px 30px -18px rgba(20,48,34,0.25)",
            animation: "orbInUp 550ms cubic-bezier(.2,.8,.2,1) both",
            animationDelay: "220ms",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-0.5 -top-2 select-none font-serif text-[54px] leading-none"
            style={{ color: active.color, opacity: 0.12 }}
          >
            &ldquo;
          </span>
          <div className="relative flex items-center gap-3">
            <div
              className="gentle-float flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${active.color}35` }}
            >
              <active.icon size={14} style={{ color: active.color }} />
            </div>
            <p className="text-[11.5px] leading-[1.4]" style={{ color: "rgba(23,61,45,0.72)" }}>
              {active.biggerPicture}
            </p>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        @keyframes orbIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbInLeft {
          from { opacity: 0; transform: translateX(-24px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes orbInRight {
          from { opacity: 0; transform: translateX(24px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes orbInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes haloPulse {
          0% { opacity: 0.7; transform: scale(0.97); }
          100% { opacity: 0; transform: scale(1.12); }
        }
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .idle-spin { animation: spin360 90s linear infinite; }
        @keyframes iconGlowPulse {
          0%, 100% { opacity: 0.2; r: 28; }
          50% { opacity: 0.45; r: 32; }
        }
        .icon-glow {
          animation: iconGlowPulse 2.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .gentle-float { animation: gentleFloat 3.5s ease-in-out infinite; }
        .wedge-group:hover .wedge-color,
        .wedge-group:focus-visible .wedge-color { opacity: 0.24; }
        .wedge-group:hover .wedge-outline,
        .wedge-group:focus-visible .wedge-outline {
          stroke: rgba(255, 255, 255, 0.9);
          stroke-width: 4;
        }
        .wedge-group,
        .wedge-group:focus,
        .wedge-group:focus-visible,
        .wedge-group:active {
          outline: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent;
        }
        @keyframes wedgeBreathe {
          0%, 100% { opacity: 0.42; }
          50% { opacity: 0.32; }
        }
        .wedge-breathe { animation: wedgeBreathe 3.2s ease-in-out infinite; }
        @keyframes energyFlow {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .energy-line { animation: energyFlow 2.6s linear infinite; }
        .energy-line-reverse { animation-direction: reverse; }
        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 12px var(--glow, transparent), 0 0 2px rgba(0,0,0,0.05); }
          50% { text-shadow: 0 0 20px var(--glow, transparent), 0 0 2px rgba(0,0,0,0.05); }
        }
        .title-glow { animation: titleGlow 3.6s ease-in-out infinite; }
        @keyframes sporeDrift {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          50% { transform: translateY(-40vh) translateX(10px); opacity: 0.35; }
          90% { opacity: 0.12; }
          100% { transform: translateY(-85vh) translateX(-8px); opacity: 0; }
        }
        .spore {
          position: absolute;
          bottom: 0;
          border-radius: 999px;
          animation-name: sporeDrift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .quick-nav-scroll::-webkit-scrollbar { display: none; }
        .quick-nav-scroll { scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </main>
  );
}