"use client"

import { useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <section id="hero" className="group relative h-dvh w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        src="https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Kakadu%20.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Contrast overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[5] bg-gradient-to-b from-black/60 via-black/30 to-black/60"
      />

      {/* Text overlay */}
      <div
        id="showreel"
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6"
      >
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          We make smart, funny, cinematic films{" "}
          <span className="md:block">for the tech world</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
          Kakadu Studio was founded by award-winning cinematographer Ben Peled
          and director-editor Asaf Ben Zichri. We create films for technology,
          AI, and cybersecurity companies, from the first idea to the final
          cut.
        </p>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2 md:bottom-6 md:right-6">
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </Button>
      </div>
    </section>
  )
}
