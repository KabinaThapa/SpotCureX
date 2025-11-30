import React from "react";
import { motion } from "framer-motion";

export default function CustomerStories() {
  const stories = [
    {
      name: "Alex, 21",
      story:
        "For years I felt embarrassed waking up with sudden breakouts before events. SpotCureX patches became my emergency fix — they calm my skin overnight and help me feel confident again.",
    },
    {
      name: "Danny, 27",
      story:
        "I work long hours and stress causes hormonal acne. These patches healed my inflamed bumps faster than anything I've tried. Now it’s part of my night routine.",
    },
    {
      name: "Curtis, 24",
      story:
        "I love wearing makeup, but constant pimples made it hard. SpotCureX helped flatten spots so quickly I finally stopped picking my skin.",
    },
    {
      name: "Sofia, 19",
      story:
        "The patch blends so well that I even wear it to classes. It actually prevents me from touching my face, which changed EVERYTHING for my skin.",
    },
    {
      name: "Nancy, 29",
      story:
        "After trying expensive serums, I didn’t expect something so simple to work. Now I always keep a pack in my bag.",
    },
  ];

  return (
    <section
      className="w-full bg-stone-300 py-16 px-6 text-[#004e7a] font-roboto"
      aria-label="Customer Reviews"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">
          Real Stories. Real Skin. Real Confidence.
        </h2>
        <p className=" text-lg md:text-xl mb-12">
          Hear from our happy users who experienced clearer skin overnight.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className=" leading-relaxed">{item.story}</p>
            <p className="mt-4 font-semibold text-[#004e7a]">— {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
