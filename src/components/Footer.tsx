import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";
import { IconType } from "react-icons";
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
        
        {/* brand + newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Ganify.</h3>
          <p className="text-gray-400 mt-3 max-w-sm">
            Built for forward-thinking teams. Powered by ethical AI.
          </p>

          {/* newsletter */}
          <h4 className="mt-8 text-xl font-semibold">Newsletter</h4>

          <div className="mt-4 flex bg-white/10 rounded-full p-1 w-fit">
            <input
              placeholder="Email"
              className="bg-white/10 px-4 py-1 outline-none text-sm w-48"
            />
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
              Subscribe
            </button>
          </div>
        </div>

        {/* pages */}
        <div>
          <h4 className="text-gray-300 mb-4">PAGES</h4>
          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

     
         {/* social */}
<div>
  <h4 className="text-gray-300 mb-4">Social Media</h4>

  <div className="flex gap-4">
    {(
      [
        { icon: FaFacebookF, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
        { icon: FaInstagram, link: "#" },
        { icon: FaBehance, link: "#" },
      ] as { icon: IconType; link: string }[]
    ).map((item, i) => {
      const Icon = item.icon;

      return (
        <a
          key={i}
          href={item.link}
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-full
            bg-white/5
            text-gray-400
            border border-white/10
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500
            hover:text-white
            hover:scale-110
            hover:shadow-lg hover:shadow-blue-500/30
            transition-all duration-300 ease-out
          "
        >
            {/* <Icon size={16} /> */}
        </a>
      );
    })}
  </div>

  <p className="mt-6 text-gray-400">
    Email
    <br />
    support@onixtheme.com
  </p>
</div>
</div>
     

      {/* bottom */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-400 text-sm">
        © Copyright 2025 
      </div>
    </footer>
  );
}
