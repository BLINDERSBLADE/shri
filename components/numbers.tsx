"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  value: string
  label: string
  isInfinity?: boolean
  animate?: number
}

const stats: Stat[] = [
  { value: "421", label: "The days you have been mine", animate: 421 },
  { value: "∞", label: "How much I love you", isInfinity: true },
  { value: "1000+", label: "Screenshot I have of you being cute" },
  { value: "∞", label: "Number of times I'd still choose you", isInfinity: true },
  { value: "1000+", label: "Times you have crossed my mind", animate: 1000 },
]

function useCountUp(target: number, duration = 1800, start: boolean) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return n
}

function StatCard({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const animated = useCountUp(stat.animate ?? 0, 1600 + index * 120, inView)
  const display = stat.isInfinity
    ? "∞"
    : stat.animate !== undefined
      ? stat.value.includes("%")
        ? `${animated}%`
        : `${animated}`
      : stat.value

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose/20 bg-card/70 px-6 py-10 text-center backdrop-blur-sm">
      <span className="font-serif text-6xl font-light leading-none text-gradient-rose md:text-7xl">
        {display}
      </span>
      <span className="max-w-[16ch] font-sans text-xs uppercase tracking-[0.25em] text-ink/60">
        {stat.label}
      </span>
    </div>
  )
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
            03 &mdash; By the Numbers
          </span>
          <h2 className="max-w-2xl font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
            You, in <em className="text-gradient-rose">numbers</em>.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty">
            A few things that are immeasurable &mdash; and a few that are, but only
            barely.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
