import { TELEGRAM, TELEGRAM_TEXT, PHONE, PHONE_HREF } from './CtaButtons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <p className="footer-brand">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ color: '#d4af37' }}>
                <path d="M10 6l6 6-6 6 1.5 1.5L19 12l-7.5-7.5L10 6zm-6 0l6 6-6 6L5.5 19 13 12 5.5 4.5 4 6z" />
              </svg>
              PRONOS&nbsp;<em>VIP</em>
            </p>
            <p className="footer-desc">
              Analyses sportives et accompagnement VIP pour gérer votre expérience de pari, dans
              la transparence et le respect des règles du jeu.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <nav className="footnav" aria-label="Pied de page">
              <a href="#accueil">Accueil</a>
              <a href="#marche">Comment ça marche</a>
              <a href="#conditions">Tarifs</a>
              <a href="#preuves">Résultats</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="footer-contact">
              Telegram&nbsp;: <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>
              <br />
              Tél.&nbsp;: <a href={PHONE_HREF}>{PHONE}</a>
              <br />
              Code promo&nbsp;: <strong>AMES1X</strong>
            </p>
            <ul className="footer-legal">
              <li><span>Mentions légales</span></li>
              <li><span>Confidentialité</span></li>
              <li><span>Conditions</span></li>
              <li><span>Jeu responsable</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-sep" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            18+ · Jouez responsable. Les paris sportifs comportent des risques et peuvent mener à
            l’addiction. Les performances passées ne garantissent pas les résultats futurs.
          </p>
          <p className="copyright">
            Copyright © 2026 <a href="#accueil">PRONOS VIP</a>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}