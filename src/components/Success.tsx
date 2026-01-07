import { Check } from 'lucide-react'
import { Button } from './ui/button'
import { successTranslations } from '@/locales'

interface SuccessProps {
  language: 'fr' | 'en'
  onRestart: () => void
}

export function Success({ language }: SuccessProps) {
  const t = successTranslations[language]

  const handleVisitWebsite = () => {
    window.open(t.link, '_blank')
  }

  return (
    <div className="min-h-screen py-4 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sm:p-8 relative z-10">
          <div className="text-center">
            <div className="w-32 h-32 border-4 border-brand-text rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-16 h-16 text-brand-text" strokeWidth={3} />
            </div>

            <h1 className="text-2xl font-bold text-brand-text mb-4">
              {t.title}
            </h1>

            <p className="text-base text-brand-text mb-8 max-w-xl mx-auto leading-relaxed">
              {t.message}
            </p>

            <Button
              onClick={handleVisitWebsite}
              size="lg"
              className="w-full max-w-md mx-auto h-14 px-8 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full hover:scale-[1.02] active:scale-98 transition-all"
            >
              {t.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
