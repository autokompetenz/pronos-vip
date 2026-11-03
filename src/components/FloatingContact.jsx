import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TELEGRAM, WHATSAPP } from './CtaButtons.jsx'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.91 3.79 20.3 20.84c-.25 1.21-.98 1.5-1.96.94l-5.4-3.98-2.6 2.5c-.29.29-.53.53-1.08.53l.38-5.44 9.9-8.94c.43-.38-.1-.59-.66-.21L7.08 13.4 1.7 11.72c-1.17-.36-1.19-1.17.24-1.73L22.45 2.07c.98-.36 1.83.21 1.46 1.72Z" />
    </svg>
  )
}

function ChatIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

const CONTACTS = [
  {
    label: 'WhatsApp',
    href: WHATSAPP,
    iconClass: 'bg-[#25D366]',
    Icon: WhatsAppIcon,
  },
  {
    label: 'Telegram',
    href: TELEGRAM,
    iconClass: 'bg-[#229ED9]',
    Icon: TelegramIcon,
  },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()

  // Referme le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="fixed right-3 bottom-[calc(5.5rem_+_env(safe-area-inset-bottom,0px))] z-50 flex flex-col items-end gap-3 print:hidden sm:right-6 sm:bottom-6"
    >
      <div
        id="floating-contacts"
        aria-hidden={!open}
        className={`flex flex-col items-end gap-2 transition-all duration-200 ease-out motion-reduce:transition-none ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        {CONTACTS.map(({ label, href, iconClass, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="group flex items-center gap-3 rounded-full bg-white py-1.5 pl-4 pr-1.5 shadow-lg ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="text-sm font-bold text-slate-700">{label}</span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-transform duration-200 group-hover:scale-105 ${iconClass}`}
            >
              <Icon className="h-5 w-5" />
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="floating-contacts"
        aria-label={open ? 'Fermer les contacts rapides' : 'Ouvrir les contacts rapides'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 ring-4 ring-white/70 transition duration-200 hover:scale-105 hover:bg-brand-hover active:scale-95"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <ChatIcon
            className={`absolute h-6 w-6 transition-all duration-200 motion-reduce:transition-none ${
              open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <CloseIcon
            className={`absolute h-5 w-5 transition-all duration-200 motion-reduce:transition-none ${
              open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </span>
      </button>
    </div>
  )
}
