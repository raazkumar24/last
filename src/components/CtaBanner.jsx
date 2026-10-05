import React from "react";

/**
 * =============================================================================
 * CTA BANNER (High-Converting Collaborative Bottom Section)
 * =============================================================================
 * Ye component pages ke bottom me aane wale dark high-impact CTA banner ko
 * represent karta hai. Isme pulsating status dot, dynamic orange glow aur
 * primary/secondary buttons shamil hain.
 *
 * PROPS:
 * - badgeText: Small status tag (default: "READY TO COLLABORATE?")
 * - titlePrefix: First part of title (default: "LET'S BUILD SOMETHING")
 * - highlightText: Orange highlighted text (default: "EXTRAORDINARY")
 * - titleSuffix: Postfix title (default: "TOGETHER")
 * - description: Subtitle narrative text
 * - primaryBtnText: Primary orange action label (default: "START A PROJECT")
 * - primaryBtnHref: Primary link (default: "#contact")
 * - secondaryBtnText: Ghost action label (default: "BROWSE WORKS")
 * - secondaryBtnHref: Secondary link (default: "#works")
 * - className: Custom container classes (e.g. for GSAP animation selectors)
 * =============================================================================
 */
export default function CtaBanner({
  badgeText = "READY TO COLLABORATE?",
  titlePrefix = "LET'S BUILD SOMETHING",
  highlightText = "EXTRAORDINARY",
  titleSuffix = "TOGETHER",
  description = "Whether you have an upcoming web project, need a full-stack developer, or just want to chat tech — my inbox is always open.",
  primaryBtnText = "START A PROJECT",
  primaryBtnHref = "#contact",
  secondaryBtnText = "BROWSE WORKS",
  secondaryBtnHref = "#works",
  className = "",
}) {
  return (
    <div
      className={`ab-cta-banner relative rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-black/10 select-none ${className}`}
    >
      {/* Subtle Orange Glow Circle in Banner */}
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FF9500] opacity-20 blur-3xl select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Heading & Text */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9500] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF9500]">
              {badgeText}
            </span>
          </div>

          <h3 className="font-black italic uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            {titlePrefix}{" "}
            <span className="text-[#FF9500]">{highlightText}</span>{" "}
            {titleSuffix}
          </h3>

          <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Right CTA Actions */}
        <div className="flex flex-wrap items-center gap-4">
          {primaryBtnText && (
            <a
              href={primaryBtnHref}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#FF9500] px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#111111] uppercase shadow-[0_8px_25px_rgba(255,149,0,0.35)] transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-0.5 active:scale-95"
            >
              <span>{primaryBtnText}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          )}

          {secondaryBtnText && (
            <a
              href={secondaryBtnHref}
              className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-0.5"
            >
              {secondaryBtnText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
