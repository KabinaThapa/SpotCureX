import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi'; // ← SHOP ICON

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full p-4 md:p-6 font-extrabold font-roboto flex justify-between items-center text-white z-50">
      
      {/* LOGO OR BRAND NAME */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl md:text-4xl">SpotCureX</h1>
      </div>

      {/* SOCIAL ICONS + SHOP */}
      <div className="flex items-center gap-2 sm:gap-6 text-sm md:text-2xl">

        {/* SHOP ICON */}
        <a
          href="https://www.amazon.com"  // ← replace with your shop url
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 flex items-center"
        >
          <FiShoppingBag />
        </a>

        <a 
          href="https://www.facebook.com/share/1HFSggKVtx/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70"
        >
          <FaFacebookF />
        </a>

        <a 
          href="https://www.tiktok.com/@spotcurex?_r=1&_t=ZT-91lOl3HJG85" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70"
        >
          <FaTiktok />
        </a>

        <a 
          href="https://www.instagram.com/spotcurex?igsh=NzQ3MjhuYWI1bzds&utm_source=qr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
