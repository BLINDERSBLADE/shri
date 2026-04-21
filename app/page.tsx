import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Reasons } from "@/components/reasons"
import { Numbers } from "@/components/numbers"
import { Timeline } from "@/components/timeline"
import { Memories } from "@/components/memories"
import { Song } from "@/components/song"
import { Candles } from "@/components/candles"
import { Letter } from "@/components/letter"
import { SiteFooter } from "@/components/footer"
import { FallingFlowers } from "@/components/falling-flowers"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="relative w-full">
      <FallingFlowers count={28} />
      <Navbar />
      <div className="relative z-10 scroll-smooth">
        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        <div id="reasons" className="scroll-mt-24">
          <Reasons />
        </div>
        <div id="numbers" className="scroll-mt-24">
          <Numbers />
        </div>
        <div id="timeline" className="scroll-mt-24">
          <Timeline />
        </div>
        <div id="memories" className="scroll-mt-24">
          <Memories />
        </div>
        <div id="song" className="scroll-mt-24">
          <Song />
        </div>
        <div id="candles" className="scroll-mt-24">
          <Candles />
        </div>
        <div id="letter" className="scroll-mt-24">
          <Letter />
        </div>
        <SiteFooter />
      </div>
    </main>
  )
}
