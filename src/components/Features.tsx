import React from "react";
import { Cpu, ShieldCheck, Bot } from "lucide-react";

const Features = () => {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),black_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold">
          What Makes Our <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Different
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          From automation to innovation our cutting-edge AI solutions help
          businesses work smarter, move faster, and grow stronger.
        </p>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-16 items-start">

          {/* Feature 1 */}
          <FeatureCard
            icon={<Cpu size={40} />}
            title="Real-Time Processing"
            desc="Process data, generate insights, and respond instantly empowering your team to make decisions faster than ever."
          />

          {/* Feature 2 */}
          <FeatureCard
            icon={<Bot size={40} />}
            title="Human Level Understanding"
            desc="Process data, generate insights, and respond instantly empowering your team to make decisions faster than ever."
          />

          {/* Feature 3 */}
          <FeatureCard
            icon={<ShieldCheck size={40} />}
            title="Enterprise-Grade Security"
            desc="Process data, generate insights, and respond instantly empowering your team to make decisions faster than ever."
          />
        </div>

        
      </div>
    </section>
  );
};

export default Features;
const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="group flex flex-col items-center">

      {/* Icon Box */}
      <div className="w-24 h-24 rounded-2xl flex items-center justify-center
        bg-gradient-to-br from-blue-500/40 to-purple-500/40
        border border-blue-400
        shadow-[0_0_40px_rgba(59,130,246,0.2)]
        ">

        <div className="text-blue-400">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="mt-8 text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-gray-400 text-sm max-w-xs">{desc}</p>
    </div>
  );
};
