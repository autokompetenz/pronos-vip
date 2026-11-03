import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TELEGRAM, PHONE, PHONE_HREF, WHATSAPP } from '../components/CtaButtons.jsx'
import { Reveal, SectionHead } from '../components/ui.jsx'

const TRUST = [
  { big: '10 000 F', small: 'Dépôt pour démarrer' },
  { big: '25 %', small: 'Commission si gain' },
  { big: '5–10 min', small: 'Retrait Mobile Money' },
]

const SERVICES = [
  {
    icon: '🇷🇺',
    title: 'Le Compte 1xBet Russe',
    text: 'Un compte authentique encodé avec VPN intégré vous donnant accès aux championnats russes exclusifs, sans limites de mise et avec votre propre devise.',
    points: [
      'Drapeau russe visible sur votre profil',
      'Cotes plus élevées et marchés confidentiels',
      'Création définitive en une seule fois',
    ],
    to: '/compte-russe',
    cta: 'Voir les preuves & commander',
  },
  {
    icon: '📈',
    title: 'La Gestion de Compte 1xBet',
    text: 'Vous nous confiez votre compte : nos traders placent les paris au bon moment et suivent l’objectif fixé. Vous encaissez en toute sécurité.',
    points: [
      'Démarrage dès 10 000 FCFA',
      '25 % de commission uniquement si vous gagnez',
      'Retraits en 5 à 10 minutes sur Mobile Money',
    ],
    to: '/gestion-de-compte',
    cta: 'Calculer vos gains & commencer',
    badge: 'Populaire',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'COMPTE 1XBET RUSSE — Accueil'
  }, [])

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-12 pt-8 sm:pb-24 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute -left-24 top-48 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="container-x">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-dark shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Service VIP &amp; cotes russes
            </p>

            <h1 className="mt-4 text-[1.7rem] font-black leading-[1.15] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
              Gagnez avec le <span className="text-brand">Compte 1xBet Russe</span> &amp; notre
              Gestion VIP
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 text-pretty sm:mt-5 sm:text-lg">
              Découvrez la puissance d’un compte de pari encodé pour les championnats russes et
              confiez votre capital à nos traders experts, avec une commission uniquement sur les
              gains.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link to="/compte-russe" className="btn btn--primary w-full px-6 sm:w-auto">
                Découvrir le compte russe
                <span aria-hidden="true">🇷🇺</span>
              </Link>
              <Link to="/gestion-de-compte" className="btn btn--ghost w-full px-6 sm:w-auto">
                Voir la gestion de compte
                <span aria-hidden="true">📈</span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
              {TRUST.map((item) => (
                <div key={item.big} className="fintech-card p-3 text-center sm:p-4">
                  <span className="tnum block text-base font-black leading-tight text-slate-900 sm:text-2xl">
                    {item.big}
                  </span>
                  <span className="mt-1 block text-[10px] font-medium leading-snug text-slate-600 sm:text-xs">
                    {item.small}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Les 2 services clés */}
      <section className="section border-t border-slate-100 bg-slate-50/70">
        <div className="container-x">
          <Reveal>
            <SectionHead
              center
              eyebrow="Nos 2 pôles"
              title="Choisissez votre accompagnement"
              sub="Deux solutions conçues pour maximiser vos gains sur 1xBet."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-8 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <article className="fintech-card flex h-full flex-col p-5 hover:border-brand sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-tile h-12 w-12 rounded-2xl bg-blue-50 text-2xl" aria-hidden="true">
                      {service.icon}
                    </span>
                    {service.badge && (
                      <span className="badge-tag bg-brand-dark text-white shadow-sm shadow-brand-dark/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-black text-slate-900 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.text}</p>

                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="check-dot" aria-hidden="true">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link to={service.to} className="btn btn--primary w-full">
                      {service.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section pt-2 sm:pt-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/60 p-5 text-center shadow-soft sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
            />
            <span className="badge-tag bg-white text-brand-dark shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Assistance 7j/7
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 text-balance sm:text-4xl">
              Besoin d’un renseignement immédiat ?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              Notre assistance est disponible 7j/7 pour vous orienter dans la création de votre
              compte russe ou le lancement de votre gestion.
            </p>

            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                className="btn btn--primary w-full px-8 sm:w-auto"
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Canal Telegram
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="btn btn--ghost w-full px-8 font-bold text-emerald-700 sm:w-auto"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discussion WhatsApp
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Assistance directe :{' '}
              <a
                className="font-bold text-brand-dark hover:underline"
                href={PHONE_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
