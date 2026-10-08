import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BottomCta from './components/BottomCta.jsx'
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
      <div className="page" id="top">
        <div className="progress" ref={progressRef} aria-hidden="true" />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gestion-de-compte" element={<GestionCompte />} />
            <Route path="/compte-russe" element={<CompteRusse />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <BottomCta />
      </div>
    </BrowserRouter>
  )
}
