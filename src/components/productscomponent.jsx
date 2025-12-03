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

        {/* LEFT IMAGE */}
        <motion.div
          className="w-full flex justify-center items-center px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teatreepatch}
            alt="Tea Tree Hydrocolloid Pimple Patch for Acne"
            className="w-full max-w-[450px] h-auto object-cover rounded-sm shadow-md"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 text-[#004e7a] lg:border-l-2 lg:pl-6 p-4">

          <h2 className="text-xl md:text-2xl font-semibold mb-1">Why Hydrocolloid?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Hydrocolloid is a medical-grade material that gently absorbs excess oil, pus, and 
            impurities from active breakouts. It creates a moist healing environment that helps 
            flatten pimples faster, prevents scarring, and keeps the spot protected from dirt, 
            bacteria, and touching. This is why hydrocolloid acne patches are recommended for 
            whiteheads, red bumps, and early-stage breakouts.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">Why Tea Tree?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Tea Tree is a natural antibacterial and anti-inflammatory ingredient that targets 
            pimple-causing bacteria, reduces redness, and calms irritated skin. When combined 
            with hydrocolloid technology, it helps extract impurities while preventing new acne 
            from forming — making it ideal for acne-prone and sensitive skin types.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">How It Heals Your Skin</h2>
          <p className="leading-relaxed text-sm md:text-base">
            SpotCureX patches pull out buildup from deep inside the pore, reduce swelling, and 
            protect the breakout from friction and bacteria. This speeds up the healing process, 
            prevents picking, and minimizes the chance of scarring or dark spots (PIH).
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1">Who Is It For?</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Perfect for whiteheads, clogged pores, red bumps, maskne, hormonal acne, and 
            sensitive skin. These patches are safe for teens, adults, and anyone who wants 
            gentle but effective acne care.
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">What Makes Ours Different</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Medical-grade, extra-thin hydrocolloid for invisible wear</li>
              <li>Infused with pure Tea Tree extract for enhanced healing</li>
              <li>Dermatologist-tested and safe for sensitive skin</li>
              <li>Strong adhesion — stays on all night and through sweat</li>
              <li>Helps reduce redness and prevents post-acne marks</li>
            </ul>
          </div>

          {/* BUY BUTTON */}
          <div className="pt-4">
            <a
              href="https://www.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#004e7a] text-white px-6 py-3 rounded-md shadow-md 
                         hover:bg-[#003d60] transition duration-300 text-sm md:text-base"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — UPCOMING PATCHES */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto px-2 max-w-7xl text-[#004e7a]">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
            Explore Our Upcoming Acne Patches
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">

            {[
              {
                name: "Hydrocolloid + Retinol",
                img: retinolpatch,
                desc: "Supports skin renewal, smooths texture, and helps fade stubborn bumps."
              },
              {
                name: "Hydrocolloid + Centella Asiatica",
                img: centellapatch,
                desc: "Calms irritated skin, reduces redness, and strengthens the skin barrier."
              },
              {
                name: "Hydrocolloid + Salicylic Acid",
                img: salicylicpatch,
                desc: "Deeply unclogs pores and targets active breakouts efficiently."
              },
              {
                name: "Hydrocolloid + Niacinamide",
                img: niacinamidepatch,
                desc: "Brightens dark spots and helps prevent post-acne hyperpigmentation."
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
