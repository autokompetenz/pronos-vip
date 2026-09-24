import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({ slides, label, auto = false }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(Math.max(0, slides.length - 1))
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const stepWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return null
    const card = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 12
    return card ? card.offsetWidth + gap : track.clientWidth
  }, [])

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const step = stepWidth()
    if (!step) return
    const perView = Math.max(1, Math.floor((track.clientWidth + 12) / step))
    setMaxIndex(Math.max(0, slides.length - perView))
  }, [stepWidth, slides.length])

  const scrollToIndex = useCallback(
    (i) => {
      const track = trackRef.current
      const step = stepWidth()
      if (!track || !step) return
      track.scrollTo({ left: i * step, behavior: reduced ? 'auto' : 'smooth' })
    },
    [reduced, stepWidth]
  )

  const onScroll = useCallback(() => {
    const track = trackRef.current
    const step = stepWidth()
    if (!track || !step) return
    const i = Math.round(track.scrollLeft / step)
    setIndex(Math.max(0, Math.min(maxIndex, i)))
  }, [maxIndex, stepWidth])

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
    if (!auto || paused || reduced || maxIndex === 0) return undefined
    const timer = setInterval(() => {
      setIndex((i) => {
        const next = i >= maxIndex ? 0 : i + 1
        scrollToIndex(next)
        return next
      })
    }, 3600)
    return () => clearInterval(timer)
  }, [auto, paused, reduced, maxIndex, scrollToIndex])

  const go = (i) => {
    setIndex(i)
    scrollToIndex(i)
  }

  const pause = () => setPaused(true)
  const resume = () => setPaused(false)

  return (
    <div
      className="carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div className="carousel-viewport">
        <button
          className="carousel-btn carousel-btn--prev"
          type="button"
          aria-label={`${label} — précédent`}
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
          aria-label={label}
        >
          {slides}
        </div>

        <button
          className="carousel-btn carousel-btn--next"
          type="button"
          aria-label={`${label} — suivant`}
          onClick={() => go(Math.min(maxIndex, index + 1))}
        >
          →
        </button>
      </div>

      <div className="carousel-dots" role="group" aria-label={label}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={i === index ? 'carousel-dot carousel-dot--active' : 'carousel-dot'}
            type="button"
            aria-label={`Aller au contenu ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  )
}