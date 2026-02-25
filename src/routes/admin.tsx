import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { AnimatePresence, m } from 'motion/react'
import { ArrowLeft, Loader2, Send, User } from 'lucide-react'
import { HStack, VStack, Button, H1, P } from '@/components/ui'
import { createAdminSchema } from '@/schemas'
import { useApi } from '@/hooks'
import { getAnimationVariants, staggerContainerVariants, staggerItemVariants, employerSlideVariants } from '@/lib/animations'
import type { WizardFormData } from '@/types/form'
import {
  IdentitySection,
  ContactSection,
  EmployerSection,
  DoctorsSection,
  AccidentSection,
  InsuranceSection,
} from '@/components/admin'

function AdminPage() {
  const navigate = useNavigate()
  const { watch, getValues } = useFormContext<WizardFormData>()
  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')
  const { t } = useTranslation('admin')
  const api = useApi()

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Show toast only when OCR actually prefilled data
  useEffect(() => {
    if (sessionStorage.getItem('ocr_prefilled') === 'true') {
      sessionStorage.removeItem('ocr_prefilled')
      toast.info(t('ocrInfoToast'), { duration: 3000 })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const refMap = useRef<Record<string, HTMLDivElement | null>>({})
  const setRef = (key: string) => (el: HTMLDivElement | null) => {
    refMap.current[key] = el
  }

  function scrollToFirstError(errorKeys: string[]) {
    for (const key of errorKeys) {
      const el = refMap.current[key]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break
      }
    }
  }

  async function handleSubmit() {
    const schema = createAdminSchema(reason, insurance, hasEmployer, {
      required: t('required'),
      invalidEmail: t('invalidEmail'),
      invalidNpa: t('invalidNpa'),
      invalidAvs: t('invalidAvs'),
      invalidCardNumber: t('invalidCardNumber'),
      invalidDate: t('invalidDate'),
      maxLength: t('maxLength'),
    })

    const values = getValues()
    const result = schema.safeParse({
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      nationality: values.nationality,
      street: values.street,
      npa: values.npa,
      city: values.city,
      country: values.country,
      email: values.email,
      profession: values.profession,
      employerName: values.employerName,
      employerAddress: values.employerAddress,
      referringDoctor: values.referringDoctor,
      generalPractitioner: values.generalPractitioner,
      accidentDate: values.accidentDate,
      accidentInsurance: values.accidentInsurance,
      claimNumber: values.claimNumber,
      avsNumber: values.avsNumber,
      basicInsurance: values.basicInsurance,
      cardNumber: values.cardNumber,
      policyNumber: values.policyNumber,
      complementaryInsurance: values.complementaryInsurance,
    })

    if (!result.success) {
      const newErrors: Record<string, string> = {}
      for (const err of result.error.errors) {
        const key = err.path[0] as string
        if (!newErrors[key]) newErrors[key] = err.message
      }
      setErrors(newErrors)
      scrollToFirstError(Object.keys(newErrors))
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const formData = getValues()
      console.log('[Submit] Submitting preadmission...')
      await api.submitPreadmission(formData)
      console.log('[Submit] Preadmission submitted successfully')
      sessionStorage.removeItem('wizard-form-data')
      sessionStorage.removeItem('otp_sent')
      void navigate({ to: '/success' })
    } catch {
      setIsSubmitting(false)
    }
  }

  const showEmployer = reason === 'accident' && hasEmployer
  const showAccident = reason === 'accident'
  const isAutoPayeur = insurance === 'auto'
  const showAvs = insurance === 'swiss' || insurance === 'international' || isAutoPayeur
  const showBasicInsurance =
    reason === 'accident' || insurance === 'swiss' || insurance === 'international' || isAutoPayeur
  const showCardNumber = reason === 'accident' || insurance === 'swiss' || isAutoPayeur
  const showPolicyNumber = insurance === 'international'

  const container = getAnimationVariants(staggerContainerVariants)
  const item = getAnimationVariants(staggerItemVariants)

  return (
    <div className="step-page">
      <m.div
        className="step-container-lg"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="step-card-compact">
          <m.div variants={item}>
            <VStack className="step-card-header" align='center'>
              <div className="step-icon">
                <User className="w-8 h-8 text-[var(--brand-primary)]" />
              </div>
              <H1>{t('title')}</H1>
              <P className="step-subtitle">{t('subtitle')}</P>
            </VStack>
          </m.div>
          <VStack className="step-card-content gap-6">
            <m.div variants={item}>
              <IdentitySection errors={errors} setErrors={setErrors} setRef={setRef} />
            </m.div>
            <m.div variants={item}>
              <ContactSection errors={errors} setErrors={setErrors} setRef={setRef} />
            </m.div>
            <AnimatePresence mode="wait">
              {!!showEmployer && (
                <m.div key="employer" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit">
                  <EmployerSection errors={errors} setErrors={setErrors} setRef={setRef} />
                </m.div>
              )}
            </AnimatePresence>
            <m.div variants={item}>
              <DoctorsSection />
            </m.div>
            <AnimatePresence mode="wait">
              {!!showAccident && (
                <m.div key="accident" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit">
                  <AccidentSection errors={errors} setErrors={setErrors} setRef={setRef} />
                </m.div>
              )}
            </AnimatePresence>
            <m.div variants={item}>
              <InsuranceSection
                errors={errors}
                setErrors={setErrors}
                setRef={setRef}
                showAvs={showAvs}
                showBasicInsurance={showBasicInsurance}
                showCardNumber={showCardNumber}
                showPolicyNumber={showPolicyNumber}
                isAutoPayeur={isAutoPayeur}
                insurance={insurance}
              />
            </m.div>

            <m.div variants={item}>
              <HStack className="step-actions">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void navigate({ to: '/qualification' })}
                  className="flex-1 h-12 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('back')}
                </Button>
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isSubmitting}
                  className="flex-1 h-12 active-scale cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('continue')}
                    </>
                  )}
                </Button>
              </HStack>
            </m.div>
          </VStack>
        </div>
      </m.div>
    </div>
  )
}

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})
