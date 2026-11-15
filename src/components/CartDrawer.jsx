import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onNavigateToProduct
}) {
  const totalAmount = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(totalAmount);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* Drawer with Spring Slide */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl border-l border-[#E8E5DF] flex flex-col"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
                    Cart ({items.reduce((acc, it) => acc + it.quantity, 0)})
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-neutral-400 hover:text-black transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Complimentary Shipping Banner */}
              <div className="bg-white py-2.5 px-6 border-b border-neutral-200 text-center">
                <p className="text-[11px] font-sans tracking-[0.15em] uppercase text-neutral-700">
                  {totalAmount > 0
                    ? '✓ Complimentary Global Shipping Applied'
                    : 'Complimentary Global Shipping & Returns'}
                </p>
              </div>

              {/* Cart Items Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                      <ShoppingBag size={28} strokeWidth={1.2} />
                    </div>
                    <div className="space-y-2 max-w-xs">
                      <h4 className="text-lg font-serif text-neutral-800">
                        Your Shopping Cart is Empty
                      </h4>
                      <p className="text-xs font-sans text-neutral-500 leading-relaxed">
                        Browse our latest collection or check your saved favorites to add more pieces to your cart.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-neutral-900 text-white text-[11px] uppercase tracking-[0.2em] font-sans hover:bg-black transition-colors"
                    >
                      Explore Collections
                    </button>
                  </div>
                ) : (
                  <AnimatePresence>
                    {items.map((item, idx) => (
                      <motion.div
                        key={`${item.id}-${item.selectedSize || ''}-${idx}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex space-x-4 pb-6 border-b border-neutral-200/80 last:border-b-0"
                      >
                        {/* Thumbnail */}
                        <div
                          onClick={() => {
                            if (onNavigateToProduct && item.id) {
                              onClose();
                              onNavigateToProduct(item.id);
                            }
                          }}
                          className="w-20 h-20 flex-shrink-0 bg-neutral-100 border border-neutral-200 overflow-hidden cursor-pointer"
                        >
                          <img
                            src={item.featuredImage || (item.images && item.images[0])}
                            alt={item.title}
                            className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4
                                onClick={() => {
                                  if (onNavigateToProduct && item.id) {
                                    onClose();
                                    onNavigateToProduct(item.id);
                                  }
                                }}
                                className="text-sm font-serif font-medium text-neutral-900 leading-tight cursor-pointer hover:underline"
                              >
                                {item.title}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(idx)}
                                className="text-neutral-400 hover:text-red-700 p-0.5 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                            {item.selectedSize && (
                              <p className="text-[10px] font-sans text-neutral-400 mt-0.5">
                                Size: {item.selectedSize}
                              </p>
                            )}
                            <p className="text-xs font-sans text-neutral-800 tracking-wider mt-1">
                              {item.priceFormatted || `Rs. ${item.price.toLocaleString('en-IN')}.00`}
                            </p>
                          </div>

                          {/* Quantity Selector */}
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="flex items-center border border-neutral-300 bg-white">
                              <button
                                onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                                className="px-2 py-0.5 text-xs text-neutral-600 hover:text-black hover:bg-neutral-100"
                              >
                                -
                              </button>
                              <span className="px-3 py-0.5 text-[11px] font-sans font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs text-neutral-600 hover:text-black hover:bg-neutral-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer Subtotal & Checkout */}
              {items.length > 0 && (
                <div className="p-6 bg-white border-t border-neutral-200 space-y-4">
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-neutral-500 uppercase tracking-widest text-xs">
                      Subtotal
                    </span>
                    <span className="text-base font-semibold text-neutral-900 tracking-wider">
                      {formattedTotal}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-neutral-400 text-center">
                    Taxes included. Worldwide insured shipping calculated at checkout.
                  </p>
                  <button
                    onClick={onCheckout}
                    className="w-full py-4 bg-neutral-900 text-white text-[12px] uppercase tracking-[0.25em] font-sans font-medium hover:bg-black transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
