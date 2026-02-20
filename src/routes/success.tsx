import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { m } from 'motion/react'
import { Check, CheckCircle, MapPin } from 'lucide-react'
import { VStack, Button, H1, P } from '@/components/ui'
import { getAnimationVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

function SuccessPage() {
  const { t } = useTranslation('success')

  const container = getAnimationVariants(staggerContainerVariants)
  const item = getAnimationVariants(staggerItemVariants)

  return (
    <m.div className="step-card" variants={container} initial="hidden" animate="visible">
      <VStack className="step-card-header" align='center' gap='6'>
        <m.div variants={item}>
          <div className='p-4 border-4 border-[var(--brand-success)] rounded-full'>
            <Check className="w-16 h-16 text-[var(--brand-success)]" />
          </div>
        </m.div>
        <m.div variants={item}>
          <VStack gap='1' align='center'>
            <H1 color='primary' className='text-center!' style={{fontSize:'24px'}}>{t('title')}</H1>
            <p className="step-subtitle">{t('message')}</p>
          </VStack>
        </m.div>
      </VStack>
      <VStack className="step-card-content">
        <m.div variants={item}>
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
        </m.div>
      </VStack>
    </m.div>
  )
}

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})
