"use client"

import { useRef, useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  title: string
  videoSrc: string
}

function VideoCard({ title, videoSrc }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Mobile: play when card is near the viewport center
  useEffect(() => {
    if (!isMobile || !cardRef.current) return

    const handleScroll = () => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const threshold = viewportHeight * 0.3

      const isNearCenter = Math.abs(elementCenter - viewportCenter) < threshold
      const isVisible = rect.top < viewportHeight && rect.bottom > 0

      setIsPlaying(isNearCenter && isVisible)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  // Handle video play/pause
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked, silently fail
        })
      }
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isPlaying])

  const handleMouseEnter = () => {
    if (!isMobile) setIsPlaying(true)
  }

  const handleMouseLeave = () => {
    if (!isMobile) setIsPlaying(false)
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article className="group flex flex-col gap-4">
      <div
        ref={cardRef}
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleLoadedData}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-muted" />}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
      </div>

      <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
        {title}
      </h3>
    </article>
  )
}

const projects = [
  {
    title: "Advertisement",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/adidas_ai_spec%20%282160p%29.mp4",
  },
  {
    title: "Promotional",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Khabib%20For%20Site.mp4",
  },
  {
    title: "Performance",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14599835_3840_2160_25fps-yRwAFiswOqteQwNYLmApTmfuwY9KCo.mp4",
  },
  {
    title: "Vertical micro-drama",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4546853-hd_1080_1920_25fps-3Wr1M1QISJ1UsYjwozi1HNffJznC8B.mp4",
  },
  {
    title: "Explainer",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6534938-hd_1080_1920_24fps-3u3kWjxbG5QCQGJ42XjZ6tm5RCIUW6.mp4",
  },
  {
    title: "Short Film",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14904221_1080_1920_30fps-e3HiwZxJvX69Oq7sYwAd50R4Pd8WYh.mp4",
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <Badge variant="secondary" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Selected Work
            </h2>
          </div>
          <p className="hidden max-w-md text-muted-foreground md:block">
            A curated collection of our finest AI-powered video productions
          </p>
        </div>

        {/* Video Grid - each video shown clearly */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <VideoCard key={project.title} title={project.title} videoSrc={project.videoSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
