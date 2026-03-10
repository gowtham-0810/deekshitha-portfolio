"use client";
import { useState, useEffect, useCallback } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  const handleSplashComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      ringX = lerp(ringX, e.clientX, 0.12);
      ringY = lerp(ringY, e.clientY, 0.12);
      setRingPos({ x: ringX, y: ringY });
    };

    const animate = () => {
      setRingPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.12,
        y: prev.y + (cursorPos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [showContent, cursorPos.x, cursorPos.y]);

  return (
    <>
      {showContent && (
        <>
          <div
            className="cursor hidden md:block"
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
          <div
            className="cursor-ring hidden md:block"
            style={{ left: ringPos.x, top: ringPos.y }}
          />
        </>
      )}

      {!showContent && <SplashScreen onComplete={handleSplashComplete} />}

      <AnimatedBackground />

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {showContent && (
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Achievements />
            <Education />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
