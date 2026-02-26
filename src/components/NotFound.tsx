import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SearchX, ArrowLeft } from 'lucide-react'
import { VStack, HStack, H1, P, Button } from '@/components/ui'
import logoHlt from '@/assets/images/logo-hlt.png'

export function NotFound() {
  const navigate = useNavigate()
  const { t } = useTranslation('notFound')

  return (
    <div className="step-card">
      <VStack className="step-card-header" gap="6">
        <HStack justify="center" className="mb-6">
          <img src={logoHlt} alt="Hôpital de La Tour" className="h-16" width="122" height="64" />
        </HStack>

        <VStack gap="2">
          <HStack gap="2" align="center" justify="center">
            <SearchX className="w-6 h-6 text-slate-400 flex-shrink-0" />
            <H1>{t('title')}</H1>
          </HStack>
          <P color="muted" className="text-center text-base leading-relaxed">
            {t('message')}
          </P>
        </VStack>

        <Button
          onClick={() => void navigate({ to: '/' })}
          className="w-full h-12 text-base active-scale hover:bg-[var(--brand-primary-hover)]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('button')}
        </Button>
      </VStack>
    </div>
  )
}
