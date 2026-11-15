import React from 'react';
import { PHILOSOPHY_QUOTES } from '../data/storeData';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full bg-white py-20 sm:py-32 px-6 sm:px-12 border-t border-[#E8E5DF]">
      <div className="max-w-4xl mx-auto space-y-24 sm:space-y-36">
        
        {/* Quote 1: Frustration */}
        <div className="text-center">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-4">
            Origin
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-neutral-900 tracking-wide leading-tight italic">
            “{PHILOSOPHY_QUOTES[0].text}”
          </h3>
        </div>

        {/* Delicate divider */}
        <div className="w-12 h-[1px] bg-neutral-300 mx-auto" />

        {/* 3 Provocations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 text-center">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block font-sans">
              I. Millennia of Craft
            </span>
            <p className="text-lg sm:text-xl font-serif font-normal text-neutral-800 leading-relaxed">
              {PHILOSOPHY_QUOTES[1].text}
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block font-sans">
              II. Gender Fluidity
            </span>
            <p className="text-lg sm:text-xl font-serif font-normal text-neutral-800 leading-relaxed">
              {PHILOSOPHY_QUOTES[2].text}
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block font-sans">
              III. Lost Techniques
            </span>
            <p className="text-lg sm:text-xl font-serif font-normal text-neutral-800 leading-relaxed">
              {PHILOSOPHY_QUOTES[3].text}
            </p>
          </div>

        </div>

        {/* Delicate divider */}
        <div className="w-12 h-[1px] bg-neutral-300 mx-auto" />

        {/* Manifesto Block */}
        <div className="text-center max-w-3xl mx-auto space-y-8 bg-white p-8 sm:p-14 border border-[#ECE8E1] shadow-xs">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] font-sans font-medium text-neutral-500 block">
            The Atelier Manifesto
          </span>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-neutral-800 leading-relaxed">
            {PHILOSOPHY_QUOTES[4].text}
          </p>

          <div className="pt-4 flex items-center justify-center space-x-6 text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-600">
            <span>Natural Gemstones</span>
            <span>•</span>
            <span>Proprietary Bronze</span>
            <span>•</span>
            <span>Made In India</span>
          </div>
        </div>

      </div>
    </section>
  );
}
