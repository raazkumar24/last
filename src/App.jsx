import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Marquee from "./components/Marquee.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#111111] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero + Marquee = full viewport height */}
      <div className="relative flex flex-col h-screen max-h-screen overflow-hidden">
        <Hero />
        <Marquee />
      </div>

      {/* Scrollable sections below */}
      <About />
      <Works />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
