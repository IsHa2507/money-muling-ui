import Lottie from "lottie-react";

type CardProps = {
  title: string;
  desc: string;
  large?: boolean;
  animationData?: any;
};

const Card = ({ title, desc, large, animationData }: CardProps) => {
  return (
    <div
      className={`
        p-8 rounded-2xl text-left
        bg-gradient-to-br from-white/5 to-white/0
        border border-white/10
        backdrop-blur
        transition duration-300 hover:-translate-y-2
        ${large ? "h-[280px]" : "h-[240px]"}
      `}
    >
      {animationData && (
        <div className="w-16 mb-4">
          <Lottie animationData={animationData} loop />
        </div>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-400 text-sm">{desc}</p>
    </div>
  );
};

export default Card;
