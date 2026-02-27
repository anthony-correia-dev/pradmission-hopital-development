import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'motion/react'
import { ClipboardList, ArrowRight } from 'lucide-react'
import { HStack, VStack, Button, H1, P } from '@/components/ui'
import { createQualificationSchema } from '@/schemas'
import { getAnimationVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations'
import type { WizardFormData } from '@/types/form'
import {
  ReasonSection,
  InsuranceTypeSection,
  FileUploadsSection,
  ConsentsSection,
  InsuranceHelpDialog,
} from '@/components/qualification'

function QualificationPage() {
  const navigate = useNavigate()
  const { watch, setValue } = useFormContext<WizardFormData>()
  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')
  const consentNLPD = watch('consentNLPD')
  const consentMarketing = watch('consentMarketing')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')
  const { t } = useTranslation('qualification')
  const { t: tLoading } = useTranslation('loading')

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessingId, setIsProcessingId] = useState(false)
  const [isProcessingInsurance, setIsProcessingInsurance] = useState(false)
  const [showInsuranceHelp, setShowInsuranceHelp] = useState(false)

  const reasonRef = useRef<HTMLDivElement>(null)
  const insuranceRef = useRef<HTMLDivElement>(null)
  const identityRef = useRef<HTMLDivElement>(null)
  const insuranceCardRef = useRef<HTMLDivElement>(null)
  const consentRef = useRef<HTMLDivElement>(null)

  const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
    reason: reasonRef,
    insurance: insuranceRef,
    identityCard: identityRef,
    insuranceCard: insuranceCardRef,
    consentNLPD: consentRef,
  }

  // Handle redirect back from loading page when OCR returned not_covered
  // Flag stays in sessionStorage until onAnimationComplete reads it,
  // because TanStack Router + StrictMode can remount up to 4 times.
  useEffect(() => {
    if (!sessionStorage.getItem('not_covered_redirect')) return

    // Clear insurance card + all OCR-populated insurance fields
    setValue('insuranceCard', null)
    setValue('insuranceCardBase64', '')
    setValue('insuranceCardMimeType', '')
    setValue('cardNumber', '')
    setValue('basicInsurance', '')
    setValue('complementaryInsurance', '')
    setValue('complementaryInsuranceName', '')
    setValue('street', '')
    setValue('city', '')
    setValue('npa', '')
    setValue('country', '')
    setValue('avsNumber', '')

    setErrors((prev) => ({
      ...prev,
      insuranceCard: tLoading('notCovered'),
    }))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit() {
    const schema = createQualificationSchema(insurance, reason, {
      reasonRequired: t('reasonRequired'),
      insuranceRequired: t('insuranceRequired'),
      consentRequired: t('consentNLPDRequired'),
      identityRequired: t('identityCardRequired'),
      insuranceCardRequired: t('insuranceCardRequired'),
    })

    const result = schema.safeParse({
      reason,
      insurance,
      hasEmployer,
      consentNLPD,
      consentMarketing,
      identityCard,
      insuranceCard,
    })

    if (!result.success) {
      const newErrors: Record<string, string> = {}
      for (const err of result.error.errors) {
        const key = err.path[0] as string
        newErrors[key] = err.message
      }
      setErrors(newErrors)

      const firstErrorKey = Object.keys(newErrors)[0]
      if (firstErrorKey) {
        const ref = refMap[firstErrorKey]
        ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setErrors({})

    void navigate({ to: '/loading' })
  }

  const container = getAnimationVariants(staggerContainerVariants)
  const item = getAnimationVariants(staggerItemVariants)

  return (
    <div className="step-page">
      <m.div
        className="step-container-lg"
        variants={container}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
          if (sessionStorage.getItem('not_covered_redirect')) {
            sessionStorage.removeItem('not_covered_redirect')
            insuranceCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }}
      >
        <div className="step-card-compact p-2">
          <m.div variants={item}>
            <VStack className="step-card-header" align='center'>
              <div className="step-icon !bg-primary">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <VStack align='center' gap='2'>
                <H1>{t('title')}</H1>
                <P className="step-subtitle" color='muted-light'>{t('subtitle')}</P>
              </VStack>
            </VStack>
          </m.div>
          <VStack className="step-card-content gap-10">
            <m.div variants={item}>
              <ReasonSection
                errors={errors}
                setErrors={setErrors}
                reasonRef={reasonRef}
              />
            </m.div>
            <m.div variants={item}>
              <InsuranceTypeSection
                errors={errors}
                setErrors={setErrors}
                insuranceRef={insuranceRef}
                onShowHelp={() => setShowInsuranceHelp(true)}
              />
            </m.div>
            <m.div variants={item}>
              <FileUploadsSection
                errors={errors}
                setErrors={setErrors}
                identityRef={identityRef}
                insuranceCardRef={insuranceCardRef}
                isProcessingId={isProcessingId}
                setIsProcessingId={setIsProcessingId}
                isProcessingInsurance={isProcessingInsurance}
                setIsProcessingInsurance={setIsProcessingInsurance}
              />
            </m.div>
            <m.div variants={item}>
              <ConsentsSection
                errors={errors}
                setErrors={setErrors}
                consentRef={consentRef}
              />
            </m.div>

            <m.div variants={item}>
              <HStack className="step-actions">
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  className="flex-1 h-12 active-scale cursor-pointer"
                >
                  {t('continue')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </HStack>
            </m.div>
          </VStack>
        </div>

        <InsuranceHelpDialog
          open={showInsuranceHelp}
          onOpenChange={setShowInsuranceHelp}
        />
      </m.div>
    </div>
  )
}

export const Route = createFileRoute('/qualification')({
  component: QualificationPage,
})
