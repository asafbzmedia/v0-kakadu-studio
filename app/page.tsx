import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Services } from "@/components/services"
import { SelectedWork } from "@/components/selected-work"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <SelectedWork />
        <Services />
        <Contact />
      </main>
    </>
  )
}
