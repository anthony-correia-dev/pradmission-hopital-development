import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, m } from 'motion/react'
import { H3 } from '@/components/ui'
import { FormInput } from '@/components'
import { formatAvsNumber, formatCardNumber } from '@/utils'
import { slideVariants } from '@/utils/motionVariants'
import type { WizardFormData } from '@/types/form'

interface InsuranceSectionProps {
  errors: Record<string, string>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
  showAvs: boolean
  showBasicInsurance: boolean
  showCardNumber: boolean
  showPolicyNumber: boolean
}

export function InsuranceSection({ errors, setRef, showAvs, showBasicInsurance, showCardNumber, showPolicyNumber }: InsuranceSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('insuranceData')}</H3>
      </div>
      <AnimatePresence>
        {showAvs && (
          <m.div key="avs" variants={slideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('avsNumber')}>
            <FormInput
              label={t('avsNumber')}
              value={formatAvsNumber(watch('avsNumber'))}
              onChange={(e) => setValue('avsNumber', e.target.value.replace(/\D/g, '').slice(0, 13))}
              error={errors.avsNumber}
              required
              inputClassName="form-input-mono"
              placeholder="XXX.XXXX.XXXX.XX"
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showBasicInsurance && (
          <m.div key="basic-insurance" variants={slideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('basicInsurance')}>
            <FormInput
              label={t('basicInsurance')}
              value={watch('basicInsurance')}
              onChange={(e) => setValue('basicInsurance', e.target.value)}
              error={errors.basicInsurance}
              required
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCardNumber && (
          <m.div key="card-number" variants={slideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('cardNumber')}>
            <FormInput
              label={t('cardNumber')}
              value={formatCardNumber(watch('cardNumber'))}
              onChange={(e) => setValue('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 20))}
              error={errors.cardNumber}
              required
              inputClassName="form-input-mono"
              placeholder="XXXXX XXXXX XXXXX XXXXX"
            />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showPolicyNumber && (
          <m.div key="policy-number" variants={slideVariants} initial="hidden" animate="visible" exit="exit" ref={setRef('policyNumber')}>
            <FormInput
              label={t('policyNumber')}
              value={watch('policyNumber')}
              onChange={(e) => setValue('policyNumber', e.target.value)}
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
