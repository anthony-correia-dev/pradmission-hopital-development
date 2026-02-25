import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, m } from 'motion/react'
import { H3 } from '@/components/ui'
import { FormInput } from '@/components'
import { formatAvsNumber, formatCardNumber } from '@/utils'
import { employerSlideVariants } from '@/lib/animations'
import type { WizardFormData } from '@/types/form'

interface InsuranceSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
  showAvs: boolean
  showBasicInsurance: boolean
  showCardNumber: boolean
  showPolicyNumber: boolean
  isAutoPayeur: boolean
  insurance: string | undefined
}

export function InsuranceSection({ errors, setErrors, setRef, showAvs, showBasicInsurance, showCardNumber, showPolicyNumber, isAutoPayeur, insurance }: InsuranceSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')

  const avsRequired = insurance === 'swiss'
  const avsOptional = !avsRequired

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('insuranceData')}</H3>
      </div>
      <AnimatePresence>
        {showAvs && (
          <m.div key="avs" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('avsNumber')}>
            <FormInput
              label={t('avsNumber')}
              value={formatAvsNumber(watch('avsNumber'))}
              onChange={(e) => {
                setValue('avsNumber', e.target.value.replace(/\D/g, '').slice(0, 13))
                setErrors((prev) => { const n = { ...prev }; delete n.avsNumber; return n })
              }}
              error={errors.avsNumber}
              required={avsRequired}
              optional={avsOptional ? t('optional') : undefined}
              inputClassName="form-input-mono"
              placeholder="XXX.XXXX.XXXX.XX"
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showBasicInsurance && (
          <m.div key="basic-insurance" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('basicInsurance')}>
            <FormInput
              label={t('basicInsurance')}
              value={watch('basicInsurance')}
              onChange={(e) => {
                setValue('basicInsurance', e.target.value)
                setErrors((prev) => { const n = { ...prev }; delete n.basicInsurance; return n })
              }}
              error={errors.basicInsurance}
              required={!isAutoPayeur}
              optional={isAutoPayeur ? t('optional') : undefined}
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCardNumber && (
          <m.div key="card-number" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('cardNumber')}>
            <FormInput
              label={t('cardNumber')}
              value={formatCardNumber(watch('cardNumber'))}
              onChange={(e) => {
                setValue('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 20))
                setErrors((prev) => { const n = { ...prev }; delete n.cardNumber; return n })
              }}
              error={errors.cardNumber}
              required={!isAutoPayeur}
              optional={isAutoPayeur ? t('optional') : undefined}
              inputClassName="form-input-mono"
              placeholder="XXXXX XXXXX XXXXX XXXXX"
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showPolicyNumber && (
          <m.div key="policy-number" variants={employerSlideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('policyNumber')}>
            <FormInput
              label={t('policyNumber')}
              value={watch('policyNumber')}
              onChange={(e) => {
                setValue('policyNumber', e.target.value)
                setErrors((prev) => { const n = { ...prev }; delete n.policyNumber; return n })
              }}
              error={errors.policyNumber}
              required
            />
          </m.div>
        )}
      </AnimatePresence>
      <FormInput
        label={t('complementaryInsurance')}
        value={formatCardNumber(watch('complementaryInsurance'))}
        onChange={(e) => setValue('complementaryInsurance', e.target.value.replace(/\D/g, '').slice(0, 20))}
        optional={t('optional')}
        inputClassName="form-input-mono"
        placeholder="XXXXX XXXXX XXXXX XXXXX"
      />
    </div>
  )
}
