import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TeamShowcase } from "@/components/team-showcase"
import { Services } from "@/components/services"
import { SelectedWork } from "@/components/selected-work"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TeamShowcase />
        <Services />
        <SelectedWork />
        <Contact />
      </main>
    </>
  )
}
