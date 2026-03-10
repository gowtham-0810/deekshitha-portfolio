"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Code2, Layers, Wrench, Cpu, Database, Monitor, GitBranch, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  tool: Wrench,
  cpu: Cpu,
  database: Database,
  monitor: Monitor,
  "git-branch": GitBranch,
};

const categoryColors = [
  "#00D4C8",
  "#F5C842",
  "#A78BFA",
  "#60A5FA",
  "#34D399",
  "#F87171",
  "#FB923C",
];

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

function SkillPill({ skill, color, index }: { skill: string; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="px-3 py-1.5 text-xs rounded-lg border font-medium transition-all duration-200 hover:scale-105 cursor-default"
      style={{
        fontFamily: "JetBrains Mono, monospace",
        borderColor: `${color}33`,
        backgroundColor: `${color}10`,
        color: color,
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs text-[#00D4C8] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Technical Arsenal
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Skills
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#00D4C8] to-transparent" />
          </div>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {resumeData.skills.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code2;
            const color = categoryColors[gi % categoryColors.length];
            return (
              <FadeIn key={group.category} delay={gi * 0.07}>
                <div
                  className="glass-card rounded-2xl p-5 border border-[#1A2F50] hover-lift h-full"
                  style={{
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <h3 className="font-semibold text-sm text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <SkillPill key={skill} skill={skill} color={color} index={si} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* All skills in one tag cloud at bottom */}
        <FadeIn delay={0.5}>
          <div className="mt-10 glass-card rounded-2xl border border-[#1A2F50] p-6">
            <p className="text-xs text-[#3A5070] tracking-widest uppercase mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Full Stack at a Glance
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Angular", "TypeScript", ".NET Core", "Oracle", "C#",
                "Redis", "Nginx", "Git", "Linux", "Azure DevOps",
                "AES-GCM", "REST APIs", "Microservices", "RxJS"
              ].map((s, i) => {
                const color = categoryColors[i % categoryColors.length];
                return (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: `${color}0D`,
                      border: `1px solid ${color}22`,
                      color,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
