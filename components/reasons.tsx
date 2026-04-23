const reasons = [
  {
    title: "Your smile",
    body: "The one that arrives a second before you mean it to. It opens rooms, softens bad days, and has personally been responsible for a large percentage of my happiness.",
  },
  {
    title: "The way you dance",
    body: "When a good song plays and your shoulders decide before you do. Kitchen floors, car seats, doorways &mdash; you turn every inch of space into a small, private celebration.",
  },
  {
    title: "Your voice when you sing",
    body: "Quiet, un-self-conscious, usually half-humming. I would choose your voice over any playlist, any song, any silence.",
  },
  {
    title: "Your books",
    body: "The way you disappear into them. The way you emerge, a little changed, with something thoughtful to say. I love the world more, knowing you&rsquo;re reading it so carefully.",
  },
  {
    title: "The artist in you",
    body: "The tiny sketches, the colour you notice in everything, the way you turn ordinary moments into something worth framing. You see beauty first &mdash; and then you make more of it.",
  },
  {
    title: "Everything you cook",
    body: "The stirring, the tasting, the humming while you work. Food made by you tastes like being taken care of &mdash; and I will never stop being grateful at your table.",
  },
  {
    title: "Your softness",
    body: "The side of you most people never get to see. The fact that I do is something I will never take lightly &mdash; not for a single day.",
  },
  {
    title: "You, just as you are",
    body: "No edits. No conditions. The whole of you, exactly as the universe wrote you &mdash; that is the part I love the most.",
  },
]

export function Reasons() {
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className="group relative flex flex-col gap-3 rounded-2xl border border-rose/20 bg-card/70 p-6 shadow-[0_1px_0_0_oklch(0.8_0.06_15_/_0.25)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-rose/60 hover:bg-card/90 hover:shadow-[0_10px_40px_-20px_oklch(0.6_0.15_15_/_0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-rose/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="text-rose/60 transition-transform duration-500 group-hover:rotate-45 group-hover:text-rose"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 0 C 9 3, 11 4, 14 7 C 11 10, 9 11, 7 14 C 5 11, 3 10, 0 7 C 3 4, 5 3, 7 0 Z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium leading-tight text-ink">
                {r.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed text-ink/70"
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
