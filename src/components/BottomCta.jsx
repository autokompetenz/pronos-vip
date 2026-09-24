import { TELEGRAM, PHONE_HREF, PhoneIcon, TelegramIcon } from './CtaButtons.jsx'

export default function BottomCta() {
  return (
    <aside className="bottom-cta" aria-label="Contact rapide">
      <a className="btn btn--tg bottom-btn" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        <span className="btn-icon" aria-hidden="true">
          <TelegramIcon />
        </span>
        <span className="btn-text">Telegram</span>
      </a>
      <a className="btn btn--phone bottom-btn" href={PHONE_HREF} rel="noopener noreferrer">
        <span className="btn-icon" aria-hidden="true">
          <PhoneIcon />
        </span>
        <span className="btn-text">Appeler</span>
      </a>
    </aside>
  )
}