import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Expandable from '../components/Expandable'

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-cream dot-pattern overflow-hidden">
        <div className="absolute top-[15%] right-[5%] font-hand text-orange/8 text-[100px] select-none rotate-12">*</div>
        <div className="absolute bottom-[10%] left-[3%] w-24 h-24 border-2 border-dashed border-orange/10 rounded-full" style={{ animation: 'wiggle 8s ease-in-out infinite' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo — Polaroid style */}
            <motion.div
              initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <div className="relative">
                {/* Tape */}
                <div
                  className="absolute -top-4 left-1/3 w-20 h-7 z-20 rotate-[-4deg]"
                  style={{ background: 'rgba(242, 183, 64, 0.5)' }}
                />
                <div className="polaroid -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-64 md:w-80 aspect-[3/4] overflow-hidden">
                    <img src="/gabriella.png" alt="Gabriella Noack" className="w-full h-full object-cover object-[30%_top] scale-105" />
                  </div>
                  <p className="font-hand text-xl text-ink-soft text-center mt-2 -rotate-1">Your neighbor Gabriella</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="font-hand text-2xl text-orange mb-2 -rotate-1 inline-block">Meet the Candidate</p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ink leading-none uppercase tracking-tight mb-6">
                About<br /><span className="text-orange">Gabriella</span>
              </h1>
              <div className="text-ink-soft text-lg leading-relaxed">
                <Expandable
                  label="Read full bio"
                  preview={
                    <p>
                      Time for a new voice! Gabriella Noack is running for city council district six because she thinks it is pertinent that young and dedicated community organizers step up to make a difference in local politics. She has been a volunteer peer tutor and teaching assistant at Cabrillo College, a volunteer technology teacher in a local jail in Watsonville, and is currently on a team co-facilitating a technology program in collaboration with the UCSC Everett program and Barrios Unidos, designed to teach vocational technology skills to previously incarcerated persons in the Santa Cruz area.
                    </p>
                  }
                >
                  <p className="mt-4">
                    She is a graduating senior at University of California, Santa Cruz who plans to make Santa Cruz her home.
                  </p>
                </Expandable>
              </div>
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 mt-8 px-7 py-4 bg-orange text-white font-bold uppercase tracking-wider text-sm hover:bg-orange-dark transition-all no-underline -rotate-1 hover:rotate-0"
              >
                Join the Campaign <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="bg-ink py-3 overflow-hidden rotate-[0.5deg] -mt-1 z-10">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-display text-white/20 text-lg uppercase tracking-widest mx-8">
              Community First <span className="text-orange/40 mx-4">*</span>
              Show Up <span className="text-orange/40 mx-4">*</span>
              District 6 <span className="text-orange/40 mx-4">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <section className="py-24 md:py-32 px-6 notebook-lines relative">
        <div className="absolute left-[8%] top-0 bottom-0 w-[2px] bg-red/10 hidden lg:block" />
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Expandable
              label="Read full message"
              preview={
                <blockquote className="font-serif text-2xl md:text-3xl text-ink leading-snug tracking-tight italic">
                  "I promise to show up for the community of Santa Cruz by attending 90% or more of city hall
                  meetings, maintaining an open and transparent line of communication with any and all district 6
                  residents, and doing everything I can to respond to the opinions and needs of my
                  constituents — <span className="marker-highlight-orange not-italic font-bold">even if they can't make it to town hall meetings
                  because they are busy at their 9-5.</span>"
                </blockquote>
              }
            >
              <blockquote className="font-serif text-2xl md:text-3xl text-ink/60 leading-snug tracking-tight mt-6 italic">
                "Please, reach out to me! Tell me a little bit about yourself, what matters most to you as a
                resident of Santa Cruz California, and most of all what your favorite part of our neighborhood is!
                <span className="text-orange not-italic font-bold"> Personally, I love walking in the circles and admiring the beautiful flora and fauna that our
                neighbors have so lovingly curated in their front yard.</span> I look forward to meeting you all."
              </blockquote>
            </Expandable>
            <p className="mt-8 font-hand text-xl text-ink-soft -rotate-1">— Gabriella Noack</p>
          </motion.div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-20 md:py-28 px-6 bg-warm-card grid-paper">
        <div className="mx-auto max-w-4xl">
          <p className="font-hand text-2xl text-orange mb-2 rotate-[-1deg] inline-block">Endorsed!</p>
          <h2 className="font-display text-5xl md:text-6xl text-ink mb-12 uppercase tracking-tight">Backed by the community</h2>
          <div className="flex flex-wrap items-center gap-10">
            {[
              { src: '/seiu.png', alt: 'SEIU Endorsement', rot: '-rotate-2' },
              { src: '/bernie.png', alt: 'Bernie Sanders Campaign Endorsement', rot: 'rotate-1' },
              { src: '/mbclc.png', alt: 'MBCLC Endorsement', rot: '-rotate-1' },
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

      {/* Grassroots note */}
      <section className="py-14 px-6 border-t border-ink/5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-hand text-xl text-ink-soft/60 leading-relaxed mb-3">
            We are a grassroots campaign, so our website is still under construction — please be patient and
            keep checking back in as we update the page. Email us if you would like to get involved.
          </p>
          <a href="mailto:gabriella4citycouncil@gmail.com" className="text-orange font-bold hover:underline no-underline uppercase tracking-wider text-sm">
            gabriella4citycouncil@gmail.com
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
