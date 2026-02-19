import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children = "Get Started",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black 
transition-all duration-300 ease-in-out 
hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white"

    >
      {/* Arrow circle */}
      <span className="w-10 h-10 -ml-2 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowRight className="transition-transform duration-300 group-hover:-rotate-45" />
      </span>

      {children}
    </button>
  );
};

export default Button;
