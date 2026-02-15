import { forwardRef, useState } from 'react'
import { Upload, Loader2, CheckCircle, X, AlertCircle } from 'lucide-react'
import { ACCEPTED_FILE_EXTENSIONS } from '@/constants/validation'

interface FileUploadZoneProps {
  file: File | null
  isProcessing: boolean
  onFileSelect: (file: File) => void
  onRemove: () => void
  label: string
  uploadText: string
  uploadFormats?: string
  processingText?: string
  error?: string
  warning?: string
  required?: boolean
  optional?: string
}

const FileUploadZone = forwardRef<HTMLDivElement, FileUploadZoneProps>(
  ({ file, isProcessing, onFileSelect, onRemove, label, uploadText, uploadFormats, processingText, error, warning, required, optional }, ref) => {
    const [isDragOver, setIsDragOver] = useState(false)

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!isProcessing) setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)
      if (isProcessing) return
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile) onFileSelect(droppedFile)
    }

    return (
      <div ref={ref} className="space-y-2">
        <label className="text-sm font-medium text-[var(--brand-text)]">
          {label} {required && <span className="text-[var(--brand-error)]">*</span>}
          {optional && <span className="text-slate-500 text-xs ml-2">({optional})</span>}
        </label>
        {file ? (
          <div className="h-36 rounded-lg border-2 border-[var(--brand-success)] bg-emerald-50 p-4 flex flex-col items-center justify-center relative shadow-sm">
            <button
              type="button"
              onClick={onRemove}
              className="absolute top-2 right-2 hover:scale-110 transition-transform cursor-pointer"
              aria-label="Supprimer le fichier"
            >
              <X className="w-4 h-4 text-slate-600 hover:text-[var(--brand-error)]" />
            </button>
            <CheckCircle className="w-8 h-8 text-[var(--brand-success)] mb-2" />
            <p className="text-xs text-[var(--brand-success)] font-semibold text-center px-2 truncate max-w-full">
              {file.name}
            </p>
          </div>
        ) : (
          <label
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`h-36 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:scale-[1.02] ${
              isDragOver
                ? 'border-[var(--brand-primary)] bg-sky-50'
                : 'border-slate-200 hover:border-[var(--brand-primary)] hover:bg-sky-50/50'
            }`}
          >
            {isProcessing ? (
              <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
            ) : (
              <Upload className="w-8 h-8 text-slate-400" />
            )}
            <span className="text-sm text-slate-600">
              {isProcessing ? processingText : uploadText}
            </span>
            <span className="text-xs text-slate-400">{uploadFormats}</span>
            <input
              type="file"
              accept={ACCEPTED_FILE_EXTENSIONS}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) onFileSelect(file)
              }}
              className="hidden"
              disabled={isProcessing}
            />
          </label>
        )}
        {error && (
          <div className="form-error-inline-tight">
            <AlertCircle className="form-error-icon" />
            <span>{error}</span>
          </div>
        )}
        {warning && !error && (
          <div className="flex items-center gap-2 text-amber-600 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{warning}</span>
          </div>
        )}
      </div>
    )
  }
)
FileUploadZone.displayName = 'FileUploadZone'

export { FileUploadZone }
