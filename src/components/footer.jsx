import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-600 text-white py-12 px-6 font-roboto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Brand Info */}
        <div className="space-y-2  md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start">SpotCureX</h1>
          <p className="text-stone-100 max-w-sm text-sm md:text-base">
            Gentle, fast-acting hydrocolloid patches infused with natural ingredients. 
            Calm your skin, prevent picking, and heal breakouts — all invisibly.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-white  text-base md:text-2xl justify-center md:justify-start">
          <a href="https://www.instagram.com/spotcurex?igsh=NzQ3MjhuYWI1bzds&utm_source=qr"  target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1HFSggKVtx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@spotcurex?_r=1&_t=ZT-91lOl3HJG85" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-stone-100 text-sm md:text-base">
        &copy; {new Date().getFullYear()} SpotCureX. All rights reserved.
      </div>
    </footer>
  );
}
