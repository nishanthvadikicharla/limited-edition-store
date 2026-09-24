"use client";

import { useState, useEffect } from "react";
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

export default function EcosystemPage() {
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

  return (
    <main
      id= "ecosystem"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `radial-gradient(circle at 12% 12%, rgba(205,220,180,0.34), transparent 32%), radial-gradient(circle at 88% 82%, rgba(205,185,135,0.22), transparent 34%), ${BG}`,
        color: INK,
      }}
    >
      {/* ambient rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full" style={{ border: "1px solid rgba(23,61,45,0.05)" }} />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full" style={{ border: "1px solid rgba(23,61,45,0.04)" }} />
      </div>

      {/* HEADER */}
      <header className="relative z-20 mx-auto flex max-w-[1500px] items-center justify-between px-7 py-6 md:px-12">
        <div className="flex items-center gap-4">
          <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
            <path d="M21 35V13" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M21 22C14 22 10 18 9 11C16 11 21 15 21 22Z" fill="#7A9B5C" />
            <path d="M21 28C28 28 32 24 33 17C26 17 21 21 21 28Z" fill="#527A48" />
          </svg>
          <div>
            <div className="text-[20px] font-semibold tracking-[-0.04em]" style={{ color: INK }}>ReFarmSoil</div>
            <div className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(23,61,45,0.45)" }}>
              Regenerate · Nourish · Sustain
            </div>
          </div>
        </div>
        <div className="hidden text-right md:block">
          <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "rgba(23,61,45,0.5)" }}>
            Millet-Powered Global Food Ecosystem
          </div>
        </div>
      </header>

      {/* ORBIT STAGE */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-5 pb-8 md:px-10">

        {/* TOP — floating title */}
        <div
          key={`title-${pulse}`}
          className="relative mx-auto max-w-2xl text-center"
          style={{ animation: "orbIn 600ms cubic-bezier(.2,.8,.2,1) both" }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{ background: active.color }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: active.color }}>
              {active.benefitsTitle}
            </span>
            <span className="h-px w-8" style={{ background: active.color }} />
          </div>
          <h1 className="mt-4 text-[40px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[54px]" style={{ color: INK }}>
            {active.title}
          </h1>
          <p className="mt-2 text-[15px] font-medium italic" style={{ color: active.color }}>
            {active.subtitle}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-[1.85]" style={{ color: "rgba(23,61,45,0.62)" }}>
            {active.description}
          </p>
        </div>

        {/* ORBIT GRID — left cards | wheel | right cards */}
        <div className="mt-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 xl:gap-10">

          {/* LEFT ORBIT CARDS */}
          <div className="flex flex-col gap-4 lg:items-end">
            {leftBenefits.map((benefit, i) => {
              const BIcon = benefit.icon;
              return (
                <div
                  key={`${active.id}-L-${benefit.title}`}
                  className="group relative flex w-full max-w-[320px] items-start gap-4 rounded-[20px] p-4 transition-all duration-300 hover:-translate-y-1 lg:text-right"
                  style={{
                    background: "rgba(255,255,252,0.9)",
                    border: "1px solid rgba(23,61,45,0.07)",
                    boxShadow: "0 10px 30px rgba(20,48,34,0.07)",
                    animation: `orbInLeft 600ms cubic-bezier(.2,.8,.2,1) both`,
                    animationDelay: `${120 + i * 110}ms`,
                  }}
                >
                  {/* connector dash toward wheel */}
                  <span
                    className="pointer-events-none absolute right-[-26px] top-1/2 hidden h-px w-6 lg:block"
                    style={{ background: `linear-gradient(90deg, ${active.color}70, transparent)` }}
                  />
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 lg:order-2"
                    style={{ background: active.bgColor }}
                  >
                    <BIcon size={18} strokeWidth={1.8} style={{ color: active.color }} />
                  </div>
                  <div className="lg:order-1">
                    <div className="text-[14px] font-bold leading-snug" style={{ color: INK }}>
                      {benefit.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.6]" style={{ color: "rgba(23,61,45,0.55)" }}>
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WHEEL */}
          <div className="relative mx-auto" style={{ width: "min(84vw, 430px)", aspectRatio: "1 / 1" }}>
            <div
              className="absolute inset-[8%] rounded-full"
              style={{ background: "rgba(28,57,42,0.16)", filter: "blur(40px)", transform: "translateY(18px)" }}
            />

            {/* pulsing halo on change */}
            <div
              key={`halo-${pulse}`}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${active.color}`,
                animation: "haloPulse 900ms ease-out both",
              }}
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
              <circle cx={CENTER} cy={CENTER} r={OUTER_R + 18} fill="none" stroke="rgba(23,61,45,0.035)" strokeWidth="1" strokeDasharray="3 7" />

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
                    className="cursor-pointer"
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
                      d={path}
                      fill={topic.color}
                      opacity={isActive ? 0.12 : 0.42}
                      style={{ transition: "opacity 450ms ease" }}
                    />
                    <path
                      d={path}
                      fill="none"
                      stroke={isActive ? "rgba(255,255,255,0.98)" : "rgba(244,241,230,0.78)"}
                      strokeWidth={isActive ? 5 : 3}
                      style={{ transition: "stroke-width 400ms ease" }}
                    />
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

          {/* RIGHT ORBIT CARDS */}
          <div className="flex flex-col gap-4 lg:items-start">
            {rightBenefits.map((benefit, i) => {
              const BIcon = benefit.icon;
              return (
                <div
                  key={`${active.id}-R-${benefit.title}`}
                  className="group relative flex w-full max-w-[320px] items-start gap-4 rounded-[20px] p-4 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,252,0.9)",
                    border: "1px solid rgba(23,61,45,0.07)",
                    boxShadow: "0 10px 30px rgba(20,48,34,0.07)",
                    animation: `orbInRight 600ms cubic-bezier(.2,.8,.2,1) both`,
                    animationDelay: `${120 + i * 110}ms`,
                  }}
                >
                  <span
                    className="pointer-events-none absolute left-[-26px] top-1/2 hidden h-px w-6 lg:block"
                    style={{ background: `linear-gradient(270deg, ${active.color}70, transparent)` }}
                  />
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{ background: active.bgColor }}
                  >
                    <BIcon size={18} strokeWidth={1.8} style={{ color: active.color }} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold leading-snug" style={{ color: INK }}>
                      {benefit.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.6]" style={{ color: "rgba(23,61,45,0.55)" }}>
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous topic"
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-x-0.5"
            style={{ border: "1px solid rgba(23,61,45,0.12)", background: "rgba(255,255,255,0.65)" }}
          >
            <ChevronLeft size={17} style={{ color: INK }} />
          </button>

          <div className="flex items-center gap-2">
            {topics.map((topic, i) => (
              <button
                key={topic.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Open ${topic.label}`}
                className="transition-all duration-300"
                style={{
                  width: activeIndex === i ? 30 : 7,
                  height: 7,
                  borderRadius: 99,
                  background: activeIndex === i ? topic.color : "rgba(23,61,45,0.13)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next topic"
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:translate-x-0.5"
            style={{ background: active.color, boxShadow: `0 8px 22px ${active.color}45` }}
          >
            <ChevronRight size={17} color="#fff" />
          </button>
        </div>

        {/* BIGGER PICTURE — floating below */}
        <div
          key={`bp-${pulse}`}
          className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-[26px] p-7 md:p-9"
          style={{
            background: `linear-gradient(135deg, ${active.bgColor} 0%, rgba(255,255,255,0.55) 100%)`,
            border: `1px solid ${active.color}22`,
            animation: "orbInUp 650ms cubic-bezier(.2,.8,.2,1) both",
            animationDelay: "260ms",
          }}
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full" style={{ border: `1px solid ${active.color}25` }} />
          <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.65)", border: `1px solid ${active.color}35` }}
            >
              <active.icon size={19} style={{ color: active.color }} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: active.color }}>
                The Bigger Picture
              </div>
              <p className="mt-2 text-[15px] leading-[1.8]" style={{ color: "rgba(23,61,45,0.7)" }}>
                {active.biggerPicture}
              </p>
            </div>
          </div>
        </div>

        {/* tagline */}
        <div className="mt-12 flex flex-col items-center pb-14">
          <p className="font-serif text-[19px] italic" style={{ color: "rgba(23,61,45,0.3)" }}>
            Good food for a brighter future
          </p>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #B99649, transparent)" }} />
        </div>
      </section>

      <style jsx>{`
        @keyframes orbIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbInLeft {
          from { opacity: 0; transform: translateX(-28px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes orbInRight {
          from { opacity: 0; transform: translateX(28px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes orbInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes haloPulse {
          0% { opacity: 0.7; transform: scale(0.97); }
          100% { opacity: 0; transform: scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </main>
  );
}