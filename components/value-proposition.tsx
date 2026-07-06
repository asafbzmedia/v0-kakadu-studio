import { KakaduCreative, KakaduSpeed, KakaduScale } from "@/components/icons/kakadu-birds"

const values = [
  {
    icon: KakaduCreative,
    title: "Ideas Without Limits",
    description:
      "Bring impossible concepts to life—from futuristic worlds to abstract cybersecurity threats—without the constraints of traditional production.",
  },
  {
    icon: KakaduSpeed,
    title: "Launch While It Matters",
    description:
      "Markets move fast. Campaigns shouldn't take months. Our AI-powered workflow helps you go from concept to final delivery in days—not weeks.",
  },
  {
    icon: KakaduScale,
    title: "Stand Out.",
    description:
      "Spend more on your marketing strategy—not your production logistics.",
  },
]

export function ValueProposition() {
  return (
    <section id="why-ai" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Why Modern Brands Choose AI-Powered Production
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-kakadu/50 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-white/5 p-2.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-kakadu/40 group-hover:bg-kakadu/10 group-hover:[filter:drop-shadow(0_0_16px_var(--kakadu-glow))]">
                  <Icon className="h-full w-full" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
