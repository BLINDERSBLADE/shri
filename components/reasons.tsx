'use client'

import { useState } from 'react'

const reasons = [
  {
    title: "Your smile",
    body: "The kind of smile that make others feel as though they are dreaming, a beauty truly out of this world.",
    emoji: "😊"
  },
  {
    title: "Those Eyes",
    body: "The way they look at me, the beauty the posses, I lost myself in them everytime I see them, whether it be the first day I saw you or now.",
    emoji: "👀"
  },
  {
    title: "Those curls",
    body: "The craziest, preetiest things just like you, I can spend my life being tangled in them.",
    emoji: "💇‍♀️"
  },
  {
    title: "Bold in act, Shy in Heart",
    body: "A quite contradiction I adore, you walkin with fearless charm yet somewhere between that glance and smile, that softness slips through, making it the part I adore about you the most",
    emoji: "🦁"
  },
  {
    title: "My cute baby",
    body: "You act all tough for the world but becomes the cutest with me. That side is my favourite place.",
    emoji: "👶"
  },
  {
    title: "Your spirit",
    body: "The way you hold your ground in every situation of life — fearless, focused, and completely unstoppable.",
    emoji: "✨"
  },
  {
    title: "My short baddie",
    body: "Small in height but somehow take up my whole heart. Cute enough to make me smile for no reason, dangerous enough to keep me obsessed You are my — prettiest little chaos, the sweetest trouble and the one I&rsquo;d choose every single time.",
    emoji: "💅"
  },
  {
    title: "My Manaivi",
    body: "Yes not officially yet I know — But the only one to hold that tittle in my life.",
    emoji: "💍"
  },
]

export function Reasons() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  const toggleFlip = (title: string) => {
    setFlipped(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <section className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
            02 &mdash; From the Heart
          </span>
          <h2 className="max-w-2xl font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
            Why I <em className="text-gradient-rose">love</em> you, Sri.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty">
            A small list for something that could never really fit into one.
            Consider this the beginning of a much longer love letter.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flip-card-container cursor-pointer"
              onClick={() => toggleFlip(r.title)}
            >
              <div className={`flip-card-inner ${flipped[r.title] ? 'flipped' : ''}`}>
                {/* Front */}
                <div className="flip-card-front rounded-2xl border-2 border-[#800020] bg-[#800020] p-6 flex flex-col items-center justify-center gap-4">
                  <span className="text-5xl">{r.emoji}</span>
                  <h3 className="font-serif text-2xl font-medium text-center text-white leading-tight">
                    {r.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="flip-card-back rounded-2xl border-2 border-[#800020] bg-[#800020] p-6 flex flex-col items-center justify-center">
                  <p className="font-cute italic text-sm leading-relaxed text-white text-center">
                    {r.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
