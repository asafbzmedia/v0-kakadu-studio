import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { SelectedWork } from "@/components/selected-work"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  )
}
