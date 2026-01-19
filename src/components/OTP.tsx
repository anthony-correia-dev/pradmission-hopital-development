import { useState, useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Shield, ArrowRight, ArrowLeft, AlertCircle, Loader2 } from 'lucide-react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { motion } from 'framer-motion'
import { otpTranslations } from '@/locales'
import { useApi } from '@/hooks/useApi'
import {
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import type { FormData } from '@/hooks/useWizard'

interface OTPProps {
  language: 'fr' | 'en'
  phoneNumber?: string
  onNext: () => void
  onBack: () => void
}

export function OTP({ language, onNext, onBack }: OTPProps) {
  const t = otpTranslations[language]
  const { getPhoneLastDigits, sendOtp, verifyOTP } = useApi()
  const [lastDigits, setLastDigits] = useState('XXXX')
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)
  const otpSentRef = useRef(false)

  const {
    setValue,
    trigger,
    watch,
    getValues,
    formState: { errors }
  } = useFormContext<FormData>()

  const otpCode = watch('otpCode')

  // Récupérer les derniers chiffres ET envoyer l'OTP au montage
  useEffect(() => {
    const initOtp = async () => {
      const preadmissionId = getValues('preadmissionId')
      if (preadmissionId) {
        // Récupérer les derniers chiffres du téléphone
        const digits = await getPhoneLastDigits(preadmissionId)
        setLastDigits(digits)
        
        // Envoyer l'OTP (une seule fois)
        if (!otpSentRef.current) {
          otpSentRef.current = true
          await sendOtp(preadmissionId)
        }
      }
    }
    initOtp()
  }, [getPhoneLastDigits, sendOtp, getValues])

  // Remplacer XXXX dans le subtitle
  const subtitleWithPhone = t.subtitle.replace('XXXX', lastDigits)

  // Fonction pour renvoyer le code
  const handleResendOtp = async () => {
    const preadmissionId = getValues('preadmissionId')
    if (preadmissionId) {
      await sendOtp(preadmissionId)
    }
  }

  const handleChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 6)
    setValue('otpCode', cleaned, { shouldDirty: true, shouldValidate: false })
    setApiError('')
    trigger('otpCode')
  }

  const onSubmit = async () => {
    setLoading(true)
    setApiError('')
    
    try {
      // Validation Zod locale
      const ok = await trigger('otpCode')
      if (!ok) {
        setLoading(false)
        return
      }

      const preadmissionId = getValues('preadmissionId')
      const code = getValues('otpCode')
      
      // ✅ Appel Cloud Flow verifyOtp
      const result = await verifyOTP(preadmissionId, code)
      
      if (result.success) {
        onNext() // Passage à qualification
      } else {
        setApiError(result.message || t.invalidCode)
      }
    } catch {
      setApiError(t.invalidCode)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="step-page">
      <motion.div 
        className="step-container-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="step-card">
          <CardHeader className="step-card-header">
            <motion.div variants={itemVariants}>
              <div className="step-icon">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="step-title">
                {t.title}
              </CardTitle>
              <CardDescription className="step-subtitle">
                {subtitleWithPhone}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="step-card-content">
          <form onSubmit={(e) => { e.preventDefault(); void onSubmit() }} className="space-y-6">
            <motion.div variants={itemVariants}>
              <InputOTP
                id="otp"
                maxLength={6}
                value={otpCode}
                onChange={handleChange}
                containerClassName="justify-center"
                aria-invalid={!!((errors as any).otpCode || apiError)}
                disabled={loading}
              >
                <InputOTPGroup className="otp-group">
                  {Array.from({ length: 6 }, (_, index) => (
                    <InputOTPSlot key={index} index={index} className="otp-slot" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {((errors as any).otpCode || apiError) && (
                <div className="form-error-inline">
                  <AlertCircle className="w-4 h-4" />
                  <span>{(errors as any).otpCode?.message || apiError}</span>
                </div>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-brand-primary hover:text-brand-primary-hover hover:bg-brand-primary/5"
                onClick={handleResendOtp}
                disabled={loading}
              >
                {t.resend}
              </Button>
            </motion.div>

            <motion.div className="step-actions" variants={itemVariants}>
              <Button
                type="button"
                onClick={onBack}
                disabled={loading}
                variant="outline"
                size="lg"
                className="h-12 px-6 transition-transform active:scale-[0.98]"
              >
                <ArrowLeft className="w-5 h-5" />
                {t.back}
              </Button>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-transform active:scale-[0.98]"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.verifying}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    {t.continue}
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
