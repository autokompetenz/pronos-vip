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

const SOLUTION = [
  'Gestion du compte',
  'Sélection des paris',
  'Suivi des résultats',
  'Assistance',
]

export default function Home() {
  useEffect(() => {
    document.title = 'COMPTE 1XBET RUSSE — Gestion de compte 1xBet : Comment faire ?'
  }, [])

  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-inner">
          <p className="hero-eyebrow">Gestion de compte 1xBet</p>
          <h1 className="hero-title">
            Les pronostics qui
            <span className="hero-title-accent"> font la différence</span>
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
      </section>

      <div className="container">
        <Reveal className="hero-card-wrap">
          <div className="hero-card">
            <div className="pc-match">
              <span className="pc-tag">Exemple offert</span>
              <p className="pc-compet">
                Ligue des Champions
                <span className="pc-live" aria-hidden="true">
                  <span className="pc-live-dot" />
                  EN DIRECT
                </span>
              </p>
              <p className="pc-matchline">
                <span className="pc-team">PSG</span>
                <span className="pc-vs">VS</span>
                <span className="pc-team">Real Madrid</span>
              </p>
            </div>
            <div className="pc-side">
              <div className="pc-meta">
                <div className="pc-cell">
                  <span className="pc-label">Pronostic</span>
                  <span className="pc-value">Les deux équipes marquent</span>
                </div>
                <div className="pc-cell">
                  <span className="pc-label">Cote</span>
                  <span className="pc-value pc-value--cote">1,85</span>
                </div>
                <div className="pc-cell">
                  <span className="pc-label">Confiance</span>
                  <span className="pc-level">Élevée</span>
                  <div className="pc-bar" role="presentation">
                    <div className="pc-bar-fill" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
              <div className="pc-foot">
                <small>Exemple fourni par nos experts</small>
                <strong>VIP · AMES1X</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span className="marquee-tick" key={k}>
              <span className="marquee-label">Bookmakers</span>
              {BOOKS.map((book) => (
                <span className="marquee-item" key={book}>
                  <span className="marquee-dot" /> {book}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="section-pad" id="probleme">
        <div className="container">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Le constat"
              title="Vous pariez. Vous perdez. Vous recommencez."
              sub="Des mises répétées, des cotes mal choisies, des résultats qui ne suivent pas — c’est le quotidien de trop de parieurs."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="split">
              <div className="split-card">
                <h3>Le problème</h3>
                <p>
                  Des mises répétées, des cotes mal choisies, des résultats qui ne suivent pas.
                  Le budget et la motivation s’épuisent, sans stratégie ni suivi.
                </p>
              </div>
              <div className="split-card sol-card">
                <h3>Notre solution</h3>
                <ul className="solution-list">
                  {SOLUTION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="cta-row section-cta">
              <Link className="btn btn--gold" to="/gestion-de-compte">
                Découvrir la gestion de compte
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="contact">
        <div className="container">
          <div className="cta-final">
            <div className="cta-copy">
              <Reveal>
                <h2>Prêt à commencer ?</h2>
                <p>
                  Découvrez notre fonctionnement, choisissez votre formule et rejoignez le VIP.
                  La commission ne s’applique que si vous gagnez.
                </p>
              </Reveal>
              <Reveal delay={90}>
                <div className="cta-row">
                  <a className="btn btn--gold" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                    Rejoindre sur Telegram
                  </a>
                  <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="promo-line">
                  Code promo <strong>AMES1X</strong> à l’inscription sur le bookmaker.
                </p>
              </Reveal>
            </div>
            <Reveal delay={140} className="cta-card">
              <p className="cta-card-eyebrow">Code promo</p>
              <p className="cta-code">AMES1X</p>
              <div className="cta-card-row">
                <span>Telegram</span>
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>
              </div>
              <div className="cta-card-row">
                <span>WhatsApp</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Ouvrir le chat</a>
              </div>
              <div className="cta-card-row">
                <span>Téléphone</span>
                <a href={PHONE_HREF}>{PHONE}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
