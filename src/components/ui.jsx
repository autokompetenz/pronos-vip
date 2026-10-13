import { useEffect, useRef } from 'react'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('reveal--in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--in')
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className ? `reveal ${className}` : 'reveal'}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ num, eyebrow, title, sub, as: Tag = 'h2', center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className={`eyebrow flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
          {num && (
            <span className="inline-flex h-6 items-center rounded-full bg-blue-50 px-2 text-[11px] font-bold text-brand">
              {num}
            </span>
          )}
          {eyebrow}
        </p>
      )}
      <Tag className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </Tag>
      {sub && <p className="mt-4 text-base leading-relaxed text-slate-600">{sub}</p>}
    </div>
  )
}

export const fmt = (n) => String(n).padStart(2, '0')
