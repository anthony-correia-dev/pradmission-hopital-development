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
import { useApi, type OCRDocumentResponse, type OCRInsuranceResponse } from '../hooks/useApi'
import { getCountryNameByCode } from '../lib/countries'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { ANIMATION } from '@/lib/animations'
import type { FormData } from '@/hooks/useWizard'

// 🎯 Types d'assurance disponibles
const INSURANCE_TYPES = ['swiss', 'international', 'auto'] as const

// 🎭 Unified animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
      ease: 'easeOut'
    }
  }
}

const iconVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      duration: ANIMATION.DURATION_LONG,
      ease: 'easeOut'
    }
  }
}

// 🎭 Slide down animation for employer section
const employerSlideVariants: Variants = {
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
      height: { type: "spring", stiffness: 100, damping: 20 },
      opacity: { duration: 0.3 },
      y: { type: "spring", stiffness: 100, damping: 20 },
    }
  },
  exit: { 
    opacity: 0,
    height: 0,
    y: -20,
    transition: {
      height: { duration: 0.2 },
      opacity: { duration: 0.15 },
      y: { duration: 0.2 },
    }
  }
}

const sectionVariants: Variants = {
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
    if (type === 'identity') {
      setValue('identityCard', file as any, { shouldDirty: true, shouldValidate: true })

      if (file) {
        setIsOCRProcessing(true)
        setOcrError(null)

        try {
          const ocrData = await extractDocumentData(file, 'id_card')

          // 🎯 Type guard: vérifier que c'est bien une réponse d'identité
          if (ocrData && 'firstName' in ocrData && 'lastName' in ocrData) {
            const mapped = {
              firstName: ocrData.firstName,
              lastName: ocrData.lastName,
              gender: ocrData.gender,
              nationality: getCountryNameByCode(ocrData.nationality, language)
            }

            const snapshot = getValues()
            reset({
              ...snapshot,
              ...mapped
            })
          }
        } catch (error) {
          console.error('[Qualification] OCR Identity error:', error)
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

        setOcrError(null)
      }
    } else {
      // 🎯 OCR pour carte d'assurance
      setValue('insuranceCard', file as any, { shouldDirty: true, shouldValidate: true })

      if (file) {
        setIsOCRProcessing(true)
        setOcrError(null)

        try {
          console.log('[Qualification] 📄 Début extraction OCR carte d\'assurance...')
          const ocrData = await extractDocumentData(file, 'insurance_card')

          // 🎯 Type guard: vérifier que c'est bien une réponse d'assurance
          if (ocrData && 'kvgCardNumber' in ocrData) {
            console.log('[Qualification] ✅ Données OCR assurance extraites:', ocrData)
            
            // 🎯 Mapping vers les champs FormData (useWizard.ts)
            const mapped = {
              street: ocrData.street,
              npa: ocrData.zipCode,
              city: ocrData.city,
              country: getCountryNameByCode(ocrData.country, language),
              avsNumber: ocrData.avsNumber,
              basicInsurance: ocrData.kvgInsuranceName,
              cardNumber: ocrData.kvgCardNumber,
              complementaryInsurance: ocrData.vvgCardNumber
            }

            console.log('[Qualification] 📝 Mapping des champs:', mapped)

            const snapshot = getValues()
            reset({
              ...snapshot,
              ...mapped
            })
          } else {
            console.warn('[Qualification] ⚠️ Données OCR assurance invalides ou incomplètes')
          }
        } catch (error) {
          console.error('[Qualification] ❌ OCR Insurance error:', error)
          setOcrError(language === 'fr'
            ? 'Erreur lors de l\'analyse de la carte d\'assurance. Veuillez saisir vos informations manuellement.'
            : 'Error analyzing insurance card. Please enter your information manually.')
        } finally {
          setIsOCRProcessing(false)
        }
      } else {
        // Nettoyage des champs si fichier retiré
        const cleared = {
          street: '',
          npa: '',
          city: '',
          country: '',
          avsNumber: '',
          basicInsurance: '',
          cardNumber: '',
          complementaryInsurance: ''
        }

        const snapshot = getValues()
        reset({
          ...snapshot,
          ...cleared
        })

        setOcrError(null)
      }
    }
  }, [setValue, extractDocumentData, language, getValues, reset])

  const onSubmit = useCallback(async () => {
    const fields: Array<keyof FormData> = [
      'reason',
      'insurance',
      'consentNLPD',
      'consentMarketing',
      'identityCard'
    ]

    if (watchedReason === 'accident') {
      fields.push('hasEmployer')
    }
    if (isInsuranceCardRequired) {
      fields.push('insuranceCard')
    }

    const ok = await trigger(fields as any)
    if (!ok) return
    onNext()
  }, [onNext, trigger, watchedReason, isInsuranceCardRequired])

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
              >
                <ClipboardList className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="step-title">{t.title}</CardTitle>
              <CardDescription className="step-subtitle">{t.subtitle}</CardDescription>
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
                  <button
                    type="button"
                    onClick={() => handleReasonChange('illness')}
                    className={`choice-btn transition-transform active:scale-[0.98] ${
                      watchedReason === 'illness'
                        ? 'choice-btn--selected'
                        : 'choice-btn--unselected'
                    }`}
                    aria-pressed={watchedReason === 'illness'}
                    aria-label={t.illness}
                  >
                    {watchedReason === 'illness' && (
                      <CheckCircle className="w-5 h-5 absolute top-2 right-2" />
                    )}
                    {t.illness}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReasonChange('accident')}
                    className={`choice-btn transition-transform active:scale-[0.98] ${
                      watchedReason === 'accident'
                        ? 'choice-btn--selected'
                        : 'choice-btn--unselected'
                    }`}
                    aria-pressed={watchedReason === 'accident'}
                    aria-label={t.accident}
                  >
                    {watchedReason === 'accident' && (
                      <CheckCircle className="w-5 h-5 absolute top-2 right-2" />
                    )}
                    {t.accident}
                  </button>
                </div>
                {errors.reason && (
                  <div className="form-error-inline">
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.reason?.message}</span>
                  </div>
                )}
              </motion.div>

              <AnimatePresence mode="wait">
              {watchedReason === 'accident' && (
                <motion.div
                  key="employer-section"
                  variants={employerSlideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-brand-primary" />
                    <label id="employer-label" className="block text-sm font-semibold text-brand-text">
                      {t.hasEmployerLabel}
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="employer-label">
                    <button
                      type="button"
                      onClick={() => setValue('hasEmployer', true, { shouldValidate: false })}
                      className={`choice-btn transition-transform active:scale-[0.98] ${
                        watchedHasEmployer
                          ? 'choice-btn--selected'
                          : 'choice-btn--unselected'
                      }`}
                      aria-pressed={watchedHasEmployer}
                      aria-label={t.yes}
                    >
                      {watchedHasEmployer && (
                        <CheckCircle className="w-5 h-5 absolute top-2 right-2" />
                      )}
                      {t.yes}
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue('hasEmployer', false, { shouldValidate: false })}
                      className={`choice-btn transition-transform active:scale-[0.98] ${
                        !watchedHasEmployer
                          ? 'choice-btn--selected'
                          : 'choice-btn--unselected'
                      }`}
                      aria-pressed={!watchedHasEmployer}
                      aria-label={t.no}
                    >
                      {!watchedHasEmployer && (
                        <CheckCircle className="w-5 h-5 absolute top-2 right-2" />
                      )}
                      {t.no}
                    </button>
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
                  {INSURANCE_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleInsuranceChange(type)}
                      className={`choice-btn choice-btn--sm transition-transform active:scale-[0.98] ${
                        watchedInsurance === type
                          ? 'choice-btn--selected'
                          : 'choice-btn--unselected'
                      }`}
                      aria-pressed={watchedInsurance === type}
                      aria-label={t[type]}
                    >
                      {watchedInsurance === type && (
                        <CheckCircle className="w-4 h-4 absolute top-2 right-2" />
                      )}
                      {t[type]}
                    </button>
                  ))}
                </div>
                {errors.insurance && (
                  <div className="form-error-inline">
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.insurance?.message}</span>
                  </div>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
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

              <motion.div ref={consentNLPDRef} variants={itemVariants}>
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

              {/* 🎯 Boutons de navigation - CSS transitions only */}
              <div className="step-actions">
                <Button
                  type="button"
                  onClick={onBack}
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 transition-transform active:scale-[0.98]"
                  aria-label={t.back}
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t.back}
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-transform active:scale-[0.98]"
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
