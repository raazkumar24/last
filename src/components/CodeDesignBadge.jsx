import React from "react";

/**
 * CodeDesignBadge
 * Faithful recreation of the hand-drawn sticker/badge graphic:
 * - Organic vibrant orange blob (#FF8F00 / #FF8000)
 * - Sketchy irregular black pen loop encircling the blob
 * - Rotated bold italic typography: CODE, DESIGN (enclosed in white capsule/oval), BUILD, REPEAT
 * - Hand-drawn doodle notes & arrows:
 *   - "Turning / Ideas Into / Real Websites" with curved hand-drawn arrow
 *   - "Curious / Creative / Problem Solver" with curved hand-drawn arrow
 * - Hand-drawn orange burst strokes on left and bottom-right
 */
export default function CodeDesignBadge({ className = "" }) {
  return (
    <div
      className={`relative w-full max-w-[540px] aspect-[540/480] mx-auto select-none flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 540 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Rich warm orange gradient */}
          <linearGradient
            id="blobOrange"
            x1="140"
            y1="80"
            x2="420"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFA000" />
            <stop offset="45%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#FF7300" />
          </linearGradient>

          {/* Translucent white gloss for DESIGN ellipse */}
          <linearGradient id="pillGloss" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* ── 1. ORANGE BURST RAYS (LEFT) ── */}
        <g stroke="#FF8A00" strokeWidth="4" strokeLinecap="round">
          {/* Top ray: angled up-left */}
          <path d="M72 170 L52 154" />
          {/* Middle ray: angled left */}
          <path d="M60 200 L32 196" />
          {/* Bottom ray: angled down-left */}
          <path d="M68 232 L44 246" />
        </g>

        {/* ── 2. ORANGE BURST RAYS (BOTTOM-RIGHT) ── */}
        <g stroke="#FF8A00" strokeWidth="4" strokeLinecap="round">
          {/* Top ray: angled up-right */}
          <path d="M472 360 L502 368" />
          {/* Middle ray: angled down-right */}
          <path d="M462 390 L488 412" />
          {/* Bottom ray: angled steep down */}
          <path d="M444 416 L462 440" />
        </g>

        {/* ── 3. ORGANIC ORANGE BLOB ── */}
        {/* Curvature faithfully mirrors the organic shape in the reference image */}
        <path
          d="M 160 170
             C 145 130, 185 85, 255 78
             C 320 70, 395 85, 430 145
             C 460 195, 465 260, 445 320
             C 425 380, 355 425, 280 420
             C 210 415, 175 385, 145 340
             C 120 295, 110 240, 140 190
             C 148 178, 155 174, 160 170 Z"
          fill="url(#blobOrange)"
        />

        {/* ── 4. LOOSE SKETCHY BLACK WIRE LOOP ── */}
        {/* Irregular hand-drawn loop encircling the blob with authentic wobble */}
        <path
          d="M 152 145
             C 185 75, 290 52, 385 75
             C 450 90, 480 180, 465 275
             C 450 365, 360 442, 250 435
             C 165 428, 110 345, 125 240
             C 132 190, 160 135, 220 105
             C 260 85, 320 80, 365 95"
          fill="none"
          stroke="#111111"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* ── 5. ROTATED CENTRAL TYPOGRAPHY (-16.5 DEG) ── */}
        <g transform="rotate(-16.5 285 245)">
          {/* 5A. "CODE" (BOLD BLACK) */}
          <text
            x="285"
            y="180"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Plus Jakarta Sans', Impact, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="54"
            letterSpacing="-0.5px"
            className="select-none"
          >
            CODE
          </text>

          {/* 5B. WHITE CAPSULE / OVAL BEHIND "DESIGN" */}
          <ellipse
            cx="285"
            cy="218"
            rx="125"
            ry="40"
            fill="url(#pillGloss)"
            stroke="#FFFFFF"
            strokeWidth="2.8"
          />

          {/* Subtle glossy highlight inside top of oval */}
          <path
            d="M 185 212 C 220 195, 350 195, 385 212"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            strokeLinecap="round"
          />

          {/* 5C. "DESIGN" (BOLD WHITE) */}
          <text
            x="285"
            y="234"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', Impact, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="52"
            letterSpacing="-0.5px"
            className="select-none"
          >
            DESIGN
          </text>

          {/* 5D. "BUILD" (BOLD BLACK) */}
          <text
            x="285"
            y="292"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Plus Jakarta Sans', Impact, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="54"
            letterSpacing="-0.5px"
            className="select-none"
          >
            BUILD
          </text>

          {/* 5E. "REPEAT" (BOLD BLACK) */}
          <text
            x="285"
            y="346"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Plus Jakarta Sans', Impact, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="54"
            letterSpacing="-0.5px"
            className="select-none"
          >
            REPEAT
          </text>
        </g>

        {/* ── 6. TOP RIGHT ANNOTATION: "Turning / Ideas Into / Real Websites" ── */}
        <g transform="rotate(2 475 55)">
          <text
            x="475"
            y="30"
            textAnchor="middle"
            fontFamily="'Caveat', cursive"
            fontSize="24"
            fontWeight="700"
            fill="#111111"
            className="select-none"
          >
            <tspan x="475" dy="0">
              Turning
            </tspan>
            <tspan x="475" dy="22">
              Ideas Into
            </tspan>
            <tspan x="475" dy="22">
              Real Websites
            </tspan>
          </text>

          {/* Hand-drawn curved arrow pointing down-left toward the blob */}
          <path
            d="M 470 92 C 462 118, 445 132, 428 138"
            fill="none"
            stroke="#111111"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M 438 130 L 426 138 L 434 148"
            fill="none"
            stroke="#111111"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── 7. BOTTOM LEFT ANNOTATION: "Curious / Creative / Problem Solver" ── */}
        <g transform="rotate(-8 60 380)">
          <text
            x="60"
            y="360"
            textAnchor="start"
            fontFamily="'Caveat', cursive"
            fontSize="24"
            fontWeight="700"
            fill="#111111"
            className="select-none"
          >
            <tspan x="60" dy="0">
              Curious
            </tspan>
            <tspan x="60" dy="22">
              Creative
            </tspan>
            <tspan x="60" dy="22">
              Problem Solver
            </tspan>
          </text>

          {/* Hand-drawn curved arrow sweeping down and up towards the blob */}
          <path
            d="M 95 428 C 115 452, 148 450, 172 432"
            fill="none"
            stroke="#111111"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M 160 435 L 174 430 L 172 444"
            fill="none"
            stroke="#111111"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
