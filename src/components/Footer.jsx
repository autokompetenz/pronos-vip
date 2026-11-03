import { Link } from 'react-router-dom'
import { TELEGRAM, TELEGRAM_TEXT, PHONE, PHONE_HREF } from './CtaButtons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          <div>
            <p className="flex items-center gap-2 text-base font-black tracking-tight text-slate-900">
              <img
                src="/images/logo-vip.svg"
                alt=""
                width="32"
                height="32"
                className="h-8 w-8 rounded-lg"
              />
              COMPTE <span className="text-brand-dark">1XBET RUSSE</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Analyses sportives et accompagnement VIP pour gérer votre expérience de pari, dans la
              transparence et le respect des règles du jeu.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Assistance 7j/7
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Navigation</h3>
            <nav
              className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:flex sm:flex-col sm:gap-1"
              aria-label="Pied de page"
            >
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/">Accueil</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/accueil">Présentation</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/gestion-de-compte">Gestion de compte</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/gestion-de-compte#marche">Comment ça marche</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/gestion-de-compte#conditions">Tarifs</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/gestion-de-compte#preuves">Résultats</Link>
              <Link className="inline-flex min-h-[36px] items-center text-sm text-slate-600 hover:text-brand-dark" to="/gestion-de-compte#faq">FAQ</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Contact</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500 sm:text-xs">
              <li>Mentions légales</li>
              <li aria-hidden="true">·</li>
              <li>Confidentialité</li>
              <li aria-hidden="true">·</li>
              <li>Conditions</li>
              <li aria-hidden="true">·</li>
              <li>Jeu responsable</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 sm:mt-10 sm:pt-6">
          <p className="text-[11px] leading-relaxed text-slate-500 sm:text-xs">
            18+ · Jouez responsable. Les paris sportifs comportent des risques et peuvent mener à
            l’addiction. Les performances passées ne garantissent pas les résultats futurs.
          </p>
          <p className="mt-2 text-[11px] text-slate-500 sm:text-xs">
            Copyright © 2026 <Link className="font-semibold hover:text-brand-dark" to="/">COMPTE 1XBET RUSSE</Link>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
