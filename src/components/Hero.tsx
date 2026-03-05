import React from 'react';
import { MapPin, Layers, Command, Moon, MoveUpRight, Copy, MousePointer2, Linkedin, Github, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full max-w-[1400px] mx-auto relative flex flex-col gap-8 pb-32 selection:bg-zinc-800">
      {/* Header */}
      <header className="flex justify-between items-center py-6 w-full px-4 md:px-8">
        {/* Logo left */}
        <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-2xl text-white">PS</span>
            <div className="w-[1px] h-6 bg-zinc-800"></div>
            <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
               <span>Creative Engineer</span>
               <span className="text-emerald-500">Building the future</span>
            </div>
        </div>

        {/* Nav middle */}
        <nav className="hidden md:flex items-center gap-1 text-sm text-zinc-400 bg-[#111] backdrop-blur-xl rounded-full p-1 border border-zinc-800/80 shadow-2xl">
           <a href="#" className="bg-white text-black px-5 py-2 rounded-full font-medium transition-transform active:scale-95">Home</a>
           <a href="#" className="hover:text-white px-5 py-2 transition-colors">About</a>
           <a href="#" className="hover:text-white px-5 py-2 transition-colors">Work</a>
           <a href="#" className="hover:text-white px-5 py-2 transition-colors">Blogs</a>
           <a href="#" className="hover:text-white px-5 py-2 transition-colors flex items-center gap-1">More <span className="text-[10px] mt-0.5">▼</span></a>
           <div className="w-[1px] h-4 bg-zinc-800 mx-2"></div>
           <button className="hover:text-white p-2 transition-colors rounded-full hover:bg-zinc-800/50">
              <Moon size={16} />
           </button>
           <button className="bg-[#1a1a1a] text-zinc-300 px-5 py-2 rounded-full hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-700/50 ml-1">Book a Call</button>
        </nav>

        {/* Command right */}
        <div className="w-12 h-12 rounded-full bg-[#111] border border-zinc-800/80 flex items-center justify-center backdrop-blur-xl shadow-2xl cursor-pointer hover:bg-zinc-800 transition-colors">
            <Command size={18} className="text-zinc-400" />
        </div>
      </header>

      {/* Main Title Area */}
      <div className="flex flex-col items-center justify-center pt-8 md:pt-16 pb-24 relative w-full">
         <h1 className="text-[18vw] lg:text-[250px] font-black leading-[0.75] tracking-tight text-white m-0 p-0">
            PARTH
         </h1>
         <div className="mt-10 md:mt-16 text-center flex flex-col items-center gap-4 relative z-10">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold">
                I design and build products that
            </p>
            <p className="font-serif italic text-4xl md:text-[56px] text-white font-medium tracking-tight">
                deliver real impact.
            </p>
         </div>

         {/* Left Pin */}
         <div className="hidden lg:flex absolute left-12 top-[55%] flex-col items-center gap-3 text-center">
             <MapPin size={20} className="text-emerald-500" />
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                <span className="text-white">Based in Noida,</span><br/> India
             </div>
         </div>

         {/* Right Stack */}
         <div className="hidden lg:flex absolute right-12 top-[55%] flex-col items-center gap-3 text-center">
             <Layers size={20} className="text-blue-500" />
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                <span className="text-white">Full Stack Dev,</span><br/> & Designer
             </div>
         </div>
      </div>

      {/* Bento Grid Container */}
      <div className="w-full px-4 lg:px-12 relative flex flex-col items-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-[420px_420px]">

            {/* Card 1: Profile */}
            <div className="md:col-span-1 rounded-[24px] bg-[#0c0c0c] border border-zinc-800/60 p-8 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl">
               <div className="flex flex-col gap-1 z-10">
                   <h2 className="text-[32px] font-bold tracking-tight text-white flex items-baseline gap-1.5">
                      Parth <span className="font-serif italic text-zinc-400 font-normal">Sharma</span>
                   </h2>
                   <div className="flex items-center gap-1.5 text-zinc-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-1">
                      <MapPin size={10} />
                      <span>Noida, IN • 03:35 AM</span>
                   </div>
               </div>

               {/* Photos */}
               <div className="flex-1 w-full relative mt-10">
                   <div className="absolute top-0 left-[-10px] w-[130px] h-[160px] rounded-[16px] rotate-[-12deg] shadow-2xl overflow-hidden border border-zinc-700/50">
                       <Image src="/assets/photo1.png" alt="Photo 1" fill className="object-cover" />
                   </div>
                   <div className="absolute top-[-10px] right-[-10px] w-[130px] h-[160px] rounded-[16px] rotate-[5deg] shadow-2xl overflow-hidden border border-zinc-700/50">
                       <Image src="/assets/photo2.png" alt="Photo 2" fill className="object-cover" />
                   </div>
               </div>

               <div className="flex items-center justify-center gap-6 mt-auto pt-6 z-10 text-zinc-500">
                   <a href="#" className="hover:text-white transition-colors cursor-pointer"><Linkedin size={18} strokeWidth={1.5} /></a>
                   <a href="#" className="hover:text-white transition-colors cursor-pointer"><Github size={18} strokeWidth={1.5} /></a>
                   <a href="#" className="hover:text-white transition-colors cursor-pointer"><Twitter size={18} strokeWidth={1.5} /></a>
               </div>
            </div>

            {/* Card 2: Philosophy */}
            <div className="md:col-span-2 rounded-[24px] bg-[#0c0c0c] border border-zinc-800/60 p-10 flex flex-col group hover:border-zinc-700 transition-colors relative overflow-hidden shadow-2xl">
               <div className="flex justify-between items-start z-10 w-full">
                   <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                       <MousePointer2 size={10} className="rotate-[-45deg]" />
                       <span>Detail-driven UI</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500">Philosophy +</span>
                   </div>
               </div>

               <div className="flex justify-between items-start w-full mt-10 z-10">
                   <div className="flex flex-col w-[55%]">
                       <h3 className="text-[44px] font-bold leading-[1.1] text-white tracking-tight">
                           Interfaces <br/>
                           <span className="font-serif italic font-normal text-zinc-400">you can feel.</span>
                       </h3>
                       <p className="text-zinc-500 text-xs mt-6 leading-relaxed max-w-[240px]">
                           I sweat spacing, timing, and feedback — the tiny stuff.
                       </p>
                   </div>

                   <div className="flex flex-col items-end gap-6 w-[45%]">
                       <div className="flex flex-wrap justify-end gap-2 text-[9px] uppercase tracking-[0.1em] font-bold">
                           <span className="px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/10">Motion</span>
                           <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Type</span>
                           <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Feedback</span>
                           <span className="px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 bg-[#111]">Craft</span>
                       </div>
                       <div className="text-right mt-4">
                           <h4 className="text-white font-bold text-xs mb-2">Micro-interactions</h4>
                           <p className="text-zinc-500 text-[10px] max-w-[180px] leading-relaxed ml-auto">
                               Subtle movement that confirms intent — never distracting.
                           </p>
                       </div>
                   </div>
               </div>
            </div>

            {/* Card 3: Contact */}
            <div className="md:col-span-1 rounded-[24px] bg-[#0c0c0c] border border-zinc-800/60 p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors relative shadow-2xl">
               <div className="flex justify-between items-start">
                   <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                   </div>
                   <div className="flex items-center gap-2 bg-[#111] border border-zinc-800/80 px-3 py-1.5 rounded-full">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                       <span className="text-[10px] font-bold text-zinc-300">Available for work</span>
                   </div>
               </div>

               <div className="flex flex-col mt-auto mb-8">
                   <h3 className="text-[26px] font-black text-white leading-[1.1] tracking-tight">
                       LET'S BUILD SOMETHING
                   </h3>
                   <p className="font-serif italic text-xl text-zinc-400 mt-1">
                       that actually works.
                   </p>
               </div>

               <div className="flex flex-col gap-5">
                   <div className="flex items-center gap-3 pt-5 border-t border-zinc-800/50">
                       <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0">
                          <Copy size={10} className="text-zinc-400" />
                       </div>
                       <span className="font-serif italic text-lg text-white font-medium">hello@parthh.in</span>
                   </div>
                   <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600 text-center">
                       Tap to copy email
                   </p>
                   <button className="w-full bg-white text-black py-3 rounded-full font-bold text-[11px] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors mt-2">
                       CONNECT NOW <MoveUpRight size={14} />
                   </button>
               </div>
            </div>

            {/* Card 4: Global */}
            <div className="md:col-span-2 rounded-[24px] bg-[#0c0c0c] border border-zinc-800/60 p-10 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl">
               <div className="flex flex-col z-10">
                   <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">
                       Available globally
                   </div>
                   <h3 className="text-[28px] font-bold text-white max-w-[200px] leading-tight tracking-tight">
                       Adaptable across time zones
                   </h3>
               </div>

               {/* Glowing planet effect */}
               <div className="absolute -left-32 -bottom-48 w-[500px] h-[500px] rounded-full border border-zinc-800/30 bg-gradient-to-tr from-zinc-900/20 to-transparent shadow-[inset_0_0_100px_rgba(255,255,255,0.03)] z-0"></div>

               <div className="absolute bottom-8 right-8 flex flex-col gap-6 z-10">
                   <div className="flex flex-col gap-2 items-end">
                       <button className="px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-[10px] font-bold hover:text-white transition-colors bg-[#111]">GB UK</button>
                       <button className="px-5 py-2 rounded-full border border-amber-900/50 text-amber-500 text-[10px] font-bold bg-amber-900/10">IN India</button>
                       <button className="px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-[10px] font-bold hover:text-white transition-colors bg-[#111]">US USA</button>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-500 justify-end">
                       <MapPin size={12} />
                       <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Remote <span className="text-white ml-1">India</span></span>
                   </div>
               </div>
            </div>

            {/* Card 5: App Mockups */}
            <div className="md:col-span-2 rounded-[24px] bg-[#0c0c0c] border border-zinc-800/60 flex items-end justify-center relative overflow-hidden group hover:border-zinc-700 transition-colors shadow-2xl p-0">
               <Image src="/assets/mockups.png" alt="App Mockups" width={380} height={420} className="object-contain object-bottom mt-auto z-10 translate-y-6" priority />
            </div>

            {/* Clock Overlay Container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[480px] h-[480px] pointer-events-none drop-shadow-[0_0_60px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform">
                <Image src="/assets/clock.png" alt="clock" fill className="object-contain" priority />
            </div>
        </div>
      </div>
    </div>
  );
}
