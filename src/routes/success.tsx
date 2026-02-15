import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { CheckCircle, MapPin } from 'lucide-react'
import { VStack, Button, H1, P } from '@/components/ui'

function SuccessPage() {
  const { t } = useTranslation('success')

  return (
    <div className="step-card">
      <VStack className="step-card-header" align='center' gap='6'>
        <CheckCircle className="w-16 h-16 text-[var(--brand-success)]" />
        <VStack gap='1' align='center'>
          <H1 color='primary'>{t('title')}</H1>
          <p className="step-subtitle">{t('message')}</p>
        </VStack>
      </VStack>
      <VStack className="step-card-content">
        <Button
          asChild
          className="w-full h-12 text-base active-scale"
        >
          <a href={t('link')} target="_blank" rel="noopener noreferrer">
           <P color='white'> <MapPin className="w-4 h-4 mr-2" /> </P>
            <P color='white'>
              {t('button')}
            </P>
          </a>
        </Button>
      </VStack>
    </div>
  )
}

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})
