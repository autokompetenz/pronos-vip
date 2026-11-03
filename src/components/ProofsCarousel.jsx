import Carousel from './Carousel.jsx'

const PROOFS = [
  {
    src: '/images/preuve-1.jpg',
    w: '482',
    h: '1024',
    label: 'Solde en progression',
    alt: 'preuve de gains — solde du compte en croissance',
  },
  {
    src: '/images/preuve-2.jpg',
    w: '150',
    h: '150',
    label: 'Accord de gestion',
    alt: 'preuve de gains — confirmation d’accord de gestion',
  },
  {
    src: '/images/preuve-3.jpg',
    w: '150',
    h: '150',
    label: 'Échange client',
    alt: 'preuve de gains — échange avec un membre',
  },
  {
    src: '/images/preuve-4.webp',
    w: '1024',
    h: '700',
    label: 'Retrait effectué',
    alt: 'preuve de gains — retrait effectué sur le compte',
  },
]

export default function ProofsCarousel() {
  return (
    <Carousel
      label="Preuves de gains de la gestion de compte 1xBet"
      auto
      slides={PROOFS.map(({ src, w, h, alt, label }, i) => (
        <figure
          key={src}
          className="relative h-72 w-52 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft sm:w-60"
        >
          <img
            className="h-full w-full object-contain p-1.5"
            src={src}
            alt={alt}
            width={w}
            height={h}
            loading="lazy"
            decoding="async"
            onDragStart={(e) => e.preventDefault()}
          />
          <figcaption className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 rounded-xl bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm">
            <span className="truncate">{label}</span>
            <span className="text-white/70">{String(i + 1).padStart(2, '0')}</span>
          </figcaption>
        </figure>
      ))}
    />
  )
}
