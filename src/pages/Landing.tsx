import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutAI from "../components/AboutUs";
import Features from "../components/Features";

export default function Landing() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutAI />
      <Features />
    </div>
  );
}