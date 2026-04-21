export function SiteFooter() {
  return (
    <footer className="relative w-full px-6 pb-16 pt-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-rose/20 pt-10 text-center">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="currentColor" className="text-rose/80" aria-hidden="true">
          <path d="M7 0 C 9 3, 11 4, 14 7 C 11 10, 9 11, 7 14 C 5 11, 3 10, 0 7 C 3 4, 5 3, 7 0 Z" />
        </svg>
        <p className="font-serif text-sm italic text-ink/60">
          Written with love, only for Sri.
        </p>
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-ink/40">
          Mi Cielo &middot; Forever
        </p>
      </div>
    </footer>
  )
}
