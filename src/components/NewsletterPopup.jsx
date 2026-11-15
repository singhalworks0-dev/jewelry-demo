import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('valoir_newsletter_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('valoir_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={handleClose}
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg bg-white border border-[#E8E5DF] shadow-2xl p-8 sm:p-12 z-10 text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-3 font-sans">
              Exclusive Invitation
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-tight mb-4">
              Subscribe to Newsletter &amp; Get 25% Off Your First Order
            </h3>

            <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed max-w-sm mx-auto mb-6">
              Receive privileged access to limited archived collections, private salon exhibitions, and demi-fine releases.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans flex items-center justify-center space-x-2"
              >
                <Check size={16} />
                <span>Thank you for joining. Your code <strong>FIRST25</strong> is applied.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-neutral-900 placeholder-neutral-400"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-neutral-900 text-white text-[11px] uppercase tracking-[0.25em] font-sans font-medium hover:bg-black transition-colors"
                >
                  Sign Up
                </button>
              </form>
            )}

            <p className="text-[10px] font-sans text-neutral-400 mt-4 tracking-wider uppercase">
              Unsubscribe at any moment. No spam, ever.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
