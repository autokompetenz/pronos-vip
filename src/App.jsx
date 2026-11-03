import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BottomCta from './components/BottomCta.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import Home from './pages/Home.jsx'
import GestionCompte from './pages/GestionCompte.jsx'
import CompteRusse from './pages/CompteRusse.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])

  return null
}

export default function App() {
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      if (progressRef.current) {
        progressRef.current.style.transform =
          max > 0 ? `scaleX(${el.scrollTop / max})` : 'scaleX(0)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-[100dvh] bg-white pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-0">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-brand-dark focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Aller au contenu
        </a>

        <div
          ref={progressRef}
          className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-brand-dark"
          aria-hidden="true"
        />
        <Header />

        <main id="contenu">
          <Routes>
            <Route path="/" element={<CompteRusse />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/gestion-de-compte" element={<GestionCompte />} />
            <Route path="/compte-russe" element={<Navigate to="/" replace />} />
            <Route path="*" element={<CompteRusse />} />
          </Routes>
        </main>

        <Footer />
        <BottomCta />
        <FloatingContact />
      </div>
    </BrowserRouter>
  )
}
