import React from "react";

/**
 * =============================================================================
 * TECH CARD (Interactive Ecosystem / Tool Card)
 * =============================================================================
 * Ye component developer ke tech stack items (languages, frameworks, tools)
 * ko dynamic hover color glow ke sath render karta hai.
 *
 * PROPS:
 * - name: Name of technology (e.g. "React.js")
 * - level: Skill level or role (e.g. "Core Frontend")
 * - brandColor: Hex color code (e.g. "#61DAFB")
 * - icon: SVG or JSX icon
 * - className: Custom container classes
 * =============================================================================
 */
export default function TechCard({
  name,
  level,
  brandColor = "#FF9500",
  icon,
  className = "",
}) {
  return (
    <div
      className={`tech-card-item group relative flex flex-col items-center justify-between gap-3 bg-white rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-black/5 shadow-sm min-h-[110px] select-none ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = brandColor;
        e.currentTarget.style.boxShadow = `0 12px 28px -6px ${brandColor}38`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
      }}
    >
      <div className="flex-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
        {icon}
      </div>

      <div className="text-center w-full">
        <span className="font-bold text-[#111111] text-xs block leading-tight truncate">
          {name}
        </span>
        {level && (
          <span className="text-[10px] text-gray-500 font-medium block mt-0.5">
            {level}
          </span>
        )}
      </div>
    </div>
  );
}
