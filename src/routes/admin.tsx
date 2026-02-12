import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useRef } from 'react'
import {
  FileText,
  ArrowLeft,
  Loader2,
  AlertCircle,
  Send,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormInput } from '@/components/FormInput'
import { CountryCombobox } from '@/components/CountryCombobox'
import { DoctorCombobox } from '@/components/DoctorCombobox'
import { adminTranslations } from '@/locales/admin'
import { createAdminSchema } from '@/schemas/admin'
import { useApi } from '@/hooks/useApi'
import { formatAvsNumber, formatCardNumber } from '@/utils/format'
import { formatDateInput, parseDisplayDate, formatDisplayDate } from '@/utils/date'
import type { WizardFormData } from '@/types/form'

function AdminPage() {
  const navigate = useNavigate()
  const { setValue, watch, getValues } = useFormContext<WizardFormData>()
  const language = watch('language')
  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')
  const t = adminTranslations[language]
  const api = useApi()

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accidentDisplay, setAccidentDisplay] = useState(() => {
    const d = watch('accidentDate')
    return d ? formatDisplayDate(d) : ''
  })

  // Refs for scroll-to-error
  const refMap = useRef<Record<string, HTMLDivElement | null>>({})
  const setRef = (key: string) => (el: HTMLDivElement | null) => {
    refMap.current[key] = el
  }

  function scrollToFirstError(errorKeys: string[]) {
    for (const key of errorKeys) {
      const el = refMap.current[key]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break
      }
    }
  }

  async function handleSubmit() {
    const schema = createAdminSchema(reason, insurance, hasEmployer, {
      required: t.required,
      invalidEmail: t.invalidEmail,
      invalidNpa: t.invalidNpa,
      invalidAvs: t.invalidAvs,
      invalidCardNumber: t.invalidCardNumber,
      invalidDate: t.invalidDate,
    })

    const values = getValues()
    const result = schema.safeParse({
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      nationality: values.nationality,
      street: values.street,
      npa: values.npa,
      city: values.city,
      country: values.country,
      email: values.email,
      profession: values.profession,
      employerName: values.employerName,
      employerAddress: values.employerAddress,
      referringDoctor: values.referringDoctor,
      generalPractitioner: values.generalPractitioner,
      accidentDate: values.accidentDate,
      accidentInsurance: values.accidentInsurance,
      claimNumber: values.claimNumber,
      avsNumber: values.avsNumber,
      basicInsurance: values.basicInsurance,
      cardNumber: values.cardNumber,
      policyNumber: values.policyNumber,
      complementaryInsurance: values.complementaryInsurance,
    })

    if (!result.success) {
      const newErrors: Record<string, string> = {}
      for (const err of result.error.errors) {
        const key = err.path[0] as string
        if (!newErrors[key]) newErrors[key] = err.message
      }
      setErrors(newErrors)
      scrollToFirstError(Object.keys(newErrors))
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const formData = getValues()
      await api.submitPreadmission(formData)
      void navigate({ to: '/success' })
    } catch {
      setIsSubmitting(false)
    }
  }

  const showEmployer = reason === 'accident' && hasEmployer
  const showAccident = reason === 'accident'
  const showAvs = insurance === 'swiss'
  const showBasicInsurance =
    reason === 'accident' || insurance === 'swiss' || insurance === 'international'
  const showCardNumber = reason === 'accident' || insurance === 'swiss'
  const showPolicyNumber = insurance === 'international'

  return (
    <div className="step-page">
      <div className="step-container-lg">
        <div className="step-card-compact">
          <div className="step-card-header">
            <div className="step-icon">
              <FileText className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.subtitle}</p>
          </div>
          <div className="step-card-content space-y-6">
            {/* Identity Section */}
            <div className="space-y-4">
              <div className="form-section-header">
                <h3 className="form-section-title">{t.identity}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div ref={setRef('firstName')}>
                  <FormInput
                    label={t.firstName}
                    value={watch('firstName')}
                    onChange={(e) => setValue('firstName', e.target.value)}
                    error={errors.firstName}
                    required
                  />
                </div>
                <div ref={setRef('lastName')}>
                  <FormInput
                    label={t.lastName}
                    value={watch('lastName')}
                    onChange={(e) => setValue('lastName', e.target.value)}
                    error={errors.lastName}
                    required
                  />
                </div>
                <div ref={setRef('gender')} className="space-y-2">
                  <Label className="text-sm font-medium text-[var(--brand-text)]">
                    {t.gender} <span className="text-[var(--brand-error)]">*</span>
                  </Label>
                  <Select
                    value={watch('gender')}
                    onValueChange={(v) => {
                      setValue('gender', v)
                      setErrors((prev) => { const n = { ...prev }; delete n.gender; return n })
                    }}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder={t.selectGender} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t.male}</SelectItem>
                      <SelectItem value="female">{t.female}</SelectItem>
                      <SelectItem value="other">{t.other}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <div className="form-error-inline-tight">
                      <AlertCircle className="form-error-icon" />
                      <span>{errors.gender}</span>
                    </div>
                  )}
                </div>
                <div ref={setRef('nationality')} className="space-y-2">
                  <Label className="text-sm font-medium text-[var(--brand-text)]">
                    {t.nationality} <span className="text-[var(--brand-error)]">*</span>
                  </Label>
                  <CountryCombobox
                    value={watch('nationality')}
                    onChange={(v) => {
                      setValue('nationality', v)
                      setErrors((prev) => { const n = { ...prev }; delete n.nationality; return n })
                    }}
                    language={language}
                    placeholder={t.selectPlaceholder}
                    searchPlaceholder={t.searchCountry}
                  />
                  {errors.nationality && (
                    <div className="form-error-inline-tight">
                      <AlertCircle className="form-error-icon" />
                      <span>{errors.nationality}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <div className="form-section-header">
                <h3 className="form-section-title">{t.contact}</h3>
              </div>
              <div ref={setRef('street')}>
                <FormInput
                  label={t.street}
                  value={watch('street')}
                  onChange={(e) => setValue('street', e.target.value)}
                  error={errors.street}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div ref={setRef('npa')}>
                  <FormInput
                    label={t.npa}
                    value={watch('npa')}
                    onChange={(e) => setValue('npa', e.target.value.replace(/\D/g, ''))}
                    error={errors.npa}
                    required
                  />
                </div>
                <div ref={setRef('city')}>
                  <FormInput
                    label={t.city}
                    value={watch('city')}
                    onChange={(e) => setValue('city', e.target.value)}
                    error={errors.city}
                    required
                  />
                </div>
              </div>
              <div ref={setRef('country')} className="space-y-2">
                <Label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.country} <span className="text-[var(--brand-error)]">*</span>
                </Label>
                <CountryCombobox
                  value={watch('country')}
                  onChange={(v) => {
                    setValue('country', v)
                    setErrors((prev) => { const n = { ...prev }; delete n.country; return n })
                  }}
                  language={language}
                  placeholder={t.selectPlaceholder}
                  searchPlaceholder={t.searchCountry}
                />
                {errors.country && (
                  <div className="form-error-inline-tight">
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.country}</span>
                  </div>
                )}
              </div>
              <div ref={setRef('email')}>
                <FormInput
                  label={t.email}
                  type="email"
                  value={watch('email')}
                  onChange={(e) => setValue('email', e.target.value)}
                  error={errors.email}
                  required
                />
              </div>
            </div>

            {/* Employer Section */}
            {showEmployer && (
              <div className="space-y-4">
                <div className="form-section-header">
                  <h3 className="form-section-title">{t.employer}</h3>
                </div>
                <div ref={setRef('profession')}>
                  <FormInput
                    label={t.profession}
                    value={watch('profession')}
                    onChange={(e) => setValue('profession', e.target.value)}
                    error={errors.profession}
                    required
                  />
                </div>
                <div ref={setRef('employerName')}>
                  <FormInput
                    label={t.employerName}
                    value={watch('employerName')}
                    onChange={(e) => setValue('employerName', e.target.value)}
                    error={errors.employerName}
                    required
                  />
                </div>
                <div ref={setRef('employerAddress')}>
                  <FormInput
                    label={t.employerAddress}
                    value={watch('employerAddress')}
                    onChange={(e) => setValue('employerAddress', e.target.value)}
                    error={errors.employerAddress}
                    required
                  />
                </div>
              </div>
            )}

            {/* Doctors Section */}
            <div className="space-y-4">
              <div className="form-section-header">
                <h3 className="form-section-title">{t.doctors}</h3>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.referringDoctor}{' '}
                  <span className="text-slate-400 font-normal">({t.optional})</span>
                </Label>
                <DoctorCombobox
                  value={watch('referringDoctor')}
                  onChange={(v) => setValue('referringDoctor', v)}
                  placeholder={t.searchDoctor}
                  noResults={t.noResults}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.generalPractitioner}{' '}
                  <span className="text-slate-400 font-normal">({t.optional})</span>
                </Label>
                <DoctorCombobox
                  value={watch('generalPractitioner')}
                  onChange={(v) => setValue('generalPractitioner', v)}
                  placeholder={t.searchDoctor}
                  noResults={t.noResults}
                />
              </div>
            </div>

            {/* Accident Section */}
            {showAccident && (
              <div className="space-y-4">
                <div className="form-section-header">
                  <h3 className="form-section-title">{t.accidentData}</h3>
                </div>
                <div ref={setRef('accidentDate')}>
                  <FormInput
                    label={t.accidentDate}
                    value={accidentDisplay}
                    onChange={(e) => {
                      const formatted = formatDateInput(e.target.value)
                      setAccidentDisplay(formatted)
                      if (formatted.length === 10) {
                        const iso = parseDisplayDate(formatted, { allowFuture: false })
                        if (iso) setValue('accidentDate', iso)
                      }
                    }}
                    placeholder={language === 'fr' ? 'JJ.MM.AAAA' : 'DD.MM.YYYY'}
                    error={errors.accidentDate}
                    required
                    inputClassName="form-input-mono"
                  />
                </div>
                <FormInput
                  label={t.accidentInsurance}
                  value={watch('accidentInsurance')}
                  onChange={(e) => setValue('accidentInsurance', e.target.value)}
                  optional={t.optional}
                />
                <FormInput
                  label={t.claimNumber}
                  value={watch('claimNumber')}
                  onChange={(e) => setValue('claimNumber', e.target.value)}
                  optional={t.optional}
                />
              </div>
            )}

            {/* Insurance Section */}
            <div className="space-y-4">
              <div className="form-section-header">
                <h3 className="form-section-title">{t.insuranceData}</h3>
              </div>
              {showAvs && (
                <div ref={setRef('avsNumber')}>
                  <FormInput
                    label={t.avsNumber}
                    value={formatAvsNumber(watch('avsNumber'))}
                    onChange={(e) => setValue('avsNumber', e.target.value.replace(/\D/g, '').slice(0, 13))}
                    error={errors.avsNumber}
                    required
                    inputClassName="form-input-mono"
                    placeholder="XXX.XXXX.XXXX.XX"
                  />
                </div>
              )}
              {showBasicInsurance && (
                <div ref={setRef('basicInsurance')}>
                  <FormInput
                    label={t.basicInsurance}
                    value={watch('basicInsurance')}
                    onChange={(e) => setValue('basicInsurance', e.target.value)}
                    error={errors.basicInsurance}
                    required
                  />
                </div>
              )}
              {showCardNumber && (
                <div ref={setRef('cardNumber')}>
                  <FormInput
                    label={t.cardNumber}
                    value={formatCardNumber(watch('cardNumber'))}
                    onChange={(e) => setValue('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 20))}
                    error={errors.cardNumber}
                    required
                    inputClassName="form-input-mono"
                  />
                </div>
              )}
              {showPolicyNumber && (
                <div ref={setRef('policyNumber')}>
                  <FormInput
                    label={t.policyNumber}
                    value={watch('policyNumber')}
                    onChange={(e) => setValue('policyNumber', e.target.value)}
                    error={errors.policyNumber}
                    required
                  />
                </div>
              )}
              <FormInput
                label={t.complementaryInsurance}
                value={watch('complementaryInsurance')}
                onChange={(e) => setValue('complementaryInsurance', e.target.value)}
                optional={t.optional}
              />
            </div>

            {/* Actions */}
            <div className="step-actions">
              <Button
                type="button"
                variant="outline"
                onClick={() => void navigate({ to: '/qualification' })}
                className="flex-1 h-12 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.back}
              </Button>
              <Button
                type="button"
                onClick={() => void handleSubmit()}
                disabled={isSubmitting}
                className="flex-1 h-12 active-scale cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t.continue}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})
