import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner({ slide, onExplore }) {
  const { title, subtitle, subtext, buttonText, desktopImage, mobileImage, id } = slide;

  return (
    <section id={id} className="relative w-full overflow-hidden bg-[#141414] text-white">
      {/* Background Image Container with Slow Cinematic Drift */}
      <div className="relative w-full h-[78vh] sm:h-[86vh] lg:h-[93vh] min-h-[520px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileImage || desktopImage} />
            <img
              src={desktopImage}
              alt={title}
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] animate-ken-burns"
              loading="lazy"
            />
          </picture>
        </motion.div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35 pointer-events-none" />

        {/* Content Overlay with Staggered Entrance */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:pb-24 px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto space-y-4"
          >
            
            {/* Title with tracking reveal */}
            <motion.h2
              initial={{ letterSpacing: "0.15em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.25em", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light uppercase text-white drop-shadow-sm"
            >
              {title}
            </motion.h2>

            {/* Subtitle / Season / Mantra */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg font-serif italic text-white/90 tracking-wide font-light max-w-xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Additional context note */}
            {subtext && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-white/75 font-light max-w-md mx-auto"
              >
                {subtext}
              </motion.p>
            )}

            {/* CTA Button with Magnetic Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={onExplore}
                className="relative inline-block px-9 py-3.5 bg-white text-black text-[11px] sm:text-[12px] uppercase font-sans font-medium tracking-[0.25em] transition-all duration-500 hover:bg-black hover:text-white border border-white hover:border-white shadow-xl hover:shadow-2xl active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute inset-0 bg-neutral-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400 ease-out z-0" />
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
