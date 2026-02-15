import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AlertCircle } from 'lucide-react'
import { Checkbox, Label } from '@/components/ui'
import type { WizardFormData } from '@/types/form'

interface ConsentsSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  consentRef: React.RefObject<HTMLDivElement | null>
}

export function ConsentsSection({ errors, setErrors, consentRef }: ConsentsSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('qualification')
  const consentNLPD = watch('consentNLPD')
  const consentMarketing = watch('consentMarketing')

  return (
    <div ref={consentRef} className="space-y-3">
      <label className="text-sm font-semibold text-[var(--brand-text)]">
        {t('consentsLabel')}
      </label>
      <div className="space-y-3">
        <div className="rounded-lg bg-[rgb(248_250_252)] p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consentNLPD"
              checked={consentNLPD}
              onCheckedChange={(checked) => {
                setValue('consentNLPD', checked === true)
                setErrors((prev) => { const n = { ...prev }; delete n.consentNLPD; return n })
              }}
            />
            <Label htmlFor="consentNLPD" className="text-sm leading-5 cursor-pointer">
              {t('consentNLPDPrefix')}
              <a
                href={t('privacyPolicyUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[var(--brand-primary)] hover:!underline"
                onClick={(e) => e.stopPropagation()}
              >
                {t('consentNLPDLink')}
              </a>
              <span className="text-[var(--brand-error)] ml-0.5">*</span>
            </Label>
          </div>
          {errors.consentNLPD && (
            <div className="form-error-inline-tight ml-7 mt-2">
              <AlertCircle className="form-error-icon" />
              <span>{errors.consentNLPD}</span>
            </div>
          )}
        </div>

        <div className="rounded-lg bg-[rgb(248_250_252)] p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consentMarketing"
              checked={consentMarketing}
              onCheckedChange={(checked) => setValue('consentMarketing', checked === true)}
            />
            <Label htmlFor="consentMarketing" className="text-sm leading-5 cursor-pointer flex-1">
              {t('consentMarketing')}
            </Label>
            <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap self-center">
              [{t('optional')}]
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
