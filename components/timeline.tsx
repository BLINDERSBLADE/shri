const milestones = [
  {
    date: "27th Dec",
    title: "The first hello",
    body: "From the day, I stand in gentle debt to snapchat, for their our first greetings pass between us.",
  },
  {
    date: "2th Feb",
    title: "A taste of those blessed lips",
    body: "Thy kiss, most sovereign and wanderous fair, did enthrall both heart and soul. A sweet enhancement from which, I would never wish release.",
  },
  {
    date: "8th Feb",
    title: "The day you and I became US",
    body: "The day we officially passed the you and I and became truly one, the way two wondering soul binds as one in quite eternity.",
  },
  {
    date: "Today",
    title: "Your Birthday",
    body: "I hold in debt to universe for it has given me eveything I had ever wish for all in one, in you.",
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
                className={`relative flex items-start gap-6 md:w-1/2 ${isLeft ? "md:self-start md:pr-12" : "md:self-end md:pl-12"
                  }`}
              >
                {/* dot */}
                <span
                  aria-hidden="true"
                  className={`relative z-10 mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose/60 bg-cream md:absolute md:top-2 md:mt-0 ${isLeft ? "md:-right-4" : "md:-left-4"
                    }`}
                >
                  <span className="h-2 w-2 rounded-full bg-rose shadow-[0_0_14px_2px_oklch(0.65_0.15_15_/_0.55)]" />
                </span>

                <div
                  className={`flex-1 rounded-2xl border border-rose/20 bg-card/70 p-6 backdrop-blur-sm md:p-8 ${isLeft ? "md:text-right" : "md:text-left"
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
