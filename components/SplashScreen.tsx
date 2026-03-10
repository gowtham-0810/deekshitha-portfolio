"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 2.5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 200);

      return () => clearTimeout(hideTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040D1E]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="relative mb-10"
          >
            <div
              className="w-24 h-24 rounded-2xl border-2 border-[#00D4C8] flex items-center justify-center relative overflow-hidden"
              style={{ boxShadow: "0 0 40px rgba(0,212,200,0.4), inset 0 0 40px rgba(0,212,200,0.05)" }}
            >
              <div className="absolute inset-0 shimmer" />
              <span
                className="font-display text-3xl font-bold gradient-text relative z-10"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                DGR
              </span>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] rounded-2xl border border-dashed border-[rgba(0,212,200,0.3)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-2"
          >
            <p
              className="text-[#00D4C8] text-sm font-mono tracking-[0.3em] uppercase mb-1"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Initializing Portfolio
            </p>
            <h1
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Deekshitha GR
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 w-64"
          >
            <div
              className="flex justify-between text-xs text-[#3A5070] mb-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-[2px] bg-[#1A2F50] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00D4C8] to-[#F5C842] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="flex justify-between mt-3">
              {["System", "Experience", "Skills", "Launch"].map((label, i) => (
                <span
                  key={label}
                  className="text-[10px] tracking-wider"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: progress >= i * 25 ? "#00D4C8" : "#1A2F50",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
