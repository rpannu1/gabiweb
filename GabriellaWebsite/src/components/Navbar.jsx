import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/housing-policies', label: 'Housing' },
  { to: '/surveillance-policies', label: 'Tech Policy' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-paper/95 backdrop-blur-md shadow-sm shadow-ink/5' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="no-underline flex items-center gap-3">
          <img src="/logo.png" alt="Campaign" className="h-11 md:h-14 w-auto" />
          <span className="font-display text-xl tracking-wide uppercase text-ink hidden sm:block">Gabriella</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-4 py-2 text-[14px] font-semibold uppercase tracking-wider transition-colors no-underline ${
                location.pathname === to
                  ? 'text-orange'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {label}
              {location.pathname === to && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-2 right-2 h-[3px] bg-orange rounded-full"
                  style={{ transform: 'rotate(-1deg)' }}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="ml-4 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-orange hover:bg-orange-dark transition-colors no-underline transform -rotate-1 hover:rotate-0"
          >
            Join Us
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink-soft hover:text-ink transition-colors bg-transparent border-none cursor-pointer"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-paper/98 backdrop-blur-xl border-t border-ink/5 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-base font-bold uppercase tracking-wider no-underline ${
                    location.pathname === to ? 'text-orange bg-orange/5' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
