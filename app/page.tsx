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
import Contact from "@/components/home/Contact";
import Ecosystem from "@/components/home/Ecosystem";
// TODO: re-add your Products/Millet-Us section import here once its crash
// is fixed, e.g.:
// import Products from "@/components/home/Products";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <main className="bg-[#F8F5EC]">
        <Navbar />
        <Hero />
        <Problemsolution />
        <Ecosystem />
        <Originstory />

        <Technology />

        {/* TODO: <Products /> was here before it started crashing — re-add
            once fixed, so the "Products" nav link (#products) has something
            to scroll to again */}

        <Awards />
        <CTA />
        <Reviews />

        <Founders />
        <Contact />
        <Footer />
      </main>
    </>
  );
}