import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
import "@github/spark/spark"

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'

import "./main.css"

// Intercepteur global pour les erreurs jQuery de Power Platform
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.message?.includes('createDocumentFragment') || 
        event.message?.includes('Cannot read properties of undefined')) {
      console.warn('[Power Platform] Erreur jQuery interceptée:', event.message)
      event.preventDefault()
      event.stopImmediatePropagation()
      return true
    }
  }, true)
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <div id="spark-app">
      <App />
    </div>
  </ErrorBoundary>
)
