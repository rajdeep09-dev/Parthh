"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col relative z-30 bg-black">

      {/* Top CTA Section */}
      <BlurFade delay={0.2} yOffset={20}>
        <div className="flex flex-col lg:flex-row items-center justify-between mb-32 relative">

          <div className="flex flex-col z-10 w-full">
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white leading-[0.9] flex flex-wrap items-center gap-4">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold">ME</div>
              </div>
              <span>Let's create</span>
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-zinc-500 leading-[0.9]">
              something real.
            </h2>
          </div>

          {/* Glowing Circle Right Side */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
             <div className="w-48 h-48 rounded-full border-[12px] border-zinc-800/40 relative">
                <div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(139,92,246,0.6)] animate-pulse mix-blend-screen bg-purple-500/10"></div>
                <div className="absolute -inset-4 rounded-full border-t-2 border-r-2 border-indigo-400 rotate-45"></div>
             </div>
          </div>

        </div>
      </BlurFade>

      {/* Main Footer Links Box */}
      <BlurFade delay={0.4} yOffset={30}>
        <div className="w-full bg-[#0a0a0a] rounded-[32px] border border-zinc-800/60 p-10 md:p-16 flex flex-col lg:flex-row justify-between gap-16 relative overflow-hidden group">

          {/* Subtle hover gradient inside footer box */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex flex-col max-w-sm z-10">
            <h3 className="text-3xl font-black text-white tracking-widest mb-6">PARTH</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 z-10">
            {/* General */}
            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">General</h4>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Home</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Blogs</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Guestbook</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Uses</a>
            </div>

            {/* About */}
            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">About</h4>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">About Me</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Projects</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Contact</a>
            </div>

            {/* Startup */}
            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Startup</h4>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Rune</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">RuneAI</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">RuneHub</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Legal</h4>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">Terms & Conditions</a>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                   <div className="px-2 py-0.5 border border-zinc-800 bg-[#111] text-[8px] font-bold text-emerald-500 rounded-sm">DMCA</div>
                   <div className="text-[8px] font-bold text-zinc-500">PROTECTED</div>
                </div>
                <p className="text-[8px] text-zinc-600">This site is protected. Read our <a href="#" className="underline">Privacy Policy</a> & <a href="#" className="underline">Terms</a>.</p>
              </div>
            </div>
          </div>

        </div>
      </BlurFade>

      {/* Bottom Bar */}
      <BlurFade delay={0.6} yOffset={10}>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-zinc-900 w-full text-zinc-600 text-[10px] font-bold tracking-[0.1em] uppercase">
          <p>© 2026 PARTH SHARMA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Github size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
}
