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

export default function CompteRusse() {
  useEffect(() => {
    document.title = 'Le compte 1xBet Russe — COMPTE 1XBET RUSSE'
  }, [])

  return (
    <>
      <section className="section-pad page-hero">
        <div className="container">
          <Reveal>
            <SectionHead
              as="h1"
              eyebrow="Le compte russe"
              title="Le compte de pari 1xBet Russe"
              sub="Un espace privé configuré pour la Russie : création, encodage, VPN et suivi quotidien. Voici comment il fonctionne et en quoi il diffère d’un compte standard."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="cta-row section-cta">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="creation">
        <div className="container">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="La création"
              title="Comment se passe la création d’un compte russe ?"
              sub="Une création authentique suit un processus technique précis, en trois étapes."
            />
          </Reveal>
          <ol className="timeline">
            {CREATE_STEPS.map((s, i) => (
              <Reveal as="li" className="timeline-row" key={s.title} delay={i * 80}>
                <span className="timeline-stone" aria-hidden="true">{s.icon}</span>
                <div className="timeline-card">
                  <span className="timeline-chip">ÉTAPE {fmt(i + 1)}</span>
                  <h3 className="timeline-title">{s.title}</h3>
                  <p className="timeline-text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <p className="note-line">
              NB : pour vos commandes, vous êtes libre de choisir la devise dans laquelle vous
              souhaitez que votre compte soit créé.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="soi-meme">
        <div className="container">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="De votre côté"
              title="Puis-je créer le compte moi-même ?"
              sub="Ceux qui ont des correspondants en Russie peuvent être tentés de créer le compte eux-mêmes — voici ce qu’il faut savoir."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="split">
              <div className="split-card">
                <h3>Le processus authentique</h3>
                <p>
                  Une création authentique du compte 1xBet Russe prend en compte la création des
                  informations de base, l’installation des caractéristiques d’encodage et un VPN
                  intégré lors de l’encodage. Une création qui ignore ces étapes n’est pas un
                  compte russe complet.
                </p>
              </div>
              <div className="split-card sol-card">
                <h3>Attention aux arnaques</h3>
                <p>
                  Beaucoup se font arnaquer par des prétentions de comptes russes « premium » :
                  ce ne sont que des versions arrangées. Il n’existe qu’une seule version
                  authentique du 1xBet Russe — et, sans l’encodage, votre compte ne sera qu’un
                  compte standard.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="contact-line">
              Une question sur votre commande ? Écrivez-nous sur{' '}
              <a className="contact-tg" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>{' '}
              ({TELEGRAM_TEXT}) ou appelez-nous au{' '}
              <a className="contact-phone" href={PHONE_HREF}>{PHONE}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="difference">
        <div className="container">
          <Reveal>
            <SectionHead
              num="03"
              eyebrow="La différence"
              title="Compte russe vs compte simple"
              sub="Un compte russe est très différent des comptes de jeu standard que vous avez l’habitude de créer."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="split">
              <div className="split-card">
                <h3>Compte standard</h3>
                <ul className="solution-list">
                  {STANDARD_CARD.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="split-card sol-card">
                <h3>Compte russe</h3>
                <ul className="solution-list">
                  {RUSSIAN_CARD.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="renouvellement">
        <div className="container">
          <Reveal>
            <SectionHead
              num="04"
              eyebrow="Après la commande"
              title="Le compte russe n’est pas renouvelable"
              sub="La création du compte est faite une seule fois, pour de bon."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="split-card sol-card">
              <h3>Votre routine quotidienne</h3>
              <p>
                Après l’obtention de votre compte, tout est simple : vous copiez et collez le
                code du coupon que nous envoyons chaque jour, puis vous misez selon vos
                objectifs. Le compte lui-même n’est pas renouvelable : il est créé une fois pour
                de bon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="utilite">
        <div className="container">
          <Reveal>
            <SectionHead
              num="05"
              eyebrow="L’utilité"
              title="Qu’est-ce qu’un compte de pari russe ?"
              sub="Un espace privé dont vous disposez sur le bookmaker, qui sécurise votre façon de parier au quotidien."
            />
          </Reveal>
          <ul className="cards">
            {UTILITY.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 70}>
                <div className="benefit">
                  <span className="benefit-icon" aria-hidden="true">{u.icon}</span>
                  <div className="benefit-top">
                    <h3 className="benefit-title">{u.title}</h3>
                    <span className="benefit-index">{u.index}</span>
                  </div>
                  <p className="benefit-text">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad" id="obtenir">
        <div className="container">
          <Reveal>
            <SectionHead
              num="06"
              eyebrow="L’obtention"
              title="Comment obtenir le compte russe ?"
              sub="Deux choses à savoir avant de commander."
            />
          </Reveal>
          <div className="secure-grid">
            {OBTAIN.map((o, i) => (
              <Reveal as="div" className="secure-item" key={o.title} delay={i * 70}>
                <span className="secure-icon" aria-hidden="true">{o.icon}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="secure-note">
              Pour commander votre compte russe, contactez-nous sur{' '}
              <a className="mention" href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="cta-row section-cta">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
