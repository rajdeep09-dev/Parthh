"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive SaaS platform built for high-performance teams.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "/assets/project-placeholder-1.png",
    tall: true,
  },
  {
    title: "Design System",
    description: "Scalable component library for enterprise web applications.",
    tags: ["Figma", "Storybook", "Framer"],
    image: "/assets/project-placeholder-2.png",
    tall: false,
  },
  {
    title: "E-Commerce Experience",
    description: "Headless commerce solution with sub-second page loads.",
    tags: ["Shopify", "Sanity", "Vercel"],
    image: "/assets/project-placeholder-3.png",
    tall: false,
  },
  {
    title: "Web3 Wallet UI",
    description: "Intuitive interface for managing digital assets seamlessly.",
    tags: ["Web3.js", "Ethereum", "D3.js"],
    image: "/assets/project-placeholder-4.png",
    tall: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col relative z-30">
      <BlurFade delay={0.2} yOffset={20}>
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-amber-500" />
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Latest & <span className="font-serif italic text-zinc-400 font-normal">greatest</span>
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.3 + index * 0.1} yOffset={30}>
            <motion.div
              whileHover="hover"
              className={`group relative flex flex-col rounded-[32px] overflow-hidden bg-[#0c0c0c] border border-zinc-800/60 p-2 transition-all hover:border-zinc-600 ${
                project.tall ? "h-[500px] md:h-[600px]" : "h-[400px] md:h-[480px]"
              }`}
            >
              <div className="relative w-full h-[65%] rounded-[24px] overflow-hidden bg-zinc-900 border border-zinc-800/50">
                {/* Fallback pattern since we don't have images */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-sm uppercase tracking-widest">
                  {project.title.split(" ")[0]}_Mockup
                </div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Hover Reveal Arrow */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0.8, x: -10, y: 10 },
                    hover: { opacity: 1, scale: 1, x: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl"
                >
                  <ArrowUpRight size={24} strokeWidth={2} />
                </motion.div>
              </div>

              <div className="flex flex-col justify-between flex-1 p-6 md:p-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-zinc-800 bg-black/50 text-zinc-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
