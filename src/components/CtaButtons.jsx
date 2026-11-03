export const TELEGRAM = 'https://t.me/pronosfifa_bet'
export const TELEGRAM_TEXT = '@pronosfifa_bet'
export const PHONE = '+1 (971) 865-9629'
export const PHONE_HREF = 'tel:+19718659629'
export const WHATSAPP = 'https://wa.me/19718659629'

export default function CtaButtons({ secondary = false }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        className="btn btn--primary w-full px-6 sm:w-auto"
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        Rejoindre le VIP
        <span aria-hidden="true">→</span>
      </a>
      {secondary && (
        <a
          className="btn btn--ghost w-full px-6 sm:w-auto"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      )}
    </div>
  )
}
