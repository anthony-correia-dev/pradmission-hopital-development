import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { LoadingScreen } from '@/components'
import { TIMINGS } from '@/constants/ui'

function isOcrPending() {
  return (
    sessionStorage.getItem('ocr_pending_identity') === 'true' ||
    sessionStorage.getItem('ocr_pending_insurance') === 'true'
  )
}

function LoadingPage() {
  const navigate = useNavigate()

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
