import React, { useState } from 'react';
import { NAVIGATION_DATA } from '../data/storeData';
import { ArrowRight, Check } from 'lucide-react';

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer({ onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const navTo = (page, e) => {
    e?.preventDefault();
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-[#141414] text-[#F5F5F0] pt-16 sm:pt-24 pb-12 border-t border-neutral-800">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={(e) => navTo('home', e)}
              className="text-left focus:outline-none"
            >
              <img
                src="//toratory.com/cdn/shop/files/TT_Primary_Logo_White_-_Alpha.png?v=1787139088&width=325"
                alt="TORA & TORY"
                className="h-8 sm:h-9 w-auto object-contain brightness-100 cursor-pointer"
              />
            </button>
            
            <p className="text-xs sm:text-sm font-serif italic text-neutral-400 max-w-sm leading-relaxed">
              Design-led, gender-fluid demi-fine jewellery crafted with natural gemstones &amp; proprietary bronze. Every collection is archived whence claimed, never to be remade.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 pt-2">
              <a
                href="https://www.instagram.com/toratory/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/tora-tory/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-xs font-sans uppercase tracking-widest"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* SHOP Column */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-white">
              SHOP
            </p>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.1em] text-neutral-400">
              <li>
                <button onClick={(e) => navTo('shop', e)} className="hover:text-white transition-colors text-left">
                  Shop All Jewellery
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('shop', e)} className="hover:text-white transition-colors text-left">
                  Necklaces
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('shop', e)} className="hover:text-white transition-colors text-left">
                  Earrings
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('shop', e)} className="hover:text-white transition-colors text-left">
                  Rings
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('shop', e)} className="hover:text-white transition-colors text-left">
                  Wristwear
                </button>
              </li>
            </ul>
          </div>

          {/* COMPANY Column */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-white">
              COMPANY
            </p>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.1em] text-neutral-400">
              <li>
                <button onClick={(e) => navTo('about', e)} className="hover:text-white transition-colors text-left">
                  About Us &amp; Karigars
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('gyre', e)} className="hover:text-white transition-colors text-left">
                  The GYRE Archive
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                  Private Salon &amp; Contact
                </button>
              </li>
              <li>
                <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                  Care Guide &amp; FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* LEGAL & Newsletter Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-white">
                CLIENT SERVICES
              </p>
              <ul className="space-y-2.5 text-xs font-sans tracking-[0.1em] text-neutral-400">
                <li>
                  <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                    Global Shipping &amp; Insured Transit
                  </button>
                </li>
                <li>
                  <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                    Complimentary Returns
                  </button>
                </li>
                <li>
                  <button onClick={(e) => navTo('contact', e)} className="hover:text-white transition-colors text-left">
                    Privacy &amp; Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter inline */}
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-neutral-300 mb-2">
                Join the Journal
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center border-b border-neutral-600 focus-within:border-white pb-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-transparent text-xs font-sans focus:outline-none flex-1 text-white placeholder-neutral-500 py-1"
                />
                <button
                  type="submit"
                  className="p-1 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check size={14} className="text-emerald-400" /> : <ArrowRight size={14} />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 mt-1">Subscribed successfully.</p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-neutral-500 tracking-wider space-y-4 sm:space-y-0">
          <p>© 2026 TORA &amp; TORY. All Rights Reserved.</p>
          <p className="uppercase tracking-[0.2em] text-[10px] text-neutral-400">
            India • Contemporary Demi-Fine Jewellery
          </p>
        </div>

      </div>
    </footer>
  );
}
