import women from'../assets/women.png'
import { motion } from "framer-motion"
import Cards from '../components/cards'
import AboutComponent from '../components/aboutcomponent';
import ProductsComponents from '../components/productscomponent';
import Reviews from '../components/reviews'
import Navbar from '../components/navbar';
import Faq from '../components/faqcomponent'
import Footer from '../components/footer'
export default function landingpage() {
  return (
  <div className="bgbox w-full h-auto flex flex-col justify-between items-center  bg-stone-200 font-roboto">
    <div className='absolute w-full'>
 <Navbar />
    </div>
    
    <div className="Header w-full flex relative bg-stone-500">
        
        <div className='bg-stone-900  backdrop-blur-3xl  opacity-50  w-full absolute h-screen'></div>
<div className="w-1/2 h-screen pt-16 ">
    <img src={women} alt='women with pimple patches' className='w-full h-full object-contain'/>
</div>
<div className=" flex flex-col justify-center w-1/2 h-auto absolute top-[45%] left-[38%] p-2 backdrop-blur-lg text-white">
 <motion.h1
            className="text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invisible Care, Visible Results
          </motion.h1>
           <h2 className="text-xl leading-relaxed z-10">
           SpotCureX creates dermatologist-tested hydrocolloid acne patches designed to reduce redness, protect active breakouts, and visibly speed up healing. Our patches combine clean hydrocolloid technology with effective actives — like tea tree, retinol, salicylic acid, centella, and more — to support every stage of your skin’s healing journey.  
Invisible on the skin, powerful on blemishes, and gentle for everyday use.

          </h2>
</div>

    </div>
    <div className="  h-auto w-full bg-stone-500 ">
       <div className='bg-stone-900  backdrop-blur-3xl  opacity-50 w-full absolute h-[1137px]'></div>
        <Cards/>

</div>
<div className="  h-auto w-full  ">
        <AboutComponent/>

</div>
<div className=" h-auto w-full ">
        <ProductsComponents/>

</div>
<div className=" h-auto w-full  ">
        <Reviews/>

</div>
<div className=" h-auto w-full b">
        <Faq/>

</div>
<div className=" h-auto w-full ">
        <Footer/>

</div>


    
  </div>
  );
}
