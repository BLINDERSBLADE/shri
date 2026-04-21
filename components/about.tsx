export function About() {
  return (
    <section className="relative w-full px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-5 md:gap-20">
        <div className="md:col-span-2">
          <div className="sticky top-24 flex flex-col gap-6">
            <span className="font-serif text-sm uppercase tracking-[0.35em] text-rose">
              01 &mdash; The One &amp; Only
            </span>
            <h2 className="font-serif text-5xl font-light leading-[1.05] text-balance text-ink md:text-6xl">
              A soul the world <em className="text-gradient-rose">softens</em> around.
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <span className="h-px w-16 bg-rose/50" />
              <span className="font-serif text-xs uppercase tracking-[0.3em] text-ink/60">
                Mi Cielo
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-3">
          <p className="font-serif text-2xl font-light leading-relaxed text-ink text-pretty md:text-3xl">
            Sri is the kind of person the room quietly rearranges itself around.
            Calm where it matters, brave when it counts, and warm in a way that
            makes strangers feel remembered.
          </p>
          <p className="font-sans text-base leading-relaxed text-ink/75 md:text-lg">
            She carries a softness that never asks for attention &mdash; and yet,
            attention finds her anyway. There is something in the way she listens,
            the way she hums under her breath, the way she can read a novel in
            an afternoon and still notice the sunlight moving across the floor.
          </p>
          <p className="font-sans text-base leading-relaxed text-ink/75 md:text-lg">
            She sings a little while she cooks. She dances, without deciding to,
            the second a good song plays. She sees beauty the rest of us miss,
            and she makes ordinary afternoons feel like small, private holidays.
            She is, quite simply, my favourite thing about being alive.
          </p>

          <blockquote className="mt-4 border-l-2 border-rose/60 pl-6 font-serif text-xl italic text-rose-deep md:text-2xl">
            &ldquo;Of all the skies, she is the one I would have chosen &mdash;
            even if no one told me she was mine.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
