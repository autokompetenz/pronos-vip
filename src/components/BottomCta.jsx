import { TELEGRAM } from './CtaButtons.jsx'

export default function BottomCta() {
  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 px-3 pt-3 pb-safe shadow-[0_-8px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-md sm:hidden"
      aria-label="Contact rapide"
    >
      <a
        className="btn btn--primary w-full"
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        Rejoindre le VIP
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  )
}
