import { motion } from "framer-motion";
import teatreepatch from '../assets/teatreepatch.png';
import retinolpatch from '../assets/retinolpatch.png';
import salicylicpatch from '../assets/salicylicpatch.png'
import niacinamidepatch from '../assets/niacinamidepatch.png'
import centellapatch from '../assets/centellapatch.png'

export default function ProductsComponents() {
  return (
    <div className="w-full bg-stone-200 p-4 sm:p-6 md:p-8 font-roboto">

      {/* SECTION 1 — Hydrocolloid Patch with Split Background */}
      <section className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 sm:py-20 md:py-28 min-h-[700px] md:h-[900px]">

        {/* Background divs */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-stone-100 z-0"></div>
        <div className="absolute top-0 right-0 hidden md:block w-1/2 h-full bg-stone-100 z-0"></div>

        {/* LEFT — Sticky image with animation */}
        <motion.div
          className="md:sticky md:top-20 h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center z-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teatreepatch}
            alt="Tea Tree Hydrocolloid Patch"
            className="w-full max-w-xs sm:max-w-md object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        {/* RIGHT — Scrollable content */}
        <div className="space-y-6 p-4 sm:p-6 md:p-6 relative z-10 text-[#004e7a] border-l md:border-l">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">Why Hydrocolloid?</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Hydrocolloid works by absorbing excess oil, pus, and impurities from pimples 
              while creating a moist healing environment. It flattens whiteheads overnight, 
              prevents picking, and speeds up recovery.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">Why Tea Tree?</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Tea tree is naturally antibacterial, reduces redness, and calms inflamed skin. 
              Combined with hydrocolloid, it gives your breakout both healing and soothing benefits.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">How It Heals Your Skin</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Our patches pull out impurities while protecting the spot from dirt and touching—
              allowing your skin to heal faster and more cleanly.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">Who Is It For?</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Designed for whiteheads, hidden pimples, red bumps, sensitive skin, and anyone 
              trying to stop picking.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">What Makes Ours Different</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Thinner, stronger hydrocolloid</li>
              <li>Enhanced healing with pure tea tree extract</li>
              <li>Dermatologist-tested formula</li>
              <li>Stays on all night</li>
              <li>Safe for sensitive skin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Upcoming Patches */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto px-2 sm:px-4 max-w-7xl text-[#004e7a]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
            Explore Our Upcoming Patches
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6 w-full">
            {[
              {
                name: "Hydrocolloid + Retinol",
                img: retinolpatch,
                desc: "Accelerates skin renewal while soothing stubborn pimples. Retinol supports clearer, smoother skin overnight."
              },
              {
                name: "Hydrocolloid + Centella Asiatica",
                img: centellapatch,
                desc: "Calms sensitive or irritated skin while helping reduce redness and inflammation from breakouts."
              },
              {
                name: "Hydrocolloid + Salicylic Acid",
                img: salicylicpatch,
                desc: "Targets clogged pores and deep acne, helping prevent future breakouts while gently exfoliating skin."
              },
              {
                name: "Hydrocolloid + Niacinamide",
                img: niacinamidepatch,
                desc: "Brightens dark spots and prevents post-acne marks while supporting a healthy skin barrier."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover object-center border-b"
                />
                <div className="p-4 h-auto">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-[#004e7a] leading-relaxed text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
