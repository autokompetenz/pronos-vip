import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BottomCta from './components/BottomCta.jsx'
import ProofsCarousel from './components/ProofsCarousel.jsx'
import CtaButtons, { TELEGRAM, TELEGRAM_TEXT, PHONE, PHONE_HREF } from './components/CtaButtons.jsx'

const BOOKS = ['1xBet', '1Win', 'Melbet', 'Linebet', 'Winamax', 'Betclic', 'Unibet', 'Bwin']

const TRUST = [
  { big: '10 000 F', small: 'pour démarrer' },
  { big: '25 %', small: 'de commission que si gain' },
  { big: '5–10 min', small: 'retrait Mobile Money' },
]

const BENEFITS = [
  {
    icon: '👨‍💼',
    title: 'Experts à votre relais',
    text: 'Nos traders placent le pari le plus stratégique au bon moment, même en direct.',
  },
  {
    icon: '🎯',
    title: 'Meilleures cotes',
    text: 'Cotes imbattables, pronostics fiables et marchés exclusifs sur votre compte 1xBet Russe.',
  },
  {
    icon: '📈',
    title: 'Gains réguliers',
    text: 'Objectif atteint, vous êtes prévenu immédiatement pour retirer en toute sécurité.',
  },
  {
    icon: '🤝',
    title: 'Commission que si gain',
    text: '25 % uniquement sur les bénéfices réalisés. Rien du tout si on ne gagne pas.',
  },
]

const STEPS = [
  <>
    En tant que <strong>parieur</strong>, vous déposez un montant de départ à partir de{' '}
    <strong>10 000 FCFA</strong> (ou plus selon votre objectif) sur l’un des{' '}
    <strong>meilleurs sites</strong> de paris disponibles.
  </>,
  <>
    Nos traders professionnels s’occupent de tout : <strong>faire le pari</strong> idéal, jouer
    le <strong>pari combiné</strong> gagnant, ou <strong>parier en direct</strong> sur les
    événements les plus rentables — chaque <strong>coupon</strong> est soigneusement sélectionné
    pour maximiser vos chances de <strong>gagner aux paris sportifs</strong>.
  </>,
  <>
    Dès que l’objectif est atteint (300 000, 500 000 FCFA, 1 million ou plus), nous vous
    prévenons immédiatement pour que vous puissiez <strong>retirer un gain</strong> en toute
    sécurité.
  </>,
  <>
    Vous vous connectez, effectuez votre retrait, puis vous pouvez{' '}
    <strong>continuer à parier</strong> pour viser encore plus grand.
  </>,
  <>
    Vous nous versez simplement une commission de{' '}
    <strong>25 % uniquement sur les bénéfices réalisés</strong> — rien du tout si on ne gagne pas.
  </>,
]

const FLOW = [
  { label: 'Vous déposez', value: '50 000 FCFA' },
  { label: 'Nos experts font grimper le compte à', value: '3 000 000 FCFA' },
  { label: 'Vous retirez votre gain', value: 'en totalité' },
  { label: 'Puis 25 % de commission, soit', value: '737 500 FCFA' },
  { label: 'Vous repartez avec', value: '2 262 500 FCFA net' },
]

const OPTIONS = [
  { title: 'Option 1', target: '350 000 FCFA', deposit: '10 000 F', popular: false },
  { title: 'Option 2', target: '500 000 FCFA', deposit: '15 000 F', popular: false },
  { title: 'Option 3', target: '750 000 FCFA', deposit: '20 000 F', popular: false },
  { title: 'Option 4', target: '1 million FCFA', deposit: '25 000 F', popular: true },
  { title: 'Option 5', target: '1 500 000 FCFA', deposit: '30 000 F', popular: false },
]

const WITHDRAW_STEPS = [
  'Cliquez sur votre solde (le chiffre vert) → « Retirer des fonds ».',
  'Choisissez votre méthode : Mobile Money (Orange Money, MTN MoMo, Moov Money, Wave, Free Money…) — le plus rapide en Afrique — ou Crypto (USDT, Bitcoin…) si vous préférez.',
  'Entrez le montant à retirer (minimum souvent 3 000 FCFA ou 1 $).',
  'Indiquez le numéro lié au Mobile Money (ou votre adresse wallet crypto).',
  'Validez avec le code SMS reçu immédiatement.',
  'C’est terminé ! L’argent arrive en 5 à 10 minutes (souvent instantané sur Mobile Money).',
]

function OptionCard({ option }) {
  return (
    <div className={option.popular ? 'pricing pricing--popular' : 'pricing'}>
      {option.popular && <span className="pricing-badge">Le plus choisi</span>}
      <p className="pricing-label">{option.title}</p>
      <p className="pricing-target">{option.target}</p>
      <p className="pricing-deposit">
        <strong>{option.deposit}</strong> de dépôt seulement
      </p>
      <a className="pricing-cta" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Choisir ce plan
      </a>
    </div>
  )
}

function SectionLabel({ children, mode }) {
  return (
    <p className={mode === 'light' ? 'section-label section-label--light' : 'section-label'}>
      {children}
    </p>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? el.scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page" id="top">
      <div className="progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      <Header />

      <main>
        <section className="hero" id="accueil">
          <div className="hero-inner">
            <img
              className="hero-logo"
              src="/images/logo-banner.svg"
              alt="PRONOS VIP — gestion de compte 1xBet"
              width="765"
              height="319"
            />
            <p className="hero-kicker">Gestion de compte 1xBet</p>
            <h1 className="hero-title">
              Gestion de compte 1xBet<span className="hero-title-accent"> : comment faire&nbsp;?</span>
            </h1>
            <p className="hero-sub">
              Votre premier million grâce à la gestion de compte ? C’est tout à fait possible
              avec nous. Rejoignez-nous dès maintenant !
            </p>
            <ul className="trust">
              {TRUST.map((item) => (
                <li key={item.big} className="trust-item">
                  <span className="trust-big">{item.big}</span>
                  <span className="trust-small">{item.small}</span>
                </li>
              ))}
            </ul>
            <CtaButtons />
            <div className="hero-img-wrap">
              <img
                className="hero-img"
                src="/images/deposit-app.webp"
                alt="la gestion de compte 1xbet — dépôt depuis l’application"
                width="1280"
                height="901"
              />
              <span className="hero-img-glow" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...BOOKS, ...BOOKS].map((book, i) => (
              <span className="marquee-item" key={`${book}-${i}`}>
                <span className="marquee-dot" /> {book}
              </span>
            ))}
          </div>
        </div>

        <div className="content">
          <section className="section intro">
            <SectionLabel>Le constat</SectionLabel>
            <p className="intro-lead">
              Vous <strong>pariez</strong> tous les jours sur des{' '}
              <strong>sites de paris sportifs</strong> comme 1xBet, 1Win, Melbet, Linebet,
              Winamax, Betclic, Unibet, <strong>Bwin</strong> et bien d’autres{' '}
              <strong>bookmakers</strong>… mais vous perdez presque à chaque fois ? Vous
              tentez encore et encore, mise après mise — que ce soit sur le{' '}
              <strong>pari sportif</strong>, les courses <strong>hippiques</strong>, le{' '}
              <strong>turf</strong>, le <strong>poker</strong> ou les <strong>combinés</strong>{' '}
              — sans jamais réussir à tirer votre épingle du jeu ?
            </p>
            <p>Sachez que vous n’êtes pas seul — et surtout, que vous êtes enfin au bon endroit.</p>
            <p>
              Nous vous proposons une opportunité concrète et sérieuse, loin des{' '}
              <strong>sites de paris</strong> classiques encadrés par l’<strong>ARJEL</strong> :
              celle de gagner non seulement votre premier million, mais aussi de générer des
              gains réguliers chaque jour grâce au <strong>paris sportif</strong> de haut
              niveau. Grâce à votre <strong>compte-joueur</strong> 1xBet Russe, vous accédez à
              des <strong>cotes</strong> imbattables, des <strong>pronostic</strong> fiables,
              des marchés exclusifs et un <strong>bonus</strong> à chaque{' '}
              <strong>premier dépôt</strong> qui maximise immédiatement vos chances de gains.
            </p>
            <p className="intro-punch">
              Comment ? Grâce à la gestion de compte 1xBet, une solution éprouvée qui change
              radicalement la donne — et qui fait enfin de chaque <strong>pari sportif</strong>{' '}
              une véritable opportunité de <strong>gagner</strong>.
            </p>
          </section>

          <section className="section" id="service">
            <SectionLabel>Pourquoi nous</SectionLabel>
            <h2>La gestion de compte 1xBet, concrètement</h2>
            <p>
              Le principe est d’une simplicité redoutable : vous nous confiez votre compte
              1xBet, et nos experts en <strong>jeux d’argent</strong> prennent entièrement le
              relais. Sur les meilleurs sites de paris, ils identifient et placent le{' '}
              <strong>pari</strong> le plus stratégique au bon moment, en ciblant les
              meilleures cotes — que ce soit sur les <strong>paris en direct</strong>, les{' '}
              <strong>grilles</strong>, les <strong>tournois</strong>, les jeux virtuels, les
              1xGames, le football ou tout autre événement rentable.
            </p>
            <ul className="benefits">
              {BENEFITS.map((b) => (
                <li key={b.title} className="benefit">
                  <span className="benefit-icon" aria-hidden="true">{b.icon}</span>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-text">{b.text}</p>
                </li>
              ))}
            </ul>
            <p className="highlight-line">Avec nous, vous ne subissez plus les pertes : vous gagnez.</p>
            <CtaButtons />
          </section>

          <section className="section section--dark" id="marche">
            <SectionLabel mode="light">Comment ça marche</SectionLabel>
            <h2>Le processus en 5 étapes</h2>
            <ol className="steps">
              {STEPS.map((step, i) => (
                <li className="step" key={i}>{step}</li>
              ))}
            </ol>
            <img
              className="lead-img"
              src="/images/gains.jpg"
              alt="la gestion de compte 1xbet — évolution des gains"
              width="584"
              height="1024"
              loading="lazy"
            />
          </section>

          <section className="section" id="exemple">
            <SectionLabel>Un cas réel</SectionLabel>
            <h2>Exemple concret pour les parieurs</h2>
            <ol className="flow">
              {FLOW.map((f, i) => (
                <li className="flow-step" key={i}>
                  <span className="flow-label">{f.label}</span>
                  <span className="flow-value">{f.value}</span>
                </li>
              ))}
            </ol>
            <p className="flow-note">
              Zéro stress, zéro perte de temps : vous touchez les gains pendant que nos experts
              travaillent pour vous. Prêt à passer au niveau supérieur ? Contactez-nous
              dès maintenant&nbsp;! 🚀
            </p>
            <CtaButtons />
          </section>

          <section className="section" id="conditions">
            <SectionLabel>Tarifs</SectionLabel>
            <h2>Conditions de la gestion de compte 1xBet</h2>
            <p className="options-hint">
              Recharge le dépôt correspondant à l’objectif choisi, on booste ton compte au
              montant visé. <span aria-hidden="true">←</span> Fais glisser pour tout voir{' '}
              <span aria-hidden="true">→</span>
            </p>
            <div className="options">
              {OPTIONS.map((option) => (
                <OptionCard key={option.title} option={option} />
              ))}
            </div>
            <p className="note-line">La commission, seulement si vous gagnez</p>
            <div className="commission">
              <h3 className="commission-title">Commission 25&nbsp;%</h3>
              <p>
                Nous demandons une commission de <strong>25 %</strong> sur votre gain,
                uniquement à la fin du processus de <strong>boostage</strong>.
              </p>
            </div>
            <div className="note-box">
              <p>
                <strong>NB :</strong> Si vous pensez que je pourrais effectuer un retrait
                simplement en utilisant les coordonnées que vous m’envoyez, je dois vous
                informer que cela est impossible. Pour chaque retrait, un code de validation
                est nécessaire et il doit être envoyé sur votre <strong>carte SIM</strong>{' '}
                avant que je ne puisse retirer vos gains. Par conséquent, il est impossible de
                procéder sans cette étape de vérification. Je ne suis intéressé que par des
                personnes sérieuses et honnêtes.{' '}
                <a className="mention" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                  {TELEGRAM_TEXT}
                </a>
              </p>
            </div>
            <CtaButtons />
          </section>

          <section className="section" id="retrait">
            <SectionLabel>Guide express</SectionLabel>
            <h2>Comment retirer les gains du compte&nbsp;?</h2>
            <p className="lead-in">C’est toujours la même démarche&nbsp;:</p>
            <ol className="withdraw-steps">
              <li>{WITHDRAW_STEPS[0]}</li>
            </ol>
            <img
              className="lead-img lead-img--wide"
              src="/images/retrait.png"
              alt="1xBet — retirer des fonds (solde et méthodes)"
              width="1024"
              height="569"
              loading="lazy"
            />
            <ol className="withdraw-steps" start={2}>
              {WITHDRAW_STEPS.slice(1).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="contact-line">
              Pour nous contacter, écrivez-nous sur{' '}
              <a className="contact-tg" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>{' '}
              ({TELEGRAM_TEXT}) ou appelez-nous au{' '}
              <a className="contact-phone" href={PHONE_HREF}>{PHONE}</a>.
            </p>
          </section>

          <section className="section" id="preuves">
            <SectionLabel>Ils gagnent déjà</SectionLabel>
            <h2>Voici quelques preuves de la gestion de compte 1xBet</h2>
            <ProofsCarousel />
          </section>

          <section className="section section--cta">
            <p className="big-line">
              Zéro stress. Zéro analyse. Plus de perte de temps. Vous dormez, vous travaillez,
              vous vivez… et votre compte grossit tout seul.
            </p>
            <p>
              Des milliers de joueurs en Afrique gagnent déjà tous les jours grâce à nous. Et
              vous, quand est-ce que vous passez enfin du côté des gagnants&nbsp;?
            </p>
            <p>
              Écrivez-nous maintenant en MP avec « <strong>GESTION COMPTE</strong> » et on vous
              explique tout en 2 minutes. Places limitées, premiers arrivés, premiers servis.
            </p>
            <p className="big-line big-line--accent">Votre premier million n’a jamais été aussi proche. 🚀</p>
            <p className="promo-line">
              Nouveaux venus&nbsp;: utilisez le code promo <strong>AMES1X</strong> à
              l’inscription sur le bookmaker.
            </p>
            <CtaButtons />
          </section>
        </div>
      </main>

      <Footer />
      <BottomCta />
    </div>
  )
}