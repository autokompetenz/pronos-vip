import { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BottomCta from './components/BottomCta.jsx'
import ProofsCarousel from './components/ProofsCarousel.jsx'
import CtaButtons, {
  TELEGRAM,
  TELEGRAM_TEXT,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from './components/CtaButtons.jsx'
import Carousel from './components/Carousel.jsx'

const BOOKS = ['1xBet', '1Win', 'Melbet', 'Linebet', 'Winamax', 'Betclic', 'Unibet', 'Bwin']

const TRUST = [
  { big: '10 000 F', small: 'pour démarrer' },
  { big: '25 %', small: 'de commission que si gain' },
  { big: '5–10 min', small: 'retrait Mobile Money' },
]

const SOLUTION = [
  'Gestion du compte',
  'Sélection des paris',
  'Suivi des résultats',
  'Assistance',
]

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
  <>
    Vous choisissez votre objectif et déposez le montant de départ, à partir de{' '}
    <strong>10 000 FCFA</strong>.
  </>,
  <>
    Nos traders sélectionnent les paris et opèrent selon le fonctionnement du service — même en
    direct.
  </>,
  <>Vous suivez l’évolution du compte à chaque résultat.</>,
  <>Vous êtes informé immédiatement dès que le retrait devient possible.</>,
  <>
    La commission de <strong>25 %</strong> ne s’applique que sur les bénéfices réalisés.
  </>,
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
    <div className={option.popular ? 'pricing pricing--popular' : 'pricing'}>
      {option.popular && <span className="pricing-badge">Le plus choisi</span>}
      <p className="pricing-label">{option.title}</p>
      <p className="pricing-target">{option.target}</p>
      <p className="pricing-deposit">
        <strong>{option.deposit}</strong> de dépôt seulement
      </p>
      <a className="pricing-cta" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Choisir
      </a>
    </div>
  )
}

function OptionsCarousel() {
  return (
    <Carousel
      label="Offres de gestion de compte 1xBet"
      slides={OPTIONS.map((option) => (
        <OptionCard key={option.title} option={option} />
      ))}
    />
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
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      if (progressRef.current) {
        progressRef.current.style.transform =
          max > 0 ? `scaleX(${el.scrollTop / max})` : 'scaleX(0)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page" id="top">
      <div className="progress" ref={progressRef} aria-hidden="true" />
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
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-kicker">Gestion de compte 1xBet</p>
                <h1 className="hero-title">
                  Les pronostics qui<span className="hero-title-accent"> font la différence</span>
                </h1>
                <p className="hero-sub">
                  Nos experts analysent les cotes, placent les paris et font grimper votre compte
                  1xBet. Vous encaissez, en toute simplicité.
                </p>
                <ul className="trust">
                  {TRUST.map((item) => (
                    <li key={item.big} className="trust-item">
                      <span className="trust-big">{item.big}</span>
                      <span className="trust-small">{item.small}</span>
                    </li>
                  ))}
                </ul>
                <CtaButtons secondary />
              </div>

              <div className="hero-panel">
                <div className="prono-card">
                  <span className="prono-tag">Aperçu</span>
                  <p className="prono-compet">Ligue des Champions</p>
                  <div className="prono-match">
                    <span className="prono-team">PSG</span>
                    <span className="prono-vs">VS</span>
                    <span className="prono-team">Real Madrid</span>
                  </div>
                  <p className="prono-pick">
                    <span className="prono-pick-label">Pronostic</span>
                    <span className="prono-pick-value">Les deux équipes marquent</span>
                  </p>
                  <p className="prono-pick prono-cote">
                    <span className="prono-pick-label">Cote</span>
                    <span className="prono-pick-value">
                      <span>1,85</span>
                    </span>
                  </p>
                  <div className="prono-conf">
                    <div className="prono-conf-row">
                      <span>Confiance</span>
                      <span className="prono-conf-level">Élevée</span>
                    </div>
                    <div className="prono-bar" role="presentation">
                      <div className="prono-bar-fill" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="prono-foot">
                    <span>Exemple fourni par nos experts</span>
                    <strong>VIP · AMES1X</strong>
                  </div>
                </div>
              </div>
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
          <section className="section intro" id="probleme">
            <div className="prob-sol">
              <div className="prob-card">
                <SectionLabel>Le problème</SectionLabel>
                <h2>Vous pariez. Vous perdez. Vous recommencez.</h2>
                <p>
                  Des mises répétées, des cotes mal choisies, des résultats qui ne suivent pas.
                  C’est le quotidien de trop de parieurs.
                </p>
              </div>
              <div className="sol-card">
                <SectionLabel mode="light">Notre solution</SectionLabel>
                <ul className="solution-list">
                  {SOLUTION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="service">
            <SectionLabel>Pourquoi nous</SectionLabel>
            <h2>La gestion de compte 1xBet, concrètement</h2>
            <p>
              Vous nous confiez votre compte 1xBet. Nos experts sélectionnent les paris, placent
              au bon moment et suivent chaque résultat.
            </p>
            <ul className="benefits">
              {BENEFITS.map((b) => (
                <li key={b.title} className="benefit">
                  <span className="benefit-icon" aria-hidden="true">{b.icon}</span>
                  <span className="benefit-index">{b.index}</span>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-text">{b.text}</p>
                </li>
              ))}
            </ul>
            <CtaButtons />
          </section>

          <section className="section section--dark" id="marche">
            <SectionLabel mode="light">Comment ça marche</SectionLabel>
            <h2>Le processus en 5 étapes</h2>
            <div className="scene-duo">
              <ol className="steps">
                {STEPS.map((step, i) => (
                  <li className="step" data-n={i + 1} key={i}>{step}</li>
                ))}
              </ol>
              <img
                className="lead-img"
                src="/images/deposit-app.webp"
                alt="la gestion de compte 1xbet — dépôt depuis l’application"
                width="1280"
                height="901"
                loading="lazy"
              />
            </div>
          </section>

          <section className="section" id="exemple">
            <SectionLabel>Un cas réel</SectionLabel>
            <h2>Exemple concret pour les parieurs</h2>
            <ol className="flow">
              {FLOW.map((f, i) => (
                <li className="flow-step" data-i={i + 1} key={i}>
                  <span className="flow-label">{f.label}</span>
                  <span className="flow-value">{f.value}</span>
                </li>
              ))}
            </ol>
            <p className="flow-sim">
              Simulation illustrative — les résultats réels varient selon les marchés et les
              cotes.
            </p>
            <p className="flow-note">
              Zéro stress : vous suivez l’évolution, nos experts travaillent, vous encaissez.
            </p>
            <CtaButtons />
          </section>

          <section className="section" id="conditions">
            <SectionLabel>Tarifs</SectionLabel>
            <h2>Conditions de la gestion de compte 1xBet</h2>
            <OptionsCarousel />
            <p className="note-line">La commission, seulement si vous gagnez</p>
            <div className="commission">
              <h3 className="commission-title">Commission 25&nbsp;%</h3>
              <p>Uniquement selon les bénéfices réalisés et les conditions du service.</p>
            </div>
            <h3 className="sub-title">Sécurité &amp; vérification</h3>
            <div className="secure-grid">
              {SECURITY.map((s) => (
                <div className="secure-item" key={s.title}>
                  <span className="secure-icon" aria-hidden="true">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <p className="secure-note">
              Chaque retrait est soumis à une validation de sécurité. Nous ne travaillons
              qu’avec des personnes sérieuses —{' '}
              <a className="mention" href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>.
            </p>
          </section>

          <section className="section" id="retrait">
            <SectionLabel>Guide express</SectionLabel>
            <h2>Comment retirer les gains du compte&nbsp;?</h2>
            <div className="scene-duo">
              <ol className="steps">
                {WITHDRAW_STEPS.map((step, i) => (
                  <li className="step" data-n={i + 1} key={i}>{step}</li>
                ))}
              </ol>
              <img
                className="lead-img"
                src="/images/retrait.jpg"
                alt="1xBet — retirer des fonds (solde et méthodes)"
                width="1024"
                height="569"
                loading="lazy"
              />
            </div>
            <p className="contact-line">
              Une question ? Écrivez-nous sur{' '}
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
            <p className="carousel-note">
              Les captures présentées sont fournies à titre illustratif. Les performances passées
              ne garantissent pas les résultats futurs.
            </p>
          </section>

          <section className="section" id="faq">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Questions fréquentes</h2>
            <div className="faq">
              {FAQ.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p className="faq-body">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="section section--cta">
            <p className="big-line">Prêt à commencer ?</p>
            <p>Découvrez notre fonctionnement, choisissez votre formule et rejoignez le VIP.</p>
            <div className="cta-row">
              <a className="btn btn--gold" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                Rejoindre sur Telegram
              </a>
              <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            <p className="promo-line">
              Code promo <strong>AMES1X</strong> à l’inscription sur le bookmaker.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <BottomCta />
    </div>
  )
}