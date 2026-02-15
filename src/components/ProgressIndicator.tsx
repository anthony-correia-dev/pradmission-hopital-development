import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

const STEPS = ['qualification', 'admin', 'success'] as const

interface ProgressIndicatorProps {
  currentStep: string
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const { t } = useTranslation('progress')
  const currentIndex = STEPS.indexOf(currentStep as (typeof STEPS)[number])

  return (
    <div className="w-full pt-6 pb-4 relative z-20 px-6 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="max-w-md mx-auto px-2">
          <div className="flex items-start justify-between relative px-4">
            {/* Progress line */}
            <div
              className="absolute top-5 h-0.5 bg-slate-200"
              style={{ left: 'calc(16.67% + 4px)', right: 'calc(16.67% + 4px)' }}
            >
              <div
                className="h-full transition-all duration-500 ease-out"
                style={{
                  background: `linear-gradient(to right, var(--brand-primary), var(--brand-primary-hover))`,
                  width: `${(currentIndex / (STEPS.length - 1)) * 100}%`,
                }}
              />
            </div>

            {STEPS.map((step, index) => {
              const isCompleted = index < currentIndex
              const isCurrent = index === currentIndex

              return (
                <div key={step} className="flex flex-col items-center relative z-10 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'text-white scale-100'
                        : isCurrent
                        ? 'text-white scale-110'
                        : 'bg-white border-2 border-slate-200 text-slate-400'
                    }`}
                    style={
                      isCompleted
                        ? { backgroundColor: 'var(--brand-success)' }
                        : isCurrent
                        ? { backgroundColor: 'var(--brand-primary)', boxShadow: '0 10px 15px -3px color-mix(in srgb, var(--brand-primary) 30%, transparent)' }
                        : undefined
                    }
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" strokeWidth={3} />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-3 text-xs sm:text-sm text-center transition-all leading-tight max-w-[90px] ${
                      isCurrent
                        ? 'font-bold'
                        : isCompleted
                        ? 'font-medium'
                        : 'text-slate-500 font-medium'
                    }`}
                    style={
                      isCurrent
                        ? { color: 'var(--brand-primary)' }
                        : isCompleted
                        ? { color: 'var(--brand-success)' }
                        : undefined
                    }
                  >
                    {t(step)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
