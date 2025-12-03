import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const culinaryShowcase = [
  {
    video: "https://www.youtube.com/embed/XcWIlsfVoGY?si=3srABMjzkjyfmT8A",
  },
  {
    video: "https://www.youtube.com/embed/XcWIlsfVoGY?si=3srABMjzkjyfmT8A",
  },
  {
    video: "https://www.youtube.com/embed/XcWIlsfVoGY?si=3srABMjzkjyfmT8A",
  },
  {
    video: "https://www.youtube.com/embed/XcWIlsfVoGY?si=3srABMjzkjyfmT8A",
  },
  {
    video: "https://www.youtube.com/embed/XcWIlsfVoGY?si=3srABMjzkjyfmT8A",
  },
]

const panelDiscussions = [
  {
    video: "https://www.youtube.com/embed/N2lwx2Qxb0Q?si=P2pmPQQyunfNBMD1",
  },
  {
    video: "https://www.youtube.com/embed/N2lwx2Qxb0Q?si=P2pmPQQyunfNBMD1",
  },
  {
    video: "https://www.youtube.com/embed/N2lwx2Qxb0Q?si=P2pmPQQyunfNBMD1",
  },
  {
    video: "https://www.youtube.com/embed/N2lwx2Qxb0Q?si=P2pmPQQyunfNBMD1",
  },
  {
    video: "https://www.youtube.com/embed/N2lwx2Qxb0Q?si=P2pmPQQyunfNBMD1",
  },
]

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  video,
}: {
  video: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-[30vh] w-[30vw] cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <iframe
        src={video.toString()}
        title="Culinary Showcase"
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; "
        allowFullScreen
        ></iframe>

    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {culinaryShowcase.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {panelDiscussions.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/15 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/15 bg-gradient-to-l"></div>
    </div>
  )
}
