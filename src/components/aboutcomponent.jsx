export default function AboutComponent() {
  return (
    <div className="w-full min-h-screen bg-stone-300 flex justify-center items-center   font-roboto ">
      
      {/* MAIN CONTENT */}
      <div className="relative bg-stone-300 w-full max-w-6xl p-4 md:p-6">

        {/* Responsive Title */}
        <h1 className="text-2xl lg:text-4xl md:text-3xl  font-semibold text-[#004e7a] mb-4 md:mb-6 text-center">
          Our Story
        </h1>
        
        {/* Responsive Text */}
        <p className="text-[#004e7a] leading-relaxed text-sm md:text-base lg:text-xl space-y-4">

          <span className="block mb-4">
            SpotCureX was created from something we all understand — the frustration of breakouts 
            that seem to choose the worst time to show up. Whether it’s a big day or just a regular 
            morning where you want to feel like yourself, a single pimple can throw everything off. 
            We’ve lived through that, and that’s where our story begins.
          </span>

          <span className="block mb-4">
            After years of dealing with stubborn breakouts, trying countless products, and wishing 
            for something simple but truly effective, we started building what would become our 
            first release: the SpotCureX Hydrocolloid Patch infused with Tea Tree. A gentle, clean 
            blend designed to absorb impurities, calm irritation, and protect your skin while it 
            heals — without the harshness or heavy routines.
          </span>

          <span className="block mb-4">
            We focused on what real people actually need: a patch that works overnight, feels 
            comfortable during the day, and fits into everyday life. No unrealistic promises — 
            just a product made to support your skin’s natural healing.
          </span>

          <span className="block mb-4">
            And this is only the beginning. While our Hydrocolloid + Tea Tree patch is our first 
            launch, we’re already working on a full collection inspired by skin needs we’ve seen 
            over and over again. Soon, you’ll see targeted patches featuring ingredients like 
            <strong> Salicylic Acid </strong> for deep exfoliation, 
            <strong> Retinol </strong> for stubborn spots, 
            <strong> Centella Asiatica </strong> for calming sensitive skin,  
            and other gentle-yet-effective blends — all designed to work with your skin, not 
            against it.
          </span>

          <span className="block">
            At SpotCureX, our mission is simple: skincare that’s honest, clean, and thoughtfully 
            made. Products that make breakouts less stressful and help you feel comfortable in 
            your own skin — one patch at a time.
          </span>

        </p>

      </div>
    </div>
  );
}
