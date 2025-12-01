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
   <section className="w-full md:h-[850px] h-[500px] bg-stone-600 relative flex justify-center items-center">
  
  {/* IMAGE */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <img
      src={women}
      alt="women with pimple patches"
      className="w-full h-full object-cover block"
      width={1200}
      height={1200}
      loading="eager"
      style={{ display: "block" }} // ensures no inline gap
    />
  </div>

  {/* OVERLAY */}
  <div className="absolute top-0 left-0 w-full h-full bg-stone-900/40 md:bg-transparent"></div>

  {/* TEXT */}
  <div className="relative z-10 md:absolute md:top-[35%] md:left-[40%] md:w-1/2 w-full px-8 pt-28 text-white flex flex-col justify-center text-center md:text-left">
    <motion.h1
      layout={false}
      className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Invisible Care, Visible Results
    </motion.h1>

    <motion.p
      layout={false}
      className="text-sm md:text-xl font-extralight leading-relaxed"
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
