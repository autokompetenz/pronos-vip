import Carousel from './Carousel.jsx'

const PROOFS = [
  {
    src: '/images/preuve-1.jpg',
    w: '482',
    h: '1024',
    alt: 'preuve de gains — solde du compte en croissance',
  },
  {
    src: '/images/preuve-2.jpg',
    w: '150',
    h: '150',
    alt: 'preuve de gains — confirmation d’accord de gestion',
  },
  {
    src: '/images/preuve-3.jpg',
    w: '150',
    h: '150',
    alt: 'preuve de gains — échange avec un membre',
  },
  {
    src: '/images/preuve-4.webp',
    w: '1024',
    h: '700',
    alt: 'preuve de gains — retrait effectué sur le compte',
  },
]

export default function ProofsCarousel() {
  return (
    <Carousel
      label="Preuves de gains de la gestion de compte 1xBet"
      auto
      slides={PROOFS.map(({ src, w, h, alt }) => (
        <img
          key={src}
          className="carousel-img"
          src={src}
          alt={alt}
          width={w}
          height={h}
          loading="lazy"
          onDragStart={(e) => e.preventDefault()}
        />
      ))}
    />
  )
}