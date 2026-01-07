import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar, ArrowRight, ArrowLeft, AlertCircle, Loader2 } from 'lucide-react'
import { useApi } from '../hooks/useApi'
import { createSecuritySchema, SecurityFormData } from '../schemas/securitySchema'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '../lib/dateUtils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { motion, type Variants } from 'framer-motion'
import { securityTranslations } from '@/locales'
import { 
  containerVariants, 
  itemVariants, 
  iconVariants, 
  buttonVariants,
  ANIMATION 
} from '@/lib/animations'

interface SecurityProps {
  language: 'fr' | 'en'
  birthDate: string
  onBirthDateChange: (date: string) => void
  onNext: () => void
  onBack: () => void
}

const inputVariants = {
  focus: {
    scale: 1.005,
    transition: { duration: 0.2 }
  }
}

export function Security({ language, birthDate, onBirthDateChange, onNext, onBack }: SecurityProps) {
  const t = securityTranslations[language]
  const { verifyBirthDate } = useApi()
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [apiError, setApiError] = useState('')

  const schema = createSecuritySchema({
    required: t.required,
    invalid: t.invalid,
    futureDate: t.futureDate
  })

  const { register, handleSubmit: handleFormSubmit, formState: { errors }, setValue, trigger } = useForm<SecurityFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      birthDate: birthDate
    }
  })

  useEffect(() => {
    if (birthDate) {
      setInputValue(formatDisplayDate(birthDate))
    }
  }, [])

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const formatted = formatDateInput(rawValue)
    setInputValue(formatted)
    setApiError('') // Clear API errors when user types
    
    if (formatted.length === 10) {
      const isoDate = parseDisplayDate(formatted, { allowFuture: false })
      
      if (isoDate) {
        setValue('birthDate', isoDate)
        onBirthDateChange(isoDate)
        trigger('birthDate')
      } else {
        setValue('birthDate', '')
        onBirthDateChange('')
        trigger('birthDate')
      }
    } else {
      setValue('birthDate', '')
      onBirthDateChange('')
    }
  }

  const onSubmit = async (data: SecurityFormData) => {
    setLoading(true)
    setApiError('')
    try {
      const result = await verifyBirthDate(data.birthDate)
      if (result.success) {
        onNext()
      } else {
        // API returned a failure message
        setApiError(result.message || t.invalid)
      }
    } catch (err) {
      // Network or unexpected errors
      setApiError(t.invalid)
    } finally {
      setLoading(false)
    }
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
                <Calendar className="w-8 h-8 text-brand-primary" />
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
              <label htmlFor="birthDate" className="block text-sm font-medium text-brand-text mb-2">
                {t.label}
              </label>
              <div className="relative">
                <Input
                  id="birthDate"
                  type="text"
                  inputMode="numeric"
                  value={inputValue}
                  onChange={handleDateInput}
                  placeholder={t.placeholder}
                  aria-invalid={!!(errors.birthDate || apiError)}
                  className={`w-full h-12 px-4 font-mono tracking-wider ${
                    errors.birthDate || apiError
                      ? 'border-brand-error focus-visible:ring-brand-error'
                      : ''
                  }`}
                  disabled={loading}
                  maxLength={10}
                />
              </div>
              {(errors.birthDate || apiError) && (
                <motion.div 
                  className="flex items-center gap-2 mt-2 text-brand-error text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.birthDate?.message || apiError}</span>
                </motion.div>
              )}
            </motion.div>

            {/* Boutons avec animations */}
            <motion.div 
              className="flex gap-3 pt-4"
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              <Button
                type="button"
                onClick={onBack}
                disabled={loading}
                variant="outline"
                size="lg"
                className="h-12 px-6 transition-all"
                asChild
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>
                  {t.back}
                </motion.button>
              </Button>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all overflow-hidden relative"
                asChild
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  {loading ? (
                    <motion.div
                      className="relative z-10 flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.verifying}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="relative z-10 flex items-center justify-center gap-2"
                    >
                      {t.continue}
                      <motion.div
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  )}
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
