import { createRootRoute, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyMotion, domAnimation, AnimatePresence, m } from 'motion/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { wizardSchema } from '@/schemas'
import { ProgressIndicator, InvalidLink, NotFound, LoadingScreen } from '@/components'
import { VStack } from '@/components/ui'
import { useApi } from '@/hooks'
import type { WizardFormData } from '@/types/form'
import { DEFAULT_FORM_DATA } from '@/types/form'
import { detectBrowserLanguage } from '@/utils'
import {
  getDirection,
  getAnimationVariants,
  pageSlideVariants,
  glassBlurVariants,
} from '@/lib/animations'
import { z } from 'zod'
import { Toaster } from 'sonner'

const searchSchema = z.object({
  preadmissionId: z.string().optional().catch(undefined),
})

const PROGRESS_STEPS = ['qualification', 'admin', 'success']
const STORAGE_KEY = 'wizard-form-data'

function extractPreadmissionId(): string {
  // Try search params
  const searchParams = new URLSearchParams(window.location.search)
  const fromSearch = searchParams.get('preadmissionId')
  if (fromSearch) {
    sessionStorage.setItem('preadmissionId', fromSearch)
    return fromSearch
  }

  // Try hash params
  const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
  const fromHash = hashParams.get('preadmissionId')
  if (fromHash) {
    sessionStorage.setItem('preadmissionId', fromHash)
    return fromHash
  }

  // Regex fallback
  const match = window.location.href.match(/preadmissionId=([^&]+)/)
  if (match?.[1]) {
    sessionStorage.setItem('preadmissionId', match[1])
    return match[1]
  }

  // Fallback to sessionStorage (survives HMR reloads)
  return sessionStorage.getItem('preadmissionId') ?? ''
}

type LayoutMode = 'entry-centered' | 'form-scrollable' | 'completion-centered'

const LAYOUT_MODES: Record<string, LayoutMode> = {
  qualification: 'form-scrollable',
  admin: 'form-scrollable',
  success: 'completion-centered',
}

function EntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="step-page-centered" data-layout="entry">
      <div className="step-container-sm mb-32">{children}</div>
    </div>
  )
}

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1" data-layout="form">
      {children}
    </div>
  )
}

function CompletionLayout({ children }: { children: React.ReactNode }) {
  return (
    <VStack grow align="center" justify="center" className="p-4" data-layout="completion">
      <div className="step-container-sm">{children}</div>
    </VStack>
  )
}

const LAYOUTS: Record<LayoutMode, React.FC<{ children: React.ReactNode }>> = {
  'entry-centered': EntryLayout,
  'form-scrollable': FormLayout,
  'completion-centered': CompletionLayout,
}

function RootComponent() {
  const location = useLocation()
  const navigate = useNavigate()
  const api = useApi()

  const [linkState, setLinkState] = useState<'validating' | 'valid' | 'invalid'>('validating')
  const preadmissionId = useRef(extractPreadmissionId())
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

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
      language: savedData?.language ?? detectBrowserLanguage(),
      preadmissionId: preadmissionId.current,
    },
    mode: 'onSubmit',
  })

  const { i18n } = useTranslation()
  const language = rhfMethods.watch('language')
  const currentPath = location.pathname.replace('/', '') || 'landing'
  const showProgress = PROGRESS_STEPS.includes(currentPath)

  // Track navigation direction synchronously (must run during render, not in an effect)
  const prevPathRef = useRef(location.pathname)
  const directionRef = useRef<1 | -1>(1)

  if (prevPathRef.current !== location.pathname) {
    directionRef.current = getDirection(prevPathRef.current, location.pathname)
    prevPathRef.current = location.pathname
  }

  // Track which layout mode is currently displayed (only updates on exit complete)
  const initialLayout = linkState === 'valid' ? (LAYOUT_MODES[currentPath] ?? 'entry-centered') : 'entry-centered'
  const [displayedLayoutMode, setDisplayedLayoutMode] = useState<LayoutMode>(initialLayout)

  // Sync i18next language with form language
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n])

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
    }, 2_000) // Wait 2s for Power Pages initialization

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

  const targetLayoutMode =
    linkState === 'valid'
      ? (LAYOUT_MODES[currentPath] ?? 'entry-centered')
      : 'entry-centered'

  // Use displayedLayoutMode for the wrapper so it doesn't switch during exit animation
  const Layout = LAYOUTS[displayedLayoutMode]

  const content =
    linkState === 'validating' ? <LoadingScreen messageKey="short" />
    : linkState === 'invalid' ? <InvalidLink />
    : <Outlet />

  const direction = directionRef.current
  const useBlur = location.pathname === '/' || location.pathname === '/loading'
  const variants = getAnimationVariants(useBlur ? glassBlurVariants : pageSlideVariants)

  return (
    <LazyMotion features={domAnimation} strict>
      <FormProvider {...rhfMethods}>
        <main
          id="preadmission-app"
          className="min-h-[100dvh] flex flex-col bg-gradient-to-br from-slate-50 via-sky-50 to-slate-200 overflow-x-hidden"
        >
          {showProgress && (
            <ProgressIndicator currentStep={currentPath} />
          )}
          <Layout>
            <AnimatePresence
              mode="wait"
              custom={direction}
              onExitComplete={() => setDisplayedLayoutMode(targetLayoutMode)}
            >
              <m.div
                key={location.pathname}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {content}
              </m.div>
            </AnimatePresence>
          </Layout>
          <Toaster position="top-center" richColors />
        </main>
      </FormProvider>
    </LazyMotion>
  )
}

export const Route = createRootRoute({
  validateSearch: searchSchema,
  component: RootComponent,
  notFoundComponent: NotFound,
})
