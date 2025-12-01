import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full p-4 sm:p-6 font-extrabold font-roboto flex justify-between items-center text-white  z-50">
      
      {/* LOGO OR BRAND NAME */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">SpotCureX.</h1>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl">
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
