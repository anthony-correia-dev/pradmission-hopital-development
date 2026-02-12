import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useEffect, useRef } from 'react'
import { MessageSquare, ArrowLeft, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { otpTranslations } from '@/locales/otp'
import { createOTPSchema } from '@/schemas/otp'
import { useApi } from '@/hooks/useApi'
import { cn } from '@/utils/cn'
import { TIMINGS } from '@/constants/ui'
import type { WizardFormData } from '@/types/form'

function OTPPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const preadmissionId = watch('preadmissionId')
  const t = otpTranslations[language]
  const api = useApi()

  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [lastDigits, setLastDigits] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const otpSentRef = useRef(false)

  const schema = createOTPSchema({
    required: t.required,
    invalid: t.invalid,
  })

  // Fetch phone last digits
  useEffect(() => {
    api.getPhoneLastDigits(preadmissionId).then((res) => {
      setLastDigits(res.lastDigits)
    }).catch(() => {})
  }, [preadmissionId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-send OTP on first mount
  useEffect(() => {
    if (otpSentRef.current) return
    const sent = sessionStorage.getItem('otp_sent')
    if (sent) return

    otpSentRef.current = true
    sessionStorage.setItem('otp_sent', 'true')
    api.sendOtp(preadmissionId).catch(() => {})
    setCooldown(TIMINGS.OTP_COOLDOWN_S)
  }, [preadmissionId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown timer
  useEffect(() => {
    if (cooldown <= 0) return
    const timer = setInterval(() => {
      setCooldown((c) => c - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [cooldown])

  async function handleResend() {
    if (cooldown > 0) return
    await api.sendOtp(preadmissionId)
    setCooldown(TIMINGS.OTP_COOLDOWN_S)
  }

  async function handleSubmit() {
    const result = schema.safeParse({ otpCode: code })
    if (!result.success) {
      setError(result.error.errors[0]?.message ?? t.invalid)
      return
    }

    setIsVerifying(true)
    try {
      const response = await api.verifyOTP(preadmissionId, code)
      if (response.isValid) {
        setValue('otpCode', code)
        void navigate({ to: '/qualification' })
      } else {
        setError(t.wrongCode)
      }
    } catch {
      setError(t.wrongCode)
    } finally {
      setIsVerifying(false)
    }
  }

  const subtitle = lastDigits
    ? t.subtitle.replace('{digits}', lastDigits)
    : t.subtitle.replace('****{digits}', '****')

  return (
    <div className="step-page-centered">
      <div className="step-container-sm">
        <div className="step-card">
          <div className="step-card-header">
            <div className="step-icon">
              <MessageSquare className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{subtitle}</p>
          </div>
          <div className="step-card-content">
            <div className="space-y-4">
              <div className="flex justify-center">
                <InputOTP
                  value={code}
                  onChange={(val) => {
                    setCode(val)
                    setError('')
                  }}
                  maxLength={6}
                >
                  <InputOTPGroup className="gap-1 sm:gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="otp-slot"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <div className="form-error-inline justify-center">
                  <AlertCircle className="form-error-icon" />
                  <span>{error}</span>
                </div>
              )}

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => void handleResend()}
                  disabled={cooldown > 0}
                  className={cn(
                    'text-sm cursor-pointer',
                    cooldown > 0
                      ? 'text-slate-400'
                      : 'text-[var(--brand-primary)] hover:underline'
                  )}
                >
                  {cooldown > 0
                    ? `${t.resendPrefix} ${t.resendCountdown.replace('{seconds}', String(cooldown))}`
                    : t.resendReady}
                </button>
              </div>

              <div className="step-actions">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void navigate({ to: '/security' })}
                  className="flex-1 h-12 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.back}
                </Button>
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isVerifying || code.length !== 6}
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

export const Route = createFileRoute('/otp')({
  component: OTPPage,
})
