"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-border bg-background/80 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Hamburger Menu - Left */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="size-5" />
          </Button>

          {/* Logo - Center */}
          <a
            href="#hero"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-foreground"
          >
            Kakadu Studio
          </a>

          {/* CTA - Right */}
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      {/* Fullscreen Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background">
          {/* Menu Header */}
          <div className="flex h-14 items-center justify-between px-4 mx-4 mt-4 rounded-full border border-border bg-background/80 backdrop-blur-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </Button>

            <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-foreground">
              Kakadu Studio
            </span>

            <Button variant="outline" size="sm" asChild>
              <a href="#contact" onClick={closeMenu}>
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-4xl font-medium text-foreground transition-colors hover:text-muted-foreground md:text-6xl"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
