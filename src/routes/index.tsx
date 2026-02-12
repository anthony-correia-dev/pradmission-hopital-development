import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { Globe, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { landingTranslations } from '@/locales/landing'
import type { WizardFormData } from '@/types/form'
import type { Language } from '@/types/form'
import logoHlt from '@/assets/images/logo-hlt.png'

function LandingPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const t = landingTranslations[language]

  return (
    <div className="step-page-centered">
      <div className="step-container-sm">
        <div className="step-card">
          <div className="step-card-header">
            <div className="flex justify-end mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <select
                  value={language}
                  onChange={(e) => setValue('language', e.target.value as Language)}
                  className="text-sm border-none bg-transparent cursor-pointer focus:outline-none"
                >
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <img src={logoHlt} alt="Hôpital de La Tour" className="h-12" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.subtitle}</p>
          </div>
          <div className="step-card-content">
            <Button
              onClick={() => void navigate({ to: '/security' })}
              className="w-full h-12 text-base active-scale"
            >
              {t.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: LandingPage,
})
