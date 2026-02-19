import { useTranslation } from 'react-i18next'
import { Loader2 } from 'lucide-react'
import { P, VStack } from './ui'

export function LoadingScreen({ messageKey = 'message' }: { messageKey?: string }) {
  const { t } = useTranslation('loading')

  return (
    <VStack align='center'>
      <Loader2 className="w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4" />
      <P color='muted' className='max-w-max !ms-2'>{t(messageKey)}</P>
    </VStack>
  )
}
