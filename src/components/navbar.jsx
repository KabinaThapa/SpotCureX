import React from "react"
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className="p-10 font-extrabold font-roboto flex justify-between items-center text-white overflow-hidden w-full">
      
      {/* LOGO OR BRAND NAME */}
      <div className="flex items-center gap-2 relative z-10">
        <h1 className="text-4xl">SpotCureX.</h1>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-6 relative z-10 text-3xl">
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
  )
}
