import { useCallback, useEffect, useRef, useState } from 'react'

const PROOFS = [
  ['/images/preuve-1.jpg', '482', '1024'],
  ['/images/preuve-2.jpg', '150', '150'],
  ['/images/preuve-3.jpg', '225', '225'],
  ['/images/preuve-4.webp', '1024', '700'],
]

export default function ProofsCarousel() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(PROOFS.length - 1)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.carousel-img')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 14
    const step = card ? card.offsetWidth + gap : track.clientWidth
    const perView = Math.max(1, Math.floor((track.clientWidth + gap) / step))
    setMaxIndex(Math.max(0, PROOFS.length - perView))
    return { step, perView }
  }, [])

  const scrollToIndex = useCallback(
    (i) => {
      const track = trackRef.current
      if (!track) return
      const card = track.querySelector('.carousel-img')
      const gap = parseFloat(getComputedStyle(track).columnGap) || 14
      const step = card ? card.offsetWidth + gap : track.clientWidth
      track.scrollTo({ left: i * step, behavior: reduced ? 'auto' : 'smooth' })
    },
    [reduced]
  )

  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.carousel-img')
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 14
    const step = card.offsetWidth + gap
    const i = Math.round(track.scrollLeft / step)
    setIndex(Math.max(0, Math.min(maxIndex, i)))
  }, [maxIndex])

  useEffect(() => {
    measure()
    const onResize = () => {
      trackRef.current?.scrollTo({ left: 0 })
      setIndex(0)
      measure()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [measure])

  useEffect(() => {
    if (paused || reduced || maxIndex === 0) return undefined
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i >= maxIndex ? 0 : i + 1
        scrollToIndex(next)
        return next
      })
    }, 3600)
    return () => clearInterval(id)
  }, [paused, reduced, maxIndex, scrollToIndex])

  const go = (i) => {
    setIndex(i)
    scrollToIndex(i)
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <button
        className="carousel-btn carousel-btn--prev"
        type="button"
        aria-label="Preuve précédente"
        onClick={() => go(Math.max(0, index - 1))}
      >
        ←
      </button>

      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-roledescription="carrousel"
        aria-label="Preuves de gains de la gestion de compte 1xBet"
      >
        {PROOFS.map(([src, w, h]) => (
          <img
            key={src}
            className="carousel-img"
            src={src}
            alt="gestion de compte 1xbet — preuve de gains"
            width={w}
            height={h}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>

      <button
        className="carousel-btn carousel-btn--next"
        type="button"
        aria-label="Preuve suivante"
        onClick={() => go(Math.min(maxIndex, index + 1))}
      >
        →
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Preuves">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={i === index ? 'carousel-dot carousel-dot--active' : 'carousel-dot'}
            type="button"
            aria-label={`Aller à la preuve ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  )
}