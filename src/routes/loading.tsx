import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import { LoadingScreen } from '@/components/LoadingScreen'
import { TIMINGS } from '@/constants/ui'
import type { WizardFormData } from '@/types/form'

function LoadingPage() {
  const navigate = useNavigate()
  const { watch } = useFormContext<WizardFormData>()
  const language = watch('language')

  useEffect(() => {
    const timer = setTimeout(() => {
      void navigate({ to: '/admin' })
    }, TIMINGS.LOADING_DURATION_MS)

    return () => clearTimeout(timer)
  }, [navigate])

  return <LoadingScreen language={language} />
}

export const Route = createFileRoute('/loading')({
  component: LoadingPage,
})
