/**
 * =============================================================================
 * CENTRAL COMPONENTS EXPORT (Reusable Design System)
 * =============================================================================
 * Yahan se aap portfolio ke sabhi reusable components ko directly import
 * kar sakte hain:
 *
 * Example:
 * import {
 *   OrangeBackgroundShapes,
 *   SunburstRays,
 *   HandDrawnUnderline,
 *   DoodleCard,
 *   OrangeButton,
 *   GhostButton,
 *   SectionBadge,
 *   CtaBanner
 * } from "./components";
 * =============================================================================
 */

// Background & Decorative Shapes
export {
  default as OrangeBackgroundShapes,
  OrangeTopLeftShape,
  OrangeBottomHeroWave,
  OrangeRightAccentShape,
  OrangeBottomRightShape,
} from "./OrangeShapes.jsx";

// Accents & Hand-drawn Flourishes
export {
  default as SunburstRays,
  AccentRays,
} from "./SunburstRays.jsx";

export { default as HandDrawnUnderline } from "./HandDrawnUnderline.jsx";

export {
  default as DoodleCard,
  LeftDoodle,
} from "./DoodleCard.jsx";

// Buttons
export {
  OrangeButton,
  GhostButton,
} from "./Buttons.jsx";

// Badges & Headers
export { default as SectionBadge } from "./SectionBadge.jsx";
export { default as SectionHeader } from "./SectionHeader.jsx";

// Cards & Interactive Modules
export { default as DeveloperSpotlightCard } from "./DeveloperSpotlightCard.jsx";
export { default as PillarCard } from "./PillarCard.jsx";
export { default as TechCard } from "./TechCard.jsx";
export { default as CtaBanner } from "./CtaBanner.jsx";
export { default as SocialPill } from "./SocialPill.jsx";
export {
  default as StatItem,
  StatDivider,
} from "./StatItem.jsx";
export {
  default as ZigZagTimeline,
} from "./ZigZagTimeline.jsx";

// Global Layout
export { default as Navbar } from "./Navbar.jsx";
export { default as Marquee } from "./Marquee.jsx";
