import { Header } from "@/components/header"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Services } from "@/components/services"
import { SelectedWork } from "@/components/selected-work"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <ScrollProgress />
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
