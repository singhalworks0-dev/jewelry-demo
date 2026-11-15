import React from 'react';
import { motion } from 'framer-motion';

export default function PageSwitcher({ currentPage, onNavigate }) {
  const basePages = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'gyre', label: 'Gyre' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Salon' },
  ];

  const pages = currentPage === 'product'
    ? [...basePages, { id: 'product', label: 'Product' }]
    : basePages;

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring', damping: 25 }}
        className="pointer-events-auto bg-white/90 backdrop-blur-md border border-[#E8E5DF] shadow-2xl rounded-full px-2 py-1.5 flex items-center space-x-1"
      >
        {pages.map((p) => {
          const isActive = currentPage === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onNavigate(p.id)}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans transition-colors ${
                isActive ? 'text-white font-medium' : 'text-neutral-600 hover:text-black'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFloatingPill"
                  className="absolute inset-0 bg-[#141414] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{p.label}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
