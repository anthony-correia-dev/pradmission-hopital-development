import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'
import { progressSteps } from '@/locales/progress'
import type { Language } from '@/types/form'

interface ProgressIndicatorProps {
  currentStep: string
  language: Language
}

export function ProgressIndicator({ currentStep, language }: ProgressIndicatorProps) {
  const stepKeys = progressSteps.map((s) => s.key)
  const currentIndex = stepKeys.indexOf(currentStep as typeof stepKeys[number])

  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-md mx-auto py-6">
      {progressSteps.map((step, index) => {
        const isCompleted = currentIndex > index
        const isCurrent = currentIndex === index
        const label = language === 'fr' ? step.labelFr : step.labelEn

        return (
          <div key={step.key} className="flex items-center">
            {index > 0 && (
              <div
                className={cn(
                  'h-0.5 w-8 sm:w-12 transition-colors duration-300',
                  isCompleted ? 'bg-[var(--brand-success)]' : 'bg-slate-200'
                )}
              />
            )}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'flex items-center justify-center rounded-full transition-all duration-300 text-sm font-semibold',
                  isCompleted && 'w-8 h-8 bg-[var(--brand-success)] text-white',
                  isCurrent && 'w-10 h-10 bg-[var(--brand-primary)] text-white scale-110',
                  !isCompleted && !isCurrent && 'w-8 h-8 bg-slate-200 text-slate-500'
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  'text-xs whitespace-nowrap transition-colors',
                  isCurrent ? 'text-[var(--brand-primary)] font-semibold' : 'text-slate-500'
                )}
              >
                {label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
