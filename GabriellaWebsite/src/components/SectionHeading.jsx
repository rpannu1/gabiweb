import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-14 md:mb-20"
    >
      {eyebrow && (
        <span className={`inline-block text-xs font-bold uppercase tracking-[0.25em] mb-3 ${
          light ? 'text-white/50' : 'text-orange'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] ${
        light ? 'text-white' : 'text-ink'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${
          light ? 'text-white/60' : 'text-ink-light/60'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
