"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, Minus } from "lucide-react";
import RefarmsoilChatbot from "@/components/RefarmsoilChatbot";

/* ─── tiny helpers ─── */
const EASE = [0.22, 1, 0.36, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TICKER_ITEMS = [
  "Government Recognised Startup",
  "SDG Champion 2024",
  "ET Soonicorn Summit Featured",
  "Telangana Agri-Tech Pioneer",
  "Low Glycemic Innovation",
  "Farmer-First Value Chain",
  "Climate-Smart Agriculture",
  "World Millet Year Awardee",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --page: #FAFAF7;
          --parch: #F2ECD8;
          --forest: #2D5A1B;
          --sage: #7EA85C;
          --ink: #1C1F17;
          --ink60: rgba(28,31,23,0.6);
          --ink35: rgba(28,31,23,0.35);
          --ink12: rgba(28,31,23,0.12);
          --ink06: rgba(28,31,23,0.06);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--page);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .display {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .display-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--forest);
        }

        /* Ticker */
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }

        /* Process connector line */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          position: relative;
        }
        .process-grid::before {
          content: '';
          position: absolute;
          top: 44px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: var(--ink12);
        }

        /* Comparison table */
        .cmp td, .cmp th { padding: 14px 20px; }
        .cmp tbody tr:nth-child(odd) { background: var(--ink06); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--page); }
        ::-webkit-scrollbar-thumb { background: var(--ink12); border-radius: 3px; }

        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr 1fr; }
          .process-grid::before { display: none; }
        }
      `}</style>

      <main style={{ background: "var(--page)", color: "var(--ink)", minHeight: "100vh", overflowX: "hidden" }}>

        {/* ═══════════════════════════════════════
            NAVBAR
        ═══════════════════════════════════════ */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 56px", height: "68px",
          background: scrolled ? "rgba(250,250,247,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--ink12)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/images/refarmsoil.png" alt="Refarmsoil" width={32} height={32} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em" }}>Refarmsoil</span>
          </div>

          <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
            {["Home", "Products", "Technology", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ fontSize: 13, color: "var(--ink60)", textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink60)")}>
                {item}
              </a>
            ))}
            <a href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 13, fontWeight: 500, color: "white", background: "var(--forest)",
                padding: "9px 22px", borderRadius: 100, textDecoration: "none",
                transition: "all 0.2s", letterSpacing: "0.01em",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#3d7a24")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--forest)")}>
              Buy Now ↗
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 1, background: "var(--ink)",
                transformOrigin: "center",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(4px,4px)" : i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)") : "none",
                transition: "all 0.3s ease",
              }} />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ position: "fixed", inset: 0, background: "var(--page)", zIndex: 90, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
            {["Home", "Products", "Technology", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="display" style={{ fontSize: 36, color: "var(--ink)", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </motion.div>
        )}

        {/* ═══════════════════════════════════════
            HERO — full-bleed split
        ═══════════════════════════════════════ */}
        <section id="home" ref={heroRef} style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }}
          className="block md:grid" >

          {/* Left — parchment */}
          <motion.div
  className="col-span-2 md:col-span-1"
  style={{
    y: heroY,
    opacity: heroOpacity,
    background: "var(--parch)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "120px 64px 80px",
    position: "relative",
    zIndex: 1,
  }}
>

            <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: 28 }}>
              Climate-Smart Food Innovation
            </motion.p>

            <div style={{ overflow: "hidden" }}>
              {["Transforming", "Agriculture &", "Health Through", "Millets"].map((word, i) => (
                <motion.div key={word}
                  initial={{ y: "100%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE }}
                  style={{ overflow: "hidden" }}>
                  <h1 className="display" style={{ fontSize: "clamp(44px,5.5vw,80px)", color: "var(--ink)", margin: 0 }}>
                    {i === 2 ? <><span style={{ color: "var(--forest)" }}>Health</span> Through</> : word}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
              style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink60)", maxWidth: 400, marginTop: 28, marginBottom: 40, fontWeight: 300 }}>
              A millet-powered food ecosystem built to improve human health, empower farmers, and create lasting climate resilience.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#products" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--forest)", color: "white",
                padding: "13px 28px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#3d7a24"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.transform = ""; }}>
                Explore Products <ArrowRight size={13} />
              </a>
              <a href="#technology" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid var(--ink12)", color: "var(--ink60)",
                padding: "13px 28px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--ink35)"; e.currentTarget.style.color = "var(--ink)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--ink12)"; e.currentTarget.style.color = "var(--ink60)"; }}>
                Our Technology
              </a>
            </motion.div>
          </motion.div>

          {/* Right — white with floating product */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="hidden md:flex"
            style={{
              background: "#F5F9F1", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", position: "relative",
              overflow: "hidden",
            }}>
            {/* decorative rings */}
            {[280, 420, 560].map(size => (
              <div key={size} style={{
                position: "absolute", width: size, height: size, borderRadius: "50%",
                border: "1px solid rgba(45,90,27,0.08)",
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }} />
            ))}

            <motion.img
              src="/images/milletus.jpg"
              alt="Millet-Us Sweetener"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: 340, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 32px 48px rgba(45,90,27,0.18))" }}
            />

            {/* pill badges */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
              style={{ position: "absolute", top: "22%", left: "10%", background: "white", border: "1px solid var(--ink12)", borderRadius: 100, padding: "8px 16px", fontSize: 12, fontWeight: 500, color: "var(--forest)" }}>
              Low Glycemic Index
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.6 }}
              style={{ position: "absolute", bottom: "26%", right: "8%", background: "white", border: "1px solid var(--ink12)", borderRadius: 100, padding: "8px 16px", fontSize: 12, fontWeight: 500, color: "var(--forest)" }}>
              Millet-Powered
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.6 }}
              style={{ position: "absolute", top: "30%", right: "6%", background: "var(--forest)", borderRadius: 100, padding: "8px 16px", fontSize: 12, fontWeight: 500, color: "white" }}>
              ₹496 Trial
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            CREDENTIAL TICKER
        ═══════════════════════════════════════ */}
        <div style={{ borderTop: "1px solid var(--ink12)", borderBottom: "1px solid var(--ink12)", background: "var(--forest)", overflow: "hidden", padding: "14px 0" }}>
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28, padding: "0 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>
                {item}
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PULL QUOTE — signature element
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--parch)", padding: "100px 64px", textAlign: "center", borderBottom: "1px solid var(--ink12)" }}>
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 32 }}>Our Belief</p>
            <blockquote className="display-italic"
              style={{ fontSize: "clamp(28px, 4.5vw, 64px)", color: "var(--ink)", maxWidth: 1100, margin: "0 auto", lineHeight: 1.2 }}>
              "The future of sweetness grows in the field, not the factory."
            </blockquote>
            <div style={{ width: 40, height: 1, background: "var(--forest)", margin: "40px auto 0" }} />
          </FadeUp>
        </section>

        {/* ═══════════════════════════════════════
            VISION & MISSION
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--page)", padding: "120px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Our Purpose</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 64, maxWidth: 600 }}>
                Vision &<br />Mission
              </h2>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              <FadeUp delay={0.1}>
                <div style={{ background: "var(--forest)", borderRadius: 24, padding: "48px 44px", height: "100%" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                  </div>
                  <h3 className="display" style={{ fontSize: 26, color: "white", marginBottom: 20 }}>Our Vision</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", fontWeight: 300 }}>
                    To build a millet-powered global food ecosystem that replaces climate-intensive crops with sustainable, nutrient-rich, and farmer-friendly alternatives.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div style={{ border: "1px solid var(--ink12)", borderRadius: 24, padding: "48px 44px", height: "100%", background: "white" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--ink12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ink35)" }} />
                  </div>
                  <h3 className="display" style={{ fontSize: 26, color: "var(--ink)", marginBottom: 28 }}>Our Mission</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {[
                      ["🌾", "Unlock the full potential of millets"],
                      ["🌍", "Replace climate-intensive sugar crops"],
                      ["💚", "Deliver affordable health & nutrition"],
                      ["👨‍🌾", "Empower small and marginal farmers"],
                    ].map(([e, t]) => (
                      <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                        <span style={{ fontSize: 18, lineHeight: 1 }}>{e}</span>
                        <span style={{ fontSize: 15, color: "var(--ink60)", fontWeight: 300, lineHeight: 1.5 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            THE PROBLEM
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--parch)", padding: "120px 64px", borderTop: "1px solid var(--ink12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px 120px", alignItems: "start" }}>
              <FadeUp>
                <p className="eyebrow" style={{ marginBottom: 16 }}>The Problem</p>
                <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 24 }}>
                  What we're<br />here to change
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink60)", fontWeight: 300, maxWidth: 380 }}>
                  India faces a convergence of health, agricultural, and climate crises — all rooted in the same overcultivated crop.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { num: "77M+", label: "Diabetic adults in India", sub: "The world's second-highest diabetic population, driven by excess refined sugar consumption.", color: "#FEF2F2", accent: "#991B1B" },
                  { num: "60%", label: "Millet farmers face income instability", sub: "Market volatility leaves small farmers without reliable income or demand security.", color: "#FFFBEB", accent: "#92400E" },
                  { num: "2000L", label: "Water per kg of sugarcane", sub: "Against 300L for millets — a sixfold difference that's accelerating water scarcity.", color: "#EFF6FF", accent: "#1E3A5F" },
                ].map(({ num, label, sub, color, accent }, i) => (
                  <FadeUp key={label} delay={i * 0.1}>
                    <div style={{ background: color, borderRadius: 16, padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                      <div style={{ flexShrink: 0 }}>
                        <div className="display" style={{ fontSize: 32, color: accent, lineHeight: 1 }}>{num}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: accent, marginBottom: 6 }}>{label}</div>
                        <div style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", lineHeight: 1.6, fontWeight: 300 }}>{sub}</div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PRODUCT FEATURE
        ═══════════════════════════════════════ */}
        <section id="products" style={{ background: "var(--page)", padding: "120px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Featured Product</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 64, maxWidth: 500 }}>
                Millet-Us<br />Sweetener
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 0, border: "1px solid var(--ink12)", borderRadius: 28, overflow: "hidden", background: "white" }}>
              {/* Image panel */}
              <div style={{ background: "#EDF5E5", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 40px", position: "relative", minHeight: 460 }}>
                {[200, 320].map(s => (
                  <div key={s} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: "1px solid rgba(45,90,27,0.1)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                ))}
                <motion.img src="/images/milletus.jpg" alt="Millet-Us"
                  animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ height: 320, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 24px 40px rgba(45,90,27,0.2))" }}
                />
              </div>

              {/* Content panel */}
              <FadeUp>
                <div style={{ padding: "64px 52px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
                    {["Low GI", "320ml Trial", "Millet-Powered"].map(tag => (
                      <span key={tag} style={{ border: "1px solid var(--sage)", color: "var(--forest)", padding: "5px 14px", borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="display" style={{ fontSize: "clamp(26px, 2.5vw, 38px)", marginBottom: 20, lineHeight: 1.15 }}>
                    Better sweetness.<br />
                    <span className="display-italic" style={{ color: "var(--forest)" }}>Better farming.</span>
                  </h3>

                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink60)", fontWeight: 300, marginBottom: 36, maxWidth: 420 }}>
                    Millet-Us replaces conventional sugar with a smarter, climate-resilient alternative — every spoonful supports people, farmers, and the planet.
                  </p>

                  {/* Benefit list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                    {["Low glycemic — better blood sugar response", "Supports millet farmers directly", "Uses 6× less water than sugarcane", "No artificial additives or processing aids"].map(b => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EDF5E5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--forest)" }} />
                        </div>
                        <span style={{ fontSize: 13, color: "var(--ink60)", fontWeight: 300 }}>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: "1px solid var(--ink06)", paddingTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink35)", marginBottom: 6 }}>Introductory Price</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <span className="display" style={{ fontSize: 44, color: "var(--ink)" }}>₹496</span>
                        <span style={{ fontSize: 13, color: "var(--forest)", fontWeight: 500 }}>Limited batch</span>
                      </div>
                    </div>
                    <a href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "var(--forest)", color: "white",
                        padding: "14px 30px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#3d7a24"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.transform = ""; }}>
                      Buy on Amazon <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TECHNOLOGY PROCESS
        ═══════════════════════════════════════ */}
        <section id="technology" style={{ background: "var(--parch)", padding: "120px 64px", borderTop: "1px solid var(--ink12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Innovation & Technology</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 20 }}>
                <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>
                  From stalk<br />to sweetener
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink60)", maxWidth: 380, fontWeight: 300 }}>
                  A biotechnology-driven process that transforms climate-smart millets into healthier sweeteners with minimal intervention.
                </p>
              </div>
            </FadeUp>

            <div className="process-grid">
              {[
                { img: "/images/process1.jpg", step: "01", label: "Collect Stalks", desc: "Millet stalks harvested at peak ripeness" },
                { img: "/images/process2.jpg", step: "02", label: "Crush & Extract", desc: "Cold-press extraction of raw millet juice" },
                { img: "/images/process3.jpg", step: "03", label: "Enzyme Cleaving", desc: "Proprietary enzyme process breaks sugar chains" },
                { img: "/images/process4.jpg", step: "04", label: "Scum Removal", desc: "Natural clarification, zero additives" },
                { img: "/images/process5.jpg", step: "05", label: "Finished Product", desc: "Bottled, tested, and ready to sweeten" },
              ].map(({ img, step, label, desc }, i) => (
                <FadeUp key={step} delay={i * 0.08}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 12px" }}>
                    <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "4px solid var(--page)", marginBottom: 20, flexShrink: 0, position: "relative", zIndex: 1 }}>
                      <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "var(--forest)", marginBottom: 6 }}>{step}</p>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>{label}</h4>
                    <p style={{ fontSize: 12, color: "var(--ink60)", lineHeight: 1.5, fontWeight: 300 }}>{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHY MILLETS
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--page)", padding: "120px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Why Millets</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 72 }}>
                Small grain.<br />
                <span className="display-italic" style={{ color: "var(--forest)" }}>Massive impact.</span>
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
              {[
                { emoji: "🥗", title: "Nutrition", items: ["Low Glycemic Index", "Rich in dietary fibre", "Natural antioxidants", "Iron & calcium rich"] },
                { emoji: "🌍", title: "Environment", items: ["6× less water than sugarcane", "Climate-resilient crop", "Lower carbon footprint", "Improves soil health"] },
                { emoji: "👩‍🌾", title: "Farmer Impact", items: ["Better income stability", "Growing market demand", "Drought-resistant cultivation", "Future-ready agriculture"] },
              ].map(({ emoji, title, items }, i) => (
                <FadeUp key={title} delay={i * 0.1}>
                  <div style={{ border: "1px solid var(--ink12)", borderRadius: 24, padding: "40px 36px", background: "white", transition: "all 0.25s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sage)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(45,90,27,0.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink12)"; (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
                    <span style={{ fontSize: 32, display: "block", marginBottom: 20 }}>{emoji}</span>
                    <h3 className="display" style={{ fontSize: 24, marginBottom: 24, color: "var(--ink)" }}>{title}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                      {items.map(item => (
                        <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--ink60)", fontWeight: 300 }}>
                          <Minus size={12} color="var(--sage)" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Comparison table */}
            <FadeUp delay={0.2}>
              <div style={{ border: "1px solid var(--ink12)", borderRadius: 24, overflow: "hidden", background: "white" }}>
                <div style={{ padding: "28px 36px", borderBottom: "1px solid var(--ink12)", background: "var(--parch)" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", textAlign: "center" }}>
                    Millets vs Traditional Sugar Sources
                  </h3>
                </div>
                <table className="cmp" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--ink12)" }}>
                      <th style={{ padding: "14px 20px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink35)", textAlign: "left" }}>Category</th>
                      <th style={{ padding: "14px 20px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink35)" }}>Traditional Sugar</th>
                      <th style={{ padding: "14px 20px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--forest)" }}>Millet-Based ✓</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Water Usage", "~2000L/kg", "~300L/kg"],
                      ["Glycemic Impact", "High (GI 65+)", "Low (GI 50–54)"],
                      ["Carbon Footprint", "High", "Minimal"],
                      ["Farmer Economics", "Volatile", "Stable & rising"],
                      ["Nutritional Value", "Empty calories", "Fibre, minerals"],
                    ].map(([cat, bad, good]) => (
                      <tr key={cat} style={{ borderBottom: "1px solid var(--ink06)" }}>
                        <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 500, color: "var(--ink)", textAlign: "left" }}>{cat}</td>
                        <td style={{ padding: "14px 20px", fontSize: 14, color: "var(--ink35)", fontWeight: 300 }}>{bad}</td>
                        <td style={{ padding: "14px 20px", fontSize: 14, color: "var(--forest)", fontWeight: 500 }}>{good}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            IMPACT STATS
        ═══════════════════════════════════════ */}
        <section id="impact" style={{ background: "var(--forest)", padding: "100px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Our Impact</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", color: "white", marginBottom: 72, maxWidth: 500 }}>
                Creating value for<br />people & planet
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }}>
              {[
                { stat: "3", unit: "States", desc: "Millet sourcing network across Telangana, Karnataka & Maharashtra" },
                { stat: "100+", unit: "Farmers", desc: "Smallholders in our direct value chain with better income outcomes" },
                { stat: "6×", unit: "Water Saved", desc: "Less water per kg compared to conventional sugarcane cultivation" },
                { stat: "2024", unit: "SDG Award", desc: "Recognised for contributions to UN Sustainable Development Goals" },
              ].map(({ stat, unit, desc }, i) => (
                <FadeUp key={unit} delay={i * 0.1}>
                  <div style={{ background: "var(--forest)", padding: "48px 36px" }}>
                    <div className="display" style={{ fontSize: 52, color: "white", lineHeight: 1 }}>{stat}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 4, marginBottom: 16 }}>{unit}</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontWeight: 300 }}>{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOUNDERS
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--page)", padding: "120px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Leadership</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 72 }}>Meet the Founders</h2>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
              {[
                { img: "/images/srikanth.jpg", name: "Srikanth Vadikicharla", role: "Founder & CEO", bio: "Biochemist and sustainability innovator focused on unlocking the potential of millets through food technology and climate-smart agriculture." },
                { img: "/images/nishanth.jpeg", name: "Nishanth Vadikicharla", role: "Founder & COO", bio: "Driving operations, execution, and growth — scaling sustainable food innovation from concept to market." },
              ].map(({ img, name, role, bio }, i) => (
                <FadeUp key={name} delay={i * 0.15}>
                  <div style={{ border: "1px solid var(--ink12)", borderRadius: 24, overflow: "hidden", background: "white", transition: "all 0.25s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.transform = ""; }}>
                    <div style={{ background: "var(--parch)", height: 180, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                      <img src={img} alt={name} style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "4px solid white", position: "absolute", bottom: -20, zIndex: 1 }} />
                    </div>
                    <div style={{ padding: "40px 36px 40px", textAlign: "center" }}>
                      <h3 className="display" style={{ fontSize: 22, color: "var(--ink)", marginBottom: 6 }}>{name}</h3>
                      <p className="eyebrow" style={{ marginBottom: 16, color: "var(--forest)" }}>{role}</p>
                      <p style={{ fontSize: 14, color: "var(--ink60)", lineHeight: 1.7, fontWeight: 300 }}>{bio}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ACHIEVEMENTS
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--parch)", padding: "120px 64px", borderTop: "1px solid var(--ink12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Recognition</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 72 }}>Building Momentum</h2>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { icon: "🏆", title: "Telangana Govt. Recognition", body: "Recognised by the Telangana government as an innovative food and agriculture technology startup.", year: "2023" },
                { icon: "🌍", title: "Global SDG Championship", body: "Awarded for sustainable solutions supporting UN goals on health, zero hunger, and climate action.", year: "2024" },
                { icon: "🚀", title: "ET Soonicorn Summit", body: "Selected among emerging impact-driven startups shaping the future of food across South Asia.", year: "2024" },
              ].map(({ icon, title, body, year }, i) => (
                <FadeUp key={title} delay={i * 0.1}>
                  <div style={{ background: "white", border: "1px solid var(--ink12)", borderRadius: 24, padding: "40px 36px", display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span style={{ fontSize: 28 }}>{icon}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "var(--ink35)", border: "1px solid var(--ink12)", padding: "4px 10px", borderRadius: 100 }}>{year}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "var(--ink60)", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TESTIMONIALS
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--page)", padding: "120px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Verified Reviews</p>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 72, maxWidth: 500 }}>
                What early customers say
              </h2>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { quote: "Finally a sugar alternative that actually works with tea without changing the taste completely.", name: "Priya S.", location: "Hyderabad" },
                { quote: "The farmer-first mission genuinely made me want to support this brand beyond just the product itself.", name: "Rahul K.", location: "Bengaluru" },
                { quote: "Clean branding, meaningful mission, and surprisingly good sweetness quality for daily coffee use.", name: "Ananya R.", location: "Chennai" },
              ].map(({ quote, name, location }, i) => (
                <FadeUp key={name} delay={i * 0.1}>
                  <div style={{ border: "1px solid var(--ink12)", borderRadius: 24, padding: "36px", background: "white" }}>
                    <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                      {"★★★★★".split("").map((s, j) => (
                        <span key={j} style={{ fontSize: 14, color: "var(--forest)" }}>{s}</span>
                      ))}
                    </div>
                    <p className="display-italic" style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.6, marginBottom: 28 }}>
                      "{quote}"
                    </p>
                    <div style={{ borderTop: "1px solid var(--ink06)", paddingTop: 20 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{name}</p>
                      <p style={{ fontSize: 12, color: "var(--ink35)", marginTop: 2 }}>{location}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════ */}
        <section style={{ background: "var(--parch)", padding: "80px 64px", borderTop: "1px solid var(--ink12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeUp>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 20 }}>Join the Millet Revolution</p>
                  <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 20 }}>
                    Smarter sweetness<br />
                    <span className="display-italic" style={{ color: "var(--forest)" }}>for a healthier future</span>
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink60)", fontWeight: 300, maxWidth: 400 }}>
                    Support climate-smart agriculture, healthier lifestyles, and sustainable farming — one bottle at a time.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
                  <a href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "var(--forest)", color: "white", padding: "18px 28px",
                      borderRadius: 16, fontSize: 15, fontWeight: 500, textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#3d7a24"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.transform = ""; }}>
                    <span>Buy Millet-Us on Amazon</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a href="https://wa.me/918328379902" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      border: "1px solid var(--ink12)", color: "var(--ink)", padding: "18px 28px",
                      borderRadius: 16, fontSize: 15, fontWeight: 400, textDecoration: "none",
                      background: "white", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink35)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink12)"; }}>
                    <span>💬 WhatsApp for enquiries</span>
                    <ArrowUpRight size={16} color="var(--ink60)" />
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════ */}
        <footer id="contact" style={{ background: "var(--ink)", color: "white", padding: "72px 64px 40px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 64 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Image src="/images/refarmsoil.png" alt="Refarmsoil" width={28} height={28} style={{ opacity: 0.8 }} />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500 }}>Refarmsoil</span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontWeight: 300, maxWidth: 260 }}>
                  Building climate-smart nutrition with millet-powered innovation for healthier people and sustainable farming.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Navigation</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Home", "Products", "Technology", "Contact"].map(item => (
                    <a key={item} href={`#${item.toLowerCase()}`}
                      style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", fontWeight: 300 }}
                      onMouseEnter={e => (e.currentTarget.style.color = "white")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Contact</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontWeight: 300, marginBottom: 8 }}>refarmsoil@gmail.com</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontWeight: 300, marginBottom: 20 }}>Karimnagar, Telangana, India</p>
                <a href="https://wa.me/918328379902" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--sage)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#a5cc82")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--sage)")}>
                  💬 WhatsApp Us <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>© 2025 Refarmsoil Agri-Food Technologies. All rights reserved.</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>Karimnagar · Telangana · India</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp FAB */}
        <a href="https://wa.me/918328379902" target="_blank" rel="noopener noreferrer"
          style={{
            position: "fixed", bottom: 28, right: 28,
            width: 52, height: 52, borderRadius: "50%",
            background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
            transition: "all 0.2s", textDecoration: "none", zIndex: 99,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
          💬
        </a>
        <RefarmsoilChatbot />


      </main>
    </>
  );
}
