const reasons = [
  {
    title: "Your smile",
    body: "The kimd of smile that can make anyone feel that they are dreaming, a beauty completely out of this world.",
  },
  {
    title: "Your eyes",
    body: "Your eyes pull me in, blurr my thoughts and make me fall for you more everytime I look more.",
  },
  {
    title: "Those curls",
    body: "Those wild and beautiful curls so perfect in a way I can spend my whole life being tangled in them.",
  },
  {
    title: "Your spirit",
    body: "The way you carry yourself, strong enough to spread you charm over everyone.",
  },
  {
    title: "Bold in act, Shy at heart",
    body: "The contradiction I adore the most, you walk in with fearless charm, yet somewhere between a glance, and a smile, that softness slips through.",
  },
  {
    title: "My little baby",
    body: "Strong enough to carry the whole world by herself, yet so cute and clumsy with me, the part I adore the most.",
  },
  {
    title: "My Short Baddie",
    body: "Small in height yet somehow take my whole heart. Cute enough to make me smie for no reason, dangerous enough to keep me obsessed. You are the prettiest little chaos, the sweetest trouble, and the one I'd choose every single time.",
  },
  {
    title: "My dear Manaivi",
    body: "Yes yes Ik not yet officially, but you are the only person on this earth who can ever have this tittle.",
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
