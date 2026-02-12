import { createRootRoute, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { wizardSchema } from '@/schemas/wizard'
import { ProgressIndicator } from '@/components/ProgressIndicator'
import { InvalidLink } from '@/components/InvalidLink'
import { ValidationLoadingScreen } from '@/components/ValidationLoadingScreen'
import { useApi } from '@/hooks/useApi'
import type { WizardFormData } from '@/types/form'
import { DEFAULT_FORM_DATA } from '@/types/form'
import { z } from 'zod'

const searchSchema = z.object({
  preadmissionId: z.string().optional().catch(undefined),
})

const PROGRESS_STEPS = ['qualification', 'admin', 'success']
const STORAGE_KEY = 'wizard-form-data'

function extractPreadmissionId(): string {
  // Try search params
  const searchParams = new URLSearchParams(window.location.search)
  const fromSearch = searchParams.get('preadmissionId')
  if (fromSearch) return fromSearch

  // Try hash params
  const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
  const fromHash = hashParams.get('preadmissionId')
  if (fromHash) return fromHash

  // Regex fallback
  const match = window.location.href.match(/preadmissionId=([^&]+)/)
  return match?.[1] ?? ''
}

function RootComponent() {
  const location = useLocation()
  const navigate = useNavigate()
  const api = useApi()

  const [linkState, setLinkState] = useState<'validating' | 'valid' | 'invalid'>('validating')
  const preadmissionId = useRef(extractPreadmissionId())
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // Detect browser language
  const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en'

  // Load saved form data from sessionStorage
  const savedData = (() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return null
      const parsed = JSON.parse(raw) as Partial<WizardFormData>
      // Never restore File objects
      return {
        ...parsed,
        identityCard: null,
        insuranceCard: null,
      }
    } catch {
      return null
    }
  })()

  const rhfMethods = useForm<WizardFormData>({
    resolver: zodResolver(wizardSchema),
    defaultValues: {
      ...DEFAULT_FORM_DATA,
      ...savedData,
      language: savedData?.language ?? (browserLang as 'fr' | 'en'),
      preadmissionId: preadmissionId.current,
    },
    mode: 'onSubmit',
  })

  const language = rhfMethods.watch('language')
  const currentPath = location.pathname.replace('/', '') || 'landing'
  const showProgress = PROGRESS_STEPS.includes(currentPath)

  // Validate preadmission link on mount
  useEffect(() => {
    const id = preadmissionId.current
    if (!id) {
      setLinkState('invalid')
      return
    }

    const timer = setTimeout(async () => {
      try {
        const result = await api.validatePreadmissionLink(id)
        setLinkState(result.isValid ? 'valid' : 'invalid')
      } catch {
        setLinkState('invalid')
      }
    }, 2000) // Wait 2s for Power Pages initialization

    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Autosave form data to sessionStorage
  useEffect(() => {
    const subscription = rhfMethods.watch((data) => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => {
        const toSave = { ...data, identityCard: null, insuranceCard: null }
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
      }, 400)
    })
    return () => subscription.unsubscribe()
  }, [rhfMethods])

  // Scroll to top and report step on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const step = currentPath === '' ? 'landing' : currentPath
    if (step !== 'loading' && linkState === 'valid') {
      api.setStep(preadmissionId.current, step).catch(() => {})
    }
  }, [currentPath, linkState]) // eslint-disable-line react-hooks/exhaustive-deps

  // Redirect to root if no preadmissionId
  useEffect(() => {
    if (!preadmissionId.current && location.pathname !== '/') {
      void navigate({ to: '/' })
    }
  }, [location.pathname, navigate])

  if (linkState === 'validating') {
    return <ValidationLoadingScreen />
  }

  if (linkState === 'invalid') {
    return <InvalidLink />
  }

  return (
    <FormProvider {...rhfMethods}>
      <div
        id="preadmission-app"
        className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100"
      >
        {showProgress && (
          <ProgressIndicator currentStep={currentPath} language={language} />
        )}
        <div style={{ viewTransitionName: 'route-content' }}>
          <Outlet />
        </div>
      </div>
    </FormProvider>
  )
}

export const Route = createRootRoute({
  validateSearch: searchSchema,
  component: RootComponent,
})
