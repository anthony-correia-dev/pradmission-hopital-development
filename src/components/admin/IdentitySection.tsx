import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AlertCircle } from 'lucide-react'
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, H3 } from '@/components/ui'
import { FormInput, CountryCombobox } from '@/components'
import { getNationalities } from '@/utils/country'
import type { WizardFormData } from '@/types/form'

interface IdentitySectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
}

export function IdentitySection({ errors, setErrors, setRef }: IdentitySectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')
  const language = watch('language')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('identity')}</H3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div ref={setRef('firstName')}>
          <FormInput
            label={t('firstName')}
            value={watch('firstName')}
            onChange={(e) => {
              setValue('firstName', e.target.value)
              setErrors((prev) => { const n = { ...prev }; delete n.firstName; return n })
            }}
            error={errors.firstName}
            required
          />
        </div>
        <div ref={setRef('lastName')}>
          <FormInput
            label={t('lastName')}
            value={watch('lastName')}
            onChange={(e) => {
              setValue('lastName', e.target.value)
              setErrors((prev) => { const n = { ...prev }; delete n.lastName; return n })
            }}
            error={errors.lastName}
            required
          />
        </div>
        <div ref={setRef('gender')} className="space-y-2">
          <Label className="text-sm text-[var(--brand-text)] !font-normal">
            {t('gender')} <span className="text-[var(--brand-error)]">*</span>
          </Label>
          <Select
            value={watch('gender')}
            onValueChange={(v) => {
              setValue('gender', v)
              setErrors((prev) => { const n = { ...prev }; delete n.gender; return n })
            }}
          >
            <SelectTrigger className="form-input">
              <SelectValue placeholder={t('')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">{t('male')}</SelectItem>
              <SelectItem value="female">{t('female')}</SelectItem>
              <SelectItem value="other">{t('other')}</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <div className="form-error-inline-tight">
              <AlertCircle className="form-error-icon" />
              <span>{errors.gender}</span>
            </div>
          )}
        </div>
        <div ref={setRef('nationality')}>
          <CountryCombobox
            id="nationality"
            label={t('nationality')}
            value={watch('nationality')}
            onChange={(v) => {
              setValue('nationality', v)
              setErrors((prev) => { const n = { ...prev }; delete n.nationality; return n })
            }}
            countries={getNationalities(language)}
            placeholder={t('selectPlaceholder')}
            error={errors.nationality}
            noResultsText={t('noResults')}
            withFlags
            required
          />
        </div>
      </div>
    </div>
  )
}
