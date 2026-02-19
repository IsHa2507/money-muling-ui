import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
     
    
      {/* 🌑 Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163, 195, 248, 0.25),black_60%)]"></div>

      {/* 🔵 Half Rings Bottom */}
      <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] border border-white/40 rounded-full"></div>

      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-white/30 rounded-full"></div>

      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),black_60%)]"></div>

      {/* Stars Effect */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-10 max-w-4xl">

        {/* Badge */}
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-400/20 text-sm text-blue-300">
          NEW — Start Your Journey with AI Technology
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Unlock Future with
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          From automation to innovation our cutting-edge AI solutions help
          businesses work smarter, move faster, and grow stronger.
        </p>

        {/* Button */}
       <button className="group mt-10 flex items-center gap-3 mx-auto px-6 py-3  ">
 <Button onClick={() => alert("clicked")}>
  Get Started
</Button>
</button>

{/* Bottom Trusted Text */}
        <div className="mt-20 text-gray-400 text-sm flex items-center justify-center gap-4">
          <div className="w-16 h-[1px] bg-white/20"></div>
          Trusted by 500+ companies worldwide
          <div className="w-16 h-[1px] bg-white/20"></div>
        </div>

      

      </div>
    </section>
  );
};

export default Hero;
