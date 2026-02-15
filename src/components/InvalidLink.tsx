import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Globe, Mail, XCircle } from 'lucide-react'
import { HStack, VStack, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, H1, P, Button } from '@/components/ui'
import type { WizardFormData, Language } from '@/types/form'
import logoHlt from '@/assets/images/logo-hlt.png'

export function InvalidLink() {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const { t } = useTranslation('invalidLink')

  return (
    <div className="step-card">
      <VStack className="step-card-header" gap='6'>

        <HStack justify="center" className="mb-6">
          <img src={logoHlt} alt="Hôpital de La Tour" className="h-16" />
        </HStack>

        <HStack justify="between" className="gap-2 mb-4">
          <HStack gap='1'>
            <Globe className="w-4 h-4 text-[var(--brand-primary)]" />
            <P>{t('selectLanguage')}</P>
          </HStack>
          <Select
            value={language}
            onValueChange={(v) => setValue('language', v as Language)}
          >
            <SelectTrigger className="w-[140px] text-sm py-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </HStack>

        <VStack gap='2'>
          <HStack gap="2" align='center' justify='center'>
            <XCircle className="w-6 h-6 text-error flex-shrink-0" />
            <H1>{t('title')}</H1>
          </HStack>

          <VStack gap='1'>
            <P color='muted' className='text-center text-base leading-relaxed'>{t('message')}</P>
            <P color='muted-light' className="text-sm text-center">{t('contact')}</P>
          </VStack>
        </VStack>

       <Button
            variant="outline"
            asChild
            className="w-full h-14 gap-2"
          >
            <a href={t('emailLink')}>
              <Mail className="w-4 h-4" />
              {t('emailLabel')}: {t('emailAddress')}
            </a>
          </Button>
      </VStack>
    </div>
  )
}
