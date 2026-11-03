import { useEffect } from 'react'
import CtaButtons, {
  TELEGRAM,
  TELEGRAM_TEXT,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from '../components/CtaButtons.jsx'
import { Reveal, SectionHead, fmt } from '../components/ui.jsx'

const RUSSIAN_PROOFS = [
  {
    name: 'Yao',
    currency: 'XOF (Franc CFA)',
    balance: '952 900.0 F',
    src: '/images/compte-russe-yao.jpg',
    tag: 'Devise FCFA',
  },
  {
    name: 'Guillaume',
    currency: 'EUR (€)',
    balance: '7 350.0 €',
    src: '/images/compte-russe-guillaume.jpg',
    tag: 'Devise Euro',
  },
  {
    name: 'Amra',
    currency: 'EUR (€)',
    balance: '3 692.0 €',
    src: '/images/compte-russe-amra.jpg',
    tag: 'Devise Euro',
  },
  {
    name: 'Validation Serveur',
    currency: 'XOF / Russe',
    balance: 'Compte Encodé',
    src: '/images/compte-russe-yao-2.jpg',
    tag: 'VPN & Encodage',
  },
]

const CREATE_STEPS = [
  {
    icon: '🪪',
    title: 'Informations de base & ID sécurisé',
    text: 'Création et enregistrement de vos identifiants uniques configurés pour les serveurs russes.',
  },
  {
    icon: '⚙️',
    title: 'Installation des caractéristiques d’encodage',
    text: 'Sans cet encodage technique spécifique, l’accès aux championnats et cotes russes est totalement verrouillé.',
  },
  {
    icon: '🌐',
    title: 'Liaison VPN serveur Russie',
    text: 'Un protocole VPN privé est intégré pour que le compte fonctionne de manière transparente depuis votre pays sans blocage.',
  },
]

const DIFFERENCES = [
  {
    title: 'Compte Standard Classique',
    highlight: false,
    points: [
      'Créé simplement depuis votre région',
      'Marchés limités aux cotes publiques locales',
      'Plafonds de mise et restrictions rapides du bookmaker',
      'Pas d’accompagnement ni de coupons VIP quotidiens',
    ],
  },
  {
    title: 'Compte de Pari 1xBet Russe',
    highlight: true,
    points: [
      'Authentifié avec le drapeau 🇷🇺 visible sur le profil',
      'Accès aux championnats russes exclusifs à très fortes cotes',
      'Aucune restriction sur les montants de retrait',
      'Choix libre de votre devise (XOF, EUR, USD)',
      'Coupons et codes envoyés chaque jour sur votre espace',
    ],
  },
]

const HERO_POINTS = ['Encodage complet', 'VPN inclus', 'Devise au choix']

export default function CompteRusse() {
  useEffect(() => {
    document.title = 'COMPTE 1XBET RUSSE — Espace Privé & Cotes Russes'
  }, [])

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-12 pt-8 sm:pb-24 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute -left-20 top-48 h-52 w-52 rounded-full bg-emerald-200/30 blur-3xl" />
        </div>

        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-dark shadow-sm backdrop-blur sm:text-xs">
                <span aria-hidden="true">🇷🇺</span>
                Authenticité certifiée
              </p>

              <h1 className="mt-4 text-[1.7rem] font-black leading-[1.15] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
                Le compte de pari <span className="text-brand">1xBet Russe</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 text-pretty sm:mt-5 sm:text-lg">
                Un compte exclusif configuré pour la Russie avec encodage, VPN intégré et accès
                complet aux championnats russes. Choisissez votre devise et pariez sans les
                restrictions habituelles.
              </p>

              <div className="mt-6 sm:mt-8">
                <CtaButtons secondary />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {HERO_POINTS.map((point) => (
                  <li
                    key={point}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-600 backdrop-blur sm:text-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">
                    🇷🇺
                  </span>
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    Signe distinctif officiel
                  </span>
                </div>
                <span className="badge-tag bg-emerald-50 text-emerald-700">Validé</span>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                Sur un véritable compte russe, le <strong>drapeau 🇷🇺</strong> s’affiche directement
                en haut à droite de votre profil personnel avec votre devise choisie (
                <strong>XOF</strong> ou <strong>EUR</strong>).
              </p>
              <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Exemple de solde actif
                </p>
                <p className="tnum mt-1 text-2xl font-black leading-tight text-slate-900">
                  952 900.0 XOF
                </p>
                <p className="mt-0.5 text-[11px] font-bold text-emerald-700">
                  Compte prêt pour les retraits Mobile Money
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie des captures */}
      <section className="section border-y border-slate-100 bg-slate-50/80">
        <div className="container-x">
          <Reveal>
            <SectionHead
              center
              eyebrow="Comptes authentifiés"
              title="Aperçu réel des comptes 1xBet Russes créés"
              sub="Regardez le drapeau russe 🇷🇺 présent sur chaque interface client ainsi que les soldes enregistrés en FCFA et en Euros."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {RUSSIAN_PROOFS.map((proof, i) => (
              <Reveal key={proof.name + i} delay={i * 80}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float">
                  <div className="relative aspect-[9/16] overflow-hidden bg-slate-950">
                    <img
                      src={proof.src}
                      alt={`Compte Russe 1xBet - ${proof.name}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-2.5 pt-10">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur-md sm:text-[10px]">
                        <span aria-hidden="true">🇷🇺</span>
                        Certifié
                      </span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                        Client
                      </span>
                      <span className="badge-tag max-w-[58%] truncate bg-brand-light px-2 py-0.5 text-[8px] text-brand-deep sm:text-[9px]">
                        {proof.tag}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm font-extrabold text-slate-900 sm:text-base">
                      {proof.name}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-1 border-t border-slate-100 pt-2">
                      <span className="text-[9px] text-slate-500 sm:text-[11px]">Solde</span>
                      <span className="tnum text-[11px] font-black text-slate-900 sm:text-sm">
                        {proof.balance}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-500 sm:mt-8 sm:text-xs">
            Captures réelles issues de l’application 1xBet configurée avec nos protocoles
            d’encodage.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Procédure technique"
              title="Comment se déroule la création de votre compte ?"
              sub="Une configuration complète et sécurisée effectuée en 3 étapes par notre équipe technique."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {CREATE_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <article className="fintech-card flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-tile h-12 w-12 text-2xl" aria-hidden="true">
                      {step.icon}
                    </span>
                    <span className="rounded-lg bg-slate-50 px-2 py-1 text-[10px] font-black text-slate-500">
                      {fmt(i + 1)}
                    </span>
                  </div>
                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-brand-dark sm:text-xs">
                    Étape {fmt(i + 1)}
                  </span>
                  <h3 className="mt-1 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="section border-t border-slate-100 bg-slate-50/70">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="Comparatif"
              title="Compte Russe 1xBet vs Compte Standard"
              sub="Pourquoi un compte russe offre un avantage mathématique et opérationnel considérable."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {DIFFERENCES.map((diff) => (
              <Reveal
                key={diff.title}
                className={diff.highlight ? 'order-first md:order-none' : ''}
              >
                <article
                  className={`h-full rounded-2xl p-5 transition-all sm:p-7 ${
                    diff.highlight
                      ? 'border-2 border-brand-dark bg-white shadow-float'
                      : 'border border-slate-200 bg-white/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black leading-tight text-slate-900 sm:text-xl">
                      {diff.title}
                    </h3>
                    {diff.highlight && (
                      <span className="shrink-0 rounded-full bg-brand-dark px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:text-[10px]">
                        Recommandé
                      </span>
                    )}
                  </div>

                  <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                    {diff.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700 sm:text-sm"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                            diff.highlight ? 'bg-brand-dark' : 'bg-slate-500'
                          }`}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 text-center shadow-sm sm:mt-12 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
            />
            <span className="badge-tag bg-white text-brand-dark shadow-sm">Création unique</span>
            <h2 className="mt-3 text-xl font-black leading-tight text-slate-900 text-balance sm:text-2xl">
              Commandez votre compte russe dès aujourd’hui
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              La création est unique et définitive (aucun renouvellement payant requis). Cliquez
              ci-dessous pour lancer votre commande.
            </p>

            <div className="mx-auto mt-5 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                className="btn btn--primary w-full px-6 sm:w-auto"
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander sur Telegram
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="btn btn--ghost w-full px-6 font-bold text-emerald-700 sm:w-auto"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 sm:text-xs">
              Ou contactez le support direct au{' '}
              <a
                className="font-bold text-brand-dark hover:underline"
                href={PHONE_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PHONE}
              </a>
              {' · '}
              <span className="font-semibold text-slate-600">{TELEGRAM_TEXT}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
