export function About() {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-8 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div>
          <img
            src="/images/kakadu-bird.png"
            alt="Kakadu bird mascot"
            className="mb-6 w-16 md:w-20 h-auto"
          />
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            We craft cinematic experiences powered by cutting-edge AI technology
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our team combines decades of filmmaking expertise with pioneering AI tools to deliver content that was previously impossible to create.
          </p>
        </div>


      </div>
    </section>
  )
}
