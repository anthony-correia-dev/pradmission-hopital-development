import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FileUploadZone } from '@/components/FileUploadZone'
import { useApi } from '@/hooks'
import { fileToBase64 } from '@/utils'
import { FILE_LIMITS } from '@/constants/validation'
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
  const insurance = watch('insurance')
  const identityCard = watch('identityCard')
  const insuranceCard = watch('insuranceCard')
  const api = useApi()
  const [ocrWarnings, setOcrWarnings] = useState<Record<string, string>>({})

  async function handleFileUpload(file: File, type: 'identity' | 'insurance') {
    const key = type === 'identity' ? 'identityCard' : 'insuranceCard'
    if (file.size > FILE_LIMITS.MAX_SIZE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        [type === 'identity' ? 'identityCard' : 'insuranceCard']: t('fileTooLarge'),
      }))
      return
    }

    const setter = type === 'identity' ? setIsProcessingId : setIsProcessingInsurance
    setter(true)
    setOcrWarnings((prev) => { const n = { ...prev }; delete n[key]; return n })

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

    } catch {
      setOcrWarnings((prev) => ({ ...prev, [key]: t('ocrFailed') }))
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
          setOcrWarnings((prev) => { const n = { ...prev }; delete n.identityCard; return n })
        }}
        label={t('identityCard')}
        uploadText={t('uploadText')}
        error={errors.identityCard}
        warning={ocrWarnings.identityCard}
        required
      />

      <FileUploadZone
        ref={insuranceCardRef}
        file={insuranceCard}
        isProcessing={isProcessingInsurance}
        onFileSelect={(file) => void handleFileUpload(file, 'insurance')}
        onRemove={() => {
          setValue('insuranceCard', null)
          setValue('insuranceCardBase64', '')
          setValue('insuranceCardMimeType', '')
          setOcrWarnings((prev) => { const n = { ...prev }; delete n.insuranceCard; return n })
        }}
        label={t('insuranceCard')}
        uploadText={t('uploadText')}
        error={errors.insuranceCard}
        warning={ocrWarnings.insuranceCard}
        required={insurance === 'swiss'}
        optional={insurance !== 'swiss' ? t('optional') : undefined}
      />
    </div>
  )
}
