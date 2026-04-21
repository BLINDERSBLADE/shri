const milestones = [
  {
    date: "The Beginning",
    title: "The first hello",
    body: "The kind of moment you only recognise later as a beginning. Small, quiet, and already mattering more than either of us realised.",
  },
  {
    date: "Somewhere After",
    title: "The night it became us",
    body: "When the conversation stopped feeling like a conversation and started feeling like a home I didn&rsquo;t know I&rsquo;d been looking for.",
  },
  {
    date: "Every Day Since",
    title: "The soft middle",
    body: "Small texts, long calls, kitchens with music playing, books shared with folded corners. The ordinary that turned out to be everything.",
  },
  {
    date: "Today",
    title: "Your Birthday",
    body: "The universe made you exactly once, and on this day &mdash; and I will be grateful for the timing for the rest of my life.",
  },
  {
    date: "Forever",
    title: "The chapters we haven't written",
    body: "Every year ahead, every version of you I haven&rsquo;t met yet, every quiet evening still waiting for us. All of it, with you.",
  },
]

export function Timeline() {
  return (
    <section className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
            04 &mdash; The Path
          </span>
          <h2 className="max-w-2xl font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
            The <em className="text-gradient-rose">story</em> of us.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty">
            Not a straight line &mdash; more like petals, falling in the right order.
          </p>
        </div>

        <ol className="relative mx-auto flex flex-col gap-10 md:gap-14">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-rose/40 to-transparent md:left-1/2 md:-translate-x-px"
          />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            return (
              <li
                key={m.title}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  isLeft ? "md:self-start md:pr-12" : "md:self-end md:pl-12"
                }`}
              >
                {/* dot */}
                <span
                  aria-hidden="true"
                  className={`relative z-10 mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose/60 bg-cream md:absolute md:top-2 md:mt-0 ${
                    isLeft ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-rose shadow-[0_0_14px_2px_oklch(0.65_0.15_15_/_0.55)]" />
                </span>

                <div
                  className={`flex-1 rounded-2xl border border-rose/20 bg-card/70 p-6 backdrop-blur-sm md:p-8 ${
                    isLeft ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="font-serif text-xs uppercase tracking-[0.3em] text-rose/80">
                    {m.date}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-light leading-tight text-ink md:text-4xl">
                    {m.title}
                  </h3>
                  <p
                    className="mt-3 font-sans text-sm leading-relaxed text-ink/70 md:text-base"
                    dangerouslySetInnerHTML={{ __html: m.body }}
                  />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
