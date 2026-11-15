import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENT_ITEMS } from '../data/storeData';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#141414] text-[#F5F5F0] text-[11px] sm:text-[12px] uppercase tracking-[0.22em] py-2.5 px-4 text-center transition-all duration-700 font-sans border-b border-white/5 relative z-40">
      <div className="flex items-center justify-center min-h-[18px]">
        {ANNOUNCEMENT_ITEMS.map((item, idx) => (
          <span
            key={item}
            className={`transition-opacity duration-700 ease-in-out absolute ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
