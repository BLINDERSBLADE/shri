import Image from "next/image"

const memories = [
  {
    src: "/memories/memory-1.jpg",
    caption: "The little moments",
    note: "The quiet kind that become the loudest ones in memory.",
  },
  {
    src: "/memories/memory-2.jpg",
    caption: "Warm afternoons",
    note: "Tea steeping, pages turning, you humming without realizing.",
  },
  {
    src: "/memories/memory-3.jpg",
    caption: "Our song",
    note: "The one that plays in my head even when nothing is playing.",
  },
  {
    src: "/memories/memory-4.jpg",
    caption: "Every petal, every page",
    note: "A small garden of everything we&rsquo;ve already collected together.",
  },
  {
    src: "/memories/memory-5.jpg",
    caption: "Rain on glass",
    note: "Watching the world blur while you stay crystal clear.",
  },
  {
    src: "/memories/memory-6.jpg",
    caption: "Stories in paper",
    note: "Between the pages, our names are written in every margin.",
  },
  {
    src: "/memories/memory-7.jpg",
    caption: "Words unsaid",
    note: "The letters I wrote but never quite sent, yet you understood.",
  },
  {
    src: "/memories/memory-8.jpg",
    caption: "Traces of you",
    note: "Small details that remind me you&rsquo;re always there.",
  },
  {
    src: "/memories/memory-9.jpg",
    caption: "Golden mornings",
    note: "When time slows down and everything feels like forever.",
  },
  {
    src: "/memories/memory-10.jpg",
    caption: "Fragmented light",
    note: "Every reflection holds a piece of something beautiful we created.",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
