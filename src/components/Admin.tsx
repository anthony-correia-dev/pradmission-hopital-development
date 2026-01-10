import { useState, useEffect, useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { User, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { CountryCombobox } from './CountryCombobox'
import { DoctorCombobox } from './DoctorCombobox'
import { getCountries } from '../lib/countries'
import { formatDateInput, parseDisplayDate } from '../lib/dateUtils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { adminTranslations } from '@/locales'
import type { FormData as WizardFormData } from '../hooks/useWizard'

interface AdminProps {
  language: 'fr' | 'en'
  onNext: () => void
  onBack: () => void
}

export function Admin({ language, onNext, onBack }: AdminProps) {
  const t = adminTranslations[language]
  const [accidentDateInput, setAccidentDateInput] = useState('')
  const countries = getCountries(language)

  const {
    control,
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors }
  } = useFormContext<WizardFormData>()

  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')

  const firstNameValue = (watch('firstName') ?? '') as string
  const lastNameValue = (watch('lastName') ?? '') as string

  const firstNameRef = useRef<HTMLDivElement>(null)
  const lastNameRef = useRef<HTMLDivElement>(null)
  const genderRef = useRef<HTMLDivElement>(null)
  const nationalityRef = useRef<HTMLDivElement>(null)
  const streetRef = useRef<HTMLDivElement>(null)
  const npaRef = useRef<HTMLDivElement>(null)
  const cityRef = useRef<HTMLDivElement>(null)
  const countryRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const professionRef = useRef<HTMLDivElement>(null)
  const employerNameRef = useRef<HTMLDivElement>(null)
  const employerAddressRef = useRef<HTMLDivElement>(null)
  const referringDoctorRef = useRef<HTMLDivElement>(null)
  const generalPractitionerRef = useRef<HTMLDivElement>(null)
  const accidentDateRef = useRef<HTMLDivElement>(null)
  const accidentInsuranceRef = useRef<HTMLDivElement>(null)
  const claimNumberRef = useRef<HTMLDivElement>(null)
  const avsNumberRef = useRef<HTMLDivElement>(null)
  const basicInsuranceRef = useRef<HTMLDivElement>(null)
  const cardNumberRef = useRef<HTMLDivElement>(null)
  const policyNumberRef = useRef<HTMLDivElement>(null)
  const complementaryInsuranceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0]
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        firstName: firstNameRef,
        lastName: lastNameRef,
        gender: genderRef,
        nationality: nationalityRef,
        street: streetRef,
        npa: npaRef,
        city: cityRef,
        country: countryRef,
        email: emailRef,
        profession: professionRef,
        employerName: employerNameRef,
        employerAddress: employerAddressRef,
        referringDoctor: referringDoctorRef,
        generalPractitioner: generalPractitionerRef,
        accidentDate: accidentDateRef,
        accidentInsurance: accidentInsuranceRef,
        claimNumber: claimNumberRef,
        avsNumber: avsNumberRef,
        basicInsurance: basicInsuranceRef,
        cardNumber: cardNumberRef,
        policyNumber: policyNumberRef,
        complementaryInsurance: complementaryInsuranceRef
      }

      const targetRef = refMap[firstErrorField]
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }, [errors])

  useEffect(() => {
    const current = (watch('accidentDate') ?? '') as string
    if (current) {
      const [year, month, day] = current.split('-')
      if (year && month && day) {
        setAccidentDateInput(`${day}.${month}.${year}`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAccidentDateInput = (value: string) => {
    const formatted = formatDateInput(value)
    setAccidentDateInput(formatted)

    if (formatted.length === 10) {
      const isoDate = parseDisplayDate(formatted, { allowFuture: true })
      if (isoDate) {
        setValue('accidentDate', isoDate, { shouldDirty: true, shouldValidate: true })
        trigger('accidentDate')
      } else {
        setValue('accidentDate', '', { shouldDirty: true, shouldValidate: true })
        trigger('accidentDate')
      }
    } else {
      setValue('accidentDate', '', { shouldDirty: true, shouldValidate: reason === 'accident' })
      if (reason === 'accident') {
        trigger('accidentDate')
      }
    }
  }

  const onSubmit = async () => {
    const ok = await trigger()
    if (!ok) return

    onNext()
  }

  const formatAvsNumber = (value: string) => {
    const digits = value.replace(/\D/g, '')
    let formatted = ''
    
    for (let i = 0; i < digits.length && i < 13; i++) {
      if (i === 3 || i === 7 || i === 11) {
        formatted += '.'
      }
      formatted += digits[i]
    }
    
    return formatted
  }

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '')
    let formatted = ''
    
    for (let i = 0; i < digits.length && i < 20; i++) {
      if (i === 5 || i === 8 || i === 11 || i === 14 || i === 17) {
        formatted += '.'
      }
      formatted += digits[i]
    }
    
    return formatted
  }

  return (
    <div className="min-h-screen py-4 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="bg-white rounded-xl shadow-sm border border-slate-100 p-0 relative z-10">
          <CardHeader className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-brand-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-brand-text text-center mb-2">{t.title}</CardTitle>
            <CardDescription className="text-sm text-slate-600 text-center">{t.subtitle}</CardDescription>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-semibold text-brand-text">{t.identity}</span>
              </div>
              <div className="space-y-4">
                <div ref={firstNameRef}>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-text mb-2">
                    {t.firstName} <span className="text-brand-error">*</span>
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstNameValue}
                    onChange={(e) => setValue('firstName', e.target.value, { shouldDirty: true, shouldValidate: true })}
                    aria-invalid={!!errors.firstName}
                    className={`w-full h-12 px-4 ${
                      errors.firstName ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{String(errors.firstName.message ?? '')}</span>
                    </div>
                  )}
                </div>

                <div ref={lastNameRef}>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brand-text mb-2">
                    {t.lastName} <span className="text-brand-error">*</span>
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastNameValue}
                    onChange={(e) => setValue('lastName', e.target.value, { shouldDirty: true, shouldValidate: true })}
                    aria-invalid={!!errors.lastName}
                    className={`w-full h-12 px-4 ${
                      errors.lastName ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{String(errors.lastName.message ?? '')}</span>
                    </div>
                  )}
                </div>

                <div ref={genderRef}>
                  <label htmlFor="gender" className="block text-sm font-medium text-brand-text mb-2">
                    {t.gender} <span className="text-brand-error">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <Select value={field.value ?? ''} onValueChange={(v) => field.onChange(v)}>
                        <SelectTrigger
                          id="gender"
                          size="lg"
                          className={`w-full ${
                            errors.gender ? 'border-brand-error focus:ring-2 focus:ring-brand-error' : ''
                          } ${!field.value ? 'text-slate-400' : ''}`}
                        >
                          <SelectValue placeholder={t.genderPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">{t.male}</SelectItem>
                          <SelectItem value="female">{t.female}</SelectItem>
                          <SelectItem value="other">{t.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.gender && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{String(errors.gender.message ?? '')}</span>
                    </div>
                  )}
                </div>

                <div ref={nationalityRef}>
                  <Controller
                    control={control}
                    name="nationality"
                    render={({ field }) => (
                      <CountryCombobox
                        id="nationality"
                        label={t.nationality}
                        value={field.value ?? ''}
                        onChange={(value) => field.onChange(value)}
                        countries={countries}
                        placeholder={t.nationalityPlaceholder}
                        error={errors.nationality?.message as any}
                        noResultsText={t.noResults}
                        required
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-semibold text-brand-text">{t.contact}</span>
              </div>
              <div className="space-y-4">
                <div ref={streetRef}>
                  <label htmlFor="street" className="block text-sm font-medium text-brand-text mb-2">
                    {t.street} <span className="text-brand-error">*</span>
                  </label>
                  <Input
                    id="street"
                    type="text"
                    {...register('street')}
                    aria-invalid={!!errors.street}
                    className={`w-full h-12 px-4 ${
                      errors.street ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.street && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.street.message}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div ref={npaRef}>
                    <label htmlFor="npa" className="block text-sm font-medium text-brand-text mb-2">
                      {t.npa} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="npa"
                      type="text"
                      inputMode="numeric"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('npa', value, { shouldDirty: true, shouldValidate: true })
                        trigger('npa')
                      }}
                      aria-invalid={!!errors.npa}
                      className={`w-full h-12 px-4 ${
                        errors.npa ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.npa && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.npa.message}</span>
                      </div>
                    )}
                  </div>

                  <div ref={cityRef}>
                    <label htmlFor="city" className="block text-sm font-medium text-brand-text mb-2">
                      {t.city} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="city"
                      type="text"
                      {...register('city')}
                      aria-invalid={!!errors.city}
                      className={`w-full h-12 px-4 ${
                        errors.city ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.city && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.city.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div ref={countryRef}>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <CountryCombobox
                        id="country"
                        label={t.country}
                        value={field.value ?? ''}
                        onChange={(value) => field.onChange(value)}
                        countries={countries}
                        placeholder={t.countryPlaceholder}
                        error={errors.country?.message as any}
                        noResultsText={t.noResults}
                        required
                      />
                    )}
                  />
                </div>

                <div ref={emailRef}>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                    {t.email} <span className="text-brand-error">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    className={`w-full h-12 px-4 ${
                      errors.email ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-semibold text-brand-text">{t.employer}</span>
              </div>
              <div className="space-y-4">
                <div ref={professionRef}>
                  <label htmlFor="profession" className="block text-sm font-medium text-brand-text mb-2">
                    {t.profession} {hasEmployer ? <span className="text-brand-error">*</span> : <span className="text-slate-500 text-xs">({t.optional})</span>}
                  </label>
                  <Input
                    id="profession"
                    type="text"
                    {...register('profession')}
                    aria-invalid={!!errors.profession}
                    className={`w-full h-12 px-4 ${
                      errors.profession ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.profession && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.profession.message}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="employerName" className="block text-sm font-medium text-brand-text mb-2">
                    {t.employerName} {hasEmployer ? <span className="text-brand-error">*</span> : <span className="text-slate-500 text-xs">({t.optional})</span>}
                  </label>
                  <Input
                    id="employerName"
                    type="text"
                    {...register('employerName')}
                    aria-invalid={!!errors.employerName}
                    className={`w-full h-12 px-4 ${
                      errors.employerName ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.employerName && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.employerName.message}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="employerAddress" className="block text-sm font-medium text-brand-text mb-2">
                    {t.employerAddress} {hasEmployer ? <span className="text-brand-error">*</span> : <span className="text-slate-500 text-xs">({t.optional})</span>}
                  </label>
                  <Input
                    id="employerAddress"
                    type="text"
                    {...register('employerAddress')}
                    aria-invalid={!!errors.employerAddress}
                    className={`w-full h-12 px-4 ${
                      errors.employerAddress ? 'border-brand-error focus-visible:ring-brand-error' : ''
                    }`}
                  />
                  {errors.employerAddress && (
                    <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.employerAddress.message}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-semibold text-brand-text">{t.doctors}</span>
              </div>
              <div className="space-y-4">
                <div ref={referringDoctorRef}>
                  <Controller
                    control={control}
                    name="referringDoctor"
                    render={({ field }) => (
                      <DoctorCombobox
                        id="referringDoctor"
                        label={t.referringDoctor}
                        value={field.value ?? ''}
                        onChange={(value) => field.onChange(value)}
                        error={errors.referringDoctor?.message as any}
                        noResultsText={t.noResults}
                        required={false}
                        optionalText={t.optional}
                      />
                    )}
                  />
                </div>
                <div ref={generalPractitionerRef}>
                  <Controller
                    control={control}
                    name="generalPractitioner"
                    render={({ field }) => (
                      <DoctorCombobox
                        id="generalPractitioner"
                        label={t.generalPractitioner}
                        value={field.value ?? ''}
                        onChange={(value) => field.onChange(value)}
                        error={errors.generalPractitioner?.message as any}
                        noResultsText={t.noResults}
                        required={false}
                        optionalText={t.optional}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {reason === 'accident' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-brand-text">{t.accidentData}</span>
                </div>
                <div className="space-y-4">
                  <div ref={accidentDateRef}>
                    <label htmlFor="accidentDate" className="block text-sm font-medium text-brand-text mb-2">
                      {t.accidentDate} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="accidentDate"
                      type="text"
                      inputMode="numeric"
                      value={accidentDateInput}
                      onChange={(e) => handleAccidentDateInput(e.target.value)}
                      placeholder={t.accidentDatePlaceholder}
                      maxLength={10}
                      aria-invalid={!!errors.accidentDate}
                      className={`w-full h-12 px-4 font-mono tracking-wider ${
                        errors.accidentDate ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.accidentDate && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.accidentDate.message}</span>
                      </div>
                    )}
                  </div>

                  <div ref={accidentInsuranceRef}>
                    <label htmlFor="accidentInsurance" className="block text-sm font-medium text-brand-text mb-2">
                      {t.accidentInsurance} <span className="text-slate-500 text-xs">({t.optional})</span>
                    </label>
                    <Input
                      id="accidentInsurance"
                      type="text"
                      onChange={(e) => setValue('accidentInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      className="w-full h-12 px-4"
                    />
                  </div>

                  <div ref={claimNumberRef}>
                    <label htmlFor="claimNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.claimNumber} <span className="text-slate-500 text-xs">({t.optional})</span>
                    </label>
                    <Input
                      id="claimNumber"
                      type="text"
                      onChange={(e) => setValue('claimNumber', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      className="w-full h-12 px-4"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-semibold text-brand-text">{t.insuranceData}</span>
              </div>
              <div className="space-y-4">
                {insurance === 'swiss' && (
                  <div ref={avsNumberRef}>
                    <label htmlFor="avsNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.avsNumber} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="avsNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={16}
                      placeholder="756.1234.5678.97"
                      value={formatAvsNumber(watch('avsNumber') ?? '')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('avsNumber', value, { shouldDirty: true, shouldValidate: true })
                        trigger('avsNumber')
                      }}
                      aria-invalid={!!errors.avsNumber}
                      className={`w-full h-12 px-4 font-mono tracking-wider ${
                        errors.avsNumber ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.avsNumber && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.avsNumber.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {(insurance === 'international' || insurance === 'auto') && (
                  <div>
                    <label htmlFor="avsNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.avsNumber} <span className="text-slate-500 text-xs">({t.optional})</span>
                    </label>
                    <Input
                      id="avsNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={16}
                      placeholder="756.1234.5678.97"
                      value={formatAvsNumber(watch('avsNumber') ?? '')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('avsNumber', value, { shouldDirty: true, shouldValidate: true })
                        trigger('avsNumber')
                      }}
                      className="w-full h-12 px-4 font-mono tracking-wider"
                    />
                  </div>
                )}

                {(insurance === 'swiss' || insurance === 'international') && (
                  <div ref={basicInsuranceRef}>
                    <label htmlFor="basicInsurance" className="block text-sm font-medium text-brand-text mb-2">
                      {t.basicInsurance} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="basicInsurance"
                      type="text"
                      onChange={(e) => setValue('basicInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      aria-invalid={!!errors.basicInsurance}
                      className={`w-full h-12 px-4 ${
                        errors.basicInsurance ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.basicInsurance && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.basicInsurance.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {insurance === 'auto' && reason !== 'accident' && (
                  <div>
                    <label htmlFor="basicInsurance" className="block text-sm font-medium text-brand-text mb-2">
                      {t.basicInsurance} <span className="text-slate-500 text-xs">({t.optional})</span>
                    </label>
                    <Input
                      id="basicInsurance"
                      type="text"
                      onChange={(e) => setValue('basicInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      className="w-full h-12 px-4"
                    />
                  </div>
                )}

                {insurance === 'auto' && reason === 'accident' && (
                  <div>
                    <label htmlFor="basicInsurance" className="block text-sm font-medium text-brand-text mb-2">
                      {t.basicInsurance} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="basicInsurance"
                      type="text"
                      onChange={(e) => setValue('basicInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      aria-invalid={!!errors.basicInsurance}
                      className={`w-full h-12 px-4 ${
                        errors.basicInsurance ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.basicInsurance && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.basicInsurance.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {insurance === 'swiss' && (
                  <div ref={cardNumberRef}>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.cardNumber} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="cardNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={25}
                      placeholder="80756.123.456.789.012.345"
                      value={formatCardNumber(watch('cardNumber') ?? '')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('cardNumber', value, { shouldDirty: true, shouldValidate: true })
                        trigger('cardNumber')
                      }}
                      aria-invalid={!!errors.cardNumber}
                      className={`w-full h-12 px-4 font-mono tracking-wider ${
                        errors.cardNumber ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.cardNumber && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.cardNumber.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {insurance === 'auto' && reason !== 'accident' && (
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.cardNumber} <span className="text-slate-500 text-xs">({t.optional})</span>
                    </label>
                    <Input
                      id="cardNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={25}
                      placeholder="80756.123.456.789.012.345"
                      value={formatCardNumber(watch('cardNumber') ?? '')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('cardNumber', value, { shouldDirty: true, shouldValidate: true })
                      }}
                      className="w-full h-12 px-4 font-mono tracking-wider"
                    />
                  </div>
                )}

                {insurance === 'auto' && reason === 'accident' && (
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.cardNumber} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="cardNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={25}
                      placeholder="80756.123.456.789.012.345"
                      value={formatCardNumber(watch('cardNumber') ?? '')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setValue('cardNumber', value, { shouldDirty: true, shouldValidate: true })
                        trigger('cardNumber')
                      }}
                      aria-invalid={!!errors.cardNumber}
                      className={`w-full h-12 px-4 font-mono tracking-wider ${
                        errors.cardNumber ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.cardNumber && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.cardNumber.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {insurance === 'international' && (
                  <div ref={policyNumberRef}>
                    <label htmlFor="policyNumber" className="block text-sm font-medium text-brand-text mb-2">
                      {t.policyNumber} <span className="text-brand-error">*</span>
                    </label>
                    <Input
                      id="policyNumber"
                      type="text"
                      onChange={(e) => setValue('policyNumber', e.target.value, { shouldDirty: true, shouldValidate: true })}
                      aria-invalid={!!errors.policyNumber}
                      className={`w-full h-12 px-4 ${
                        errors.policyNumber ? 'border-brand-error focus-visible:ring-brand-error' : ''
                      }`}
                    />
                    {errors.policyNumber && (
                      <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.policyNumber.message}</span>
                      </div>
                    )}
                  </div>
                )}

                <div ref={complementaryInsuranceRef}>
                  <label htmlFor="complementaryInsurance" className="block text-sm font-medium text-brand-text mb-2">
                    {t.complementaryInsurance} <span className="text-slate-500 text-xs">({t.optional})</span>
                  </label>
                  <Input
                    id="complementaryInsurance"
                    type="text"
                    onChange={(e) => setValue('complementaryInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
                    className="w-full h-12 px-4"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={onBack}
                variant="outline"
                size="lg"
                className="h-12 px-6 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                {t.back}
              </Button>
              <Button
                type="submit"
                size="lg"
                className="group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white hover:scale-[1.02] active:scale-98 transition-all"
              >
                {t.continue}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
