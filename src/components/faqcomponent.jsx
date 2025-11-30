import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do SpotCureX patches work?",
      answer:
        "Our hydrocolloid patches absorb excess oil, pus, and impurities from pimples while creating a moist healing environment. Combined with tea tree or other active ingredients, they help your skin heal faster and calmer.",
    },
    {
      question: "Can I wear the patches during the day?",
      answer:
        "Yes! The patches are ultra-thin, transparent, and invisible on the skin. You can wear them while working, attending classes, or even applying light makeup over them.",
    },
    {
      question: "Are SpotCureX patches safe for sensitive skin?",
      answer:
        "Absolutely. Our patches are dermatologically tested, fragrance-free, and safe for sensitive skin. Ingredients are clean and gentle.",
    },
    {
      question: "How long should I leave the patch on?",
      answer:
        "For best results, keep the patch on overnight or for at least 6–8 hours. The patch will absorb impurities and flatten the pimple during this time.",
    },
    {
      question: "Can I use multiple patches at once?",
      answer:
        "Yes. You can use multiple patches on different spots, just make sure each patch adheres well to clean, dry skin.",
    },
    {
      question: "Do the patches leave a mark after removal?",
      answer:
        "No, the patches are gentle and should not leave marks. They may, however, remove impurities from the pimple itself, which is a normal part of healing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-6 text-[#004e7a]" aria-label="Frequently Asked Questions font-roboto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">
          Frequently Asked Questions
        </h2>
        <p className=" text-lg">
          Find answers to common questions about SpotCureX patches and how they work.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg md:text-xl font-semibold text-[#004e7a]">{faq.question}</span>
              <span className="text-2xl font-bold">{openIndex === index ? "-" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-700 leading-relaxed"
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
