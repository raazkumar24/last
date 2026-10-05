import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HandDrawnUnderline from "../components/HandDrawnUnderline";
import SunburstRays from "../components/SunburstRays";
import OrangeTopLeftShape from "../components/OrangeShapes";
import {
  OrangeRightAccentShape,
  OrangeJourneyCardBlob,
OrangeLeftAccentShape
} from "../components/OrangeShapes";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    num: "01",
    year: "2021",
    title: "CURIOUS BEGINNINGS",
    desc: "I started with a simple curiosity about how websites and apps work. That curiosity slowly turned into a passion.",
    tags: ["HTML", "CSS", "JavaScript"],
    side: "left",
  },
  {
    num: "02",
    year: "2022 – 2023",
    title: "EXPLORING & LEARNING",
    desc: "I dived deeper into frontend development and learned React. I also explored backend technologies like Node.js and Express.js.",
    tags: ["React", "Node.js", "Express.js"],
    side: "right",
  },
  {
    num: "03",
    year: "2023 – 2024",
    title: "BUILDING REAL PROJECTS",
    desc: "I started working on real projects like business websites, web apps and custom solutions. Each project taught me something new and made me better.",
    tags: ["MongoDB", "Tailwind CSS", "API Integration"],
    side: "left",
  },
  {
    num: "04",
    year: "2024 – Present",
    title: "GROWING & CREATING IMPACT",
    desc: "I'm now focused on building modern, scalable and user-focused websites that help businesses grow and create real impact.",
    tags: ["MERN Stack", "Deployment", "Real Clients"],
    side: "right",
  },
];

const techStack = [
  {
    name: "React",
    brandColor: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-[#00D8FF]">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    brandColor: "#F7DF1E",
    icon: (
      <div className="w-9 h-9 rounded-lg bg-[#F7DF1E] flex items-end justify-end p-1 shadow-sm">
        <span className="font-black text-[#111111] text-xs leading-none">JS</span>
      </div>
    ),
  },
  {
    name: "Node.js",
    brandColor: "#339933",
    icon: (
      <svg viewBox="0 0 32 32" className="w-9 h-9">
        <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#339933" />
        <path d="M16 6L7 11.2V20.8L16 26L25 20.8V11.2L16 6Z" fill="#43853D" />
        <text x="16" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">nJS</text>
      </svg>
    ),
  },
  {
    name: "Express.js",
    brandColor: "#000000",
    icon: (
      <div className="w-9 h-9 rounded-lg bg-[#F3F4F6] border border-black/15 flex items-center justify-center shadow-sm">
        <span className="font-extrabold text-[#111111] text-sm tracking-tighter">ex</span>
      </div>
    ),
  },
  {
    name: "MongoDB",
    brandColor: "#47A248",
    icon: (
      <svg viewBox="0 0 32 32" className="w-9 h-9">
        <path d="M16 2C15.5 3 10.7 11.3 10.7 18C10.7 24 14.4 28.7 16 30C17.6 28.7 21.3 24 21.3 18C21.3 11.3 16.5 3 16 2Z" fill="#47A248" />
        <path d="M16 2V30C17.6 28.7 21.3 24 21.3 18C21.3 11.3 16.5 3 16 2Z" fill="#499D4A" />
        <path d="M16 26C15.7 25 15.2 23 15.2 21C15.2 18 16 16 16 16V26Z" fill="#FFFFFF" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    brandColor: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-9 h-9">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Git",
    brandColor: "#F05032",
    icon: (
      <svg viewBox="0 0 32 32" className="w-9 h-9">
        <path d="M31.3 14.5L17.5 0.7C16.6-0.2 15.2-0.2 14.3 0.7L11.5 3.5L15.1 7.1C16 6.8 17 7 17.7 7.7C18.4 8.4 18.6 9.4 18.3 10.3L21.8 13.8C22.7 13.5 23.7 13.7 24.4 14.4C25.4 15.4 25.4 16.9 24.4 17.9C23.4 18.9 21.9 18.9 20.9 17.9C20.2 17.2 20 16.2 20.3 15.3L17.1 12.1V20.5C17.7 20.8 18.2 21.3 18.4 22C18.9 23.2 18.4 24.6 17.2 25.1C16 25.6 14.6 25.1 14.1 23.9C13.6 22.7 14.1 21.3 15.3 20.8C15.6 20.7 14.8 20.6 15.1 20.5V12C14.8 11.9 14.5 11.7 14.2 11.4C13.5 10.7 13.3 9.7 13.6 8.8L10 5.2L0.7 14.5C-0.2 15.4-0.2 16.8 0.7 17.7L14.5 31.5C15.4 32.4 16.8 32.4 17.7 31.5L31.3 17.9C32.2 17 32.2 15.4 31.3 14.5Z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    brandColor: "#181717",
    icon: (
      <svg viewBox="0 0 32 32" className="w-9 h-9">
        <path d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 7.02 25.7 6.7 24.8C6.52 24.34 5.74 22.92 5.06 22.54C4.5 22.24 3.7 21.5 5.04 21.48C6.3 21.46 7.2 22.64 7.5 23.12C8.94 25.56 11.26 24.88 12.18 24.46C12.32 23.42 12.74 22.72 13.2 22.32C9.64 21.92 5.9 20.54 5.9 14.42C5.9 12.68 6.52 11.24 7.54 10.12C7.38 9.72 6.82 8.08 7.7 5.88C7.7 5.88 9.04 5.46 12.08 7.52C13.36 7.16 14.72 6.98 16.08 6.98C17.44 6.98 18.8 7.16 20.08 7.52C23.12 5.44 24.46 5.88 24.46 5.88C25.34 8.08 24.78 9.72 24.62 10.12C25.64 11.24 26.26 12.66 26.26 14.42C26.26 20.56 22.5 21.92 18.94 22.32C19.52 22.82 20.02 23.78 20.02 25.28C20.02 27.44 20 29.18 20 29.72C20 30.16 20.3 30.64 21.1 30.48C27.44 28.36 32 22.38 32 16C32 7.16 24.84 0 16 0Z" fill="#181717" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    brandColor: "#007ACC",
    icon: (
      <svg viewBox="0 0 32 32" className="w-9 h-9">
        <path d="M23.5 2.5L18.5 0.5C17.5 0.1 16.5 0.4 15.8 1.1L8.5 8L3.2 3.8C2.3 3.1 1 3.3 0.4 4.2C0.1 4.6 0 5.1 0 5.6V26.4C0 26.9 0.1 27.4 0.4 27.8C1 28.7 2.3 28.9 3.2 28.2L8.5 24L15.8 30.9C16.5 31.6 17.5 31.9 18.5 31.5L23.5 29.5C24.4 29.1 25 28.2 25 27.2V4.8C25 3.8 24.4 2.9 23.5 2.5Z" fill="#007ACC" />
        <path d="M25 4.8L18.5 10.5L11.5 5L15.8 1.1C16.5 0.4 17.5 0.1 18.5 0.5L23.5 2.5C24.4 2.9 25 3.8 25 4.8Z" fill="#1F9CF0" />
        <path d="M25 27.2L18.5 21.5L11.5 27L15.8 30.9C16.5 31.6 17.5 31.9 18.5 31.5L23.5 29.5C24.4 29.1 25 28.2 25 27.2Z" fill="#0065A9" />
      </svg>
    ),
  },
];

const coreStrengths = [
  {
    title: "CLEAN & SCALABLE CODE",
    desc: "Writing modern, maintainable and well-structured code that's easy to scale.",
    icon: (
      <svg className="w-6 h-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "MODERN UI/UX DESIGN",
    desc: "Creating clean, minimal and smooth designs with a great user experience.",
    icon: (
      <svg className="w-6 h-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "FULL-STACK UNDERSTANDING",
    desc: "Comfortable working with frontend and backend technologies to build complete solutions.",
    icon: (
      <svg className="w-6 h-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "PROBLEM SOLVER MINDSET",
    desc: "I enjoy solving real problems and building practical solutions that create value.",
    icon: (
      <svg className="w-6 h-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function About() {
  const containerRef = useRef(null);
  const pathDesktopRef = useRef(null);
  const pathMobileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ab-intro-stagger",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ab-intro-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".ab-badge-wrap",
        { scale: 0.9, opacity: 0, rotate: -4 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".ab-intro-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".ab-journey-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ab-journey-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      if (pathDesktopRef.current) {
        const len = pathDesktopRef.current.getTotalLength() || 1300;
        gsap.set(pathDesktopRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(pathDesktopRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".ab-timeline-container",
            start: "top 75%",
            end: "bottom 75%",
            scrub: 1.2,
          },
        });
      }

      if (pathMobileRef.current) {
        const lenMob = pathMobileRef.current.getTotalLength() || 1200;
        gsap.set(pathMobileRef.current, { strokeDasharray: lenMob, strokeDashoffset: lenMob });
        gsap.to(pathMobileRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".ab-timeline-container",
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        });
      }

      gsap.utils.toArray(".ab-journey-card-row").forEach((row, i) => {
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          row.querySelector(".ab-card-inner"),
          {
            x: window.innerWidth >= 1024 ? (isLeft ? -50 : 50) : 0,
            y: 30,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".ab-tech-box",
        { y: 25, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".ab-tech-section",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".ab-strength-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ab-strengths-section",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".ab-cta-banner-wrap",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ab-cta-banner-wrap",
            start: "top 88%",
            once: true,
          },
        }
      );
    }, containerRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} id="about" className="relative w-full bg-[#FAF8F5] text-[#111111] overflow-hidden select-none font-sans">
      <OrangeTopLeftShape variant="about" />

      {/* 1. ABOUT ME (HERO / INTRO SECTION) */}
      <section className="ab-intro-section relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="ab-intro-stagger mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#ffbf00] opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ffbf00] shadow-[0_0_10px_rgba(255,149,0,0.6)]" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#333333] uppercase select-none">
                    ABOUT ME
                  </span>
                </div>
              </div>

              <div className="ab-intro-stagger relative inline-block mb-6 sm:mb-7">
                <div className="absolute -top-7 sm:-top-9 left-[47%] sm:left-[49%] pointer-events-none text-[#FF8A00]">
                  <SunburstRays />
                </div>
                <h1 className="font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-[3.2rem] sm:text-[4.4rem] lg:text-[5.2rem]">
                  <span className="text-[#111111] block">A LITTLE</span>
                  <span className="text-[#111111]">ABOUT </span>
                  <span className="text-[#FF8A00]">ME</span>
                </h1>
              </div>

              <p className="ab-intro-stagger text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-normal">
                I'm Raj Shekhar, a{" "}
                <strong className="text-[#111111] font-bold">Frontend Developer</strong>{" "}
                who loves building modern, responsive and user-focused websites that help businesses grow. I enjoy turning ideas into{" "}
                <strong className="text-[#111111] font-bold">real products</strong>{" "}
                with clean code, creative design and meaningful solutions.
              </p>

              <div className="ab-intro-stagger flex flex-wrap items-center gap-3.5">
                <a
                  href="#works"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#111111] hover:bg-[#FF8A00] text-white hover:text-[#111111] px-8 py-4 text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_28px_rgba(255,138,0,0.4)] active:scale-95"
                >
                  <span>VIEW MY WORK</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-[#111111] hover:border-[#FF8A00] text-[#111111] hover:text-[#FF8A00] px-7 py-[14px] text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  CONTACT ME
                </a>
              </div>
            </div>

            <div className="ab-badge-wrap lg:col-span-6 relative flex items-center justify-center w-full">
              <div className="relative w-full max-w-[540px] min-h-[420px] sm:min-h-[470px] flex items-center justify-center">
                <div className="absolute top-8 right-4 sm:right-8 w-52 h-52 rounded-full bg-[#FF8A00]/18 blur-3xl pointer-events-none" />
                <div className="absolute bottom-4 left-2 w-40 h-40 rounded-full bg-[#FF8A00]/12 blur-3xl pointer-events-none" />

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 470" fill="none" aria-hidden="true">
                  <path
                    d="M95 110 C145 38 245 28 310 72 C370 112 445 102 462 172 C480 248 414 286 438 348 C452 382 420 420 362 426"
                    stroke="#FF8A00"
                    strokeWidth="2.5"
                    strokeDasharray="7 9"
                    strokeLinecap="round"
                    opacity="0.38"
                  />
                  <circle cx="95" cy="110" r="5" fill="#FF8A00" opacity="0.8" />
                  <circle cx="438" cy="348" r="5" fill="#FF8A00" opacity="0.8" />
                </svg>

                <div className="relative z-10 w-[88%] sm:w-[82%]">
                  <div className="relative rounded-[2rem] bg-white/55 backdrop-blur-2xl border border-white/85 p-7 sm:p-9 shadow-[0_24px_60px_rgba(255,138,0,0.14),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#FF8A00]/12 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-1 bg-[#FF8A00]/70" />

                    <div className="relative z-10 flex items-center gap-2 mb-5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00] shadow-[0_0_12px_rgba(255,138,0,0.55)]" />
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#333333]">
                        WHAT I CARE ABOUT
                      </span>
                    </div>

                    <h3 className="relative z-10 font-black italic uppercase leading-[0.9] tracking-[-0.045em] text-[3rem] sm:text-[4rem] lg:text-[4.5rem] text-[#111111]">
                      BUILD
                      <br />
                      WITH
                      <br />
                      <span className="text-[#FF8A00]">PURPOSE.</span>
                    </h3>

                    <p className="relative z-10 max-w-sm mt-6 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      Good websites should look intentional, feel natural and solve a real problem — not just fill a screen.
                    </p>

                    <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 mt-7 pt-5 border-t border-black/10">
                      {[
                        ["01", "DESIGN"],
                        ["02", "CODE"],
                        ["03", "EXPERIENCE"],
                      ].map(([num, label]) => (
                        <div key={num} className="group">
                          <span className="block text-[#FF8A00] text-[10px] font-black tracking-widest mb-1">{num}</span>
                          <span className="block text-[10px] sm:text-xs font-black uppercase tracking-wide text-[#222222] group-hover:text-[#FF8A00] transition-colors">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -top-7 -right-2 sm:-right-8 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.10)] rotate-3 border border-black/5 z-20">
                    <p className="font-doodle text-sm text-[#111111] leading-tight">
                      Less noise.
                      <br />
                      <span className="text-[#FF8A00]">More purpose.</span>
                    </p>
                    <svg className="absolute -bottom-5 -left-3 w-8 h-8 text-[#111111]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M30 5 C25 18, 12 22, 8 32" />
                      <path d="M4 28 L8 32 L14 27" />
                    </svg>
                  </div>

                  <div className="absolute -bottom-6 -left-3 sm:-left-8 bg-[#FF8A00] rounded-2xl px-4 py-2.5 shadow-[0_10px_24px_rgba(255,138,0,0.25)] -rotate-3 z-20">
                    <p className="font-doodle text-sm text-[#111111] font-bold leading-tight">
                      Design.
                      <br />
                      Code.
                      <br />
                      Refine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MY JOURNEY */}
      <section className="relative z-10 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <OrangeRightAccentShape />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="ab-journey-header grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#222222]">
                  MY JOURNEY
                </span>
              </div>
              <div className="relative inline-block">
                <h2 className="font-black italic uppercase leading-[0.92] tracking-[-0.03em] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem]">
                  <span className="text-[#111111] block">FROM CURIOSITY</span>
                  <span className="text-[#111111]">TO </span>
                  <span className="text-[#FF8A00]">CREATION</span>
                </h2>
                <HandDrawnUnderline className="w-[85%] sm:w-[75%] ml-auto mr-2 -mt-2" color="#FF8A00" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="text-[#4B5563] text-base sm:text-lg font-light leading-relaxed max-w-md">
                A journey of continuous learning, building and turning ideas into real-world projects.
              </p>
            </div>
          </div>

          <div className="ab-timeline-container relative">
            <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
              <svg viewBox="0 0 1000 1150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 500 30 C 500 80, 420 110, 420 170 C 420 230, 580 250, 580 330 C 580 410, 420 430, 420 510 C 420 590, 580 610, 580 690 C 580 770, 420 790, 420 870 C 420 950, 580 970, 580 1050 C 580 1090, 520 1110, 500 1120"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
                <path
                  ref={pathDesktopRef}
                  d="M 500 30 C 500 80, 420 110, 420 170 C 420 230, 580 250, 580 330 C 580 410, 420 430, 420 510 C 420 590, 580 610, 580 690 C 580 770, 420 790, 420 870 C 420 950, 580 970, 580 1050 C 580 1090, 520 1110, 500 1120"
                  stroke="#FF8A00"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-12 sm:gap-16 lg:gap-24">
              {journeySteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={step.num}
                    className={`ab-journey-card-row relative flex items-center w-full pl-16 sm:pl-20 lg:pl-0 ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`w-full lg:w-[46%] ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}>
                      <div className="relative group">
                        {idx === 0 && <OrangeJourneyCardBlob position="top-right" size="md" />}
                        {idx === 1 && <OrangeJourneyCardBlob position="bottom-right" size="lg" />}
                        {idx === 2 && <OrangeJourneyCardBlob position="bottom-left" size="md" />}
                        {idx === 3 && <OrangeJourneyCardBlob position="bottom-right" size="lg" />}

                        {idx === 0 && (
                          <div className="pointer-events-none absolute -top-5 -left-3 text-[#FF8A00] select-none z-20">
                            <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <line x1="8" y1="32" x2="18" y2="12" />
                              <line x1="22" y1="36" x2="32" y2="18" />
                            </svg>
                          </div>
                        )}
                        {idx === 1 && (
                          <div className="pointer-events-none absolute -top-5 -right-3 text-[#FF8A00] select-none z-20">
                            <svg className="w-8 h-8 rotate-12" viewBox="0 0 45 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <line x1="8" y1="32" x2="2" y2="14" />
                              <line x1="22" y1="26" x2="22" y2="6" />
                              <line x1="36" y1="32" x2="42" y2="14" />
                            </svg>
                          </div>
                        )}
                        {idx === 2 && (
                          <div className="pointer-events-none absolute top-10 -left-6 text-[#FF8A00] select-none z-20">
                            <svg className="w-7 h-7 -rotate-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <line x1="28" y1="12" x2="8" y2="24" />
                              <line x1="30" y1="26" x2="10" y2="34" />
                            </svg>
                          </div>
                        )}
                        {idx === 3 && (
                          <div className="pointer-events-none absolute top-12 -right-6 text-[#FF8A00] select-none z-20">
                            <svg className="w-8 h-8" viewBox="0 0 45 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <line x1="10" y1="20" x2="35" y2="8" />
                              <line x1="8" y1="30" x2="38" y2="26" />
                              <line x1="12" y1="40" x2="35" y2="42" />
                            </svg>
                          </div>
                        )}

                        <div className="ab-card-inner relative z-10 rounded-[2rem] bg-white/50 backdrop-blur-2xl border border-white/80 p-7 sm:p-8 shadow-[0_20px_45px_rgba(255,138,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_26px_55px_rgba(255,138,0,0.22)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                          <div
                            className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#FFA726] via-[#FF8A00] to-[#FF5500] p-1.5 shadow-[0_8px_25px_rgba(255,122,0,0.5)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 z-20 select-none"
                            aria-hidden="true"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-70" aria-hidden="true" />

                          <div className="relative z-10 flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-full bg-[#FF8A00] text-white flex items-center justify-center font-black text-sm shadow-[0_4px_14px_rgba(255,138,0,0.45)]">
                              {step.num}
                            </div>
                            <div className="px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 text-xs font-bold text-gray-800 font-mono shadow-xs">
                              {step.year}
                            </div>
                          </div>

                          <h3 className="relative z-10 font-black italic uppercase text-lg sm:text-xl text-[#111111] tracking-tight leading-snug mb-3">
                            {step.title}
                          </h3>

                          <p className="relative z-10 text-[#374151] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                            {step.desc}
                          </p>

                          <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-black/[0.05]">
                            {step.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#222222] shadow-xs hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOOLS & TECHNOLOGIES */}
      <section className="ab-tech-section relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-28">
        <OrangeLeftAccentShape />
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 z-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#222222]">
                  TOOLS & TECHNOLOGIES
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-black italic uppercase text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-tight">
                  <span className="text-[#111111]">WHAT I </span>
                  <span className="text-[#FF8A00]">USE</span>
                </h2>
                <div className="text-[#FF8A00] -mt-1">
                  <svg className="w-8 h-7 sm:w-10 sm:h-8" viewBox="0 0 45 35" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                    <line x1="6" y1="18" x2="35" y2="4" />
                    <line x1="12" y1="24" x2="40" y2="18" />
                    <line x1="16" y1="30" x2="38" y2="30" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-[#4B5563] text-base sm:text-lg max-w-md font-light leading-relaxed">
              Here are some of the tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="ab-tech-box group relative flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.brandColor;
                  e.currentTarget.style.boxShadow = `0 14px 28px -6px ${tech.brandColor}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#222222] text-center leading-tight truncate w-full">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE STRENGTHS */}
      <section className="ab-strengths-section relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#222222]">
                  CORE STRENGTHS
                </span>
              </div>
              <div className="relative inline-block">
                <h2 className="font-black italic uppercase text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-tight">
                  <span className="text-[#111111]">WHAT DRIVES </span>
                  <span className="text-[#FF8A00]">ME</span>
                </h2>
                <HandDrawnUnderline className="w-[85%] ml-auto mr-1 -mt-2" color="#FF8A00" />
              </div>
            </div>
            <p className="text-[#4B5563] text-base sm:text-lg max-w-md font-light leading-relaxed">
              I focus on building solutions that are not just visually appealing, but also fast, scalable and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-black/10">
            {coreStrengths.map((item, idx) => (
              <div
                key={item.title}
                className={`ab-strength-item group relative flex flex-col justify-start ${
                  idx === 0 ? "lg:pr-8" : idx === 3 ? "lg:pl-8" : "lg:px-8"
                } transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div
                  className="pointer-events-none absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8A00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none"
                  aria-hidden="true"
                />
                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E6] border border-[#FF8A00]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-300 shadow-sm hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-black italic uppercase text-base sm:text-lg text-[#111111] tracking-tight leading-snug mb-2 group-hover:text-[#FF8A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="relative z-10 pb-24 sm:pb-36 overflow-hidden">
        {/* <OrangeCtaBottomWave /> */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="relative">
            <OrangeJourneyCardBlob position="bottom-right" size="lg" />
            <div className="ab-cta-banner-wrap relative z-10 rounded-[2.5rem] bg-white/45 backdrop-blur-2xl border border-white/75 p-8 sm:p-12 lg:p-14 shadow-[0_22px_60px_rgba(255,138,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden">
              <div
                className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#FFA726] via-[#FF8A00] to-[#FF5500] p-1.5 shadow-[0_8px_25px_rgba(255,122,0,0.4)] flex items-center justify-center select-none z-10"
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-sm" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF8A00]">
                      LET'S BUILD TOGETHER
                    </span>
                  </div>
                  <h2 className="font-black italic uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.02em] text-[#111111]">
                    LET'S CREATE SOMETHING
                    <br />
                    <span className="text-[#FF8A00]">AMAZING</span> TOGETHER
                  </h2>
                </div>

                <div className="relative flex items-center gap-4 flex-shrink-0">
                  <div className="pointer-events-none text-[#FF8A00] hidden sm:block">
                    <svg className="w-9 h-9" viewBox="0 0 45 45" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                      <line x1="8" y1="36" x2="36" y2="8" />
                      <line x1="18" y1="40" x2="40" y2="18" />
                      <line x1="28" y1="42" x2="42" y2="28" />
                    </svg>
                  </div>
                  <a
                    href="#works"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#111111] hover:bg-[#FF8A00] text-white hover:text-[#111111] px-8 py-4 text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(255,138,0,0.4)] active:scale-95"
                  >
                    <span>VIEW MY WORK</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}