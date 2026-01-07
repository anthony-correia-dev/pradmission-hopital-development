import { Globe, ArrowRight, Sparkles } from 'lucide-react'
import logoHlt from '@/assets/images/logo-hlt.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import { landingTranslations } from '@/locales'

interface LandingProps {
  language: 'fr' | 'en'
  onLanguageChange: (lang: 'fr' | 'en') => void
  onStart: () => void
}

// GPU-optimized easing curves
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
const organicEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ⚡ GPU-accelerated container animation (opacity + transform only)
const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: organicEase,
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// ⚡ GPU-optimized item animations (transform + opacity + filter)
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: organicEase,
    }
  }
}

// ⚡ Simplified logo animation (removed complex 3D transforms)
const logoVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: organicEase,
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }
}

// ⚡ GPU-optimized text reveal (simplified scaleY)
const textRevealVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: organicEase
    }
  }
}

// ⚡ GPU-optimized features animation
const featureVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6 + i * 0.1,
      duration: 0.5,
      ease: organicEase,
    }
  })
}

// ⚡ GPU-optimized button animation
const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: organicEase,
    }
  }
}

export function Landing({ language, onLanguageChange, onStart }: LandingProps) {
  const t = landingTranslations[language]

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-md mx-auto"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Logo */}
          <motion.div 
            className="text-center mb-6" 
            variants={itemVariants}
          >
            <motion.div 
              className="mx-auto mb-6 flex items-center justify-center" 
              variants={logoVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <img src={logoHlt} alt="Hôpital La Tour" className="h-16 w-auto" />
            </motion.div>
          </motion.div>

          {/* Language selector */}
          <motion.div 
            className="mb-6" 
            variants={itemVariants}
          >
            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <motion.span 
                  whileHover={{ rotate: 360 }} 
                  transition={{ duration: 0.5 }}
                  style={{ willChange: 'transform' }}
                >
                  <Globe className="w-4 h-4 text-brand-primary" />
                </motion.span>
                {t.selectLanguage}
              </label>
              <Select value={language} onValueChange={(value) => onLanguageChange(value as 'fr' | 'en')}>
                <SelectTrigger className="h-12 w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="text-center mb-6" 
            variants={itemVariants}
          >
            <motion.h1 
              className="text-2xl font-bold text-brand-text mb-4" 
              variants={textRevealVariants}
            >
              {t.welcome}
            </motion.h1>
            <motion.p 
              className="text-base text-slate-600 mb-4 leading-relaxed" 
              variants={textRevealVariants}
            >
              {t.subtitle}
            </motion.p>
            <motion.p 
              className="text-sm text-slate-600" 
              variants={textRevealVariants}
            >
              {t.description}
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            variants={buttonVariants}
          >
            <Button
              onClick={onStart}
              size="lg"
              className="group w-full h-14 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all"
              asChild
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.02,
                }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  {t.start}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            </Button>
          </motion.div>

          {/* Features */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-600"
              custom={0}
              variants={featureVariants}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-brand-success"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  delay: 1,
                  ease: "easeInOut" 
                }}
                style={{ willChange: 'transform' }}
              />
              {t.secure}
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-600"
              custom={1}
              variants={featureVariants}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-brand-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  delay: 1.3,
                  ease: "easeInOut" 
                }}
                style={{ willChange: 'transform' }}
              />
              {t.minutes}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
