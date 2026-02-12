import { forwardRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/utils/cn'
import { AlertCircle } from 'lucide-react'

interface FormInputProps extends React.ComponentProps<'input'> {
  label: string
  error?: string
  optional?: string
  inputClassName?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, optional, className, inputClassName, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className={cn('space-y-2', className)}>
        <Label htmlFor={inputId} className="text-sm font-medium text-[var(--brand-text)]">
          {label}
          {props.required && <span className="text-[var(--brand-error)] ml-1">*</span>}
          {optional && (
            <span className="text-slate-400 font-normal ml-1">({optional})</span>
          )}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          className={cn(
            'form-input',
            error && 'border-[var(--brand-error)] focus-visible:ring-[var(--brand-error)]',
            inputClassName
          )}
          {...props}
        />
        {error && (
          <div className="form-error-inline-tight">
            <AlertCircle className="form-error-icon" />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }
)
FormInput.displayName = 'FormInput'

export { FormInput }
