import { useState } from 'react'
import { Globe, AlertTriangle, Mail } from 'lucide-react'
import { invalidLinkTranslations } from '@/locales/invalidLink'
import type { Language } from '@/types/form'
import logoHlt from '@/assets/images/logo-hlt.png'

export function InvalidLink() {
  const [language, setLanguage] = useState<Language>(() => {
    const nav = navigator.language
    return nav.startsWith('fr') ? 'fr' : 'en'
  })

  const t = invalidLinkTranslations[language]

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
                  onChange={(e) => setLanguage(e.target.value as Language)}
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
            <div className="step-icon">
              <AlertTriangle className="w-8 h-8 text-[var(--brand-error)]" />
            </div>
            <h1 className="step-title">{t.title}</h1>
            <p className="step-subtitle">{t.message}</p>
          </div>
          <div className="step-card-content">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-[var(--brand-text)]">{t.contact}</p>
              <a
                href={t.emailLink}
                className="inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline"
              >
                <Mail className="w-4 h-4" />
                {t.emailAddress}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
