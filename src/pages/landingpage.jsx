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
      <section className="w-full flex flex-col md:flex-row bg-stone-600 pt-24 md:pt-32 pb-10 md:pb-0">

        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-80 md:h-screen flex items-center justify-center">
          <img
            src={women}
            alt="women with pimple patches"
            className="w-full h-full object-cover md:object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white px-6 sm:px-10 md:px-16 text-center md:text-left py-8 md:py-0">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invisible Care, Visible Results
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl leading-relaxed"
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
