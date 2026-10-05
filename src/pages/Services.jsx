import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "../components/SectionBadge";
import HandDrawnUnderline from "../components/HandDrawnUnderline";
import SunburstRays from "../components/SunburstRays";
import { OrangeTopLeftShape, OrangeRightAccentShape } from "../components/OrangeShapes";

gsap.registerPlugin(ScrollTrigger);

// ── Services Data ─────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Web Development",
    tagline: "FAST, RESPONSIVE & PIXEL-PERFECT",
    desc: "From modern high-converting landing pages to complex responsive web platforms. Crafted with clean semantic code, top performance benchmarks, and mobile-first responsiveness.",
    stack: ["React", "Next.js", "JavaScript", "HTML5/CSS3", "Vite", "Tailwind CSS"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    dark: true,
  },
  {
    num: "02",
    title: "Full Stack (MERN)",
    tagline: "END-TO-END WEB APPLICATIONS",
    desc: "Robust backend architectures connected with fluid frontend UIs. Secure RESTful APIs, JWT authentication, MongoDB databases, state management, and administrative dashboards.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT Auth"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    dark: false,
  },
  {
    num: "03",
    title: "UI / UX & Animations",
    tagline: "ENGAGING & DYNAMIC EXPERIENCES",
    desc: "Modern, interactive design systems that stand out. Smooth GSAP scroll animations, micro-interactions, sleek dark modes, and high-impact visual aesthetics tailored to captivate users.",
    stack: ["GSAP Animations", "Figma", "SVG Motion", "Micro-Interactions", "Responsive Design"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    dark: false,
  },
  {
    num: "04",
    title: "API & Integrations",
    tagline: "SEAMLESS THIRD-PARTY SERVICES",
    desc: "Seamless integration of third-party platforms — Stripe & Razorpay payment gateways, cloud storage, authentication providers, transactional email/SMS, and webhook pipelines.",
    stack: ["Payment Gateways", "Stripe", "Razorpay", "Firebase", "Webhooks", "Third-Party APIs"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    dark: true,
  },
];

const whyChooseMe = [
  {
    num: "01",
    title: "Speed & Performance",
    desc: "Lightning fast load times and optimized rendering for peak SEO and conversion rates.",
  },
  {
    num: "02",
    title: "Pixel Perfect",
    desc: "Obsessive attention to spacing, responsive layouts, typography, and crisp animations.",
  },
  {
    num: "03",
    title: "Clean & Scalable Code",
    desc: "Modular, well-commented, and easily maintainable codebase adhering to industry standards.",
  },
  {
    num: "04",
    title: "Direct Communication",
    desc: "Transparent timeline updates, collaborative workflow, and support until complete satisfaction.",
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SERVICES SECTION
// ═════════════════════════════════════════════════════════════════════════════
export default function Services() {
  const sectionRef = useRef(null);
  const underlineRef = useRef(null);
  const raysRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading stagger animation ──
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".sv-intro",
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".sv-stagger", { y: 35, opacity: 0, stagger: 0.1, duration: 0.85 })
        .fromTo(
          underlineRef.current,
          { strokeDashoffset: 400, strokeDasharray: 400 },
          { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          raysRef.current,
          { scale: 0, opacity: 0, transformOrigin: "bottom center", duration: 0.5, ease: "back.out(2.2)" },
          "-=0.7"
        );

      // ── Service Cards cascade ──
      ScrollTrigger.batch(".sv-card", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 50, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.75, ease: "power3.out" }
          ),
        start: "top 88%",
        once: true,
      });

      // ── Why Me Section Reveal ──
      gsap.fromTo(
        ".sv-why-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sv-why-grid", start: "top 85%", once: true },
        }
      );

      // ── CTA Reveal ──
      gsap.fromTo(
        ".sv-cta",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".sv-cta", start: "top 88%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Background Shapes */}
      <OrangeTopLeftShape variant="about" />
      <OrangeRightAccentShape />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── SECTION HEADER — Left-aligned, Hero-matching ── */}
        <div className="sv-intro mb-16 sm:mb-20">
          <SectionBadge label="WHAT I DO" className="sv-stagger mb-3 sm:mb-4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="sv-stagger relative inline-block">
                <SunburstRays
                  forwardRef={raysRef}
                  className="absolute -top-6 sm:-top-8 left-[55%] z-20 text-[#FF9500]"
                />
                <h2 className="font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-[3rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.6rem]">
                  <span className="text-[#111111] block">MY</span>
                  <span className="text-[#111111]">SERVICES </span>
                  <span className="text-[#FF9500]">&amp; SKILLS</span>
                </h2>
                <HandDrawnUnderline
                  pathRef={underlineRef}
                  className="w-[88%] sm:w-[78%] ml-auto mr-2 -mt-2"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="sv-stagger text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-md">
                Specialized engineering and design solutions to turn ideas into robust, high-performance digital reality.
              </p>
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID (2x2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-20">
          {services.map((svc, i) => {
            const isHovered = activeCard === i;
            return (
              <div
                key={svc.num}
                className="sv-card group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-default"
                style={{
                  backgroundColor: svc.dark ? "#111111" : "#FFFFFF",
                  border: svc.dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isHovered
                    ? "0 24px 56px rgba(0,0,0,0.16)"
                    : svc.dark
                    ? "0 8px 30px rgba(0,0,0,0.2)"
                    : "0 4px 20px rgba(0,0,0,0.05)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 h-[3px] rounded-b-sm transition-all duration-500"
                  style={{ backgroundColor: "#FF9500", width: isHovered ? "100%" : "30%" }}
                />

                {/* Background watermark number */}
                <span
                  className="pointer-events-none absolute -bottom-4 -right-1 font-black italic leading-none select-none transition-all duration-500"
                  style={{
                    fontSize: "8rem",
                    color: "#FF9500",
                    opacity: isHovered ? 0.12 : 0.05,
                  }}
                >
                  {svc.num}
                </span>

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-black text-2xl sm:text-3xl tracking-tight" style={{ color: "#FF9500" }}>
                      {svc.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: svc.dark ? "rgba(255,149,0,0.12)" : "rgba(255,149,0,0.12)",
                        color: "#FF9500",
                        transform: isHovered ? "rotate(8deg) scale(1.12)" : "rotate(0) scale(1)",
                      }}
                    >
                      {svc.icon}
                    </div>
                  </div>

                  <span
                    className="text-[10px] sm:text-xs font-black tracking-widest uppercase mb-2 block"
                    style={{ color: svc.dark ? "rgba(255,255,255,0.45)" : "#FF9500" }}
                  >
                    {svc.tagline}
                  </span>

                  <h3
                    className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight mb-4"
                    style={{ color: svc.dark ? "#FFFFFF" : "#111111" }}
                  >
                    {svc.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-6 font-normal"
                    style={{ color: svc.dark ? "#9CA3AF" : "#4B5563" }}
                  >
                    {svc.desc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: svc.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
                    {svc.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider transition-colors"
                        style={{
                          backgroundColor: svc.dark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                          color: svc.dark ? "#FFFFFF" : "#333333",
                          border: svc.dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── WHY CHOOSE ME ── */}
        <div className="rounded-3xl bg-[#111111] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden mb-10 shadow-2xl">
          {/* Glow blob */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FF9500]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FF9500]/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10 pb-8 border-b border-white/10">
            <div>
              <SectionBadge label="STANDARDS" className="mb-3 [&>span:last-child]:text-[#FF9500]" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tight text-white">
                WHY WORK WITH ME?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md font-normal leading-relaxed">
              Every project is an opportunity to craft something extraordinary. I combine technical mastery with speed and clear communication.
            </p>
          </div>

          <div className="sv-why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseMe.map((item) => (
              <div key={item.num} className="sv-why-item flex flex-col">
                <span className="text-sm font-black text-[#FF9500] mb-2">{item.num}</span>
                <h4 className="text-lg font-black italic uppercase text-white mb-2 tracking-tight">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="sv-cta flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-white border border-black/8 shadow-sm">
          <div>
            <h4 className="text-xl sm:text-2xl font-black italic uppercase text-[#111111] tracking-tight mb-1">
              HAVE A CUSTOM PROJECT IN MIND?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] font-normal">
              Let's discuss requirements, architecture, and timeline.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#111111] hover:bg-[#FF9500] text-white hover:text-[#111111] px-8 py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-[0_12px_28px_rgba(255,149,0,0.4)] active:scale-95 flex-shrink-0"
          >
            GET A QUOTE
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
