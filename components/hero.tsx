import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
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
        <video
          src="https://fivhph8bfjjq3xsn.public.blob.vercel-storage.com/Kakadu%20.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="aspect-[16/10] w-full rounded-lg border border-border object-cover sm:aspect-video"
        />
      </div>
    </section>
  )
}
