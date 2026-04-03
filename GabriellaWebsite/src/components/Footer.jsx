import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src="/logo.png" alt="Campaign Logo" className="h-20 w-auto mb-4 brightness-200" />
            <p className="font-hand text-xl text-white/30 leading-relaxed max-w-xs">
              A volunteer educator and community organizer building a better Santa Cruz for everyone.
            </p>
            <div className="flex items-center gap-2 mt-4 text-white/20 text-sm font-semibold uppercase tracking-wider">
              <MapPin size={13} /> Santa Cruz, California
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/15 mb-5">Pages</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/about', label: 'About Gabriella' },
                { to: '/housing-policies', label: 'Housing Policies' },
                { to: '/surveillance-policies', label: 'Tech Policy' },
                { to: '/get-involved', label: 'Get Involved' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-white/30 hover:text-orange-light transition-colors text-sm font-medium uppercase tracking-wider no-underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/15 mb-5">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:gabriella4citycouncil@gmail.com" className="flex items-center gap-2.5 text-white/30 hover:text-orange-light transition-colors text-sm no-underline">
                <Mail size={15} /> gabriella4citycouncil@gmail.com
              </a>
              <a
                href="https://www.instagram.com/gabriella4citycouncil?igsh=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/30 hover:text-orange-light transition-colors text-sm no-underline"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @gabriella4citycouncil
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 text-center text-white/15 text-xs uppercase tracking-widest">
          Paid for by Gabriella Noack for City Council 2024
        </div>
      </div>
    </footer>
  )
}
