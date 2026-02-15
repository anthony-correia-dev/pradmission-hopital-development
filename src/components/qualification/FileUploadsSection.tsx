import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FileUploadZone } from '@/components/FileUploadZone'
import { fileToBase64 } from '@/utils'
import { FILE_LIMITS } from '@/constants/validation'
import type { WizardFormData } from '@/types/form'

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
  const insurance = watch('insurance')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')
  const insuranceCardError = watch('insuranceCardError')

  // Handle not_covered error from Loading page redirect
  useEffect(() => {
    if (insuranceCardError) {
      setErrors((prev) => ({
        ...prev,
        insuranceCard: tLoading(insuranceCardError),
      }))
      setValue('insuranceCard', null)
      setValue('insuranceCardBase64', '')
      setValue('insuranceCardMimeType', '')
      setValue('insuranceCardError', '')
    }
  }, [insuranceCardError]) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleFileUpload(file: File, type: 'identity' | 'insurance') {
    if (file.size > FILE_LIMITS.MAX_SIZE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        [type === 'identity' ? 'identityCard' : 'insuranceCard']: t('fileTooLarge'),
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

      // Clear the "required" error immediately once the file is stored
      setErrors((prev) => {
        const next = { ...prev }
        delete next[type === 'identity' ? 'identityCard' : 'insuranceCard']
        return next
      })
    } finally {
      setter(false)
    }
  }

  return (
    <div className="space-y-4">
      <FileUploadZone
        ref={identityRef}
        file={identityCard}
        isProcessing={isProcessingId}
        onFileSelect={(file) => void handleFileUpload(file, 'identity')}
        onRemove={() => {
          setValue('identityCard', null)
          setValue('identityCardBase64', '')
          setValue('identityCardMimeType', '')
        }}
        label={t('identityCard')}
        uploadText={t('uploadText')}
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
        onRemove={() => {
          setValue('insuranceCard', null)
          setValue('insuranceCardBase64', '')
          setValue('insuranceCardMimeType', '')
        }}
        label={t('insuranceCard')}
        uploadText={t('uploadText')}
        error={errors.insuranceCard}
        required={insurance === 'swiss'}
        optional={insurance !== 'swiss' ? t('optional') : undefined}
      />
    </div>
  )
}
