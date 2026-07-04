"use client"

import { useState } from "react"
import { Megaphone, Feather, Video, Clapperboard, Eye, Film, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Advertisement",
    description: "High-impact commercial spots crafted to capture attention and drive conversions.",
  },
  {
    icon: Feather,
    title: "Promotional",
    description: "Polished promo content that showcases your brand's story with cinematic flair.",
  },
  {
    icon: Video,
    title: "Performance",
    description: "Data-driven creative built to maximize engagement across paid channels.",
  },
  {
    icon: Clapperboard,
    title: "Vertical micro-drama",
    description: "Short-form episodic narratives designed for mobile-first audiences.",
  },
  {
    icon: Eye,
    title: "Explainer",
    description: "Clear, engaging videos that break down complex ideas into simple stories.",
  },
  {
    icon: Film,
    title: "Short Film",
    description: "Original cinematic pieces that push the boundaries of AI-driven storytelling.",
  },
]

export function Services() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? services.length - 1 : i - 1))
  const next = () => setActive((i) => (i === services.length - 1 ? 0 : i + 1))

  return (
    <section id="services" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Services</p>
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Video production tailored to your needs
          </h2>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="relative mx-auto h-96 w-full overflow-hidden">
        {services.map((service, index) => {
          const Icon = service.icon
          const count = services.length
          // Circular distance from the active card, wrapped to [-count/2, count/2]
          let offset = index - active
          if (offset > count / 2) offset -= count
          if (offset < -count / 2) offset += count

          const isActive = offset === 0
          const isVisible = Math.abs(offset) <= 1
          const scale = isActive ? 1 : 0.85

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View ${service.title}`}
              aria-current={isActive}
              tabIndex={isVisible ? 0 : -1}
              style={{
                transform: `translateX(calc(-50% + ${offset} * 22rem)) scale(${scale})`,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              className={`group absolute left-1/2 top-0 flex h-96 w-80 flex-col rounded-2xl border p-8 text-left transition-all duration-500 ease-out ${
                isActive
                  ? "border-kakadu/50 bg-card shadow-2xl shadow-primary/10"
                  : "border-border bg-card/50 hover:opacity-75"
              }`}
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-500 ${
                  isActive
                    ? "bg-kakadu/15 text-kakadu [filter:drop-shadow(0_0_10px_var(--kakadu-glow))]"
                    : "bg-muted text-muted-foreground group-hover:bg-kakadu/15 group-hover:text-kakadu group-hover:[filter:drop-shadow(0_0_10px_var(--kakadu-glow))]"
                }`}
              >
                <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="mt-auto">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{service.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Navigation arrows */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous service"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-muted"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next service"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
