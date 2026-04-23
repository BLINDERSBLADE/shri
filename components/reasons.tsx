const reasons = [
  {
    title: "Your smile",
    body: "The kind of smile that make others feel as though they are dreaming, a beauty truly out of this world.",
  },
  {
    title: "Those Eyes",
    body: "The way they look at me, the beauty the posses, I lost myself in them everytime I see them, whether it be the first day I saw you or now.",
  },
  {
    title: "Those curls",
    body: "The craziest, preetiest things just like you, I can spend my life being tangled in them.",
  },
  {
    title: "Bold in act, Shy in Heart",
    body: "A quite contradiction I adore, you walkin with fearless charm yet somewhere between that glance and smile, that softness slips through, making it the part I adore about you the most",
  },
  {
    title: "My cute baby",
    body: "You act all tough for the world but becomes the cutest with me. That side is my favourite place.",
  },
  {
    title: "Your spirit",
    body: "The way you hold your ground in every situation of life — fearless, focused, and completely unstoppable.",
  },
  {
    title: "My short baddie",
    body: "Small in height but somehow take up my whole heart. Cute enough to make me smile for no reason, dangerous enough to keep me obsessed You are my — prettiest little chaos, the sweetest trouble and the one I'd choose every single time.",
  },
  {
    title: "My Manaivi",
    body: "Yes not officially yet I know — But the only one to hold that tittle in my life.",
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
