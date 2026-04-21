import { Starfield } from "./starfield"

export function Letter() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-28 md:py-36">
      <Starfield count={50} />

      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.8 0.1 15 / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
          08 &mdash; A Wish, For You
        </span>

        <h2 className="font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-7xl">
          Happy Birthday,{" "}
          <em className="shimmer not-italic">Sri</em>
        </h2>

        <div className="mt-2 flex items-center gap-4">
          <span className="h-px w-12 bg-rose/50" />
          <svg width="16" height="16" viewBox="0 0 14 14" fill="currentColor" className="text-rose">
            <path d="M7 0 C 9 3, 11 4, 14 7 C 11 10, 9 11, 7 14 C 5 11, 3 10, 0 7 C 3 4, 5 3, 7 0 Z" />
          </svg>
          <span className="h-px w-12 bg-rose/50" />
        </div>

        <div className="mt-4 space-y-6 font-serif text-lg leading-relaxed text-ink/85 text-pretty md:text-xl">
          <p>
            Mi Cielo &mdash; my sky, my soft gravity, the place my eyes go when
            I forget where I was looking. Today the universe remembers the day
            it made you, and honestly, I think the universe is a little proud
            of itself.
          </p>
          <p>
            May this year be gentle with you in all the places the world has
            been loud. May your kitchen always smell of something good, may
            your bookshelf keep getting heavier, may your sketchbooks run out
            of blank pages faster than you can buy them. May you hum a little
            more, dance a lot more, and sing whenever the song asks you to.
          </p>
          <p>
            May every dream you&rsquo;re quietly keeping to yourself come
            looking for you first. May you laugh the kind of laugh that makes
            strangers smile. And may you always, always know &mdash; without
            ever having to ask &mdash; how completely, how stupidly, how
            entirely loved you are.
          </p>
          <p className="font-serif text-2xl italic text-rose-deep md:text-3xl">
            You are, and will always be, my favourite sky.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="font-serif text-xs uppercase tracking-[0.3em] text-ink/50">
            With all my heart
          </span>
          <span className="font-serif text-2xl italic text-ink/80">Yours &mdash; always</span>
        </div>
      </div>
    </section>
  )
}
