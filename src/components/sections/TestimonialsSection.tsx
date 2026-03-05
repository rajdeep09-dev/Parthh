"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    username: "@arivera",
    body: "Parth is an absolute beast when it comes to clean code and pixel-perfect UI. Our conversion rates skyrocketed after the redesign.",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    username: "@samlee_dev",
    body: "I've worked with many developers, but the attention to detail here is unmatched. The micro-interactions alone are worth their weight in gold.",
    rating: 5,
  },
  {
    name: "Jordan Smith",
    username: "@jsmith",
    body: "Delivered exactly what was promised, ahead of schedule. The codebase is so clean and easy to maintain. Highly recommended.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    username: "@erodriguez",
    body: "A rare mix of strong design intuition and technical excellence. The resulting product feels incredibly fast and premium.",
    rating: 5,
  },
  {
    name: "David Chen",
    username: "@dchen",
    body: "Every pixel serves a purpose. It's rare to find someone who sweats the small stuff as much as the big architecture decisions.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    username: "@sjenkins",
    body: "The Framer Motion animations are buttery smooth. It completely transformed our static site into an engaging experience.",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
  rating,
}: {
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <div
      className="relative w-80 max-w-full cursor-pointer overflow-hidden rounded-[24px] border border-zinc-800/60 p-6 bg-[#0c0c0c] hover:bg-zinc-900/50 transition-colors"
    >
      <div className="flex flex-row items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-500">{username}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array(rating).fill(0).map((_, i) => (
             <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-zinc-400">
        "{body}"
      </blockquote>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="w-full mx-auto py-24 md:py-32 flex flex-col relative z-20 overflow-hidden bg-black">
      {/* Background gradients for the fading edges of the marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full mb-16 z-20 relative">
        <BlurFade delay={0.2} yOffset={20}>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-[1px] bg-zinc-700"></div>
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            What people <span className="font-serif italic text-zinc-400 font-normal">say</span>
          </h2>
        </BlurFade>
      </div>

      <div className="flex flex-col gap-6 relative z-0 w-full [--duration:50s]">
        <Marquee pauseOnHover className="[--gap:1.5rem]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--gap:1.5rem] [--duration:60s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
