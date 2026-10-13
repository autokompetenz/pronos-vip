import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TELEGRAM } from './CtaButtons.jsx'

const NAV = [
  ['/', 'Accueil'],
  ['/gestion-de-compte', 'Gestion de compte'],
  ['/', 'Compte russe'],
  ['/gestion-de-compte#marche', 'Comment ça marche'],
  ['/gestion-de-compte#conditions', 'Tarifs'],
  ['/gestion-de-compte#preuves', 'Résultats'],
  ['/gestion-de-compte#faq', 'FAQ'],
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
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" onClick={close} className="flex items-center gap-2.5" aria-label="COMPTE 1XBET RUSSE — Accueil">
          <img
            src="/images/logo-vip.svg"
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 rounded-xl shadow-sm"
          />
          <span className="text-base font-black tracking-tight text-slate-900 sm:text-lg">
            COMPTE <span className="text-brand">1XBET RUSSE</span>
          </span>
          <span className="ml-1 hidden items-center gap-1.5 rounded-full bg-success-light px-2 py-0.5 text-[11px] font-bold text-success-text sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Live
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          {NAV.map(([href, label]) => (
            <Link
              key={label}
              to={href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
          <a
            className="btn btn--primary ml-2 px-4 py-2"
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoindre le VIP
          </a>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 rounded bg-slate-700" />
          <span className="block h-0.5 w-5 rounded bg-slate-700" />
          <span className="block h-0.5 w-5 rounded bg-slate-700" />
        </button>
      </div>

      {open && (
        <nav id="menu" className="border-t border-slate-100 bg-white lg:hidden" aria-label="Navigation mobile">
          <div className="container-x flex flex-col py-3">
            {NAV.map(([href, label]) => (
              <Link
                key={label}
                to={href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
            <a
              className="btn btn--primary mt-2"
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Rejoindre le VIP
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
