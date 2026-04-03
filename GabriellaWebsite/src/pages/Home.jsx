import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

export default function HomePage() {
  return (
    <PageWrapper>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-cream dot-pattern">
        {/* Scattered doodle elements */}
        <div className="absolute top-[12%] right-[5%] w-32 h-32 border-3 border-dashed border-orange/15 rounded-full" style={{ animation: 'wiggle 10s ease-in-out infinite' }} />
        <div className="absolute bottom-[15%] left-[2%] w-20 h-20 border-2 border-dashed border-sun/20 rounded-full" style={{ animation: 'wiggle 7s ease-in-out infinite 1s' }} />
        <div className="absolute top-[20%] left-[12%] font-hand text-orange/10 text-9xl select-none rotate-12">*</div>
        <div className="absolute bottom-[25%] right-[15%] font-hand text-sun/15 text-7xl select-none -rotate-6">~</div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
            {/* Text side — shows first on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Campaign logo — smaller on mobile, big on desktop */}
              <motion.img
                src="/logo.png"
                alt="Gabriella Noack for District 6"
                className="w-48 md:w-full md:max-w-md mb-6 drop-shadow-md -rotate-1"
                initial={{ opacity: 0, y: 20, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              {/* Handwritten tagline */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-hand text-2xl md:text-3xl text-orange mb-2 -rotate-2 inline-block"
              >
                Meet your neighbor
              </motion.p>

              {/* Big bold name */}
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tight text-ink mb-2">
                Gabriella
                <br />
                <span className="text-orange">Noack</span>
              </h1>

              {/* District badge - sticker style */}
              <div className="inline-block mb-8">
                <span className="sticker text-orange text-lg rotate-2">
                  for District 6 City Council
                </span>
              </div>

              <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-body">
                A volunteer educator and community organizer working to bridge the digital divide.
                Running because District 6 deserves a council member who{' '}
                <span className="marker-highlight font-semibold">actually shows up</span>.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/get-involved"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wider text-sm hover:bg-orange-dark transition-all no-underline transform -rotate-1 hover:rotate-0 hover:scale-105"
                >
                  Get Involved
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-4 font-bold text-ink uppercase tracking-wider text-sm border-3 border-ink hover:bg-ink hover:text-cream transition-all no-underline"
                >
                  About Gabriella
                </Link>
              </div>
            </motion.div>

            {/* Photo side — below text on mobile, right side on desktop */}
            <motion.div
              initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Tape strip on top */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 z-20 rotate-[-3deg]"
                  style={{ background: 'rgba(242, 183, 64, 0.5)', backdropFilter: 'blur(1px)' }}
                />
                {/* Polaroid frame */}
                <div className="polaroid rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-72 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden">
                    <img
                      src="/gabriella.png"
                      alt="Gabriella Noack"
                      className="w-full h-full object-cover object-[30%_top] scale-105 hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Handwritten caption on polaroid */}
                  <p className="font-hand text-xl text-ink-soft text-center mt-2 -rotate-1">
                    Santa Cruz, CA
                  </p>
                </div>

                {/* Floating sticker */}
                <motion.div
                  className="absolute -bottom-6 -left-8 bg-sun text-ink px-5 py-3 font-hand text-xl font-bold -rotate-6 shadow-lg z-20"
                  style={{ animation: 'float 5s ease-in-out infinite' }}
                >
                  District 6!
                </motion.div>

                {/* Small doodle arrow */}
                <svg className="absolute -right-12 top-1/3 w-12 h-12 text-orange/30 rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5,40 Q20,10 45,15" />
                  <path d="M35,10 L45,15 L38,22" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom torn edge */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-warm-bg torn-top" />
      </section>

      {/* ==================== MARQUEE BANNER ==================== */}
      <div className="bg-orange py-3 overflow-hidden relative -rotate-[0.5deg] -mt-1 z-10 shadow-md">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-display text-white/90 text-lg uppercase tracking-widest mx-8">
              Vote Gabriella Noack
              <span className="text-sun mx-4">*</span>
              District 6
              <span className="text-sun mx-4">*</span>
              Community First
              <span className="text-sun mx-4">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* ==================== INSTAGRAM STRIP ==================== */}
      <a
        href="https://www.instagram.com/gabriella4citycouncil?igsh=NTc4MTIwNjQ2YQ%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-4 bg-ink py-4 no-underline hover:bg-ink-soft transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-60 group-hover:opacity-100 transition-opacity"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors tracking-wider uppercase">
          Follow on Instagram — <span className="text-orange-light font-bold">@gabriella4citycouncil</span>
        </span>
      </a>

      {/* ==================== PROMISE ==================== */}
      <section className="py-24 md:py-32 px-6 notebook-lines relative">
        {/* Decorative margin line */}
        <div className="absolute left-[8%] top-0 bottom-0 w-[2px] bg-red/10 hidden lg:block" />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hand text-2xl text-orange mb-4 -rotate-1 inline-block">Gabriella's Promise</p>
            <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug tracking-tight italic">
              "I promise to show up for the community of Santa Cruz by attending{' '}
              <span className="marker-highlight-orange font-bold not-italic">90% or more</span> of city hall meetings,
              maintaining an open and transparent line of communication with{' '}
              <span className="marker-highlight-orange font-bold not-italic">any and all</span> district 6 residents,
              and doing everything I can to respond to the opinions and needs of my constituents."
            </blockquote>
            <p className="mt-8 font-hand text-xl text-ink-soft">— Gabriella Noack, Candidate for District 6</p>
          </motion.div>
        </div>
      </section>

      {/* ==================== POLICIES ==================== */}
      <section className="py-20 md:py-28 px-6 bg-warm-card grid-paper relative">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="font-hand text-2xl text-orange mb-2 rotate-[-1deg] inline-block">What We're Fighting For</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-none uppercase tracking-tight">
              Tell me what <span className="text-orange">you</span> care about
            </h2>
            <p className="mt-5 text-ink-soft text-lg">
              Reach out at{' '}
              <a href="mailto:gabriella4citycouncil@gmail.com" className="text-orange no-underline hover:underline font-semibold">
                gabriella4citycouncil@gmail.com
              </a>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Housing Policies',
                desc: 'Addressing the housing crisis using every tool in our belt — ADUs, duplexes, triplexes, and more.',
                link: '/housing-policies',
                icon: '🏠',
                rotate: '-rotate-1',
                bg: 'bg-orange',
              },
              {
                title: 'Surveillance Technology',
                desc: 'Ensuring transparent and accountable use of surveillance technology in our community.',
                link: '/surveillance-policies',
                icon: '🔒',
                rotate: 'rotate-1',
                bg: 'bg-ink',
              },
            ].map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 25, rotate: i === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -1 : 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={policy.link}
                  className={`group block p-8 md:p-10 ${policy.bg} text-white transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-2xl no-underline ${policy.rotate} relative`}
                >
                  {/* Corner tape */}
                  <div
                    className="absolute -top-3 right-8 w-16 h-6 rotate-2 z-10"
                    style={{ background: 'rgba(242, 183, 64, 0.5)' }}
                  />
                  <span className="text-5xl mb-5 block">{policy.icon}</span>
                  <h3 className="font-display text-3xl md:text-4xl mb-3 uppercase tracking-tight">{policy.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6 text-lg">{policy.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/90 group-hover:gap-3 transition-all">
                    Read more <ArrowRight size={15} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENDORSEMENTS ==================== */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-10 right-[10%] font-hand text-orange/8 text-[120px] select-none rotate-6 hidden lg:block">!</div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-hand text-2xl text-orange mb-2 rotate-[-2deg] inline-block">Endorsed!</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink uppercase tracking-tight">
              Backed by the community
            </h2>
          </motion.div>
          <div className="flex flex-wrap items-center gap-10">
            {[
              { src: '/seiu.png', alt: 'SEIU Endorsement', rot: '-rotate-2' },
              { src: '/bernie.png', alt: 'Bernie Sanders Campaign Endorsement', rot: 'rotate-1' },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`polaroid ${img.rot} hover:rotate-0 transition-transform duration-300`}
              >
                <img src={img.src} alt={img.alt} className="h-28 md:h-36 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative bg-orange mx-4 md:mx-8 mb-8 md:mb-12 overflow-hidden">
        {/* Scrapbook decorations */}
        <div className="absolute top-6 left-6 font-hand text-white/10 text-8xl select-none rotate-12">*</div>
        <div className="absolute bottom-6 right-6 font-hand text-white/10 text-6xl select-none -rotate-6">~</div>

        <div className="relative z-10 mx-auto max-w-4xl px-8 py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-5 leading-none uppercase tracking-tight">
              Ready to make<br />a difference?
            </h2>
            <p className="font-hand text-2xl text-white/70 mb-10 max-w-md mx-auto -rotate-1">
              We are a grassroots campaign. Every voice matters, every door knocked counts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange font-bold uppercase tracking-wider text-sm hover:bg-cream transition-all no-underline hover:scale-105"
              >
                Get Involved <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:gabriella4citycouncil@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-4 font-bold text-white uppercase tracking-wider text-sm border-3 border-white/40 hover:border-white hover:bg-white/10 transition-all no-underline"
              >
                Email Gabriella
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
