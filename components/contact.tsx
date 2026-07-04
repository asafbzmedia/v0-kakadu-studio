"use client"

import * as React from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kakadu.studio",
    href: "mailto:hello@kakadu.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: null,
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline & Contact Info */}
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="mb-4 w-fit">
              Get in touch
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="mb-12 max-w-lg text-lg text-muted-foreground">
              Ready to bring your vision to life? Get in touch and let&apos;s
              discuss your next project.
            </p>

            {/* Contact Methods */}
            <div className="flex flex-col gap-6">
              {contactMethods.map((method) => (
                <div key={method.label} className="group flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground transition-all duration-300 group-hover:bg-kakadu/15 group-hover:text-kakadu group-hover:[filter:drop-shadow(0_0_10px_var(--kakadu-glow))]">
                    <method.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground transition-colors hover:text-kakadu"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="flex items-center">
            <div className="w-full rounded-xl border border-border bg-card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
