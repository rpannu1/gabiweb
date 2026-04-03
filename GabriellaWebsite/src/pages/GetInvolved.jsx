import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const actions = [
  {
    title: 'Send me updates',
    desc: 'Stay in the loop with campaign news, events, and policy updates.',
    cta: 'Sign Up',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdX6Ti6leShk-A_qz8cRQuwRaoWnhpHyFUDO-x8nML-EZMX1A/viewform',
    icon: '📬',
    rotate: '-rotate-1',
  },
  {
    title: 'Sign up to canvas',
    desc: 'Hit the streets and help spread the word to your neighbors in District 6.',
    cta: 'Volunteer',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSePNMyK3Z2Bc4r37VUa38oqxcB9SL9zsXukJbkqnNOlmhxCjw/viewform',
    icon: '🚪',
    rotate: 'rotate-[0.5deg]',
  },
  {
    title: 'Join our campaign Team',
    desc: 'Become a core team member and help build the future of District 6.',
    cta: 'Join Us',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeubete2vtZqVAYW1MSYVDbaX1CvXpeYAVXmmQNuqhDNWS0Xg/viewform',
    icon: '✊',
    rotate: '-rotate-[0.5deg]',
  },
]

export default function GetInvolvedPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-orange overflow-hidden">
        <div className="absolute top-[15%] right-[8%] font-hand text-white/8 text-[100px] select-none rotate-12">!</div>
        <div className="absolute bottom-[10%] left-[3%] w-24 h-24 border-2 border-dashed border-white/10 rounded-full" style={{ animation: 'wiggle 8s ease-in-out infinite' }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-none uppercase tracking-tight mb-4">
              Want to get<br />involved?
            </h1>
            <p className="font-hand text-2xl text-white/70 -rotate-1 inline-block">
              Gabriella Noack for City Council · District 6
            </p>
          </motion.div>
        </div>

        {/* Torn edge */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-warm-bg torn-top" />
      </section>

      {/* Action cards */}
      <section className="py-20 md:py-28 px-6 grid-paper">
        <div className="mx-auto max-w-3xl space-y-8">
          {actions.map((action, i) => (
            <motion.a
              key={action.title}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group flex items-center gap-6 p-6 md:p-8 bg-paper border-2 border-ink/8 hover:border-orange hover:shadow-xl hover:shadow-orange/10 transition-all duration-300 no-underline cursor-pointer ${action.rotate} hover:rotate-0`}
            >
              <span className="text-5xl flex-shrink-0">{action.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-orange transition-colors mb-1 uppercase tracking-tight">
                  {action.title}
                </h3>
                <p className="text-ink-soft/60 text-[15px] leading-relaxed">{action.desc}</p>
              </div>
              <ArrowUpRight size={24} className="flex-shrink-0 text-ink/15 group-hover:text-orange transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="px-6 pb-12">
        <a
          href="https://www.instagram.com/gabriella4citycouncil?igsh=NTc4MTIwNjQ2YQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group block mx-auto max-w-3xl p-8 md:p-10 bg-ink text-center no-underline hover:scale-[1.01] transition-transform relative overflow-hidden"
        >
          <div className="absolute top-4 right-6 font-hand text-white/5 text-6xl rotate-12 select-none">*</div>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white" className="mx-auto mb-4 opacity-90"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          <p className="font-display text-3xl md:text-4xl text-white mb-2 uppercase tracking-tight">Follow the campaign</p>
          <p className="font-hand text-xl text-orange -rotate-1">@gabriella4citycouncil</p>
        </a>
      </section>

      {/* Contact */}
      <section className="bg-ink mx-4 md:mx-8 mb-8 md:mb-12 relative overflow-hidden">
        <div className="absolute bottom-4 right-8 font-hand text-white/5 text-7xl select-none -rotate-12">~</div>
        <div className="mx-auto max-w-4xl px-8 py-20 md:py-24 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-2 leading-none uppercase tracking-tight">
              Questions? Ideas?
            </h2>
            <p className="font-hand text-3xl text-orange mb-8 -rotate-1">Let's talk.</p>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
              Gabriella wants to hear from every District 6 resident.
            </p>
            <a
              href="mailto:gabriella4citycouncil@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wider text-sm hover:bg-orange-dark transition-all no-underline hover:scale-105"
            >
              gabriella4citycouncil@gmail.com <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
