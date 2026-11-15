import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAVIGATION_DATA } from '../data/storeData';

export default function Navbar({
  currentPage = 'home',
  onNavigate,
  onOpenCart,
  cartCount,
  onOpenSearch,
  onSelectProduct
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jewelleryDropdownOpen, setJewelleryDropdownOpen] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [currencyOpen, setCurrencyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, e) => {
    e?.preventDefault();
    if (onNavigate) onNavigate(pageId);
    setMobileMenuOpen(false);
    setJewelleryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E5DF]'
            : 'bg-white border-b border-[#EFECE6]'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Left: Mobile hamburger & Desktop Main Menu */}
          <div className="flex items-center space-x-6 flex-1">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 -ml-1 text-neutral-800 hover:text-black transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-[12px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-800">
              
              {/* HOME */}
              <button
                onClick={(e) => handleNavClick('home', e)}
                className={`hover:text-neutral-500 transition-colors py-2 relative group uppercase tracking-[0.2em] ${
                  currentPage === 'home' ? 'text-black font-semibold' : 'text-neutral-700'
                }`}
              >
                <span>HOME</span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${
                  currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>

              {/* JEWELLERY / SHOP with Mega Menu */}
              <div
                className="relative py-2 group"
                onMouseEnter={() => setJewelleryDropdownOpen(true)}
                onMouseLeave={() => setJewelleryDropdownOpen(false)}
              >
                <button
                  onClick={(e) => handleNavClick('shop', e)}
                  className={`hover:text-neutral-500 transition-colors flex items-center space-x-1 uppercase tracking-[0.2em] ${
                    currentPage === 'shop' ? 'text-black font-semibold' : 'text-neutral-700'
                  }`}
                >
                  <span>JEWELLERY</span>
                  <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
                </button>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${
                  currentPage === 'shop' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />

                {/* Mega Menu Dropdown */}
                {jewelleryDropdownOpen && (
                  <div className="absolute top-full -left-6 w-[680px] bg-white border border-[#E8E5DF] shadow-xl p-8 z-50 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Categories List */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4 pb-2 border-b border-neutral-200">
                          Categories
                        </p>
                        <div className="flex flex-col space-y-3">
                          <button
                            onClick={(e) => handleNavClick('shop', e)}
                            className="text-left text-[12px] tracking-[0.18em] text-neutral-800 hover:text-black font-semibold"
                          >
                            SHOP ALL JEWELLERY
                          </button>
                          {NAVIGATION_DATA.mainMenu[1].categories.slice(1).map((cat) => (
                            <button
                              key={cat.label}
                              onClick={(e) => {
                                if (!cat.disabled) handleNavClick('shop', e);
                              }}
                              className={`text-left text-[12px] tracking-[0.18em] transition-colors ${
                                cat.disabled
                                  ? 'text-neutral-300 cursor-not-allowed'
                                  : 'text-neutral-800 hover:text-black hover:translate-x-1'
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Featured Pieces Preview */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4 pb-2 border-b border-neutral-200">
                          Featured Objects
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {NAVIGATION_DATA.mainMenu[1].featured.map((item) => (
                            <div
                              key={item.title}
                              onClick={() => {
                                onSelectProduct(item.link.replace('/products/', ''));
                                setJewelleryDropdownOpen(false);
                              }}
                              className="group/card cursor-pointer"
                            >
                              <div className="aspect-square overflow-hidden bg-neutral-100 mb-2 border border-neutral-200/60">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <span className="block text-[11px] tracking-[0.14em] uppercase text-neutral-800 group-hover/card:underline">
                                {item.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* THE GYRE COLLECTION */}
              <button
                onClick={(e) => handleNavClick('gyre', e)}
                className={`hover:text-neutral-500 transition-colors py-2 relative group uppercase tracking-[0.2em] ${
                  currentPage === 'gyre' ? 'text-black font-semibold' : 'text-neutral-700'
                }`}
              >
                <span>COLLECTIONS</span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${
                  currentPage === 'gyre' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>

              {/* ABOUT */}
              <button
                onClick={(e) => handleNavClick('about', e)}
                className={`hover:text-neutral-500 transition-colors py-2 relative group uppercase tracking-[0.2em] ${
                  currentPage === 'about' ? 'text-black font-semibold' : 'text-neutral-700'
                }`}
              >
                <span>ABOUT</span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${
                  currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>

              {/* CONTACT */}
              <button
                onClick={(e) => handleNavClick('contact', e)}
                className={`hover:text-neutral-500 transition-colors py-2 relative group uppercase tracking-[0.2em] ${
                  currentPage === 'contact' ? 'text-black font-semibold' : 'text-neutral-700'
                }`}
              >
                <span>CONTACT</span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${
                  currentPage === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </nav>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <button
              onClick={(e) => handleNavClick('home', e)}
              className="block py-2 focus:outline-none"
              aria-label="TORA & TORY Home"
            >
              <img
                src="//toratory.com/cdn/shop/files/TT_Primary_Logo_Black_-_Alpha.png?v=1787139058&width=325"
                alt="TORA & TORY"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain cursor-pointer"
              />
            </button>
          </div>

          {/* Right: Currency & Utility Icons */}
          <div className="flex items-center justify-end space-x-4 sm:space-x-6 flex-1">
            {/* Currency selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center space-x-1 text-[11px] uppercase tracking-[0.18em] font-sans text-neutral-600 hover:text-black py-1"
              >
                <span>{currency}</span>
                <ChevronDown size={10} />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 w-24 bg-white border border-[#E8E5DF] shadow-lg py-2 z-50 text-[11px] font-sans">
                  {['INR', 'USD', 'EUR', 'GBP'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="w-full text-left px-4 py-1.5 hover:bg-neutral-100 transition-colors uppercase tracking-[0.15em]"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-neutral-800 hover:text-black transition-colors"
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>

            {/* Account Icon */}
            <button
              onClick={() => alert('TORA & TORY Salon Portal: Sign in to manage client orders and bespoke appointments.')}
              className="hidden sm:block p-1.5 text-neutral-800 hover:text-black transition-colors"
              aria-label="Account"
            >
              <User size={19} strokeWidth={1.5} />
            </button>

            {/* Cart Icon with Counter */}
            <button
              onClick={onOpenCart}
              className="p-1.5 text-neutral-800 hover:text-black transition-colors relative flex items-center"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#141414] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
              <img
                src="//toratory.com/cdn/shop/files/TT_Primary_Logo_Black_-_Alpha.png?v=1787139058&width=200"
                alt="TORA & TORY"
                className="h-6 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-neutral-600 hover:text-black"
                aria-label="Close Menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <div className="py-6 flex flex-col space-y-5 text-[13px] uppercase tracking-[0.22em] font-sans text-left">
              <button
                onClick={(e) => handleNavClick('home', e)}
                className={`text-left py-1 ${currentPage === 'home' ? 'font-bold text-black' : 'text-neutral-800'}`}
              >
                HOME
              </button>

              <button
                onClick={(e) => handleNavClick('shop', e)}
                className={`text-left py-1 ${currentPage === 'shop' ? 'font-bold text-black' : 'text-neutral-800'}`}
              >
                SHOP ALL JEWELLERY
              </button>

              <button
                onClick={(e) => handleNavClick('gyre', e)}
                className={`text-left py-1 ${currentPage === 'gyre' ? 'font-bold text-black' : 'text-neutral-800'}`}
              >
                COLLECTIONS (GYRE SS26)
              </button>

              <button
                onClick={(e) => handleNavClick('about', e)}
                className={`text-left py-1 ${currentPage === 'about' ? 'font-bold text-black' : 'text-neutral-800'}`}
              >
                ABOUT THE HOUSE
              </button>

              <button
                onClick={(e) => handleNavClick('contact', e)}
                className={`text-left py-1 ${currentPage === 'contact' ? 'font-bold text-black' : 'text-neutral-800'}`}
              >
                CONTACT &amp; PRIVATE SALON
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-200 text-center text-xs text-neutral-500 font-sans">
              <p className="mb-2">DEMI-FINE JEWELLERY</p>
              <p className="text-[10px] tracking-widest text-neutral-400">CRAFTED IN INDIA</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
