import { Loader2 } from 'lucide-react'

const message = navigator.language.startsWith('fr')
  ? 'Chargement...'
  : 'Loading...'

export function ValidationLoadingScreen() {
  return (
    <div className="step-page-centered">
      <div className="step-container-sm text-center">
        <Loader2 className="w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4" />
        <p className="text-slate-600">{message}</p>
      </div>
    </div>
  )
}
