"use client"

import { useRef, useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  title: string
  description: string
  videoSrc: string
}

function VideoCard({ title, description, videoSrc }: VideoCardProps) {
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
    <article className="group flex flex-col gap-3">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
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
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  )
}

const projects = [
  {
    title: "Advertisement",
    description:
      "A high-impact spec commercial built to capture attention in seconds, blending bold visuals with a punchy narrative.",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/adidas_ai_spec%20%282160p%29.mp4",
  },
  {
    title: "Promotional",
    description:
      "A polished promo piece that tells a brand story with cinematic energy, pacing, and personality.",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Khabib%20For%20Site.mp4",
  },
  {
    title: "Performance",
    description:
      "Data-driven creative designed to maximize engagement and conversions across paid channels.",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Kakadu%20.mp4",
  },
  {
    title: "Vertical micro-drama",
    description:
      "Short-form episodic storytelling crafted for mobile-first audiences, one gripping scene at a time.",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Noir.mp4",
  },
  {
    title: "Explainer",
    description:
      "Complex technology broken down into a clear, engaging story that anyone can follow.",
    videoSrc: "https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Magneto%20no%20sub.mp4",
  },
  {
    title: "Short Film",
    description:
      "An original cinematic piece that pushes the boundaries of AI-driven storytelling.",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14904221_1080_1920_30fps-e3HiwZxJvX69Oq7sYwAd50R4Pd8WYh.mp4",
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected Work
          </h2>
        </div>

        {/* Video Grid - each video shown clearly */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <VideoCard
              key={project.title}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
