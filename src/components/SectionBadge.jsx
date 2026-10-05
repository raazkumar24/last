import React from "react";

/**
 * SectionBadge — Orange pulsing dot + uppercase label badge
 * Used in Hero greeting and About section headers
 *
 * Props:
 *  - label (string): Text to display
 *  - className (string): extra classes on wrapper div
 */
export default function SectionBadge({ label, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#ffbf00] opacity-60 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ffbf00] shadow-[0_0_10px_rgba(255,149,0,0.6)]" />
      </span>
      <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#333333] uppercase select-none">
        {label}
      </span>
    </div>
  );
}
