import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "../components/SectionBadge";
import HandDrawnUnderline from "../components/HandDrawnUnderline";
import SunburstRays from "../components/SunburstRays";
import { OrangeTopLeftShape, OrangeRightAccentShape } from "../components/OrangeShapes";

// ── Projects Data ──────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    num: "01",
    title: "E-Commerce Platform",
    client: "Personal Project",
    role: "Full Stack Developer",
    year: "2024",
    accent: "#FF9500",
    description:
      "Complete online store from scratch — product listings, cart system, user authentication, and Stripe payment integration. Built with the MERN Stack for speed and scalability.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    metrics: [
      "100% secure Stripe checkout flow",
      "40% faster load vs. initial prototype",
      "Mobile-first, fully responsive UI",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
  {
    id: 2,
    num: "02",
    title: "Portfolio Website",
    client: "Personal Brand",
    role: "Frontend Developer",
    year: "2024",
    accent: "#FF6B00",
    description:
      "A premium personal portfolio with GSAP-powered scroll animations, a custom SVG design system, and micro-interactions. Fully responsive across all breakpoints.",
    stack: ["React", "GSAP", "Vite", "CSS Modules", "SVG"],
    metrics: [
      "98 Lighthouse performance score",
      "Scroll-triggered GSAP animations",
      "Custom SVG design system",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  },
  {
    id: 3,
    num: "03",
    title: "Restaurant Booking App",
    client: "Client Work",
    role: "Full Stack Developer",
    year: "2023",
    accent: "#FF9500",
    description:
      "Real-time table reservation system with an admin dashboard for managing bookings, and Twilio SMS confirmation for guests. Reduced no-shows by automating reminders.",
    stack: ["React", "Node.js", "MongoDB", "Twilio", "Socket.io"],
    metrics: [
      "Real-time reservation updates via WebSocket",
      "Twilio SMS confirmations automated",
      "Admin dashboard with analytics",
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  {
    id: 4,
    num: "04",
    title: "Task Manager Pro",
    client: "Personal Project",
    role: "Frontend Developer",
    year: "2023",
    accent: "#FF6B00",
    description:
      "Kanban-style drag-and-drop task manager with color-coded labels, deadline tracking, and local storage persistence. Built with a focus on UX fluency.",
    stack: ["React", "DnD Kit", "CSS Modules", "LocalStorage API"],
    metrics: [
      "Smooth drag-and-drop with DnD Kit",
      "Deadline alerts with visual urgency",
      "Persistent state via local storage",
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80",
  },
];

gsap.registerPlugin(ScrollTrigger);

// ═════════════════════════════════════════════════════════════════════════════
// WORKS SECTION
// ═════════════════════════════════════════════════════════════════════════════
export default function Works() {
  const sectionRef = useRef(null);
  const underlineRef = useRef(null);
  const raysRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header animation ──
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".wk-intro",
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".wk-stagger", { y: 35, opacity: 0, stagger: 0.1, duration: 0.85 })
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

      // ── Articles cascade on scroll ──
      ScrollTrigger.batch(".wk-article", {
        onEnter: (batch) =>
          gsap.fromTo(batch,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
          ),
        start: "top 88%",
        once: true,
      });

      // ── CTA banner ──
      gsap.fromTo(
        ".wk-cta",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".wk-cta", start: "top 88%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative w-full bg-[#FAF8F5] text-[#111111] overflow-hidden font-sans py-20 sm:py-28"
    >
      {/* Orange background shapes */}
      <OrangeRightAccentShape />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── SECTION HEADER ── */}
        <div className="wk-intro mb-16 sm:mb-24">
          <SectionBadge label="MY WORK" className="wk-stagger mb-3 sm:mb-4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="wk-stagger relative inline-block">
                <SunburstRays
                  forwardRef={raysRef}
                  className="absolute -top-6 sm:-top-8 left-[44%] sm:left-[46%] z-20 text-[#FF9500]"
                />
                <h2 className="font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-[3rem] sm:text-[4.2rem] md:text-[4.8rem] lg:text-[5.4rem]">
                  <span className="text-[#111111] block">SELECTED</span>
                  <span className="text-[#111111]">WORKS </span>
                  <span className="text-[#FF9500]">&amp; PROJECTS</span>
                </h2>
                <HandDrawnUnderline
                  pathRef={underlineRef}
                  className="w-[82%] sm:w-[72%] ml-auto mr-3 -mt-1"
                  color="#FF9500"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <div className="wk-stagger">
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-md font-normal mb-5">
                  Real-world projects from e-commerce to full-stack apps — built with modern tech and pixel-perfect attention to detail.
                </p>
                {/* Stats row */}
                <div className="flex items-center gap-5 sm:gap-7 pt-4 border-t border-black/10">
                  {[["10+", "Projects"], ["3+", "Clients"], ["2+", "Years"]].map(([v, l], i, arr) => (
                    <React.Fragment key={l}>
                      <div className="text-center">
                        <p className="font-black text-2xl text-[#FF9500] leading-none">{v}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#888888] mt-0.5">{l}</p>
                      </div>
                      {i < arr.length - 1 && <div className="w-px h-8 bg-black/10" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PROJECT LIST ── */}
        <div className="flex flex-col gap-20 sm:gap-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="wk-article"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* ── Article Header ── */}
              <div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-5"
                style={{ borderBottom: "1px solid rgba(17,17,17,0.07)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-black text-[#888888]">{project.num}</span>
                  <div>
                    <h3
                      className="font-black italic uppercase tracking-tighter leading-[0.92] transition-colors duration-500"
                      style={{
                        fontSize: "clamp(2rem, 6vw, 5rem)",
                        color: hovered === project.id ? project.accent : "#111111",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1"
                      style={{ color: project.accent }}
                    >
                      {project.client}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-[#111111] font-semibold text-sm">{project.role}</p>
                  <p className="text-[#888888] text-sm">{project.year}</p>
                </div>
              </div>

              {/* ── Project Image ── */}
              <div
                className="w-full overflow-hidden mb-8"
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(17,17,17,0.07)",
                  aspectRatio: "21/9",
                  position: "relative",
                  background: "#111111",
                }}
              >
                {/* Accent color tint on hover */}
                <div
                  className="absolute inset-0 z-10 transition-opacity duration-700 mix-blend-multiply"
                  style={{
                    background: project.accent,
                    opacity: hovered === project.id ? 0.12 : 0,
                  }}
                />
                {/* Dark overlay that lifts on hover */}
                <div
                  className="absolute inset-0 z-[5] transition-all duration-700"
                  style={{ background: hovered === project.id ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.28)" }}
                />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-[1.2s] ease-out"
                  style={{
                    filter: hovered === project.id ? "grayscale(0%)" : "grayscale(55%)",
                    transform: hovered === project.id ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* Big number watermark */}
                <span
                  className="pointer-events-none absolute bottom-3 right-5 font-black italic leading-none select-none transition-opacity duration-500"
                  style={{
                    fontSize: "7rem",
                    color: project.accent,
                    opacity: hovered === project.id ? 0.18 : 0.07,
                  }}
                >
                  {project.num}
                </span>

                {/* Orange top accent bar */}
                <div
                  className="absolute top-0 left-0 h-[3px] rounded-b-sm transition-all duration-500"
                  style={{
                    backgroundColor: project.accent,
                    width: hovered === project.id ? "100%" : "35%",
                  }}
                />
              </div>

              {/* ── Project Details ── */}
              <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-14">
                {/* Left — description */}
                <div>
                  <h4 className="text-[9px] font-black tracking-[0.25em] uppercase text-[#888888] mb-3">
                    The Challenge
                  </h4>
                  <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right — stack + metrics + CTA */}
                <div className="flex flex-col gap-6">
                  {/* Stack chips */}
                  <div>
                    <h4 className="text-[9px] font-black tracking-[0.25em] uppercase text-[#888888] mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wide"
                          style={{
                            backgroundColor: "rgba(255,149,0,0.08)",
                            border: "1px solid rgba(255,149,0,0.22)",
                            color: "#FF9500",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics / Results */}
                  <div>
                    <h4 className="text-[9px] font-black tracking-[0.25em] uppercase text-[#888888] mb-3">
                      Results
                    </h4>
                    <div className="flex flex-col gap-2">
                      {project.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: project.accent }}
                          />
                          <span className="text-[13px] font-semibold text-[#111111]">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Live CTA */}
                  <a
                    href="#"
                    className="mt-1 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-black text-[10px] tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: project.accent,
                      color: "#FAF8F5",
                      boxShadow: hovered === project.id
                        ? `0 8px 28px ${project.accent}66`
                        : `0 4px 14px ${project.accent}33`,
                      transform: hovered === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    View Live
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Divider between projects */}
              {index < projects.length - 1 && (
                <div
                  className="w-full h-px mt-16 sm:mt-24"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(17,17,17,0.08), transparent)",
                  }}
                />
              )}
            </article>
          ))}
        </div>

        {/* ── CTA BANNER ── */}
        <div className="wk-cta relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111111] px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8 mt-20 sm:mt-28">
          {/* Orange glow blobs */}
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#FF9500]/20 blur-[80px]" />
          <div className="pointer-events-none absolute right-10 top-0 w-40 h-40 rounded-full bg-[#FF9500]/10 blur-[50px]" />

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF9500]" />

          <div className="relative z-10">
            <SectionBadge label="LET'S WORK TOGETHER" className="mb-4" />
            <h3 className="font-black italic uppercase text-[2rem] sm:text-[2.8rem] text-white leading-tight tracking-[-0.03em]">
              HAVE A PROJECT<br />IN MIND?
            </h3>
          </div>

          <a
            href="#contact"
            className="relative z-10 group inline-flex items-center gap-3 rounded-full bg-[#FF9500] hover:bg-white px-8 py-4 text-sm font-black tracking-widest text-[#111111] uppercase transition-all duration-300 hover:scale-105 shadow-[0_8px_28px_rgba(255,149,0,0.4)] flex-shrink-0"
          >
            START A PROJECT
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
