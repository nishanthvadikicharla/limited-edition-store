"use client";

import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Technology from "@/components/home/Technology";
import About from "@/components/home/About";
import RefarmsoilSystem from "@/components/home/RefarmsoilSystem";

import Footer from "@/components/home/Footer";

export type TabType = "home" | "products" | "technology" | "about" | "contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <main className="min-h-screen bg-[#071A11] text-white">
      {/* Navbar with tab switching */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Show ONLY the selected tab content */}
      <div className="pt-20">
        {activeTab === "home" && <Hero setActiveTab={setActiveTab} />}
        {activeTab === "products" && <Products />}
        {activeTab === "technology" && <Technology />}
        {activeTab === "about" && <About />}
        {activeTab === "refarmsoilsystem" && <RefarmsoilSystem />}


      </div>

      {/* Footer remains visible on all tabs */}
      <Footer />
    </main>
  );
}