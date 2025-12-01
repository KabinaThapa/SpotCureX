import React from "react";
import { motion } from "framer-motion";

export default function MasonrySections() {
  const cards = [
    {
      title: "Clean Ingredients. Clear Skin.",
      desc: "Our hydrocolloid patches gently draw out impurities while remaining ultra-thin and invisible. Infused with tea tree extract, they reduce redness and calm irritated skin, helping pimples heal faster.",
      height: 400
    },
    {
      title: "A Patch With Purpose.",
      desc: "SpotCureX patches absorb excess oil and protect your skin from bacteria. They provide visible results overnight, making your skincare routine effortless and effective.",
      height: 300
    },
    {
      title: "For Breakouts That Need Love.",
      desc: "Designed for whiteheads, hidden pimples, and irritated bumps, these patches prevent picking and accelerate healing, keeping your skin smooth and blemish-free.",
      height: 715
    },
    {
      title: "Clean & Safe.",
      desc: "Made with minimal ingredients, our patches are dermatologist-tested, fragrance-free, vegan, and paraben-free. Suitable for all skin types, even sensitive skin.",
      height: 400
    },
    {
      title: "Clearer Skin Starts Here.",
      desc: "Experience the difference with SpotCureX. Calm, protect, and visibly shrink breakouts with our gentle, fast-acting patches.",
      cta: "Shop SpotCureX →",
      link: "https://www.yourlinkhere.com",
      height: 300
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center py-16 bg-stone-200">

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#004e7a] text-center mb-6 px-4">
        Why SpotCureX Works
      </h2>

      {/* DESCRIPTION */}
      <p className="text-base sm:text-lg text-[#004e7a] leading-relaxed max-w-3xl text-center px-6 mb-12">
        SpotCureX hydrocolloid acne patches are designed to reduce redness, calm irritated bumps,
        and protect active breakouts. Each patch is dermatologist-tested and made with clean ingredients.
      </p>

      {/* RESPONSIVE MASONRY */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto space-y-4">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid bg-stone-100 p-6 rounded-lg shadow-lg text-[#004e7a] flex flex-col justify-start"
            style={{ height: `${card.height}px` }}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{card.title}</h3>

            <p className="text-sm sm:text-base leading-relaxed mb-2">
              {card.desc}
            </p>

            {card.cta && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-[#004e7a] font-semibold hover:underline"
              >
                {card.cta}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
