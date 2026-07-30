const services = [
  {
    number: "01",
    title: "Brand Films",
    description:
      "Concept-driven films that express your company\u2019s story, personality, and point of view. Authored films\u2014not corporate communication.",
  },
  {
    number: "02",
    title: "Product & Launch Films",
    description:
      "Narrative and visually driven films that introduce a product, feature, platform, or milestone\u2014turning technical ideas into clear, cinematic stories.",
  },
  {
    number: "03",
    title: "Employer Brand Films",
    description:
      "Films about your people, workplace, and culture without the usual interviews, testimonials, or recruitment language. We use narrative, comedy, and satire instead.",
  },
  {
    number: "04",
    title: "Cyber Stories",
    description:
      "Films that make invisible threats, security systems, and data risks easy to understand. No hooded hackers, dark server rooms, or glowing code.",
  },
  {
    number: "05",
    title: "Original Branded Entertainment",
    description:
      "Films inspired by technology, workplace culture, and human behaviour\u2014interesting enough to watch even when the product is not on screen.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">What We Make</p>
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A brief overview of what we create
          </h2>
        </div>

        {/* List */}
        <ul className="border-t border-border">
          {services.map((service) => (
            <li
              key={service.number}
              className="group grid grid-cols-1 border-b border-border py-12 transition-colors md:grid-cols-12 md:items-start md:gap-10 md:py-16 lg:py-20"
            >
              <span className="mb-6 block text-sm font-medium tracking-widest text-kakadu md:col-span-1 md:mb-0 md:pt-2">
                {service.number}
              </span>
              <h3 className="mb-4 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-kakadu md:col-span-5 md:mb-0 md:text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:col-span-6 md:pt-2 lg:text-lg">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
