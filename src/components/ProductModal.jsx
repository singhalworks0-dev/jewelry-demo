import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingBag, Check, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('US 7 / Standard');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const images = product.images && product.images.length > 0 ? product.images : [product.featuredImage];
  const isRing = product.category === 'Rings';

  const handleAdd = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedSize: isRing ? selectedSize : null
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#E8E5DF] shadow-2xl overflow-y-auto z-10 flex flex-col md:flex-row"
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-black transition-colors bg-white/80 rounded-full"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Left: Gallery */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white border-b md:border-b-0 md:border-r border-[#E8E5DF]">
            {/* Main Large Image */}
            <div className="relative aspect-square w-full overflow-hidden bg-white border border-neutral-200/80 mb-4">
              <motion.img
                key={activeImageIdx}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={images[activeImageIdx]}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/85 hover:bg-white rounded-full shadow text-neutral-800 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/85 hover:bg-white rounded-full shadow text-neutral-800 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-14 h-14 flex-shrink-0 border overflow-hidden transition-all ${
                      idx === activeImageIdx
                        ? 'border-neutral-900 ring-1 ring-neutral-900 scale-105'
                        : 'border-neutral-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                  {product.category || 'Demi-Fine Jewellery'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 tracking-wide">
                  {product.title}
                </h2>
                <p className="text-lg font-sans text-neutral-900 tracking-wider mt-1">
                  {product.priceFormatted}
                </p>
                <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                  Tax included. Free shipping worldwide.
                </p>
              </div>

              {/* Description / Story */}
              <div className="pt-2 border-t border-neutral-200/80 space-y-2 text-sm text-neutral-700 font-sans leading-relaxed">
                <p className="italic font-serif text-base text-neutral-800">
                  "{product.tagline}"
                </p>
                {product.material && (
                  <div className="pt-1 text-xs text-neutral-600">
                    <span className="font-semibold uppercase tracking-wider text-[10px] text-neutral-400 block mb-1">
                      Composition
                    </span>
                    {product.material}
                  </div>
                )}
              </div>

              {/* Sizing (if Ring) */}
              {isRing && (
                <div className="pt-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                    Select Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['US 6', 'US 7 / Standard', 'US 8'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-sans tracking-wider border transition-colors ${
                          selectedSize === size
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="pt-2 flex items-center space-x-4">
                <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500">
                  Quantity
                </span>
                <div className="flex items-center border border-neutral-300 bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-sm text-neutral-600 hover:text-black hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-sans font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-sm text-neutral-600 hover:text-black hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="pt-4 border-t border-neutral-200/80 space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleAdd}
                className={`w-full py-4 text-[12px] uppercase tracking-[0.25em] font-sans font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  addedSuccess
                    ? 'bg-emerald-800 text-white'
                    : 'bg-neutral-900 text-white hover:bg-black'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check size={16} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </>
                )}
              </motion.button>

              {/* Value Props */}
              <div className="grid grid-cols-3 gap-2 pt-3 text-[10px] font-sans text-neutral-500 text-center uppercase tracking-wider">
                <div className="flex flex-col items-center space-y-1">
                  <Truck size={14} className="text-neutral-700" />
                  <span>Global Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <RefreshCw size={14} className="text-neutral-700" />
                  <span>Free Returns</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <ShieldCheck size={14} className="text-neutral-700" />
                  <span>Handcrafted</span>
                </div>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
