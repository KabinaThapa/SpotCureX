import { motion } from "framer-motion";
import teatreepatch from '../assets/teatreee.png';
import retinolpatch from '../assets/retinol.png';
import salicylicpatch from '../assets/salicylic.png';
import niacinamidepatch from '../assets/niacinamide.png';
import centellapatch from '../assets/centella.png';

export default function ProductsComponents() {
  return (
    <div className="w-full bg-stone-200 p-4 md:p-12 font-roboto">

      {/* SECTION 1 */}
      <section className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 
      gap-10 py-6 md:py-20 bg-stone-100 items-center">

        {/* LEFT IMAGE — Fully responsive */}
        <motion.div
          className="w-full flex justify-center items-center px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teatreepatch}
            alt="Tea Tree Hydrocolloid Patch"
            className="w-full max-w-[450px] h-auto object-cover rounded-sm shadow-md"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 text-[#004e7a] lg:border-l-2 lg:pl-6 p-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Why Hydrocolloid?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Hydrocolloid works by absorbing excess oil, pus, and impurities from pimples 
            while creating a moist healing environment...
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">Why Tea Tree?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Tea tree is naturally antibacterial, reduces redness, and calms inflamed skin...
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">How It Heals Your Skin</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Our patches pull out impurities while protecting the spot...
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">Who Is It For?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Designed for whiteheads, hidden pimples, red bumps and sensitive skin...
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">What Makes Ours Different</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Thinner, stronger hydrocolloid</li>
              <li>Enhanced healing with pure tea tree extract</li>
              <li>Dermatologist-tested formula</li>
              <li>Stays on all night</li>
              <li>Safe for sensitive skin</li>
            </ul>
          </div>

          {/* ⭐ BUY ON AMAZON BUTTON (ADDED) */}
          <div className="pt-4">
            <a
              href="https://www.amazon.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#004e7a] text-white px-6 py-3 rounded-md shadow-md 
                         hover:bg-[#003d60] transition duration-300 text-sm md:text-base"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Upcoming Patches */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto px-2 max-w-7xl text-[#004e7a]">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
            Explore Our Upcoming Patches
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">

            {[
              {
                name: "Hydrocolloid + Retinol",
                img: retinolpatch,
                desc: "Accelerates skin renewal while soothing stubborn pimples."
              },
              {
                name: "Hydrocolloid + Centella Asiatica",
                img: centellapatch,
                desc: "Calms sensitive or irritated skin while reducing redness."
              },
              {
                name: "Hydrocolloid + Salicylic Acid",
                img: salicylicpatch,
                desc: "Targets clogged pores and deep acne effectively."
              },
              {
                name: "Hydrocolloid + Niacinamide",
                img: niacinamidepatch,
                desc: "Brightens dark spots and prevents post-acne marks."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full sm:h-96 md:h-[300px] lg:h-[400px] object-center object-cover"
                />
                <div className="h-40 p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
