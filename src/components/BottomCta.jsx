import { TELEGRAM } from './CtaButtons.jsx'

export default function BottomCta() {
  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur pb-safe sm:hidden"
      aria-label="Contact rapide"
    >
      <a className="btn btn--primary w-full" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
        Rejoindre le VIP
      </a>
    </aside>
  )
}
