import React from "react";

/**
 * =============================================================================
 * PILLAR CARD (Hero-Matched Strength Card)
 * =============================================================================
 * Hero section ki visual identity se 100% matched:
 * - Real organic orange wave shape in corner (hero matching)
 * - Hero typography (font-black italic uppercase)
 * - SectionBadge matching dot indicator
 * - Clean human copy (no generic AI checkmarks or symbols)
 * =============================================================================
 */
export default function PillarCard({
  id = "01",
  title,
  tagline,
  desc,
  icon,
  badgeText,
  className = "",
}) {
  return (
    <div
      className={`pillar-card group relative rounded-3xl bg-white border border-black/10 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden select-none ${className}`}
    >
      {/* ── HERO-MATCHING ORGANIC ORANGE CORNER WAVE ── */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-28 h-28 select-none overflow-hidden rounded-tr-3xl z-0 transition-transform duration-500 group-hover:scale-110"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"
        >
          {/* Organic flowing corner wave matching Hero shapes */}
          <path
            d="M140 0 H40 C50 30 70 50 60 80 C50 110 20 120 0 140 H140 V0 Z"
            fill="#FF9500"
          />
        </svg>
      </div>

      {/* ── CARD BODY ── */}
      <div className="relative z-10">
        {/* Top Header: Hero-style Icon + Step Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 text-[#FF9500] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#FF9500] group-hover:text-white shadow-sm">
            {icon}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-black/5 text-[11px] font-bold text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500]" />
            <span className="font-mono text-gray-700 font-bold">{id}</span>
          </div>
        </div>

        {/* Tagline */}
        {tagline && (
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF9500] block mb-1">
            {tagline}
          </span>
        )}

        {/* Title — Heavy Italic Uppercase like Hero */}
        <h4 className="font-black italic uppercase text-[#111111] text-lg sm:text-xl leading-snug tracking-tight mb-2.5 group-hover:text-[#FF9500] transition-colors">
          {title}
        </h4>

        {/* Natural Description */}
        <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed font-normal">
          {desc}
        </p>
      </div>

      {/* ── CARD FOOTER ── */}
      <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="font-doodle text-base text-[#111111] font-bold -rotate-2 group-hover:text-[#FF9500] transition-colors">
          {badgeText || "Raj's Standard"}
        </span>

        <div className="w-7 h-7 rounded-full bg-[#FAF8F5] group-hover:bg-[#111111] text-[#111111] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-sm">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
