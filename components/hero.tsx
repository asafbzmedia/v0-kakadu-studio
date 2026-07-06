"use client"

import { useRef, useState } from "react"
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react"

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
    <section id="hero" className="pt-28 pb-8 md:py-24">
      <div className="mx-auto mb-8 max-w-6xl px-4 md:mb-16 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Serious stories. Wild creativity.
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            We help technology companies launch products, explain complex ideas
            and stand out with cinematic AI-powered storytelling.
          </p>

          <div className="flex flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#work">
                View Our Work
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-2 md:px-6">
        <div className="group relative">
          <video
            ref={videoRef}
            src="https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Kakadu%20.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[16/10] w-full rounded-lg border border-border object-cover sm:aspect-video"
          />

          <div className="absolute bottom-3 right-3 flex gap-2 md:bottom-4 md:right-4">
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
        </div>
      </div>
    </section>
  )
}
