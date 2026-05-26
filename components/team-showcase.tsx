"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function TeamShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate progress: 0 when section enters, 1 when section leaves
      const start = rect.top - viewportHeight
      const end = rect.bottom
      const totalDistance = end - start
      const traveled = -start

      const progress = Math.max(0, Math.min(1, traveled / totalDistance))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate section-specific states based on scroll progress
  const showNeutralFaces = scrollProgress < 0.25
  const showExpressiveFaces = scrollProgress >= 0.25 && scrollProgress < 0.45
  const showAIWorkflow = scrollProgress >= 0.45 && scrollProgress < 0.7
  const showOptimize = scrollProgress >= 0.7

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-0">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          
          {/* Meet The Humans - Neutral Faces */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              showNeutralFaces ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Title on left */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Meet The Humans
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    The creative minds behind every project.
                  </p>
                </div>
                {/* Faces on right */}
                <div className="flex-1 flex justify-center gap-6 md:gap-8">
                  <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-border">
                    <Image
                      src="/images/team/person1-neutral.jpg"
                      alt="Team member 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-border">
                    <Image
                      src="/images/team/person2-neutral.jpg"
                      alt="Team member 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet The Humans - Expressive Faces */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              showExpressiveFaces ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Title on left */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Meet The Humans
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Passionate about pushing creative boundaries.
                  </p>
                </div>
                {/* Faces on right - different expressions */}
                <div className="flex-1 flex justify-center gap-6 md:gap-8">
                  <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-border">
                    <Image
                      src="/images/team/person1-expressive.jpg"
                      alt="Team member 1 expressive"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-border">
                    <Image
                      src="/images/team/person2-expressive.jpg"
                      alt="Team member 2 expressive"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The AI Workflow - Title on right, video on left */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              showAIWorkflow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                {/* Title on right */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    The AI Workflow
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Powered by cutting-edge artificial intelligence to accelerate your creative vision.
                  </p>
                </div>
                {/* Video on left */}
                <div className="flex-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                    <video
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12765403_1920_1080_25fps-PsqTT4BJYbL3VfnkOTFnUitU0Tl1Rv.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optimize and Scale - Title on left, video on right */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              showOptimize ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Title on left */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Optimize and Scale
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    From concept to delivery, we streamline production to meet any scale.
                  </p>
                </div>
                {/* Video on right */}
                <div className="flex-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                    <video
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12765403_1920_1080_25fps-PsqTT4BJYbL3VfnkOTFnUitU0Tl1Rv.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
