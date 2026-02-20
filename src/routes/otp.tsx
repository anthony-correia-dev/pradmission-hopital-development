import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { m } from 'motion/react'
import { ArrowLeft, ArrowRight, Loader2, AlertCircle, Shield } from 'lucide-react'
import { HStack, VStack, Button, InputOTP, InputOTPGroup, InputOTPSlot, H1, P } from '@/components/ui'
import { createOTPSchema } from '@/schemas'
import { useApi } from '@/hooks'
import { TIMINGS } from '@/constants/ui'
import { getAnimationVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations'
import type { WizardFormData } from '@/types/form'

function OTPPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const preadmissionId = watch('preadmissionId')
  const language = watch('language')
  const { t } = useTranslation('otp')
  const api = useApi()

  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [lastDigits, setLastDigits] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const otpSentRef = useRef(false)

  const schema = createOTPSchema({
    required: t('required'),
    invalid: t('invalid'),
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
    const sentAt = sessionStorage.getItem('otp_sent')

    if (sentAt) {
      // Restore remaining cooldown from the stored timestamp
      const elapsed = Math.floor((Date.now() - Number(sentAt)) / 1000)
      const remaining = TIMINGS.OTP_COOLDOWN_S - elapsed
      if (remaining > 0) setCooldown(remaining)
      return
    }

    otpSentRef.current = true
    sessionStorage.setItem('otp_sent', String(Date.now()))
    console.log('[OTP] Sending OTP...')
    api.sendOtp(preadmissionId, language)
      .then(() => console.log('[OTP] OTP sent successfully'))
      .catch((err) => console.error('[OTP] Failed to send OTP:', err))
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

  const isCoolingDown = cooldown > 0

  async function handleResend() {
    if (isCoolingDown || isResending) return
    setIsResending(true)
    try {
      console.log('[OTP] Resending OTP...')
      await api.sendOtp(preadmissionId, language)
      console.log('[OTP] OTP resent successfully')
      sessionStorage.setItem('otp_sent', String(Date.now()))
      setCooldown(TIMINGS.OTP_COOLDOWN_S)
    } finally {
      setIsResending(false)
    }
  }

  async function handleSubmit() {
    const result = schema.safeParse({ otpCode: code })
    if (!result.success) {
      setError(result.error.errors[0]?.message ?? t('invalid'))
      return
    }

    setIsVerifying(true)
    try {
      console.log('[OTP] Verifying OTP code...')
      const response = await api.verifyOTP(preadmissionId, code)
      console.log('[OTP] Verify response:', response)
      if (response.isValid) {
        setValue('otpCode', code)
        void navigate({ to: '/qualification' })
      } else {
        setError(t('invalidCode'))
      }
    } catch {
      setError(t('invalidCode'))
    } finally {
      setIsVerifying(false)
    }
  }

  const container = getAnimationVariants(staggerContainerVariants)
  const item = getAnimationVariants(staggerItemVariants)

  return (
        <m.div className="step-card" variants={container} initial="hidden" animate="visible">
          <m.div variants={item}>
            <VStack className="step-card-header" align='center'>
              <div className="step-icon">
                <Shield className="w-8 h-8 text-[var(--brand-primary)]" />
              </div>
              <VStack gap='1' align='center'>
                <H1>{t('title')}</H1>
              <P className="step-subtitle" color='muted-light'>{t('subtitle', { digits: lastDigits || '****' })}</P>
              </VStack>
            </VStack>
          </m.div>
          <m.div variants={item}>
            <VStack className="step-card-content">
              <VStack className="gap-4">
                <HStack justify="center">
                  <InputOTP
                  value={code}
                  onChange={(val) => {
                    setCode(val)
                    setError('')
                  }}
                  maxLength={6}
                  onKeyDown={(e) => {
                  if (e.key === 'Enter') void handleSubmit()
                }}
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
              </HStack>

              {error && (
                <div className="form-error-inline justify-center">
                  <AlertCircle className="form-error-icon" />
                  <span>{error}</span>
                </div>
              )}

              <HStack justify="center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void handleResend()}
                  disabled={isCoolingDown || isResending}
                  className="text-sm text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10"
                >
                  {isResending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('resend')}
                    </>
                  ) : isCoolingDown
                    ? t('resendIn', { count: cooldown })
                    : t('resend')}
                </Button>
              </HStack>

              <HStack className="step-actions">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void navigate({ to: '/security' })}
                  className="flex-1 h-12 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('back')}
                </Button>
                <Button
                  type="button"
                  onClick={() => void handleSubmit()}
                  disabled={isVerifying || code.length !== 6}
                  className="flex-2 h-12 cursor-pointer"
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
          </m.div>
        </m.div>
  )
}

export const Route = createFileRoute('/otp')({
  component: OTPPage,
})
