"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/lib/data";
import { ArrowDown, Download, Linkedin, Mail, MapPin, Shield, Zap, Award } from "lucide-react";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  shield: Shield,
  zap: Zap,
  award: Award,
};

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 section-pad">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {resumeData.topImpact.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#1A2F50]"
              >
                <Icon size={14} className="text-[#00D4C8]" />
                <span className="text-[#F5C842] font-bold text-sm" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {item.metric}
                </span>
                <span className="text-[#C8D8E8] text-xs">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(0,212,200,0.3)] bg-[rgba(0,212,200,0.06)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D4C8] animate-pulse" />
              <span className="text-xs text-[#00D4C8] tracking-widest uppercase"
                style={{ fontFamily: "JetBrains Mono, monospace" }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="text-white">Deekshitha</span>
              <br />
              <span className="gradient-text">GR</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#00D4C8] to-transparent" />
              <span className="text-lg text-[#00D4C8] font-semibold tracking-wide"
                style={{ fontFamily: "Outfit, sans-serif" }}>
                Full Stack Developer · FinTech
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="text-[#C8D8E8] text-base leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {resumeData.basics.summary}
            </motion.p>

            {/* Location + Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 mb-10 text-sm text-[#3A5070]"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#00D4C8]" />
                {resumeData.basics.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#00D4C8]" />
                <a href={`mailto:${resumeData.basics.email}`} className="hover:text-[#00D4C8] transition-colors">
                  {resumeData.basics.email}
                </a>
              </span>
              <a
                href={resumeData.basics.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00D4C8] transition-colors"
              >
                <Linkedin size={13} className="text-[#00D4C8]" />
                LinkedIn
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToExperience}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D4C8] text-[#040D1E] font-semibold text-sm hover:bg-[#00B8AD] transition-all duration-200 hover-lift"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                View Experience
                <ArrowDown size={16} />
              </button>
              <a
                href={`mailto:${resumeData.basics.email}?subject=Resume Request`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1A2F50] text-[#C8D8E8] font-semibold text-sm hover:border-[#00D4C8] hover:text-[#00D4C8] transition-all duration-200"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-[#00D4C8] via-transparent to-[#F5C842] opacity-70" />
              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-[#040D1E] animate-float">
                <Image
                  src="/photo.jpg"
                  alt="Deekshitha GR"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Orbiting badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-full h-full"
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute top-0 right-4 w-10 h-10 rounded-full glass-card border border-[#1A2F50] flex items-center justify-center"
                  style={{ boxShadow: "0 0 15px rgba(245,200,66,0.3)" }}>
                  <Award size={14} className="text-[#F5C842]" />
                </div>
              </motion.div>
              {/* Experience tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-4 px-3 py-2 glass-card border border-[#1A2F50] rounded-xl"
              >
                <p className="text-xs text-[#3A5070]">Experience</p>
                <p className="text-sm font-bold text-[#00D4C8]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  ~2 Years
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <button onClick={scrollToExperience} className="flex flex-col items-center gap-2 group">
            <span className="text-xs text-[#3A5070] tracking-widest uppercase"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} className="text-[#00D4C8]" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
