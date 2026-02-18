import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { LoadingScreen } from '@/components'
import { useApi } from '@/hooks'
import { TIMINGS } from '@/constants/ui'
import type { WizardFormData } from '@/types/form'
import type { MappedIdentityData, MappedInsuranceData } from '@/types/api'

function LoadingPage() {
  const navigate = useNavigate()
  const { setValue, getValues } = useFormContext<WizardFormData>()
  const api = useApi()

  useEffect(() => {
    let cancelled = false

    const startTime = Date.now()
    let timedOut = false

    const {
      identityCardBase64,
      insuranceCardBase64,
      insurance,
    } = getValues()

    // Build OCR calls for available documents
    const ocrCalls: Promise<{ type: 'identity' | 'insurance'; data: MappedIdentityData | MappedInsuranceData }>[] = []

    if (identityCardBase64) {
      console.log('[OCR] Fetching identity document...')
      ocrCalls.push(
        api.extractDocumentData(identityCardBase64, 'identity')
          .then(data => {
            console.log('[OCR] Identity document result:', data)
            return { type: 'identity' as const, data }
          })
          .catch(err => {
            console.error('[OCR] Identity document failed:', err)
            throw err
          })
      )
    }
    if (insuranceCardBase64) {
      console.log('[OCR] Fetching insurance document...')
      ocrCalls.push(
        api.extractDocumentData(insuranceCardBase64, 'insurance')
          .then(data => {
            console.log('[OCR] Insurance document result:', data)
            return { type: 'insurance' as const, data }
          })
          .catch(err => {
            console.error('[OCR] Insurance document failed:', err)
            throw err
          })
      )
    }

    // Race: OCR calls vs timeout
    const timeoutPromise = new Promise<'timeout'>((resolve) => {
      setTimeout(() => {
        timedOut = true
        resolve('timeout')
      }, TIMINGS.OCR_TIMEOUT_MS)
    })

    async function processOcr() {
      let ocrResults: PromiseSettledResult<{ type: 'identity' | 'insurance'; data: MappedIdentityData | MappedInsuranceData }>[] = []

      if (ocrCalls.length > 0) {
        const raceResult = await Promise.race([
          Promise.allSettled(ocrCalls).then(results => ({ kind: 'results' as const, results })),
          timeoutPromise.then(() => ({ kind: 'timeout' as const })),
        ])

        if (raceResult.kind === 'results') {
          console.log('[OCR] All documents processed')
          ocrResults = raceResult.results
        } else {
          console.warn('[OCR] Timeout reached, proceeding without OCR results')
        }
      }

      if (cancelled) return

      // Apply OCR results to form
      let notCovered = false
      for (const result of ocrResults) {
        if (result.status !== 'fulfilled') continue
        const { type, data } = result.value

        if (type === 'identity') {
          const d = data as MappedIdentityData
          if (d.lastName) setValue('lastName', d.lastName)
          if (d.firstName) setValue('firstName', d.firstName)
          if (d.gender) setValue('gender', d.gender)
          if (d.nationality) setValue('nationality', d.nationality)
        } else {
          const d = data as MappedInsuranceData
          // Check not_covered before applying
          if (d.kvgCardNumber === 'not_covered' && insurance === 'swiss') {
            notCovered = true
            continue
          }
          if (d.street) setValue('street', d.street)
          if (d.city) setValue('city', d.city)
          if (d.zipCode) setValue('npa', d.zipCode)
          if (d.country) setValue('country', d.country)
          if (d.avsNumber) setValue('avsNumber', d.avsNumber)
          if (d.kvgCardNumber) setValue('cardNumber', d.kvgCardNumber)
          if (d.kvgInsuranceName) setValue('basicInsurance', d.kvgInsuranceName)
          if (d.vvgCardNumber) setValue('complementaryInsurance', d.vvgCardNumber)
        }
      }

      // Ensure minimum display time for UX
      const elapsed = Date.now() - startTime
      const remaining = TIMINGS.LOADING_MIN_DISPLAY_MS - elapsed
      if (remaining > 0) {
        await new Promise(resolve => setTimeout(resolve, remaining))
      }

      if (cancelled) return

      // Handle not_covered: redirect back to qualification
      if (notCovered) {
        setValue('insuranceCard', null)
        setValue('insuranceCardBase64', '')
        setValue('insuranceCardMimeType', '')
        setValue('insuranceCardError', 'notCovered')
        void navigate({ to: '/qualification' })
        return
      }

      // Handle timeout: set flag for admin banner
      if (timedOut) {
        setValue('ocrTimedOut', true)
      }

      // Flag for admin page to show OCR info toast
      sessionStorage.setItem('ocr_completed', 'true')
      void navigate({ to: '/admin' })
    }

    void processOcr()

    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <LoadingScreen />
}

export const Route = createFileRoute('/loading')({
  component: LoadingPage,
})
