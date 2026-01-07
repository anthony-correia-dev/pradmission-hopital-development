import { useState } from 'react'
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react'

// 🎯 File validation constants
export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/heic',
  'image/heif',
  'image/webp',
  'image/tiff',
  'image/tif'
]
export const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.heic', '.heif', '.webp', '.tif', '.tiff']

// 🎯 Translations for file upload errors
const fileUploadTranslations = {
  fr: {
    fileTooLarge: 'Le fichier est trop volumineux (max 10 Mo)',
    invalidFileFormat: 'Format non supporté (PDF, JPG, PNG, HEIC, WebP, TIFF)',
    fileTooLargeAndInvalidFormat: 'Le fichier est trop volumineux et le format n\'est pas supporté'
  },
  en: {
    fileTooLarge: 'File is too large (max 10 MB)',
    invalidFileFormat: 'Unsupported format (PDF, JPG, PNG, HEIC, WebP, TIFF)',
    fileTooLargeAndInvalidFormat: 'File is too large and format is not supported'
  }
} as const

export interface FileUploadProps {
  /** Label displayed above the upload zone */
  label: string
  /** Currently selected file */
  file: File | null
  /** Callback when file changes */
  onFileChange: (file: File | null) => void
  /** Text displayed in the upload zone */
  uploadText: string
  /** Whether the field is required */
  required?: boolean
  /** Whether the field is optional */
  optional?: boolean
  /** Text to display for optional fields */
  optionalText?: string
  /** Language for error messages */
  language: 'fr' | 'en'
  /** External error message (e.g., from form validation) */
  error?: string
  /** Callback when internal error changes */
  onErrorChange?: (error: string) => void
  /** HTML id attribute */
  id?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * FileUpload component with drag & drop support and file validation
 * Supports PDF, JPG, PNG, HEIC, WebP, TIFF formats up to 10MB
 */
export function FileUpload({ 
  label, 
  file, 
  onFileChange, 
  uploadText, 
  required, 
  optional, 
  optionalText, 
  language, 
  error, 
  onErrorChange, 
  id,
  className = ''
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileError, setFileError] = useState('')
  const t = fileUploadTranslations[language]

  const validateFile = (selectedFile: File): boolean => {
    // Reset errors
    setFileError('')
    if (onErrorChange) onErrorChange('')

    const isSizeValid = selectedFile.size <= MAX_FILE_SIZE
    const fileExtension = '.' + selectedFile.name.split('.').pop()?.toLowerCase()
    const isFormatValid = ALLOWED_FILE_TYPES.includes(selectedFile.type) || ALLOWED_EXTENSIONS.includes(fileExtension)

    if (!isSizeValid && !isFormatValid) {
      setFileError(t.fileTooLargeAndInvalidFormat)
      if (onErrorChange) onErrorChange(t.fileTooLargeAndInvalidFormat)
      return false
    }

    if (!isSizeValid) {
      setFileError(t.fileTooLarge)
      if (onErrorChange) onErrorChange(t.fileTooLarge)
      return false
    }

    if (!isFormatValid) {
      setFileError(t.invalidFileFormat)
      if (onErrorChange) onErrorChange(t.invalidFileFormat)
      return false
    }

    return true
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && validateFile(droppedFile)) {
      onFileChange(droppedFile)
    }
    setIsDragging(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && validateFile(selectedFile)) {
      onFileChange(selectedFile)
    }
  }

  const handleRemove = () => {
    onFileChange(null)
    setFileError('')
    if (onErrorChange) onErrorChange('')
  }

  const displayError = error || fileError

  return (
    <div id={id} className={className}>
      <p className="text-sm font-bold text-brand-text mb-2">
        {label}
        {required && <span className="text-brand-error ml-1">*</span>}
        {optional && optionalText && <span className="text-slate-500 text-xs ml-2">({optionalText})</span>}
      </p>
      
      {file ? (
        <div className="h-36 rounded-lg border-2 border-brand-success bg-gradient-to-br from-brand-success/10 to-brand-success/5 p-4 flex flex-col items-center justify-center relative shadow-sm">
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 hover:scale-110 transition-transform"
            aria-label="Supprimer le fichier"
          >
            <X className="w-4 h-4 text-slate-600 hover:text-brand-error" />
          </button>
          <div>
            <CheckCircle className="w-8 h-8 text-brand-success mb-2" />
          </div>
          <p className="text-xs text-brand-success font-semibold text-center px-2 truncate max-w-full">
            {file.name}
          </p>
        </div>
      ) : (
        <>
          <label
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault()
              setIsDragging(true)
            }}
            onDragLeave={() => setIsDragging(false)}
            className={`h-36 rounded-lg border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center hover:scale-[1.02] ${
              isDragging
                ? 'border-brand-primary bg-brand-primary/5 scale-105'
                : displayError
                ? 'border-brand-error bg-red-50'
                : 'border-slate-300 hover:border-brand-primary bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <Upload 
              className={`w-8 h-8 mb-2 transition-colors ${
                isDragging 
                  ? 'text-brand-primary' 
                  : displayError 
                  ? 'text-brand-error' 
                  : 'text-slate-400'
              }`} 
            />
            <p className="text-xs text-slate-500 text-center px-2 font-medium">
              {uploadText}
            </p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tif,.tiff"
              onChange={handleChange}
              className="hidden"
              aria-label={label}
            />
          </label>
          
          {displayError && (
            <div className="flex items-center gap-2 mt-2 text-brand-error text-sm" role="alert">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{displayError}</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}
