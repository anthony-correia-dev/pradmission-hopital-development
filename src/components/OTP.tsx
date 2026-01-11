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
  iconVariants,
  buttonVariants
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
    getValues,
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
        style={{ willChange: 'opacity' }}
      >
        <Card className="step-card">
          <CardHeader className="step-card-header">
            <motion.div 
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.div 
                className="step-icon"
                variants={iconVariants}
                animate="pulse"
                style={{ willChange: 'transform' }}
              >
                <Shield className="w-8 h-8 text-brand-primary" />
              </motion.div>
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
            <motion.div
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
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
                <motion.div 
                  className="form-error-inline"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{(errors as any).otpCode.message}</span>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
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

            <motion.div 
              className="step-actions"
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <Button
                type="button"
                onClick={onBack}
                variant="outline"
                size="lg"
                className="h-12 px-6"
                asChild
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t.back}
                </motion.button>
              </Button>
              <Button
                type="submit"
                size="lg"
                className="flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white"
                asChild
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  {t.continue}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Button>
            </motion.div>
          </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
