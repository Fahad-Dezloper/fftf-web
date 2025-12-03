import React from "react";

export default function SpeakerShowcase() {
  type SpeakerBox = {
    id: string;
    size: "md" | "sm";
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    color: string;
  };

  const speakers: SpeakerBox[] = [
    // Medium (important) speakers
    {
      id: "speaker-1",
      size: "md",
      top: "2rem",
      left: "2rem",
      color: "bg-[#F26B24]",
    },
    {
      id: "speaker-2",
      size: "md",
      top: "2.5rem",
      right: "2.5rem",
      color: "bg-[#FCD34D]",
    },
    {
      id: "speaker-3",
      size: "md",
      bottom: "2.5rem",
      left: "3rem",
      color: "bg-[#4ADE80]",
    },
    {
      id: "speaker-4",
      size: "md",
      bottom: "2rem",
      right: "2rem",
      color: "bg-[#60A5FA]",
    },
    // Small speakers
    {
      id: "speaker-5",
      size: "sm",
      top: "6rem",
      left: "28%",
      color: "bg-[#F97316]",
    },
    {
      id: "speaker-6",
      size: "sm",
      top: "7rem",
      right: "28%",
      color: "bg-[#A855F7]",
    },
    {
      id: "speaker-7",
      size: "sm",
      bottom: "6rem",
      left: "25%",
      color: "bg-[#22C55E]",
    },
    {
      id: "speaker-8",
      size: "sm",
      bottom: "4rem",
      right: "25%",
      color: "bg-[#0EA5E9]",
    },
    {
      id: "speaker-9",
      size: "sm",
      top: "40%",
      left: "16%",
      color: "bg-[#FB7185]",
    },
    {
      id: "speaker-10",
      size: "sm",
      top: "40%",
      right: "12%",
      color: "bg-[#38BDF8]",
    },
  ];

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <h1 className="relative z-10 text-6xl font-bold text-center">
        Celebrity <br /> Chefs <span className="text-secondary">&</span>{" "}
        Thinkers
      </h1>
      <div className="pointer-events-none w-full h-full absolute inset-0">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className={`absolute rounded-xl ${
              speaker.size === "md" ? "w-[23vh] h-[23vh]" : "w-[16vh] h-[16vh]"
            } ${speaker.color}`}
            style={{
              top: speaker.top,
              right: speaker.right,
              bottom: speaker.bottom,
              left: speaker.left,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}