"use client"

import { useRef, useState, useEffect } from "react"

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function AudioPlayBox({
  src = "https://e2ltwnkig4ssgsps.private.blob.vercel-storage.com/networthrealty_6CTXUGeb.m4a?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfZTJMVFdOa0lHNHNTR1NwcyIsIm93bmVySWQiOiJ0ZWFtX0FoRnJxVGUxR1lmamo3WW9XcUtmaXJoSCIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgyMTkwNzU5OTMyLCJpYXQiOjE3ODIxNDc1NjAwODV9.oNVaQjfbxp9dfw538JzCd-fvDgPTc1jkRaa61_WTPWU&vercel-blob-signature=e8v80qAK1tFMF-8h82Hvk52D1dFZ1w5N9G4vFqmTDD8",
  title = "Real outbound AI call",
  artist = "Net Worth realty",
}) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrentTime(audio.currentTime)
    const onLoaded = () => setDuration(audio.duration)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", onTime)
    audio.addEventListener("loadedmetadata", onLoaded)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("timeupdate", onTime)
      audio.removeEventListener("loadedmetadata", onLoaded)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio) return
    const time = Number(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <section id="livedemo" className="py-20 px-6">
    <div>
      <h1 className="text-4xl font-bold text-white justify-center"> This Is What Your <span className="bg-gradient-to-r from-blue-500  to-cyan-500 bg-clip-text text-transparent font-bold">Leads Will Hear</span></h1>
      <p className="text-gray-200 pt-2 text-sm">Not a robocall. Not a script. A real conversation.</p>
              {/* Under line */}
    <div className="flex items-center justify-center">
          <div className="w-24 h-[2px] mt-6 mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
    </div> 
    <div className="flex items-center justify-center bg-neutral-950 p-0">
      <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-neutral-900/80 p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur">
        <audio ref={audioRef} src={src} preload="metadata" crossOrigin="anonymous" />

        {/* Cover / Visual */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-neutral-800">
            <span
              className={`h-3 w-3 rounded-full bg-cyan-400 transition-all ${
                isPlaying ? "animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]" : ""
              }`}
            />
          </div>
          <div className="min-w-0 text-left items-left">
            <h2 className="truncate text-lg font-semibold text-neutral-100">{title}</h2>
            <p className="truncate text-sm text-cyan-400/70">{artist}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-2">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Seek"
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            style={{
              background: `linear-gradient(to right, rgb(34 211 238) ${progress}%, rgb(64 64 64) ${progress}%)`,
            }}
          />
          <div className="mt-2 flex justify-between text-xs tabular-nums text-neutral-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between">
          {/* Play / Pause with glow */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-neutral-950 shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-95"
          >
            {isPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
              </svg>
            )}
          </button>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400/70"
              aria-hidden="true"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
              className="h-1.5 w-24 cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              style={{
                background: `linear-gradient(to right, rgb(34 211 238) ${volume * 100}%, rgb(64 64 64) ${volume * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
