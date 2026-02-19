import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutAI from "../components/AboutUs";
import Features from "../components/Features";
import MoneyMulingFeatures from "../components/MoneyMulingFeatures";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutAI />
      <Features />
      <MoneyMulingFeatures />
      <CTA />
      <Footer />
    </div>
  );
}