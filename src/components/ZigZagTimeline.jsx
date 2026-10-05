import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * =============================================================================
 * ZIG-ZAG TIMELINE (Hero-Harmonized Curved Scroll Timeline)
 * =============================================================================
 * Hero section ki visual identity se 100% aligned:
 * - Real organic orange wave shapes in every card
 * - Caveat doodle handwritten annotations (matching Hero doodles)
 * - S-curved animated path drawn on scroll
 * - Left/Right alternating responsive card entrance
 * =============================================================================
 */

// Handwritten doodle annotations for each phase (matches Hero doodle style)
const phaseDoodles = [
  "Where it all started ✨",
  "React & Motion obsessed 🎨",
  "Full-stack & Database ⚡",
  "Production & Real impact 🚀",
];

export default function ZigZagTimeline({ journey = [] }) {
  const containerRef = useRef(null);
  const pathDesktopRef = useRef(null);
  const pathMobileRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Desktop S-Curve Line Scrub Animation
      if (pathDesktopRef.current) {
        const length = pathDesktopRef.current.getTotalLength() || 1200;
        gsap.set(pathDesktopRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(pathDesktopRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        });
      }

      // 2. Mobile Curve Line Scrub Animation
      if (pathMobileRef.current) {
        const lengthMob = pathMobileRef.current.getTotalLength() || 1100;
        gsap.set(pathMobileRef.current, {
          strokeDasharray: lengthMob,
          strokeDashoffset: lengthMob,
        });

        gsap.to(pathMobileRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 85%",
            scrub: 1.2,
          },
        });
      }

      // 3. Zig-Zag Cards Scroll Appearance
      const cards = gsap.utils.toArray(".zigzag-card-wrap");
      cards.forEach((cardWrap, idx) => {
        const isEven = idx % 2 === 0;
        const xOffset = isEven ? -60 : 60;

        gsap.fromTo(
          cardWrap,
          {
            x: window.innerWidth >= 1024 ? xOffset : 0,
            y: window.innerWidth < 1024 ? 40 : 20,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: cardWrap,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // 4. Center Timeline Pulse Nodes
      gsap.fromTo(
        ".timeline-node-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [journey]);

  return (
    <div ref={containerRef} className="relative w-full py-6 select-none">
      {/* ── DESKTOP ANIMATED S-CURVE (Center Snake Line) ── */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1000 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Faint Dotted Background Track */}
          <path
            d="M 500 20 C 440 60, 440 100, 470 140 C 510 190, 560 350, 530 400 C 500 450, 440 610, 470 660 C 500 710, 560 870, 530 920 C 510 960, 500 990, 500 1020"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          {/* Animated Orange Path Scrubbed on Scroll */}
          <path
            ref={pathDesktopRef}
            d="M 500 20 C 440 60, 440 100, 470 140 C 510 190, 560 350, 530 400 C 500 450, 440 610, 470 660 C 500 710, 560 870, 530 920 C 510 960, 500 990, 500 1020"
            stroke="#FF9500"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── MOBILE ANIMATED CURVED LINE (Left-Aligned Wave) ── */}
      <div className="lg:hidden absolute top-0 bottom-0 left-6 sm:left-8 w-8 pointer-events-none z-0">
        <svg
          viewBox="0 0 40 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 20 10 C 28 150, 12 300, 20 450 C 28 600, 12 750, 20 900 C 24 950, 20 1000, 20 1020"
            stroke="#E5E7EB"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
          <path
            ref={pathMobileRef}
            d="M 20 10 C 28 150, 12 300, 20 450 C 28 600, 12 750, 20 900 C 24 950, 20 1000, 20 1020"
            stroke="#FF9500"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── ZIG-ZAG TIMELINE CARDS LIST ── */}
      <div className="relative z-10 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {journey.map((step, idx) => {
          const isEven = idx % 2 === 0; // true = Left side on desktop, false = Right side
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={step.num}
              className={`zigzag-card-wrap relative flex items-center w-full ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } pl-14 sm:pl-16 lg:pl-0`}
            >
              {/* ── CARD CONTENT (Takes 46% of width on Desktop) ── */}
              <div
                className={`w-full lg:w-[46%] ${
                  isEven ? "lg:mr-auto" : "lg:ml-auto"
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`group relative rounded-3xl bg-white border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                    isHovered
                      ? "border-[#FF9500] ring-2 ring-[#FF9500]/20"
                      : ""
                  }`}
                >
                  {/* ── HERO-MATCHING ORGANIC ORANGE CORNER WAVE SHAPE ── */}
                  <div
                    className="pointer-events-none absolute top-0 right-0 w-32 h-32 select-none overflow-hidden rounded-tr-3xl z-0 transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 140 140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                    >
                      {/* Organic curve identical to Hero wave aesthetics */}
                      <path
                        d="M140 0 H50 C60 25 80 45 70 75 C60 105 25 115 0 140 H140 V0 Z"
                        fill="#FF9500"
                      />
                    </svg>
                  </div>

                  {/* ── CARD CONTENT BODY ── */}
                  <div className="relative z-10">
                    {/* Header Row: Number Badge + Period Pill + Doodle Note */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        {/* Step Number with Hero Orange Badge */}
                        <div className="w-12 h-12 rounded-2xl bg-[#FF9500] text-white flex items-center justify-center font-black text-lg shadow-[0_4px_14px_rgba(255,149,0,0.35)] group-hover:scale-105 transition-transform">
                          {step.num}
                        </div>

                        {/* Phase Badge */}
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-black/5 text-[11px] font-bold text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500]" />
                          <span>{step.period}</span>
                        </div>
                      </div>

                      {/* Handwritten Caveat Doodle Note Matching Hero */}
                      <span className="font-doodle text-base sm:text-lg font-bold text-[#111111] -rotate-3 group-hover:text-[#FF9500] transition-colors">
                        {phaseDoodles[idx] || "Journey Step"}
                      </span>
                    </div>

                    {/* Highlight Tagline with Hero Section Dot */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-extrabold text-[#FF9500] uppercase tracking-[0.18em] block">
                        {step.highlight}
                      </span>
                    </div>

                    {/* Card Title — Heavy Italic Uppercase like Hero */}
                    <h4 className="font-black italic uppercase text-[#111111] text-xl sm:text-2xl leading-snug tracking-tight mb-3 group-hover:text-[#FF9500] transition-colors">
                      {step.title}
                    </h4>

                    {/* Natural Description */}
                    <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {step.desc}
                    </p>

                    {/* Skill Tags — Clean Pill Badges matching Hero styling */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                            isHovered
                              ? "bg-[#111111] text-white"
                              : "bg-[#FAF8F5] text-gray-700 border border-black/5 hover:bg-[#FF9500] hover:text-white"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── DESKTOP HORIZONTAL CONNECTING ARM (Line from Node to Card) ── */}
              <div
                className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 z-10 transition-all duration-300 pointer-events-none ${
                  isEven
                    ? "right-1/2 w-[4%] mr-4"
                    : "left-1/2 w-[4%] ml-4"
                } ${
                  isHovered
                    ? "bg-[#FF9500] shadow-[0_0_8px_rgba(255,149,0,0.6)]"
                    : "bg-gray-200 border-t border-dashed border-gray-300"
                }`}
              />

              {/* ── CENTER TIMELINE NODE / CHECKPOINT ── */}
              <div
                className={`timeline-node-dot absolute z-20 flex items-center justify-center ${
                  // Desktop: Centered on 50% line
                  "lg:left-1/2 lg:-translate-x-1/2 " +
                  // Mobile: Left aligned at 24px/32px
                  "left-6 sm:left-8 -translate-x-1/2"
                }`}
              >
                {/* Outer Glow Ring */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? "bg-[#FF9500]/25 scale-125"
                      : "bg-[#FF9500]/10"
                  }`}
                >
                  {/* Solid Center Orange Dot with White Ring */}
                  <div className="w-4 h-4 rounded-full bg-[#FF9500] border-2 border-white shadow-md flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
