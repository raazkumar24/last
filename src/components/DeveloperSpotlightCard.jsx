import React, { useState, useRef } from "react";

/**
 * =============================================================================
 * DEVELOPER SPOTLIGHT CARD (Interactive 3D Tilt Developer Terminal)
 * =============================================================================
 * Ye component developer ke skills, mindset aur configuration ko ek interactive
 * 3D Mac-style code editor terminal window me present karta hai.
 *
 * FEATURES:
 * - 3D Perspective Tilt on Mouse Hover (smooth gyro/tilt feel)
 * - Mac window header with status pill (Open to Work)
 * - 3 interactive tabs:
 *   1. "Developer Object" -> JSON/JS config with syntax highlighting
 *   2. "Core Mindset" -> Coding philosophy & standards
 *   3. "My Workflow" -> 4-step execution blueprint
 * - Metric badges footer (100% Responsive, 60 FPS GSAP, Clean Architecture)
 *
 * PROPS:
 * - className: Custom container classes
 * =============================================================================
 */
export default function DeveloperSpotlightCard({ className = "" }) {
  const [activeTab, setActiveTab] = useState("code");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // 3D tilt calculation based on cursor relative to card center
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[520px] mx-auto transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
      }}
    >
      {/* Decorative dark background shadow offset (brutalist layered depth) */}
      <div className="absolute inset-0 rounded-3xl bg-[#111111] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />

      {/* Main Card Body */}
      <div className="relative rounded-3xl bg-white border-2 border-[#111111] overflow-hidden p-5 sm:p-7 shadow-xl z-10 flex flex-col gap-5">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 inline-block" />
            <span className="ml-2 font-mono text-[11px] sm:text-xs text-gray-500 font-semibold tracking-wide">
              raj-shekhar.config.js
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              Open to Work
            </span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1 rounded-xl border border-black/5">
          {[
            { id: "code", label: "Developer Object", icon: "{ }" },
            { id: "philosophy", label: "Core Mindset", icon: "⚡" },
            { id: "workflow", label: "My Workflow", icon: "🛠️" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === tab.id
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-white/60"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="rounded-2xl bg-[#111111] p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-gray-300 shadow-inner min-h-[200px] flex flex-col justify-center">
          {activeTab === "code" && (
            <div className="space-y-1 animate-fadeIn">
              <p>
                <span className="text-[#FF7B72]">const</span>{" "}
                <span className="text-[#79C0FF]">engineer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-[#FFA657]">name</span>:{" "}
                <span className="text-[#A5D6FF]">"Raj Shekhar"</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#FFA657]">role</span>:{" "}
                <span className="text-[#A5D6FF]">"Full Stack MERN Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#FFA657]">specialty</span>: [
                <span className="text-[#7EE787]">"React"</span>,{" "}
                <span className="text-[#7EE787]">"Node"</span>,{" "}
                <span className="text-[#7EE787]">"GSAP"</span>,{" "}
                <span className="text-[#7EE787]">"MongoDB"</span>],
              </p>
              <p className="pl-4">
                <span className="text-[#FFA657]">passion</span>:{" "}
                <span className="text-[#FF9500] font-semibold">
                  "Turning complex ideas into sleek real-world web apps"
                </span>
              </p>
              <p>{"};"}</p>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="space-y-2.5 animate-fadeIn">
              <div className="flex items-center gap-2 text-[#FF9500] font-bold">
                <span>❯</span>
                <span className="text-white">Design meets Performance</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-[12.5px] leading-relaxed">
                "Great code shouldn't just run fast in the background — it must feel alive and intuitive in the browser. I obsess over clean structure and smooth 60fps micro-animations."
              </p>
              <div className="pt-2 flex items-center gap-2 text-emerald-400 text-xs">
                <span>✓</span> Pixel Perfection &bull; Fast Delivery &bull; Real Value
              </div>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="space-y-2 font-mono text-xs text-gray-300 animate-fadeIn">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9500] font-bold">01.</span>
                <span>Discover & Blueprint Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF9500] font-bold">02.</span>
                <span>Interactive Frontend & Motion (React + GSAP)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF9500] font-bold">03.</span>
                <span>Robust APIs, Database & Auth (Node + MongoDB)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF9500] font-bold">04.</span>
                <span>Deploy, Optimize Web Vitals & Scale</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Highlights Bottom Bar */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
          <div className="p-2 rounded-xl bg-[#FAF8F5] border border-black/5">
            <span className="block font-black text-sm sm:text-base text-[#111111]">
              100%
            </span>
            <span className="text-[10px] text-gray-500 font-medium">Responsive</span>
          </div>
          <div className="p-2 rounded-xl bg-[#FAF8F5] border border-black/5">
            <span className="block font-black text-sm sm:text-base text-[#FF9500]">
              60 FPS
            </span>
            <span className="text-[10px] text-gray-500 font-medium">GSAP Motion</span>
          </div>
          <div className="p-2 rounded-xl bg-[#FAF8F5] border border-black/5">
            <span className="block font-black text-sm sm:text-base text-[#111111]">
              Clean
            </span>
            <span className="text-[10px] text-gray-500 font-medium">Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
}
