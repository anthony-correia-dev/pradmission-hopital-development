import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { H3 } from '@/components/ui'
import { FormInput } from '@/components'
import type { WizardFormData } from '@/types/form'

interface EmployerSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
  employerRequired: boolean
}

export function EmployerSection({ errors, setErrors, setRef, employerRequired }: EmployerSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('employer')}</H3>
      </div>
      <div ref={setRef('profession')}>
        <FormInput
          label={t('profession')}
          value={watch('profession')}
          onChange={(e) => {
            setValue('profession', e.target.value)
            setErrors((prev) => { const n = { ...prev }; delete n.profession; return n })
          }}
          error={errors.profession}
          required={employerRequired}
          optional={!employerRequired ? t('optional') : undefined}
        />
      </div>
      <div ref={setRef('employerName')}>
        <FormInput
          label={t('employerName')}
          value={watch('employerName')}
          onChange={(e) => {
            setValue('employerName', e.target.value)
            setErrors((prev) => { const n = { ...prev }; delete n.employerName; return n })
          }}
          error={errors.employerName}
          required={employerRequired}
          optional={!employerRequired ? t('optional') : undefined}
        />
      </div>
      <div ref={setRef('employerAddress')}>
        <FormInput
          label={t('employerAddress')}
          value={watch('employerAddress')}
          onChange={(e) => {
            setValue('employerAddress', e.target.value)
            setErrors((prev) => { const n = { ...prev }; delete n.employerAddress; return n })
          }}
          error={errors.employerAddress}
          required={employerRequired}
          optional={!employerRequired ? t('optional') : undefined}
          maxLength={250}
        />
      </div>
    </div>
  )
}
