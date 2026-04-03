import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const policies = [
  {
    number: '01',
    title: 'Streamline the Permitting Process for ADUs',
    desc: 'Streamline the permitting process for ADUs through creation of a district commission that educates property owners, provides contractor contacts, and oversees permitting to make ADU building more accessible.',
  },
  {
    number: '02',
    title: 'Lowering restrictions for ADU requirements',
    desc: 'Lower codes enforced by Santa Cruz County Department of Community Development to incentivize renovating accessory buildings as ADUs, providing financial relief through small homeowner solutions rather than relying solely on corporate development.',
  },
  {
    number: '03',
    title: 'Subsidizing the construction of ADUs',
    desc: 'Incentivize ADU building through construction subsidies for affordable rentals. Bi-annual housing market studies will determine minimum rental rates for five-year periods to qualify for subsidies.',
  },
  {
    number: '04',
    title: 'Re-Zoning',
    desc: 'Re-zone West Side areas restricted by single-family zoning to allow duplexes and triplexes, increasing housing access while reducing infrastructure pressure and traffic congestion.',
  },
  {
    number: '05',
    title: 'Convert vacant commercial spaces for housing',
    desc: 'Convert vacant commercial spaces into housing to utilize existing structures and reduce waste in new construction while preserving green spaces and neighborhood character.',
  },
]

export default function HousingPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-orange overflow-hidden">
        <div className="absolute top-[15%] right-[8%] font-hand text-white/8 text-[120px] select-none rotate-12">*</div>
        <div className="absolute bottom-[10%] left-[5%] w-28 h-28 border-2 border-dashed border-white/10 rounded-full" style={{ animation: 'wiggle 8s ease-in-out infinite' }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-5xl mb-4 block">🏠</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-none uppercase tracking-tight mb-6">
              Housing<br />Policies
            </h1>
            <p className="font-hand text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed -rotate-1">
              Santa Cruz needs to address the housing crisis by using every tool in our belt.
            </p>
          </motion.div>
        </div>

        {/* Torn edge */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-warm-bg torn-top" />
      </section>

      {/* Policies */}
      <section className="py-20 md:py-28 px-6 notebook-lines relative">
        <div className="absolute left-[8%] top-0 bottom-0 w-[2px] bg-red/10 hidden lg:block" />

        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-hand text-xl text-ink-soft mb-12 -rotate-1"
          >
            Five principle strategies for more housing:
          </motion.p>

          {policies.map((policy, i) => (
            <motion.div
              key={policy.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group py-10 ${i < policies.length - 1 ? 'border-b-2 border-dashed border-ink/8' : ''}`}
            >
              <div className="flex gap-6 items-baseline">
                <span className="font-display text-6xl text-orange/15 leading-none select-none">{policy.number}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 leading-snug uppercase tracking-tight">{policy.title}</h3>
                  <p className="text-ink-soft/70 text-[17px] leading-relaxed">{policy.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange mx-4 md:mx-8 mb-8 md:mb-12 relative overflow-hidden">
        <div className="absolute top-4 right-8 font-hand text-white/10 text-7xl select-none rotate-6">~</div>
        <div className="mx-auto max-w-4xl px-8 py-20 md:py-24 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-5 leading-none uppercase tracking-tight">
              Everyone deserves<br />a home in Santa Cruz
            </h2>
            <p className="font-hand text-xl text-white/60 mb-10 max-w-md mx-auto -rotate-1">
              Tell me what you care about most at{' '}
              <a href="mailto:gabriella4citycouncil@gmail.com" className="text-white underline underline-offset-2">
                gabriella4citycouncil@gmail.com
              </a>
            </p>
            <Link
              to="/get-involved"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange font-bold uppercase tracking-wider text-sm hover:bg-cream transition-all no-underline hover:scale-105"
            >
              Get Involved <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
