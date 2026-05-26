"use client"

import { useRef, useEffect, useState } from "react"

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

  // Mobile: Intersection Observer for viewport center detection
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
    if (!isMobile) {
      setIsPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsPlaying(false)
    }
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
    // Ensure video is paused and at first frame initially
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      ref={cardRef}
      className="group relative aspect-[4/3] w-full cursor-default overflow-hidden rounded-lg bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video - always visible, shows first frame when paused */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
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

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-medium text-white md:text-3xl">{title}</h3>
      </div>
    </div>
  )
}

const services = [
  {
    title: "Advertisement",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12765403_1920_1080_25fps-RDs4iX8sDveg12J6pcb4B7uwdHOHzk.mp4",
  },
  {
    title: "Promotional",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14223222_1920_1080_60fps-dbOtNFK5IM1hifrWDZ4Wy1bBIIHazL.mp4",
  },
  {
    title: "Performance",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14599835_3840_2160_25fps-yRwAFiswOqteQwNYLmApTmfuwY9KCo.mp4",
  },
  {
    title: "Vertical micro-drama",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4546853-hd_1080_1920_25fps-3Wr1M1QISJ1UsYjwozi1HNffJznC8B.mp4",
  },
  {
    title: "Explainer",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6534938-hd_1080_1920_24fps-3u3kWjxbG5QCQGJ42XjZ6tm5RCIUW6.mp4",
  },
  {
    title: "Short Film",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14904221_1080_1920_30fps-e3HiwZxJvX69Oq7sYwAd50R4Pd8WYh.mp4",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Services
          </p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Video production tailored to your needs
          </h2>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <VideoCard
              key={service.title}
              title={service.title}
              videoSrc={service.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
