import React from "react";

/**
 * =============================================================================
 * HAND-DRAWN UNDERLINE (Handcrafted Orange Curve)
 * =============================================================================
 * Ye component hero ya section titles ke niche aane wale energetic orange
 * curved underline SVG ko render karta hai.
 *
 * GSAP ANIMATION SUPPORT:
 * - pathRef: Isme aap ref pass kar sakte hain taaki GSAP timeline me
 *   strokeDashoffset animate ho sake (draw-in effect ke liye).
 *
 * PROPS:
 * - pathRef: GSAP animated path reference
 * - className: Wrapper div ki custom classes (e.g. width, margins)
 * - strokeWidth: Line ki thickness (default: 8)
 * - color: Stroke color (default: #FF9500)
 * =============================================================================
 */
export default function HandDrawnUnderline({
  pathRef,
  className = "w-[85%] sm:w-[75%] ml-auto mr-4",
  strokeWidth = 8,
  color = "#FF9500",
}) {
  return (
    <div
      className={`pointer-events-none -mt-1 sm:-mt-2 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          ref={pathRef}
          d="M 10 16 C 120 25, 250 25, 410 8"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
