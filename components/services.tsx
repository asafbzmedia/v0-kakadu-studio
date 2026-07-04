import Image from "next/image"

const gallery = [
  { image: "/images/project-1.png", title: "Advertisement" },
  { image: "/images/project-2.png", title: "Promotional" },
  { image: "/images/project-3.png", title: "Performance" },
  { image: "/images/project-4.png", title: "Vertical micro-drama" },
  { image: "/images/project-5.png", title: "Explainer" },
  { image: "/images/project-6.png", title: "Short Film" },
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

        {/* Image thumbnail gallery */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-base">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
