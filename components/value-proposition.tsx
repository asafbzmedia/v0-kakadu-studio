import { Sparkles, Zap, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Infinite Creative Freedom",
    description:
      "No limits on locations, actors, or physics. If you can imagine it, we can bring it to life on screen with cinematic quality.",
  },
  {
    icon: Zap,
    title: "Hyper-Speed Turnaround",
    description:
      "Traditional productions take months. Our advanced AI workflow condenses timelines into days, keeping your brand ahead of the market.",
  },
  {
    icon: TrendingUp,
    title: "Premium Scale, Smart Budgets",
    description:
      "Get block-buster visuals and high-end production value at a fraction of the cost of traditional camera crews and VFX studios.",
  },
]

export function ValueProposition() {
  return (
    <section id="why-ai" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Why AI Video Production?
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
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
