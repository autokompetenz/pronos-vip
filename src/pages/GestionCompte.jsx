import { useEffect } from 'react'
import CtaButtons, { TELEGRAM, PHONE, PHONE_HREF, WHATSAPP } from '../components/CtaButtons.jsx'
import EarningsSimulator from '../components/EarningsSimulator.jsx'
import ProofsCarousel from '../components/ProofsCarousel.jsx'
import { Reveal, SectionHead, fmt } from '../components/ui.jsx'

const BENEFITS = [
  {
    index: '01',
    icon: '👨‍💼',
    title: 'Traders Professionnels',
    text: 'Nos experts analysent les marchés et sélectionnent les paris avec rigueur, même en direct.',
  },
  {
    index: '02',
    icon: '🎯',
    title: 'Marchés Ciblés',
    text: 'Exploitation des cotes russes pour maximiser le retour sur investissement.',
  },
  {
    index: '03',
    icon: '📈',
    title: 'Objectif Atteint',
    text: 'Dès que l’objectif convenu est atteint, vous êtes immédiatement invité à effectuer le retrait.',
  },
  {
    index: '04',
    icon: '🤝',
    title: 'Commission 25%',
    text: 'La commission ne s’applique que sur les bénéfices nets réalisés. Rien en cas d’échec.',
  },
]

const STEPS = [
  {
    icon: '🚀',
    title: 'Définissez votre capital & objectif',
    text: 'Vous commencez avec un dépôt de départ accessible (à partir de 10 000 FCFA).',
  },
  {
    icon: '📊',
    title: 'Les traders opèrent sur votre compte',
    text: 'Placement stratégique des coupons selon les meilleures opportunités.',
  },
  {
    icon: '📈',
    title: 'Suivi transparent',
    text: 'Vous pouvez consulter l’évolution des résultats en temps réel sur votre compte.',
  },
  {
    icon: '🔔',
    title: 'Validation & Retrait immédiat',
    text: 'Vous retirez directement votre argent sur votre Mobile Money ou portefeuille crypto.',
  },
]

const WITHDRAW_STEPS = [
  'Cliquez sur votre solde puis sur « Retirer des fonds ».',
  'Choisissez Mobile Money (Wave, Orange, MTN, Moov) ou Crypto.',
  'Indiquez le montant à retirer et votre numéro de téléphone.',
  'Confirmez avec le code de sécurité reçu par SMS.',
  'Réception des fonds en 5 à 10 minutes directement sur votre compte.',
]

const PAYMENTS = ['Wave', 'Orange Money', 'MTN', 'Moov', 'Crypto']

const FAQ = [
  {
    q: 'Faut-il un dépôt important pour commencer ?',
    a: 'Non, vous pouvez démarrer dès 10 000 FCFA selon l’objectif choisi.',
  },
  {
    q: 'La commission s’applique-t-elle en cas de perte ?',
    a: 'Absolument pas. La commission de 25 % est prélevée uniquement sur les bénéfices nets générés.',
  },
  {
    q: 'Quand et comment puis-je retirer mes gains ?',
    a: 'Dès que l’objectif est complété, vous retirez vous-même vos gains en 5 à 10 minutes via Mobile Money.',
  },
  {
    q: 'Puis-je suivre l’évolution des paris ?',
    a: 'Oui, vous conservez l’accès à votre compte et suivez l’historique des paris en direct.',
  },
]

const HERO_POINTS = ['Dès 10 000 FCFA', '25 % seulement si gain', 'Retrait 5–10 min']

export default function GestionCompte() {
  useEffect(() => {
    document.title = 'Gestion de Compte 1xBet — Service VIP'
  }, [])

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-10 pt-8 sm:pb-20 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute -left-20 top-40 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" />
        </div>
        <div className="container-x">
          <Reveal>
            <SectionHead
              as="h1"
              eyebrow="Service VIP clé en main"
              title="Gestion de compte 1xBet"
              sub="Confiez votre compte à des experts qui sélectionnent les meilleures opportunités et gèrent votre bankroll. Commission de 25 % uniquement si vous gagnez."
            />
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
              <CtaButtons secondary />
            </div>
          </Reveal>

          <Reveal delay={140}>
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
          </Reveal>
        </div>
      </section>

      {/* Simulateur interactif */}
      <section
        id="conditions"
        className="section border-y border-slate-100 bg-slate-50/70 pt-10 sm:pt-16"
      >
        <div className="container-x">
          <Reveal>
            <div id="tarifs">
              <EarningsSimulator />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Avantages */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Pourquoi nous"
              title="Une gestion rigoureuse et sécurisée"
              sub="Une méthode éprouvée pour faire croître votre capital sans stress."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 70}>
                <article className="fintech-card h-full p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-tile" aria-hidden="true">
                      {benefit.icon}
                    </span>
                    <span className="rounded-lg bg-slate-50 px-2 py-1 text-[11px] font-black text-slate-500">
                      {benefit.index}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section id="marche" className="section border-t border-slate-100 bg-slate-50/70">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="Fonctionnement"
              title="Le parcours en 4 étapes simples"
              sub="De votre dépôt jusqu’à l’encaissement final sur votre Mobile Money."
            />
          </Reveal>

          <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <span className="icon-tile h-10 w-10 text-lg sm:h-12 sm:w-12 sm:text-xl" aria-hidden="true">
                    {step.icon}
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-1 w-px flex-1 bg-slate-200" />}
                </div>
                <div className="fintech-card mb-1 flex-1 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark sm:text-xs">
                      Étape {fmt(i + 1)}
                    </span>
                    <span className="h-1 w-8 rounded-full bg-brand/25" />
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">{step.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Guide retrait */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="03"
              eyebrow="Retrait rapide"
              title="Comment retirer vos gains en 5 à 10 minutes ?"
              sub="Vous gardez le plein contrôle sur vos retraits d’argent."
            />
          </Reveal>

          <ol className="mt-8 grid gap-3 sm:mt-10 lg:grid-cols-2">
            {WITHDRAW_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-[13px] font-medium leading-relaxed text-slate-700 sm:text-sm">
                  {step}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Moyens acceptés
            </span>
            {PAYMENTS.map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Preuves carrousel */}
      <section id="preuves" className="section border-t border-slate-100 bg-slate-50/70">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="04"
              eyebrow="Résultats"
              title="Preuves de retraits & transactions"
              sub="Captures des soldes et retraits effectués pour nos clients."
            />
          </Reveal>
          <div className="mt-8 sm:mt-10">
            <ProofsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="05"
              eyebrow="FAQ"
              title="Questions fréquentes"
              sub="Toutes les réponses avant de commencer la gestion de votre compte."
            />
          </Reveal>

          <div className="mt-8 space-y-3 sm:max-w-3xl">
            {FAQ.map((item, i) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-colors open:border-blue-200 open:bg-blue-50/20"
              >
                <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-3 p-4 font-semibold text-slate-900 sm:p-5">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-light text-[10px] font-black text-brand-deep">
                      {fmt(i + 1)}
                    </span>
                    <span className="text-sm sm:text-base">{item.q}</span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-medium text-brand-dark transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="border-t border-slate-100 px-4 py-4 text-[13px] leading-relaxed text-slate-600 sm:px-5 sm:text-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:mt-10 sm:max-w-xl sm:p-6">
            <h3 className="font-bold text-slate-900">Une autre question ?</h3>
            <p className="mt-1 text-sm text-slate-600">
              Contactez-nous directement sur WhatsApp ou Telegram.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                className="btn btn--primary w-full sm:w-auto"
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                className="btn btn--ghost w-full text-emerald-700 sm:w-auto"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-[11px] text-slate-500">
              Ou par téléphone :{' '}
              <a className="font-bold text-brand-dark hover:underline" href={PHONE_HREF}>
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
