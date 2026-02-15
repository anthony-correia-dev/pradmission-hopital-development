import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { H3 } from '@/components/ui'
import { FormInput } from '@/components'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '@/utils'
import type { WizardFormData } from '@/types/form'

interface AccidentSectionProps {
  errors: Record<string, string>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
}

export function AccidentSection({ errors, setRef }: AccidentSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t, i18n } = useTranslation('admin')

  const [accidentDisplay, setAccidentDisplay] = useState(() => {
    const d = watch('accidentDate')
    return d ? formatDisplayDate(d) : ''
  })

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('accidentData')}</H3>
      </div>
      <div ref={setRef('accidentDate')}>
        <FormInput
          label={t('accidentDate')}
          value={accidentDisplay}
          onChange={(e) => {
            const formatted = formatDateInput(e.target.value)
            setAccidentDisplay(formatted)
            if (formatted.length === 10) {
              const iso = parseDisplayDate(formatted, { allowFuture: false })
              if (iso) setValue('accidentDate', iso)
            }
          }}
          placeholder={i18n.language === 'fr' ? 'JJ.MM.AAAA' : 'DD.MM.YYYY'}
          error={errors.accidentDate}
          required
          inputClassName="form-input-mono"
        />
      </div>
      <FormInput
        label={t('accidentInsurance')}
        value={watch('accidentInsurance')}
        onChange={(e) => setValue('accidentInsurance', e.target.value)}
        optional={t('optional')}
      />
      <FormInput
        label={t('claimNumber')}
        value={watch('claimNumber')}
        onChange={(e) => setValue('claimNumber', e.target.value)}
        optional={t('optional')}
      />
    </div>
  )
}
