export const TELEGRAM = 'https://t.me/pronosfifa_bet'
export const TELEGRAM_TEXT = '@pronosfifa_bet'
export const PHONE = '+1 (971) 865-9629'
export const PHONE_HREF = 'tel:+19718659629'
export const WHATSAPP = 'https://wa.me/19718659629'

export default function CtaButtons({ secondary = false }) {
  return (
    <div className="cta-row">
      <a className="btn btn--gold" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Rejoindre le VIP
      </a>
      {secondary && (
        <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      )}
    </div>
  )
}