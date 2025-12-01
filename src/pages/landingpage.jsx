import React from 'react';
import { motion } from 'framer-motion';
import women from '../assets/women.png';
import Cards from '../components/cards';
import AboutComponent from '../components/aboutcomponent';
import ProductsComponents from '../components/productscomponent';
import Reviews from '../components/reviews';
import Navbar from '../components/navbar';
import Faq from '../components/faqcomponent';
import Footer from '../components/footer';

export default function LandingPage() {
  return (
    <div className="bg-stone-200 font-roboto w-full flex flex-col items-center">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full">
        {/* Hero container with fixed aspect ratio */}
        <div className="relative w-full h-[500px] md:h-[850px] overflow-hidden bg-stone-600">
          
          {/* Semi-transparent overlay for desktop */}
          <div className="hidden md:block absolute inset-0 bg-stone-900/40 z-10" />

          {/* IMAGE */}
          <div className="w-full h-full relative">
            <img
              src={women}
              alt="women with pimple patches"
              className="w-full h-full md:object-contain object-cover"
              width={1024} 
              height={1536} 
              loading="eager"
            />
          </div>

          {/* TEXT */}
          <div className="absolute inset-0 md:inset-auto md:top-[35%] md:left-[40%] md:w-1/2 flex flex-col justify-center text-white p-6 md:p-8 z-20">
            <motion.h1
              className="text-xl sm:text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Invisible Care, Visible Results
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-xl font-extralight leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SpotCureX creates dermatologist-tested hydrocolloid acne patches designed to reduce
              redness, protect active breakouts, and visibly speed up healing. Our patches combine 
              clean hydrocolloid technology with effective actives — like tea tree, retinol, 
              salicylic acid, centella, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* WHY SPOTCUREX WORKS */}
      <div className="w-full">
        <Cards />
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full">
        <AboutComponent />
      </div>

      {/* PRODUCTS */}
      <div className="w-full">
        <ProductsComponents />
      </div>

      {/* REVIEWS */}
      <div className="w-full">
        <Reviews />
      </div>

      {/* FAQ */}
      <div className="w-full">
        <Faq />
      </div>

      {/* FOOTER */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
