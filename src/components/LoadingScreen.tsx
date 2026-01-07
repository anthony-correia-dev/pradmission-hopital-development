import { Loader2 } from 'lucide-react'
import { loadingTranslations } from '@/locales'

interface LoadingScreenProps {
  language: 'fr' | 'en'
}

export function LoadingScreen({ language }: LoadingScreenProps) {
  const t = loadingTranslations[language]

  return (
    <div className="min-h-screen flex items-start justify-center px-4" style={{ paddingTop: '40vh' }}>
      <div className="w-full max-w-md mx-auto -translate-y-1/2">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-12 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 bg-brand-primary/10 rounded-xl flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
            </div>
            <p className="text-lg text-center text-slate-700 font-medium">
              {t.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
