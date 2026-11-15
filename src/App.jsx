import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import SearchModal from './components/SearchModal';
import NewsletterPopup from './components/NewsletterPopup';
import PageSwitcher from './components/PageSwitcher';

// The Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import GyrePage from './pages/GyrePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';

import { PRODUCTS } from './data/storeData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS['gulf-cuff'],
      quantity: 1,
      selectedSize: null
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Current active product for full Product Details Page
  const [currentProductId, setCurrentProductId] = useState('gulf-cuff');

  // Selected product quick-view modal state
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '');
      if (rawHash.startsWith('product/')) {
        const prodId = rawHash.replace('product/', '');
        if (PRODUCTS[prodId]) {
          setCurrentProductId(prodId);
          setCurrentPage('product');
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          return;
        }
      }
      if (['home', 'shop', 'gyre', 'about', 'contact', 'product'].includes(rawHash)) {
        setCurrentPage(rawHash);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Guarantee scroll to top when page or product changes (including after AnimatePresence transitions)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const t1 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 320);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [currentPage, currentProductId]);

  const navigateTo = (pageId, prodId = null) => {
    if (pageId === 'product' && prodId) {
      setCurrentProductId(prodId);
      setCurrentPage('product');
      window.location.hash = `#/product/${prodId}`;
    } else {
      setCurrentPage(pageId);
      window.location.hash = `#/${pageId}`;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const navigateToProduct = (prodId) => {
    navigateTo('product', prodId);
  };

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (it) => it.id === product.id && it.selectedSize === product.selectedSize
      );
      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += product.quantity || 1;
        return updated;
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (idx, newQuantity) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[idx].quantity = newQuantity;
      return updated;
    });
  };

  const handleRemoveItem = (idx) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCheckout = () => {
    alert(
      'Proceeding to Secure Checkout.\n\nThank you for choosing VALOIR ATELIER.\nOrders are crafted with natural gemstones and insured global shipping.'
    );
  };

  const selectedProduct = selectedProductId ? PRODUCTS[selectedProductId] : null;

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141414] font-serif selection:bg-neutral-200">
      
      {/* 1. Rotating Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectProduct={(id) => navigateToProduct(id)}
      />

      {/* Main Multi-Page Content Area with Smooth Crossfade Transitions */}
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage
                onNavigate={navigateTo}
                onSelectProduct={(id) => navigateToProduct(id)}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          )}

          {currentPage === 'shop' && (
            <motion.div
              key="shop"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ShopPage
                onSelectProduct={(id) => setSelectedProductId(id)}
                onNavigateToProduct={navigateToProduct}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          )}

          {currentPage === 'product' && (
            <motion.div
              key={`product-${currentProductId}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProductPage
                productId={currentProductId}
                onNavigate={navigateTo}
                onNavigateToProduct={navigateToProduct}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          )}

          {currentPage === 'gyre' && (
            <motion.div
              key="gyre"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <GyrePage
                onSelectProduct={(id) => navigateToProduct(id)}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutPage
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Elegant Page Switcher */}
      <PageSwitcher currentPage={currentPage} onNavigate={navigateTo} />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onNavigateToProduct={navigateToProduct}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProductId(null)}
        onAddToCart={handleAddToCart}
        onNavigateToProduct={navigateToProduct}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => navigateToProduct(id)}
      />

      <NewsletterPopup />
    </div>
  );
}
