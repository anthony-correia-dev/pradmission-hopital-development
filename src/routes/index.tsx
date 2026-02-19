import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { m } from 'motion/react'
import { Globe, ArrowRight } from 'lucide-react'
import { HStack, VStack, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, H1, P } from '@/components/ui'
import { getAnimationVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations'
import type { WizardFormData, Language } from '@/types/form'
import logoHlt from '@/assets/images/logo-hlt.png'

function LandingPage() {
  const navigate = useNavigate()
  const { setValue, watch } = useFormContext<WizardFormData>()
  const language = watch('language')
  const { t } = useTranslation('landing')

  const container = getAnimationVariants(staggerContainerVariants)
  const item = getAnimationVariants(staggerItemVariants)

  return (
        <m.div className="step-card" variants={container} initial="hidden" animate="visible">
          <VStack className="step-card-header">
            <m.div variants={item}>
              <HStack justify="center" className="mb-8">
                <img src={logoHlt} alt="Hôpital de La Tour" className="h-16" width="122" height="64" />
              </HStack>
            </m.div>

            <m.div variants={item}>
              <HStack justify="between" className="mb-10">
                <HStack className="gap-2.5">
                  <Globe className="w-4 h-4 text-[var(--brand-primary)]" />
                  <span className="text-sm text-slate-500 leading-none">{t('chooseLanguage')}</span>
                </HStack>
                <Select
                  value={language}
                  onValueChange={(v) => setValue('language', v as Language)}
                >
                  <SelectTrigger className="w-[130px] h-9 text-sm" aria-label={t('chooseLanguage')}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </HStack>
            </m.div>

            <m.div variants={item}>
              <VStack align="center" className="text-center gap-3">
                <H1>{t('title')}</H1>
               <VStack className="gap-1.5">
                 <p className="step-subtitle !text-base">{t('subtitle')}</p>
                <p className="text-sm text-slate-500 text-center">{t('confidentiality')}</p>
               </VStack>
              </VStack>
            </m.div>
          </VStack>
          <VStack className="step-card-content">
            <m.div variants={item}>
              <Button
                onClick={() => void navigate({ to: '/security' })}
                className="w-full h-12 text-base active-scale hover:bg-[var(--brand-primary-hover)]"
              >
                {t('button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </m.div>

            <m.div variants={item}>
              <HStack justify="between" className="gap-8 mt-6 text-xs text-slate-500 mx-4">
                <HStack className="gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <P size='xs' color='muted'>{t('badgeProtected')}</P>
                </HStack>
                <HStack className="gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)]" />
                  <P size='xs' color='muted'>{t('badgeTime')}</P>
                </HStack>
              </HStack>
            </m.div>
          </VStack>
        </m.div>
  )
}

export const Route = createFileRoute('/')({
  component: LandingPage,
})
