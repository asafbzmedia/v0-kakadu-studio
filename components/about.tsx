import Image from "next/image"

import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Picture */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/about-studio.png"
              alt="Behind the scenes at Kakadu Studio, filmmakers reviewing footage in an editing suite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start">
            <Badge variant="secondary" className="mb-4">
              About
            </Badge>
            <h2 className="mb-6 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The studio behind the stories
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Kakadu Studio was founded by award-winning cinematographer Ben
                Peled and director-editor Asaf Ben Zichri. Together, they bring
                decades of combined experience in filmmaking, commercials, and
                branded content.
              </p>
              <p>
                We create smart, funny, cinematic films for technology, AI, and
                cybersecurity companies. From the first idea to the final cut,
                we handle every step of production, so complex products become
                stories people actually want to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
