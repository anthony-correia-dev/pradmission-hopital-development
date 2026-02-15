import { useTranslation } from 'react-i18next'
import { Loader2 } from 'lucide-react'

export function ValidationLoadingScreen() {
  const { t } = useTranslation('loading')

  return (
    <div className="text-center">
      <Loader2 className="w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4" />
      <p className="text-slate-600">{t('short')}</p>
    </div>
  )
}
