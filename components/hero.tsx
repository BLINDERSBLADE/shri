import { Starfield } from "./starfield"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24">
      <Starfield count={90} />

      {/* Soft rose glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.12 15 / 0.35) 0%, oklch(0.85 0.08 60 / 0.25) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center fade-up">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-rose/50" />
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose-deep">
            A Celebration of You
          </span>
          <span className="h-px w-10 bg-rose/50" />
        </div>

        <p className="font-serif text-xl italic text-ink/70 md:text-2xl">
          Happy Birthday, My Love
        </p>

        <h1 className="font-serif text-7xl font-light leading-none tracking-tight text-balance md:text-9xl">
          <span className="shimmer">Sri</span>
        </h1>

        <div className="flex items-center gap-4">
          <svg width="24" height="12" viewBox="0 0 24 12" className="text-rose/70" fill="none">
            <path d="M0 6 L10 6 M14 6 L24 6" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
          </svg>
          <p className="font-serif text-2xl italic text-rose md:text-3xl">
            &ldquo;Mi Cielo&rdquo;
          </p>
          <svg width="24" height="12" viewBox="0 0 24 12" className="text-rose/70" fill="none">
            <path d="M0 6 L10 6 M14 6 L24 6" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
          </svg>
        </div>

        <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty md:text-lg">
          My sky, my soft morning, my every quiet wish before sleep. Wherever
          I look up, there you are &mdash; and somehow the whole world turns
          gentle again.
        </p>

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="h-12 w-px bg-gradient-to-b from-rose/60 to-transparent" />
          <span className="font-serif text-xs uppercase tracking-[0.3em] text-ink/50">
            scroll to begin
          </span>
        </div>
      </div>
    </section>
  )
}
