import { useFormContext } from 'react-hook-form'
import { Shield, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { motion } from 'framer-motion'
import { otpTranslations } from '@/locales'
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

  const {
    setValue,
    trigger,
    watch,
    formState: { errors }
  } = useFormContext<FormData>()

  const otpCode = watch('otpCode')

  const handleChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 6)
    setValue('otpCode', cleaned, { shouldDirty: true, shouldValidate: false })
    trigger('otpCode')
  }

  const onSubmit = async () => {
    const ok = await trigger('otpCode')
    if (!ok) return
    onNext()
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
                {t.subtitle}
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
                aria-invalid={!!(errors as any).otpCode}
              >
                <InputOTPGroup className="otp-group">
                  {Array.from({ length: 6 }, (_, index) => (
                    <InputOTPSlot key={index} index={index} className="otp-slot" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {(errors as any).otpCode && (
                <div className="form-error-inline">
                  <AlertCircle className="w-4 h-4" />
                  <span>{(errors as any).otpCode.message}</span>
                </div>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-brand-primary hover:text-brand-primary-hover hover:bg-brand-primary/5"
                onClick={() => {
                  console.log('Resend OTP')
                }}
              >
                {t.resend}
              </Button>
            </motion.div>

            <motion.div className="step-actions" variants={itemVariants}>
              <Button
                type="button"
                onClick={onBack}
                variant="outline"
                size="lg"
                className="h-12 px-6 transition-transform active:scale-[0.98]"
              >
                <ArrowLeft className="w-5 h-5" />
                {t.back}
              </Button>
              <Button
                type="submit"
                size="lg"
                className="flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-transform active:scale-[0.98]"
              >
                {t.continue}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
