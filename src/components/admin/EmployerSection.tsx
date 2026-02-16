import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { H3 } from '@/components/ui'
import { FormInput } from '@/components'
import type { WizardFormData } from '@/types/form'

interface EmployerSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
}

export function EmployerSection({ errors, setErrors, setRef }: EmployerSectionProps) {
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
          required
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
          required
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
          required
          maxLength={250}
        />
      </div>
    </div>
  )
}
