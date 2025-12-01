import Image from "next/image";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col font-sans dark:bg-black">
      <div className="w-full h-screen flex flex-col">
      <div className="w-full h-fit border-b-2">
        <TopBar />
      </div>
      <div className="w-full h-full flex-1">Hero Section</div>
      </div>

    <div className="w-full h-[30vh] bg-green-300">
      <h1 className="text-2xl font-bold">Festival Overview</h1>
      <span>Food For Thought Fest provides complete infotainment around gastronomy. The event has three broad parts i.e Food Fest, Thought Fest & Fun Fest, providing a taste of South Asia with talks, cookery demos, food court, bazaar and live entertainment.      </span>
    </div>

    <div className="w-full h-[30vh] bg-purple-300">
    <h1 className="text-2xl font-bold">We ain't just a food festival</h1>
    <span>We are food fest, thought fest & fun fest ( in cards width full coming up one by one smooth )</span>
    </div>

    <div className="w-full h-[30vh] bg-pink-300">
    <h1 className="text-2xl font-bold">What’s Happening This Year & what you have missed</h1>
    <span>All last year highlights here in circles for each each year plus silkhq  sidebar or bottom bar</span>
    </div>

    <div className="w-full h-[30vh] bg-gray-300">
    <h1 className="text-2xl font-bold">Culinary Showcase</h1>
    <span>Chef demos</span>
    </div>

    <div className="w-full h-[30vh] bg-orange-300">
    <h1 className="text-2xl font-bold">Celebrity Guests</h1>
    <span>Celebrity Guests</span>
    </div>

    <div className="w-full h-[30vh] bg-teal-200">
    <h1 className="text-2xl font-bold">Testimonials & media coverage</h1>
    <span>Social proof.</span>
    </div>

    <div className="w-full h-[30vh] bg-fuchsia-300">
    <h1 className="text-2xl font-bold">Footer</h1>
    <span>Footer</span>
    </div>


    </div>
  );
}
