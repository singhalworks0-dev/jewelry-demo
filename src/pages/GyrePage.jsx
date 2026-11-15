import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/storeData';
import { ArrowRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function GyrePage({ onSelectProduct, onAddToCart }) {
  const gyreProductIds = [
    'gulf-cuff',
    'le-morne-necklace',
    'shoal-ring',
    'rossby-collar',
    'isobar-ring',
    'breaker-ring'
  ];

  const gyreProducts = gyreProductIds.map((id) => PRODUCTS[id]).filter(Boolean);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Editorial Hero Banner with Cinematic Drift */}
      <div className="relative w-full h-[70vh] sm:h-[82vh] bg-black text-white overflow-hidden flex items-center justify-center">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2400&q=90"
          alt="The GYRE Collection"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 max-w-4xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-neutral-300 font-sans"
          >
            Spring / Summer 2026 Archive
          </motion.span>
          <motion.h1
            initial={{ letterSpacing: "0.15em", opacity: 0 }}
            animate={{ letterSpacing: "0.25em", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-light uppercase text-white"
          >
            THE GYRE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl font-serif italic text-neutral-200 max-w-xl mx-auto leading-relaxed"
          >
            “Every collection is archived whence claimed, never to be remade.”
          </motion.p>
        </div>
      </div>

      {/* Curatorial Essay */}
      <div className="max-w-4xl mx-auto py-16 sm:py-24 px-6 sm:px-12 space-y-16">
        
        {/* Abstract */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block font-sans">
            Curatorial Essay
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-neutral-900 leading-snug">
            Planetary Currents Frozen in Proprietary Bronze
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            An oceanic gyre is a colossal system of circulating ocean currents, driven by planetary wind patterns and Earth’s rotation. It is immense yet invisible, terrifying yet tranquil.
          </p>
        </motion.div>

        {/* 2-Column Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 text-sm font-sans text-neutral-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-4"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-900">
              01 / The Metallurgy of Turbulence
            </h3>
            <p>
              In *GYRE*, founder and creative head <strong>Jasmeet Raj Nagrath</strong> translates the chaotic fluid mechanics of deep water vortexes into wearable metal sculptures. Rather than polishing away the crucible’s tension, each cuff and ring retains molten textures, sharp tectonic breaks, and the marks of Indian karigars who shape metal without industrial compromise.
            </p>
            <p className="text-neutral-500 text-xs italic">
              "We refused to treat jewellery as static ornamentation. A piece should feel like an artifact excavated from an oceanic trench."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-900">
              02 / The Patented Cliff Setting
            </h3>
            <p>
              Debuting exclusively in this collection is our signature <strong>Cliff Setting</strong>. For centuries, traditional jewellery mounts have elevated gemstones on symmetrical prongs or bezel cradles. The Cliff Setting completely inverts this convention: stones are engineered to burst through the sheared bronze wall at acute angles, evoking rocks jutting through stormy swells.
            </p>
            <p className="text-neutral-500 text-xs italic">
              "Creativity has never respected categories. Architecture, mineralogy, and metallurgy are all one conversation."
            </p>
          </motion.div>
        </div>

        {/* Technical Diagram Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#141414] text-white p-8 sm:p-12 space-y-6 text-center shadow-2xl"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block font-sans">
            Technical Specification
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-light">
            The Cliff Setting Innovation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs font-sans text-neutral-300">
            <div className="space-y-2">
              <span className="text-white text-sm font-semibold block">45° Shear Angle</span>
              <p className="text-[11px] text-neutral-400">Gemstones lock into the bronze matrix through internal tension channels.</p>
            </div>
            <div className="space-y-2">
              <span className="text-white text-sm font-semibold block">Natural Cognac Topaz</span>
              <p className="text-[11px] text-neutral-400">Raw, untreated stones chosen for optical inclusions and organic depth.</p>
            </div>
            <div className="space-y-2">
              <span className="text-white text-sm font-semibold block">Numbered Archive</span>
              <p className="text-[11px] text-neutral-400">Each piece is individually registered and stamped with its foundry serial.</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* The Pieces of the Gyre Collection */}
      <section className="border-t border-[#E8E5DF] py-16 sm:py-24 px-6 sm:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1 font-sans">
              Collection Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900 tracking-wide">
              The GYRE Objects
            </h2>
          </div>
          <p className="text-xs font-sans tracking-wider text-neutral-500 mt-2 md:mt-0">
            Limited to single-edition foundry batches
          </p>
        </div>

        {/* Portfolio Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gyreProducts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectProduct(p.id)}
              className="group cursor-pointer border border-[#E8E5DF] p-4 transition-all duration-300 hover:shadow-xl bg-white"
            >
              <div className="aspect-square w-full overflow-hidden bg-neutral-50 mb-4 border border-neutral-200/60">
                <img
                  src={p.featuredImage}
                  alt={p.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-neutral-400">
                  {p.category}
                </span>
                <h4 className="text-lg font-serif font-medium text-neutral-900 group-hover:underline">
                  {p.title}
                </h4>
                <p className="text-xs font-sans text-neutral-800 tracking-wider">
                  {p.priceFormatted}
                </p>
                <p className="text-xs font-serif italic text-neutral-500 pt-1">
                  "{p.tagline}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-neutral-500 group-hover:text-black">
                  View Specifications
                </span>
                <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
