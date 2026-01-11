import type { Variants } from 'framer-motion'

// 📱 Reduced motion preference detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ⚡ GPU-optimized easing functions
export const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1]

// 🎯 Animation constants - unified for all devices
export const ANIMATION = {
  SCALE_TAP: 0.98,
  DURATION_DEFAULT: 0.2,
  DURATION_LONG: 0.25,
  STAGGER_DELAY: 0.04,
  SLIDE_DISTANCE: 100,
} as const

// 🕐 Timing constants
export const TIMING = {
  LOADING_DURATION_MS: 7000,
  PAGE_TRANSITION_MS: 200,
  ERROR_ANIMATION_MS: 150,
} as const

// 🎭 Slide variants for step transitions (direction-aware)
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? ANIMATION.SLIDE_DISTANCE : -ANIMATION.SLIDE_DISTANCE,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? ANIMATION.SLIDE_DISTANCE : -ANIMATION.SLIDE_DISTANCE,
    opacity: 0,
  }),
}

// 🎭 Spring transition for slides - slower for visibility
export const slideTransition = {
  x: { type: "spring" as const, stiffness: 100, damping: 20 },
  opacity: { duration: 0.3 },
}

// 🎭 Container animation - fade only
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.STAGGER_DELAY,
      delayChildren: 0.03
    }
  }
}

// 🎭 Item animation - fade with subtle y movement
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION_DEFAULT,
      ease: 'easeOut'
    }
  }
}

// 🎭 Icon animation - fade only
export const iconVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: ANIMATION.DURATION_LONG 
    }
  }
}

// 🎭 Button variants - minimal
export const buttonVariants = {
  hover: {},
  tap: { 
    scale: ANIMATION.SCALE_TAP,
    transition: { duration: 0.05 }
  }
} as const

// 🎭 Section animation - fade only
export const sectionSlideVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: ANIMATION.DURATION_DEFAULT }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.1 }
  }
}

// 📄 Page transition variants (legacy - for components not using slide)
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const pageTransition = {
  duration: TIMING.PAGE_TRANSITION_MS / 1000
}

// ❌ Error message animation
export const errorVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const errorTransition = {
  duration: TIMING.ERROR_ANIMATION_MS / 1000
}

// 🎯 Helper for reduced motion preference
export const getAnimationVariants = () => {
  if (prefersReducedMotion()) {
    return {
      container: { hidden: {}, visible: {} },
      item: { hidden: {}, visible: {} },
      icon: { hidden: {}, visible: {} },
      button: { hover: {}, tap: {} },
      section: { hidden: {}, visible: {}, exit: {} },
      slide: { enter: {}, center: {}, exit: {} },
    }
  }
  
  return {
    container: containerVariants,
    item: itemVariants,
    icon: iconVariants,
    button: buttonVariants,
    section: sectionSlideVariants,
    slide: slideVariants,
  }
}
