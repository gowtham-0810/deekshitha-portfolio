"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/lib/data";
import {
  Shield,
  Zap,
  Layers,
  Server,
  ChevronDown,
  ChevronRight,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  layers: Layers,
  server: Server,
};

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  teal: {
    border: "border-[rgba(0,212,200,0.3)]",
    bg: "bg-[rgba(0,212,200,0.08)]",
    text: "text-[#00D4C8]",
    glow: "rgba(0,212,200,0.15)",
  },
  gold: {
    border: "border-[rgba(245,200,66,0.3)]",
    bg: "bg-[rgba(245,200,66,0.08)]",
    text: "text-[#F5C842]",
    glow: "rgba(245,200,66,0.15)",
  },
  purple: {
    border: "border-[rgba(167,139,250,0.3)]",
    bg: "bg-[rgba(167,139,250,0.08)]",
    text: "text-[#A78BFA]",
    glow: "rgba(167,139,250,0.15)",
  },
  blue: {
    border: "border-[rgba(96,165,250,0.3)]",
    bg: "bg-[rgba(96,165,250,0.08)]",
    text: "text-[#60A5FA]",
    glow: "rgba(96,165,250,0.15)",
  },
};

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]));
  const exp = resumeData.experience[0];

  const toggle = (i: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="experience" className="relative section-pad">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <FadeInSection>
          <div className="mb-14">
            <p className="text-xs text-[#00D4C8] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Work History
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Experience
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#00D4C8] to-transparent" />
          </div>
        </FadeInSection>

        {/* Company card */}
        <FadeInSection delay={0.1}>
          <div className="glass-card rounded-2xl p-6 mb-8 border border-[#1A2F50] glow-teal">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.2)] flex items-center justify-center">
                  <Building2 size={20} className="text-[#00D4C8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    {exp.company}
                  </h3>
                  <p className="text-[#00D4C8] text-sm font-medium">{exp.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[#3A5070]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#00D4C8]" />
                  {exp.dates}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#00D4C8]" />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Modules accordion */}
        <div className="space-y-4">
          {exp.modules.map((mod, i) => {
            const Icon = iconMap[mod.icon] || Shield;
            const colors = colorMap[mod.color] || colorMap.teal;
            const isOpen = openModules.has(i);

            return (
              <FadeInSection key={mod.title} delay={0.15 + i * 0.08}>
                <div
                  className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${colors.border}`}
                  style={{ boxShadow: isOpen ? `0 0 30px ${colors.glow}` : "none" }}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 transition-all duration-200`}>
                        <Icon size={18} className={colors.text} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base sm:text-lg leading-tight"
                          style={{ fontFamily: "Syne, sans-serif" }}>
                          {mod.title}
                        </h4>
                        {/* Metric chips */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {mod.metrics.map((m) => (
                            <span key={m} className={`metric-badge ${mod.color === "gold" ? "metric-badge-gold" : ""}`}>
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-3 ${colors.text}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Accordion body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 border-t border-[#1A2F50] pt-5">
                          <ul className="space-y-3">
                            {mod.bullets.map((bullet, bi) => (
                              <motion.li
                                key={bi}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: bi * 0.05, duration: 0.3 }}
                                className="flex items-start gap-3 text-sm text-[#C8D8E8] leading-relaxed"
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <CheckCircle2 size={14} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                                {bullet}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Impact highlights panel */}
        <FadeInSection delay={0.5}>
          <div className="mt-10 glass-card rounded-2xl border border-[#1A2F50] p-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #00D4C8, transparent)", transform: "translate(30%, -30%)" }} />
            <h4 className="text-sm font-semibold text-[#00D4C8] tracking-wider uppercase mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              📊 Impact Highlights
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { stat: "60%", desc: "Reduction in fraud incidents via GPS-based device validation" },
                { stat: "45%", desc: "Performance improvement in production banking application" },
                { stat: "0", desc: "Downtime maintained during full-stack production deployments" },
                { stat: "AES-GCM", desc: "Financial-grade encryption implemented for data security" },
              ].map((item) => (
                <div key={item.stat} className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(0,212,200,0.04)] border border-[#1A2F50]">
                  <span className="text-xl font-bold gradient-text-gold flex-shrink-0" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {item.stat}
                  </span>
                  <span className="text-xs text-[#C8D8E8] leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
