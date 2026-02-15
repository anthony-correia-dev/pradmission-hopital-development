import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { LoadingScreen } from '@/components'
import { TIMINGS } from '@/constants/ui'

function LoadingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      void navigate({ to: '/admin' })
    }, TIMINGS.LOADING_DURATION_MS)

    return () => clearTimeout(timer)
  }, [navigate])

  return <LoadingScreen />
}

export const Route = createFileRoute('/loading')({
  component: LoadingPage,
})
