// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import women from "../assets/women.png";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import AboutComponent from "../components/aboutcomponent";
import ProductsComponents from "../components/productscomponent";
import Reviews from "../components/reviews";
import Faq from "../components/faqcomponent";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div className="w-full h-auto flex flex-col justify-between items-center bg-stone-200 font-roboto">

      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full relative flex flex-col md:flex-row items-center bg-stone-500">

        {/* Left Image - Static */}
        <div className="w-full md:w-1/2 min-h-[600px] relative">
          <img 
            src={women} 
            alt="women with pimple patches" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text - Animated */}
        <div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
          <motion.h1
            className="text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invisible Care, Visible Results
          </motion.h1>
          <motion.h2
            className="text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SpotCureX creates dermatologist-tested hydrocolloid acne patches designed to reduce redness, protect active breakouts, and visibly speed up healing. Our patches combine clean hydrocolloid technology with effective actives — like tea tree, retinol, salicylic acid, centella, and more — to support every stage of your skin’s healing journey. Invisible on the skin, powerful on blemishes, and gentle for everyday use.
          </motion.h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-stone-500">
        <Cards />
      </div>

      {/* About Section */}
      <div className="w-full">
        <AboutComponent />
      </div>

      {/* Products Section */}
      <div className="w-full">
        <ProductsComponents />
      </div>

      {/* Reviews Section */}
      <div className="w-full">
        <Reviews />
      </div>

      {/* FAQ Section */}
      <div className="w-full">
        <Faq />
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
