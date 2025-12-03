import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
 const faqs = [
  {
    question: "How do SpotCureX patches work?",
    answer:
      "SpotCureX hydrocolloid acne patches absorb excess oil, pus, and bacteria from pimples while protecting the area from dirt and picking. The hydrocolloid creates a moist healing environment that speeds up recovery. Our Tea Tree formula adds natural antibacterial benefits to reduce redness and calm inflamed skin for faster results."
  },
  {
    question: "Can I wear the patches during the day?",
    answer:
      "Yes. SpotCureX patches are ultra-thin, transparent, and designed to blend seamlessly with your skin. They stay on comfortably throughout the day and can even be worn under makeup. Many users wear them at work, school, or while running errands."
  },
  {
    question: "Are SpotCureX patches safe for sensitive skin?",
    answer:
      "Absolutely. Our pimple patches are dermatologist-tested, fragrance-free, and suitable for sensitive skin types. We avoid harsh chemicals and only use clean, gentle ingredients, making them safe for daily use on acne-prone or reactive skin."
  },
  {
    question: "How long should I leave the patch on?",
    answer:
      "For best results, leave the patch on overnight or for at least 6–8 hours. During this time, the hydrocolloid draws out impurities and flattens the pimple. You’ll know it worked when the patch turns white from absorbed fluid."
  },
  {
    question: "Can I use multiple patches at once?",
    answer:
      "Yes, you can apply multiple patches on different breakouts at the same time. Just make sure your skin is clean and dry before applying so each patch sticks properly and delivers maximum absorption."
  },
  {
    question: "Do the patches leave marks after removal?",
    answer:
      "No. SpotCureX patches are gentle, non-irritating, and designed to peel off smoothly without leaving marks. They may lift out impurities from the breakout, which is normal and part of the healing process. They also help prevent dark spots by reducing picking."
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-6 text-[#004e7a]" aria-label="Frequently Asked Questions font-roboto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold  mb-4">
          Frequently Asked Questions
        </h2>
        <p className=" text-base md:text-lg">
          Find answers to common questions about SpotCureX patches and how they work.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-base md:text-xl font-semibold text-[#004e7a]">{faq.question}</span>
              <span className="text-md md:text-2xl font-semibold">{openIndex === index ? "-" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-sm md:text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
