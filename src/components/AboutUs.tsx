import React from "react";
import { ArrowRight } from "lucide-react";
import Card from "./Card"; 
import Button from "./ui/Button";
import animationData from "../assets/jsonfiles/brainstorm.json";
// import fraudAnimation from "@/assets/fraud.json";

const AboutAI = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),black_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold">
          Built Intelligence Inside <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our AI Capabilities
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          From automation to innovation our cutting-edge AI solutions help
          businesses work smarter, move faster, and grow stronger.
        </p>

        {/* ===== GRID ===== */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* TOP ROW — 3 cards */}
          <div className="md:col-span-4">
            <Card
              title="Explainable AI"
              desc="Our transparent models offer insights into how decisions are made giving your workflows control and accountability."
              animationData={animationData}
            />
          </div>

          <div className="md:col-span-4">
            <Card
              title="Seamless Integration"
              desc="Easily connects with your existing tools and platforms with no complex setup."
            />
          </div>

          <div className="md:col-span-4">
            <Card
              title="Actionable Analytics"
              desc="Turn raw data into clear, visualized metrics and trends backed by AI-driven insights."
            />
          </div>

          {/* BOTTOM ROW — 2 centered cards */}
          <div className="md:col-span-4 md:col-start-3">
            <Card
              title="Scalable AI Infrastructure"
              desc="Break language barriers with AI that understands and responds in 50+ languages."
              large
            />
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <Card
              title="AI-Powered Workflow Automation"
              desc="Eliminates repetitive tasks by intelligently managing complex business processes."
              large
            />
          </div>
        </div>

        {/* CTA Button */}
        <button className="group mt-16 mx-auto flex items-center gap-3 px-6 py-3 ">
          <Button onClick={() => alert("clicked")}>
  Get Started
</Button>
          
        </button>
      </div>
    </section>
  );
};

export default AboutAI;
