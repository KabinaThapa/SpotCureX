import React from "react";
import { motion } from "framer-motion";

export default function MasonrySections() {
  return (
    <div className="relative border w-full flex flex-col items-center py-16 bg-stone-200">

      {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#004e7a] mb-4 px-4 text-center">
        Why SpotCureX Works
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-lg text-[#004e7a] leading-relaxed max-w-3xl px-6 mb-12 text-center">
        SpotCureX hydrocolloid acne patches are designed to reduce redness, calm irritated bumps,
        and protect active breakouts. Each patch is dermatologist-tested and made with clean ingredients.
      </p>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">

        {/* Column 1 — 2 stacked cards */}
        <motion.div
          className="bg-stone-100 p-6 rounded-sm shadow-md text-[#004e7a] flex flex-col justify-center min-h-[200px] md:min-h-[250px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Clean Ingredients. Clear Skin.</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Our hydrocolloid patches gently draw out impurities while remaining ultra-thin
            and invisible. Infused with tea tree extract, they reduce redness and calm
            irritated skin, helping pimples heal faster.
          </p>
        </motion.div>

        <motion.div
          className="bg-stone-100 p-6 rounded-sm shadow-md text-[#004e7a] flex flex-col justify-center min-h-[200px] md:min-h-[250px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">A Patch With Purpose.</h3>
          <p className="text-sm md:text-base leading-relaxed">
            SpotCureX patches absorb excess oil and protect your skin from bacteria.
            They provide visible results overnight, making your skincare routine effortless.
          </p>
        </motion.div>

        {/* Column 2 — Full height on lg, col-span on md */}
        <motion.div
          className="bg-stone-100 p-6 rounded-sm shadow-md text-[#004e7a] flex flex-col justify-center 
                     min-h-[220px] md:col-span-2 lg:col-span-1 lg:row-span-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">For Breakouts That Need Love.</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Designed for whiteheads, hidden pimples, and irritated bumps, these patches
            prevent picking and speed up healing.
          </p>
        </motion.div>

        {/* Column 3 — 2 stacked cards */}
        <motion.div
          className="bg-stone-100 p-6 rounded-sm shadow-md text-[#004e7a] flex flex-col justify-center min-h-[200px] md:min-h-[250px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Clean & Safe.</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Made with minimal ingredients — dermatologist-tested, fragrance-free, vegan,
            and paraben-free. Safe for sensitive skin.
          </p>
        </motion.div>

        <motion.div
          className="bg-stone-100 p-6 rounded-sm shadow-md text-[#004e7a] flex flex-col justify-center min-h-[200px] md:min-h-[250px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Clearer Skin Starts Here.</h3>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            Experience the difference with SpotCureX. Calm, protect, and visibly
            shrink breakouts with our gentle, fast-acting patches.
          </p>
          <a href="#" className="mt-2 text-[#004e7a] font-semibold hover:underline">
            Shop SpotCureX →
          </a>
        </motion.div>

      </div>
    </div>
  );
}
