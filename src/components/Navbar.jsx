import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "WORKS", href: "#works" },
  { label: "SERVICES", href: "#services" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );
    }
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full px-6 py-4 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-[#111111] transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center">
            <svg
              className="h-6 w-10 text-[#111111] transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 44 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            >
              <rect x="2" y="2" width="40" height="22" rx="11" />
              <ellipse cx="22" cy="13" rx="8" ry="6" strokeWidth="2.4" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-wider text-[#111111]">RAJ</span>
        </a>

        {/* DESKTOP NAV PILL */}
        <div className="hidden items-center gap-1 rounded-full bg-[#FAF5EB]/95 px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md border border-black/5 md:flex">
          <nav className="flex items-center space-x-1 px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-bold tracking-wider text-[#222222] uppercase transition-all duration-200 hover:text-[#FF9500] hover:bg-white/60"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-all duration-300 hover:bg-[#FF9500] hover:text-[#111111] hover:shadow-md hover:scale-105 active:scale-95"
          >
            CONTACT
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#111111] shadow-md backdrop-blur-sm border border-black/10 transition-transform duration-200 active:scale-90 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-md rounded-2xl border border-black/10 bg-[#FAF5EB] p-5 shadow-2xl backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-xs font-bold tracking-wider text-[#222222] uppercase transition-colors hover:text-[#FF9500] hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 block w-full rounded-full bg-[#111111] py-3 text-center text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#FF9500] hover:text-[#111111]"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
