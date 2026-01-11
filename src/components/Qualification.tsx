import { useState, useRef, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipboardList, ArrowRight, ArrowLeft, AlertCircle, CheckCircle, Briefcase } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { FileUpload } from './ui/file-upload'
import { qualificationTranslations } from '../locales/qualification'
import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { useApi } from '../hooks/useApi'
import { getCountryNameByCode } from '../lib/countries'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import type { FormData } from '@/hooks/useWizard'

// ⚡ GPU-optimized animation variants
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
const organicEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

// 🎯 Animation constants
const ANIMATION = {
  SCALE_PULSE: [1, 1.03, 1] as number[],
  SCALE_HOVER: 1.02,
  SCALE_TAP: 0.98,
  DURATION_DEFAULT: 0.4,
  DURATION_LONG: 0.5,
  STAGGER_DELAY: 0.1,
  PULSE_DURATION: 2,
}

// 🎯 Types d'assurance disponibles
const INSURANCE_TYPES = ['swiss', 'international', 'auto'] as const

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.STAGGER_DELAY,
      delayChildren: ANIMATION.STAGGER_DELAY
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    transform: 'translateY(15px)',
  },
  visible: { 
    opacity: 1, 
    transform: 'translateY(0px)',
    transition: {
      duration: ANIMATION.DURATION_DEFAULT,
      ease: easeOut
    }
  }
}

const iconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    transform: 'scale(0.7)',
  },
  visible: { 
    opacity: 1, 
    transform: 'scale(1)',
    transition: {
      duration: ANIMATION.DURATION_LONG,
      ease: easeOut
    }
  },
  pulse: {
    transform: ['scale(1)', 'scale(1.03)', 'scale(1)'],
    transition: {
      duration: ANIMATION.PULSE_DURATION,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// 🌟 Animation optimisée pour la section employeur - GPU-accelerated
const employerSectionVariants: Variants = {
  hidden: { 
    opacity: 0,
    transform: 'translateY(-10px)',
    willChange: 'transform, opacity',
  },
  visible: { 
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.25,
      ease: easeOut,
    }
  },
  exit: { 
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: {
      duration: 0.15,
      ease: easeOut
    }
  }
}

const employerHighlightVariants: Variants = {
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

const buttonVariants = {
  hover: { 
    transform: 'scale(1.01)',
    transition: { duration: 0.15 }
  },
  tap: { 
    transform: 'scale(0.98)',
    transition: { duration: 0.1 }
  }
}

interface QualificationProps {
  language: 'fr' | 'en'
  onNext: () => void
  onBack: () => void
}

export function Qualification({ language, onNext, onBack }: QualificationProps) {
  const t = qualificationTranslations[language]
  const { extractDocumentData } = useApi()

  // --- RHF global (source de vérité) ---
  const {
    getValues,
    reset,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useFormContext<FormData>()

  // RHF is the single source of truth
  const watchedReason = watch('reason')
  const watchedInsurance = watch('insurance')
  const watchedHasEmployer = watch('hasEmployer')
  const watchedConsentNLPD = watch('consentNLPD')
  const watchedConsentMarketing = watch('consentMarketing')
  const watchedIdentityCard = watch('identityCard')
  const watchedInsuranceCard = watch('insuranceCard')

  // 🎯 État OCR
  const [isOCRProcessing, setIsOCRProcessing] = useState(false)
  const [ocrError, setOcrError] = useState<string | null>(null)

  // 🎯 Refs pour le scroll automatique
  const reasonRef = useRef<HTMLDivElement>(null)
  const insuranceRef = useRef<HTMLDivElement>(null)
  const identityCardRef = useRef<HTMLDivElement>(null)
  const insuranceCardRef = useRef<HTMLDivElement>(null)
  const consentNLPDRef = useRef<HTMLDivElement>(null)

  // Condition extraite pour la carte d'assurance
  const isInsuranceCardRequired = watchedInsurance === 'swiss'

  // 🎯 Scroll automatique vers le premier champ en erreur
  useEffect(() => {
    const errorKeys = Object.keys(errors ?? {})
    if (errorKeys.length > 0) {
      const firstErrorField = errorKeys[0]
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        reason: reasonRef,
        insurance: insuranceRef,
        identityCard: identityCardRef,
        insuranceCard: insuranceCardRef,
        consentNLPD: consentNLPDRef
      }

      const targetRef = refMap[firstErrorField]
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }, [errors])

  const handleReasonChange = useCallback((newReason: 'illness' | 'accident') => {
    setValue('reason', newReason, { shouldDirty: true, shouldValidate: false })
  }, [setValue])

  const handleInsuranceChange = useCallback((newInsurance: 'swiss' | 'international' | 'auto') => {
    setValue('insurance', newInsurance, { shouldDirty: true, shouldValidate: false })
  }, [setValue])

  const handleFileChange = useCallback(async (type: 'identity' | 'insurance', file: File | null) => {
    console.groupCollapsed(`[Qualification] handleFileChange(${type})`)
    console.log('incoming file:', file ? { name: file.name, size: file.size, type: file.type } : null)
    console.log('before values:', {
      reason: watch('reason'),
      insurance: watch('insurance'),
      identityCard: watch('identityCard') ? { name: (watch('identityCard') as any)?.name } : null,
      insuranceCard: watch('insuranceCard') ? { name: (watch('insuranceCard') as any)?.name } : null,
      firstName: watch('firstName'),
      lastName: watch('lastName'),
      gender: watch('gender'),
      nationality: watch('nationality')
    })

    if (type === 'identity') {
      setValue('identityCard', file as any, { shouldDirty: true, shouldValidate: true })

      console.log('after setValue(identityCard):', watch('identityCard') ? { name: (watch('identityCard') as any)?.name } : null)

      if (file) {
        setIsOCRProcessing(true)
        setOcrError(null)

        try {
          console.time('[Qualification] OCR extractDocumentData')
          const ocrData = await extractDocumentData(file, 'id_card')
          console.timeEnd('[Qualification] OCR extractDocumentData')
          console.log('ocrData:', ocrData)

          if (ocrData) {
            const mapped = {
              firstName: ocrData.firstName,
              lastName: ocrData.lastName,
              gender: ocrData.gender,
              nationality: getCountryNameByCode(ocrData.nationality, language)
            }
            console.log('mapped:', mapped)

            const snapshot = getValues()
            console.log('snapshot before reset (selected fields):', {
              firstName: snapshot.firstName,
              lastName: snapshot.lastName,
              gender: snapshot.gender,
              nationality: snapshot.nationality
            })

            reset({
              ...snapshot,
              ...mapped
            })

            const after = getValues()
            console.log('after reset (selected fields):', {
              firstName: after.firstName,
              lastName: after.lastName,
              gender: after.gender,
              nationality: after.nationality
            })
          }
        } catch (error) {
          console.error('[Qualification] OCR error:', error)
          setOcrError(language === 'fr'
            ? 'Erreur lors de l\'analyse du document. Veuillez saisir vos informations manuellement.'
            : 'Error analyzing document. Please enter your information manually.')
        } finally {
          setIsOCRProcessing(false)
        }
      } else {
        const cleared = {
          firstName: '',
          lastName: '',
          gender: '',
          nationality: ''
        }

        const snapshot = getValues()
        reset({
          ...snapshot,
          ...cleared
        })

        const after = getValues()
        console.log('after clear reset (selected fields):', {
          firstName: after.firstName,
          lastName: after.lastName,
          gender: after.gender,
          nationality: after.nationality
        })

        setOcrError(null)
      }
    } else {
      setValue('insuranceCard', file as any, { shouldDirty: true, shouldValidate: true })
      console.log('after setValue(insuranceCard):', watch('insuranceCard') ? { name: (watch('insuranceCard') as any)?.name } : null)
    }

    console.log('end values:', {
      identityCard: getValues('identityCard') ? { name: (getValues('identityCard') as any)?.name } : null,
      insuranceCard: getValues('insuranceCard') ? { name: (getValues('insuranceCard') as any)?.name } : null,
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      gender: getValues('gender'),
      nationality: getValues('nationality')
    })
    console.groupEnd()
  }, [setValue, extractDocumentData, language, getValues, reset, watch])

  const onSubmit = useCallback(async () => {
    console.groupCollapsed('[Qualification] Continue submit')
    console.log('values before trigger:', {
      reason: getValues('reason'),
      insurance: getValues('insurance'),
      hasEmployer: getValues('hasEmployer'),
      consentNLPD: getValues('consentNLPD'),
      consentMarketing: getValues('consentMarketing'),
      identityCard: getValues('identityCard') ? { name: (getValues('identityCard') as any)?.name } : null,
      insuranceCard: getValues('insuranceCard') ? { name: (getValues('insuranceCard') as any)?.name } : null
    })

    const fields: Array<keyof FormData> = [
      'reason',
      'insurance',
      'consentNLPD',
      'consentMarketing',
      'identityCard'
    ]

    // Validate conditional fields only when relevant to current UI
    if (watchedReason === 'accident') {
      fields.push('hasEmployer')
    }
    if (isInsuranceCardRequired) {
      fields.push('insuranceCard')
    }

    const ok = await trigger(fields as any)

    console.log('trigger ok:', ok)
    console.log('errors after trigger:', errors)
    console.groupEnd()

    if (!ok) return
    onNext()
  }, [getValues, onNext, trigger, errors, watchedReason, isInsuranceCardRequired])

  return (
    <div className="step-page-centered">
      <motion.div
        className="step-container-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="step-card relative z-10">
          <CardHeader className="step-card-header">
            <motion.div className="step-header-stack--tight" variants={itemVariants}>
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-primary/20"
                variants={iconVariants}
                animate="pulse"
              >
                <ClipboardList className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <CardTitle className="step-title">{t.title}</CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <CardDescription className="step-subtitle">{t.subtitle}</CardDescription>
              </motion.div>
            </motion.div>
          </CardHeader>

          <CardContent className="step-card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <motion.div 
                ref={reasonRef}
                id="reason"
                variants={itemVariants}
                role="group"
                aria-labelledby="reason-label"
              >
                <label id="reason-label" className="block text-sm font-semibold text-brand-text mb-3">
                  {t.reasonLabel}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    type="button"
                    onClick={() => handleReasonChange('illness')}
                    className={`choice-btn ${
                      watchedReason === 'illness'
                        ? 'choice-btn--selected'
                        : 'choice-btn--unselected'
                    }`}
                    whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                    whileTap={{ scale: ANIMATION.SCALE_TAP }}
                    aria-pressed={watchedReason === 'illness'}
                    aria-label={t.illness}
                  >
                    {watchedReason === 'illness' && (
                      <motion.span 
                        className="absolute top-2 right-2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.span>
                    )}
                    {t.illness}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => handleReasonChange('accident')}
                    className={`choice-btn ${
                      watchedReason === 'accident'
                        ? 'choice-btn--selected'
                        : 'choice-btn--unselected'
                    }`}
                    whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                    whileTap={{ scale: ANIMATION.SCALE_TAP }}
                    aria-pressed={watchedReason === 'accident'}
                    aria-label={t.accident}
                  >
                    {watchedReason === 'accident' && (
                      <motion.span 
                        className="absolute top-2 right-2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.span>
                    )}
                    {t.accident}
                  </motion.button>
                </div>
                <AnimatePresence>
                {errors.reason && (
                  <motion.div 
                    className="form-error-inline"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.reason?.message}</span>
                  </motion.div>
                )}
                </AnimatePresence>
              </motion.div>

              <AnimatePresence mode="wait">
              {watchedReason === 'accident' && (
                <motion.div
                  key="employer-section"
                  variants={employerSectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ overflow: 'hidden' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      animate={{ 
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.3
                      }}
                    >
                      <Briefcase className="w-5 h-5 text-brand-primary" />
                    </motion.div>
                    <label id="employer-label" className="block text-sm font-semibold text-brand-text">
                      {t.hasEmployerLabel}
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="employer-label">
                        <motion.button
                          type="button"
                          onClick={() => {
                            setValue('hasEmployer', true, { shouldValidate: false })
                          }}
                          className={`choice-btn ${
                            watchedHasEmployer
                              ? 'choice-btn--selected'
                              : 'choice-btn--unselected'
                          }`}
                          whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                          whileTap={{ scale: ANIMATION.SCALE_TAP }}
                          aria-pressed={watchedHasEmployer}
                          aria-label={t.yes}
                        >
                          {watchedHasEmployer && (
                            <motion.span 
                              className="absolute top-2 right-2"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            >
                              <CheckCircle className="w-5 h-5" />
                            </motion.span>
                          )}
                          {t.yes}
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={() => {
                            setValue('hasEmployer', false, { shouldValidate: false })
                          }}
                          className={`choice-btn ${
                            !watchedHasEmployer
                              ? 'choice-btn--selected'
                              : 'choice-btn--unselected'
                          }`}
                          whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                          whileTap={{ scale: ANIMATION.SCALE_TAP }}
                          aria-pressed={!watchedHasEmployer}
                          aria-label={t.no}
                        >
                          {!watchedHasEmployer && (
                            <motion.span 
                              className="absolute top-2 right-2"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            >
                              <CheckCircle className="w-5 h-5" />
                            </motion.span>
                          )}
                          {t.no}
                        </motion.button>
                      </div>
                </motion.div>
              )}
              </AnimatePresence>

              <motion.div 
                ref={insuranceRef}
                id="insurance"
                variants={itemVariants}
                role="group"
                aria-labelledby="insurance-label"
              >
                <div className="flex items-center gap-2 mb-3">
                  <label id="insurance-label" className="block text-sm font-semibold text-brand-text">
                    {t.insuranceLabel}
                  </label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-brand-primary hover:text-brand-primary-hover text-sm font-medium underline transition-colors"
                      >
                        {t.insuranceHelp}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-brand-text">{t.insuranceHelpTitle}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-brand-text">
                        <div>
                          <h4 className="font-bold text-brand-primary mb-1">{t.insuranceHelpSwiss}</h4>
                          <p className="text-sm leading-relaxed">{t.insuranceHelpSwissDesc}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-primary mb-1">{t.insuranceHelpInternational}</h4>
                          <p className="text-sm leading-relaxed mb-2">{t.insuranceHelpInternationalDesc}</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>{t.insuranceHelpInternationalItem1}</li>
                            <li>{t.insuranceHelpInternationalItem2}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-primary mb-1">{t.insuranceHelpAuto}</h4>
                          <p className="text-sm leading-relaxed">{t.insuranceHelpAutoDesc}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {INSURANCE_TYPES.map((type, idx) => (
                    <motion.button
                      key={type}
                      type="button"
                      onClick={() => handleInsuranceChange(type)}
                      className={`choice-btn choice-btn--sm ${
                        watchedInsurance === type
                          ? 'choice-btn--selected'
                          : 'choice-btn--unselected'
                      }`}
                      whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                      whileTap={{ scale: ANIMATION.SCALE_TAP }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      aria-pressed={watchedInsurance === type}
                      aria-label={t[type]}
                    >
                      {watchedInsurance === type && (
                        <motion.span
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <CheckCircle className="w-4 h-4 absolute top-2 right-2" />
                        </motion.span>
                      )}
                      {t[type]}
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence>
                {errors.insurance && (
                  <motion.div 
                    className="form-error-inline"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.insurance?.message}</span>
                  </motion.div>
                )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <div className="space-y-4">
                  <div ref={identityCardRef}>
                  <FileUpload
                    id="identityCard"
                    label={t.identityCard}
                    file={watchedIdentityCard}
                    onFileChange={(file) => handleFileChange('identity', file)}
                    uploadText={t.uploadText}
                    required
                    language={language}
                    error={errors.identityCard?.message}
                  />
                  </div>
                  <div ref={insuranceCardRef}>
                  <FileUpload
                    id="insuranceCard"
                    file={watchedInsuranceCard}
                    onFileChange={(file) => handleFileChange('insurance', file)}
                    label={t.insuranceCard}
                    uploadText={t.uploadText}
                    required={isInsuranceCardRequired}
                    optional={!isInsuranceCardRequired}
                    optionalText={t.optional}
                    language={language}
                    error={errors.insuranceCard?.message}
                  />
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={consentNLPDRef}
                variants={itemVariants}
              >
                <label className="block text-sm font-semibold text-brand-text mb-3">
                  {t.consentsLabel}
                </label>
                <div className="space-y-3">
                  <div>
                    <div className={`flex items-start gap-3 p-4 bg-slate-50 rounded-lg ${
                      errors.consentNLPD ? 'border-2 border-brand-error' : ''
                    }`}>
                      <Checkbox
                        id="consentNLPD"
                        checked={watchedConsentNLPD}
                        onCheckedChange={(checked) => {
                          setValue('consentNLPD', checked === true, { shouldValidate: true })
                        }}
                        className="mt-0.5"
                      />
                      <Label htmlFor="consentNLPD" className="text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5 inline">
                        {t.consentNLPDPrefix}{' '}
                        <a 
                          href={t.privacyPolicyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-brand-primary hover:underline inline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {t.consentNLPDLink}
                        </a>
                        <span className="text-brand-error ml-1">*</span>
                      </Label>
                    </div>
                    {errors.consentNLPD && (
                      <div className="form-error-inline">
                        <AlertCircle className="form-error-icon" />
                        <span>{errors.consentNLPD?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <Checkbox
                      id="consentMarketing"
                      checked={watchedConsentMarketing}
                      onCheckedChange={(checked) => {
                        setValue('consentMarketing', checked === true)
                      }}
                      className="mt-0.5"
                    />
                    <Label htmlFor="consentMarketing" className="text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5">
                      {t.consentMarketing}
                      {' '}<span className="text-slate-500 text-xs">({t.optional})</span>
                    </Label>
                  </div>
                </div>
              </motion.div>

              {/* 🎯 Boutons de navigation - sans motion pour éviter conflit AnimatePresence */}
              <div className="step-actions">
                <Button
                  type="button"
                  onClick={onBack}
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 transition-all hover:scale-[1.01] active:scale-[0.98]"
                  aria-label={t.back}
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t.back}
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all hover:scale-[1.01] active:scale-[0.98]"
                  aria-label={t.continue}
                >
                  {t.continue}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
