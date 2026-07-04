import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
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
        <Services />
        <SelectedWork />
        <Contact />
      </main>
    </>
  )
}
