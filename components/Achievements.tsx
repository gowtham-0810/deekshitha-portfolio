"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Star, Trophy, Shield, Zap } from "lucide-react";



const iconMap: Record<string, LucideIcon> = {
  star: Star,
  trophy: Trophy,
  shield: Shield,
  zap: Zap,
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs text-[#00D4C8] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Recognition & Wins
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Achievements
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#F5C842] to-transparent" />
          </div>
        </FadeIn>

        {/* Metric counters */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: 60, suffix: "%", label: "Fraud Reduction" },
              { value: 45, suffix: "%", label: "Perf Improvement" },
              { value: 2, suffix: "+", label: "Awards Won" },
            ].map((item, i) => (
              <div key={item.label}
                className="glass-card rounded-2xl border border-[#1A2F50] p-4 sm:p-6 text-center hover-lift"
                style={{ boxShadow: "0 0 20px rgba(245,200,66,0.05)" }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text-gold mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}>
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </div>
                <p className="text-xs text-[#3A5070]" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {resumeData.achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Trophy;
            const isAward = ach.type === "award";
            return (
              <FadeIn key={ach.title} delay={0.2 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`glass-card rounded-2xl p-6 border relative overflow-hidden group cursor-default ${
                    isAward
                      ? "border-[rgba(245,200,66,0.3)]"
                      : "border-[rgba(0,212,200,0.3)]"
                  }`}
                  style={{
                    boxShadow: isAward
                      ? "0 0 0px rgba(245,200,66,0.1)"
                      : "0 0 0px rgba(0,212,200,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = isAward
                      ? "0 0 40px rgba(245,200,66,0.2)"
                      : "0 0 40px rgba(0,212,200,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Spotlight overlay */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${isAward ? "#F5C842" : "#00D4C8"}, transparent)`,
                      transform: "translate(30%, -30%)",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isAward
                        ? "bg-[rgba(245,200,66,0.1)] border border-[rgba(245,200,66,0.3)]"
                        : "bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.3)]"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isAward ? "text-[#F5C842]" : "text-[#00D4C8]"}
                    />
                  </div>

                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs mb-3 ${
                    isAward
                      ? "bg-[rgba(245,200,66,0.1)] border border-[rgba(245,200,66,0.2)] text-[#F5C842]"
                      : "bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.2)] text-[#00D4C8]"
                  }`}
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {isAward ? "🏆 Award" : "🥇 Competition"}
                  </div>

                  <h3 className="font-bold text-white text-base mb-2 leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}>
                    {ach.title}
                  </h3>
                  <p className="text-sm text-[#C8D8E8] leading-relaxed"
                    style={{ fontFamily: "Outfit, sans-serif" }}>
                    {ach.description}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
