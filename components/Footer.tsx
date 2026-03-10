"use client";
import { resumeData } from "@/lib/data";
import { Mail, Linkedin, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1A2F50] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg border border-[#00D4C8] flex items-center justify-center"
                style={{ boxShadow: "0 0 10px rgba(0,212,200,0.2)" }}>
                <span className="text-xs font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
                  DGR
                </span>
              </div>
              <span className="text-white font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                Deekshitha GR
              </span>
            </div>
            <p className="text-xs text-[#3A5070]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Full Stack Developer · FinTech · Bangalore, India
            </p>
          </div>

          {/* Contact links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="w-9 h-9 rounded-lg border border-[#1A2F50] flex items-center justify-center text-[#3A5070] hover:text-[#00D4C8] hover:border-[#00D4C8] transition-all duration-200"
            >
              <Mail size={15} />
            </a>
            <a
              href={resumeData.basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-[#1A2F50] flex items-center justify-center text-[#3A5070] hover:text-[#00D4C8] hover:border-[#00D4C8] transition-all duration-200"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`tel:${resumeData.basics.phone}`}
              className="w-9 h-9 rounded-lg border border-[#1A2F50] flex items-center justify-center text-[#3A5070] hover:text-[#00D4C8] hover:border-[#00D4C8] transition-all duration-200"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0A1628] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A5070]"
          style={{ fontFamily: "JetBrains Mono, monospace" }}>
          <span>© {new Date().getFullYear()} Deekshitha GR. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <Heart size={10} className="text-[#F5C842]" /> by Deekshitha
          </span>
        </div>
      </div>
    </footer>
  );
}
