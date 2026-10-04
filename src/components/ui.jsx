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

export function SectionHead({ num, eyebrow, title, sub, as: Tag = 'h2' }) {
  return (
    <div className="section-headline">
      {num && <span className="sec-num" aria-hidden="true">{num}</span>}
      <p className="eyebrow eyebrow--center">{eyebrow}</p>
      <Tag>{title}</Tag>
      {sub && <p className="sub">{sub}</p>}
    </div>
  )
}

export const fmt = (n) => String(n).padStart(2, '0')
