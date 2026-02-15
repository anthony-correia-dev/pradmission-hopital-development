import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { m, type Variants } from 'motion/react'
import { ClipboardList, ArrowRight, Loader2 } from 'lucide-react'
import { HStack, VStack, Button, H1, P } from '@/components/ui'
import { createQualificationSchema } from '@/schemas'
import type { WizardFormData } from '@/types/form'
import {
  ReasonSection,
  InsuranceTypeSection,
  FileUploadsSection,
  ConsentsSection,
  InsuranceHelpDialog,
} from '@/components/qualification'

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
}

function QualificationPage() {
  const navigate = useNavigate()
  const { watch } = useFormContext<WizardFormData>()
  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')
  const consentNLPD = watch('consentNLPD')
  const consentMarketing = watch('consentMarketing')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')
  const { t } = useTranslation('qualification')

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

  function handleSubmit() {
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

  return (
    <div className="step-page">
      <m.div
        className="step-container-lg"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="step-card-compact">
          <m.div variants={fadeIn}>
            <VStack className="step-card-header" align='center'>
              <m.div className="step-icon" variants={fadeIn}>
                <ClipboardList className="w-8 h-8 text-[var(--brand-primary)]" />
              </m.div>
              <VStack align='center' gap='1'>
                <H1>{t('title')}</H1>
                <P className="step-subtitle">{t('subtitle')}</P>
              </VStack>
            </VStack>
          </m.div>
          <VStack className="step-card-content gap-6">
            <m.div variants={fadeIn}>
            <ReasonSection
              errors={errors}
              setErrors={setErrors}
              reasonRef={reasonRef}
            />
            </m.div>
            <m.div variants={fadeIn}>
            <InsuranceTypeSection
              errors={errors}
              setErrors={setErrors}
              insuranceRef={insuranceRef}
              onShowHelp={() => setShowInsuranceHelp(true)}
            />
            </m.div>
            <m.div variants={fadeIn}>
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
            <m.div variants={fadeIn}>
            <ConsentsSection
              errors={errors}
              setErrors={setErrors}
              consentRef={consentRef}
            />
            </m.div>

            <m.div variants={fadeIn}>
            <HStack className="step-actions">
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isProcessingId || isProcessingInsurance}
                className="flex-1 h-12 active-scale cursor-pointer"
              >
                {isProcessingId || isProcessingInsurance ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('continue')}
                  </>
                ) : (
                  <>
                    {t('continue')}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
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
