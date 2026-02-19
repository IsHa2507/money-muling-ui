import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold">Ganify.</h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pages</a>
          <a href="#" className="hover:text-white">Blog</a>
        </div>

        {/* Contact Button */}
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
          Contact
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
