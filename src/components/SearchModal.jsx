import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/storeData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  const allProducts = Object.values(PRODUCTS);
  const filtered = query.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          (p.material && p.material.toLowerCase().includes(query.toLowerCase()))
      )
    : allProducts.slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white border border-[#E8E5DF] shadow-2xl p-6 sm:p-8 z-10"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center space-x-3 flex-1">
                <Search size={20} className="text-neutral-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search necklaces, rings, cuffs, earrings..."
                  className="w-full bg-transparent text-sm sm:text-base font-sans tracking-wide text-neutral-900 focus:outline-none placeholder-neutral-400"
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="p-1 text-neutral-400 hover:text-black transition-colors"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {/* Popular Tags */}
            <div className="py-4 flex items-center space-x-2 text-[11px] font-sans text-neutral-500 overflow-x-auto">
              <span className="uppercase tracking-wider text-neutral-400">Popular:</span>
              {['Rings', 'Wristwear', 'Earrings', 'Necklaces', 'Bronze', 'Topaz'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 transition-colors uppercase tracking-wider text-[10px]"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="mt-2 max-h-80 overflow-y-auto space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2">
                {query.trim() ? `Search Results (${filtered.length})` : 'Featured Objects'}
              </p>

              {filtered.length === 0 ? (
                <p className="text-xs font-sans text-neutral-500 py-6 text-center">
                  No objects found matching "{query}".
                </p>
              ) : (
                filtered.map((prod) => (
                  <motion.div
                    key={prod.id}
                    whileHover={{ x: 4 }}
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onClose();
                    }}
                    className="flex items-center space-x-4 p-2 hover:bg-neutral-50 transition-colors cursor-pointer border border-transparent hover:border-neutral-200"
                  >
                    <div className="w-14 h-14 bg-neutral-100 border border-neutral-200 overflow-hidden flex-shrink-0">
                      <img
                        src={prod.featuredImage}
                        alt={prod.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-serif font-medium text-neutral-900">
                        {prod.title}
                      </h4>
                      <p className="text-xs font-sans text-neutral-600">
                        {prod.priceFormatted}
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-neutral-400" />
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
