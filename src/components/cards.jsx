// src/components/MasonrySections.jsx
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
    <div className="relative w-[90%] h-auto mx-auto mb-10 py-20 -mt-12 bg-stone-200">

      {/* SEO Title */}
      <h2 className="text-4xl font-bold text-center text-[#004e7a] mb-6 ">
        Why SpotCureX Works
      </h2>

      {/* SEO Paragraph */}
      <p className="text-lg text-[#004e7a] leading-relaxed max-w-3xl mx-auto mb-12 px-4">
        SpotCureX hydrocolloid acne patches are designed to reduce redness, calm irritated bumps, 
        and protect active breakouts. Each patch is dermatologist-tested and made with clean ingredients,
         helping your skin heal faster while remaining invisible. Perfect for whiteheads, hidden pimples,
          and sensitive skin, these patches deliver visible results without disrupting your day-to-day life.
      </p>

      {/* Masonry Container */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-[90%] mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`break-inside-avoid bg-stone-200 p-6 text-[#004e7a] rounded-sm shadow-lg border flex flex-col justify-center`}
            style={{ height: `${card.height}px` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg leading-relaxed">
              {card.desc}{" "}
              {card.cta && card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#004e7a] hover:text-blue-600 ml-1"
                >
                  {card.cta}
                </a>
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Hidden SEO content */}
      <p className="sr-only">
        SpotCureX acne patches include hydrocolloid, tea tree, retinol, salicylic acid, centella, and other skincare actives. Suitable for face and body blemishes, these patches reduce redness, prevent picking, and support healing. Perfect for all skin types and everyday use.
      </p>
    </div>
  );
}
