import { useEffect } from 'react'
import CtaButtons, {
  TELEGRAM,
  TELEGRAM_TEXT,
  PHONE,
  PHONE_HREF,
} from '../components/CtaButtons.jsx'
import { Reveal, SectionHead, fmt } from '../components/ui.jsx'

const CREATE_STEPS = [
  {
    icon: '🪪',
    title: 'Informations de base',
    text: 'Création des informations de base du compte : ID, mot de passe et numéro associé.',
  },
  {
    icon: '⚙️',
    title: 'Configuration régionale',
    text: "Installation des caractéristiques d'encodage du compte — sans cette étape, l'accès aux championnats russes est impossible.",
  },
  {
    icon: '🌐',
    title: 'VPN intégré',
    text: "Un VPN est intégré lors de l'encodage : sans lui, le compte ne pourrait fonctionner dans votre région ni être relié aux serveurs russes.",
  },
]

const RUSSIAN_CARD = [
  'Accès aux championnats et marchés russes',
  'Cotes et événements indisponibles sur un compte standard',
  'Espace privé configuré pour votre région',
]

const STANDARD_CARD = [
  'Compte classique, créé depuis votre pays',
  'Marchés standards uniquement',
  'Restrictions et limites du bookmaker applicables',
]

const UTILITY = [
  {
    index: '01',
    icon: '🔓',
    title: 'Briser les limites',
    text: 'Le compte russe vous permet de contourner les restrictions et limites appliquées aux comptes standards.',
  },
  {
    index: '02',
    icon: '🛡️',
    title: 'Parier accompagné',
    text: 'Vous disposez d’un espace privé sur le bookmaker, avec un accompagnement et des codes coupons envoyés chaque jour.',
  },
]

const OBTAIN = [
  {
    icon: '📡',
    title: 'Aucune plateforme publique',
    text: 'Ce compte ne se trouve sur aucune plateforme de téléchargement libre et gratuite. La seule façon de l’obtenir est de passer une commande auprès de notre service.',
  },
  {
    icon: '🎯',
    title: 'Pronostics liés aux championnats russes',
    text: 'Les pronostics publiés sur notre canal concernent les championnats russes, que vous ne pouvez retrouver que si vous possédez un compte de pari russe (1xBet ou Betwinner).',
  },
]

function ListCard({ title, items, highlight = false }) {
  return (
    <div className={`card h-full p-6 ${highlight ? 'border-blue-200 bg-blue-50/40' : ''}`}>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-white ${
                highlight ? 'bg-brand' : 'bg-slate-400'
              }`}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CompteRusse() {
  useEffect(() => {
    document.title = 'COMPTE 1XBET RUSSE — Le compte de pari 1xBet Russe'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 via-blue-50/40 to-white">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              as="h1"
              eyebrow="Le compte russe"
              title="Le compte de pari 1xBet Russe"
              sub="Un espace privé configuré pour la Russie : création, encodage, VPN et suivi quotidien. Voici comment il fonctionne et en quoi il diffère d’un compte standard."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-7">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 La création */}
      <section id="creation" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="La création"
              title="Comment se passe la création d’un compte russe ?"
              sub="Une création authentique suit un processus technique précis, en trois étapes."
            />
          </Reveal>
          <ol className="mt-10 space-y-4">
            {CREATE_STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="flex gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl"
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <div className="card flex-1 p-5">
                  <span className="label-meta text-brand">ÉTAPE {fmt(i + 1)}</span>
                  <h3 className="mt-1 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              NB : pour vos commandes, vous êtes libre de choisir la devise dans laquelle vous
              souhaitez que votre compte soit créé.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 De votre côté */}
      <section id="soi-meme" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="De votre côté"
              title="Puis-je créer le compte moi-même ?"
              sub="Ceux qui ont des correspondants en Russie peuvent être tentés de créer le compte eux-mêmes — voici ce qu’il faut savoir."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="card h-full p-6">
                <h3 className="text-lg font-bold text-slate-900">Le processus authentique</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Une création authentique du compte 1xBet Russe prend en compte la création des
                  informations de base, l’installation des caractéristiques d’encodage et un VPN
                  intégré lors de l’encodage. Une création qui ignore ces étapes n’est pas un compte
                  russe complet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card h-full border-blue-200 bg-blue-50/40 p-6">
                <h3 className="text-lg font-bold text-slate-900">Attention aux arnaques</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Beaucoup se font arnaquer par des prétentions de comptes russes « premium » : ce ne
                  sont que des versions arrangées. Il n’existe qu’une seule version authentique du
                  1xBet Russe — et, sans l’encodage, votre compte ne sera qu’un compte standard.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="mt-8 text-sm text-slate-600">
              Une question sur votre commande ? Écrivez-nous sur{' '}
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

      {/* 03 La différence */}
      <section id="difference" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="03"
              eyebrow="La différence"
              title="Compte russe vs compte simple"
              sub="Un compte russe est très différent des comptes de jeu standard que vous avez l’habitude de créer."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <ListCard title="Compte standard" items={STANDARD_CARD} />
            </Reveal>
            <Reveal delay={90}>
              <ListCard title="Compte russe" items={RUSSIAN_CARD} highlight />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 Après la commande */}
      <section id="renouvellement" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="04"
              eyebrow="Après la commande"
              title="Le compte russe n’est pas renouvelable"
              sub="La création du compte est faite une seule fois, pour de bon."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="card mt-8 border-blue-200 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-slate-900">Votre routine quotidienne</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Après l’obtention de votre compte, tout est simple : vous copiez et collez le code du
                coupon que nous envoyons chaque jour, puis vous misez selon vos objectifs. Le compte
                lui-même n’est pas renouvelable : il est créé une fois pour de bon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 L'utilité */}
      <section id="utilite" className="section section--alt">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="05"
              eyebrow="L’utilité"
              title="Qu’est-ce qu’un compte de pari russe ?"
              sub="Un espace privé dont vous disposez sur le bookmaker, qui sécurise votre façon de parier au quotidien."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {UTILITY.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="text-2xl" aria-hidden="true">{u.icon}</span>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{u.title}</h3>
                    <span className="text-sm font-black text-slate-300">{u.index}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 L'obtention */}
      <section id="obtenir" className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              num="06"
              eyebrow="L’obtention"
              title="Comment obtenir le compte russe ?"
              sub="Deux choses à savoir avant de commander."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {OBTAIN.map((o, i) => (
              <Reveal as="div" key={o.title} delay={i * 70} className="card p-6">
                <span className="text-2xl" aria-hidden="true">{o.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 text-sm leading-relaxed text-slate-600">
              Pour commander votre compte russe, contactez-nous sur{' '}
              <a className="link" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                {TELEGRAM_TEXT}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
