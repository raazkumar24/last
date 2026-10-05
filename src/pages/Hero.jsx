import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SectionBadge from "../components/SectionBadge";
import { OrangeButton, GhostButton } from "../components/Buttons";
import SocialPill, {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "../components/SocialPill";
import { StatItem, StatDivider } from "../components/StatItem";

// ── Reusable Component Imports ────────────────────────────────────────────────
import {
  OrangeTopLeftShape,
  OrangeBottomHeroWave,
} from "../components/OrangeShapes";
import SunburstRays, { AccentRays } from "../components/SunburstRays";
import HandDrawnUnderline from "../components/HandDrawnUnderline";
import DoodleCard, { LeftDoodle } from "../components/DoodleCard";

// ─── Typewriter roles ─────────────────────────────────────────────────────────
const roles = [
  "Web Developer",
  "Frontend Developer",
  "MERN Stack Developer",
  "React Developer",
];

// ─── Social links data ────────────────────────────────────────────────────────
const socialLinks = [
  { href: "https://github.com", title: "GitHub Profile", icon: GitHubIcon },
  {
    href: "https://linkedin.com",
    title: "LinkedIn Profile",
    icon: LinkedInIcon,
  },
  {
    href: "https://instagram.com",
    title: "Instagram Profile",
    icon: InstagramIcon,
  },
];

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  { value: "10+", label: "Projects" },
  { value: "2+", label: "Years Learning" },
  { value: "100%", label: "Dedication" },
];

// ═════════════════════════════════════════════════════════════════════════════
// HERO PAGE
// ═════════════════════════════════════════════════════════════════════════════
function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef(null);
  const underlineRef = useRef(null);
  const raysRef = useRef(null);
  const profileRef = useRef(null);
  const socialRef = useRef(null);
  const doodle1Ref = useRef(null);
  const doodle2Ref = useRef(null);

  // ── Typewriter effect ──────────────────────────────────────────────────────
  useEffect(() => {
    const targetText = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(targetText.substring(0, displayedText.length + 1));
          if (displayedText === targetText) setIsDeleting(true);
        } else {
          setDisplayedText(targetText.substring(0, displayedText.length - 1));
          if (displayedText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      !isDeleting && displayedText === targetText ? 2200 : isDeleting ? 40 : 85,
    );
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // ── GSAP entrance + idle animations ───────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".bg-wave-left", {
        x: -80,
        opacity: 0,
        duration: 1.1,
        clearProps: "transform",
      })

        .from(
          ".hero-stagger",
          { y: 30, opacity: 0, stagger: 0.08, duration: 0.75 },
          "-=0.6",
        )
        .fromTo(
          underlineRef.current,
          { strokeDashoffset: 400, strokeDasharray: 400 },
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        )
        .from(
          raysRef.current,
          {
            scale: 0,
            opacity: 0,
            transformOrigin: "bottom center",
            duration: 0.5,
            ease: "back.out(2.2)",
          },
          "-=0.6",
        )
        .from(profileRef.current, { y: 80, opacity: 0, duration: 1.1 }, "-=0.8")
        .from(
          [doodle1Ref.current, doodle2Ref.current],
          {
            scale: 0.6,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(1.8)",
          },
          "-=0.5",
        )
        .from(
          socialRef.current,
          { x: 35, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.6",
        );

      // Idle float animations
      gsap.to(socialRef.current, {
        y: -7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to([doodle1Ref.current, doodle2Ref.current], {
        y: -4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full flex-1 flex flex-col justify-between overflow-hidden bg-[#FAF8F5] pt-16 sm:pt-20 select-none"
    >
      {/* ── REUSABLE ORANGE BACKGROUND SHAPES ── */}
      {/* Top Left Organic Flowing Wave */}
      <OrangeTopLeftShape variant="hero" />

      {/* Bottom Dual Organic Waves */}
      <OrangeBottomHeroWave />

      {/* ── MAIN CONTAINER ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-end pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-end flex-1">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col justify-center z-20 pt-4 pb-6 sm:pb-10 self-center">
            <SectionBadge
              label="HELLO, I'M"
              className="hero-stagger mb-2 sm:mb-3"
            />

            {/* Title with Reusable Sunburst & Animated Underline */}
            <div className="relative inline-block my-0.5 sm:my-1">
              <SunburstRays
                forwardRef={raysRef}
                className="absolute -top-6 sm:-top-8 left-[48%] sm:left-[50%] z-20 text-[#FF9500]"
              />
              <h1 className="hero-stagger whitespace-nowrap text-[2.75rem] xs:text-[3.5rem] sm:text-[4.6rem] md:text-[5.4rem] lg:text-[5.8rem] xl:text-[6.5rem] font-black italic uppercase text-[#111111] leading-none tracking-[-0.04em] select-none">
                RAJ SHEKHAR
              </h1>
              <HandDrawnUnderline
                pathRef={underlineRef}
                className="w-[85%] sm:w-[75%] ml-auto mr-4"
              />
            </div>

            {/* Typewriter */}
            <div className="hero-stagger mt-2 sm:mt-3">
              <h2 className="text-lg sm:text-2xl md:text-[1.85rem] font-bold text-[#111111] flex items-center flex-wrap">
                <span>I am a&nbsp;</span>
                <span className="text-[#FF9500] font-extrabold">
                  {displayedText}
                </span>
                <span className="text-[#FF9500] font-light animate-blink ml-0.5">
                  |
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="hero-stagger mt-2.5 sm:mt-3.5 text-[#4B5563] text-xs sm:text-sm md:text-[0.98rem] leading-relaxed max-w-lg font-normal">
              I build modern, responsive and user-focused websites that help
              businesses grow. Passionate about clean code, creative design and
              real-world solutions.
            </p>

            {/* CTA Buttons */}
            <div className="hero-stagger mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
              <OrangeButton href="#works">VIEW MY WORK</OrangeButton>
              <GhostButton href="#contact">CONTACT ME</GhostButton>
            </div>

            {/* Stats Row */}
            <div className="hero-stagger mt-6 sm:mt-8 pt-4 border-t border-black/10 flex items-center gap-5 sm:gap-8 max-w-md">
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <StatItem value={stat.value} label={stat.label} />
                  {i < stats.length - 1 && <StatDivider />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-6 relative flex items-end justify-center self-end w-full overflow-visible">
            {/* Reusable Accent Rays */}
            <AccentRays side="left" />
            <AccentRays side="right" />

            {/* Doodle 1: Top-right (Reusable DoodleCard) */}
            <DoodleCard
              forwardRef={doodle1Ref}
              containerClass="absolute -top-4 sm:top-0 right-1 sm:right-4 lg:-right-6 items-end z-20"
              text={
                <>
                  Turning
                  <br />
                  Ideas Into
                  <br />
                  Real Websites
                </>
              }
              arrowPath="M 55 10 C 50 35, 30 45, 15 52"
              arrowheadPath="M 26 42 L 14 52 L 24 62"
              arrowClass="w-10 h-10 sm:w-14 sm:h-14"
            />

            {/* Doodle 2: Left of profile (Reusable LeftDoodle) */}
            <LeftDoodle forwardRef={doodle2Ref} />

            {/* Profile Image */}
            <div
              ref={profileRef}
              className="relative z-10 w-full max-w-[480px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[900px] flex items-end justify-center -mb-[1px]"
            >
              <img
                src="/profile.png"
                alt="Raj Shekhar"
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] block"
              />
            </div>

            {/* Social Pill */}
            <SocialPill
              forwardRef={socialRef}
              links={socialLinks}
              className="absolute right-0 sm:-right-3 lg:-right-6 top-[34%] sm:top-[36%] z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
