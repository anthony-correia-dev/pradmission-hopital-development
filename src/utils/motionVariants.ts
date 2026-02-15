import type { Variants } from 'motion/react'

export const slideVariants: Variants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' },
  visible: {
    opacity: 1, height: 'auto', overflow: 'hidden',
    transitionEnd: { overflow: 'visible' },
    transition: {
      height: { duration: 0.25, ease: [0.0, 0.0, 0.2, 1] },
      opacity: { duration: 0.2, delay: 0.15 },
    },
  },
  exit: {
    opacity: 0, height: 0, overflow: 'hidden',
    transition: {
      opacity: { duration: 0.12 },
      height: { duration: 0.2, delay: 0.05, ease: [0.4, 0, 1, 1] },
    },
  },
}
