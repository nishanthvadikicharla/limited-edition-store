"use client";

import Image from "next/image";

export default function Products() {
  const amazonProductUrl = "https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP";

  return (
    <section className="bg-[#EFECE6] text-[#1C2B22] min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Image Showcase with Overlay */}
        <div className="lg:col-span-6 relative rounded-sm overflow-hidden min-h-[500px] flex items-center justify-center p-8 bg-[#D8D3C8]">
          {/* Background Dish Image */}
          <Image
            src="/images/products/millet-field.png"
            alt="Millet food background"
            fill
            className="object-cover opacity-90"
          />

          {/* Floating Text Overlay */}
          <div className="absolute top-12 left-10 text-white z-10">
            <h3 className="font-serif text-3xl md:text-4xl italic font-light drop-shadow-md">
              Nature’s <br />
              sweetness. <br />
              Reimagined.
            </h3>
          </div>

          {/* Center Product Bottle Showcase */}
          <div className="relative z-20 w-64 h-80 bg-[#1C2B22]/10 backdrop-blur-xs p-4 rounded-sm border border-white/20 shadow-2xl flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/products/millet-bottle.png"
                alt="Refarmsoil Millet-Us Bottle"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Details & Features */}
        <div className="lg:col-span-6 bg-[#EBE7DF] border border-[#D5CFC3] p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#8C8370] uppercase">
              OUR FLAGSHIP PRODUCT
            </span>

            <h2 className="font-serif text-5xl md:text-6xl text-[#1C2B22] mt-2 tracking-tight">
              Millet-Us
            </h2>

            <p className="text-xs font-bold tracking-[0.2em] text-[#1C2B22] uppercase mt-2">
              NATURE'S SWEETNESS. REIMAGINED.
            </p>

            <p className="text-sm text-[#5C5547] leading-relaxed mt-6 max-w-lg">
              Millet-Us is a low glycemic index, millet-based sweetener created to rethink the everyday sugar experience — starting with a crop that can support a more resilient food system.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-[#D5CFC3] py-6 mt-8 text-center">
              <div>
                <div className="h-4 w-4 mx-auto mb-2 text-[#8C8370]">◯</div>
                <span className="text-xs font-semibold text-[#1C2B22]">Low GI</span>
              </div>
              <div className="border-l border-r border-[#D5CFC3] px-2">
                <div className="h-4 w-4 mx-auto mb-2 text-[#8C8370]">◇</div>
                <span className="text-xs font-semibold text-[#1C2B22]">Millet powered</span>
              </div>
              <div>
                <div className="h-4 w-4 mx-auto mb-2 text-[#8C8370]">◇</div>
                <span className="text-xs font-semibold text-[#1C2B22]">No artificial additives</span>
              </div>
            </div>
          </div>

          {/* Pricing & Amazon Button */}
          <div className="mt-8 pt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-6">
              <span className="text-sm font-medium text-[#1C2B22]">320 ml</span>
              <span className="font-serif text-2xl font-bold text-[#1C2B22]">₹496</span>
            </div>

            <a
              href={amazonProductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1C2B22] text-[#EFECE6] px-6 py-3 text-xs font-medium hover:bg-[#2A3C31] transition-all shadow-md flex items-center gap-2"
            >
              Buy on Amazon now ↗
            </a>
          </div>

          <div className="mt-6">
            <a 
              href={amazonProductUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#8C8370] hover:text-[#1C2B22] transition-colors"
            >
              Explore the product platform on Amazon →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}