import { Loader2 } from 'lucide-react'
import type { Language } from '@/types/form'
import { loadingTranslations } from '@/locales/loading'

interface LoadingScreenProps {
  language: Language
}

export function LoadingScreen({ language }: LoadingScreenProps) {
  const t = loadingTranslations[language]

  return (
    <div className="step-page-centered">
      <div className="step-container-sm text-center">
        <Loader2 className="w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4" />
        <p className="text-slate-600">{t.message}</p>
      </div>
    </div>
  )
}
