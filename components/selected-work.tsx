"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"

import { Badge } from "@/components/ui/badge"

const projects = [
  {
    image: "/images/project-1.jpg",
  },
  {
    image: "/images/project-2.jpg",
  },
  {
    image: "/images/project-3.jpg",
  },
  {
    image: "/images/project-4.jpg",
  },
  {
    image: "/images/project-5.jpg",
  },
  {
    image: "/images/project-6.jpg",
  },
]

export function SelectedWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const hasMoreToScroll =
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    setCanScrollRight(hasMoreToScroll)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScroll()
    container.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)

    return () => {
      container.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  return (
    <section id="work" className="py-24 md:py-32">
      {/* Header with consistent max-width */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
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
      </div>

      {/* Horizontal scroll container - full width */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-[calc((100vw-72rem)/2+1.5rem)] scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-border bg-card w-[85vw] h-[60vw] md:w-[80vw] md:h-[80vh]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt="Project showcase"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Right fade gradient to indicate more content */}
        <div
          className={`pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 md:w-32 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  )
}
