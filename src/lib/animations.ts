import type { Variants } from 'framer-motion'

// ⚡ GPU-optimized easing functions
export const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
export const EASE_ORGANIC: [number, number, number, number] = [0.16, 1, 0.3, 1]

// 🎯 Animation constants
export const ANIMATION = {
  SCALE_PULSE: [1, 1.03, 1] as number[],
  SCALE_HOVER: 1.02,
  SCALE_TAP: 0.98,
  DURATION_DEFAULT: 0.4,
  DURATION_LONG: 0.5,
  STAGGER_DELAY: 0.1,
  PULSE_DURATION: 2,
} as const

// 🕐 Timing constants
export const TIMING = {
  LOADING_DURATION_MS: 7000,
  PAGE_TRANSITION_MS: 300,
  ERROR_ANIMATION_MS: 200,
} as const

// 🎭 Reusable animation variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.STAGGER_DELAY,
      delayChildren: ANIMATION.STAGGER_DELAY
    }
  }
}

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION.DURATION_DEFAULT,
      ease: EASE_OUT
    }
  }
}

export const iconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.7,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: ANIMATION.DURATION_LONG,
      ease: EASE_OUT
    }
  },
  pulse: {
    scale: ANIMATION.SCALE_PULSE,
    transition: {
      duration: ANIMATION.PULSE_DURATION,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const buttonVariants = {
  hover: { 
    scale: ANIMATION.SCALE_HOVER,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: ANIMATION.SCALE_TAP,
    transition: { duration: 0.1 }
  }
} as const

// 🌟 Section animations with slide + highlight effect
export const sectionSlideVariants: Variants = {
  hidden: { 
    opacity: 0,
    height: 0,
    scale: 0.95,
  },
  visible: { 
    opacity: 1,
    height: 'auto',
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_ORGANIC,
      opacity: { duration: 0.3 },
      height: { duration: 0.5 },
      scale: { duration: 0.4, delay: 0.1 }
    }
  },
  exit: { 
    opacity: 0,
    height: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: EASE_OUT
    }
  }
}

export const highlightVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1
  },
  animate: {
    scale: [1, 1.01, 1],
    transition: {
      duration: 1.5,
      repeat: 2,
      ease: 'easeOut'
    }
  }
}

// 📄 Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const pageTransition = {
  duration: TIMING.PAGE_TRANSITION_MS / 1000
}

// ❌ Error message animation
export const errorVariants: Variants = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 }
}

export const errorTransition = {
  duration: TIMING.ERROR_ANIMATION_MS / 1000
}
