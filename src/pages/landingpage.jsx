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
      <section className="w-full md:h-[850px] h-[500px]  bg-stone-600 relative ">
        <div className='md:bg-stone-900/40 md:absolute md:w-full md:h-[850px]'></div>

        {/* IMAGE */}
       {/* IMAGE */}
<div className="md:w-1/2 w-full h-[500px] md:h-[850px] flex items-center justify-center overflow-hidden">
  <img
    width={800}
    height={800}
    src={women}
    alt="women with pimple patches"
    className="w-full h-full object-cover"
    loading="eager"
  />
</div>


        {/* TEXT */}
        <div className="absolute inset-0  md:inset-auto md:bg-transparent  bg-stone-900/40  md:top-[35%] md:left-[40%] md:w-1/2 flex flex-col justify-center text-white p-8 pt-28">
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
