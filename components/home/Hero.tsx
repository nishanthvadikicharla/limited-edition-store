"use client";

import Image from "next/image";

const AMAZON_URL = "https://www.amazon.in/s?k=Millet-Us+Sweetener";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image">
        <Image
          src="/images/hero/millet-field.png"
          sizes="100vw"
          alt="Millet field"
          fill
          priority
          className="hero-bg"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse-dot" />
          MILLET-POWERED FOOD ECOSYSTEM
        </div>

        <h1>
          The next generation <br />
          of food starts <br />
          <em>with the soil.</em>
        </h1>

        <p className="hero-copy">
          Refarmsoil is building a millet-powered food ecosystem that
          connects resilient agriculture, food science and higher-value
          ingredients.
        </p>

        <div className="hero-actions">
          <a
            href="https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            DISCOVER MILLET-US <span>↗</span>
          </a>

          {/* Plain anchor for same-page scroll — next/link is for route
              changes and can be unreliable for hash-only navigation when
              you're already on this page. */}
          <a href="#ecosystem" className="btn btn-secondary">
            EXPLORE REFARMSOIL <span>↓</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div>
          <span>01</span>
          <strong>Resilient crops</strong>
          <small>Millet-first agriculture</small>
        </div>

        <div>
          <span>02</span>
          <strong>Food science</strong>
          <small>Enzyme-enabled innovation</small>
        </div>

        <div>
          <span>03</span>
          <strong>Global opportunity</strong>
          <small>Ingredients beyond commodities</small>
        </div>
      </div>
    </section>
  );
}