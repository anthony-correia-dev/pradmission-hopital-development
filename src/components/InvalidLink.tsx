/**
 * Composant InvalidLink - Page d'erreur pour lien invalide/expiré
 * @module components/InvalidLink
 */

import { XCircle, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { invalidLinkTranslations } from '@/locales'
import logoHlt from '@/assets/images/logo-hlt.png'

interface InvalidLinkProps {
  language: 'fr' | 'en'
  onLanguageChange: (lang: 'fr' | 'en') => void
}

export function InvalidLink({ language, onLanguageChange }: InvalidLinkProps) {
  const t = invalidLinkTranslations[language]

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="mx-auto mb-6 flex items-center justify-center">
              <img src={logoHlt} alt="Hôpital La Tour" className="h-16 w-auto" />
            </div>
          </div>

          {/* Language selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <Globe className="w-4 h-4 text-brand-primary" />
                {t.selectLanguage}
              </label>
              <Select value={language} onValueChange={(value) => onLanguageChange(value as 'fr' | 'en')}>
                <SelectTrigger className="h-12 w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Titre avec icône d'erreur */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-brand-error flex-shrink-0" />
              <h1 className="text-2xl font-bold text-brand-text">{t.title}</h1>
            </div>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              {t.message}
            </p>
            <p className="text-sm text-slate-500">
              {t.contact}
            </p>
          </div>

          {/* Email Button */}
          <Button
            variant="outline"
            asChild
            className="w-full h-14 gap-2"
          >
            <a href={t.emailLink}>
              <Mail className="w-4 h-4" />
              {t.emailLabel}: {t.emailAddress}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
