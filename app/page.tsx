import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import SmoothScroll from "@/components/home/SmoothScroll";
import Technology from "@/components/home/Technology";
import Awards from "@/components/home/Awards";
import Impact from "@/components/home/Impact";
import CTA from "@/components/home/CTA";
import Reviews from "@/components/home/Reviews";
import Footer from "@/components/home/Footer";
import Vision from "@/components/home/Vision";
import Founders from "@/components/home/Founders";
import Problemsolution from "@/components/home/Problemsolution";
import Originstory from "@/components/home/Originstory";
import Marketopportunity from "@/components/home/Marketopportunity";
import WhyMillets from "@/components/home/WhyMillets";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <main className="bg-[#F8F5EC]">
        <Navbar />
        <Hero />
        <Problemsolution />
        <About />
        <Originstory />
        <WhyMillets />
        <Vision />
        <Technology />
        <Marketopportunity />
        <Awards />
        <Impact />
        <Reviews />
        <CTA />
        <Founders />
        
        <Footer />
      </main>
    </>
  );
}