import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AlertCircle, HelpCircle } from 'lucide-react'
import { ChoiceButton } from '@/components/ui'
import type { WizardFormData } from '@/types/form'

interface InsuranceTypeSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  insuranceRef: React.RefObject<HTMLDivElement | null>
  onShowHelp: () => void
}

export function InsuranceTypeSection({ errors, setErrors, insuranceRef, onShowHelp }: InsuranceTypeSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('qualification')
  const insurance = watch('insurance')

  return (
    <div ref={insuranceRef} className="space-y-3">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-[var(--brand-text)]">
          {t('insuranceLabel')} <span className="text-[var(--brand-error)]">*</span>
        </label>
        <button
          type="button"
          onClick={onShowHelp}
          className="inline-flex items-center gap-0.5 text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] !text-[14px] cursor-pointer transition-colors"
        >
          {t('insuranceHelp')}
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {(['swiss', 'international', 'auto'] as const).map((ins) => (
          <ChoiceButton
            key={ins}
            selected={insurance === ins}
            onClick={() => {
              setValue('insurance', ins)
              setErrors((prev) => { const n = { ...prev }; delete n.insurance; return n })
            }}
            sm
            className="min-w-[120px]"
          >
            {ins === 'swiss' ? t('swiss') : ins === 'international' ? t('international') : t('auto')}
          </ChoiceButton>
        ))}
      </div>
      {errors.insurance && (
        <div className="form-error-inline-tight">
          <AlertCircle className="form-error-icon" />
          <span>{errors.insurance}</span>
        </div>
      )}
    </div>
  )
}
