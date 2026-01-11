import { Globe, ArrowRight, Sparkles } from 'lucide-react'
import logoHlt from '@/assets/images/logo-hlt.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import { landingTranslations } from '@/locales'
import { ANIMATION } from '@/lib/animations'

interface LandingProps {
  language: 'fr' | 'en'
  onLanguageChange: (lang: 'fr' | 'en') => void
  onStart: () => void
}

// 🎭 Unified animations - same on all devices
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.DURATION_DEFAULT,
      staggerChildren: ANIMATION.STAGGER_DELAY,
      delayChildren: 0.03
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.DURATION_DEFAULT,
      ease: 'easeOut',
    }
  }
}

export function Landing({ language, onLanguageChange, onStart }: LandingProps) {
  const t = landingTranslations[language]

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <motion.div className="w-full max-w-md mx-auto">
        <motion.div
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div className="text-center mb-6" variants={itemVariants}>
            <div className="mx-auto mb-6 flex items-center justify-center">
              <img src={logoHlt} alt="Hôpital La Tour" className="h-16 w-auto" />
            </div>
          </motion.div>

          {/* Language selector */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <Globe className="w-4 h-4 text-brand-primary" />
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
          <motion.div className="text-center mb-6" variants={itemVariants}>
            <h1 className="text-2xl font-bold text-brand-text mb-4">
              {t.welcome}
            </h1>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              {t.subtitle}
            </p>
            <p className="text-sm text-slate-600">
              {t.description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              onClick={onStart}
              size="lg"
              className="group w-full h-14 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t.start}
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </motion.div>

          {/* Features */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-600"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-brand-success" />
              {t.secure}
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-600"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              {t.minutes}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
