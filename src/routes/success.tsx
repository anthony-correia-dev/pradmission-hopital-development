import { createFileRoute } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { CheckCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { successTranslations } from '@/locales/success'
import type { WizardFormData } from '@/types/form'

function SuccessPage() {
  const { watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const t = successTranslations[language]

  return (
    <div className="step-page-centered">
      <div className="step-container-sm">
        <div className="step-card">
          <div className="step-card-header">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border-4 border-[var(--brand-text)] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-[var(--brand-success)]" />
              </div>
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.message}</p>
          </div>
          <div className="step-card-content">
            <Button
              asChild
              className="w-full h-12 text-base active-scale"
            >
              <a href={t.link} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" />
                {t.button}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})
