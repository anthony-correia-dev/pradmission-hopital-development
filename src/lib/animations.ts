import type { Variants, Transition } from 'motion/react'

// ── Easing Constants (K) ─────────────────────────────────
export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const

// ── Timing ───────────────────────────────────────────────
export const DURATION_DEFAULT = 0.2
export const DURATION_LONG = 0.25
export const STAGGER_DELAY = 0.04
export const SLIDE_DISTANCE = 100

// ── Route order (for direction-aware transitions) ────────
const ROUTE_ORDER = ['/', '/security', '/otp', '/qualification', '/loading', '/admin', '/success']

export function getDirection(from: string, to: string): 1 | -1 {
  const fromIndex = ROUTE_ORDER.indexOf(from)
  const toIndex = ROUTE_ORDER.indexOf(to)
  if (fromIndex === -1 || toIndex === -1) return 1
  return toIndex >= fromIndex ? 1 : -1
}

// ── A. Page Slide Transition ─────────────────────────────
export const pageSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
}

export const pageSlideTransition: Transition = {
  x: { type: 'spring', stiffness: 100, damping: 20 },
  opacity: { duration: 0.3 },
}

// ── B. Container Stagger ─────────────────────────────────
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.03 },
  },
}

// ── C. Item Fade + Y Slide ───────────────────────────────
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_DEFAULT, ease: 'easeOut' },
  },
}

// ── D. Icon Fade ─────────────────────────────────────────
export const iconVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_LONG },
  },
}

// ── E. Employer Section Expand/Collapse ──────────────────
export const employerSlideVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      height: { type: 'spring', stiffness: 100, damping: 20 },
      opacity: { duration: 0.3 },
      y: { type: 'spring', stiffness: 100, damping: 20 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -20,
    transition: {
      height: { duration: 0.2 },
      opacity: { duration: 0.15 },
      y: { duration: 0.15 },
    },
  },
}

// ── F. Section Fade (generic) ────────────────────────────
export const sectionSlideVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

// ── G. Page Fade (legacy) ────────────────────────────────
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const pageTransition: Transition = { duration: 0.2 }

// ── H. Error Message Fade ────────────────────────────────
export const errorVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const errorTransition: Transition = { duration: 0.15 }

// ── I. Button Tap (via variants) ─────────────────────────
export const buttonVariants: Variants = {
  hover: {},
  tap: { scale: 0.98, transition: { duration: 0.05 } },
}

export const buttonTapScale = { scale: 0.98 }

// ── L. Accessibility: Reduced Motion ─────────────────────
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const NO_OP_VARIANTS: Variants = {
  hidden: {},
  visible: {},
  enter: {},
  center: {},
  exit: {},
  initial: {},
  animate: {},
}

export function getAnimationVariants(variants: Variants): Variants {
  return prefersReducedMotion() ? NO_OP_VARIANTS : variants
}
