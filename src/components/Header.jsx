import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TELEGRAM } from './CtaButtons.jsx'

const NAV = [
  { href: '/', label: 'Compte russe' },
  { href: '/accueil', label: 'Présentation' },
  { href: '/gestion-de-compte', label: 'Gestion de compte' },
  { href: '/gestion-de-compte#marche', label: 'Comment ça marche' },
  { href: '/gestion-de-compte#conditions', label: 'Tarifs' },
  { href: '/gestion-de-compte#preuves', label: 'Résultats', desktop: false },
  { href: '/gestion-de-compte#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  const isActive = (href) => {
    const [path, targetHash] = href.split('#')
    if (targetHash) return pathname === path && hash === `#${targetHash}`
    return pathname === path && !hash
  }

  return (
    <header className="relative sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-3 py-3">
        <Link
          to="/"
          onClick={close}
          className="flex min-w-0 items-center gap-2"
          aria-label="COMPTE 1XBET RUSSE — Accueil"
        >
          <img
            src="/images/logo-vip.svg"
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 shrink-0 rounded-xl shadow-sm"
          />
          <span className="truncate text-[13px] font-black tracking-tight text-slate-900 min-[380px]:text-sm sm:text-base">
            COMPTE <span className="text-brand-dark">1XBET RUSSE</span>
          </span>
          <span className="ml-1 hidden items-center gap-1.5 rounded-full bg-success-light px-2 py-0.5 text-[11px] font-bold text-success-text xl:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Live
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          {NAV.filter((item) => item.desktop !== false).map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-brand-light text-brand-deep'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            className="btn btn--primary ml-2 min-h-0 px-4 py-2"
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoindre le VIP
          </a>
        </nav>

        <button
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="menu"
          className="menu-in absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-100 bg-white shadow-xl lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={close}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center justify-between rounded-xl px-3 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-brand-light text-brand-deep'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  <span className="text-slate-400" aria-hidden="true">
                    →
                  </span>
                </Link>
              )
            })}
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
