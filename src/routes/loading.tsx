import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { LoadingScreen } from '@/components'
import { TIMINGS } from '@/constants/ui'

function LoadingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    let cancelled = false

    const timer = setTimeout(() => {
      if (cancelled) return
      sessionStorage.setItem('ocr_completed', 'true')
      void navigate({ to: '/admin' })
    }, TIMINGS.LOADING_MIN_DISPLAY_MS)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <LoadingScreen />
}

export const Route = createFileRoute('/loading')({
  component: LoadingPage,
})
