"use client";

import { TabType } from "@/app/page";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-[#071A11]">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => setActiveTab("home")} 
          className="text-left font-serif text-2xl font-bold tracking-tight text-[#071A11]"
        >
          Refarmsoil
          <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-gray-500">
            Climate Smart Food
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => setActiveTab("home")}
            className={`transition-colors ${
              activeTab === "home" ? "text-[#071A11] font-bold border-b-2 border-[#071A11] pb-1" : "text-gray-600 hover:text-[#071A11]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`transition-colors ${
              activeTab === "products" ? "text-[#071A11] font-bold border-b-2 border-[#071A11] pb-1" : "text-gray-600 hover:text-[#071A11]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("technology")}
            className={`transition-colors ${
              activeTab === "technology" ? "text-[#071A11] font-bold border-b-2 border-[#071A11] pb-1" : "text-gray-600 hover:text-[#071A11]"
            }`}
          >
            Technology
          </button>
             <button
            onClick={() => setActiveTab("about")}
            className={`transition-colors ${
              activeTab === "products" ? "text-[#071A11] font-bold border-b-2 border-[#071A11] pb-1" : "text-gray-600 hover:text-[#071A11]"
            }`}
          >
            About
          </button>

              <button
            onClick={() => setActiveTab("refarmsoilsystem")}
            className={`transition-colors ${
              activeTab === "products" ? "text-[#071A11] font-bold border-b-2 border-[#071A11] pb-1" : "text-gray-600 hover:text-[#071A11]"
            }`}
          >
            RefarmsoilSystem
          </button>
        </nav>

        {/* Action Button */}
        <button
          onClick={() => setActiveTab("products")}
          className="rounded-full bg-[#071A11] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#143B27] transition-all"
        >
          Buy Now
        </button>

      </div>
    </header>
  );
}