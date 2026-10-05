import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "../components/SectionBadge";
import HandDrawnUnderline from "../components/HandDrawnUnderline";
import SunburstRays from "../components/SunburstRays";
import { OrangeTopLeftShape, OrangeRightAccentShape } from "../components/OrangeShapes";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "../components/SocialPill";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { href: "https://github.com", title: "GitHub Profile", icon: GitHubIcon },
  { href: "https://linkedin.com", title: "LinkedIn Profile", icon: LinkedInIcon },
  { href: "https://instagram.com", title: "Instagram Profile", icon: InstagramIcon },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const underlineRef = useRef(null);
  const raysRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading & Intro ──
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".ct-intro",
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".ct-stagger", { y: 35, opacity: 0, stagger: 0.1, duration: 0.85 })
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

      // ── Left and Right Panels ──
      gsap.fromTo(
        ".ct-col-left",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-grid", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".ct-col-right",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-grid", start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#FAF8F5] pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      {/* Background Shapes */}
      <OrangeTopLeftShape variant="about" />
      <OrangeRightAccentShape />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── SECTION HEADER — Left-aligned, Hero-matching ── */}
        <div className="ct-intro mb-16 sm:mb-20">
          <SectionBadge label="GET IN TOUCH" className="ct-stagger mb-3 sm:mb-4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="ct-stagger relative inline-block">
                <SunburstRays
                  forwardRef={raysRef}
                  className="absolute -top-6 sm:-top-8 left-[50%] z-20 text-[#FF9500]"
                />
                <h2 className="font-black italic uppercase leading-[0.92] tracking-[-0.04em] text-[3rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.6rem]">
                  <span className="text-[#111111] block">LET'S</span>
                  <span className="text-[#111111]">WORK </span>
                  <span className="text-[#FF9500]">TOGETHER.</span>
                </h2>
                <HandDrawnUnderline
                  pathRef={underlineRef}
                  className="w-[88%] sm:w-[78%] ml-auto mr-2 -mt-2"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="ct-stagger text-[#4B5563] text-sm sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
                Have a project in mind, looking for a developer, or just want to connect? Let's make something amazing together.
              </p>
            </div>
          </div>
        </div>

        {/* ── CONTACT GRID ── */}
        <div className="ct-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">

          {/* ── LEFT COLUMN: INFO & SOCIALS ── */}
          <div className="ct-col-left lg:col-span-5 flex flex-col gap-5">

            {/* Availability card */}
            <div className="rounded-3xl bg-[#111111] text-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
              {/* Top orange accent bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF9500]" />
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF9500]/12 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-white/8 border border-white/12 px-3.5 py-1.5 text-xs font-bold text-emerald-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>AVAILABLE FOR FREELANCE & ROLES</span>
              </div>

              <h3 className="relative z-10 text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white mb-3">
                LET'S BUILD<br />SOMETHING GREAT
              </h3>
              <p className="relative z-10 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-8">
                I am currently open to new client projects, full-time positions, and exciting collaborations.
              </p>

              {/* Info List */}
              <div className="relative z-10 flex flex-col gap-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9500]/15 flex items-center justify-center text-[#FF9500] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email Me</span>
                    <a href="mailto:raaz@example.com" className="text-sm font-bold text-white hover:text-[#FF9500] transition-colors">
                      raaz@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9500]/15 flex items-center justify-center text-[#FF9500] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-white">India (Open to Remote Worldwide)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-3xl bg-white border border-black/8 p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-[#111111] block mb-4">
                FIND ME ONLINE
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5] border border-black/8 text-[#111111] shadow-sm transition-all duration-300 hover:bg-[#FF9500] hover:text-white hover:scale-110 active:scale-95"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick stats card */}
            <div className="rounded-3xl bg-white border border-black/8 p-6 shadow-sm grid grid-cols-3 gap-4">
              {[["24h", "Response Time"], ["10+", "Projects Done"], ["100%", "Client Satisfaction"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <p className="font-black text-xl text-[#FF9500] leading-none">{v}</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#888888] mt-1 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: CONTACT FORM ── */}
          <div className="ct-col-right lg:col-span-7">
            <div className="rounded-3xl bg-white border border-black/8 p-8 sm:p-10 lg:p-12 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF9500]" />

              <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-[#111111] mb-2">
                SEND A MESSAGE
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] font-normal mb-8">
                Fill in the details below and I'll get back to you within 24 hours.
              </p>

              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-sm mb-6 font-normal">
                    Thank you for reaching out. I'll review your note and respond as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="rounded-full bg-[#111111] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#FF9500] hover:text-[#111111] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-[#FAF8F5] border border-black/10 px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#FF9500] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9500]/20 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-[#FAF8F5] border border-black/10 px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#FF9500] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9500]/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full rounded-xl bg-[#FAF8F5] border border-black/10 p-4 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#FF9500] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9500]/20 transition-all resize-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#FF9500] hover:text-[#111111] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] font-medium">
          <p>© {new Date().getFullYear()} Raj Shekhar. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 hover:text-[#FF9500] transition-colors font-bold uppercase tracking-wider group"
          >
            <span>BACK TO TOP</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
