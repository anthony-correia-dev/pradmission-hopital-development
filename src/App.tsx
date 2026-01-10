import { useWizard } from './hooks/useWizard'
import type { FormData } from './hooks/useWizard'
import { Landing } from './components/Landing'
import { Security } from './components/Security'
import { OTP } from './components/OTP'
import { LoadingScreen } from './components/LoadingScreen'
import { Qualification } from './components/Qualification'
import { Admin } from './components/Admin'
import { Success } from './components/Success'
import { ProgressIndicator } from './components/ProgressIndicator'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createWizardSchema } from './schemas/wizardSchema'
import { securityTranslations, qualificationTranslations, adminTranslations, otpTranslations } from './locales'

function App() {
  const { currentStep, formData, updateFormData, nextStep, prevStep, resetWizard } = useWizard()

  // Translations -> messages schema
  const schemaMessages = useMemo(() => {
    const sec = securityTranslations[formData.language]
    const qual = qualificationTranslations[formData.language]
    const adm = adminTranslations[formData.language]
    const otp = otpTranslations[formData.language]

    return {
      security: {
        required: sec.required,
        invalid: sec.invalid,
        futureDate: sec.futureDate
      },
      otp: {
        required: otp.required,
        invalid: otp.invalid
      },
      qualification: {
        reasonRequired: qual.reasonRequired,
        insuranceRequired: qual.insuranceRequired,
        identityCardRequired: qual.identityCardRequired,
        insuranceCardRequired: qual.insuranceCardRequired,
        consentNLPDRequired: qual.consentNLPDRequired
      },
      admin: {
        required: adm.required,
        invalidEmail: adm.invalidEmail,
        invalidNpa: adm.invalidNpa,
        invalidDate: adm.invalidDate,
        invalidCardNumber: adm.invalidCardNumber,
        invalidAvsNumber: adm.invalidAvsNumber
      }
    }
  }, [formData.language])

  const wizardSchema = useMemo(() => createWizardSchema(schemaMessages), [schemaMessages])

  // --- RHF global: source de vérité + validation Zod globale (Option 2) ---
  const rhfMethods = useForm<FormData>({
    resolver: zodResolver(wizardSchema),
    defaultValues: formData
  })

  // Hydratation depuis sessionStorage au démarrage (sans File)
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('wizard-form-data')
      if (stored) {
        const parsed = JSON.parse(stored)
        rhfMethods.reset({
          ...parsed,
          // Les File ne sont pas sérialisables
          identityCard: null,
          insuranceCard: null,
          // La langue reste pilotée par useWizard en passe 1
          language: formData.language
        })
      }
    } catch (e) {
      console.error('Failed to hydrate RHF from sessionStorage', e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Autosave RHF -> sessionStorage (debounced)
  const saveTimerRef = useRef<number | null>(null)
  useEffect(() => {
    const subscription = rhfMethods.watch(() => {
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current)
      }
      saveTimerRef.current = window.setTimeout(() => {
        try {
          const values = rhfMethods.getValues()
          const persistable = {
            ...values,
            identityCard: null,
            insuranceCard: null
          }
          sessionStorage.setItem('wizard-form-data', JSON.stringify(persistable))
        } catch (e) {
          console.error('Failed to autosave RHF to sessionStorage', e)
        }
      }, 400)
    })

    return () => {
      subscription.unsubscribe()
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current)
      }
    }
  }, [rhfMethods])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  useEffect(() => {
    if (currentStep === 'loading') {
      const timer = setTimeout(() => {
        nextStep()
      }, 7000)
      return () => clearTimeout(timer)
    }
  }, [currentStep, nextStep])

  // ⚡ GPU-optimized page variants - utilise transform au lieu de y
  const pageVariants = {
    initial: { 
      opacity: 0, 
      transform: 'translateY(20px)',
      willChange: 'transform, opacity'
    },
    animate: { 
      opacity: 1, 
      transform: 'translateY(0px)'
    },
    exit: { 
      opacity: 0, 
      transform: 'translateY(-20px)'
    }
  }

  // ⚡ Transition optimisée - durée réduite
  const pageTransition = {
    duration: 0.2,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
  }

  return (
    <FormProvider {...rhfMethods}>
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.556 0 0) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {currentStep !== 'landing' && currentStep !== 'security' && currentStep !== 'otp' && currentStep !== 'loading' && (
          <ProgressIndicator currentStep={currentStep} language={formData.language} />
        )}

        <AnimatePresence mode="wait">
          {currentStep === 'landing' && (
            <motion.div
              key="landing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Landing
                language={formData.language}
                onLanguageChange={(lang) => updateFormData({ language: lang })}
                onStart={nextStep}
              />
            </motion.div>
          )}

          {currentStep === 'security' && (
            <motion.div
              key="security"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Security
                language={formData.language}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}

          {currentStep === 'otp' && (
            <motion.div
              key="otp"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <OTP
                language={formData.language}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}

          {currentStep === 'loading' && (
            <motion.div
              key="loading"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <LoadingScreen language={formData.language} />
            </motion.div>
          )}

          {currentStep === 'qualification' && (
            <motion.div
              key="qualification"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Qualification
                language={formData.language}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}

          {currentStep === 'admin' && (
            <motion.div
              key="admin"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Admin
                language={formData.language}
                onNext={nextStep}
                onBack={prevStep}
              />
            </motion.div>
          )}

          {currentStep === 'success' && (
            <motion.div
              key="success"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Success
                language={formData.language}
                onRestart={resetWizard}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FormProvider>
  )
}

export default App
