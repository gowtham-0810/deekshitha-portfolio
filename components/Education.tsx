"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/data";
import { GraduationCap, MapPin, Calendar, BarChart3 } from "lucide-react";

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

export default function Education() {
  const edu = resumeData.education[0];

  return (
    <section id="education" className="relative section-pad">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs text-[#00D4C8] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Academic Background
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Education
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#00D4C8] to-transparent" />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-2xl border border-[rgba(0,212,200,0.3)] p-8 relative overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(0,212,200,0.06)" }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
              style={{ background: "radial-gradient(circle, #00D4C8, transparent)", transform: "translate(30%,-30%)" }} />

            <div className="flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.2)] flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-[#00D4C8]" />
              </div>

              <div className="flex-1">
                {/* Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}>
                  {edu.institution}
                </h3>

                {/* Degree */}
                <p className="text-[#00D4C8] font-semibold mb-4"
                  style={{ fontFamily: "Outfit, sans-serif" }}>
                  {edu.degree}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-[#3A5070] mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#00D4C8]" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#00D4C8]" />
                    {edu.dates}
                  </span>
                </div>

                {/* CGPA highlight */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[rgba(245,200,66,0.08)] border border-[rgba(245,200,66,0.25)]">
                    <BarChart3 size={18} className="text-[#F5C842]" />
                    <div>
                      <p className="text-xs text-[#3A5070]" style={{ fontFamily: "JetBrains Mono, monospace" }}>CGPA</p>
                      <p className="text-2xl font-bold gradient-text-gold" style={{ fontFamily: "Syne, sans-serif" }}>
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>
                  {/* CGPA bar */}
                  <div className="flex-1 hidden sm:block">
                    <div className="flex justify-between text-xs text-[#3A5070] mb-1"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}>
                      <span>0</span><span>10</span>
                    </div>
                    <div className="h-2 bg-[#1A2F50] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#F5C842] to-[#FFB800]"
                      />
                    </div>
                    <p className="text-xs text-[#3A5070] mt-1 text-right"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}>
                      {edu.cgpa} / 10.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
