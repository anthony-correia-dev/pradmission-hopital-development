import { useWizard } from './hooks/useWizard'
import type { FormData } from './hooks/useWizard'
import { useApi } from './hooks/useApi'
import { Landing } from './components/Landing'
import { Security } from './components/Security'
import { OTP } from './components/OTP'
import { LoadingScreen } from './components/LoadingScreen'
import { ValidationLoadingScreen } from './components/ValidationLoadingScreen'
import { Qualification } from './components/Qualification'
import { Admin } from './components/Admin'
import { Success } from './components/Success'
import { InvalidLink } from './components/InvalidLink'
import { ProgressIndicator } from './components/ProgressIndicator'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createWizardSchema } from './schemas/wizardSchema'
import { securityTranslations, qualificationTranslations, adminTranslations, otpTranslations } from './locales'
import { slideVariants, slideTransition } from './lib/animations'

// 🎯 État de validation du lien
type LinkValidationState = 'validating' | 'valid' | 'invalid'

// 🎯 Step order for direction calculation (must match useWizard.ts)
const STEP_ORDER = ['landing', 'security', 'otp', 'qualification', 'loading', 'admin', 'success'] as const

function App() {
  const { currentStep, formData, updateFormData, nextStep, prevStep, resetWizard } = useWizard()
  const api = useApi()
  
  // 🎯 État de validation du lien unique
  const [linkState, setLinkState] = useState<LinkValidationState>('validating')
  
  // 🎬 Track direction for slide animations (1 = forward, -1 = backward)
  const [direction, setDirection] = useState(1)

  // 🎯 Wrapped navigation functions that set direction BEFORE step change
  const handleNext = useCallback(() => {
    setDirection(1)
    nextStep()
  }, [nextStep])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    prevStep()
  }, [prevStep])

  const handleReset = useCallback(() => {
    setDirection(1)
    resetWizard()
  }, [resetWizard])

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
        setDirection(1)
        nextStep()
      }, 7000)
      return () => clearTimeout(timer)
    }
  }, [currentStep, nextStep])

  // 🎯 Validation du lien au montage
  useEffect(() => {
    const validateLink = async () => {
      // 🔍 DEBUG: Afficher les informations de l'URL
      console.log('🔗 [DEBUG] ====== VALIDATION DU LIEN ======')
      console.log('🔗 [DEBUG] window.location.href:', window.location.href)
      console.log('🔗 [DEBUG] window.location.search:', window.location.search)
      console.log('🔗 [DEBUG] window.location.pathname:', window.location.pathname)
      console.log('🔗 [DEBUG] window.location.hash:', window.location.hash)
      console.log('🔗 [DEBUG] document.URL:', document.URL)
      
      // 🕐 ATTENDRE 10 SECONDES pour laisser le temps à shell.ajaxSafePost de s'initialiser
      console.log('🔗 [DEBUG] Attente de 10 secondes pour initialisation de Power Pages...')
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('🔗 [DEBUG] Fin de l\'attente, démarrage de la validation')
      
      // Essayer aussi avec le hash (au cas où Power Pages utilise le hash routing)
      const hashParams = new URLSearchParams(window.location.hash.replace('#', '').split('?')[1] || '')
      console.log('🔗 [DEBUG] Hash params:', hashParams.toString())
      
      // Extraire le preadmissionId de l'URL
      const urlParams = new URLSearchParams(window.location.search)
      console.log('🔗 [DEBUG] URLSearchParams entries:')
      for (const [key, value] of urlParams.entries()) {
        console.log(`🔗 [DEBUG]   - ${key}: ${value}`)
      }
      
      let id = urlParams.get('preadmissionId')
      console.log('🔗 [DEBUG] preadmissionId depuis search:', id)
      
      // Fallback: essayer depuis le hash
      if (!id) {
        id = hashParams.get('preadmissionId')
        console.log('🔗 [DEBUG] preadmissionId depuis hash:', id)
      }
      
      // Fallback: essayer d'extraire manuellement depuis l'URL complète
      if (!id) {
        const fullUrl = window.location.href
        const match = fullUrl.match(/preadmissionId=([^&]+)/)
        if (match) {
          id = decodeURIComponent(match[1])
          console.log('🔗 [DEBUG] preadmissionId extrait manuellement:', id)
        }
      }
      
      if (!id) {
        console.warn('⚠️ Paramètre preadmissionId manquant dans l\'URL')
        console.log('🔗 [DEBUG] ====== FIN VALIDATION (INVALID) ======')
        setLinkState('invalid')
        return
      }
      
      console.log('🔗 [DEBUG] preadmissionId trouvé:', id)
      
      // Appeler l'API de validation
      const isValid = await api.validatePreadmissionLink(id)
      
      if (isValid) {
        setLinkState('valid')
        // Stocker le GUID pour la soumission ultérieure
        updateFormData({ preadmissionId: id })
        console.log('🔗 [DEBUG] ====== FIN VALIDATION (VALID) ======')
      } else {
        setLinkState('invalid')
        console.log('🔗 [DEBUG] ====== FIN VALIDATION (INVALID - API) ======')
      }
    }
    
    validateLink()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 🎯 Appel API setStep à chaque changement d'étape
  useEffect(() => {
    // Ne pas appeler si le lien n'est pas validé ou si pas de preadmissionId
    if (linkState !== 'valid' || !formData.preadmissionId) {
      return
    }
    
    // Appeler setStep à chaque changement d'étape
    api.setStep(formData.preadmissionId, currentStep)
  }, [currentStep, linkState, formData.preadmissionId, api])

  // 🎯 Rendu conditionnel selon l'état de validation
  if (linkState === 'validating') {
    return (
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen">
        <ValidationLoadingScreen language={formData.language} />
      </div>
    )
  }

  if (linkState === 'invalid') {
    return (
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen">
        <InvalidLink 
          language={formData.language} 
          onLanguageChange={(lang) => updateFormData({ language: lang })}
        />
      </div>
    )
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

        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 'landing' && (
            <motion.div
              key="landing"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <Landing
                language={formData.language}
                onLanguageChange={(lang) => updateFormData({ language: lang })}
                onStart={handleNext}
              />
            </motion.div>
          )}

          {currentStep === 'security' && (
            <motion.div
              key="security"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <Security
                language={formData.language}
                onNext={handleNext}
                onBack={handlePrev}
              />
            </motion.div>
          )}

          {currentStep === 'otp' && (
            <motion.div
              key="otp"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <OTP
                language={formData.language}
                onNext={handleNext}
                onBack={handlePrev}
              />
            </motion.div>
          )}

          {currentStep === 'loading' && (
            <motion.div
              key="loading"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <LoadingScreen language={formData.language} />
            </motion.div>
          )}

          {currentStep === 'qualification' && (
            <motion.div
              key="qualification"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <Qualification
                language={formData.language}
                onNext={handleNext}
                onBack={handlePrev}
              />
            </motion.div>
          )}

          {currentStep === 'admin' && (
            <motion.div
              key="admin"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <Admin
                language={formData.language}
                onNext={handleNext}
                onBack={handlePrev}
              />
            </motion.div>
          )}

          {currentStep === 'success' && (
            <motion.div
              key="success"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <Success
                language={formData.language}
                onRestart={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FormProvider>
  )
}

export default App
