"use client"

import { useMemo } from "react"

type Flower = {
  left: string
  size: number
  delay: string
  duration: string
  swayDuration: string
  opacity: number
  rotateStart: number
  variant: 0 | 1 | 2
  hue: number
}

function FlowerSvg({ variant, hue }: { variant: 0 | 1 | 2; hue: number }) {
  // All flowers share the rose/blush palette; hue shifts slightly between them
  const petal = `oklch(0.82 0.10 ${hue})`
  const petalDeep = `oklch(0.72 0.13 ${hue})`
  const center = `oklch(0.88 0.09 75)` // soft gold center

  if (variant === 0) {
    // 5-petal cherry blossom
    return (
      <svg viewBox="-16 -16 32 32" width="100%" height="100%" aria-hidden="true">
        <g>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-8"
              rx="4.5"
              ry="7"
              fill={petal}
              transform={`rotate(${a})`}
              opacity="0.95"
            />
          ))}
          <circle cx="0" cy="0" r="2.2" fill={center} />
        </g>
      </svg>
    )
  }

  if (variant === 1) {
    // 6-petal rose-ish bloom
    return (
      <svg viewBox="-16 -16 32 32" width="100%" height="100%" aria-hidden="true">
        <g>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-7"
              rx="3.5"
              ry="6.5"
              fill={petalDeep}
              transform={`rotate(${a})`}
              opacity="0.9"
            />
          ))}
          <circle cx="0" cy="0" r="3" fill={petal} />
          <circle cx="0" cy="0" r="1.4" fill={center} />
        </g>
      </svg>
    )
  }

  // Single petal drifting
  return (
    <svg viewBox="-10 -14 20 28" width="100%" height="100%" aria-hidden="true">
      <path
        d="M0 -12 C 6 -8, 7 4, 0 12 C -7 4, -6 -8, 0 -12 Z"
        fill={petal}
        opacity="0.9"
      />
    </svg>
  )
}

/**
 * Global falling flowers background. Position fixed so petals drift
 * across the full page, not just one section.
 */
export function FallingFlowers({ count = 28 }: { count?: number }) {
  const flowers = useMemo<Flower[]>(() => {
    const seed = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280
      return x - Math.floor(x)
    }
    return Array.from({ length: count }, (_, i) => {
      const v = Math.floor(seed(i * 3) * 3) as 0 | 1 | 2
      return {
        left: `${seed(i * 2) * 100}%`,
        size: 14 + seed(i * 5) * 22, // 14px – 36px
        delay: `-${seed(i * 7) * 18}s`, // negative so they start mid-fall
        duration: `${14 + seed(i * 11) * 14}s`, // 14s – 28s
        swayDuration: `${4 + seed(i * 13) * 4}s`,
        opacity: 0.35 + seed(i * 17) * 0.45,
        rotateStart: Math.floor(seed(i * 19) * 360),
        variant: v,
        hue: seed(i * 23) > 0.5 ? 15 : 20, // soft rose tones
      }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {flowers.map((f, i) => (
        <span
          key={i}
          className="flower-fall absolute -top-16"
          style={{
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: f.delay,
            animationDuration: f.duration,
            opacity: f.opacity,
            // custom props used by the sway animation on the inner span
            ["--sway-duration" as string]: f.swayDuration,
            ["--rotate-start" as string]: `${f.rotateStart}deg`,
          }}
        >
          <span className="flower-sway block h-full w-full">
            <FlowerSvg variant={f.variant} hue={f.hue} />
          </span>
        </span>
      ))}
    </div>
  )
}
