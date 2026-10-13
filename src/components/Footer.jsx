import { Link } from 'react-router-dom'
import { TELEGRAM, TELEGRAM_TEXT, PHONE, PHONE_HREF } from './CtaButtons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-base font-black tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M10 6l6 6-6 6 1.5 1.5L19 12l-7.5-7.5L10 6zm-6 0l6 6-6 6L5.5 19 13 12 5.5 4.5 4 6z" />
                </svg>
              </span>
              COMPTE <span className="text-brand">1XBET RUSSE</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Analyses sportives et accompagnement VIP pour gérer votre expérience de pari, dans la
              transparence et le respect des règles du jeu.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Navigation</h4>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Pied de page">
              <Link className="text-sm text-slate-600 hover:text-brand" to="/">Accueil</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/accueil">Présentation</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/gestion-de-compte">Gestion de compte</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/gestion-de-compte#marche">Comment ça marche</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/gestion-de-compte#conditions">Tarifs</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/gestion-de-compte#preuves">Résultats</Link>
              <Link className="text-sm text-slate-600 hover:text-brand" to="/gestion-de-compte#faq">FAQ</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Contact</h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Telegram&nbsp;:{' '}
              <a className="link" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                {TELEGRAM_TEXT}
              </a>
              <br />
              Tél.&nbsp;:{' '}
              <a className="link" href={PHONE_HREF}>
                {PHONE}
              </a>
              <br />
              Code promo&nbsp;: <strong className="text-slate-900">AMES1X</strong>
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
              <li>Mentions légales</li>
              <li>Confidentialité</li>
              <li>Conditions</li>
              <li>Jeu responsable</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            18+ · Jouez responsable. Les paris sportifs comportent des risques et peuvent mener à
            l’addiction. Les performances passées ne garantissent pas les résultats futurs.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Copyright © 2026 <Link className="hover:text-brand" to="/">COMPTE 1XBET RUSSE</Link>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
