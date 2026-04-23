import Image from "next/image"

const memories = [
  {
    src: "/memories/memory-1.jpg",
    caption: "A quiet kind of beauty that stays with you",
    note: "Being in your pressence is more than I can ask to universe, as it has bestowed me with you in my life.",
  },
  {
    src: "/memories/memory-2.jpg",
    caption: "That smile, the kind you don't recover from",
    note: "Your smile is like a home I had no idea I wass missing.",
  },
  {
    src: "/memories/memory-3.jpg",
    caption: "The magic in your pressence",
    note: "Every day, every minute, every second I spent with you, would be the last 7 min of me.",
  },
  {
    src: "/memories/memory-4.jpg",
    caption: "Effortlessly stunning, dangerously stunning ",
    note: "A kind of beauty that lingers in your thoughts, the grace you can not ignore.",
  },
]

export function Memories() {
  return (
    <section className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
            05 &mdash; A Few Memories
          </span>
          <h2 className="max-w-2xl font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
            Some of my favorite <em className="text-gradient-rose">pages</em>.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 text-pretty">
            A handful of moments I keep on the shelf of my heart &mdash; small,
            soft, and always in reach.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {memories.map((m, i) => (
            <figure
              key={m.src}
              className="group relative flex flex-col gap-4 rounded-2xl border border-rose/20 bg-card/70 p-4 shadow-[0_1px_0_0_oklch(0.8_0.06_15_/_0.25)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-rose/60 hover:shadow-[0_10px_40px_-20px_oklch(0.6_0.15_15_/_0.4)]"
              style={{
                transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
              }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src={m.src}
                  alt={m.caption}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-deep/25 via-transparent to-transparent"
                />
              </div>
              <figcaption className="flex flex-col gap-1 px-1">
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-rose/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-medium leading-tight text-ink">
                  {m.caption}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed text-ink/70"
                  dangerouslySetInnerHTML={{ __html: m.note }}
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
