import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useState, useRef } from 'react'
import {
  ClipboardList,
  ArrowLeft,
  ArrowRight,
  Upload,
  Loader2,
  AlertCircle,
  HelpCircle,
  X,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { qualificationTranslations } from '@/locales/qualification'
import { createQualificationSchema } from '@/schemas/qualification'
import { useApi } from '@/hooks/useApi'
import { fileToBase64 } from '@/utils/file'
import { cn } from '@/utils/cn'
import { FILE_LIMITS, ACCEPTED_FILE_EXTENSIONS } from '@/constants/validation'
import type { WizardFormData } from '@/types/form'
import type { MappedIdentityData, MappedInsuranceData } from '@/types/api'

function QualificationPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const reason = watch('reason')
  const insurance = watch('insurance')
  const hasEmployer = watch('hasEmployer')
  const consentNLPD = watch('consentNLPD')
  const consentMarketing = watch('consentMarketing')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')
  const t = qualificationTranslations[language]
  const api = useApi()

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessingId, setIsProcessingId] = useState(false)
  const [isProcessingInsurance, setIsProcessingInsurance] = useState(false)
  const [showInsuranceHelp, setShowInsuranceHelp] = useState(false)

  const reasonRef = useRef<HTMLDivElement>(null)
  const insuranceRef = useRef<HTMLDivElement>(null)
  const identityRef = useRef<HTMLDivElement>(null)
  const insuranceCardRef = useRef<HTMLDivElement>(null)
  const consentRef = useRef<HTMLDivElement>(null)

  const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
    reason: reasonRef,
    insurance: insuranceRef,
    identityCard: identityRef,
    insuranceCard: insuranceCardRef,
    consentNLPD: consentRef,
  }

  async function handleFileUpload(
    file: File,
    type: 'identity' | 'insurance'
  ) {
    if (file.size > FILE_LIMITS.MAX_SIZE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        [type === 'identity' ? 'identityCard' : 'insuranceCard']: t.fileTooLarge,
      }))
      return
    }

    const setter = type === 'identity' ? setIsProcessingId : setIsProcessingInsurance
    setter(true)

    try {
      const base64 = await fileToBase64(file)

      if (type === 'identity') {
        setValue('identityCard', file)
        setValue('identityCardBase64', base64)
        setValue('identityCardMimeType', file.type)
      } else {
        setValue('insuranceCard', file)
        setValue('insuranceCardBase64', base64)
        setValue('insuranceCardMimeType', file.type)
      }

      // OCR extraction
      const result = await api.extractDocumentData(base64, type)

      if (type === 'identity') {
        const data = result as MappedIdentityData
        if (data.lastName) setValue('lastName', data.lastName)
        if (data.firstName) setValue('firstName', data.firstName)
        if (data.gender) setValue('gender', data.gender)
        if (data.nationality) setValue('nationality', data.nationality)
      } else {
        const data = result as MappedInsuranceData
        if (data.street) setValue('street', data.street)
        if (data.city) setValue('city', data.city)
        if (data.zipCode) setValue('npa', data.zipCode)
        if (data.country) setValue('country', data.country)
        if (data.avsNumber) setValue('avsNumber', data.avsNumber)
        if (data.kvgCardNumber) setValue('cardNumber', data.kvgCardNumber)
        if (data.kvgInsuranceName) setValue('basicInsurance', data.kvgInsuranceName)
      }

      setErrors((prev) => {
        const next = { ...prev }
        delete next[type === 'identity' ? 'identityCard' : 'insuranceCard']
        return next
      })
    } catch {
      // File uploaded but OCR failed — keep the file
    } finally {
      setter(false)
    }
  }

  function handleSubmit() {
    const schema = createQualificationSchema(insurance, reason, {
      reasonRequired: t.reasonRequired,
      insuranceRequired: t.insuranceRequired,
      consentRequired: t.consentRequired,
      identityRequired: t.identityRequired,
      insuranceCardRequired: t.insuranceCardRequired,
    })

    const result = schema.safeParse({
      reason,
      insurance,
      hasEmployer,
      consentNLPD,
      consentMarketing,
      identityCard,
      insuranceCard,
    })

    if (!result.success) {
      const newErrors: Record<string, string> = {}
      for (const err of result.error.errors) {
        const key = err.path[0] as string
        newErrors[key] = err.message
      }
      setErrors(newErrors)

      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0]
      if (firstErrorKey) {
        const ref = refMap[firstErrorKey]
        ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setErrors({})
    void navigate({ to: '/loading' })
  }

  return (
    <div className="step-page">
      <div className="step-container-lg">
        <div className="step-card-compact">
          <div className="step-card-header">
            <div className="step-icon">
              <ClipboardList className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.subtitle}</p>
          </div>
          <div className="step-card-content space-y-6">
            {/* Reason */}
            <div ref={reasonRef} className="space-y-3">
              <label className="text-sm font-medium text-[var(--brand-text)]">
                {t.reasonLabel} <span className="text-[var(--brand-error)]">*</span>
              </label>
              <div className="flex gap-3">
                {(['illness', 'accident'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => {
                      setValue('reason', r)
                      setErrors((prev) => { const n = { ...prev }; delete n.reason; return n })
                    }}
                    className={cn(
                      'choice-btn flex-1 border',
                      reason === r ? 'choice-btn--selected' : 'choice-btn--unselected'
                    )}
                  >
                    {r === 'illness' ? t.illness : t.accident}
                  </button>
                ))}
              </div>
              {errors.reason && (
                <div className="form-error-inline-tight">
                  <AlertCircle className="form-error-icon" />
                  <span>{errors.reason}</span>
                </div>
              )}
            </div>

            {/* Has Employer (only for accident) */}
            {reason === 'accident' && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.hasEmployerLabel}
                </label>
                <div className="flex gap-3">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setValue('hasEmployer', val)}
                      className={cn(
                        'choice-btn choice-btn--sm flex-1 border',
                        hasEmployer === val ? 'choice-btn--selected' : 'choice-btn--unselected'
                      )}
                    >
                      {val ? t.yes : t.no}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Insurance Type */}
            <div ref={insuranceRef} className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.insuranceLabel} <span className="text-[var(--brand-error)]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowInsuranceHelp(true)}
                  className="text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {(['swiss', 'international', 'auto'] as const).map((ins) => (
                  <button
                    key={ins}
                    type="button"
                    onClick={() => {
                      setValue('insurance', ins)
                      setErrors((prev) => { const n = { ...prev }; delete n.insurance; return n })
                    }}
                    className={cn(
                      'choice-btn choice-btn--sm flex-1 min-w-[120px] border',
                      insurance === ins ? 'choice-btn--selected' : 'choice-btn--unselected'
                    )}
                  >
                    {ins === 'swiss' ? t.swiss : ins === 'international' ? t.international : t.auto}
                  </button>
                ))}
              </div>
              {errors.insurance && (
                <div className="form-error-inline-tight">
                  <AlertCircle className="form-error-icon" />
                  <span>{errors.insurance}</span>
                </div>
              )}
            </div>

            {/* File Uploads */}
            <div className="space-y-4">
              {/* Identity Card */}
              <div ref={identityRef} className="space-y-2">
                <label className="text-sm font-medium text-[var(--brand-text)]">
                  {t.identityCardLabel} <span className="text-[var(--brand-error)]">*</span>
                </label>
                {identityCard ? (
                  <div className="flex items-center gap-3 p-3 border rounded-lg bg-slate-50">
                    <FileText className="w-5 h-5 text-[var(--brand-primary)]" />
                    <span className="text-sm flex-1 truncate">{identityCard.name}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setValue('identityCard', null)
                        setValue('identityCardBase64', '')
                        setValue('identityCardMimeType', '')
                      }}
                      className="text-slate-400 hover:text-[var(--brand-error)] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-[var(--brand-primary)] hover:bg-sky-50/50 transition-colors">
                    {isProcessingId ? (
                      <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
                    ) : (
                      <Upload className="w-8 h-8 text-slate-400" />
                    )}
                    <span className="text-sm text-slate-600">
                      {isProcessingId ? t.processing : t.uploadText}
                    </span>
                    <span className="text-xs text-slate-400">{t.uploadFormats}</span>
                    <input
                      type="file"
                      accept={ACCEPTED_FILE_EXTENSIONS}
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) void handleFileUpload(file, 'identity')
                      }}
                      className="hidden"
                      disabled={isProcessingId}
                    />
                  </label>
                )}
                {errors.identityCard && (
                  <div className="form-error-inline-tight">
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.identityCard}</span>
                  </div>
                )}
              </div>

              {/* Insurance Card (only for swiss) */}
              {insurance === 'swiss' && (
                <div ref={insuranceCardRef} className="space-y-2">
                  <label className="text-sm font-medium text-[var(--brand-text)]">
                    {t.insuranceCardLabel} <span className="text-[var(--brand-error)]">*</span>
                  </label>
                  {insuranceCard ? (
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-slate-50">
                      <FileText className="w-5 h-5 text-[var(--brand-primary)]" />
                      <span className="text-sm flex-1 truncate">{insuranceCard.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setValue('insuranceCard', null)
                          setValue('insuranceCardBase64', '')
                          setValue('insuranceCardMimeType', '')
                        }}
                        className="text-slate-400 hover:text-[var(--brand-error)] cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-[var(--brand-primary)] hover:bg-sky-50/50 transition-colors">
                      {isProcessingInsurance ? (
                        <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
                      ) : (
                        <Upload className="w-8 h-8 text-slate-400" />
                      )}
                      <span className="text-sm text-slate-600">
                        {isProcessingInsurance ? t.processing : t.uploadText}
                      </span>
                      <span className="text-xs text-slate-400">{t.uploadFormats}</span>
                      <input
                        type="file"
                        accept={ACCEPTED_FILE_EXTENSIONS}
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) void handleFileUpload(file, 'insurance')
                        }}
                        className="hidden"
                        disabled={isProcessingInsurance}
                      />
                    </label>
                  )}
                  {errors.insuranceCard && (
                    <div className="form-error-inline-tight">
                      <AlertCircle className="form-error-icon" />
                      <span>{errors.insuranceCard}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Consents */}
            <div ref={consentRef} className="space-y-3">
              <label className="text-sm font-medium text-[var(--brand-text)]">
                {t.consentsLabel}
              </label>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentNLPD"
                    checked={consentNLPD}
                    onCheckedChange={(checked) => {
                      setValue('consentNLPD', checked === true)
                      setErrors((prev) => { const n = { ...prev }; delete n.consentNLPD; return n })
                    }}
                  />
                  <Label htmlFor="consentNLPD" className="text-sm leading-5 cursor-pointer">
                    {t.consentNLPDPrefix}
                    <a
                      href={t.privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--brand-primary)] hover:underline"
                    >
                      {t.consentNLPDLink}
                    </a>
                    {t.consentNLPDSuffix}
                    <span className="text-[var(--brand-error)] ml-1">*</span>
                  </Label>
                </div>
                {errors.consentNLPD && (
                  <div className="form-error-inline-tight ml-7">
                    <AlertCircle className="form-error-icon" />
                    <span>{errors.consentNLPD}</span>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentMarketing"
                    checked={consentMarketing}
                    onCheckedChange={(checked) => setValue('consentMarketing', checked === true)}
                  />
                  <Label htmlFor="consentMarketing" className="text-sm leading-5 cursor-pointer">
                    {t.consentMarketing}
                  </Label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="step-actions">
              <Button
                type="button"
                variant="outline"
                onClick={() => void navigate({ to: '/otp' })}
                className="flex-1 h-12 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.back}
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isProcessingId || isProcessingInsurance}
                className="flex-1 h-12 active-scale cursor-pointer"
              >
                {t.continue}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Insurance Help Dialog */}
        <Dialog open={showInsuranceHelp} onOpenChange={setShowInsuranceHelp}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.insuranceHelpTitle}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">{t.swiss}</h4>
                <DialogDescription>{t.insuranceHelpSwiss}</DialogDescription>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t.international}</h4>
                <DialogDescription>{t.insuranceHelpInternational}</DialogDescription>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t.auto}</h4>
                <DialogDescription>{t.insuranceHelpAuto}</DialogDescription>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/qualification')({
  component: QualificationPage,
})
