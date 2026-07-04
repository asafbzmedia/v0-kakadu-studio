import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <video
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12765403_1920_1080_25fps-PsqTT4BJYbL3VfnkOTFnUitU0Tl1Rv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg border border-border object-cover aspect-video"
        />
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 md:mt-16 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Transform Your Vision Into Cinematic Reality
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Kakadu Studio combines cutting-edge AI technology with creative
            expertise to produce stunning videos that captivate audiences and
            elevate your brand.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
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
    </section>
  )
}
