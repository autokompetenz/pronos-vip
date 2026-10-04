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

export default function GestionCompte() {
  useEffect(() => {
    document.title = 'Gestion de compte 1xBet — COMPTE 1XBET RUSSE'
  }, [])

  return (
    <>
      <section className="section-pad page-hero">
        <div className="container">
          <Reveal>
            <SectionHead
              as="h1"
              eyebrow="Le service"
              title="Gestion de compte 1xBet"
              sub="Vous nous confiez votre compte 1xBet : nos experts sélectionnent les paris, placent au bon moment et suivent chaque résultat. La commission ne s’applique que si vous gagnez."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="cta-row section-cta">
              <CtaButtons secondary />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="service">
        <div className="container">
          <Reveal>
            <SectionHead
              num="01"
              eyebrow="Pourquoi nous"
              title="La gestion de compte 1xBet, concrètement"
              sub="Vous nous confiez votre compte 1xBet. Nos experts sélectionnent les paris, placent au bon moment et suivent chaque résultat."
            />
          </Reveal>
          <ul className="cards">
            {BENEFITS.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 70}>
                <div className="benefit">
                  <span className="benefit-icon" aria-hidden="true">{b.icon}</span>
                  <div className="benefit-top">
                    <h3 className="benefit-title">{b.title}</h3>
                    <span className="benefit-index">{b.index}</span>
                  </div>
                  <p className="benefit-text">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={160}>
            <div className="cta-row section-cta">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="marche">
        <div className="container">
          <Reveal>
            <SectionHead
              num="02"
              eyebrow="Comment ça marche"
              title="Le processus en 5 étapes"
              sub="De votre dépôt jusqu’à l’encaissement, chaque étape est claire, suivie et sans stress."
            />
          </Reveal>
          <ol className="timeline">
            {STEPS.map((s, i) => (
              <Reveal as="li" className="timeline-row" key={s.title} delay={i * 80}>
                <span className="timeline-stone" aria-hidden="true">{s.icon}</span>
                <div className="timeline-card">
                  <span className="timeline-chip">STEP {fmt(i + 1)}</span>
                  <h3 className="timeline-title">{s.title}</h3>
                  <p className="timeline-text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={100}>
            <div className="scene-duo">
              <div className="split-card">
                <h3>Vous gardez la maîtrise</h3>
                <p>
                  Vous suivez l’évolution du compte à chaque résultat, informé immédiatement dès
                  que le retrait devient possible.
                </p>
              </div>
              <img
                className="lead-img"
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

      <section className="section-pad section--alt" id="exemple">
        <div className="container">
          <Reveal>
            <SectionHead
              num="03"
              eyebrow="Un cas réel"
              title="Exemple concret pour les parieurs"
              sub="Simulation d’un accompagnement : départ 50 000 FCFA, objectif 3 000 000 FCFA."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="flow-card">
              {FLOW.map((f, i) => (
                <div className="flow-row" key={f.label}>
                  <span className="flow-num">{i + 1}</span>
                  <span className="flow-label">{f.label}</span>
                  <span
                    className={
                      i === FLOW.length - 1 ? 'flow-value flow-value--net' : 'flow-value'
                    }
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="flow-note">
              Zéro stress : vous suivez l’évolution, nos experts travaillent, vous encaissez.
            </p>
            <p className="flow-sim">
              Simulation illustrative : les résultats réels varient selon les marchés et les
              cotes.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="cta-row">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="conditions">
        <div className="container">
          <Reveal>
            <SectionHead
              num="04"
              eyebrow="Tarifs"
              title="Conditions de la gestion de compte 1xBet"
              sub="Choisissez votre objectif. La commission ne s’applique que si vous gagnez."
            />
          </Reveal>
          <Reveal delay={80}>
            <OptionsCarousel />
          </Reveal>
          <p className="note-line">La commission, seulement si vous gagnez</p>
          <Reveal delay={60}>
            <div className="commission">
              <h3 className="commission-title">Commission 25&nbsp;%</h3>
              <p>Uniquement selon les bénéfices réalisés et les conditions du service.</p>
            </div>
          </Reveal>
          <h3 className="sub-title">Sécurité &amp; vérification</h3>
          <div className="secure-grid">
            {SECURITY.map((s, i) => (
              <Reveal as="div" className="secure-item" key={s.title} delay={i * 70}>
                <span className="secure-icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={90}>
            <p className="secure-note">
              Chaque retrait est soumis à une validation de sécurité. Nous ne travaillons
              qu’avec des personnes sérieuses —{' '}
              <a className="mention" href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="retrait">
        <div className="container">
          <Reveal>
            <SectionHead
              num="05"
              eyebrow="Guide express"
              title="Comment retirer les gains du compte&nbsp;?"
              sub="Rapide et sécurisé : encaissez en 5 à 10 minutes via Mobile Money ou crypto."
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="scene-duo">
              <ol className="list-card">
                {WITHDRAW_STEPS.map((step, i) => (
                  <li className="list-row" key={i}>
                    <span className="list-num">{i + 1}</span>
                    <p>{step}</p>
                  </li>
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
          </Reveal>
          <Reveal delay={120}>
            <p className="contact-line">
              Une question ? Écrivez-nous sur{' '}
              <a className="contact-tg" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>{' '}
              ({TELEGRAM_TEXT}) ou appelez-nous au{' '}
              <a className="contact-phone" href={PHONE_HREF}>{PHONE}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" id="preuves">
        <div className="container">
          <Reveal>
            <SectionHead
              num="06"
              eyebrow="Ils gagnent déjà"
              title="Voici quelques preuves de la gestion de compte 1xBet"
              sub="Des comptes 1xBet réellement accompagnés par nos experts."
            />
          </Reveal>
          <Reveal delay={80}>
            <ProofsCarousel />
          </Reveal>
          <Reveal delay={100}>
            <p className="carousel-note">
              Les captures présentées sont fournies à titre illustratif. Les performances
              passées ne garantissent pas les résultats futurs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section--alt" id="faq">
        <div className="container">
          <Reveal>
            <SectionHead
              num="07"
              eyebrow="FAQ"
              title="Questions fréquentes"
              sub="Tout ce qu’il faut savoir avant de commencer."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="faq">
              {FAQ.map((item, i) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    <span className="faq-num" aria-hidden="true">{fmt(i + 1)}</span>
                    <span className="faq-q">{item.q}</span>
                    <span className="faq-plus" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-body">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="faq-more">
              <h3>Encore une question ?</h3>
              <p>Écrivez-nous sur Telegram ou WhatsApp, on vous répond rapidement.</p>
              <div className="cta-row">
                <a className="btn btn--gold" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
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
