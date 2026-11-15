import React from 'react';
import HeroBanner from '../components/HeroBanner';
import LookbookGrid from '../components/LookbookGrid';
import PhilosophySection from '../components/PhilosophySection';
import { HERO_SLIDES } from '../data/storeData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage({ onNavigate, onSelectProduct, onAddToCart }) {
  return (
    <div>
      {/* 1. Hero 1: GYRE S/S 2026 */}
      <HeroBanner
        slide={HERO_SLIDES[0]}
        onExplore={() => {
          const el = document.getElementById('lookbook');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Interactive Lookbook Grid */}
      <LookbookGrid
        onSelectProduct={onSelectProduct}
        onAddToCart={onAddToCart}
      />

      {/* Editorial Navigation Banner to GYRE Story */}
      <div className="bg-neutral-900 text-white py-12 px-6 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block font-sans">
            Limited Production Archive
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif tracking-wide font-light">
            Every collection is archived whence claimed, never to be remade.
          </h3>
          <button
            onClick={() => onNavigate('gyre')}
            className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] border-b border-white/60 pb-1 hover:border-white transition-all pt-2"
          >
            <span>Read The GYRE Monograph</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* 3. Hero 2: WRISTWEAR */}
      <HeroBanner
        slide={HERO_SLIDES[1]}
        onExplore={() => {
          onNavigate('shop');
        }}
      />

      {/* 4. Hero 3: EARRINGS */}
      <HeroBanner
        slide={HERO_SLIDES[2]}
        onExplore={() => {
          onNavigate('shop');
        }}
      />

      {/* 5. Hero 4: RINGS */}
      <HeroBanner
        slide={HERO_SLIDES[3]}
        onExplore={() => {
          onNavigate('shop');
        }}
      />

      {/* 6. Philosophy & Manifesto */}
      <PhilosophySection />

      {/* Founder & House Invitation CTA */}
      <section className="bg-white py-20 px-6 sm:px-12 border-t border-[#E8E5DF] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block font-sans">
            House of TORA &amp; TORY
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-light text-neutral-900">
            “Kya Tora Lagra Hai.”
          </h3>
          <p className="text-sm font-serif italic text-neutral-600 max-w-xl mx-auto leading-relaxed">
            In Punjabi, TORA is more than looking good. It’s presence. Confidence. Character.
            Together with TORY, it celebrates the entire spectrum of self-expression.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-neutral-900 text-white text-[11px] uppercase tracking-[0.22em] font-sans hover:bg-black transition-colors"
            >
              The Story of the House
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-white border border-neutral-900 text-neutral-900 text-[11px] uppercase tracking-[0.22em] font-sans hover:bg-neutral-50 transition-colors"
            >
              Book a Private Salon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
