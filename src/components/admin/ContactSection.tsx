import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { H3 } from '@/components/ui'
import { FormInput, CountryCombobox } from '@/components'
import { getCountries } from '@/utils/country'
import type { WizardFormData } from '@/types/form'

interface ContactSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  setRef: (key: string) => (el: HTMLDivElement | null) => void
}

export function ContactSection({ errors, setErrors, setRef }: ContactSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')
  const language = watch('language')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('contact')}</H3>
      </div>
      <div ref={setRef('street')}>
        <FormInput
          label={t('street')}
          value={watch('street')}
          onChange={(e) => {
            setValue('street', e.target.value)
            setErrors((prev) => { const n = { ...prev }; delete n.street; return n })
          }}
          error={errors.street}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div ref={setRef('npa')}>
          <FormInput
            label={t('npa')}
            value={watch('npa')}
            onChange={(e) => {
              setValue('npa', e.target.value.replace(/\D/g, '').slice(0, 10))
              setErrors((prev) => { const n = { ...prev }; delete n.npa; return n })
            }}
            error={errors.npa}
            required
            maxLength={10}
          />
        </div>
        <div ref={setRef('city')}>
          <FormInput
            label={t('city')}
            value={watch('city')}
            onChange={(e) => {
              setValue('city', e.target.value.slice(0, 50))
              setErrors((prev) => { const n = { ...prev }; delete n.city; return n })
            }}
            error={errors.city}
            required
            maxLength={50}
          />
        </div>
      </div>
      <div ref={setRef('country')}>
        <CountryCombobox
          id="country"
          label={t('country')}
          value={watch('country')}
          onChange={(v) => {
            setValue('country', v)
            setErrors((prev) => { const n = { ...prev }; delete n.country; return n })
          }}
          countries={getCountries(language)}
          placeholder={t('selectPlaceholder')}
          error={errors.country}
          noResultsText={t('noResults')}
          withFlags
          required
        />
      </div>
      <div ref={setRef('email')}>
        <FormInput
          label={t('email')}
          type="email"
          value={watch('email')}
          onChange={(e) => {
            setValue('email', e.target.value)
            setErrors((prev) => { const n = { ...prev }; delete n.email; return n })
          }}
          error={errors.email}
          required
        />
      </div>
    </div>
  )
}
