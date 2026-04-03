import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Expandable({ preview, children, label = 'Read more' }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {preview}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm font-semibold text-orange hover:text-orange-dark transition-colors bg-transparent border-none cursor-pointer px-0 underline underline-offset-2"
      >
        {open ? 'Show less' : label}
      </button>
    </div>
  )
}
