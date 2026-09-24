import { TELEGRAM } from './CtaButtons.jsx'

export default function BottomCta() {
  return (
    <aside className="bottom-cta" aria-label="Contact rapide">
      <a className="btn btn--gold bottom-btn" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Rejoindre le VIP
      </a>
    </aside>
  )
}