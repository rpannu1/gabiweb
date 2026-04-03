import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Surveillance from './pages/Surveillance'
import GetInvolved from './pages/GetInvolved'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-warm-bg text-ink">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing-policies" element={<Housing />} />
          <Route path="/surveillance-policies" element={<Surveillance />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
