import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, m } from 'motion/react'
import { AlertCircle } from 'lucide-react'
import { ChoiceButton } from '@/components/ui'
import { employerSlideVariants } from '@/lib/animations'
import type { WizardFormData } from '@/types/form'

interface ReasonSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  reasonRef: React.RefObject<HTMLDivElement | null>
}

export function ReasonSection({ errors, setErrors, reasonRef }: ReasonSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('qualification')
  const reason = watch('reason')
  const hasEmployer = watch('hasEmployer')

  return (
    <div className="space-y-6">
      {/* Reason */}
      <div ref={reasonRef} className="space-y-3">
        <label className="text-sm font-medium text-[var(--brand-text)]">
          {t('reasonLabel')} <span className="text-[var(--brand-error)]">*</span>
        </label>
        <div className="flex gap-3">
          {(['illness', 'accident'] as const).map((r) => (
            <ChoiceButton
              key={r}
              selected={reason === r}
              onClick={() => {
                setValue('reason', r)
                setErrors((prev) => { const n = { ...prev }; delete n.reason; return n })
              }}
            >
              {r === 'illness' ? t('illness') : t('accident')}
            </ChoiceButton>
          ))}
        </div>
        {errors.reason && (
          <div className="form-error-inline-tight">
            <AlertCircle className="form-error-icon" />
            <span>{errors.reason}</span>
          </div>
        )}
      </div>

      {/* Has Employer (only for accident) */}
      <AnimatePresence>
        {reason === 'accident' && (
          <m.div
            key="has-employer"
            variants={employerSlideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-3"
          >
            <label className="text-sm font-medium text-[var(--brand-text)]">
              {t('hasEmployerLabel')}
            </label>
            <div className="flex gap-3">
              {[true, false].map((val) => (
                <ChoiceButton
                  key={String(val)}
                  selected={hasEmployer === val}
                  onClick={() => setValue('hasEmployer', val)}
                  sm
                >
                  {val ? t('yes') : t('no')}
                </ChoiceButton>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
