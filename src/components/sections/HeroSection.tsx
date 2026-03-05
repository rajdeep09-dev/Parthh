"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnalogClock } from "@/components/ui/analog-clock";
import { motion } from "framer-motion";
import { MapPin, Linkedin, Github, Twitter, MousePointer2, Copy, MoveUpRight, Quote } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto min-h-screen px-6 md:px-12 py-16 flex flex-col justify-center relative">
      <BlurFade delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto w-full relative">

          {/* Card 1: Intro */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 rounded-[32px] bg-[#0c0c0c] border border-zinc-800/60 p-10 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl h-[400px]"
          >
             <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-10 pointer-events-none mix-blend-overlay"></div>

             <div className="flex flex-col gap-1 z-10">
                 <h2 className="text-[32px] font-bold tracking-tight text-white flex items-baseline gap-1.5">
                    Parth <span className="font-serif italic text-zinc-400 font-normal">Sharma</span>
                 </h2>
                 <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                    <MapPin size={12} />
                    <span>Noida, IN</span>
                 </div>
             </div>

             {/* Abstract Art / Photos Placeholder */}
             <div className="flex-1 w-full relative mt-10">
                 <div className="absolute top-0 left-[-10px] w-[130px] h-[160px] rounded-[16px] rotate-[-12deg] shadow-2xl overflow-hidden border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center">
                    <span className="text-zinc-600 text-xs">IMG 1</span>
                 </div>
                 <div className="absolute top-[-10px] right-[-10px] w-[130px] h-[160px] rounded-[16px] rotate-[5deg] shadow-2xl overflow-hidden border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center">
                    <span className="text-zinc-600 text-xs">IMG 2</span>
                 </div>
             </div>

             <div className="flex items-center justify-center gap-6 mt-auto pt-6 z-10 text-zinc-500">
                 <a href="#" className="hover:text-white transition-colors cursor-pointer"><Linkedin size={18} strokeWidth={1.5} /></a>
                 <a href="#" className="hover:text-white transition-colors cursor-pointer"><Github size={18} strokeWidth={1.5} /></a>
                 <a href="#" className="hover:text-white transition-colors cursor-pointer"><Twitter size={18} strokeWidth={1.5} /></a>
             </div>
          </motion.div>

          {/* Card 2: Philosophy */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-3 rounded-[32px] bg-[#0c0c0c] border border-zinc-800/60 p-10 flex flex-col group hover:border-zinc-700 transition-colors relative overflow-hidden shadow-2xl h-[400px]"
          >
             <div className="flex justify-between items-start z-10 w-full">
                 <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                     <MousePointer2 size={12} className="rotate-[-45deg]" />
                     <span>Detail-driven UI</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Philosophy +</span>
                 </div>
             </div>

             <div className="flex justify-between items-start w-full mt-10 z-10 h-full">
                 <div className="flex flex-col w-[55%]">
                     <h3 className="text-[56px] font-bold leading-[1.05] text-white tracking-tight">
                         Interfaces <br/>
                         <span className="font-serif italic font-normal text-zinc-400">you can feel.</span>
                     </h3>
                     <p className="text-zinc-500 text-sm mt-8 leading-relaxed max-w-[280px]">
                         I sweat spacing, timing, and feedback — the tiny stuff.
                     </p>
                 </div>

                 <div className="flex flex-col items-end gap-6 w-[45%] h-full justify-between pb-4">
                     <div className="flex flex-wrap justify-end gap-2 text-[10px] uppercase tracking-[0.1em] font-bold">
                         <span className="px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/10">Motion</span>
                         <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Type</span>
                         <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Feedback</span>
                         <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Craft</span>
                     </div>
                     <div className="text-right mt-auto">
                         <h4 className="text-white font-bold text-sm mb-2">Micro-interactions</h4>
                         <p className="text-zinc-500 text-xs max-w-[200px] leading-relaxed ml-auto">
                             Subtle movement that confirms intent — never distracting.
                         </p>
                     </div>
                 </div>
             </div>
          </motion.div>

          {/* Card 3: Contact */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-1 rounded-[32px] bg-[#0c0c0c] border border-zinc-800/60 p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors relative shadow-2xl h-[400px]"
          >
             <div className="flex justify-between items-start">
                 <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
                 </div>
                 <div className="flex items-center gap-2 bg-[#111] border border-zinc-800/80 px-3 py-1.5 rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                     <span className="text-[10px] font-bold text-zinc-300">Available for work</span>
                 </div>
             </div>

             <div className="flex flex-col mt-auto mb-8">
                 <h3 className="text-[28px] font-black text-white leading-[1.1] tracking-tight">
                     LET'S BUILD SOMETHING
                 </h3>
                 <p className="font-serif italic text-2xl text-zinc-400 mt-2">
                     that actually works.
                 </p>
             </div>

             <div className="flex flex-col gap-5">
                 <div className="flex items-center gap-3 pt-5 border-t border-zinc-800/50">
                     <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0">
                        <Copy size={12} className="text-zinc-400" />
                     </div>
                     <span className="font-serif italic text-lg text-white font-medium">hello@parthh.in</span>
                 </div>
                 <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600 text-center">
                     Tap to copy email
                 </p>
                 <button className="w-full bg-white text-black py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors mt-2">
                     CONNECT NOW <MoveUpRight size={14} />
                 </button>
             </div>
          </motion.div>

          {/* Card 4: Global & Clock Base */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 rounded-[32px] bg-[#0c0c0c] border border-zinc-800/60 p-10 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl h-[400px]"
          >
             <div className="flex flex-col z-10">
                 <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">
                     Available globally
                 </div>
                 <h3 className="text-[32px] font-bold text-white max-w-[240px] leading-tight tracking-tight">
                     Adaptable across time zones
                 </h3>
             </div>

             {/* Glowing planet effect */}
             <div className="absolute -left-32 -bottom-48 w-[500px] h-[500px] rounded-full border border-zinc-800/30 bg-gradient-to-tr from-zinc-900/20 to-transparent shadow-[inset_0_0_100px_rgba(255,255,255,0.03)] z-0"></div>

             <div className="absolute bottom-8 right-8 flex flex-col gap-6 z-10">
                 <div className="flex flex-col gap-2 items-end">
                     <button className="px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-xs font-bold hover:text-white transition-colors bg-[#111]">GB UK</button>
                     <button className="px-5 py-2 rounded-full border border-amber-900/50 text-amber-500 text-xs font-bold bg-amber-900/10">IN India</button>
                     <button className="px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-xs font-bold hover:text-white transition-colors bg-[#111]">US USA</button>
                 </div>
             </div>
          </motion.div>

          {/* Card 5: App Mockups */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 rounded-[32px] bg-[#0c0c0c] border border-zinc-800/60 flex items-center justify-center relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl p-10 h-[400px]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black/50"></div>
             <div className="z-10 text-center">
                <Quote size={48} className="text-zinc-800 mx-auto mb-4" />
                <p className="text-xl font-serif italic text-zinc-300">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mt-4 font-bold">Steve Jobs</p>
             </div>
          </motion.div>

          {/* Central Analog Clock overlapping Cards 4 & 5 */}
          <div className="absolute left-[60%] md:left-[55%] lg:left-[58%] bottom-16 md:bottom-24 -translate-x-1/2 translate-y-12 z-20 pointer-events-none drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]">
              <AnalogClock />
          </div>

        </div>
      </BlurFade>
    </section>
  );
}
