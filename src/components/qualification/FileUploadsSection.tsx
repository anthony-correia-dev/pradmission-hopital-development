import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FileUploadZone } from '@/components/FileUploadZone'
import { useApi } from '@/hooks'
import { fileToBase64, isValidFileType } from '@/utils'
import { FILE_LIMITS } from '@/constants/validation'
import { TIMINGS } from '@/constants/ui'
import type { WizardFormData } from '@/types/form'
import type { MappedIdentityData, MappedInsuranceData } from '@/types/api'

interface FileUploadsSectionProps {
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  identityRef: React.RefObject<HTMLDivElement | null>
  insuranceCardRef: React.RefObject<HTMLDivElement | null>
  isProcessingId: boolean
  setIsProcessingId: React.Dispatch<React.SetStateAction<boolean>>
  isProcessingInsurance: boolean
  setIsProcessingInsurance: React.Dispatch<React.SetStateAction<boolean>>
}

export function FileUploadsSection({
  errors, setErrors,
  identityRef, insuranceCardRef,
  isProcessingId, setIsProcessingId,
  isProcessingInsurance, setIsProcessingInsurance,
}: FileUploadsSectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('qualification')
  const { t: tLoading } = useTranslation('loading')
  const api = useApi()
  const insurance = watch('insurance')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')

  async function handleFileUpload(file: File, type: 'identity' | 'insurance') {
    const fieldKey = type === 'identity' ? 'identityCard' : 'insuranceCard'
    const tooLarge = file.size > FILE_LIMITS.MAX_SIZE_BYTES
    const invalidFormat = !isValidFileType(file)

    if (tooLarge && invalidFormat) {
      setErrors((prev) => ({ ...prev, [fieldKey]: t('fileTooLargeAndInvalidFormat') }))
      return
    }
    if (tooLarge) {
      setErrors((prev) => ({ ...prev, [fieldKey]: t('fileTooLarge') }))
      return
    }
    if (invalidFormat) {
      setErrors((prev) => ({ ...prev, [fieldKey]: t('invalidFileFormat') }))
      return
    }

    const setter = type === 'identity' ? setIsProcessingId : setIsProcessingInsurance
    const storageKey = type === 'identity' ? 'ocr_pending_identity' : 'ocr_pending_insurance'
    setter(true)
    sessionStorage.setItem(storageKey, 'true')

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

      // Clear the "required" error immediately once the file is stored
      setErrors((prev) => {
        const next = { ...prev }
        delete next[type === 'identity' ? 'identityCard' : 'insuranceCard']
        return next
      })

      // Fire OCR with 8s timeout race
      console.log(`[OCR] Fetching ${type} document...`)
      const ocrPromise = api.extractDocumentData(base64, type)
      const timeoutPromise = new Promise<'timeout'>((resolve) => {
        setTimeout(() => resolve('timeout'), TIMINGS.OCR_TIMEOUT_MS)
      })

      const result = await Promise.race([
        ocrPromise.then((data) => ({ kind: 'data' as const, data })),
        timeoutPromise.then(() => ({ kind: 'timeout' as const })),
      ])

      if (result.kind === 'timeout') {
        console.warn(`[OCR] ${type} document timed out`)
        return
      }

      console.log(`[OCR] ${type} document result:`, result.data)

      // Apply OCR results
      if (type === 'identity') {
        const d = result.data as MappedIdentityData
        if (d.lastName) setValue('lastName', d.lastName)
        if (d.firstName) setValue('firstName', d.firstName)
        if (d.gender) setValue('gender', d.gender)
        if (d.nationality) setValue('nationality', d.nationality)
        if (d.lastName || d.firstName) sessionStorage.setItem('ocr_prefilled', 'true')
      } else {
        const d = result.data as MappedInsuranceData
        // Check not_covered
        if (d.kvgCardNumber === 'not_covered' && insurance === 'swiss') {
          setValue('insuranceCard', null)
          setValue('insuranceCardBase64', '')
          setValue('insuranceCardMimeType', '')
          setErrors((prev) => ({
            ...prev,
            insuranceCard: tLoading('notCovered'),
          }))
          return
        }
        if (d.street) setValue('street', d.street)
        if (d.city) setValue('city', d.city)
        if (d.zipCode) setValue('npa', d.zipCode)
        if (d.country) setValue('country', d.country)
        if (d.avsNumber) setValue('avsNumber', d.avsNumber)
        if (d.kvgCardNumber) setValue('cardNumber', d.kvgCardNumber)
        if (d.kvgInsuranceName) setValue('basicInsurance', d.kvgInsuranceName)
        if (d.vvgCardNumber) {
          setValue('complementaryInsurance', d.vvgCardNumber)
          if (d.kvgInsuranceName) setValue('complementaryInsuranceName', d.kvgInsuranceName)
        }
        if (d.avsNumber || d.kvgCardNumber) sessionStorage.setItem('ocr_prefilled', 'true')
      }
    } catch (err) {
      console.error(`[OCR] ${type} document failed:`, err)
      // Silent failure — user fills fields manually
    } finally {
      sessionStorage.removeItem(storageKey)
      setter(false)
    }
  }

  function clearIdentityOcrFields() {
    setValue('identityCard', null)
    setValue('identityCardBase64', '')
    setValue('identityCardMimeType', '')
    setValue('lastName', '')
    setValue('firstName', '')
    setValue('gender', '')
    setValue('nationality', '')
  }

  function clearInsuranceOcrFields() {
    setValue('insuranceCard', null)
    setValue('insuranceCardBase64', '')
    setValue('insuranceCardMimeType', '')
    setValue('street', '')
    setValue('city', '')
    setValue('npa', '')
    setValue('country', '')
    setValue('avsNumber', '')
    setValue('cardNumber', '')
    setValue('basicInsurance', '')
    setValue('complementaryInsuranceName', '')
    setValue('complementaryInsurance', '')
  }

  return (
    <div className="space-y-4">
      <FileUploadZone
        ref={identityRef}
        file={identityCard}
        isProcessing={isProcessingId}
        onFileSelect={(file) => void handleFileUpload(file, 'identity')}
        onRemove={clearIdentityOcrFields}
        label={t('identityCard')}
        uploadText={t('uploadText')}
        processingText={t('processingDocument')}
        error={errors.identityCard}
        required
      />

      {/* CLARIFICATION NEEDED (Dev8): Insurance card is currently required for all swiss insurance.
         PO requests it should NOT be mandatory for Swiss employer insurance (CERN, UN, diplomatic).
         Need to clarify: what condition distinguishes "Swiss employer" from regular Swiss LAMal?
         Possible solutions:
         - Add a sub-option under swiss insurance (e.g. "employer scheme")
         - Use the hasEmployer + reason === 'accident' combination
         - Add a new insurance type for employer schemes */}
      <FileUploadZone
        ref={insuranceCardRef}
        file={insuranceCard}
        isProcessing={isProcessingInsurance}
        onFileSelect={(file) => void handleFileUpload(file, 'insurance')}
        onRemove={clearInsuranceOcrFields}
        label={t('insuranceCard')}
        uploadText={t('uploadText')}
        processingText={t('processingDocument')}
        error={errors.insuranceCard}
        required={insurance === 'swiss'}
        optional={insurance !== 'swiss' ? t('optional') : undefined}
      />
    </div>
  )
}
