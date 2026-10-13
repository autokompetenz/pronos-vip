import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CtaButtons, {
  TELEGRAM,
  TELEGRAM_TEXT,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from '../components/CtaButtons.jsx'
import { Reveal, SectionHead } from '../components/ui.jsx'

const BOOKS = ['1xBet', '1Win', 'Melbet', 'Linebet', 'Winamax', 'Betclic', 'Unibet', 'Bwin']

const TRUST = [
  { big: '10 000 F', small: 'pour démarrer' },
  { big: '25 %', small: 'de commission que si gain' },
  { big: '5–10 min', small: 'retrait Mobile Money' },
]

const SOLUTION = ['Gestion du compte', 'Sélection des paris', 'Suivi des résultats', 'Assistance']

function HeroCard() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="p-5">
        <span className="label-meta rounded-full bg-blue-50 px-2.5 py-1 text-brand">Exemple offert</span>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          Ligue des Champions
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-light px-2 py-0.5 text-[11px] font-bold text-success-text">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
            EN DIRECT
          </span>
        </p>
        <p className="mt-3 flex items-center gap-3 text-xl font-black text-slate-900">
          <span>PSG</span>
          <span className="text-xs font-bold text-slate-400">VS</span>
          <span>Real Madrid</span>
        </p>
      </div>

      <div className="grid grid-cols-1 divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="p-4">
          <span className="label-meta text-slate-400">Pronostic</span>
          <p className="mt-1 text-sm font-bold text-slate-900">Les deux équipes marquent</p>
        </div>
        <div className="p-4">
          <span className="label-meta text-slate-400">Cote</span>
          <p className="mt-1 text-xl font-black text-brand tnum">1,85</p>
        </div>
        <div className="p-4">
          <span className="label-meta text-slate-400">Confiance</span>
          <p className="mt-1 text-sm font-bold text-success-text">Élevée</p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-brand" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 bg-surface-subtle px-5 py-3">
        <small className="text-xs text-slate-400">Exemple fourni par nos experts</small>
        <strong className="text-xs font-bold text-slate-700">VIP · AMES1X</strong>
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'COMPTE 1XBET RUSSE — Gestion de compte 1xBet : Comment faire ?'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/40 to-white">
        <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Gestion de compte 1xBet</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Les pronostics qui <span className="text-brand">font la différence</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Nos experts analysent les cotes, placent les paris et font grimper votre compte 1xBet.
              Vous encaissez, en toute simplicité.
            </p>

            <ul className="mt-7 grid max-w-md grid-cols-3 gap-3">
              {TRUST.map((item) => (
                <li
                  key={item.big}
                  className="rounded-xl border border-slate-200 bg-white/70 p-3 text-center backdrop-blur"
                >
                  <span className="block text-base font-black text-slate-900 tnum">{item.big}</span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-slate-500">
                    {item.small}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButtons secondary />
            </div>
          </div>

          <Reveal>
            <HeroCard />
          </Reveal>
        </div>
      </section>

      {/* Bandeau bookmakers */}
      <div className="marquee-wrap overflow-hidden border-y border-slate-100 bg-white py-5" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center gap-8 px-4">
              <span className="eyebrow whitespace-nowrap">Bookmakers</span>
              {BOOKS.map((book) => (
                <span
                  key={book}
                  className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
                  {book}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 01 Le constat */}
      <section id="probleme" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Le constat"
              title="Vous pariez. Vous perdez. Vous recommencez."
              sub="Des mises répétées, des cotes mal choisies, des résultats qui ne suivent pas — c’est le quotidien de trop de parieurs."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="card h-full p-6">
                <h3 className="text-lg font-bold text-slate-900">Le problème</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Des mises répétées, des cotes mal choisies, des résultats qui ne suivent pas. Le
                  budget et la motivation s’épuisent, sans stratégie ni suivi.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card h-full border-blue-200 bg-blue-50/40 p-6">
                <h3 className="text-lg font-bold text-slate-900">Notre solution</h3>
                <ul className="mt-3 space-y-2">
                  {SOLUTION.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[11px] text-white">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="mt-8">
              <Link className="btn btn--primary" to="/gestion-de-compte">
                Découvrir la gestion de compte
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section id="contact" className="section pt-0">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Prêt à commencer ?
                </h2>
                <p className="mt-4 max-w-xl text-slate-600">
                  Découvrez notre fonctionnement, choisissez votre formule et rejoignez le VIP. La
                  commission ne s’applique que si vous gagnez.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="btn btn--primary" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                    Rejoindre sur Telegram
                  </a>
                  <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Code promo <strong className="text-slate-900">AMES1X</strong> à l’inscription sur le
                  bookmaker.
                </p>
              </div>

              <Reveal delay={120}>
                <div className="card p-6">
                  <p className="label-meta text-slate-400">Code promo</p>
                  <p className="text-2xl font-black tracking-[0.2em] text-brand">AMES1X</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-slate-500">Telegram</span>
                      <a className="link" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                        {TELEGRAM_TEXT}
                      </a>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-slate-500">WhatsApp</span>
                      <a className="link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        Ouvrir le chat
                      </a>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-slate-500">Téléphone</span>
                      <a className="link" href={PHONE_HREF}>
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
