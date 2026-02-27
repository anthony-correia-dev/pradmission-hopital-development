import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { LoadingScreen } from '@/components'
import { TIMINGS } from '@/constants/ui'
import type { WizardFormData } from '@/types/form'

function isOcrPending() {
  return (
    sessionStorage.getItem('ocr_pending_identity') === 'true' ||
    sessionStorage.getItem('ocr_pending_insurance') === 'true'
  )
}

function LoadingPage() {
  const navigate = useNavigate()
  const { watch } = useFormContext<WizardFormData>()

  useEffect(() => {
    let cancelled = false
    const startTime = Date.now()

    function poll() {
      if (cancelled) return
      const elapsed = Date.now() - startTime

      // Always show loading for at least the minimum display time
      if (elapsed < TIMINGS.LOADING_MIN_DISPLAY_MS) {
        setTimeout(poll, 300)
        return
      }

      // If OCR is done or we've waited long enough, navigate
      if (!isOcrPending() || elapsed >= TIMINGS.OCR_TIMEOUT_MS) {
        // Check if insurance OCR returned not_covered
        const cardNumber = watch('cardNumber')
        const insurance = watch('insurance')
        if (cardNumber === 'not_covered' && insurance === 'swiss') {
          sessionStorage.setItem('not_covered_redirect', 'true')
          void navigate({ to: '/qualification' })
          return
        }

        void navigate({ to: '/admin' })
        return
      }

      // Keep polling
      setTimeout(poll, 300)
    }

    poll()

    return () => {
      cancelled = true
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <LoadingScreen />
}

export const Route = createFileRoute('/loading')({
  component: LoadingPage,
})
