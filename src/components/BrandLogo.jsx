import React from 'react';

export default function BrandLogo({ light = false, className = "h-8 sm:h-9 w-auto" }) {
  const textColor = light ? "#FFFFFF" : "#141414";
  const subColor = light ? "#A3A3A3" : "#666666";
  const strokeColor = light ? "#FFFFFF" : "#141414";

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      {/* Sculptural geometric jewellery emblem */}
      <svg
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full max-h-9 w-auto aspect-square flex-shrink-0"
        aria-hidden="true"
      >
        <polygon
          points="21,3 39,21 21,39 3,21"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="21,11 31,21 21,31 11,21"
          stroke={strokeColor}
          strokeWidth="1.2"
          fill={light ? "rgba(255,255,255,0.08)" : "rgba(20,20,20,0.05)"}
        />
        <line x1="21" y1="3" x2="21" y2="39" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="1.5 2.5" />
        <circle cx="21" cy="21" r="2.2" fill={strokeColor} />
      </svg>

      {/* Typographic Wordmark */}
      <div className="flex flex-col justify-center leading-none text-left">
        <span
          className="font-serif tracking-[0.28em] text-[17px] sm:text-[19px] font-normal uppercase"
          style={{ color: textColor }}
        >
          VALOIR
        </span>
        <span
          className="font-sans text-[8px] sm:text-[8.5px] tracking-[0.38em] uppercase font-light mt-1"
          style={{ color: subColor }}
        >
          ATELIER
        </span>
      </div>
    </div>
  );
}
