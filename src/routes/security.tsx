import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { Shield, ArrowLeft, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/FormInput'
import { securityTranslations } from '@/locales/security'
import { createSecuritySchema } from '@/schemas/security'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '@/utils/date'
import { useApi } from '@/hooks/useApi'
import type { WizardFormData } from '@/types/form'

function SecurityPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const preadmissionId = watch('preadmissionId')
  const birthDate = watch('birthDate')
  const t = securityTranslations[language]
  const api = useApi()

  const [displayDate, setDisplayDate] = useState(() =>
    birthDate ? formatDisplayDate(birthDate) : ''
  )
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  const schema = createSecuritySchema({
    required: t.required,
    invalid: t.invalid,
    futureDate: t.futureDate,
  })

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatDateInput(e.target.value)
    setDisplayDate(formatted)
    setError('')

    if (formatted.length === 10) {
      const isoDate = parseDisplayDate(formatted)
      if (isoDate) {
        setValue('birthDate', isoDate)
      }
    }
  }

  async function handleSubmit() {
    const isoDate = parseDisplayDate(displayDate)
    if (!isoDate) {
      setError(t.invalid)
      return
    }

    const result = schema.safeParse({ birthDate: isoDate })
    if (!result.success) {
      setError(result.error.errors[0]?.message ?? t.invalid)
      return
    }

    setIsVerifying(true)
    try {
      const response = await api.verifyBirthDate(preadmissionId, isoDate)
      if (response.isValid) {
        setValue('birthDate', isoDate)
        void navigate({ to: '/otp' })
      } else {
        setError(t.wrongDate)
      }
    } catch {
      setError(t.wrongDate)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="step-page-centered">
      <div className="step-container-sm">
        <div className="step-card">
          <div className="step-card-header">
            <div className="step-icon">
              <Shield className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.subtitle}</p>
          </div>
          <div className="step-card-content">
            <div className="space-y-4">
              <FormInput
                label={t.label}
                value={displayDate}
                onChange={handleDateChange}
                placeholder={t.placeholder}
                error={error}
                required
                inputClassName="form-input-mono"
              />

              {error && (
                <div className="form-error-inline">
                  <AlertCircle className="form-error-icon" />
                  <span>{error}</span>
                </div>
              )}

              <div className="step-actions">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void navigate({ to: '/' })}
                  className="flex-1 h-12 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.back}
                </Button>
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isVerifying}
                  className="flex-1 h-12 active-scale cursor-pointer"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t.verifying}
                    </>
                  ) : (
                    <>
                      {t.continue}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/security')({
  component: SecurityPage,
})
