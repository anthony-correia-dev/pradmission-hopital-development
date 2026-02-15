import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight, Loader2, Calendar } from 'lucide-react'
import { HStack, VStack, Button, H1 } from '@/components/ui'
import { FormInput } from '@/components'
import { createSecuritySchema } from '@/schemas'
import { useApi } from '@/hooks'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '@/utils'
import type { WizardFormData } from '@/types/form'

function SecurityPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const preadmissionId = watch('preadmissionId')
  const birthDate = watch('birthDate')
  const { t } = useTranslation('security')
  const api = useApi()

  const [displayDate, setDisplayDate] = useState(() =>
    birthDate ? formatDisplayDate(birthDate) : ''
  )
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  const schema = createSecuritySchema({
    required: t('required'),
    invalid: t('invalid'),
    futureDate: t('futureDate'),
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
      setError(t('invalid'))
      return
    }

    const result = schema.safeParse({ birthDate: isoDate })
    if (!result.success) {
      setError(result.error.errors[0]?.message ?? t('invalid'))
      return
    }

    setIsVerifying(true)
    try {
      const response = await api.verifyBirthDate(preadmissionId, isoDate)
      if (response.isValid) {
        setValue('birthDate', isoDate)
        void navigate({ to: '/otp' })
      } else {
        setError(t('wrongDate'))
      }
    } catch {
      setError(t('connectionError'))
    } finally {
      setIsVerifying(false)
    }
  }

  return (
        <VStack className="step-card" gap='4'>
          <VStack className="step-card-header" align='center'>
            <div className="step-icon">
              <Calendar className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <H1>{t('title')}</H1>
            <p className="step-subtitle">{t('subtitle')}</p>
          </VStack>
          <VStack className="step-card-content">
            <VStack className="gap-4">
              <FormInput
                label={t('label')}
                value={displayDate}
                onChange={handleDateChange}
                placeholder={t('placeholder')}
                error={error}
                required
                inputClassName="form-input-mono"
              />

              <HStack className="step-actions">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void navigate({ to: '/' })}
                  className="flex-1 h-12 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('back')}
                </Button>
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isVerifying}
                  className="flex-2 h-12 cursor-pointer hover:bg-[var(--brand-primary-hover)]"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('verifying')}
                    </>
                  ) : (
                    <>
                      {t('continue')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
  )
}

export const Route = createFileRoute('/security')({
  component: SecurityPage,
})
