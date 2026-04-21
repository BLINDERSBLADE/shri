"use client"

import { useRef, useState } from "react"
import confetti from "canvas-confetti"

const CANDLE_COUNT = 5

export function Candles() {
  const [lit, setLit] = useState<boolean[]>(() =>
    Array.from({ length: CANDLE_COUNT }, () => true),
  )
  const [blowCount, setBlowCount] = useState(0)
  const btnRef = useRef<HTMLButtonElement>(null)

  const PINK_PALETTE = [
    "#f9c9d4", // blush
    "#f4a8bd", // rose
    "#ec7ea1", // deep rose
    "#ffd9e3", // cream-pink
    "#ffffff", // cream white
    "#e8a5b8",
  ]

  const fireConfetti = () => {
    const btn = btnRef.current
    // Compute button center as origin (fraction of viewport)
    let originX = 0.5
    let originY = 0.65
    if (btn) {
      const rect = btn.getBoundingClientRect()
      originX = (rect.left + rect.width / 2) / window.innerWidth
      originY = (rect.top + rect.height / 2) / window.innerHeight
    }

    // Main pink burst
    confetti({
      particleCount: 110,
      spread: 80,
      startVelocity: 55,
      origin: { x: originX, y: originY },
      colors: PINK_PALETTE,
      scalar: 1.1,
      ticks: 220,
    })

    // Two angled bursts for a richer feel
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      startVelocity: 50,
      origin: { x: Math.max(0, originX - 0.15), y: originY },
      colors: PINK_PALETTE,
    })
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      startVelocity: 50,
      origin: { x: Math.min(1, originX + 0.15), y: originY },
      colors: PINK_PALETTE,
    })

    // Soft falling heart-like drift
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 120,
        startVelocity: 25,
        gravity: 0.6,
        scalar: 0.9,
        origin: { x: originX, y: originY - 0.05 },
        colors: PINK_PALETTE,
        shapes: ["circle"],
      })
    }, 180)
  }

  const handleBlow = () => {
    // Temporarily flicker out the candles, then re-light so the user can blow again
    setLit(Array.from({ length: CANDLE_COUNT }, () => false))
    setBlowCount((c) => c + 1)
    fireConfetti()

    window.setTimeout(() => {
      setLit(Array.from({ length: CANDLE_COUNT }, () => true))
    }, 1400)
  }

  return (
    <section className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
            07 &mdash; Make a Wish
          </span>
          <h2 className="max-w-2xl font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
            Blow out the <em className="text-gradient-rose">candles</em>, Mi Cielo.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty">
            Close your eyes, count to three, and wish for something lovely.
            {"(You can wish as many times as you want \u2014 I'm not keeping score.)"}
          </p>
        </div>

        {/* Cake */}
        <div className="relative flex w-full max-w-md flex-col items-center">
          {/* Candles */}
          <div className="relative z-10 flex items-end gap-4">
            {lit.map((isLit, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Flame */}
                <div className="relative h-7 w-3">
                  {isLit ? (
                    <span
                      className="candle-flame absolute bottom-0 left-1/2 h-7 w-3 -translate-x-1/2 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 70%, oklch(0.95 0.12 75) 0%, oklch(0.82 0.18 45) 55%, oklch(0.65 0.18 25 / 0) 85%)",
                        filter: "blur(0.4px)",
                        animationDelay: `${i * 0.13}s`,
                      }}
                    />
                  ) : (
                    <span
                      className="absolute bottom-0 left-1/2 h-3 w-0.5 -translate-x-1/2 opacity-60"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.5 0.04 40), transparent)",
                      }}
                    />
                  )}
                </div>
                {/* Wick */}
                <div className="h-1 w-[2px] bg-ink/70" />
                {/* Candle body */}
                <div
                  className="h-16 w-3 rounded-t-sm"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(to bottom, oklch(0.88 0.08 15), oklch(0.78 0.12 15))"
                        : "linear-gradient(to bottom, oklch(0.94 0.04 70), oklch(0.86 0.06 70))",
                    boxShadow:
                      "inset -2px 0 0 oklch(0.7 0.1 15 / 0.25), inset 2px 0 0 oklch(1 0 0 / 0.35)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top tier */}
          <div
            className="relative z-[5] -mt-[2px] h-20 w-64 rounded-t-md"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.96 0.03 20), oklch(0.89 0.06 15))",
              boxShadow:
                "inset 0 -6px 0 oklch(0.82 0.10 15 / 0.55), inset 0 2px 0 oklch(1 0 0 / 0.6)",
            }}
          >
            {/* Frosting drip */}
            <svg
              viewBox="0 0 256 18"
              className="absolute -bottom-[14px] left-0 w-full"
              aria-hidden="true"
            >
              <path
                d="M0 0 Q 12 18 24 4 Q 36 18 48 2 Q 60 18 72 4 Q 84 18 96 2 Q 108 18 120 4 Q 132 18 144 2 Q 156 18 168 4 Q 180 18 192 2 Q 204 18 216 4 Q 228 18 240 2 Q 250 16 256 0 L 256 0 L 0 0 Z"
                fill="oklch(0.96 0.03 20)"
              />
            </svg>
            {/* sprinkles */}
            <div className="absolute inset-0 flex items-center justify-around px-6">
              {[15, 20, 10, 25, 18, 12].map((h, i) => (
                <span
                  key={i}
                  className="h-2 w-[3px] rounded-full"
                  style={{ background: `oklch(0.7 0.15 ${h})` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom tier */}
          <div
            className="relative z-0 h-24 w-80 rounded-md"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.92 0.05 15), oklch(0.82 0.09 15))",
              boxShadow:
                "inset 0 -8px 0 oklch(0.72 0.12 15 / 0.5), inset 0 2px 0 oklch(1 0 0 / 0.55), 0 20px 40px -20px oklch(0.55 0.15 15 / 0.35)",
            }}
          >
            <div className="absolute inset-x-6 top-3 flex items-center justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="oklch(0.75 0.14 15)"
                  aria-hidden="true"
                >
                  <path d="M7 0 C 9 3, 11 4, 14 7 C 11 10, 9 11, 7 14 C 5 11, 3 10, 0 7 C 3 4, 5 3, 7 0 Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Plate */}
          <div
            className="mt-1 h-2 w-96 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.88 0.02 60), oklch(0.78 0.04 60))",
            }}
          />
        </div>

        <button
          ref={btnRef}
          onClick={handleBlow}
          className="group relative inline-flex items-center gap-3 rounded-full border border-rose/40 bg-rose-deep px-8 py-4 font-serif text-base tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose hover:shadow-[0_12px_30px_-12px_oklch(0.55_0.18_15_/_0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Blow out the candles"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform duration-300 group-hover:-rotate-12"
            aria-hidden="true"
          >
            <path
              d="M2 9 Q 6 3, 10 9 Q 14 15, 16 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span>Blow out the candles</span>
        </button>

        <p
          className="min-h-6 font-serif text-sm italic text-rose/80 transition-opacity duration-500"
          aria-live="polite"
        >
          {blowCount === 0
            ? "Every wish on this cake is already yours."
            : blowCount === 1
              ? "One wish made. Keep going if you'd like."
              : `${blowCount} wishes made, and somehow still not enough for you.`}
        </p>
      </div>
    </section>
  )
}
