import { useEffect } from 'react'
import CtaButtons, {
  TELEGRAM,
  TELEGRAM_TEXT,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from '../components/CtaButtons.jsx'
import Carousel from '../components/Carousel.jsx'
import ProofsCarousel from '../components/ProofsCarousel.jsx'
import { Reveal, SectionHead, fmt } from '../components/ui.jsx'

const BENEFITS = [
  {
    index: '01',
    icon: '👨‍💼',
    title: 'Experts',
    text: 'Des traders analystes sélectionnent les paris et placent au bon moment, même en direct.',
  },
  {
    index: '02',
    icon: '🎯',
    title: 'Meilleures cotes',
    text: 'Marchés exclusifs et cotes étudiées sur votre compte 1xBet Russe.',
  },
  {
    index: '03',
    icon: '📈',
    title: 'Performance',
    text: 'Objectif atteint ? Vous êtes prévenu immédiatement pour retirer en toute sécurité.',
  },
  {
    index: '04',
    icon: '🤝',
    title: 'Commission',
    text: '25 % uniquement sur les bénéfices réalisés. Rien si on ne gagne pas.',
  },
]

const STEPS = [
  {
    icon: '🚀',
    title: 'Définissez votre objectif',
    text: 'Vous choisissez votre objectif et déposez le montant de départ, à partir de 10 000 FCFA.',
  },
  {
    icon: '📊',
    title: 'Nos traders opèrent',
    text: 'Ils sélectionnent les paris et placent au bon moment, selon le fonctionnement du service — même en direct.',
  },
  {
    icon: '📈',
    title: 'Suivi pas à pas',
    text: 'Vous suivez l’évolution du compte à chaque résultat.',
  },
  {
    icon: '🔔',
    title: 'Alerte retrait',
    text: 'Vous êtes informé immédiatement dès que le retrait devient possible.',
  },
  {
    icon: '🤝',
    title: 'Commission 25 %',
    text: 'Elle ne s’applique que sur les bénéfices réalisés. Rien si on ne gagne pas.',
  },
]

const FLOW = [
  { label: 'Départ', value: '50 000 FCFA' },
  { label: 'Objectif', value: '3 000 000 FCFA' },
  { label: 'Bénéfice visé', value: '2 950 000 FCFA' },
  { label: 'Commission 25 %', value: '737 500 FCFA' },
  { label: 'Montant net', value: '2 262 500 FCFA' },
]

const OPTIONS = [
  { title: 'Option 1', target: '350 000 FCFA', deposit: '10 000 F', popular: false },
  { title: 'Option 2', target: '500 000 FCFA', deposit: '15 000 F', popular: false },
  { title: 'Option 3', target: '750 000 FCFA', deposit: '20 000 F', popular: false },
  { title: 'Option 4', target: '1 million FCFA', deposit: '25 000 F', popular: true },
  { title: 'Option 5', target: '1 500 000 FCFA', deposit: '30 000 F', popular: false },
]

const WITHDRAW_STEPS = [
  'Ouvrez le solde (le chiffre vert) puis cliquez sur « Retirer des fonds ».',
  'Choisissez la méthode : Mobile Money (le plus rapide) ou crypto.',
  'Entrez le montant à retirer (minimum souvent 3 000 FCFA ou 1 $).',
  'Indiquez le numéro Mobile Money ou l’adresse wallet.',
  'Validez avec le code reçu par SMS.',
  'Terminé : l’argent arrive en 5 à 10 minutes.',
]

const SECURITY = [
  { icon: '🔐', title: 'Sécurité', text: 'Validation du propriétaire du compte.' },
  { icon: '📱', title: 'Vérification', text: 'Code envoyé sur le moyen de contact associé.' },
  { icon: '💳', title: 'Retrait', text: 'Validation avant traitement.' },
]

const FAQ = [
  {
    q: 'Faut-il un dépôt important pour commencer ?',
    a: 'Non : vous démarrez à partir de 10 000 FCFA selon l’objectif choisi.',
  },
  {
    q: 'La commission s’applique-t-elle en cas de perte ?',
    a: 'Non. La commission de 25 % ne porte que sur les bénéfices réalisés.',
  },
  {
    q: 'Comment sont sélectionnés les paris ?',
    a: 'Nos traders analysent les cotes et les marchés, y compris en direct, selon le fonctionnement du service.',
  },
  {
    q: 'Quand puis-je retirer mes gains ?',
    a: 'Dès que l’objectif est atteint, vous êtes prévenu immédiatement pour retirer en toute sécurité.',
  },
  {
    q: 'Le service respecte-t-il le jeu responsable ?',
    a: 'Oui : le jeu comporte des risques et est réservé aux 18+. Les performances passées ne garantissent pas les résultats futurs.',
  },
]

function OptionCard({ option }) {
  return (
    <div
      className={`relative flex w-[240px] shrink-0 flex-col rounded-2xl border bg-white p-6 shadow-soft sm:w-[260px] ${
        option.popular ? 'border-brand ring-2 ring-brand/15' : 'border-slate-200'
      }`}
    >
      {option.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Le plus choisi
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{option.title}</p>
      <p className="mt-1 text-2xl font-black text-slate-900 tnum">{option.target}</p>
      <p className="mt-2 text-sm text-slate-600">
        <strong className="text-slate-900">{option.deposit}</strong> de dépôt seulement
      </p>
      <a className="btn btn--primary mt-5" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Choisir
      </a>
    </div>
  )
}

export default function GestionCompte() {
  useEffect(() => {
    document.title = 'Gestion de compte 1xBet — COMPTE 1XBET RUSSE'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 via-blue-50/40 to-white">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              as="h1"
              eyebrow="Le service"
              title="Gestion de compte 1xBet"
              sub="Vous nous confiez votre compte 1xBet : nos experts sélectionnent les paris, placent au bon moment et suivent chaque résultat. La commission ne s’applique que si vous gagnez."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-7">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 Pourquoi nous */}
      <section id="service" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Pourquoi nous"
              title="La gestion de compte 1xBet, concrètement"
              sub="Vous nous confiez votre compte 1xBet. Nos experts sélectionnent les paris, placent au bon moment et suivent chaque résultat."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="text-2xl" aria-hidden="true">{b.icon}</span>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                    <span className="text-sm font-black text-slate-300">{b.index}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={160}>
            <div className="mt-8">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 Comment ça marche */}
      <section id="marche" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="Comment ça marche"
              title="Le processus en 5 étapes"
              sub="De votre dépôt jusqu’à l’encaissement, chaque étape est claire, suivie et sans stress."
            />
          </Reveal>
          <ol className="mt-10 space-y-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="flex gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl"
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <div className="card flex-1 p-5">
                  <span className="label-meta text-brand">STEP {fmt(i + 1)}</span>
                  <h3 className="mt-1 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900">Vous gardez la maîtrise</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Vous suivez l’évolution du compte à chaque résultat, informé immédiatement dès que
                  le retrait devient possible.
                </p>
              </div>
              <img
                className="w-full rounded-2xl border border-slate-200 shadow-soft"
                src="/images/deposit-app.webp"
                alt="la gestion de compte 1xbet — dépôt depuis l’application"
                width="1280"
                height="901"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 Exemple concret */}
      <section id="exemple" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="03"
              eyebrow="Un cas réel"
              title="Exemple concret pour les parieurs"
              sub="Simulation d’un accompagnement : départ 50 000 FCFA, objectif 3 000 000 FCFA."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              {FLOW.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex items-center justify-between gap-4 px-5 py-4 ${
                    i % 2 ? 'bg-surface-subtle' : ''
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">{f.label}</span>
                  </span>
                  <span
                    className={`text-sm font-black tnum ${
                      i === FLOW.length - 1 ? 'text-brand' : 'text-slate-900'
                    }`}
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-sm font-semibold text-slate-700">
              Zéro stress : vous suivez l’évolution, nos experts travaillent, vous encaissez.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Simulation illustrative : les résultats réels varient selon les marchés et les cotes.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 Tarifs */}
      <section id="conditions" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="04"
              eyebrow="Tarifs"
              title="Conditions de la gestion de compte 1xBet"
              sub="Choisissez votre objectif. La commission ne s’applique que si vous gagnez."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10">
              <Carousel
                label="Offres de gestion de compte 1xBet"
                slides={OPTIONS.map((option) => (
                  <OptionCard key={option.title} option={option} />
                ))}
              />
            </div>
          </Reveal>

          <p className="mt-8 text-center text-sm font-semibold text-slate-500">
            La commission, seulement si vous gagnez
          </p>

          <Reveal delay={60}>
            <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-center">
              <span className="eyebrow">Commission</span>
              <span className="text-5xl font-black text-slate-900 tnum">25&nbsp;%</span>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Uniquement selon les bénéfices réalisés et les conditions du service.
              </p>
            </div>
          </Reveal>

          <h3 className="mt-14 text-2xl font-black tracking-tight text-slate-900">
            Sécurité &amp; vérification
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {SECURITY.map((s, i) => (
              <Reveal as="div" key={s.title} delay={i * 70} className="card p-6">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={90}>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Chaque retrait est soumis à une validation de sécurité. Nous ne travaillons qu’avec des
              personnes sérieuses —{' '}
              <a className="link" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                {TELEGRAM_TEXT}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 Guide retrait */}
      <section id="retrait" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="05"
              eyebrow="Guide express"
              title="Comment retirer les gains du compte ?"
              sub="Rapide et sécurisé : encaissez en 5 à 10 minutes via Mobile Money ou crypto."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <ol className="space-y-3">
                {WITHDRAW_STEPS.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-soft"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
              <img
                className="w-full rounded-2xl border border-slate-200 shadow-soft"
                src="/images/retrait.jpg"
                alt="1xBet — retirer des fonds (solde et méthodes)"
                width="1024"
                height="569"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-sm text-slate-600">
              Une question ? Écrivez-nous sur{' '}
              <a className="link" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>{' '}
              ({TELEGRAM_TEXT}) ou appelez-nous au{' '}
              <a className="link" href={PHONE_HREF}>
                {PHONE}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 Preuves */}
      <section id="preuves" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="06"
              eyebrow="Ils gagnent déjà"
              title="Voici quelques preuves de la gestion de compte 1xBet"
              sub="Des comptes 1xBet réellement accompagnés par nos experts."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10">
              <ProofsCarousel />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
              Les captures présentées sont fournies à titre illustratif. Les performances passées ne
              garantissent pas les résultats futurs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 07 FAQ */}
      <section id="faq" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="07"
              eyebrow="FAQ"
              title="Questions fréquentes"
              sub="Tout ce qu’il faut savoir avant de commencer."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 space-y-3">
              {FAQ.map((item, i) => (
                <details key={item.q} className="group card overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-brand">
                      {fmt(i + 1)}
                    </span>
                    <span className="flex-1 font-bold text-slate-900">{item.q}</span>
                    <span className="text-xl leading-none text-brand transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-center">
              <h3 className="text-lg font-bold text-slate-900">Encore une question ?</h3>
              <p className="mt-1 text-sm text-slate-600">
                Écrivez-nous sur Telegram ou WhatsApp, on vous répond rapidement.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a className="btn btn--primary" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
