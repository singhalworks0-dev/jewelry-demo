import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/storeData';
import { Eye, ShoppingBag, Check } from 'lucide-react';

export default function ShopPage({ onSelectProduct, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');
  const [addedItemMap, setAddedItemMap] = useState({});

  const categories = ['ALL', 'RINGS', 'WRISTWEAR', 'EARRINGS', 'NECKLACES'];

  const allProducts = Object.values(PRODUCTS);

  // Filter
  const filtered = allProducts.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.category.toUpperCase() === activeCategory;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // default featured
  });

  const handleInstantAdd = (p, e) => {
    e.stopPropagation();
    onAddToCart(p);
    setAddedItemMap((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [p.id]: false }));
    }, 1800);
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1800px] mx-auto">
      
      {/* Editorial Header with subtle fade-down */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 block font-sans">
          The Demi-Fine Archive
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-neutral-900 tracking-wide">
          All Jewellery
        </h1>
        <p className="text-xs sm:text-sm font-sans text-neutral-500 tracking-wider font-light leading-relaxed">
          Crafted with Natural Gemstones and Proprietary Bronze. Every piece is produced in numbered, unhurried quantities.
        </p>
      </motion.div>

      {/* Filter and Sorting Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-[#E8E5DF] gap-4">
        
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-sans transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'text-neutral-900 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <span>{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right Sort Selector */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-sans hidden sm:inline">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-neutral-300 text-[11px] uppercase tracking-[0.16em] font-sans px-3 py-2 text-neutral-800 focus:outline-none focus:border-neutral-900"
          >
            <option value="featured">Featured Pieces</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Product Grid with Layout Animations */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        <AnimatePresence>
          {sorted.map((product) => {
            const secondImage = (product.images && product.images[1]) || product.featuredImage;
            const isAdded = addedItemMap[product.id];

            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProduct(product.id)}
                className="group cursor-pointer flex flex-col justify-between border border-transparent hover:border-[#E8E5DF] p-3 transition-all duration-300 bg-white"
              >
                {/* Image Container with Hover Swap */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-50 mb-4 border border-neutral-200/60">
                  <img
                    src={product.featuredImage}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />
                  <img
                    src={secondImage}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-1 text-[9px] uppercase tracking-[0.2em] font-sans text-neutral-800">
                    Limited Edition
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute bottom-2 inset-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product.id);
                      }}
                      className="flex-1 py-2 bg-white/95 text-neutral-900 text-[10px] uppercase tracking-[0.16em] font-sans hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center space-x-1 shadow"
                    >
                      <Eye size={12} />
                      <span>Quick View</span>
                    </button>
                    <button
                      onClick={(e) => handleInstantAdd(product, e)}
                      className="p-2 bg-neutral-900 text-white hover:bg-black transition-colors shadow active:scale-90"
                      aria-label="Add to cart"
                    >
                      {isAdded ? <Check size={14} className="text-emerald-400" /> : <ShoppingBag size={14} />}
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1 text-left">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-neutral-400 block">
                    {product.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-neutral-900 tracking-wide group-hover:underline">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-neutral-800 tracking-wider">
                    {product.priceFormatted}
                  </p>
                  <p className="text-[11px] font-serif italic text-neutral-500 line-clamp-1 pt-1">
                    {product.tagline}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Craftsmanship Assurance */}
      <div className="mt-20 py-12 border-t border-[#E8E5DF] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
            Proprietary Bronze
          </p>
          <p className="text-xs font-serif italic text-neutral-600">
            Specially alloyed in-house for warmth, heft, and enduring heirloom patina.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
            The Cliff Setting
          </p>
          <p className="text-xs font-serif italic text-neutral-600">
            Engineered so natural stones burst through the surface rather than sit on top.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
            Archived Whence Claimed
          </p>
          <p className="text-xs font-serif italic text-neutral-600">
            Each collection run is permanently retired once all editions are acquired.
          </p>
        </div>
      </div>

    </div>
  );
}
