import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import Expandable from '../components/Expandable'

const callsForProtection = [
  'No ALPR systems in Santa Cruz',
  'No government contracts with private surveillance corporations',
  'Transparency around drones or camera networks',
  'Warrant requirements for data access',
  'Public accountability for surveillance decisions',
]

const targeted = [
  'LGBTQ+ people',
  'Black and Brown communities',
  'Immigrants',
  'Muslim residents',
  'Unhoused people',
  'Women and those seeking reproductive care',
]

export default function SurveillancePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-ink overflow-hidden">
        <div className="absolute top-[15%] right-[8%] font-hand text-white/5 text-[120px] select-none rotate-12">?</div>
        <div className="absolute bottom-[10%] left-[5%] w-28 h-28 border-2 border-dashed border-white/5 rounded-full" style={{ animation: 'wiggle 8s ease-in-out infinite' }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-5xl mb-4 block">🔒</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-none uppercase tracking-tight mb-6">
              Surveillance<br />Technology
            </h1>
            <p className="font-hand text-2xl md:text-3xl text-orange -rotate-1 inline-block">
              Mass Surveillance is NOT Public Safety
            </p>
          </motion.div>
        </div>

        {/* Torn edge */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-warm-bg torn-top" />
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 px-6 notebook-lines relative">
        <div className="absolute left-[8%] top-0 bottom-0 w-[2px] bg-red/10 hidden lg:block" />

        <div className="mx-auto max-w-3xl">

          {/* Mass Surveillance */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10 border-b-2 border-dashed border-ink/8">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 uppercase tracking-tight">Mass Surveillance</h2>
            <div className="text-ink-soft/70 text-[17px] leading-relaxed space-y-4">
              <Expandable
                label="Read more"
                preview={
                  <p>
                    Government contracts with private surveillance technology corporations increase a mass
                    surveillance state that profits from privacy violations. Contracts between local police and
                    government with private security systems threaten autonomy of all residents, particularly those
                    targeted including <span className="marker-highlight font-semibold">LGBTQ+ individuals, Black and Brown communities, Muslims, and those seeking
                    reproductive healthcare</span>.
                  </p>
                }
              >
                <p className="mt-4">
                  Gabriella Noack aims to end exploitation of community members' data for private surveillance
                  enterprises and prejudiced targeting.
                </p>
              </Expandable>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-14 border-b-2 border-dashed border-ink/8">
            <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug tracking-tight italic">
              "Reject a mass surveillance state.{' '}
              <span className="marker-highlight-orange not-italic font-bold">Vote Gabriella Noack</span> for District 6 City Council."
            </blockquote>
          </motion.div>

          {/* Surveillance Tech */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10 border-b-2 border-dashed border-ink/8">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 uppercase tracking-tight">Surveillance Technology</h2>
            <div className="text-ink-soft/70 text-[17px] leading-relaxed space-y-4">
              <p>
                Flock systems have shared data beyond stated purposes, including to out-of-state agencies and federal
                immigration enforcement, <span className="marker-highlight font-semibold">violating California laws like SB 34 and SB 54</span>.
              </p>
              <p>
                The 2023 Grand Civil Jury already warned that local government oversight of surveillance technology is{' '}
                <a
                  href="https://www.santacruzcountyca.gov/Portals/0/County/GrandJury/GJ2023_final/2023-7_Surveillance_Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-bold underline underline-offset-2 hover:text-orange-dark transition-colors"
                >
                  lacking in Santa Cruz
                </a>.
              </p>
              <p>The solution is not finding a different vendor but <span className="font-semibold text-ink">rejecting mass surveillance contracts entirely</span>.</p>
            </div>
          </motion.div>

          {/* Inequity */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10 border-b-2 border-dashed border-ink/8">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 uppercase tracking-tight">Inequity in Mass Surveillance</h2>
            <p className="text-ink-soft/70 text-[17px] leading-relaxed mb-5">Mass surveillance disproportionately targets:</p>
            <div className="flex flex-wrap gap-3">
              {targeted.map((group, i) => (
                <span
                  key={group}
                  className="sticker text-ink text-sm"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -2 : 2) + (i * 0.5)}deg)` }}
                >
                  {group}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Corporate Machine */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10 border-b-2 border-dashed border-ink/8">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 uppercase tracking-tight">The Corporate Surveillance Machine</h2>
            <p className="text-ink-soft/70 text-[17px] leading-relaxed">
              Surveillance companies are corporations whose profits depend on expanding surveillance through data
              sales and lobbying governments for more invasive technologies.
            </p>
          </motion.div>

          {/* Calls for Protection */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10 border-b-2 border-dashed border-ink/8">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 uppercase tracking-tight">Calls for Protection</h2>
            <ul className="space-y-4">
              {callsForProtection.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-ink-soft/70 text-[17px] leading-relaxed">
                  <span className="font-hand text-orange text-2xl font-bold mt-[-2px]">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Endorsement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-10">
            <p className="font-hand text-lg text-ink-soft/50 mb-2 -rotate-1">Endorsed by</p>
            <a
              href="https://www.gettheflockout.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl text-ink hover:text-orange transition-colors no-underline inline-flex items-center gap-2 uppercase tracking-tight"
            >
              Get The Flock Out <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink mx-4 md:mx-8 mb-8 md:mb-12 relative overflow-hidden">
        <div className="absolute top-4 left-8 font-hand text-white/5 text-7xl select-none -rotate-6">?</div>
        <div className="mx-auto max-w-4xl px-8 py-20 md:py-24 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-5 leading-none uppercase tracking-tight">
              Your privacy<br /><span className="text-orange">matters</span>
            </h2>
            <p className="font-hand text-xl text-white/40 mb-10 -rotate-1">Tell me what you care about most.</p>
            <a
              href="mailto:gabriella4citycouncil@gmail.com?subject=Surveillance Technology Policy Feedback"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wider text-sm hover:bg-orange-dark transition-all no-underline hover:scale-105"
            >
              Share Your Priorities <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
