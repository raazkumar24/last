import React from "react";

/**
 * =============================================================================
 * ORANGE BACKGROUND SHAPES — PREMIUM DECORATIVE SVG COMPONENTS
 * =============================================================================
 *
 * Shared orange decorative shapes for the portfolio.
 * Optimized and cleaned for production.
 * =============================================================================
 */

/* =============================================================================
   1. TOP LEFT SHAPE
   ============================================================================= */

export function OrangeTopLeftShape({
  variant = "hero",
  className = "",
  opacity = 1,
  color = "#FF9500",
}) {
  const isAbout = variant === "about";

  if (isAbout) {
    return (
      <div
        className={`pointer-events-none absolute top-0 left-0 z-0
          w-[38vw] max-w-[480px] min-w-[240px]
          h-[100vh] min-h-[600px]
          select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 440 1100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="aboutOrange"
              x1="20"
              y1="0"
              x2="300"
              y2="1050"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFB52E" />
              <stop offset="42%" stopColor="#FF9500" />
              <stop offset="75%" stopColor="#FF7800" />
              <stop offset="100%" stopColor="#FF5A00" />
            </linearGradient>

            <linearGradient id="aboutHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.38" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <filter id="aboutGlow" x="-50%" y="-20%" width="180%" height="140%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>

          <path
            d="M0 0 H250 C205 70 105 125 65 225 C25 325 65 400 150 475 C230 545 240 635 170 720 C100 805 30 855 55 945 C70 1000 45 1045 0 1080 Z"
            fill={color}
            fillOpacity="0.16"
            filter="url(#aboutGlow)"
          />

          <path
            d="M0 0 H245 C205 70 105 125 65 225 C25 325 65 400 150 475 C230 545 240 635 170 720 C100 805 30 855 55 945 C70 1000 45 1045 0 1080 Z"
            fill="url(#aboutOrange)"
            fillOpacity={opacity}
          />

          <path
            d="M0 0 H205 C165 75 90 135 60 220 C30 305 65 370 135 435 C195 495 210 580 150 665 C90 750 40 805 65 890 C80 945 55 995 15 1035"
            fill="none"
            stroke="url(#aboutHighlight)"
            strokeWidth="32"
            strokeLinecap="round"
            opacity="0.58"
          />

          <path
            d="M245 0 C205 70 105 125 65 225 C25 325 65 400 150 475 C230 545 240 635 170 720 C100 805 30 855 55 945 C70 1000 45 1045 0 1080"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`bg-wave-left pointer-events-none absolute top-0 left-0 z-0
        w-[44vw] max-w-[560px] min-w-[280px]
        h-[78vh] min-h-[600px]
        select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 540 850"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="heroOrange"
            x1="0"
            y1="0"
            x2="540"
            y2="850"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="42%" stopColor="#FF9500" />
            <stop offset="75%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id="heroGlow" x="-50%" y="-30%" width="180%" height="160%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        <path
          d="M0 0 H310 C245 70 145 115 105 205 C60 310 105 390 190 465 C270 535 290 625 215 710 C145 790 60 815 0 850 Z"
          fill={color}
          fillOpacity="0.18"
          filter="url(#heroGlow)"
        />

        <path
          d="M0 0 H300 C235 70 135 115 95 205 C50 310 95 390 180 465 C260 535 280 625 205 710 C135 790 50 815 0 850 Z"
          fill="url(#heroOrange)"
          fillOpacity={opacity}
        />

        <path
          d="M275 0 C220 80 125 120 90 215 C55 305 100 380 175 450 C240 515 260 600 195 680"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.42"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =============================================================================
   2. BOTTOM HERO WAVE
   ============================================================================= */

export function OrangeBottomHeroWave({
  className = "",
  opacity = 1,
  color = "#FF9500",
}) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-0 right-0 z-0
        h-[34vh] max-h-[360px] min-h-[180px]
        select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="bottomOrange"
            x1="720"
            y1="0"
            x2="720"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="40%" stopColor="#FF9500" />
            <stop offset="72%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id="bottomGlow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <path
          d="M0 280 C180 190 300 300 470 315 C650 330 700 170 875 205 C1060 240 1130 325 1440 175 V360 H0 Z"
          fill={color}
          fillOpacity="0.16"
          filter="url(#bottomGlow)"
        />

        <path
          d="M0 285 C170 205 300 300 470 320 C650 340 710 175 875 210 C1060 250 1130 330 1440 165 V360 H0 Z"
          fill="url(#bottomOrange)"
          fillOpacity={opacity}
        />

        <path
          d="M0 315 C190 240 300 330 480 340 C650 350 730 220 875 245 C1050 275 1150 345 1440 205 V360 H0 Z"
          fill="white"
          fillOpacity="0.08"
        />

        <path
          d="M0 285 C170 205 300 300 470 320 C650 340 710 175 875 210 C1060 250 1130 330 1440 165"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.42"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =============================================================================
   3. RIGHT ACCENT SHAPE
   ============================================================================= */

export function OrangeRightAccentShape({
  className = "",
  opacity = 0.9,
  color = "#FF9500",
}) {
  return (
    <div
      className={`pointer-events-none absolute -top-8 right-0 z-0
        w-[32vw] max-w-[460px] min-w-[250px]
        h-[76vh] max-h-[760px]
        hidden md:block select-none ${className}`}
     
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 460 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="rightAccentGradient"
            x1="460"
            y1="-20"
            x2="100"
            y2="760"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="40%" stopColor="#FF9500" />
            <stop offset="72%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id="rightAccentGlow" x="-80%" y="-20%" width="220%" height="140%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <path
          d="M460 -20 C386 20 318 78 290 152 C254 252 290 320 334 374 C380 430 378 500 334 574 C298 638 330 704 460 760 Z"
          fill={color}
          fillOpacity="0.10"
          filter="url(#rightAccentGlow)"
        />

        <path
          d="M460 -20 C390 18 318 70 290 148 C254 250 290 318 334 372 C380 428 378 496 334 574 C298 638 330 704 460 760 Z"
          fill="url(#rightAccentGradient)"
          fillOpacity={opacity}
        />

        <path
          d="M454 8 C392 48 348 92 330 156 C304 244 328 308 362 358 C392 404 398 464 360 534 C326 596 346 654 452 724"
          fill="none"
          stroke="white"
          strokeWidth="30"
          strokeLinecap="round"
          strokeOpacity="0.09"
        />

        <path
          d="M460 -8 C390 26 318 78 290 150 C254 250 290 318 334 372 C380 428 378 496 334 574 C298 638 330 704 460 748"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.38"
        />

        <path
          d="M460 -16 C426 38 394 92 376 156 C350 248 374 314 404 366 C430 416 428 488 390 556 C358 616 382 690 460 760"
          fill="none"
          stroke="#FFD27A"
          strokeWidth="16"
          strokeLinecap="round"
          strokeOpacity="0.20"
        />

        <circle cx="245" cy="175" r="24" fill={color} fillOpacity="0.18" />
        <circle cx="225" cy="240" r="9" fill={color} fillOpacity="0.22" />
      </svg>
    </div>
  );
}

/* =============================================================================
   4. LEFT ACCENT SHAPE
   ============================================================================= */

export function OrangeLeftAccentShape({
  className = "",
  opacity = 0.9,
  color = "#FF9500",
}) {
  return (
    <div
      className={`pointer-events-none absolute -top-8 left-0 z-0
        w-[32vw] max-w-[460px] min-w-[250px]
        h-[76vh] max-h-[760px]
        hidden md:block select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 460 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="leftAccentGradient"
            x1="0"
            y1="-20"
            x2="360"
            y2="760"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="40%" stopColor="#FF9500" />
            <stop offset="72%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id="leftAccentGlow" x="-80%" y="-20%" width="220%" height="140%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <path
          d="M0 -20 C74 20 142 78 170 152 C206 252 170 320 126 374 C80 430 82 500 126 574 C162 638 130 704 0 760 Z"
          fill={color}
          fillOpacity="0.10"
          filter="url(#leftAccentGlow)"
        />

        <path
          d="M0 -20 C70 18 142 70 170 148 C206 250 170 318 126 372 C80 428 82 496 126 574 C162 638 130 704 0 760 Z"
          fill="url(#leftAccentGradient)"
          fillOpacity={opacity}
        />

        <path
          d="M6 8 C68 48 112 92 130 156 C156 244 132 308 98 358 C68 404 62 464 100 534 C134 596 114 654 8 724"
          fill="none"
          stroke="white"
          strokeWidth="30"
          strokeLinecap="round"
          strokeOpacity="0.09"
        />

        <path
          d="M0 -8 C70 26 142 78 170 150 C206 250 170 318 126 372 C80 428 82 496 126 574 C162 638 130 704 0 748"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.38"
        />

        <path
          d="M0 -16 C34 38 66 92 84 156 C110 248 86 314 56 366 C30 416 32 488 70 556 C102 616 78 690 0 760"
          fill="none"
          stroke="#FFD27A"
          strokeWidth="16"
          strokeLinecap="round"
          strokeOpacity="0.20"
        />

        <circle cx="215" cy="175" r="24" fill={color} fillOpacity="0.18" />
        <circle cx="235" cy="240" r="9" fill={color} fillOpacity="0.22" />
      </svg>
    </div>
  );
}

/* =============================================================================
   5. BOTTOM RIGHT SHAPE
   ============================================================================= */

export function OrangeBottomRightShape({
  className = "",
  opacity = 0.95,
  color = "#FF9500",
}) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 right-0 z-0
        w-[38vw] max-w-[500px]
        h-[40vh] max-h-[440px]
        select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="bottomRightOrange"
            x1="500"
            y1="440"
            x2="170"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FF5A00" />
            <stop offset="45%" stopColor="#FF7800" />
            <stop offset="70%" stopColor="#FF9500" />
            <stop offset="100%" stopColor="#FFB52E" />
          </linearGradient>

          <filter id="bottomRightGlow" x="-30%" y="-30%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <path
          d="M500 440 H125 C205 365 275 320 310 245 C350 160 410 75 500 25 Z"
          fill={color}
          fillOpacity="0.14"
          filter="url(#bottomRightGlow)"
        />

        <path
          d="M500 440 H100 C190 360 270 315 305 235 C345 145 410 65 500 20 Z"
          fill="url(#bottomRightOrange)"
          fillOpacity={opacity}
        />

        <path
          d="M500 440 H155 C235 365 300 320 335 245 C370 165 420 95 500 50 Z"
          fill="white"
          fillOpacity="0.07"
        />

        <path
          d="M105 440 C190 360 270 315 305 235 C345 145 410 65 500 20"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.38"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =============================================================================
   6. JOURNEY CARD BLOB
   ============================================================================= */

export function OrangeJourneyCardBlob({
  position = "top-right",
  size = "md",
  className = "",
  color = "#FF9500",
}) {
  const sizeMap = {
    sm: "w-44 h-44 sm:w-52 sm:h-52",
    md: "w-52 h-52 sm:w-64 sm:h-64",
    lg: "w-60 h-60 sm:w-72 sm:h-72",
  };

  const posMap = {
    "top-right": "-top-8 -right-8 sm:-top-10 sm:-right-10",
    "top-left": "-top-8 -left-8 sm:-top-10 sm:-left-10",
    "bottom-right": "-bottom-10 -right-8 sm:-bottom-12 sm:-right-10",
    "bottom-left": "-bottom-8 -left-8 sm:-bottom-10 sm:-left-10",
  };

  const sizeClass = sizeMap[size] ?? sizeMap.md;
  const posClass = posMap[position] ?? posMap["top-right"];
  const gradId = `blobGrad-${position}-${size}`;

  return (
    <div
      className={`pointer-events-none absolute z-0 select-none
        ${sizeClass} ${posClass}
        transition-transform duration-500 group-hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_30px_rgba(255,138,0,0.38)]"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="20"
            y1="20"
            x2="240"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="45%" stopColor="#FF9500" />
            <stop offset="72%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id={`${gradId}-glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <path
          d="M45 15 H215 C238 15 250 27 250 50 V210 C250 233 238 245 215 245 H45 C22 245 10 233 10 210 V50 C10 27 22 15 45 15 Z"
          fill={color}
          fillOpacity="0.20"
          filter={`url(#${gradId}-glow)`}
        />

        <path
          d="M45 15 H215 C238 15 250 27 250 50 V210 C250 233 238 245 215 245 H45 C22 245 10 233 10 210 V50 C10 27 22 15 45 15 Z"
          fill={`url(#${gradId})`}
        />

        <path
          d="M45 15 H215 C238 15 250 27 250 50 V210 C250 233 238 245 215 245 H45 C22 245 10 233 10 210 V50 C10 27 22 15 45 15 Z"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeOpacity="0.30"
        />

        <path
          d="M55 20 H180 C200 20 215 30 220 48"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
}

/* =============================================================================
   7. CTA BOTTOM WAVE
   ============================================================================= */

export function OrangeCtaBottomWave({
  className = "",
  color = "#FF8A00",
  opacity = 1,
}) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-0 z-0
        w-[55vw] max-w-[620px]
        h-[38vh] min-h-[200px]
        select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 620 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="ctaWaveGradient"
            x1="0"
            y1="380"
            x2="620"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="45%" stopColor="#FF9500" />
            <stop offset="75%" stopColor="#FF7800" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>

          <filter id="ctaWaveGlow" x="-20%" y="-30%" width="160%" height="180%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        <path
          d="M0 380 H460 C370 295 285 235 185 215 C95 195 40 115 0 55 V380 Z"
          fill={color}
          fillOpacity="0.14"
          filter="url(#ctaWaveGlow)"
        />

        <path
          d="M0 380 H450 C360 300 280 240 180 220 C90 200 40 120 0 60 V380 Z"
          fill="url(#ctaWaveGradient)"
          fillOpacity={opacity}
        />

        <path
          d="M0 380 H380 C300 315 230 268 145 248 C65 228 28 148 0 95 V380 Z"
          fill="white"
          fillOpacity="0.07"
        />

        <path
          d="M0 60 C40 120 90 200 180 220 C280 240 360 300 450 380"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeOpacity="0.38"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =============================================================================
   8. UNIFIED WRAPPER
   ============================================================================= */

export default function OrangeBackgroundShapes({
  position = "top-left",
  variant = "hero",
  className = "",
  blobPos = "top-right",
  blobSize = "md",
  opacity,
  color = "#FF9500",
}) {
  switch (position) {
    case "top-left":
      return (
        <OrangeTopLeftShape
          variant={variant}
          className={className}
          opacity={opacity ?? (variant === "about" ? 0.95 : 1)}
          color={color}
        />
      );

    case "bottom-hero":
      return (
        <OrangeBottomHeroWave
          className={className}
          opacity={opacity ?? 1}
          color={color}
        />
      );

    case "right-accent":
      return (
        <OrangeRightAccentShape
          className={className}
          opacity={opacity ?? 0.9}
          color={color}
        />
      );

    case "left-accent":
      return (
        <OrangeLeftAccentShape
          className={className}
          opacity={opacity ?? 0.9}
          color={color}
        />
      );

    case "bottom-right":
      return (
        <OrangeBottomRightShape
          className={className}
          opacity={opacity ?? 0.95}
          color={color}
        />
      );

    case "card-blob":
      return (
        <OrangeJourneyCardBlob
          position={blobPos}
          size={blobSize}
          className={className}
          color={color}
        />
      );

    case "cta-bottom":
      return (
        <OrangeCtaBottomWave
          className={className}
          color={color}
          opacity={opacity ?? 1}
        />
      );

    default:
      return null;
  }
}