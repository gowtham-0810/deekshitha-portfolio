"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b border-[#1A2F50]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg border border-[#00D4C8] flex items-center justify-center"
              style={{ boxShadow: "0 0 10px rgba(0,212,200,0.3)" }}>
              <span className="text-xs font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
                DGR
              </span>
            </div>
            <span className="hidden sm:block text-sm font-semibold text-[#C8D8E8]"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Deekshitha
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 relative ${
                    active === item.href.slice(1)
                      ? "text-[#00D4C8]"
                      : "text-[#C8D8E8] hover:text-white"
                  }`}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {item.label}
                  {active === item.href.slice(1) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.2)]"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:deekshithagr30@gmail.com"
            className="hidden md:block px-4 py-2 text-sm rounded-lg border border-[#00D4C8] text-[#00D4C8] hover:bg-[rgba(0,212,200,0.1)] transition-all duration-200"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Hire Me
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#00D4C8] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00D4C8] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00D4C8] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-[#1A2F50] md:hidden"
          >
            <ul className="flex flex-col py-3 px-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      active === item.href.slice(1)
                        ? "text-[#00D4C8] bg-[rgba(0,212,200,0.08)]"
                        : "text-[#C8D8E8]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="mailto:deekshithagr30@gmail.com"
                  className="block w-full text-center px-4 py-3 rounded-lg border border-[#00D4C8] text-[#00D4C8] text-sm"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[64px] left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00D4C8] to-[#F5C842] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
