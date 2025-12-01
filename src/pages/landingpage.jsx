import women from '../assets/women.png';
import { motion } from "framer-motion";
import Cards from '../components/cards';
import AboutComponent from '../components/aboutcomponent';
import ProductsComponents from '../components/productscomponent';
import Reviews from '../components/reviews';
import Navbar from '../components/navbar';
import Faq from '../components/faqcomponent';
import Footer from '../components/footer';

export default function LandingPage() {
  return (
    <div className="bgbox w-full h-auto flex flex-col justify-between items-center bg-stone-200 font-roboto">
      
      {/* NAVBAR */}
      <div className='absolute w-full'>
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <div className="Header w-full flex relative bg-stone-500 h-screen">

        {/* Background overlay */}
        <div className='bg-stone-900 backdrop-blur-3xl opacity-50 absolute top-0 left-0 w-full h-full z-0'></div>

        {/* Left image */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <img
            src={women}
            alt='women with pimple patches'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        </div>

        {/* Right text */}
        <div className="w-1/2 h-full absolute top-1/2 left-[38%] transform -translate-y-1/2 flex flex-col justify-center p-4  text-white z-10">
          <motion.h1
            className="text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invisible Care, Visible Results
          </motion.h1>
          <h2 className="text-xl leading-relaxed">
            SpotCureX creates dermatologist-tested hydrocolloid acne patches designed to reduce redness, protect active breakouts, and visibly speed up healing. Our patches combine clean hydrocolloid technology with effective actives — like tea tree, retinol, salicylic acid, centella, and more — to support every stage of your skin’s healing journey.  
            Invisible on the skin, powerful on blemishes, and gentle for everyday use.
          </h2>
        </div>

      </div>

      {/* CARDS SECTION */}
      <div className="h-auto w-full bg-stone-500 relative">
        <div className='bg-stone-900 backdrop-blur-3xl opacity-50 w-full absolute top-0 h-[1137px]'></div>
        <Cards />
      </div>

      {/* ABOUT SECTION */}
      <div className="h-auto w-full">
        <AboutComponent />
      </div>

      {/* PRODUCTS SECTION */}
      <div className="h-auto w-full">
        <ProductsComponents />
      </div>

      {/* REVIEWS SECTION */}
      <div className="h-auto w-full">
        <Reviews />
      </div>

      {/* FAQ SECTION */}
      <div className="h-auto w-full">
        <Faq />
      </div>

      {/* FOOTER */}
      <div className="h-auto w-full">
        <Footer />
      </div>

    </div>
  );
}
