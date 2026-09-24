import { TELEGRAM, TELEGRAM_TEXT, PHONE, PHONE_HREF } from './CtaButtons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="copyright">
          Copyright © 2026 <a href="#accueil">PRONOS VIP</a>. Tous droits réservés.
        </p>
        <p className="footer-contact">
          Telegram&nbsp;: <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">{TELEGRAM_TEXT}</a>
          <span aria-hidden="true"> · </span>
          Tél.&nbsp;: <a href={PHONE_HREF}>{PHONE}</a>
          <span aria-hidden="true"> · </span>
          Code promo&nbsp;: <strong>AMES1X</strong>
        </p>
        <nav className="footnav" aria-label="Pied de page">
          <a href="#marche">Comment ça marche</a>
          <a href="#conditions">Conditions</a>
          <a href="#retrait">Retirer les gains</a>
          <a href="#preuves">Preuves</a>
        </nav>
        <p className="footer-disclaimer">
          18+ · Jouez responsable. Les paris sportifs comportent des risques et peuvent
          mener à l’addiction.
        </p>
      </div>
    </footer>
  )
}