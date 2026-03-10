"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 40 : 90;
    const CONNECTION_DIST = isMobile ? 100 : 160;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let raf: number;

    canvas.width = W;
    canvas.height = H;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; alpha: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    function drawGradientMesh() {
      // Radial gradient blobs for mesh feel
      const blobs = [
        { x: W * 0.15, y: H * 0.2, r: W * 0.35, c1: "rgba(0,212,200,0.04)", c2: "transparent" },
        { x: W * 0.85, y: H * 0.7, r: W * 0.4,  c1: "rgba(0,168,181,0.03)", c2: "transparent" },
        { x: W * 0.5,  y: H * 0.5, r: W * 0.5,  c1: "rgba(26,47,80,0.06)",  c2: "transparent" },
        { x: W * 0.7,  y: H * 0.15,r: W * 0.25, c1: "rgba(245,200,66,0.02)","c2": "transparent" },
      ] as any[];

      for (const b of blobs) {
        const grad = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, b.c1);
        grad.addColorStop(1, b.c2);
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, W, H);
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Base fill
      ctx!.fillStyle = "#040D1E";
      ctx!.fillRect(0, 0, W, H);

      // Gradient mesh
      drawGradientMesh();

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,212,200,${p.alpha})`;
        ctx!.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(0,212,200,${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
