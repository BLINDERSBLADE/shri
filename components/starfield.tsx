"use client"

import { useMemo } from "react"

type Mote = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
  opacity: number
  hue: number
}

/**
 * A soft drifting dust / petal field. Kept named "Starfield" so existing
 * imports continue to work. Colors are warm rose + gold to match the
 * soft-rose & cream palette.
 */
export function Starfield({ count = 80 }: { count?: number }) {
  const motes = useMemo<Mote[]>(() => {
    // Deterministic pseudo-random seed so SSR matches client
    const seed = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280
      return x - Math.floor(x)
    }
    return Array.from({ length: count }, (_, i) => ({
      left: `${seed(i * 2) * 100}%`,
      top: `${seed(i * 2 + 1) * 100}%`,
      size: 2 + seed(i * 3) * 3.5,
      delay: `${seed(i * 5) * 6}s`,
      duration: `${4 + seed(i * 7) * 5}s`,
      opacity: 0.3 + seed(i * 11) * 0.45,
      hue: seed(i * 13) > 0.5 ? 15 : 65, // rose or gold
    }))
  }, [count])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m, i) => (
        <span
          key={i}
          className="absolute rounded-full twinkle"
          style={{
            left: m.left,
            top: m.top,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: m.delay,
            animationDuration: m.duration,
            opacity: m.opacity,
            background: `oklch(0.78 0.12 ${m.hue})`,
            boxShadow: `0 0 ${m.size * 4}px oklch(0.8 0.12 ${m.hue} / 0.55)`,
          }}
        />
      ))}
    </div>
  )
}
