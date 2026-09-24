import { useEffect, useState } from 'react'
import { TELEGRAM } from './CtaButtons.jsx'

const NAV = [
  ['#accueil', 'Accueil'],
  ['#marche', 'Comment ça marche'],
  ['#conditions', 'Tarifs'],
  ['#preuves', 'Résultats'],
  ['#faq', 'FAQ'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#accueil" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M10 6l6 6-6 6 1.5 1.5L19 12l-7.5-7.5L10 6zm-6 0l6 6-6 6L5.5 19 13 12 5.5 4.5 4 6z" />
            </svg>
          </span>
          <span className="brand-name">PRONOS&nbsp;<em>VIP</em></span>
          <span className="brand-live" title="Analyses publiées chaque jour">
            <span className="brand-live-dot" aria-hidden="true" />
            Live
          </span>
        </a>

        <nav
          id="menu"
          className={open ? 'nav nav--open' : 'nav'}
          aria-label="Navigation principale"
        >
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="nav-link" onClick={close}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Rejoindre le VIP
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>
      </div>
      {open && <div className="nav-scrim" aria-hidden="true" onClick={close} />}
    </header>
  )
}