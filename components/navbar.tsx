"use client"

import { useEffect, useState } from "react"

type NavItem = { id: string; label: string }

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Welcome" },
  { id: "about", label: "About Her" },
  { id: "reasons", label: "Why I Love You" },
  { id: "numbers", label: "In Numbers" },
  { id: "timeline", label: "Our Story" },
  { id: "memories", label: "Memories" },
  { id: "song", label: "Our Song" },
  { id: "candles", label: "Make a Wish" },
  { id: "letter", label: "A Letter" },
]

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most visible on screen
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActiveId(visible[0].target.id)
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" })
    history.replaceState(null, "", `#${id}`)
    setActiveId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 transition-all duration-300 sm:px-6 sm:pt-5 ${
        scrolled ? "pt-2 sm:pt-3" : ""
      }`}
    >
      <nav
        aria-label="Section navigation"
        className={`pointer-events-auto w-full max-w-5xl rounded-full border border-primary/15 bg-card/85 px-2 py-1.5 shadow-[0_8px_30px_-12px_rgba(190,90,110,0.35)] backdrop-blur-md transition-all duration-300 sm:px-3 ${
          scrolled ? "bg-card/95" : "bg-card/80"
        }`}
      >
        <ul
          className="flex items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 font-serif text-sm tracking-wide transition-all sm:px-4 sm:text-[0.9rem] ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
