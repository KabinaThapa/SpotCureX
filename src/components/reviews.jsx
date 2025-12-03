import React from "react";
import { motion } from "framer-motion";

export default function CustomerStories() {
   const stories = [
    {
      name: "Alex, 21",
      story:
        "I struggled with sudden whiteheads before events and it always ruined my confidence. After trying SpotCureX hydrocolloid acne patches, I finally found something that works overnight. They reduce redness, flatten pimples fast, and help my skin look clear in the morning."
    },
    {
      name: "Danny, 27",
      story:
        "Stress from long work hours always triggered breakouts for me. These SpotCureX pimple patches calm inflammation within hours and speed up healing. They’ve become my go-to solution for hormonal acne and irritated bumps."
    },
    {
      name: "Curtis, 24",
      story:
        "Makeup never sat well on top of acne and it made me insecure. SpotCureX patches helped shrink my pimples so quickly that I stopped picking my skin. They protect the breakout, heal it faster, and blend perfectly under makeup."
    },
    {
      name: "Sofia, 19",
      story:
        "These are the only acne patches I feel comfortable wearing in public. They're thin, invisible, and prevent me from touching my face during classes. My skin cleared up so much just from using SpotCureX consistently."
    },
    {
      name: "Nancy, 29",
      story:
        "I spent so much money on expensive serums that barely helped my breakouts. SpotCureX hydrocolloid patches gave me real results—reduced swelling, less redness, and faster healing. Now I always keep them in my bag."
    }
  ];


  return (
    <section
      className="w-full bg-stone-300 py-14 px-6 text-[#004e7a] font-roboto"
      aria-label="Customer Reviews"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-1" >
          Real Stories. Real Skin. Real Confidence.
        </h2>
        <p className=" text-base md:text-xl mb-12">
          Hear from our happy users who experienced clearer skin overnight.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-sm shadow-md  hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className=" text-sm md:text-base leading-relaxed">{item.story}</p>
            <p className="mt-4 font-semibold text-[#004e7a]">— {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
