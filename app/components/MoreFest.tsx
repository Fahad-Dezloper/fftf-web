"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import ReactLenis from "lenis/react";

const cards = [
  { title: "Fun Fest", subtitle: "music & games", bg: "bg-red-300" },
  { title: "Thought Fest", subtitle: "talks & panels", bg: "bg-green-300" },
  { title: "Food Fest", subtitle: "tasting & demos", bg: "bg-blue-300" },
];

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  bg: string;
  progress: MotionValue<number>;
  total: number;
}

function Card({ i, title, subtitle, bg, progress, total }: CardProps) {
  // Calculate range for this card's entry
  // We divide the scroll into (total - 1) segments.
  // Card 0 is the base, so we have total-1 transitions.
  const step = 1 / (total - 1);
  const start = (i - 1) * step;
  const end = i * step;

  // Y Animation (Entry)
  // If i === 0, y is always 0 (it's the base).
  // If i > 0, y goes from "100vh" (offscreen bottom) to "0vh" (stacked) between start and end.
  const y = useTransform(
    progress,
    [start, end],
    ["100vh", "0vh"]
  );
  
  // Scale Animation (Depth)
  // When the *next* card comes in, this card scales down slightly.
  // The next card enters from `end` to `end + step`.
  const scale = useTransform(
    progress,
    [end, end + step],
    [1, 0.9]
  );
  
  // Apply logic:
  // Card 0: Static Y, Scales when Card 1 enters.
  // Card > 0: Animates Y, Scales when next card enters.
  const actualY = i === 0 ? "0vh" : y;
  
  // The last card doesn't need to scale down as nothing comes after it.
  const actualScale = i === total - 1 ? 1 : scale;

  return (
    <motion.div
      style={{ 
        y: actualY,
        scale: actualScale,
        zIndex: i 
      }}
      className={`absolute inset-0 m-auto top-[200px] flex h-[88vh] w-full flex-col items-center justify-center rounded-3xl shadow-2xl ${bg}`}
    >
       <div className="flex flex-col items-center gap-2 p-4 text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg opacity-80">{subtitle}</p>
       </div>
    </motion.div>
  );
}

export default function MoreFest() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div ref={container} className="relative h-[260vh] w-full">
        <div className="sticky top-8 flex flex-col h-screen overflow-hidden">
           <h1 className="mb-8 text-4xl font-bold">We're more than just a food festival</h1>
           <div className="relative h-[60vh] w-full">
             {cards.map((c, i) => (
               <Card key={i} {...c} i={i} progress={scrollYProgress} total={cards.length} />
             ))}
           </div>
        </div>
      </div>
    </ReactLenis>
  );
}
