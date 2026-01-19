import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Calendar, ArrowRight, ArrowLeft, AlertCircle, Loader2 } from 'lucide-react'
import { useApi } from '../hooks/useApi'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '../lib/dateUtils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { motion } from 'framer-motion'
import { securityTranslations } from '@/locales'
import {
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import type { FormData } from '@/hooks/useWizard'

interface SecurityProps {
  language: 'fr' | 'en'
  onNext: () => void
  onBack: () => void
}

export function Security({ language, onNext, onBack }: SecurityProps) {
  const t = securityTranslations[language]
  const { verifyBirthDate } = useApi()
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [apiError, setApiError] = useState('')

  const {
    getValues,
    setValue,
    trigger,
    formState: { errors }
  } = useFormContext<FormData>()

  useEffect(() => {
    const birthDate = getValues('birthDate')
    if (birthDate) {
      setInputValue(formatDisplayDate(birthDate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const formatted = formatDateInput(rawValue)
    setInputValue(formatted)
    setApiError('')

    if (formatted.length === 10) {
      const isoDate = parseDisplayDate(formatted, { allowFuture: false })

      if (isoDate) {
        setValue('birthDate', isoDate, { shouldDirty: true, shouldValidate: false })
        trigger('birthDate')
      } else {
        setValue('birthDate', '', { shouldDirty: true, shouldValidate: false })
        trigger('birthDate')
      }
    } else {
      setValue('birthDate', '', { shouldDirty: true, shouldValidate: false })
    }
  }

  const onSubmit = async () => {
    setLoading(true)
    setApiError('')
    try {
      const ok = await trigger('birthDate')
      if (!ok) {
        setLoading(false)
        return
      }

      const birthDate = getValues('birthDate')
      const preadmissionId = getValues('preadmissionId')
      
      // ✅ Appel API getbirth avec preadmissionId
      const result = await verifyBirthDate(preadmissionId, birthDate)
      
      if (result.success) {
        onNext()
      } else {
        setApiError(result.message || t.invalidBirthDate)
      }
    } catch {
      setApiError(t.invalidBirthDate)
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
      >
        <Card className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm">
          <CardHeader className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <motion.div variants={itemVariants}>
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-brand-text text-center mb-2">
                {t.title}
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 text-center">
                {t.subtitle}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
          <form onSubmit={(e) => { e.preventDefault(); void onSubmit() }} className="space-y-6">
            <motion.div variants={itemVariants}>
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
                <div className="flex items-center gap-2 mt-2 text-brand-error text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{(errors as any).birthDate?.message || apiError}</span>
                </div>
              )}
            </motion.div>

            <motion.div className="flex gap-3 pt-4" variants={itemVariants}>
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
                className="group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-transform active:scale-[0.98]"
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
