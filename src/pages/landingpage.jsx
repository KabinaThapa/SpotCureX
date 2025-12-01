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
      <div className="w-full absolute top-0 z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="w-full relative flex bg-stone-500 h-screen">
        {/* Static dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-stone-900 opacity-50"></div>

        {/* IMAGE */}
        <div className="w-1/2 h-full">
          <img
            src={women}
            alt="women with pimple patches"
            className="w-full h-full object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 backdrop-blur-lg">
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SpotCureX creates dermatologist-tested hydrocolloid acne patches designed to reduce redness, protect active breakouts, and visibly speed up healing. Our patches combine clean hydrocolloid technology with effective actives — like tea tree, retinol, salicylic acid, centella, and more — to support every stage of your skin’s healing journey. Invisible on the skin, powerful on blemishes, and gentle for everyday use.
          </motion.h2>
        </div>
      </section>

      {/* Why SpotCureX Works Section (Masonry Cards) */}
     

      {/* CARDS SECTION */}
      <div className="w-full bg-stone-500 relative">
        <div className="absolute w-full h-[1137px] bg-stone-900 opacity-50 backdrop-blur-3xl"></div>
        <Cards />
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full">
        <AboutComponent />
      </div>

      {/* PRODUCTS SECTION */}
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
