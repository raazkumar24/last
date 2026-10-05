import React from "react";

/**
 * =============================================================================
 * SECTION HEADER (Standardized Section Title with Orange Indicator)
 * =============================================================================
 * Ye component section headers ke styling ko standardize karta hai
 * (Orange dot + uppercase subtag + bold italic heading + optional description/actions).
 *
 * PROPS:
 * - tag: Sub-badge text (e.g. "TOOLKIT & ECOSYSTEM")
 * - title: Main heading text (e.g. "WHAT I USE")
 * - subtitle: Small descriptive paragraph
 * - children: Right-side controls (e.g. filter buttons or extra badges)
 * - className: Custom container classes
 * =============================================================================
 */
export default function SectionHeader({
  tag,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 select-none ${className}`}
    >
      <div>
        {tag && (
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9500]" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#FF9500] uppercase">
              {tag}
            </span>
          </div>
        )}
        <h3 className="font-black italic uppercase text-3xl sm:text-4xl text-[#111111] tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[#4B5563] text-xs sm:text-sm max-w-md mt-1 font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {children && (
        <div className="self-start md:self-auto flex items-center">
          {children}
        </div>
      )}
    </div>
  );
}
