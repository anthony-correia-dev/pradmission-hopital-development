import { Check } from 'lucide-react'
import { WizardStep } from '../hooks/useWizard'
import { progressSteps } from '@/locales'

interface ProgressIndicatorProps {
  currentStep: WizardStep
  language: 'fr' | 'en'
}

export function ProgressIndicator({ currentStep, language }: ProgressIndicatorProps) {
  const currentIndex = progressSteps.findIndex(s => s.key === currentStep)

  return (
    <div className="w-full pt-6 pb-4 relative z-20 px-6 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="max-w-md mx-auto px-2">
          <div className="flex items-start justify-between relative px-4">
            <div className="absolute top-5 h-0.5 bg-slate-200" style={{ left: 'calc(16.67% + 4px)', right: 'calc(16.67% + 4px)' }}>
              <div 
                className="h-full bg-gradient-to-r from-brand-primary to-brand-primary-hover transition-all duration-500 ease-out"
                style={{ width: `${(currentIndex / (progressSteps.length - 1)) * 100}%` }}
              />
            </div>

            {progressSteps.map((step, index) => {
              const isCompleted = index < currentIndex
              const isCurrent = index === currentIndex
              const label = language === 'fr' ? step.labelFr : step.labelEn

              return (
                <div key={step.key} className="flex flex-col items-center relative z-10 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'bg-brand-success text-white scale-100'
                        : isCurrent
                        ? 'bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/30'
                        : 'bg-white border-2 border-slate-200 text-slate-400'
                    }`}
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
                        ? 'text-brand-primary font-bold' 
                        : isCompleted 
                        ? 'text-brand-success font-medium' 
                        : 'text-slate-500 font-medium'
                    }`}
                  >
                    {label}
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
