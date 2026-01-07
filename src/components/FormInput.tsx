import { forwardRef, InputHTMLAttributes } from 'react'
import { AlertCircle } from 'lucide-react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
  optionalText?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, required, optionalText, className = '', ...props }, ref) => {
    return (
      <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-brand-text mb-2">
          {label}{' '}
          {required ? (
            <span className="text-brand-error">*</span>
          ) : optionalText ? (
            <span className="text-slate-500 text-xs">({optionalText})</span>
          ) : null}
        </label>
        <input
          ref={ref}
          className={`w-full h-12 px-4 rounded-md border transition-all ${
            error
              ? 'border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent'
              : 'border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent'
          } ${className}`}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'
