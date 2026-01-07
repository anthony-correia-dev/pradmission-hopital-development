import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { createQualificationSchema, QualificationFormData } from '../schemas/qualificationSchema'
import { qualificationTranslations } from '../locales/qualification'
import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { useApi } from '../hooks/useApi'
import { getCountryNameByCode } from '../lib/countries'

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
  reason: 'illness' | 'accident' | ''
  insurance: 'swiss' | 'international' | 'auto' | ''
  hasEmployer: boolean
  consentNLPD: boolean
  consentMarketing: boolean
  identityCard: File | null
  insuranceCard: File | null
  onReasonChange: (reason: 'illness' | 'accident') => void
  onInsuranceChange: (insurance: 'swiss' | 'international' | 'auto') => void
  onHasEmployerChange: (hasEmployer: boolean) => void
  onConsentNLPDChange: (consent: boolean) => void
  onConsentMarketingChange: (consent: boolean) => void
  onIdentityCardChange: (file: File | null) => void
  onInsuranceCardChange: (file: File | null) => void
  onOCRDataExtracted: (data: { firstName: string; lastName: string; gender: string; nationality: string }) => void
  onNext: () => void
  onBack: () => void
}

export function Qualification({ language, reason, insurance, hasEmployer, consentNLPD, consentMarketing, identityCard, insuranceCard, onReasonChange, onInsuranceChange, onHasEmployerChange, onConsentNLPDChange, onConsentMarketingChange, onIdentityCardChange, onInsuranceCardChange, onOCRDataExtracted, onNext, onBack }: QualificationProps) {
  const t = qualificationTranslations[language]
  const { extractDocumentData } = useApi()

  // 🎯 État OCR
  const [isOCRProcessing, setIsOCRProcessing] = useState(false)
  const [ocrError, setOcrError] = useState<string | null>(null)

  // 🎯 Refs pour le scroll automatique
  const reasonRef = useRef<HTMLDivElement>(null)
  const insuranceRef = useRef<HTMLDivElement>(null)
  const identityCardRef = useRef<HTMLDivElement>(null)
  const insuranceCardRef = useRef<HTMLDivElement>(null)
  const consentNLPDRef = useRef<HTMLDivElement>(null)

  // 🎯 Valeurs initiales pour le schema (avant useForm)
  const [schemaReason, setSchemaReason] = useState<'illness' | 'accident' | ''>(reason)
  const [schemaInsurance, setSchemaInsurance] = useState<'swiss' | 'international' | 'auto' | ''>(insurance)

  // 🎯 Schema réactif qui se met à jour avec les valeurs observées
  const schema = useMemo(() => createQualificationSchema(schemaInsurance, schemaReason, {
    reasonRequired: t.reasonRequired,
    insuranceRequired: t.insuranceRequired,
    identityCardRequired: t.identityCardRequired,
    insuranceCardRequired: t.insuranceCardRequired,
    consentNLPDRequired: t.consentNLPDRequired
  }), [schemaInsurance, schemaReason, t.reasonRequired, t.insuranceRequired, t.identityCardRequired, t.insuranceCardRequired, t.consentNLPDRequired])

  const { handleSubmit: handleFormSubmit, formState: { errors }, setValue, trigger, watch } = useForm<QualificationFormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      reason: reason || undefined,
      insurance: insurance || undefined,
      hasEmployer: hasEmployer,
      consentNLPD: consentNLPD,
      consentMarketing: consentMarketing,
      identityCard: identityCard || undefined,
      insuranceCard: insuranceCard || undefined
    }
  })

  // 🎯 Valeurs observées (source unique de vérité) - un seul appel à watch()
  const formValues = watch()
  const watchedReason = formValues.reason || reason
  const watchedInsurance = formValues.insurance || insurance

  // 🎯 Condition extraite pour la carte d'assurance
  const isInsuranceCardRequired = watchedInsurance === 'swiss'

  // 🎯 Synchroniser le schema quand les valeurs changènt (avec guard anti-boucle)
  useEffect(() => {
    if (watchedReason !== schemaReason) {
      setSchemaReason(watchedReason)
    }
  }, [watchedReason, schemaReason])

  useEffect(() => {
    if (watchedInsurance !== schemaInsurance) {
      setSchemaInsurance(watchedInsurance)
    }
  }, [watchedInsurance, schemaInsurance])

  // 🎯 Scroll automatique vers le premier champ en erreur
  useEffect(() => {
    const errorKeys = Object.keys(errors)
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

  // 🎯 Handlers optimisés avec useCallback
  const handleReasonChange = useCallback((newReason: 'illness' | 'accident') => {
    setValue('reason', newReason, { shouldValidate: false })
    onReasonChange(newReason)
  }, [setValue, onReasonChange])

  const handleInsuranceChange = useCallback((newInsurance: 'swiss' | 'international' | 'auto') => {
    setValue('insurance', newInsurance, { shouldValidate: false })
    onInsuranceChange(newInsurance)
  }, [setValue, onInsuranceChange])

  // 🎯 Handler pour l'upload de fichier avec OCR intégré
  const handleFileChange = useCallback(async (type: 'identity' | 'insurance', file: File | null) => {
    if (type === 'identity') {
      setValue('identityCard', file as File, { shouldValidate: true })
      onIdentityCardChange(file)

      // 🎯 Appeler l'OCR si un fichier est uploadé
      if (file) {
        setIsOCRProcessing(true)
        setOcrError(null)
        
        try {
          const ocrData = await extractDocumentData(file, 'id_card')
          
          if (ocrData) {
            // Mapper les données OCR vers le formulaire Admin
            // ⚠️ birthDate est ignoré selon la spécification
            // ✅ nationality est transformé de code ISO vers nom complet
            onOCRDataExtracted({
              firstName: ocrData.firstName,
              lastName: ocrData.lastName,
              gender: ocrData.gender,
              nationality: getCountryNameByCode(ocrData.nationality, language)
            })
            console.log('✅ OCR: Données pré-remplies avec succès')
          }
        } catch (error) {
          console.error('❌ OCR: Erreur lors de l\'extraction', error)
          setOcrError(language === 'fr' 
            ? 'Erreur lors de l\'analyse du document. Veuillez saisir vos informations manuellement.'
            : 'Error analyzing document. Please enter your information manually.')
        } finally {
          setIsOCRProcessing(false)
        }
      }
    } else {
      setValue('insuranceCard', file as File | undefined, { shouldValidate: true })
      onInsuranceCardChange(file)
    }
  }, [setValue, onIdentityCardChange, onInsuranceCardChange, extractDocumentData, onOCRDataExtracted, language])

  const onSubmit = useCallback(() => {
    onNext()
  }, [onNext])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4">
      <motion.div 
        className="w-full max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 backdrop-blur-sm relative z-10">
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-primary/20"
              variants={iconVariants}
              animate="pulse"
            >
              <ClipboardList className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold text-brand-text text-center mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              {t.title}
            </motion.h1>
            <motion.p 
              className="text-sm text-slate-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              {t.subtitle}
            </motion.p>
          </motion.div>

          <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-8">
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
                  className={`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${
                    watchedReason === 'illness'
                      ? 'bg-brand-primary text-white border border-brand-primary'
                      : 'border border-slate-300 text-slate-700 bg-white hover:border-brand-primary'
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
                  className={`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${
                    watchedReason === 'accident'
                      ? 'bg-brand-primary text-white border border-brand-primary'
                      : 'border border-slate-300 text-slate-700 bg-white hover:border-brand-primary'
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
                  className="flex items-center gap-2 mt-2 text-brand-error text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
                          onHasEmployerChange(true)
                        }}
                        className={`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${
                          hasEmployer
                            ? 'bg-brand-primary text-white border border-brand-primary'
                            : 'border border-slate-300 text-slate-700 bg-white hover:border-brand-primary'
                        }`}
                        whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                        whileTap={{ scale: ANIMATION.SCALE_TAP }}
                        aria-pressed={hasEmployer}
                        aria-label={t.yes}
                      >
                        {hasEmployer && (
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
                          onHasEmployerChange(false)
                        }}
                        className={`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${
                          !hasEmployer
                            ? 'bg-brand-primary text-white border border-brand-primary'
                            : 'border border-slate-300 text-slate-700 bg-white hover:border-brand-primary'
                        }`}
                        whileHover={{ scale: ANIMATION.SCALE_HOVER }}
                        whileTap={{ scale: ANIMATION.SCALE_TAP }}
                        aria-pressed={!hasEmployer}
                        aria-label={t.no}
                      >
                        {!hasEmployer && (
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
                    className={`h-14 px-4 rounded-md font-medium text-sm relative overflow-hidden transition-all ${
                      watchedInsurance === type
                        ? 'bg-brand-primary text-white border border-brand-primary'
                        : 'border border-slate-300 text-slate-700 bg-white hover:border-brand-primary'
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
                  className="flex items-center gap-2 mt-2 text-brand-error text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
                  file={identityCard}
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
                  file={insuranceCard}
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
                      checked={consentNLPD}
                      onCheckedChange={(checked) => {
                        setValue('consentNLPD', checked === true, { shouldValidate: true })
                        onConsentNLPDChange(checked === true)
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
                    <div className="flex items-center gap-2 mt-2 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errors.consentNLPD?.message}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <Checkbox
                    id="consentMarketing"
                    checked={consentMarketing}
                    onCheckedChange={(checked) => {
                      setValue('consentMarketing', checked === true)
                      onConsentMarketingChange(checked === true)
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
            <div className="flex gap-3 pt-4">
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
        </div>
      </motion.div>
    </div>
  )
}
