import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOOKBOOK_ITEMS, PRODUCTS } from '../data/storeData';
import { ChevronLeft, ChevronRight, X, ShoppingBag } from 'lucide-react';

export default function LookbookGrid({ onSelectProduct, onAddToCart }) {
  const [activeSpot, setActiveSpot] = useState(null);
  const [carouselIndices, setCarouselIndices] = useState({});

  const handleSpotClick = (lookId, spotIndex, e) => {
    e.stopPropagation();
    if (activeSpot && activeSpot.lookId === lookId && activeSpot.spotIndex === spotIndex) {
      setActiveSpot(null);
    } else {
      setActiveSpot({ lookId, spotIndex });
    }
  };

  const handleNextImage = (cardKey, totalImages, e) => {
    e.stopPropagation();
    setCarouselIndices((prev) => ({
      ...prev,
      [cardKey]: ((prev[cardKey] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (cardKey, totalImages, e) => {
    e.stopPropagation();
    setCarouselIndices((prev) => ({
      ...prev,
      [cardKey]: ((prev[cardKey] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="lookbook" className="w-full bg-white py-12 sm:py-20">
      <div className="max-w-[2000px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 px-4 sm:px-2 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200/80 pb-4"
        >
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">
              GYRE S/S 2026
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif tracking-[0.1em] text-neutral-900">
              Interactive Lookbook
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-sans tracking-[0.1em] text-neutral-500 mt-2 md:mt-0">
            Click pulsing pins to discover crafted pieces
          </p>
        </motion.div>

        {/* 2-Column Grid Lookbook */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {LOOKBOOK_ITEMS.map((look, lookIdx) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (lookIdx % 2) * 0.15 }}
              className="relative overflow-hidden bg-neutral-100 group select-none shadow-xs hover:shadow-md transition-shadow duration-500"
            >
              {/* Lookbook Editorial Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={look.image}
                  alt={`Look ${look.id}`}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Hotspot Pins */}
                {look.spots.map((spot, sIdx) => {
                  const product = PRODUCTS[spot.productId] || {
                    id: spot.productId,
                    title: 'Jewellery Piece',
                    priceFormatted: 'Rs. 15,000.00',
                    images: [look.image]
                  };

                  const isCurrentActive =
                    activeSpot &&
                    activeSpot.lookId === look.id &&
                    activeSpot.spotIndex === sIdx;

                  const cardKey = `${look.id}-${sIdx}`;
                  const currentImgIdx = carouselIndices[cardKey] || 0;
                  const totalImages = product.images.length;

                  // Intelligent positioning
                  const isNearRight = spot.left > 60;
                  const isNearBottom = spot.top > 60;

                  return (
                    <div
                      key={sIdx}
                      className="absolute z-20"
                      style={{
                        left: `${spot.left}%`,
                        top: `${spot.top}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Pulsing Dot Button */}
                      <motion.button
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleSpotClick(look.id, sIdx, e)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCurrentActive
                            ? 'bg-black text-white scale-110 shadow-xl ring-2 ring-white'
                            : 'bg-white/95 text-black shadow-lg hover:shadow-xl'
                        }`}
                        aria-label={`View ${product.title}`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-black block hotspot-pulse" />
                      </motion.button>

                      {/* Interactive Floating Card with Spring Animation */}
                      <AnimatePresence>
                        {isCurrentActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.88, y: isNearBottom ? 10 : -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.88, y: isNearBottom ? 10 : -10 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`absolute z-30 w-64 sm:w-72 bg-white border border-[#E8E5DF] shadow-2xl p-4 ${
                              isNearRight ? 'right-0 sm:right-auto sm:-left-36' : 'left-0 sm:-left-36'
                            } ${
                              isNearBottom ? 'bottom-8' : 'top-8'
                            }`}
                          >
                            {/* Close button */}
                            <button
                              onClick={() => setActiveSpot(null)}
                              className="absolute top-2 right-2 p-1 text-neutral-400 hover:text-black transition-colors"
                              aria-label="Close card"
                            >
                              <X size={16} />
                            </button>

                            {/* Product Image Carousel */}
                            <div className="relative aspect-square w-full bg-neutral-50 mb-3 overflow-hidden border border-neutral-200/60">
                              <motion.img
                                key={currentImgIdx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={product.images[currentImgIdx] || product.featuredImage}
                                alt={product.title}
                                className="w-full h-full object-cover object-center"
                              />

                              {/* Carousel Arrows */}
                              {totalImages > 1 && (
                                <>
                                  <button
                                    onClick={(e) => handlePrevImage(cardKey, totalImages, e)}
                                    className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow text-neutral-800 transition-colors"
                                    aria-label="Previous"
                                  >
                                    <ChevronLeft size={14} />
                                  </button>
                                  <button
                                    onClick={(e) => handleNextImage(cardKey, totalImages, e)}
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow text-neutral-800 transition-colors"
                                    aria-label="Next"
                                  >
                                    <ChevronRight size={14} />
                                  </button>

                                  {/* Dot Indicators */}
                                  <div className="absolute bottom-1.5 inset-x-0 flex justify-center space-x-1">
                                    {product.images.map((_, dotIdx) => (
                                      <span
                                        key={dotIdx}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                          dotIdx === currentImgIdx
                                            ? 'bg-black'
                                            : 'bg-black/20'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Card Content */}
                            <div className="text-left space-y-1 mb-3">
                              <h4 className="text-base font-serif font-medium tracking-wide text-neutral-900 leading-tight">
                                {product.title}
                              </h4>
                              <p className="text-xs font-sans text-neutral-600 tracking-wider">
                                {product.priceFormatted}
                              </p>
                              {product.material && (
                                <p className="text-[10px] font-sans text-neutral-400 line-clamp-1">
                                  {product.material}
                                </p>
                              )}
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-200">
                              <button
                                onClick={() => {
                                  onSelectProduct(product.id);
                                  setActiveSpot(null);
                                }}
                                className="w-full py-2 bg-neutral-900 text-white text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-black transition-colors text-center"
                              >
                                Check now
                              </button>
                              <button
                                onClick={() => {
                                  onAddToCart(product);
                                  setActiveSpot(null);
                                }}
                                className="w-full py-2 bg-white border border-neutral-900 text-neutral-900 text-[10px] uppercase tracking-[0.16em] font-sans hover:bg-neutral-100 transition-colors flex items-center justify-center space-x-1"
                              >
                                <ShoppingBag size={11} />
                                <span>Add</span>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
