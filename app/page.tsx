import Image from "next/image";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import MoreFest from "./components/MoreFest";
import PastFests from "./components/PastFests";
import CulinaryShowcase from "./components/CulinaryShowcase";
import SpeakerShowcase from "./components/SpeakerShowcase";
import SponsorsShowcase from "./components/SponsorsShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans gap-8 dark:bg-black">
      <div className="w-full h-screen max-h-screen flex flex-col">
      <div className="w-full h-fit">
        <TopBar />
      </div>
      <div className="w-full h-fit flex-1">
        <HeroSection />
      </div>
      </div>

    <div className="w-full h-fit flex flex-col gap-4 items-center py-8 rounded-4xl justify-center bg-[#F1E9DD]">
      <span className="font-medium text-2xl max-w-5xl text-center"><span className="text-[#F26B24] font-bold">Food For Thought Fest</span> is a unique infotainment experience built around gastronomy. It celebrates South Asia’s rich culinary heritage and shared cultural identity through a blend of immersive food experiences and thought-provoking conversations. <br /> </span>
      <span className="font-medium text-2xl max-w-5xl text-center">Curated by the <span className="text-[#F26B24] font-bold">South Asian Association for Gastronomy <span className="text-[#F26B24]">(</span><span className="text-black">SAAG</span><span className="text-[#F26B24]">)</span></span>, the festival brings together chefs, thinkers, diplomats, and food enthusiasts from across the region in one dynamic, multi-sensory event.</span>
    </div>

    <div className="w-full h-fit rounded-xl">
      <MoreFest />
    </div>

    <div className="w-full h-fit">
    <PastFests />
    </div>

    <div className="w-full h-fit">
    <CulinaryShowcase />
    </div>

    <div className="w-full h-[80vh]">
    <SpeakerShowcase />
    </div>

    <div className="w-full h-[30vh]">
    <SponsorsShowcase />
    </div>

    <div className="w-full h-[50vh] rounded-t-4xl bg-[#F1E9DD]">
    <Footer />
    </div>


    </div>
  );
}
