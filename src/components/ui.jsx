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
        <p
          className={`inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 ${
            center ? 'justify-center' : ''
          }`}
        >
          {num && (
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-brand-dark px-1.5 text-[10px] font-bold text-white">
              {num}
            </span>
          )}
          <span className="eyebrow">{eyebrow}</span>
        </p>
      )}
      <Tag className="mt-3 text-[1.65rem] font-black leading-[1.15] tracking-tight text-slate-900 text-balance sm:text-4xl">
        {title}
      </Tag>
      {sub && <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty sm:mt-4 sm:text-base">{sub}</p>}
    </div>
  )
}

export const fmt = (n) => String(n).padStart(2, '0')
