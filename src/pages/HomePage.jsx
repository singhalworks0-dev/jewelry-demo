import React from 'react';
import HeroBanner from '../components/HeroBanner';
import LookbookGrid from '../components/LookbookGrid';
import PhilosophySection from '../components/PhilosophySection';
import { HERO_SLIDES } from '../data/storeData';

export default function HomePage({ onNavigate, onSelectProduct, onAddToCart }) {
  return <div className="reference-home">
    <HeroBanner slide={HERO_SLIDES[0]} onExplore={() => onNavigate('gyre')} />
    <LookbookGrid onSelectProduct={onSelectProduct} onAddToCart={onAddToCart} />
    {HERO_SLIDES.slice(1).map(slide => <HeroBanner key={slide.id} slide={slide} onExplore={() => onNavigate('shop', slide.title)} />)}
    <PhilosophySection />
  </div>;
}
