import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl mx-auto pt-16 sm:pt-24 pb-12 px-6 sm:px-12 text-center space-y-4"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400 block font-sans">
          The House &amp; Philosophy
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-light text-neutral-900 tracking-wide">
          The Origin of TORA &amp; TORY
        </h1>
        <p className="text-base sm:text-lg font-serif italic text-neutral-600 max-w-xl mx-auto leading-relaxed">
          “Build with purpose. Never accept normal simply because it’s familiar.”
        </p>
      </motion.div>

      {/* Main Narrative Sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 pb-24 space-y-20 sm:space-y-28">
        
        {/* Section 1: Inception */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="space-y-6 border-t border-[#E8E5DF] pt-12"
        >
          <div className="flex items-center space-x-3 text-neutral-400 text-xs font-sans uppercase tracking-[0.25em]">
            <span className="w-6 h-[1px] bg-neutral-400" />
            <span>Chapter I</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900">
            Inception: It Began With Frustration
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-sans text-neutral-700 leading-relaxed font-light">
            <p className="text-lg font-serif italic text-neutral-900">
              “Why are Indian Karigars globally unrecognized for their millennia of innovation and honed skill?”
            </p>
            <p>
              Why have centuries of coveted jewellers’ techniques been obliterated with industrial processes and isolated to the realm of <em>Le Joaillier &amp; Haute Joaillerie</em>, bound for extinction? Millennia of stone setting, hand engraving, and artisanal metallurgy were being reduced to machine-stamped uniformity.
            </p>
            <p>
              Where was the inclusivity and self-expression in pieces we adorn ourselves with every day? Why was jewellery segregated into strict categories for men and women, or locked away in safes to be opened once under a blue moon?
            </p>
            <p>
              TORA &amp; TORY questions materials, shuns norms, and challenges processes. We collaborate with worlds jewellery rarely eyes: architecture, geology, industrial engineering, sculpture, music, mineralogy, and fine craftsmanship. Creativity has never respected categories, and neither do we.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Conceptualisation */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="space-y-6 border-t border-[#E8E5DF] pt-12"
        >
          <div className="flex items-center space-x-3 text-neutral-400 text-xs font-sans uppercase tracking-[0.25em]">
            <span className="w-6 h-[1px] bg-neutral-400" />
            <span>Chapter II</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900">
            Conceptualisation: “Kya Tora Lagra Hai”
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-sans text-neutral-700 leading-relaxed font-light">
            <p>
              TORA &amp; TORY was born out of that frustration. Growing up in India, founder <strong>Jasmeet Raj Nagrath</strong>’s father would often look at him and say, <em>“Kya tora lagra hai.”</em> In Punjabi, <strong>TORA</strong> is far more than looking good. It’s presence. Unflinching confidence. Character. It’s an energy that doesn’t require external validation because it already knows its worth.
            </p>
            <p>
              Likewise, his mother would admire his sister and remark, <em>“Kudi tory lagrahi hai.”</em> <strong>TORY</strong> became its natural, poised counterpart. Together, TORA and TORY represent the masculine and feminine ends of the spectrum — not to divide them, but to celebrate everything in between.
            </p>
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border-l-2 border-neutral-900 p-6 my-4 italic font-serif text-lg text-neutral-900"
            >
              “Jewellery has never belonged to one gender, and neither do we. We don’t design for categories. We design for people drawn to the different, the craftsmanship, and the soul behind it.”
            </motion.div>
            <p>
              Every object carries how Jasmeet moves through the world: restless, particular, and unwilling to leave a piece alone until its balance feels inevitable. TORA &amp; TORY isn’t defined by a single aesthetic. It’s defined by unbound thinking and fearless curiosity.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Execution */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="space-y-6 border-t border-[#E8E5DF] pt-12"
        >
          <div className="flex items-center space-x-3 text-neutral-400 text-xs font-sans uppercase tracking-[0.25em]">
            <span className="w-6 h-[1px] bg-neutral-400" />
            <span>Chapter III</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900">
            Execution: Innovation as Discipline
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-sans text-neutral-700 leading-relaxed font-light">
            <p>
              We create jewellery the same way an inventor approaches an unsolved problem or a sculptor approaches raw stone. Every collection begins with an idea that refuses to let go and is shaped through relentless experimentation until every proportion, mechanism, and patina feels inevitable.
            </p>
            <p>
              To us, innovation isn’t a fleeting burst of inspiration; it is an uncompromising daily discipline. This philosophy is embodied in our signature <strong>Cliff Setting</strong> — a proprietary stone-setting technique engineered in-house where stones burst through angled metal rather than sit traditionally on top.
            </p>
          </div>

          {/* 3 Pillars Grid with Micro Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="border border-[#E8E5DF] p-6 space-y-2 text-center bg-white shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900 block">
                Millennia of Karigars
              </span>
              <p className="text-xs font-serif italic text-neutral-600">
                Honoring generational techniques passed through dynasties of Indian goldsmiths.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="border border-[#E8E5DF] p-6 space-y-2 text-center bg-white shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900 block">
                Demi-Fine Metal
              </span>
              <p className="text-xs font-serif italic text-neutral-600">
                Poured in proprietary bronze alloys with 24k gold bath immersion for permanence.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="border border-[#E8E5DF] p-6 space-y-2 text-center bg-white shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900 block">
                The Cliff Setting
              </span>
              <p className="text-xs font-serif italic text-neutral-600">
                Pioneering stone geometry pushing through sheer metal facets at engineered angles.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Closing Invitation */}
        <div className="text-center pt-12 space-y-4 border-t border-[#E8E5DF]">
          <h3 className="text-2xl font-serif font-normal text-neutral-900">
            Discover the Current Archive
          </h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-3.5 bg-neutral-900 text-white text-[11px] uppercase tracking-[0.22em] font-sans hover:bg-black transition-colors"
            >
              Explore Objects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 border border-neutral-900 text-neutral-900 text-[11px] uppercase tracking-[0.22em] font-sans hover:bg-neutral-50 transition-colors"
            >
              Contact Atelier
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
