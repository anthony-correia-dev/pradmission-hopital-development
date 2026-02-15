import './i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { routeTree } from './routeTree.gen'
import './main.css'

const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function ErrorFallback({ error }: { error: Error }) {
  const { t } = useTranslation('errorFallback')

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">
          {t('title')}
        </h1>
        <p className="text-slate-600">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-md cursor-pointer"
        >
          {t('reload')}
        </button>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  )
}
