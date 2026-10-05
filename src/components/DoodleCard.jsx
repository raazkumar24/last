import React from "react";

/**
 * =============================================================================
 * DOODLE CARD & BADGE (Handcrafted Caveat Doodles with Curved Arrows)
 * =============================================================================
 * Ye component portfolio ke playful and human touch ke liye hand-drawn
 * annotations render karta hai (Caveat font + curved arrow + optional sunburst).
 *
 * PROPS:
 * - text: Doodle message (string ya JSX)
 * - forwardRef: GSAP animation/timeline ke liye ref
 * - containerClass: Absolute positioning classes (e.g. top-0 right-0)
 * - textClass: Custom font sizing ya rotation override
 * - rotation: Angle of text (default: "-rotate-6")
 * - arrowPath: SVG path string for arrow curve
 * - arrowheadPath: SVG path string for arrow pointer
 * - arrowClass: Arrow size classes
 * - showSunburst: Orange burst rays show karni hai ya nahi (default: true)
 * =============================================================================
 */
export default function DoodleCard({
  text,
  arrowPath = "M 55 10 C 50 35, 30 45, 15 52",
  arrowheadPath = "M 26 42 L 14 52 L 24 62",
  arrowClass = "w-10 h-10 sm:w-14 sm:h-14",
  containerClass = "",
  textClass = "text-xl sm:text-2xl lg:text-[1.55rem]",
  rotation = "-rotate-6",
  showSunburst = true,
  forwardRef,
}) {
  return (
    <div
      ref={forwardRef}
      className={`pointer-events-none select-none flex flex-col ${containerClass}`}
      aria-hidden="true"
    >
      <div className="flex items-start gap-1">
        <span
          className={`font-doodle font-bold text-[#111111] leading-tight ${rotation} ${textClass}`}
        >
          {text}
        </span>
        {showSunburst && (
          <div className="pt-0.5 text-[#FF9500] flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="12" x2="1" y2="8" />
              <line x1="8" y1="6" x2="8" y2="2" />
              <line x1="14" y1="8" x2="18" y2="4" />
            </svg>
          </div>
        )}
      </div>
      {arrowPath && (
        <div className="mr-4 sm:mr-8 -mt-1">
          <svg
            className={`text-[#111111] ${arrowClass}`}
            viewBox="0 0 70 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={arrowPath} />
            {arrowheadPath && <path d={arrowheadPath} />}
          </svg>
        </div>
      )}
    </div>
  );
}

/**
 * LeftDoodle — Profile ke left side me stacked "Code / Design / Build / Repeat"
 * doodle with down-right curved arrow pointing to the avatar.
 */
export function LeftDoodle({ forwardRef, className = "" }) {
  return (
    <div
      ref={forwardRef}
      className={`pointer-events-none absolute top-[36%] sm:top-[38%] left-1 sm:-left-4 lg:-left-10 z-20 flex flex-col items-center select-none ${className}`}
      aria-hidden="true"
    >
      <span className="font-doodle text-base sm:text-lg lg:text-xl font-bold text-[#222222] leading-tight text-center -rotate-12">
        Code
        <br />
        Design
        <br />
        Build
        <br />
        Repeat
      </span>
      <div className="mt-0.5 ml-3">
        <svg
          className="w-7 h-7 sm:w-9 sm:h-9 text-[#111111]"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 12 10 C 15 25, 22 32, 38 34" />
          <path d="M 28 26 L 38 34 L 28 42" />
        </svg>
      </div>
    </div>
  );
}
