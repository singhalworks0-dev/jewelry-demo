import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ShoppingBag,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  ChevronDown,
  Info,
  Calendar,
  ArrowLeft,
  Ruler
} from 'lucide-react';
import { PRODUCTS } from '../data/storeData';

export default function ProductPage({
  productId = 'gulf-cuff',
  onNavigate,
  onNavigateToProduct,
  onAddToCart
}) {
  const product = PRODUCTS[productId] || PRODUCTS['gulf-cuff'];
  const images = product.images && product.images.length > 0 ? product.images : [product.featuredImage];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState('design');

  const isRing = product.category === 'Rings';
  const isWristwear = product.category === 'Wristwear';
  const ringSizes = ['US 6 (16.5mm)', 'US 7 (17.3mm)', 'US 8 (18.1mm)', 'US 9 (19.0mm)', 'US 10 (19.8mm)'];
  const cuffSizes = ['Small (15 - 16 cm)', 'Medium (16.5 - 18 cm)', 'Large (18.5 - 20 cm)'];

  // Default size selection & scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    setActiveImageIdx(0);
    setQuantity(1);
    if (isRing) {
      setSelectedSize('US 7 (17.3mm)');
    } else if (isWristwear) {
      setSelectedSize('Medium (16.5 - 18 cm)');
    } else {
      setSelectedSize('Standard Atelier Edition');
    }

    const t = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(t);
  }, [productId, isRing, isWristwear]);

  const handleAdd = (openCart = true) => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        quantity,
        selectedSize: isRing || isWristwear ? selectedSize : null
      });
    }
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2400);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find related pieces (other products, excluding current)
  const relatedProducts = Object.values(PRODUCTS)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="bg-white min-h-screen text-[#141414]">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#ECE8E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500">
          <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-black transition-colors"
            >
              Home
            </button>
            <ChevronRight size={12} className="text-neutral-400 flex-shrink-0" />
            <button
              onClick={() => onNavigate('shop')}
              className="hover:text-black transition-colors"
            >
              Collections
            </button>
            <ChevronRight size={12} className="text-neutral-400 flex-shrink-0" />
            <span className="text-neutral-400">{product.category}</span>
            <ChevronRight size={12} className="text-neutral-400 flex-shrink-0" />
            <span className="text-neutral-900 font-medium truncate">{product.title}</span>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="hidden sm:inline-flex items-center space-x-1 text-[10px] text-neutral-700 hover:text-black transition-colors"
          >
            <ArrowLeft size={12} />
            <span>Back to All Pieces</span>
          </button>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Multi-Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 sm:gap-6">
            
            {/* Thumbnail Strip (Vertical on md+) */}
            {images.length > 1 && (
              <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3 overflow-x-auto md:overflow-y-auto max-h-[620px] scrollbar-none pb-2 md:pb-0">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 border transition-all overflow-hidden bg-neutral-50 ${
                      activeImageIdx === idx
                        ? 'border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
                        : 'border-[#ECE8E1] opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View view ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} angle ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Stage Image with Zoom & Badge */}
            <div className="relative flex-1 aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-neutral-50 border border-[#ECE8E1] overflow-hidden group select-none shadow-xs">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIdx}
                  src={images[activeImageIdx]}
                  alt={product.title}
                  initial={{ opacity: 0.3, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </AnimatePresence>

              {/* Limited Edition Archival Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 border border-[#ECE8E1] text-[9.5px] uppercase tracking-[0.25em] font-sans text-neutral-800 shadow-xs">
                Archival Object • No. {product.id.slice(0, 4).toUpperCase()}
              </div>

              {/* Quick Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-sans tracking-widest rounded-full">
                  {activeImageIdx + 1} / {images.length}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Product Narrative & Buy Box */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-7">
            
            {/* Header info */}
            <div className="space-y-3 pb-6 border-b border-[#ECE8E1]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 font-sans block">
                  {product.category} • Atelier Edition
                </span>
                
                <button
                  onClick={handleShare}
                  className="inline-flex items-center space-x-1 text-[10px] uppercase tracking-[0.2em] font-sans text-neutral-500 hover:text-black transition-colors"
                  title="Copy Link to Piece"
                >
                  <Share2 size={13} />
                  <span>{copiedLink ? 'Copied' : 'Share'}</span>
                </button>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-neutral-900 tracking-wide leading-tight">
                {product.title}
              </h1>

              <div className="flex items-baseline space-x-4 pt-1">
                <p className="text-xl sm:text-2xl font-sans font-normal text-neutral-900 tracking-wider">
                  {product.priceFormatted}
                </p>
                <span className="text-[11px] text-neutral-400 font-sans">
                  Tax included. Global Express Air Delivery.
                </span>
              </div>

              <p className="text-sm font-serif italic text-neutral-600 pt-2 leading-relaxed">
                "{product.tagline}"
              </p>
            </div>

            {/* Material & Karigar Composition Badge */}
            <div className="bg-[#FAF9F5] border border-[#ECE8E1] p-4 text-xs font-sans space-y-1">
              <span className="text-[9.5px] uppercase tracking-[0.22em] text-neutral-400 font-medium block">
                Primary Medium &amp; Metallurgy
              </span>
              <p className="text-neutral-800 font-light leading-relaxed">
                {product.material}
              </p>
            </div>

            {/* Sizing Selector (for Rings or Cuffs) */}
            {(isRing || isWristwear) && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-800">
                    {isRing ? 'Select Ring Dimension' : 'Select Cuff Diameter'}
                  </label>
                  
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="inline-flex items-center space-x-1 text-[10px] uppercase tracking-[0.18em] font-sans text-neutral-500 hover:text-black underline underline-offset-4 transition-colors"
                  >
                    <Ruler size={12} />
                    <span>Sizing Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(isRing ? ringSizes : cuffSizes).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2.5 px-3 text-[11px] font-sans tracking-wider border transition-all text-center ${
                        selectedSize === size
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                          : 'border-[#ECE8E1] bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart Controls */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                {/* Quantity Pill */}
                <div className="flex items-center border border-[#ECE8E1] bg-white h-12 px-3 space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-neutral-500 hover:text-black text-sm px-1"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-xs font-sans font-medium w-6 text-center text-neutral-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-neutral-500 hover:text-black text-sm px-1"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add Button */}
                <button
                  onClick={() => handleAdd(true)}
                  className="flex-1 h-12 bg-neutral-900 text-white text-[11px] uppercase tracking-[0.25em] font-sans font-medium hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-xs active:scale-[0.99]"
                >
                  {addedSuccess ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span>Added To Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Acquire Piece</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bespoke Concierge Viewing Link */}
              <div className="pt-1 flex items-center justify-between text-[11px] font-sans text-neutral-500">
                <span className="flex items-center space-x-1.5">
                  <Sparkles size={13} className="text-neutral-400" />
                  <span>Numbered archive certificate included</span>
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-black underline underline-offset-2 transition-colors"
                >
                  Private Salon Inquiry →
                </button>
              </div>
            </div>

            {/* Accordion Panels for Deeper Specifications */}
            <div className="border-t border-[#ECE8E1] pt-4 divide-y divide-[#ECE8E1]">
              
              {/* Accordion 1: The Design Narrative */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('design')}
                  className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-900"
                >
                  <span>01. The Design Narrative</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openAccordion === 'design' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'design' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed space-y-2"
                  >
                    <p>
                      Each {product.title} is sculpted as an individual piece of worn architecture. Defying machine-stamped uniformity, the fluid contours mirror natural mineral erosion and the tensile gravity of molten alloys.
                    </p>
                    <p className="italic font-serif text-neutral-800">
                      "Creativity has never respected categories. We design for individuals drawn to uncompromising weight and soul."
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Accordion 2: Karigar Metallurgy & Materials */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-900"
                >
                  <span>02. Karigar Metallurgy &amp; Craft</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openAccordion === 'materials' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'materials' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed space-y-2"
                  >
                    <p>
                      Poured in proprietary bronze compositions coupled with authentic natural minerals. Immersed in a 24k gold bath for permanence and subtle antiqued warmth. Hand-finished by generational Indian karigars who retain the crucible’s raw volcanic energy.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Accordion 3: Shipping & Archival Care */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-900"
                >
                  <span>03. Insured Delivery &amp; Returns</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openAccordion === 'shipping' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'shipping' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed space-y-2"
                  >
                    <p>
                      • Dispatched in bespoke archival presentation cases with tamper-evident wax seals.<br />
                      • Fully insured express transit worldwide (4–7 business days).<br />
                      • 14-day complimentary exchange service for unworn pieces.
                    </p>
                  </motion.div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trust Pillars Grid */}
      <section className="border-y border-[#ECE8E1] bg-[#FAF9F5] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-white border border-[#ECE8E1] text-neutral-900 flex-shrink-0">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
                Generational Karigars
              </h4>
              <p className="text-xs font-serif italic text-neutral-600 mt-1">
                Hand-poured and shaped without industrial stamping.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-white border border-[#ECE8E1] text-neutral-900 flex-shrink-0">
              <Sparkles size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
                Authentic Minerals
              </h4>
              <p className="text-xs font-serif italic text-neutral-600 mt-1">
                Certified naturally sourced gemstones &amp; topazes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-white border border-[#ECE8E1] text-neutral-900 flex-shrink-0">
              <Truck size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
                Insured Transit
              </h4>
              <p className="text-xs font-serif italic text-neutral-600 mt-1">
                Complimentary tracked worldwide express delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-white border border-[#ECE8E1] text-neutral-900 flex-shrink-0">
              <RotateCcw size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
                Archival Exchange
              </h4>
              <p className="text-xs font-serif italic text-neutral-600 mt-1">
                14-day dedicated exchange window for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSizeGuide(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white border border-[#ECE8E1] p-6 sm:p-8 shadow-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#ECE8E1] pb-3">
                <h3 className="text-base font-serif font-medium text-neutral-900">
                  Atelier Sizing &amp; Fitting Guide
                </h3>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="text-neutral-500 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed font-light">
                Our pieces are sculpted with intentional balance and weight. For rings, measure your finger circumference at room temperature when circulation is relaxed.
              </p>
              <div className="border border-[#ECE8E1] text-xs font-sans overflow-hidden">
                <div className="grid grid-cols-3 bg-neutral-100 p-2 font-medium text-neutral-700 uppercase tracking-wider text-[10px]">
                  <span>US Size</span>
                  <span>Inner Diameter</span>
                  <span>Circumference</span>
                </div>
                <div className="divide-y divide-[#ECE8E1] text-neutral-600">
                  <div className="grid grid-cols-3 p-2"><span>US 6</span><span>16.5 mm</span><span>51.9 mm</span></div>
                  <div className="grid grid-cols-3 p-2"><span>US 7</span><span>17.3 mm</span><span>54.4 mm</span></div>
                  <div className="grid grid-cols-3 p-2"><span>US 8</span><span>18.1 mm</span><span>57.0 mm</span></div>
                  <div className="grid grid-cols-3 p-2"><span>US 9</span><span>19.0 mm</span><span>59.5 mm</span></div>
                  <div className="grid grid-cols-3 p-2"><span>US 10</span><span>19.8 mm</span><span>62.1 mm</span></div>
                </div>
              </div>
              <p className="text-[11px] font-serif italic text-neutral-500">
                *Unsure of your fitting? Contact our concierge team for a complimentary private fitting arrangement.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Related Objects / Archive Companion Pieces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#ECE8E1]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              Companion Objects
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-neutral-900 mt-1">
              Curated to Pair
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-600 hover:text-black transition-colors mt-3 sm:mt-0"
          >
            Explore Complete Archive →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {relatedProducts.map((relProduct) => (
            <div
              key={relProduct.id}
              onClick={() => onNavigateToProduct(relProduct.id)}
              className="group cursor-pointer space-y-3"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-50 border border-[#ECE8E1]">
                <img
                  src={relProduct.featuredImage}
                  alt={relProduct.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-1 text-[9px] uppercase tracking-[0.2em] font-sans text-neutral-800">
                  {relProduct.category}
                </div>
              </div>

              <div>
                <h3 className="text-base font-serif font-medium text-neutral-900 group-hover:underline">
                  {relProduct.title}
                </h3>
                <p className="text-xs font-sans text-neutral-700 mt-0.5">
                  {relProduct.priceFormatted}
                </p>
                <p className="text-[11px] font-serif italic text-neutral-500 line-clamp-1 mt-1">
                  {relProduct.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
