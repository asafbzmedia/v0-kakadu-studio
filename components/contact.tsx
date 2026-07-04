import { Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@benpeled.com",
    href: "mailto:hello@benpeled.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+972 54 522 8150",
    href: "tel:+972545228150",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tel Aviv, Israel",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <Badge variant="secondary" className="mb-4">
          Get in touch
        </Badge>
        <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-balance text-lg text-muted-foreground">
          Ready to bring your vision to life? Get in touch and let&apos;s discuss
          your next project.
        </p>

        {/* Contact Methods */}
        <div className="grid gap-6 sm:grid-cols-3">
          {contactMethods.map((method) => {
            const content = (
              <>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-border bg-muted text-foreground transition-all duration-300 group-hover:bg-kakadu/15 group-hover:text-kakadu group-hover:[filter:drop-shadow(0_0_10px_var(--kakadu-glow))]">
                  <method.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="text-sm text-muted-foreground">{method.label}</p>
                <p className="text-foreground transition-colors group-hover:text-kakadu">
                  {method.value}
                </p>
              </>
            )

            return method.href ? (
              <a
                key={method.label}
                href={method.href}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kakadu/40"
              >
                {content}
              </a>
            ) : (
              <div
                key={method.label}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kakadu/40"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
