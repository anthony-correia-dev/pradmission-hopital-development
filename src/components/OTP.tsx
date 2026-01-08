import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Shield, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { createOTPSchema, OTPFormData } from '../schemas/otpSchema'
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

interface OTPProps {
  language: 'fr' | 'en'
  otpCode: string
  phoneNumber?: string
  onOTPChange: (code: string) => void
  onNext: () => void
  onBack: () => void
}

export function OTP({ language, otpCode, onOTPChange, onNext, onBack }: OTPProps) {
  const t = otpTranslations[language]

  const schema = createOTPSchema({
    required: t.required,
    invalid: t.invalid
  })

  const { register, handleSubmit: handleFormSubmit, formState: { errors }, setValue, trigger } = useForm<OTPFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      otpCode: otpCode
    }
  })

  const handleChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 6)
    setValue('otpCode', cleaned)
    onOTPChange(cleaned)
    trigger('otpCode')
  }

  const onSubmit = async (data: OTPFormData) => {
    onNext()
  }

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <motion.div 
        className="w-full max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ willChange: 'opacity' }}
      >
        <Card className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm">
          <CardHeader className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <motion.div 
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.div 
                className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                animate="pulse"
                style={{ willChange: 'transform' }}
              >
                <Shield className="w-8 h-8 text-brand-primary" />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-brand-text text-center mb-2">
                {t.title}
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 text-center">
                {t.subtitle}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
          <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
            <motion.div
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <label htmlFor="otp" className="block text-sm font-medium text-brand-text mb-3 text-center">
                {t.label}
              </label>
              <InputOTP
                id="otp"
                maxLength={6}
                value={otpCode}
                onChange={handleChange}
                containerClassName="justify-center"
                aria-invalid={!!errors.otpCode}
              >
                <InputOTPGroup className="gap-1.5 sm:gap-2">
                  <InputOTPSlot index={0} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                  <InputOTPSlot index={1} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                  <InputOTPSlot index={2} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                  <InputOTPSlot index={3} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                  <InputOTPSlot index={4} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                  <InputOTPSlot index={5} className="h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50" />
                </InputOTPGroup>
              </InputOTP>
              {errors.otpCode && (
                <motion.div 
                  className="flex items-center gap-2 mt-2 text-brand-error text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.otpCode.message}</span>
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
              className="flex gap-3 pt-4"
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
