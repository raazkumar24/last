import React from "react";

/**
 * StatItem — A single stat with a big number and small label
 *
 * Props:
 *  - value (string): e.g. "10+"
 *  - label (string): e.g. "Projects"
 */
export function StatItem({ value, label }) {
  return (
    <div>
      <span className="block text-xl sm:text-2xl lg:text-[1.75rem] font-black text-[#111111] tracking-tight">
        {value}
      </span>
      <span className="text-[11px] sm:text-xs font-medium text-gray-500">{label}</span>
    </div>
  );
}

/**
 * StatDivider — Thin vertical separator between stats
 */
export function StatDivider() {
  return <div className="h-7 w-[1.5px] bg-gray-300/80" />;
}
