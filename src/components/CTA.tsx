import React from "react";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* radial gradient background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-blue-600/30 blur-[140px] rounded-full" />
      </div>

      {/* circular lines effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-[900px] h-[900px] border border-white/40 rounded-full absolute left-1/2 -translate-x-1/2 top-20" />
        <div className="w-[700px] h-[700px] border border-white/30 rounded-full absolute left-1/2 -translate-x-1/2 top-40" />
        <div className="w-[500px] h-[500px] border border-white/20 rounded-full absolute left-1/2 -translate-x-1/2 top-60" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* heading */}
        <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
          Let’s Build Something
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Intelligent Together
          </span>
        </h2>

        {/* description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          From automation to innovation our cutting-edge AI solutions help
          businesses work smarter, move faster, and grow stronger.
        </p>

        {/* button */}
        <button className="mt-10 flex items-center gap-3 mx-auto px-7 py-3 ">
          <Button onClick={() => alert("clicked")}>
  Get Started
</Button>
        </button>
      </div>
    </section>
  );
}
