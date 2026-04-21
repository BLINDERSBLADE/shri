"use client"

import { useEffect, useRef, useState } from "react"

const TRACK_SRC = "/audio/te-amo.mp3"

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function Song() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0..1
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [available, setAvailable] = useState<boolean | null>(null) // null = unknown
  const [volume, setVolume] = useState(0.85)

  // Check if the mp3 file exists (so we can show a friendly placeholder)
  useEffect(() => {
    let cancelled = false
    fetch(TRACK_SRC, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return
        setAvailable(res.ok)
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch {
      // Autoplay or decode failure
      setIsPlaying(false)
    }
  }

  const onTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio) return
    setCurrent(audio.currentTime)
    setProgress(audio.duration ? audio.currentTime / audio.duration : 0)
  }

  const onLoadedMetadata = () => {
    const audio = audioRef.current
    if (!audio) return
    setDuration(audio.duration || 0)
  }

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const p = Number(e.target.value) / 1000
    audio.currentTime = p * audio.duration
    setProgress(p)
  }

  return (
    <section
      id="song"
      aria-labelledby="song-heading"
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="font-serif text-sm uppercase tracking-[0.3em] text-primary/70">
          06 &mdash; Our Song
        </p>
        <h2
          id="song-heading"
          className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-6xl"
        >
          <em className="text-primary">&ldquo;Te Amo&rdquo;</em>
        </h2>
        <p className="mt-3 font-serif text-base italic text-foreground/70 md:text-lg">
          by Pritam &middot; sung by Ash King &amp; Sunidhi Chauhan
        </p>

        <div className="mt-12 w-full">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl border border-primary/15 bg-card/70 p-6 shadow-[0_20px_60px_-30px_rgba(190,90,110,0.4)] backdrop-blur sm:p-10 md:flex-row md:items-center md:text-left">
            {/* Spinning vinyl record */}
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className={`relative h-40 w-40 rounded-full shadow-[0_10px_30px_-10px_rgba(160,60,90,0.5)] sm:h-48 sm:w-48 ${
                  isPlaying ? "animate-[spin_6s_linear_infinite]" : ""
                }`}
                style={{
                  background:
                    "repeating-radial-gradient(circle at center, #1a0f13 0 2px, #2a1820 2px 4px), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 60%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-inner sm:h-20 sm:w-20">
                    <span className="font-serif text-xs uppercase tracking-[0.25em]">
                      Te Amo
                    </span>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex w-full flex-1 flex-col gap-4">
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary/60">
                  Now Playing
                </p>
                <p className="mt-1 font-serif text-2xl text-foreground">Te Amo</p>
                <p className="font-serif text-sm italic text-foreground/60">
                  Pritam &middot; for Mi Cielo
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  disabled={available === false}
                  aria-label={isPlaying ? "Pause song" : "Play song"}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                      <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" aria-hidden="true">
                      <path d="M7 5v14l12-7z" fill="currentColor" />
                    </svg>
                  )}
                </button>

                <div className="flex-1">
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={Math.round(progress * 1000)}
                    onChange={onSeek}
                    disabled={available === false || duration === 0}
                    aria-label="Seek"
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-primary/15 accent-primary [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                  />
                  <div className="mt-1 flex justify-between font-serif text-xs text-foreground/50">
                    <span>{formatTime(current)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground/50" aria-hidden="true">
                  <path
                    d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  aria-label="Volume"
                  className="h-1 w-28 cursor-pointer appearance-none rounded-full bg-primary/15 accent-primary [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                />
              </div>

              {available === false && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-left">
                  <p className="font-serif text-sm text-foreground/80">
                    <strong className="text-primary">Add your song file.</strong>{" "}
                    Drop your mp3 at{" "}
                    <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs text-primary">
                      public/audio/te-amo.mp3
                    </code>{" "}
                    and it will start playing from here.
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-pretty font-serif text-base italic leading-relaxed text-foreground/70 md:text-lg">
            &ldquo;Te amo&hellip;&rdquo; &mdash; every time this song plays, I think of you.
            Some songs belong to a moment; this one belongs to us.
          </p>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={TRACK_SRC}
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </section>
  )
}
