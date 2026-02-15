import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { H3 } from '@/components/ui'
import { DoctorCombobox } from '@/components'
import type { WizardFormData } from '@/types/form'

export function DoctorsSection() {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('doctors')}</H3>
      </div>
      <DoctorCombobox
        id="referringDoctor"
        label={t('referringDoctor')}
        value={watch('referringDoctor')}
        onChange={(v) => setValue('referringDoctor', v)}
        placeholder={t('')}
        noResultsText={t('noResults')}
        optional={t('optional')}
      />
      <DoctorCombobox
        id="generalPractitioner"
        label={t('generalPractitioner')}
        value={watch('generalPractitioner')}
        onChange={(v) => setValue('generalPractitioner', v)}
        placeholder={t('')}
        noResultsText={t('noResults')}
        optional={t('optional')}
      />
    </div>
  )
}
